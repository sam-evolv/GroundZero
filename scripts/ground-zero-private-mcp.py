#!/usr/bin/env python3
"""Private, vault-only MCP stdio server for Sam's Ground Zero notes.

Set GZ_VAULT_ROOT to the canonical vault path. Set GZ_ALLOW_WRITE=1 only after
the ChatGPT tunnel and tool scope have been reviewed.
"""
from __future__ import annotations

import hashlib
import json
import os
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(os.environ.get("GZ_VAULT_ROOT", "/Users/samdonworth/GroundZero/vault")).resolve()
ALLOW_WRITE = os.environ.get("GZ_ALLOW_WRITE") == "1"
MAX_FILE = 1_000_000
MAX_READ = 20_000


def note_path(value: str) -> Path:
    if not isinstance(value, str) or not value or len(value) > 300:
        raise ValueError("Invalid note path")
    path = Path(value)
    if path.is_absolute() or path.suffix.lower() != ".md" or any(part in (".", "..") for part in path.parts):
        raise ValueError("Use a relative .md path inside vault")
    target = (ROOT / path).resolve(strict=True)
    if not target.is_relative_to(ROOT) or not target.is_file():
        raise ValueError("Path is outside vault or is not a note")
    if target.stat().st_size > MAX_FILE:
        raise ValueError("Note exceeds read limit")
    return target


def note_bytes(path: Path) -> bytes:
    data = path.read_bytes()
    if len(data) > MAX_FILE:
        raise ValueError("Note exceeds read limit")
    return data


def get_revision(_args: dict) -> dict:
    repo = ROOT.parent
    head = subprocess.run(["git", "-C", str(repo), "rev-parse", "HEAD"], capture_output=True, text=True, check=True).stdout.strip()
    dirty = subprocess.run(["git", "-C", str(repo), "status", "--porcelain=v1", "--", "vault"], capture_output=True, text=True, check=True).stdout.strip()
    return {"head": head, "vault_dirty": bool(dirty), "canonical_root": "vault/"}


def search_notes(args: dict) -> dict:
    query = args.get("query", "")
    if not isinstance(query, str) or not 2 <= len(query) <= 120:
        raise ValueError("Query must contain 2 to 120 characters")
    hits = []
    needle = query.casefold()
    for path in sorted(ROOT.rglob("*.md")):
        if path.is_symlink() or not path.is_file() or path.stat().st_size > MAX_FILE:
            continue
        for line_number, line in enumerate(path.read_text(errors="replace").splitlines(), 1):
            if needle in line.casefold():
                hits.append({"path": str(path.relative_to(ROOT)), "line": line_number, "snippet": line[:200]})
                if len(hits) == 12:
                    return {"hits": hits, "truncated": True}
    return {"hits": hits, "truncated": False}


def read_note(args: dict) -> dict:
    path = note_path(args.get("path", ""))
    data = note_bytes(path)
    text = data.decode("utf-8")
    offset = args.get("offset", 0)
    limit = args.get("limit", 8000)
    if not isinstance(offset, int) or offset < 0 or not isinstance(limit, int) or not 1 <= limit <= MAX_READ:
        raise ValueError("Invalid offset or limit")
    return {"path": str(path.relative_to(ROOT)), "sha256": hashlib.sha256(data).hexdigest(), "text": text[offset:offset + limit], "next_offset": offset + limit if offset + limit < len(text) else None, "total_chars": len(text)}


def patch_note(args: dict) -> dict:
    if not ALLOW_WRITE:
        raise ValueError("Write tool is disabled")
    path = note_path(args.get("path", ""))
    expected = args.get("expected_sha256", "")
    old = args.get("old", "")
    new = args.get("new", "")
    if not isinstance(expected, str) or len(expected) != 64 or not isinstance(old, str) or not old or not isinstance(new, str):
        raise ValueError("Expected SHA-256 and nonempty old text are required")
    if len(old) > 20_000 or len(new) > 20_000:
        raise ValueError("Patch segment too large")
    data = note_bytes(path)
    if hashlib.sha256(data).hexdigest() != expected:
        raise ValueError("Note changed since it was read; re-read before editing")
    text = data.decode("utf-8")
    if text.count(old) != 1:
        raise ValueError("Old text must occur exactly once")
    replacement = text.replace(old, new, 1).encode("utf-8")
    if len(replacement) > MAX_FILE:
        raise ValueError("Result exceeds note limit")
    fd, temp_name = tempfile.mkstemp(prefix=".gz-note-", dir=path.parent)
    try:
        os.fchmod(fd, path.stat().st_mode & 0o777)
        with os.fdopen(fd, "wb") as out:
            out.write(replacement)
            out.flush()
            os.fsync(out.fileno())
        os.replace(temp_name, path)
    finally:
        if os.path.exists(temp_name):
            os.unlink(temp_name)
    return {"path": str(path.relative_to(ROOT)), "sha256": hashlib.sha256(replacement).hexdigest(), "verified": path.read_bytes() == replacement}


TOOLS = {
    "ground_zero_revision": (get_revision, "Get the local canonical vault Git revision and dirty state. Use before context-dependent work.", {"type": "object", "properties": {}}),
    "ground_zero_search": (search_notes, "Search only Markdown notes in Sam's Ground Zero vault. Use to find task-relevant context; return is bounded.", {"type": "object", "properties": {"query": {"type": "string"}}, "required": ["query"]}),
    "ground_zero_read_note": (read_note, "Read one bounded slice of a Ground Zero Markdown note and its SHA-256. Use after search or from canonical links.", {"type": "object", "properties": {"path": {"type": "string"}, "offset": {"type": "integer"}, "limit": {"type": "integer"}}, "required": ["path"]}),
}
if ALLOW_WRITE:
    TOOLS["ground_zero_patch_note"] = (patch_note, "Make one revision-checked, unique text replacement in an existing Ground Zero note. Re-read on conflict. No Git commit or sync.", {"type": "object", "properties": {"path": {"type": "string"}, "expected_sha256": {"type": "string"}, "old": {"type": "string"}, "new": {"type": "string"}}, "required": ["path", "expected_sha256", "old", "new"]})


def respond(request: dict) -> dict | None:
    method = request.get("method")
    if method == "notifications/initialized":
        return None
    ident = request.get("id")
    if ident is None:
        return None
    try:
        if method == "initialize":
            params = request.get("params", {})
            result = {"protocolVersion": params.get("protocolVersion", "2025-03-26"), "capabilities": {"tools": {"listChanged": False}}, "serverInfo": {"name": "ground-zero-private", "version": "0.1.0"}, "instructions": "Ground Zero is Sam's canonical durable context. Read only relevant notes; verify current state live. Writes are bounded and local, with no commit or sync."}
        elif method == "tools/list":
            result = {"tools": [{"name": name, "description": desc, "inputSchema": schema} for name, (_, desc, schema) in TOOLS.items()]}
        elif method == "tools/call":
            params = request.get("params", {})
            name = params.get("name")
            if name not in TOOLS:
                raise ValueError("Unknown or disabled tool")
            value = TOOLS[name][0](params.get("arguments", {}))
            result = {"content": [{"type": "text", "text": json.dumps(value, ensure_ascii=False)}], "isError": False}
        else:
            return {"jsonrpc": "2.0", "id": ident, "error": {"code": -32601, "message": "Method not found"}}
        return {"jsonrpc": "2.0", "id": ident, "result": result}
    except Exception as exc:
        if method == "tools/call":
            return {"jsonrpc": "2.0", "id": ident, "result": {"content": [{"type": "text", "text": str(exc)}], "isError": True}}
        return {"jsonrpc": "2.0", "id": ident, "error": {"code": -32603, "message": str(exc)}}


def main() -> None:
    if not ROOT.is_dir():
        raise SystemExit("Ground Zero vault root is unavailable")
    for line in sys.stdin:
        try:
            request = json.loads(line)
            response = respond(request)
            if response is not None:
                sys.stdout.write(json.dumps(response, ensure_ascii=False) + "\n")
                sys.stdout.flush()
        except Exception as exc:
            print(f"MCP input error: {exc}", file=sys.stderr)


if __name__ == "__main__":
    main()
