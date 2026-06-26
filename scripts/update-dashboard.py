#!/usr/bin/env python3
"""Auto-update the Ground Zero dashboard.

Reads the current state of all items, goals, project_state, and inbox,
then rewrites the relevant sections of vault/context/dashboard.md
so Sam always opens a fresh view.

Called by the wiki-refiner cron after the backlink pass.
"""

from __future__ import annotations

import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VAULT = ROOT / "vault"
DASHBOARD = VAULT / "context" / "dashboard.md"

INBOX = VAULT / "capture" / "inbox.md"
ITEMS_DIR = VAULT / "items"
GOALS_DIR = VAULT / "goals"
PROJECT_STATE_DIR = VAULT / "project_state"


def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        return {}
    end = text.find("\n---\n", 4)
    if end == -1:
        return {}
    data = {}
    for line in text[4:end].splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        data[key.strip().lower()] = value.strip().strip('"').strip("'")
    return data


def load_text(path: Path) -> str:
    return path.read_text(encoding="utf-8") if path.exists() else ""


def render_active_section() -> str:
    """Find all items in 'building' or 'pr_ready' state."""
    lines = ["## 🔴 Active right now\n"]

    for company_id, company_name, short_id in [("openhouse-ai", "OpenHouse AI", "oh"), ("openbook", "OpenBook", "ob"), ("evolv-renewables", "Evolv Renewables", "renew")]:
        active_items = []
        for item_file in sorted(ITEMS_DIR.glob("*.md")):
            if item_file.name.startswith("_"):
                continue
            item_fm = parse_frontmatter(load_text(item_file))
            if item_fm.get("company_id") != company_id:
                continue
            state = item_fm.get("state", "")
            if state in ("building", "pr_ready", "in_progress"):
                title = item_fm.get("title", item_file.stem)
                rel = item_file.relative_to(VAULT).with_suffix("").as_posix()
                status = "🟡 pr_ready" if state == "pr_ready" else "🔴 building"
                active_items.append(f"  - **{title}** → [[{rel}]] ({status})")

        # Check project state for blocked signals (only flag explicit blockers)
        ps_file = PROJECT_STATE_DIR / f"{short_id}.md"
        if ps_file.exists():
            ps_text = load_text(ps_file)
            # Only flag as blocked if it contains explicit blocker keywords
            # (not just the word "blocked" in a passive/environmental context)
            blocker_patterns = ["blocked by", "blocked:", "waiting on", "can't proceed", "cannot proceed"]
            # Exclude environmental blockers that are just status notes
            exclude_patterns = ["blocked by docker", "blocked by missing", "blocked by a stopped"]
            has_blocker = any(p in ps_text.lower() for p in blocker_patterns)
            is_excluded = any(p in ps_text.lower() for p in exclude_patterns)
            if has_blocker and not is_excluded:
                fm = parse_frontmatter(ps_text)
                active_items.append(f"  - ⚠️ Blocked signal in [[project_state/{company_id}|{company_name}]]")

        if active_items:
            lines.append(f"### {company_name}")
            lines.extend(active_items)
            lines.append("")

    if len(lines) <= 1:
        return "## 🔴 Active right now\n\nNothing blocked or in flight. Dashboard is green. 🟢\n"

    return "\n".join(lines)


def render_proposed_section() -> str:
    """Find proposed items sorted by impact."""
    lines = ["## 🟡 Proposed — ready to activate\n"]

    proposed = []
    for item_file in sorted(ITEMS_DIR.glob("*.md")):
        if item_file.name.startswith("_"):
            continue
        fm = parse_frontmatter(load_text(item_file))
        if fm.get("state") != "proposed":
            continue
        title = fm.get("title", item_file.stem)
        impact = int(fm.get("impact", "0") or "0")
        effort = fm.get("effort", "?")
        rel = item_file.relative_to(VAULT).with_suffix("").as_posix()
        proposed.append((impact, title, effort, rel))

    if not proposed:
        lines.append("No proposed items ready to activate.\n")
        return "\n".join(lines)

    proposed.sort(key=lambda x: -x[0])
    lines.append("| Item | Impact | Effort | Signal |")
    lines.append("|---|---|---|---|")
    for impact, title, effort, rel in proposed[:8]:
        signal = "🔥" if impact >= 85 else "⭐" if impact >= 75 else ""
        lines.append(f"| [[{rel}|{title}]] | {impact} | {effort} | {signal} |")
    lines.append("")

    return "\n".join(lines)


def render_monitoring_section() -> str:
    """Read project_state notes for current operational signals."""
    lines = ["## 🟢 Monitoring\n"]

    for ps_file in sorted(PROJECT_STATE_DIR.glob("*.md")):
        text = load_text(ps_file)
        fm = parse_frontmatter(text)
        company_id = fm.get("id", ps_file.stem)
        headline = fm.get("headline", "")
        rel = ps_file.relative_to(VAULT).with_suffix("").as_posix()

        if "blocked" in text.lower() or "error" in text.lower():
            status = "🔴"
        elif "healthy" in text.lower() or "ready" in text.lower():
            status = "🟢"
        else:
            status = "🟡"

        lines.append(f"- {status} [[{rel}|{company_id}]]: {headline}")

    lines.append("")
    return "\n".join(lines)


def render_inbox_section() -> str:
    """Check capture inbox for unfiled scraps."""
    text = load_text(INBOX)
    if not text:
        return ""

    sections = {"New facts to file": [], "Questions to resolve": [], "Links to sort": []}
    current = None
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("## "):
            current = stripped[3:].strip()
            continue
        if current in sections and stripped.startswith("-") and stripped != "-":
            sections[current].append(stripped[1:].strip())

    total = sum(len(v) for v in sections.values())
    if total == 0:
        return ""

    lines = [f"## 📥 Inbox ({total} unfiled)\n"]
    for section, items in sections.items():
        if items:
            lines.append(f"- **{section}**: {len(items)} items")
    lines.append(f"\n→ [[capture/inbox]]")
    lines.append("")
    return "\n".join(lines)


def render_portfolio_section() -> str:
    """Build a portfolio summary table."""
    lines = ["## 📊 Portfolio at a glance\n"]

    companies = [("openhouse-ai", "OpenHouse AI"), ("openbook", "OpenBook"), ("evolv-renewables", "Evolv Renewables")]

    lines.append("| Company | WIP | Proposed | Goal | Status |")
    lines.append("|---|---|---|---|---|")

    for cid, cname in companies:
        wip = 0
        proposed_count = 0
        for item_file in ITEMS_DIR.glob("*.md"):
            if item_file.name.startswith("_"):
                continue
            fm = parse_frontmatter(load_text(item_file))
            if fm.get("company_id") != cid:
                continue
            state = fm.get("state", "")
            if state in ("building", "pr_ready", "in_progress"):
                wip += 1
            elif state == "proposed":
                proposed_count += 1

        goal_text = "—"
        for g_file in GOALS_DIR.glob("*.md"):
            gfm = parse_frontmatter(load_text(g_file))
            if gfm.get("company_id") == cid and gfm.get("status") == "active":
                goal_text = gfm.get("title", "")
                break

        status = "🔴" if wip > 2 else "🟡" if wip > 0 else "🟢"
        lines.append(f"| {cname} | {wip} | {proposed_count} | {goal_text} | {status} |")

    lines.append("")
    return "\n".join(lines)


def update_dashboard() -> bool:
    """Rewrite the dynamic sections of dashboard.md. Returns True if changed."""
    text = load_text(DASHBOARD)
    if not text:
        print("dashboard: not found, skipping")
        return False

    today = datetime.now().astimezone().strftime("%Y-%m-%d %H:%M %Z")

    sections = [
        render_active_section(),
        render_proposed_section(),
        render_monitoring_section(),
        render_inbox_section(),
        render_portfolio_section(),
    ]

    # Keep the header (title + intro) from the existing file
    header_marker = "## 🔴 Active right now"
    if header_marker in text:
        header_end = text.index(header_marker)
        header = text[:header_end]
    else:
        header = "# Ground Zero Dashboard\n\n> Auto-refreshed by the wiki-refiner cron.\n\n"

    footer = f"""

## 🧭 Navigate

- All ideas: [[items/_Index]]
- All opportunities: [[context/business-opportunities-moc]]
- All ops automation: [[context/ops-automation-moc]]
- Daily notes: [[Daily/_Index]]
- Vault structure: [[context/ground-zero-structure]]

## 🔄 Last updated

- Dashboard: {today}
"""

    new_content = header + "\n".join(sections) + footer

    if new_content.strip() != text.strip():
        DASHBOARD.write_text(new_content, encoding="utf-8")
        print(f"dashboard: updated at {today}")
        return True
    else:
        print("dashboard: unchanged")
        return False


if __name__ == "__main__":
    update_dashboard()
