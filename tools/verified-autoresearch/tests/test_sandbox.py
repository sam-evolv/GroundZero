import json
import subprocess
from pathlib import Path

import pytest

from verified_autoresearch.sandbox import verify_sandbox


def git(root: Path, *args: str) -> None:
    subprocess.run(["git", *args], cwd=root, check=True, capture_output=True, text=True)


def make_repo(tmp_path: Path) -> Path:
    root = tmp_path / "sandbox"
    root.mkdir()
    git(root, "init")
    git(root, "config", "user.email", "test@example.invalid")
    git(root, "config", "user.name", "Test")
    (root / "seed.txt").write_text("seed\n", encoding="utf-8")
    git(root, "add", "seed.txt")
    git(root, "commit", "-m", "seed")
    git(root, "switch", "-c", "autoresearch/test")
    marker = {"workspace": str(root.resolve()), "version": 1}
    (root / ".verified-autoresearch-sandbox").write_text(json.dumps(marker), encoding="utf-8")
    git(root, "add", ".verified-autoresearch-sandbox")
    git(root, "commit", "-m", "mark sandbox")
    return root


def test_accepts_clean_marked_autoresearch_branch(tmp_path: Path) -> None:
    root = make_repo(tmp_path)
    state = verify_sandbox(root)
    assert state.branch == "autoresearch/test"


def test_rejects_wrong_branch_before_mutation(tmp_path: Path) -> None:
    root = make_repo(tmp_path)
    git(root, "switch", "-c", "main-like")
    with pytest.raises(RuntimeError, match="autoresearch/"):
        verify_sandbox(root)


def test_rejects_dirty_workspace(tmp_path: Path) -> None:
    root = make_repo(tmp_path)
    (root / "seed.txt").write_text("dirty\n", encoding="utf-8")
    with pytest.raises(RuntimeError, match="clean"):
        verify_sandbox(root)
