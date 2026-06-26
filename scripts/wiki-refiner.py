#!/usr/bin/env python3
"""Ground Zero LLM wiki refiner.

Scans raw imports plus the capture inbox, routes durable scraps into the
right vault note types, and writes a dated brief describing what was filed.
The script is intentionally conservative: it preserves provenance, avoids
silent overwrites, and only appends to target notes when the entry is new.
"""

from __future__ import annotations

import re
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
INBOX_SECTIONS = ("New facts to file", "Questions to resolve", "Links to sort")
STOPWORDS = {
    "the", "and", "for", "with", "from", "that", "this", "into", "your", "you", "are", "was", "were",
    "have", "has", "had", "will", "can", "should", "would", "could", "not", "but", "about", "open",
    "current", "note", "notes", "file", "vault", "ground", "zero", "groundzero", "live", "daily",
    "model", "brief", "briefs", "inbox", "imports", "shared", "context", "source", "sources", "their",
    "there", "here", "what", "when", "where", "why", "how", "who", "which", "after", "before",
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


@dataclass
class InboxEntry:
    section: str
    text: str


@dataclass
class Filing:
    target: str
    source_section: str
    entry: str


@dataclass
class FilingResult:
    filed: list[Filing]
    remaining_sections: dict[str, list[str]]


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



def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")



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
            notes.append(Note(path=path, title=note_title(path, text), text=text, tokens=tokenize(text + " " + path.stem)))
    return notes



def collect_sources(inbox_text: str | None = None) -> list[SourceDoc]:
    sources: list[SourceDoc] = []
    if IMPORTS.exists():
        for path in sorted(IMPORTS.rglob("*.md")):
            if path.name.startswith("_") or path.name == "README.md":
                continue
            try:
                text = load_text(path)
            except Exception:
                continue
            sources.append(SourceDoc(path=path, text=text, title=note_title(path, text), tokens=tokenize(text + " " + path.stem)))
    if inbox_text is None and CAPTURE_INBOX.exists():
        inbox_text = load_text(CAPTURE_INBOX)
    if inbox_text:
        sources.append(SourceDoc(path=CAPTURE_INBOX, text=inbox_text, title=note_title(CAPTURE_INBOX, inbox_text), tokens=tokenize(inbox_text + " " + CAPTURE_INBOX.stem)))
    return sources



def score_related(source: SourceDoc, note: Note) -> int:
    source_text = source.text.lower()
    score = 0
    if note.title.lower() in source_text:
        score += 6
    if note.path.stem.lower().replace("-", " ") in source_text:
        score += 3
    score += len(source.tokens & note.tokens)
    meta = parse_frontmatter(note.text)
    for key in ("id", "company_id", "kind", "purpose"):
        value = meta.get(key)
        if value and value.lower() in source_text:
            score += 2
    shared = tokenize(source_text[:250]) & tokenize(note.text.lower()[:250])
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
    if any(token in text for token in ("company memory", "what openhouse is", "openhouse ai")):
        return "companies/openhouse-ai.md"
    if any(token in text for token in ("current priorities", "openhouse", "property-assistant", "longview", "rathard", "ardan")):
        return "project_state/oh.md"
    if any(token in text for token in ("openbook", "booking", "no-show", "venue", "cork")):
        return "project_state/ob.md" if any(token in text for token in ("status", "current", "live", "healthy", "ready", "merged")) else "companies/openbook.md"
    if any(token in text for token in ("evolv", "renewables", "solar", "grid", "compliance")):
        return "project_state/renew.md" if any(token in text for token in ("status", "current", "live", "healthy", "ready", "merged")) else "companies/evolv-renewables.md"
    if any(token in path for token in ("brief", "daily")):
        return "briefs/"
    if related:
        best = related[0][0].path
        try:
            idx = best.parts.index("vault")
            return "/".join(best.parts[idx + 1 :])
        except ValueError:
            pass
    return "briefs/"



def summarize_source(source: SourceDoc) -> str:
    body = re.sub(r"^---\n.*?\n---\n", "", source.text, flags=re.S).strip()
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



def inbox_sections(text: str) -> dict[str, list[str]]:
    sections: dict[str, list[str]] = {name: [] for name in INBOX_SECTIONS}
    current = None
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if line.startswith("## "):
            current = line[3:].strip()
            continue
        if current in sections and line.startswith("-") and line != "-":
            sections[current].append(line[1:].strip())
    return sections



def normalize_entry(text: str) -> str:
    return re.sub(r"\s+", " ", text.strip().lower())



def classify_inbox_entry(entry: str, section: str) -> str | None:
    text = entry.lower()
    if any(token in text for token in ("openhouse", "property-assistant", "longview", "rathard", "ardan", "portal.openhouseai", "vercel", "supabase", "handover", "aftercare", "warranty")):
        if any(token in text for token in ("status", "current", "live", "healthy", "ready", "merged", "production", "migration", "deployment")):
            return "project_state/oh.md"
        return "companies/openhouse-ai.md"
    if any(token in text for token in ("openbook", "booking", "no-show", "deposits", "venue", "cork")):
        if any(token in text for token in ("status", "current", "live", "healthy", "ready", "merged")):
            return "project_state/ob.md"
        return "companies/openbook.md"
    if any(token in text for token in ("evolv", "renewables", "solar", "grid", "compliance")):
        if any(token in text for token in ("status", "current", "live", "healthy", "ready", "merged")):
            return "project_state/renew.md"
        return "companies/evolv-renewables.md"

    if section == "Questions to resolve":
        return "items/ops-capture-inbox-refinery.md"
    if any(token in text for token in ("decided", "decision", "choose", "chosen", "prefer", "should", "agree")):
        return "decisions/ground-zero-canonical.md"
    if any(token in text for token in ("todo", "follow up", "action", "need to", "build", "fix", "investigate", "review")):
        return "items/ops-capture-inbox-refinery.md"
    if "http://" in text or "https://" in text or "[[" in text:
        return "context/index.md"
    return None



def append_filed_entries(target_relpath: str, entries: list[str], source_section: str, source_label: str) -> bool:
    if not entries:
        return False
    target_path = VAULT / target_relpath
    if not target_path.exists():
        return False
    try:
        existing = load_text(target_path)
    except Exception:
        return False

    new_entries = [entry for entry in entries if normalize_entry(entry) not in normalize_entry(existing)]
    if not new_entries:
        return False

    today = datetime.now().astimezone().strftime("%Y-%m-%d")
    stamp = datetime.now().astimezone().strftime("%Y-%m-%d %H:%M %Z")
    block_lines = [
        f"## Auto-filed from capture inbox {today}",
        f"_Source: {source_label} · Section: {source_section} · Filed: {stamp}_",
    ]
    block_lines.extend(f"- {entry}" for entry in new_entries)
    block = "\n".join(block_lines) + "\n"
    write_text(target_path, existing.rstrip() + "\n\n" + block)
    return True



def file_inbox_entries(inbox_text: str) -> FilingResult:
    sections = inbox_sections(inbox_text)
    filed: list[Filing] = []
    remaining: dict[str, list[str]] = {name: [] for name in INBOX_SECTIONS}
    grouped: dict[tuple[str, str], list[str]] = {}

    for section, entries in sections.items():
        for entry in entries:
            target = classify_inbox_entry(entry, section)
            if target:
                grouped.setdefault((target, section), []).append(entry)
            else:
                remaining[section].append(entry)

    for (target, source_section), entries in grouped.items():
        if append_filed_entries(target, entries, source_section, "capture/inbox.md"):
            for entry in entries:
                filed.append(Filing(target=target, source_section=source_section, entry=entry))
        else:
            remaining[source_section].extend(entries)

    return FilingResult(filed=filed, remaining_sections=remaining)



def render_inbox(remaining_sections: dict[str, list[str]]) -> str:
    lines = [
        "---",
        "kind: capture_inbox",
        "purpose: Temporary landing zone for new facts before filing",
        "---",
        "",
        "# Inbox",
        "",
        "Use this note to capture anything important before filing it into the right person, company, project, goal, item, or decision note.",
        "",
    ]
    for section in INBOX_SECTIONS:
        lines.extend([f"## {section}"])
        if remaining_sections.get(section):
            lines.extend(f"- {entry}" for entry in remaining_sections[section])
        else:
            lines.append("-")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"



def build_brief(notes: list[Note], sources: list[SourceDoc], filing: FilingResult) -> str:
    today = datetime.now().astimezone().strftime("%Y-%m-%d")
    run_at = datetime.now().astimezone().isoformat(timespec="seconds")
    lines: list[str] = [
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
    ]

    if filing.filed:
        lines.append("## Inbox filing results")
        for item in filing.filed:
            lines.append(f"- `{item.entry}` -> `{item.target}`")
        lines.append("")

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
    if lines[-1] != "":
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
    brief_path = BRIEFS / f"wiki-refiner-{today}.md"

    inbox_text = CAPTURE_INBOX.read_text(encoding="utf-8") if CAPTURE_INBOX.exists() else ""
    filing = file_inbox_entries(inbox_text) if inbox_text.strip() else FilingResult(filed=[], remaining_sections={name: [] for name in INBOX_SECTIONS})
    if inbox_text:
        write_text(CAPTURE_INBOX, render_inbox(filing.remaining_sections))

    notes = collect_notes({brief_path})
    sources = collect_sources(inbox_text)
    content = build_brief(notes, sources, filing)

    previous = brief_path.read_text(encoding="utf-8") if brief_path.exists() else None
    changed = previous != content
    if changed:
        write_text(brief_path, content)

    print(f"wiki-refiner: {'updated' if changed else 'unchanged'} {brief_path.relative_to(VAULT)}")
    print(f"wiki-refiner: sources={len(sources)} notes_indexed={len(notes)} filed={len(filing.filed)}")
    for item in filing.filed:
        print(f"- filed {item.source_section}: {item.entry} -> {item.target}")
    for source in sources:
        related = top_related(source, notes)
        related_txt = ", ".join(f"{note.path.relative_to(VAULT).as_posix()}({score})" for note, score in related[:4]) or "none"
        print(f"- {source.path.relative_to(VAULT).as_posix()} -> {related_txt}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
