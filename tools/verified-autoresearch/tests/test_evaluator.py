import subprocess
import sys
from pathlib import Path
from typing import Sequence

import pytest

from verified_autoresearch.evaluator import CommandFailure, run_evaluator, run_guard


class TestExecutor:
    __test__ = False

    def __init__(self, cwd: Path) -> None:
        self.cwd = cwd

    def run(self, command: Sequence[str], timeout_seconds: int) -> subprocess.CompletedProcess[str]:
        return subprocess.run(
            list(command),
            cwd=self.cwd,
            check=False,
            capture_output=True,
            text=True,
            timeout=timeout_seconds,
        )


def test_extracts_single_finite_metric(tmp_path: Path) -> None:
    script = tmp_path / "evaluate.py"
    script.write_text("print('AUTORESEARCH_METRIC=0.625')\n", encoding="utf-8")
    result = run_evaluator((sys.executable, str(script)), TestExecutor(tmp_path), timeout_seconds=10)
    assert result.metric == 0.625


def test_rejects_missing_metric(tmp_path: Path) -> None:
    script = tmp_path / "evaluate.py"
    script.write_text("print('looks good')\n", encoding="utf-8")
    with pytest.raises(CommandFailure, match="exactly one"):
        run_evaluator((sys.executable, str(script)), TestExecutor(tmp_path), timeout_seconds=10)


def test_guard_requires_zero_exit(tmp_path: Path) -> None:
    with pytest.raises(CommandFailure, match="exit code 3"):
        run_guard(
            (sys.executable, "-c", "raise SystemExit(3)"),
            TestExecutor(tmp_path),
            timeout_seconds=10,
        )
