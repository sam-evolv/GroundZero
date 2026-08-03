import os
from pathlib import Path

import pytest

from verified_autoresearch.edits import Edit, apply_edits


def test_applies_one_exact_replacement_inside_allowlist(tmp_path: Path) -> None:
    target = tmp_path / "src" / "score.py"
    target.parent.mkdir()
    target.write_text("VALUE = 1\n", encoding="utf-8")

    changed = apply_edits(
        root=tmp_path,
        edits=[Edit(path="src/score.py", old="VALUE = 1", new="VALUE = 2")],
        allowed_globs=("src/*.py",),
        max_files=1,
        max_total_bytes=100,
    )

    assert changed == (Path("src/score.py"),)
    assert target.read_text(encoding="utf-8") == "VALUE = 2\n"


def test_rejects_path_traversal_before_writing(tmp_path: Path) -> None:
    outside = tmp_path.parent / "outside.txt"
    outside.write_text("secret\n", encoding="utf-8")

    with pytest.raises(ValueError, match="relative path"):
        apply_edits(
            root=tmp_path,
            edits=[Edit(path="../outside.txt", old="secret", new="changed")],
            allowed_globs=("**/*.txt",),
        )

    assert outside.read_text(encoding="utf-8") == "secret\n"


def test_rejects_parent_symlink_escape(tmp_path: Path) -> None:
    outside_dir = tmp_path.parent / "outside-dir"
    outside_dir.mkdir()
    outside = outside_dir / "score.py"
    outside.write_text("VALUE = 1\n", encoding="utf-8")
    (tmp_path / "src").symlink_to(outside_dir, target_is_directory=True)

    with pytest.raises(ValueError, match="escapes"):
        apply_edits(
            root=tmp_path,
            edits=[Edit(path="src/score.py", old="VALUE = 1", new="VALUE = 2")],
            allowed_globs=("src/*.py",),
        )

    assert outside.read_text(encoding="utf-8") == "VALUE = 1\n"


def test_rejects_hard_link_before_writing_external_inode(tmp_path: Path) -> None:
    outside = tmp_path.parent / "external-score.py"
    outside.write_text("VALUE = 1\n", encoding="utf-8")
    target = tmp_path / "src" / "score.py"
    target.parent.mkdir()
    os.link(outside, target)

    with pytest.raises(ValueError, match="hard link"):
        apply_edits(
            root=tmp_path,
            edits=[Edit(path="src/score.py", old="VALUE = 1", new="VALUE = 2")],
            allowed_globs=("src/*.py",),
        )

    assert outside.read_text(encoding="utf-8") == "VALUE = 1\n"
