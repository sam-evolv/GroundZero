import json
import subprocess
import sys
from pathlib import Path

import pytest
from test_runner import FakeModel, TestExecutor, git, make_sandbox

from verified_autoresearch.runner import run_iteration
from verified_autoresearch.state import workspace_state


def test_second_controller_fails_while_workspace_is_locked(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)

    with workspace_state(config):
        with pytest.raises(RuntimeError, match="already locked"):
            run_iteration(config, FakeModel(2), iteration=1, executor=TestExecutor(root))

    assert git(root, "status", "--porcelain") == ""


def test_recovery_rolls_back_commit_missing_durable_ledger_record(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    previous = git(root, "rev-parse", "HEAD")

    with workspace_state(config) as store:
        store.begin(previous, 1, "a" * 64)
        (root / "src" / "score.py").write_text("VALUE = 2\n", encoding="utf-8")
        git(root, "add", "src/score.py")
        git(root, "commit", "-m", "simulated interrupted accept")
        interrupted_commit = git(root, "rev-parse", "HEAD")
        assert interrupted_commit != previous
        # Simulate abrupt termination before the pending transaction receives the
        # commit id and before a durable ledger record is written.

    with workspace_state(config) as store:
        store.recover()

    assert git(root, "rev-parse", "HEAD") == previous
    assert git(root, "status", "--porcelain") == ""
    state_dir = root.parent / f".{root.name}.autoresearch-state"
    assert not (state_dir / "pending.json").exists()


def test_recovery_keeps_commit_with_matching_durable_ledger_record(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    previous = git(root, "rev-parse", "HEAD")

    with workspace_state(config) as store:
        store.begin(previous, 1, "b" * 64)
        (root / "src" / "score.py").write_text("VALUE = 2\n", encoding="utf-8")
        git(root, "add", "src/score.py")
        git(root, "commit", "-m", "simulated durable accept")
        committed = git(root, "rev-parse", "HEAD")
        store.set_commit(committed)
        store.append_result({"status": "accepted", "commit": committed})
        # Simulate termination after the durable ledger replacement but before
        # pending.json is removed.

    with workspace_state(config) as store:
        store.recover()

    assert git(root, "rev-parse", "HEAD") == committed
    assert (root / "src" / "score.py").read_text(encoding="utf-8") == "VALUE = 2\n"
    state_dir = root.parent / f".{root.name}.autoresearch-state"
    assert not (state_dir / "pending.json").exists()


def test_sigkill_recovery_restores_previous_head(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    previous = git(root, "rev-parse", "HEAD")
    raw = {
        "workspace": str(root), "model": config.model, "ollama_url": config.ollama_url,
        "container_image": config.container_image, "objective": config.objective,
        "allowed_globs": list(config.allowed_globs),
        "protected_globs": list(config.protected_globs),
        "evaluator": list(config.evaluator), "guards": [list(value) for value in config.guards],
        "max_iterations": config.max_iterations, "max_minutes": config.max_minutes,
        "command_timeout_seconds": config.command_timeout_seconds,
        "min_delta": config.min_delta, "max_files": config.max_files,
        "max_edit_bytes": config.max_edit_bytes,
    }
    config_path = tmp_path / "experiment.json"
    config_path.write_text(json.dumps(raw), encoding="utf-8")
    script = """
import os
import subprocess
import sys
from pathlib import Path
from verified_autoresearch.config import ExperimentConfig
from verified_autoresearch.state import workspace_state

config = ExperimentConfig.load(Path(sys.argv[1]))
with workspace_state(config) as store:
    previous = subprocess.run(
        ['/usr/bin/git', 'rev-parse', 'HEAD'], cwd=config.workspace,
        check=True, capture_output=True, text=True,
    ).stdout.strip()
    store.begin(previous, 1, 'c' * 64)
    (config.workspace / 'src' / 'score.py').write_text('VALUE = 2\\n', encoding='utf-8')
    subprocess.run(['/usr/bin/git', 'add', 'src/score.py'], cwd=config.workspace, check=True)
    subprocess.run(
        ['/usr/bin/git', '-c', 'core.hooksPath=/dev/null', '-c', 'commit.gpgSign=false',
         'commit', '-m', 'interrupted accept'], cwd=config.workspace, check=True,
        stdout=subprocess.DEVNULL,
    )
    os.kill(os.getpid(), 9)
"""
    child = subprocess.run(
        [sys.executable, "-c", script, str(config_path)],
        check=False,
        capture_output=True,
        text=True,
    )
    assert child.returncode == -9
    assert git(root, "rev-parse", "HEAD") != previous

    with workspace_state(config) as store:
        store.recover()

    assert git(root, "rev-parse", "HEAD") == previous
    assert git(root, "status", "--porcelain") == ""


def test_state_directory_swap_cannot_redirect_ledger_write(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    state_dir = root.parent / f".{root.name}.autoresearch-state"
    pinned_dir = root.parent / "pinned-state-directory"
    outside = root.parent / "outside-state-target"
    outside.mkdir()

    with workspace_state(config) as store:
        state_dir.rename(pinned_dir)
        state_dir.symlink_to(outside, target_is_directory=True)
        store.append_result({"status": "rejected", "commit": None})

    assert not (outside / "ledger.jsonl").exists()
    assert (pinned_dir / "ledger.jsonl").is_file()
