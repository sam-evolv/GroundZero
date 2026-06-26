#!/usr/bin/env python3
"""Ground Zero LLM wiki refiner.

Reads raw imports and the capture inbox, finds likely related notes in the
vault, and writes a dated brief that turns the raw material into connected
wiki work. The script is intentionally conservative: it preserves provenance,
never mutates source notes, and only writes a new brief file.
"""

from __future__ import annotations

import re
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parents[1]
VAULT = ROOT / "vault"
IMPORTS = VAULT / "imports"
CAPTURE_INBOX = VAULT / "capture" / "inbox.md"
BRIEFS = VAULT / "briefs"

NOTE_DIRS = ["context", "people", "companies", "project_state", "goals", "items", "decisions", "briefs"]
STOPWORDS = {
    "the", "and", "for", "with", "from", "that", "this", "into", "your", "you", "are", "was", "were",
    "have", "has", "had", "will", "can", "should", "would", "could", "not", "but", "about", "into",
    "current", "note", "notes", "file", "vault", "ground", "zero", "groundzero", "open", "live", "daily",
    "model", "brief", "briefs", "inbox", "imports", "shared", "context", "source", "sources", "their",
    "there", "here", "what", "when", "where", "why", "how", "who", "which", "into", "after", "before",
}


@dataclass
class Note:
    path: Path
    title: str
    text: str
    tokens: set[str]


@dataclass
class SourceDoc:
    path: Path
    text: str
    title: str
    tokens: set[str]



def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        return {}
    end = text.find("\n---\n", 4)
    if end == -1:
        return {}
    front = text[4:end]
    data: dict[str, str] = {}
    for line in front.splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip().lower()
        value = value.strip().strip('"').strip("'")
        if key:
            data[key] = value
    return data



def first_heading(text: str) -> str | None:
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return None



def load_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")



def tokenize(text: str) -> set[str]:
    return {
        token
        for token in re.findall(r"[a-z0-9]+", text.lower())
        if len(token) > 2 and token not in STOPWORDS
    }



def note_title(path: Path, text: str) -> str:
    meta = parse_frontmatter(text)
    for key in ("title", "name", "purpose"):
        value = meta.get(key)
        if value:
            return value
    heading = first_heading(text)
    if heading:
        return heading
    return path.stem.replace("-", " ").title()



def collect_notes(exclude: set[Path] | None = None) -> list[Note]:
    notes: list[Note] = []
    exclude = {path.resolve() for path in (exclude or set())}
    for subdir in NOTE_DIRS:
        root = VAULT / subdir
        if not root.exists():
            continue
        for path in sorted(root.glob("*.md")):
            if path.resolve() in exclude:
                continue
            if path.name.startswith("_") or path.name == "README.md":
                continue
            try:
                text = load_text(path)
            except Exception:
                continue
            title = note_title(path, text)
            tokens = tokenize(" ".join([title, path.stem, text[:1200]]))
            notes.append(Note(path=path, title=title, text=text, tokens=tokens))
    return notes



def collect_sources() -> list[SourceDoc]:
    sources: list[SourceDoc] = []
    if IMPORTS.exists():
        for path in sorted(IMPORTS.rglob("*.md")):
            if path.name.startswith("_") or path.name == "README.md":
                continue
            try:
                text = load_text(path)
            except Exception:
                continue
            title = note_title(path, text)
            tokens = tokenize(" ".join([title, path.stem, text[:1200]]))
            sources.append(SourceDoc(path=path, text=text, title=title, tokens=tokens))
    if CAPTURE_INBOX.exists():
        text = load_text(CAPTURE_INBOX)
        title = note_title(CAPTURE_INBOX, text)
        tokens = tokenize(" ".join([title, CAPTURE_INBOX.stem, text[:1200]]))
        sources.append(SourceDoc(path=CAPTURE_INBOX, text=text, title=title, tokens=tokens))
    return sources



def score_related(source: SourceDoc, note: Note) -> int:
    source_text = source.text.lower()
    note_text = note.text.lower()
    score = 0

    # Exact title/path mentions are high-signal.
    if note.title.lower() in source_text:
        score += 6
    if note.path.stem.lower().replace("-", " ") in source_text:
        score += 3

    overlap = source.tokens & note.tokens
    score += len(overlap)

    # Frontmatter ids and obvious aliases are also useful.
    meta = parse_frontmatter(note.text)
    for key in ("id", "company_id", "kind", "purpose"):
        value = meta.get(key)
        if value and value.lower() in source_text:
            score += 2

    # If the source and note share the first sentence, increase confidence.
    source_head = source_text[:250]
    note_head = note_text[:250]
    shared = tokenize(source_head) & tokenize(note_head)
    score += min(2, len(shared) // 4)

    return score



def top_related(source: SourceDoc, notes: Iterable[Note], limit: int = 6) -> list[tuple[Note, int]]:
    scored = [(note, score_related(source, note)) for note in notes]
    scored = [pair for pair in scored if pair[1] >= 2]
    scored.sort(key=lambda pair: (-pair[1], pair[0].path.as_posix()))
    return scored[:limit]



def classify_destination(source: SourceDoc, related: list[tuple[Note, int]]) -> str:
    text = source.text.lower()
    path = source.path.as_posix().lower()
    if "company memory" in text or "what openhouse is" in text:
        return "companies/openhouse-ai.md"
    if "current priorities" in text and "openhouse" in text:
        return "project_state/oh.md"
    if "do not re-propose" in text or "known real gaps" in text:
        return "items/oh-production-migration.md"
    if "daily" in path or "brief" in path:
        return "briefs/"
    if related:
        best = related[0][0].path
        if best.parts:
            try:
                idx = best.parts.index("vault")
                return "/".join(best.parts[idx + 1 :])
            except ValueError:
                pass
    return "briefs/"



def summarize_source(source: SourceDoc) -> str:
    body = source.text
    body = re.sub(r"^---\n.*?\n---\n", "", body, flags=re.S)
    body = body.strip()
    lines = [line.strip() for line in body.splitlines() if line.strip()]
    if not lines:
        return "(empty)"
    summary_lines: list[str] = []
    for line in lines[:8]:
        if line.startswith("#"):
            continue
        if len(line) > 180:
            line = line[:177] + "..."
        summary_lines.append(line)
        if len(summary_lines) >= 4:
            break
    return " ".join(summary_lines) if summary_lines else lines[0]



def build_brief(notes: list[Note], sources: list[SourceDoc]) -> str:
    today = datetime.now().astimezone().strftime("%Y-%m-%d")
    run_at = datetime.now().astimezone().isoformat(timespec="seconds")
    lines: list[str] = []
    lines.extend([
        "---",
        f'title: Wiki Refiner {today}',
        'kind: wiki_refiner_brief',
        f'date: "{today}"',
        f'ran_at: "{run_at}"',
        "---",
        "",
        f"# Wiki Refiner {today}",
        "",
        "This brief captures raw sources reviewed by the wiki refiner and the notes they should connect to.",
        "",
    ])

    if not sources:
        lines.extend([
            "## Sources reviewed",
            "- No raw imports or inbox scraps found.",
            "",
        ])
        return "\n".join(lines).rstrip() + "\n"

    lines.append("## Sources reviewed")
    for source in sources:
        related = top_related(source, notes)
        destination = classify_destination(source, related)
        lines.append(f"- `{source.path.relative_to(VAULT)}` -> `{destination}`")
        lines.append(f"  - Summary: {summarize_source(source)}")
        if related:
            links = ", ".join(f"[[{pair[0].path.relative_to(VAULT).with_suffix('')}]]" for pair in related[:4])
            lines.append(f"  - Related: {links}")
        else:
            lines.append("  - Related: none found yet")
    lines.append("")

    lines.append("## Strongest connected notes")
    seen: set[str] = set()
    for source in sources:
        for note, score in top_related(source, notes):
            rel = note.path.relative_to(VAULT).with_suffix("")
            key = rel.as_posix()
            if key in seen:
                continue
            seen.add(key)
            lines.append(f"- [[{key}]] ({score})")
    if len(lines) and lines[-1] != "":
        lines.append("")

    lines.extend([
        "## Suggested follow-ups",
        "- Move durable facts from imports into the relevant company, person, or project note.",
        "- Keep the raw source in `imports/` so provenance stays intact.",
        "- Add backlinks when a source maps to multiple notes.",
        "- If the source contradicts an existing note, preserve both and write a review note instead of overwriting history.",
        "",
        "## Guardrails",
        "- Do not file temporary scraps directly into durable notes without review.",
        "- Do not delete source material after filing it.",
        "- Do not let the brief become the only place a fact lives.",
    ])
    return "\n".join(lines).rstrip() + "\n"



def main() -> int:
    BRIEFS.mkdir(parents=True, exist_ok=True)
    today = datetime.now().astimezone().strftime("%Y-%m-%d")
    out = BRIEFS / f"wiki-refiner-{today}.md"
    notes = collect_notes({out})
    sources = collect_sources()
    content = build_brief(notes, sources)
    previous = out.read_text(encoding="utf-8") if out.exists() else None
    if previous != content:
        out.write_text(content, encoding="utf-8")
        changed = True
    else:
        changed = False

    print(f"wiki-refiner: {'updated' if changed else 'unchanged'} {out.relative_to(VAULT)}")
    print(f"wiki-refiner: sources={len(sources)} notes_indexed={len(notes)}")
    for source in sources:
        related = top_related(source, notes)
        related_txt = ", ".join(f"{note.path.relative_to(VAULT).as_posix()}({score})" for note, score in related[:4]) or "none"
        print(f"- {source.path.relative_to(VAULT).as_posix()} -> {related_txt}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
