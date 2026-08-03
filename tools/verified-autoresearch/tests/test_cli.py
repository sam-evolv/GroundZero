import json
from pathlib import Path

import pytest
from test_runner import TestExecutor, git, make_sandbox

from verified_autoresearch.cli import main


def test_verify_command_checks_sandbox_and_baseline(tmp_path: Path, capsys) -> None:
    root, config = make_sandbox(tmp_path)
    raw = {
        "workspace": str(root), "model": config.model, "ollama_url": config.ollama_url,
        "container_image": config.container_image,
        "objective": config.objective, "allowed_globs": list(config.allowed_globs),
        "protected_globs": list(config.protected_globs),
        "evaluator": list(config.evaluator), "guards": [list(v) for v in config.guards],
        "max_iterations": config.max_iterations, "max_minutes": config.max_minutes,
        "command_timeout_seconds": config.command_timeout_seconds,
        "min_delta": config.min_delta, "max_files": config.max_files,
        "max_edit_bytes": config.max_edit_bytes,
    }
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(raw), encoding="utf-8")
    assert main(["verify", str(path)], executor=TestExecutor(root)) == 0
    output = json.loads(capsys.readouterr().out)
    assert output["baseline_metric"] == 1
    assert output["branch"] == "autoresearch/pilot"


def test_verify_rejects_git_filter_before_status_executes_it(tmp_path: Path) -> None:
    root, config = make_sandbox(tmp_path)
    sentinel = tmp_path / "cli-filter-ran"
    (root / ".gitattributes").write_text("evaluate.py filter=evil\n", encoding="utf-8")
    git(root, "add", ".gitattributes")
    git(root, "commit", "-m", "configure filter")
    git(root, "config", "filter.evil.clean", f"touch '{sentinel}' && cat")
    raw = {
        "workspace": str(root), "model": config.model, "ollama_url": config.ollama_url,
        "container_image": config.container_image,
        "objective": config.objective, "allowed_globs": list(config.allowed_globs),
        "protected_globs": list(config.protected_globs),
        "evaluator": list(config.evaluator), "guards": [list(value) for value in config.guards],
        "max_iterations": config.max_iterations, "max_minutes": config.max_minutes,
        "command_timeout_seconds": config.command_timeout_seconds,
        "min_delta": config.min_delta, "max_files": config.max_files,
        "max_edit_bytes": config.max_edit_bytes,
    }
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(raw), encoding="utf-8")

    with pytest.raises(RuntimeError, match="Git filter"):
        main(["verify", str(path)], executor=TestExecutor(root))

    assert not sentinel.exists()
