import json
import subprocess
from pathlib import Path

import pytest

from verified_autoresearch.container import ContainerExecutor, snapshot_tracked

IMAGE = "python@sha256:" + "a" * 64


def git(root: Path, *args: str) -> None:
    subprocess.run(["git", *args], cwd=root, check=True, capture_output=True)


def make_repo(tmp_path: Path) -> Path:
    root = tmp_path / "repo"
    root.mkdir()
    git(root, "init")
    git(root, "config", "user.email", "test@example.invalid")
    git(root, "config", "user.name", "Test")
    (root / "script.py").write_text("VALUE = 1\n", encoding="utf-8")
    (root / ".verified-autoresearch-sandbox").write_text(
        json.dumps({"workspace": str(root.resolve()), "version": 1}), encoding="utf-8"
    )
    git(root, "add", ".")
    git(root, "commit", "-m", "seed")
    return root


def test_container_argv_is_fail_closed(tmp_path: Path) -> None:
    root = make_repo(tmp_path)
    executor = ContainerExecutor(root, IMAGE, docker_path=Path("/opt/homebrew/bin/docker"))
    argv = executor.build_argv(Path("/private/tmp/snapshot"), "test-container", ("python3", "script.py"))

    assert argv[:3] == ["/opt/homebrew/bin/docker", "run", "--rm"]
    assert ["--pull", "never"] == argv[argv.index("--pull"):argv.index("--pull") + 2]
    assert "--init" in argv
    assert ["--ipc", "none"] == argv[argv.index("--ipc"):argv.index("--ipc") + 2]
    assert ["--network", "none"] == argv[argv.index("--network"):argv.index("--network") + 2]
    assert ["--read-only", "--cap-drop", "ALL"] == argv[
        argv.index("--read-only"):argv.index("--read-only") + 3
    ]
    assert "no-new-privileges" in argv
    assert ["--user", "65534:65534"] == argv[argv.index("--user"):argv.index("--user") + 2]
    assert ["--pids-limit", "64"] == argv[argv.index("--pids-limit"):argv.index("--pids-limit") + 2]
    assert ["--memory", "2g"] == argv[argv.index("--memory"):argv.index("--memory") + 2]
    assert ["--memory-swap", "2g"] == argv[
        argv.index("--memory-swap"):argv.index("--memory-swap") + 2
    ]
    assert ["--cpus", "2"] == argv[argv.index("--cpus"):argv.index("--cpus") + 2]
    assert "type=bind,src=/private/tmp/snapshot,dst=/workspace,readonly" in argv
    assert argv[-3:] == [IMAGE, "python3", "script.py"]


def test_snapshot_contains_only_tracked_regular_files_and_current_edit(tmp_path: Path) -> None:
    root = make_repo(tmp_path)
    (root / "script.py").write_text("VALUE = 2\n", encoding="utf-8")
    (root / "untracked.txt").write_text("no\n", encoding="utf-8")
    destination = tmp_path / "snapshot"

    snapshot_tracked(root, destination)

    assert (destination / "script.py").read_text(encoding="utf-8") == "VALUE = 2\n"
    assert not (destination / "untracked.txt").exists()
    assert not (destination / ".git").exists()


def test_snapshot_rejects_tracked_symlink(tmp_path: Path) -> None:
    root = make_repo(tmp_path)
    (root / "link").symlink_to("script.py")
    git(root, "add", "link")
    git(root, "commit", "-m", "add link")

    with pytest.raises(RuntimeError, match="regular file"):
        snapshot_tracked(root, tmp_path / "snapshot")
