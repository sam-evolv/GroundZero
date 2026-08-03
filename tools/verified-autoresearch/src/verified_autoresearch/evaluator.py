from __future__ import annotations

import math
import re
import subprocess
from dataclasses import dataclass
from typing import Protocol, Sequence

_METRIC = re.compile(r"^AUTORESEARCH_METRIC=([-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?)$")


class CommandFailure(RuntimeError):
    pass


class Executor(Protocol):
    def run(
        self, command: Sequence[str], timeout_seconds: int
    ) -> subprocess.CompletedProcess[str]:
        ...


@dataclass(frozen=True)
class Evaluation:
    metric: float
    stdout: str
    stderr: str


def run_guard(argv: tuple[str, ...], executor: Executor, timeout_seconds: int) -> str:
    completed = executor.run(argv, timeout_seconds)
    if completed.returncode != 0:
        raise CommandFailure(
            f"guard failed with exit code {completed.returncode}: {completed.stderr[-2000:]}"
        )
    return completed.stdout


def run_evaluator(
    argv: tuple[str, ...], executor: Executor, timeout_seconds: int
) -> Evaluation:
    completed = executor.run(argv, timeout_seconds)
    if completed.returncode != 0:
        raise CommandFailure(
            f"evaluator failed with exit code {completed.returncode}: {completed.stderr[-2000:]}"
        )
    matches = [
        match
        for line in completed.stdout.splitlines()
        if (match := _METRIC.fullmatch(line.strip()))
    ]
    if len(matches) != 1:
        raise CommandFailure("evaluator must emit exactly one AUTORESEARCH_METRIC line")
    metric = float(matches[0].group(1))
    if not math.isfinite(metric):
        raise CommandFailure("metric must be finite")
    return Evaluation(metric=metric, stdout=completed.stdout, stderr=completed.stderr)
