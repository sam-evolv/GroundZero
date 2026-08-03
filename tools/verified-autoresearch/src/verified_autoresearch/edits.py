from __future__ import annotations

import os
import secrets
import stat
from dataclasses import dataclass
from fnmatch import fnmatch
from pathlib import Path, PurePosixPath


@dataclass(frozen=True)
class Edit:
    path: str
    old: str
    new: str


def _replace_regular_file_safely(target: Path, expected: str, replacement: str) -> None:
    directory_fd = os.open(target.parent, os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW)
    temporary_name = f".autoresearch-edit-{secrets.token_hex(12)}"
    temporary_created = False
    try:
        source_fd = os.open(target.name, os.O_RDONLY | os.O_NOFOLLOW, dir_fd=directory_fd)
        try:
            source_info = os.fstat(source_fd)
            if not stat.S_ISREG(source_info.st_mode) or source_info.st_nlink != 1:
                raise ValueError("edit target changed or became linked before write")
            chunks = []
            while True:
                chunk = os.read(source_fd, 65_536)
                if not chunk:
                    break
                chunks.append(chunk)
            current = b"".join(chunks).decode("utf-8")
        finally:
            os.close(source_fd)
        if current != expected:
            raise ValueError("edit target changed before atomic replacement")

        temporary_fd = os.open(
            temporary_name,
            os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW,
            stat.S_IMODE(source_info.st_mode),
            dir_fd=directory_fd,
        )
        temporary_created = True
        try:
            payload = replacement.encode("utf-8")
            written = 0
            while written < len(payload):
                written += os.write(temporary_fd, payload[written:])
            os.fsync(temporary_fd)
        finally:
            os.close(temporary_fd)

        current_info = os.stat(target.name, dir_fd=directory_fd, follow_symlinks=False)
        if (
            current_info.st_ino != source_info.st_ino
            or current_info.st_dev != source_info.st_dev
            or current_info.st_nlink != 1
            or not stat.S_ISREG(current_info.st_mode)
        ):
            raise ValueError("edit target changed before atomic replacement")
        os.replace(
            temporary_name,
            target.name,
            src_dir_fd=directory_fd,
            dst_dir_fd=directory_fd,
        )
        temporary_created = False
        os.fsync(directory_fd)
    finally:
        if temporary_created:
            try:
                os.unlink(temporary_name, dir_fd=directory_fd)
            except FileNotFoundError:
                pass
        os.close(directory_fd)


def _safe_relative_path(raw: str) -> Path:
    path = PurePosixPath(raw)
    if path.is_absolute() or ".." in path.parts or not path.parts:
        raise ValueError("edit path must be a safe relative path")
    return Path(*path.parts)


def apply_edits(
    *,
    root: Path,
    edits: list[Edit],
    allowed_globs: tuple[str, ...],
    max_files: int = 1,
    max_total_bytes: int = 20_000,
) -> tuple[Path, ...]:
    if not edits or len(edits) > max_files:
        raise ValueError("edit count exceeds allowed files")

    prepared: list[tuple[Path, Path, str, str]] = []
    total_bytes = 0
    seen: set[Path] = set()
    root = root.resolve()

    for edit in edits:
        relative = _safe_relative_path(edit.path)
        if relative in seen:
            raise ValueError("duplicate edit path")
        seen.add(relative)
        if not any(fnmatch(relative.as_posix(), pattern) for pattern in allowed_globs):
            raise ValueError("edit path is outside the allowlist")

        target = root / relative
        if target.is_symlink() or not target.is_file():
            raise ValueError("edit target must be an existing regular file")
        if target.stat().st_nlink != 1:
            raise ValueError("edit target must not be a hard link")
        target_resolved = target.resolve()
        try:
            target_resolved.relative_to(root)
        except ValueError as exc:
            raise ValueError("edit target escapes the workspace") from exc

        current = target_resolved.read_text(encoding="utf-8")
        if not edit.old or current.count(edit.old) != 1:
            raise ValueError("old text must occur exactly once")
        updated = current.replace(edit.old, edit.new, 1)
        total_bytes += len(edit.old.encode()) + len(edit.new.encode())
        if total_bytes > max_total_bytes:
            raise ValueError("edit payload exceeds byte limit")
        prepared.append((relative, target_resolved, current, updated))

    for _, target, expected, updated in prepared:
        _replace_regular_file_safely(target, expected, updated)

    return tuple(relative for relative, _, _, _ in prepared)
