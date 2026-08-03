from __future__ import annotations

import shutil
import subprocess
import sys
import tempfile
import time
import uuid
from pathlib import Path
from typing import Sequence


class ContainerFailure(RuntimeError):
    pass


_CONTAINER_TMPFS = "/tmp:rw,noexec,nosuid,nodev,size=64m,mode=1777"  # nosec B108


def _git(root: Path, *args: str) -> bytes:
    completed = subprocess.run(
        ["/usr/bin/git", *args],
        cwd=root,
        check=True,
        capture_output=True,
        stdin=subprocess.DEVNULL,
        env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin"},
    )
    return completed.stdout


def snapshot_tracked(root: Path, destination: Path) -> None:
    """Copy the current contents of tracked regular files, excluding Git metadata."""
    root = root.resolve(strict=True)
    destination.mkdir(mode=0o700, parents=True, exist_ok=False)
    entries = _git(root, "ls-files", "-z", "--stage").split(b"\0")
    for entry in entries:
        if not entry:
            continue
        try:
            metadata, raw_path = entry.split(b"\t", 1)
            mode = metadata.split(b" ", 1)[0]
            relative = Path(raw_path.decode("utf-8", errors="strict"))
        except (ValueError, UnicodeDecodeError) as exc:
            raise RuntimeError("Git index contains an invalid path") from exc
        if mode not in {b"100644", b"100755"}:
            raise RuntimeError(f"tracked path is not a regular file: {relative}")
        if relative.is_absolute() or ".." in relative.parts:
            raise RuntimeError(f"tracked path escapes workspace: {relative}")
        source = root / relative
        if source.is_symlink() or not source.is_file():
            raise RuntimeError(f"tracked path is not a regular file: {relative}")
        resolved = source.resolve(strict=True)
        try:
            resolved.relative_to(root)
        except ValueError as exc:
            raise RuntimeError(f"tracked path escapes workspace: {relative}") from exc
        if source.stat().st_nlink != 1:
            raise RuntimeError(f"tracked path is a hard link: {relative}")
        target = destination / relative
        target.parent.mkdir(mode=0o700, parents=True, exist_ok=True)
        shutil.copy2(resolved, target)


class ContainerExecutor:
    def __init__(
        self,
        workspace: Path,
        image: str,
        *,
        docker_path: Path = Path("/opt/homebrew/bin/docker"),
        max_output_bytes: int = 1_000_000,
    ) -> None:
        self.workspace = workspace.resolve(strict=True)
        self.image = image
        self.docker_path = docker_path
        self.max_output_bytes = max_output_bytes

    def build_argv(
        self, snapshot: Path, container_name: str, command: Sequence[str]
    ) -> list[str]:
        if not command or not all(
            isinstance(value, str) and value and "\x00" not in value for value in command
        ):
            raise ContainerFailure("command must be a non-empty argv sequence")
        mount = f"type=bind,src={snapshot},dst=/workspace,readonly"
        return [
            str(self.docker_path),
            "run",
            "--rm",
            "--pull",
            "never",
            "--init",
            "--name",
            container_name,
            "--network",
            "none",
            "--ipc",
            "none",
            "--read-only",
            "--cap-drop",
            "ALL",
            "--security-opt",
            "no-new-privileges",
            "--user",
            "65534:65534",
            "--pids-limit",
            "64",
            "--memory",
            "2g",
            "--memory-swap",
            "2g",
            "--cpus",
            "2",
            "--ulimit",
            "nofile=128:128",
            "--ulimit",
            "fsize=10485760:10485760",
            "--tmpfs",
            _CONTAINER_TMPFS,
            "--mount",
            mount,
            "--workdir",
            "/workspace",
            "--env",
            "HOME=/tmp",
            "--env",
            "CI=1",
            "--env",
            "NO_COLOR=1",
            "--env",
            "PYTHONDONTWRITEBYTECODE=1",
            "--env",
            "PYTHONHASHSEED=0",
            self.image,
            *command,
        ]

    def _kill(self, name: str) -> None:
        subprocess.run(
            [str(self.docker_path), "kill", name],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            timeout=10,
            check=False,
            env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"},
        )

    @staticmethod
    def _read_bounded(path: Path, limit: int) -> str:
        with path.open("rb") as handle:
            data = handle.read(limit + 1)
        if len(data) > limit:
            raise ContainerFailure("container output exceeded limit")
        return data.decode("utf-8", errors="replace")

    def run(self, command: Sequence[str], timeout_seconds: int) -> subprocess.CompletedProcess[str]:
        if not self.docker_path.is_file():
            raise ContainerFailure(f"Docker CLI not found at {self.docker_path}")
        name = "verified-autoresearch-" + uuid.uuid4().hex[:16]
        with tempfile.TemporaryDirectory(
            prefix=".verified-autoresearch-snapshot-", dir=self.workspace.parent
        ) as temporary:
            temporary_path = Path(temporary)
            snapshot = temporary_path / "workspace"
            snapshot_tracked(self.workspace, snapshot)
            stdout_path = temporary_path / "stdout"
            stderr_path = temporary_path / "stderr"
            argv = self.build_argv(snapshot, name, command)
            watchdog = subprocess.Popen(
                [
                    sys.executable,
                    "-m",
                    "verified_autoresearch.watchdog",
                    str(timeout_seconds),
                    str(self.docker_path),
                    name,
                ],
                stdin=subprocess.DEVNULL,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"},
                start_new_session=True,
                close_fds=True,
            )
            with stdout_path.open("wb") as stdout_handle, stderr_path.open("wb") as stderr_handle:
                try:
                    process = subprocess.Popen(
                        argv,
                        stdin=subprocess.DEVNULL,
                        stdout=stdout_handle,
                        stderr=stderr_handle,
                        env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"},
                    )
                except OSError as exc:
                    watchdog.terminate()
                    watchdog.wait(timeout=10)
                    raise ContainerFailure(f"container could not start: {exc}") from exc
                deadline = time.monotonic() + timeout_seconds
                try:
                    while process.poll() is None:
                        if time.monotonic() >= deadline:
                            raise ContainerFailure(
                                f"container command timed out after {timeout_seconds}s"
                            )
                        if (
                            stdout_path.stat().st_size + stderr_path.stat().st_size
                            > self.max_output_bytes
                        ):
                            raise ContainerFailure("container output exceeded limit")
                        time.sleep(0.05)
                except BaseException:
                    if process.poll() is None:
                        process.kill()
                    self._kill(name)
                    try:
                        process.wait(timeout=10)
                    except subprocess.TimeoutExpired:
                        pass
                    watchdog.terminate()
                    watchdog.wait(timeout=10)
                    raise
                watchdog.terminate()
                watchdog.wait(timeout=10)
                returncode = process.returncode
            stdout = self._read_bounded(stdout_path, self.max_output_bytes)
            stderr = self._read_bounded(stderr_path, self.max_output_bytes)
            return subprocess.CompletedProcess(argv, returncode, stdout, stderr)
