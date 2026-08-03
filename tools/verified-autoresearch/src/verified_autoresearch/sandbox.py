from __future__ import annotations

import json
import subprocess
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class SandboxState:
    root: Path
    branch: str
    head: str


def _git(root: Path, *args: str) -> str:
    completed = subprocess.run(
        ["git", *args],
        cwd=root,
        check=True,
        capture_output=True,
        text=True,
        env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin"},
    )
    return completed.stdout.strip()


def verify_sandbox(root: Path) -> SandboxState:
    root = root.resolve()
    marker_path = root / ".verified-autoresearch-sandbox"
    if not marker_path.is_file() or marker_path.is_symlink():
        raise RuntimeError("workspace lacks a valid sandbox marker")
    try:
        marker = json.loads(marker_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError) as exc:
        raise RuntimeError("sandbox marker is invalid") from exc
    if marker != {"workspace": str(root), "version": 1}:
        raise RuntimeError("sandbox marker does not match this workspace")

    git_root = Path(_git(root, "rev-parse", "--show-toplevel")).resolve()
    if git_root != root:
        raise RuntimeError("workspace must be the git root")
    branch = _git(root, "branch", "--show-current")
    if not branch.startswith("autoresearch/"):
        raise RuntimeError("sandbox branch must start with autoresearch/")
    if _git(root, "status", "--porcelain=v1"):
        raise RuntimeError("sandbox must be clean before an experiment")
    head = _git(root, "rev-parse", "HEAD")
    return SandboxState(root=root, branch=branch, head=head)


def hard_reset(root: Path, head: str) -> None:
    state = verify_branch_only(root)
    if state.branch.startswith("autoresearch/"):
        _git(root, "reset", "--hard", head)
        _git(root, "clean", "-fd")
    else:
        raise RuntimeError("refusing reset outside autoresearch branch")


def verify_branch_only(root: Path) -> SandboxState:
    root = root.resolve()
    branch = _git(root, "branch", "--show-current")
    head = _git(root, "rev-parse", "HEAD")
    return SandboxState(root=root, branch=branch, head=head)
