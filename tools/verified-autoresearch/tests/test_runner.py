import json
import subprocess
import sys
from dataclasses import replace
from pathlib import Path
from typing import Sequence

import pytest

import verified_autoresearch.runner as runner_module
from verified_autoresearch.config import ExperimentConfig
from verified_autoresearch.edits import Edit
from verified_autoresearch.proposal import Proposal
from verified_autoresearch.runner import run_iteration


class TestExecutor:
    __test__ = False

    def __init__(self, cwd: Path) -> None:
        self.cwd = cwd

    def run(self, command: Sequence[str], timeout_seconds: int) -> subprocess.CompletedProcess[str]:
        return subprocess.run(
            list(command), cwd=self.cwd, check=False, capture_output=True, text=True,
            timeout=timeout_seconds,
        )


def git(root: Path, *args: str) -> str:
    return subprocess.run(["git", *args], cwd=root, check=True, capture_output=True, text=True).stdout.strip()


def make_sandbox(tmp_path: Path) -> tuple[Path, ExperimentConfig]:
    root = tmp_path / "sandbox"
    root.mkdir()
    git(root, "init")
    git(root, "config", "user.email", "test@example.invalid")
    git(root, "config", "user.name", "Test")
    git(root, "switch", "-c", "autoresearch/pilot")
    (root / "src").mkdir()
    (root / "src" / "score.py").write_text("VALUE = 1\n", encoding="utf-8")
    (root / "evaluate.py").write_text(
        "ns = {}\nexec(open('src/score.py').read(), ns)\n"
        "print(f\"AUTORESEARCH_METRIC={ns['VALUE']}\")\n",
        encoding="utf-8",
    )
    (root / "guard.py").write_text("raise SystemExit(0)\n", encoding="utf-8")
    marker = {"workspace": str(root.resolve()), "version": 1}
    (root / ".verified-autoresearch-sandbox").write_text(json.dumps(marker), encoding="utf-8")
    git(root, "add", ".")
    git(root, "commit", "-m", "seed")
    config = ExperimentConfig(
        workspace=root.resolve(), model="fake", ollama_url="http://127.0.0.1:11434",
        container_image="python@sha256:" + "a" * 64,
        objective="increase score", allowed_globs=("src/*.py",),
        protected_globs=(
            "evaluate.py", "guard.py", ".verified-autoresearch-sandbox", ".git/**",
        ),
        evaluator=(sys.executable, "evaluate.py"), guards=((sys.executable, "guard.py"),),
        max_iterations=2, max_minutes=5, command_timeout_seconds=10, min_delta=0.1,
        max_files=1, max_edit_bytes=1000,
    )
    return root, config


class FakeModel:
    def __init__(self, new_value: int) -> None:
        self.new_value = new_value

    def propose(self, context: str, timeout_seconds: int) -> Proposal:
        assert "src/score.py" in context
        return Proposal(
            hypothesis=f"set value to {self.new_value}",
            edits=(Edit(path="src/score.py", old="VALUE = 1", new=f"VALUE = {self.new_value}"),),
        )


def test_accepts_improvement_and_commits(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    before = git(root, "rev-parse", "HEAD")
    result = run_iteration(config, FakeModel(2), iteration=1, executor=TestExecutor(root))
    assert result.status == "accepted"
    assert result.baseline_metric == 1
    assert result.candidate_metric == 2
    assert result.reproduction_metric == 2
    assert git(root, "rev-parse", "HEAD") != before
    assert (root / "src" / "score.py").read_text() == "VALUE = 2\n"


def test_reverts_non_improvement(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    before = git(root, "rev-parse", "HEAD")
    result = run_iteration(config, FakeModel(0), iteration=1, executor=TestExecutor(root))
    assert result.status == "rejected"
    assert git(root, "rev-parse", "HEAD") == before
    assert (root / "src" / "score.py").read_text() == "VALUE = 1\n"


def test_rejects_attempt_to_edit_evaluator(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)

    class EvaluatorEditModel:
        def propose(self, context: str, timeout_seconds: int) -> Proposal:
            return Proposal(
                hypothesis="game the metric",
                edits=(Edit(path="evaluate.py", old="AUTORESEARCH_METRIC", new="AUTORESEARCH_METRIC"),),
            )

    result = run_iteration(
        config, EvaluatorEditModel(), iteration=1, executor=TestExecutor(root)
    )
    assert result.status == "failed"
    assert "allowlist" in result.error
    assert git(root, "status", "--porcelain") == ""


def test_accepted_commit_does_not_execute_repository_hook(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    sentinel = tmp_path / "hook-ran"
    hook = root / ".git" / "hooks" / "pre-commit"
    hook.write_text(f"#!/bin/sh\ntouch '{sentinel}'\n", encoding="utf-8")
    hook.chmod(0o755)

    result = run_iteration(config, FakeModel(2), iteration=1, executor=TestExecutor(root))

    assert result.status == "accepted"
    assert not sentinel.exists()


def test_rejects_repository_clean_filter_without_executing_it(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    sentinel = tmp_path / "filter-ran"
    (root / ".gitattributes").write_text("src/*.py filter=evil\n", encoding="utf-8")
    git(root, "add", ".gitattributes")
    git(root, "commit", "-m", "configure attributes")
    git(root, "config", "filter.evil.clean", f"touch '{sentinel}' && cat")

    with pytest.raises(RuntimeError, match="Git filter"):
        run_iteration(config, FakeModel(2), iteration=1, executor=TestExecutor(root))

    assert not sentinel.exists()
    assert git(root, "status", "--porcelain") == ""


def test_rejects_git_filter_on_non_allowlisted_tracked_file(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    sentinel = tmp_path / "non-allowlisted-filter-ran"
    (root / ".gitattributes").write_text("evaluate.py filter=evil\n", encoding="utf-8")
    git(root, "add", ".gitattributes")
    git(root, "commit", "-m", "configure protected-file attributes")
    git(root, "config", "filter.evil.clean", f"touch '{sentinel}' && cat")

    with pytest.raises(RuntimeError, match="Git filter"):
        run_iteration(config, FakeModel(2), iteration=1, executor=TestExecutor(root))

    assert not sentinel.exists()


def test_rejects_workspace_change_while_model_is_proposing(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    before = git(root, "rev-parse", "HEAD")

    class RacingModel:
        def propose(self, context: str, timeout_seconds: int) -> Proposal:
            (root / "src" / "score.py").write_text(
                "VALUE = 1\n# concurrent change\n", encoding="utf-8"
            )
            return Proposal(
                hypothesis="race the controller",
                edits=(Edit(path="src/score.py", old="VALUE = 1", new="VALUE = 2"),),
            )

    with pytest.raises(RuntimeError, match="clean"):
        run_iteration(config, RacingModel(), iteration=1, executor=TestExecutor(root))

    assert git(root, "rev-parse", "HEAD") == before
    assert "concurrent change" in (root / "src" / "score.py").read_text(encoding="utf-8")


def test_rejects_untracked_ignored_file_from_model_context(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    (root / ".gitignore").write_text("private/\n", encoding="utf-8")
    git(root, "add", ".gitignore")
    git(root, "commit", "-m", "ignore private files")
    private = root / "private" / "credential.txt"
    private.parent.mkdir()
    private.write_text("must-not-reach-model\n", encoding="utf-8")
    config = replace(config, allowed_globs=("private/*.txt",))

    class MustNotRunModel:
        def propose(self, context: str, timeout_seconds: int) -> Proposal:
            raise AssertionError("untracked context reached model")

    with pytest.raises(RuntimeError, match="tracked regular"):
        run_iteration(config, MustNotRunModel(), iteration=1, executor=TestExecutor(root))


def test_rolls_back_accepted_commit_when_ledger_append_fails(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    root, config = make_sandbox(tmp_path)
    before = git(root, "rev-parse", "HEAD")

    def fail_ledger(*args: object, **kwargs: object) -> None:
        raise RuntimeError("simulated ledger failure")

    monkeypatch.setattr(runner_module, "_append_ledger", fail_ledger)

    with pytest.raises(RuntimeError, match="ledger failure"):
        run_iteration(config, FakeModel(2), iteration=1, executor=TestExecutor(root))

    assert git(root, "rev-parse", "HEAD") == before
    assert git(root, "status", "--porcelain") == ""


def test_rejects_control_plane_change_between_evaluation_snapshots(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)

    class MutatingExecutor(TestExecutor):
        def __init__(self, cwd: Path) -> None:
            super().__init__(cwd)
            self.calls = 0

        def run(
            self, command: Sequence[str], timeout_seconds: int
        ) -> subprocess.CompletedProcess[str]:
            completed = super().run(command, timeout_seconds)
            self.calls += 1
            if self.calls == 2:
                (root / "evaluate.py").write_text(
                    (root / "evaluate.py").read_text(encoding="utf-8")
                    + "# concurrent mutation\n",
                    encoding="utf-8",
                )
            return completed

    result = run_iteration(
        config, FakeModel(2), iteration=1, executor=MutatingExecutor(root)
    )

    assert result.status == "failed"
    assert "immutable evaluation" in (result.error or "")
    assert git(root, "status", "--porcelain") == ""
