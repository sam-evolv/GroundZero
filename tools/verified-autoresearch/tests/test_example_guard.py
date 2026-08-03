import shutil
import subprocess
import sys
from pathlib import Path

EXAMPLE = Path(__file__).parents[1] / "examples" / "openhouse-retrieval-scratch"


def run_guard(root: Path) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, "guard.py"], cwd=root, capture_output=True, text=True, check=False
    )


def test_example_guard_accepts_original_fixture() -> None:
    assert run_guard(EXAMPLE).returncode == 0


def test_example_guard_rejects_executable_code_outside_literal_weights(tmp_path: Path) -> None:
    root = tmp_path / "fixture"
    shutil.copytree(EXAMPLE, root)
    source = root / "src" / "retrieval.py"
    source.write_text(source.read_text(encoding="utf-8") + "\nprint('forged')\n", encoding="utf-8")

    result = run_guard(root)

    assert result.returncode != 0
    assert "forged" not in result.stdout
