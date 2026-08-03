from __future__ import annotations

from dataclasses import dataclass
from fnmatch import fnmatch
from pathlib import Path, PurePosixPath


@dataclass(frozen=True)
class Edit:
    path: str
    old: str
    new: str


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

    prepared: list[tuple[Path, Path, str]] = []
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
        prepared.append((relative, target_resolved, updated))

    for _, target, updated in prepared:
        target.write_text(updated, encoding="utf-8")

    return tuple(relative for relative, _, _ in prepared)
