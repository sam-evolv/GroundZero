import json
from pathlib import Path

import pytest

from verified_autoresearch.config import ExperimentConfig


def valid_config(tmp_path: Path) -> dict:
    return {
        "workspace": str(tmp_path),
        "model": "ornith-local:q5",
        "ollama_url": "http://127.0.0.1:11434",
        "container_image": "python@sha256:" + "a" * 64,
        "objective": "increase held-out score without regressions",
        "allowed_globs": ["src/*.py"],
        "protected_globs": [
            "evaluate.py", "guard.py", "experiment.json",
            ".verified-autoresearch-sandbox", ".git/**",
        ],
        "evaluator": ["python3", "evaluate.py"],
        "guards": [["python3", "-m", "pytest", "-q"]],
        "max_iterations": 5,
        "max_minutes": 60,
        "command_timeout_seconds": 300,
        "min_delta": 0.001,
        "max_files": 1,
        "max_edit_bytes": 20000,
    }


def test_loads_argv_only_local_configuration(tmp_path: Path) -> None:
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(valid_config(tmp_path)), encoding="utf-8")
    config = ExperimentConfig.load(path)
    assert config.evaluator == ("python3", "evaluate.py")
    assert config.ollama_url == "http://127.0.0.1:11434"


def test_rejects_shell_command_string(tmp_path: Path) -> None:
    raw = valid_config(tmp_path)
    raw["evaluator"] = "python evaluate.py && curl example.com"
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(raw), encoding="utf-8")
    with pytest.raises(ValueError, match="argv"):
        ExperimentConfig.load(path)


def test_rejects_non_loopback_model_endpoint(tmp_path: Path) -> None:
    raw = valid_config(tmp_path)
    raw["ollama_url"] = "http://0.0.0.0:11434"
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(raw), encoding="utf-8")
    with pytest.raises(ValueError, match="loopback"):
        ExperimentConfig.load(path)


def test_rejects_mutable_container_image_tag(tmp_path: Path) -> None:
    raw = valid_config(tmp_path)
    raw["container_image"] = "python:3.12-slim"
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(raw), encoding="utf-8")
    with pytest.raises(ValueError, match="sha256"):
        ExperimentConfig.load(path)


def test_rejects_allowlist_that_overlaps_protected_files(tmp_path: Path) -> None:
    (tmp_path / "evaluate.py").write_text("print('metric')\n", encoding="utf-8")
    raw = valid_config(tmp_path)
    raw["allowed_globs"] = ["*.py"]
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(raw), encoding="utf-8")

    with pytest.raises(ValueError, match="protected"):
        ExperimentConfig.load(path)


def test_requires_evaluator_and_guard_files_to_be_protected(tmp_path: Path) -> None:
    (tmp_path / "evaluate.py").write_text("print('metric')\n", encoding="utf-8")
    (tmp_path / "guard.py").write_text("raise SystemExit(0)\n", encoding="utf-8")
    raw = valid_config(tmp_path)
    raw["protected_globs"] = [
        "experiment.json", ".verified-autoresearch-sandbox", ".git/**"
    ]
    path = tmp_path / "experiment.json"
    path.write_text(json.dumps(raw), encoding="utf-8")

    with pytest.raises(ValueError, match="must cover"):
        ExperimentConfig.load(path)
