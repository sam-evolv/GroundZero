from __future__ import annotations

import json
import re
from dataclasses import dataclass

from .edits import Edit

_SECRET_PATTERNS = (
    re.compile(r"-----BEGIN [A-Z ]*PRIVATE KEY-----"),
    re.compile(r"\bsk-[A-Za-z0-9_-]{16,}\b"),
    re.compile(r"\bgh[oprsu]_[A-Za-z0-9]{20,}\b"),
    re.compile(r"\bAKIA[0-9A-Z]{16}\b"),
)


@dataclass(frozen=True)
class Proposal:
    hypothesis: str
    edits: tuple[Edit, ...]

    @classmethod
    def from_json(cls, raw: str) -> "Proposal":
        try:
            data = json.loads(raw)
        except json.JSONDecodeError as exc:
            raise ValueError("proposal must be valid JSON") from exc
        if not isinstance(data, dict):
            raise ValueError("proposal must be a JSON object")
        unexpected = set(data) - {"hypothesis", "edits"}
        if unexpected:
            raise ValueError("unexpected proposal fields")
        if set(data) != {"hypothesis", "edits"}:
            raise ValueError("proposal requires hypothesis and edits")
        if not isinstance(data["hypothesis"], str) or not data["hypothesis"].strip():
            raise ValueError("hypothesis must be non-empty text")
        if not isinstance(data["edits"], list) or not data["edits"]:
            raise ValueError("edits must be a non-empty list")

        edits: list[Edit] = []
        for item in data["edits"]:
            if not isinstance(item, dict) or set(item) != {"path", "old", "new"}:
                raise ValueError("each edit requires only path, old and new")
            if not all(isinstance(item[key], str) for key in ("path", "old", "new")):
                raise ValueError("edit fields must be text")
            combined = "\n".join((item["path"], item["old"], item["new"]))
            if any(pattern.search(combined) for pattern in _SECRET_PATTERNS):
                raise ValueError("proposal contains secret-like material")
            edits.append(Edit(path=item["path"], old=item["old"], new=item["new"]))

        return cls(hypothesis=data["hypothesis"].strip(), edits=tuple(edits))
