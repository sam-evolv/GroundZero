import ast
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


def test_example_evaluator_never_imports_or_executes_candidate_code() -> None:
    tree = ast.parse((EXAMPLE / "evaluate.py").read_text(encoding="utf-8"))
    assert not any(
        isinstance(node, ast.ImportFrom) and node.module and node.module.startswith("src")
        for node in ast.walk(tree)
    )
    forbidden_calls = {"eval", "exec", "compile", "__import__"}
    assert not any(
        isinstance(node, ast.Call)
        and isinstance(node.func, ast.Name)
        and node.func.id in forbidden_calls
        for node in ast.walk(tree)
    )
