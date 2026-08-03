from __future__ import annotations

import fcntl
import hashlib
import json
import os
import secrets
import stat
import subprocess
from contextlib import contextmanager
from pathlib import Path
from typing import Any, Dict, Iterator, Optional

from .config import ExperimentConfig
from .sandbox import hard_reset

_ZERO_HASH = "0" * 64
_MAX_STATE_BYTES = 10_000_000


def _git(root: Path, *args: str) -> str:
    completed = subprocess.run(
        ["/usr/bin/git", *args],
        cwd=root,
        check=True,
        capture_output=True,
        text=True,
        stdin=subprocess.DEVNULL,
        env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin"},
    )
    return completed.stdout.strip()


def _open_state_directory(config: ExperimentConfig) -> int:
    parent_fd = os.open(
        config.workspace.parent,
        os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW,
    )
    name = f".{config.workspace.name}.autoresearch-state"
    try:
        try:
            os.mkdir(name, mode=0o700, dir_fd=parent_fd)
            os.fsync(parent_fd)
        except FileExistsError:
            pass
        try:
            directory_fd = os.open(
                name,
                os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW,
                dir_fd=parent_fd,
            )
        except OSError as exc:
            raise RuntimeError("autoresearch state directory is unsafe") from exc
    finally:
        os.close(parent_fd)
    info = os.fstat(directory_fd)
    if (
        not stat.S_ISDIR(info.st_mode)
        or info.st_uid != os.getuid()
        or stat.S_IMODE(info.st_mode) != 0o700
    ):
        os.close(directory_fd)
        raise RuntimeError("autoresearch state directory is unsafe")
    return directory_fd


def _open_owned_regular(
    directory_fd: int,
    name: str,
    *,
    create: bool = False,
) -> Optional[int]:
    flags = os.O_RDONLY | os.O_NOFOLLOW
    if create:
        flags = os.O_RDWR | os.O_CREAT | os.O_NOFOLLOW
    try:
        descriptor = os.open(name, flags, 0o600, dir_fd=directory_fd)
    except FileNotFoundError:
        return None
    info = os.fstat(descriptor)
    if (
        not stat.S_ISREG(info.st_mode)
        or info.st_nlink != 1
        or info.st_uid != os.getuid()
        or stat.S_IMODE(info.st_mode) != 0o600
    ):
        os.close(descriptor)
        raise RuntimeError(f"autoresearch {name} path is unsafe")
    return descriptor


def _read_file(directory_fd: int, name: str) -> Optional[bytes]:
    descriptor = _open_owned_regular(directory_fd, name)
    if descriptor is None:
        return None
    try:
        data = os.read(descriptor, _MAX_STATE_BYTES + 1)
        if len(data) > _MAX_STATE_BYTES:
            raise RuntimeError(f"autoresearch {name} exceeds size limit")
        return data
    finally:
        os.close(descriptor)


def _atomic_write(directory_fd: int, name: str, data: bytes) -> None:
    temporary = f".{name}.tmp-{secrets.token_hex(12)}"
    descriptor = os.open(
        temporary,
        os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW,
        0o600,
        dir_fd=directory_fd,
    )
    created = True
    try:
        written = 0
        while written < len(data):
            written += os.write(descriptor, data[written:])
        os.fsync(descriptor)
        os.close(descriptor)
        descriptor = -1
        os.replace(
            temporary,
            name,
            src_dir_fd=directory_fd,
            dst_dir_fd=directory_fd,
        )
        created = False
        os.fsync(directory_fd)
    finally:
        if descriptor >= 0:
            os.close(descriptor)
        if created:
            try:
                os.unlink(temporary, dir_fd=directory_fd)
            except FileNotFoundError:
                pass


def _remove_file(directory_fd: int, name: str) -> None:
    try:
        os.unlink(name, dir_fd=directory_fd)
    except FileNotFoundError:
        return
    os.fsync(directory_fd)


def _parse_ledger(data: bytes) -> tuple[list[Dict[str, Any]], str]:
    previous = _ZERO_HASH
    sequence = 0
    records: list[Dict[str, Any]] = []
    for raw_line in data.decode("utf-8").splitlines():
        try:
            record = json.loads(raw_line)
            payload = {
                "sequence": record["sequence"],
                "previous_record_sha256": record["previous_record_sha256"],
                "result": record["result"],
            }
            expected = hashlib.sha256(
                json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
            ).hexdigest()
            if (
                set(record) != {*payload, "record_sha256"}
                or record["sequence"] != sequence + 1
                or record["previous_record_sha256"] != previous
                or record["record_sha256"] != expected
            ):
                raise RuntimeError("ledger integrity check failed")
        except (json.JSONDecodeError, KeyError, TypeError, UnicodeDecodeError) as exc:
            raise RuntimeError("ledger integrity check failed") from exc
        records.append(record)
        sequence = record["sequence"]
        previous = record["record_sha256"]
    return records, previous


class StateStore:
    def __init__(self, config: ExperimentConfig, directory_fd: int, lock_fd: int) -> None:
        self.config = config
        self.directory_fd = directory_fd
        self.lock_fd = lock_fd

    def close(self) -> None:
        fcntl.flock(self.lock_fd, fcntl.LOCK_UN)
        os.close(self.lock_fd)
        os.close(self.directory_fd)

    def begin(self, previous_head: str, iteration: int, proposal_sha256: str) -> None:
        pending = {
            "version": 1,
            "previous_head": previous_head,
            "iteration": iteration,
            "proposal_sha256": proposal_sha256,
            "commit": None,
        }
        _atomic_write(
            self.directory_fd,
            "pending.json",
            json.dumps(pending, sort_keys=True, separators=(",", ":")).encode("utf-8"),
        )

    def set_commit(self, commit: str) -> None:
        pending = self._pending()
        if pending is None:
            raise RuntimeError("autoresearch pending transaction is missing")
        pending["commit"] = commit
        _atomic_write(
            self.directory_fd,
            "pending.json",
            json.dumps(pending, sort_keys=True, separators=(",", ":")).encode("utf-8"),
        )

    def finish(self) -> None:
        _remove_file(self.directory_fd, "pending.json")

    def _pending(self) -> Optional[Dict[str, Any]]:
        data = _read_file(self.directory_fd, "pending.json")
        if data is None:
            return None
        try:
            pending = json.loads(data)
        except (json.JSONDecodeError, UnicodeDecodeError) as exc:
            raise RuntimeError("pending transaction is invalid") from exc
        if (
            not isinstance(pending, dict)
            or set(pending)
            != {"version", "previous_head", "iteration", "proposal_sha256", "commit"}
            or pending["version"] != 1
            or not isinstance(pending["previous_head"], str)
            or not isinstance(pending["iteration"], int)
            or not isinstance(pending["proposal_sha256"], str)
            or not (
                pending["commit"] is None or isinstance(pending["commit"], str)
            )
        ):
            raise RuntimeError("pending transaction is invalid")
        return pending

    def recover(self) -> None:
        pending = self._pending()
        if pending is None:
            return
        current_head = _git(self.config.workspace, "rev-parse", "HEAD")
        committed = pending["commit"]
        records, _ = _parse_ledger(_read_file(self.directory_fd, "ledger.jsonl") or b"")
        ledger_has_commit = bool(
            committed
            and records
            and records[-1]["result"].get("status") == "accepted"
            and records[-1]["result"].get("commit") == committed
        )
        if not (committed and current_head == committed and ledger_has_commit):
            hard_reset(self.config.workspace, pending["previous_head"])
        self.finish()

    def append_result(self, result: Dict[str, Any]) -> None:
        existing = _read_file(self.directory_fd, "ledger.jsonl") or b""
        records, previous = _parse_ledger(existing)
        payload = {
            "sequence": len(records) + 1,
            "previous_record_sha256": previous,
            "result": result,
        }
        digest = hashlib.sha256(
            json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
        ).hexdigest()
        record = {**payload, "record_sha256": digest}
        encoded = existing + json.dumps(
            record, sort_keys=True, separators=(",", ":")
        ).encode("utf-8") + b"\n"
        if len(encoded) > _MAX_STATE_BYTES:
            raise RuntimeError("autoresearch ledger exceeds size limit")
        _atomic_write(self.directory_fd, "ledger.jsonl", encoded)


@contextmanager
def workspace_state(config: ExperimentConfig) -> Iterator[StateStore]:
    directory_fd = _open_state_directory(config)
    lock_fd = _open_owned_regular(directory_fd, "campaign.lock", create=True)
    if lock_fd is None:
        os.close(directory_fd)
        raise RuntimeError("could not create autoresearch campaign lock")
    try:
        fcntl.flock(lock_fd, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError as exc:
        os.close(lock_fd)
        os.close(directory_fd)
        raise RuntimeError("autoresearch workspace is already locked") from exc
    store = StateStore(config, directory_fd, lock_fd)
    try:
        yield store
    finally:
        store.close()
