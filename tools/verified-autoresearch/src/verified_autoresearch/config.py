from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any
from urllib.parse import urlparse


def _argv(value: Any, name: str) -> tuple[str, ...]:
    if not isinstance(value, list) or not value or not all(isinstance(v, str) and v for v in value):
        raise ValueError(f"{name} must be a non-empty argv list")
    return tuple(value)


@dataclass(frozen=True)
class ExperimentConfig:
    workspace: Path
    model: str
    ollama_url: str
    container_image: str
    objective: str
    allowed_globs: tuple[str, ...]
    evaluator: tuple[str, ...]
    guards: tuple[tuple[str, ...], ...]
    max_iterations: int
    max_minutes: int
    command_timeout_seconds: int
    min_delta: float
    max_files: int
    max_edit_bytes: int

    @classmethod
    def load(cls, path: Path) -> "ExperimentConfig":
        try:
            raw = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as exc:
            raise ValueError("configuration must be readable JSON") from exc
        required = {
            "workspace", "model", "ollama_url", "container_image", "objective", "allowed_globs",
            "evaluator", "guards", "max_iterations", "max_minutes",
            "command_timeout_seconds", "min_delta", "max_files", "max_edit_bytes",
        }
        if not isinstance(raw, dict) or set(raw) != required:
            raise ValueError("configuration fields do not match the required schema")

        endpoint = urlparse(raw["ollama_url"])
        if endpoint.scheme != "http" or endpoint.hostname not in {"127.0.0.1", "localhost", "::1"}:
            raise ValueError("Ollama endpoint must use HTTP on loopback")
        if endpoint.path not in {"", "/"} or endpoint.query or endpoint.fragment:
            raise ValueError("Ollama endpoint must not contain a path, query or fragment")
        image = raw["container_image"]
        if not isinstance(image, str) or re.fullmatch(
            r"[a-z0-9][a-z0-9._/-]*@sha256:[0-9a-f]{64}", image
        ) is None:
            raise ValueError("container_image must be pinned by sha256 digest")
        if not isinstance(raw["guards"], list):
            raise ValueError("guards must be a list of argv lists")
        guards = tuple(_argv(value, "guard") for value in raw["guards"])
        allowed = raw["allowed_globs"]
        if not isinstance(allowed, list) or not allowed or not all(isinstance(v, str) and v for v in allowed):
            raise ValueError("allowed_globs must be non-empty text patterns")

        for name in ("model", "objective"):
            if not isinstance(raw[name], str) or not raw[name].strip():
                raise ValueError(f"{name} must be non-empty text")
        for name in ("max_iterations", "max_minutes", "command_timeout_seconds", "max_files", "max_edit_bytes"):
            if not isinstance(raw[name], int) or raw[name] <= 0:
                raise ValueError(f"{name} must be a positive integer")
        if not isinstance(raw["min_delta"], (int, float)) or raw["min_delta"] < 0:
            raise ValueError("min_delta must be non-negative")

        return cls(
            workspace=Path(raw["workspace"]).expanduser().resolve(),
            model=raw["model"].strip(),
            ollama_url=raw["ollama_url"].rstrip("/"),
            container_image=image,
            objective=raw["objective"].strip(),
            allowed_globs=tuple(allowed),
            evaluator=_argv(raw["evaluator"], "evaluator"),
            guards=guards,
            max_iterations=raw["max_iterations"],
            max_minutes=raw["max_minutes"],
            command_timeout_seconds=raw["command_timeout_seconds"],
            min_delta=float(raw["min_delta"]),
            max_files=raw["max_files"],
            max_edit_bytes=raw["max_edit_bytes"],
        )
