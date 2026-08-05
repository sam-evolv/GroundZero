#!/usr/bin/env python3
"""Validate the OpenHouse sales pipeline and render a current action dashboard."""

from __future__ import annotations

import argparse
import csv
from collections import Counter
from datetime import date, datetime
from pathlib import Path
from typing import Iterable

REQUIRED_COLUMNS = [
    "account_id",
    "country",
    "tier",
    "company",
    "website",
    "active_scheme",
    "contact_name",
    "contact_role",
    "contact_email",
    "linkedin_url",
    "contact_url",
    "why_now",
    "source_urls",
    "status",
    "last_contact",
    "next_action_date",
    "next_action",
    "rejection_reason",
    "notes",
]

ACTIVE_STATUSES = {
    "researched",
    "contact-ready",
    "sent",
    "follow-up-one",
    "follow-up-two",
    "replied",
    "discovery-booked",
    "qualified",
    "proposal-required",
    "proposal-sent",
    "commercial-review",
}

ALLOWED_STATUSES = ACTIVE_STATUSES | {
    "paid-pilot",
    "closed-no",
    "parked-new-route-required",
}


def parse_iso(value: str) -> date | None:
    value = value.strip()
    if not value:
        return None
    return datetime.strptime(value, "%Y-%m-%d").date()


def load_pipeline(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames is None:
            raise ValueError("Pipeline has no header")
        missing = [name for name in REQUIRED_COLUMNS if name not in reader.fieldnames]
        if missing:
            raise ValueError(f"Missing columns: {', '.join(missing)}")
        return [{key: (value or "").strip() for key, value in row.items()} for row in reader]


def validate(rows: Iterable[dict[str, str]]) -> list[str]:
    errors: list[str] = []
    seen: set[str] = set()
    for line_number, row in enumerate(rows, start=2):
        account_id = row["account_id"]
        if not account_id:
            errors.append(f"line {line_number}: account_id is required")
        elif account_id in seen:
            errors.append(f"line {line_number}: duplicate account_id {account_id}")
        seen.add(account_id)

        if not row["company"]:
            errors.append(f"line {line_number}: company is required")
        if not row["country"]:
            errors.append(f"line {line_number}: country is required")
        if row["status"] not in ALLOWED_STATUSES:
            errors.append(f"line {line_number}: invalid status {row['status']!r}")
        if row["status"] == "contact-ready":
            if not row["why_now"]:
                errors.append(f"line {line_number}: contact-ready account needs why_now")
            if not row["source_urls"]:
                errors.append(f"line {line_number}: contact-ready account needs source_urls")
            if not (row["contact_email"] or row["linkedin_url"] or row["contact_url"]):
                errors.append(f"line {line_number}: contact-ready account needs an email, LinkedIn route or official contact URL")
        for field in ("last_contact", "next_action_date"):
            try:
                parse_iso(row[field])
            except ValueError:
                errors.append(f"line {line_number}: {field} must be YYYY-MM-DD")
    return errors


def render(rows: list[dict[str, str]], today: date) -> str:
    counts = Counter(row["status"] for row in rows)
    countries = Counter(row["country"] for row in rows)
    due = []
    contact_ready = []

    for row in rows:
        if row["status"] == "contact-ready":
            contact_ready.append(row)
        next_date = parse_iso(row["next_action_date"])
        if row["status"] in ACTIVE_STATUSES and next_date and next_date <= today:
            due.append((next_date, row))

    due.sort(key=lambda item: (item[0], item[1]["tier"], item[1]["company"]))
    contact_ready.sort(key=lambda row: (row["tier"], row["country"], row["company"]))

    lines = [
        "# OpenHouse founder-sales dashboard",
        "",
        f"Generated: {today.isoformat()}",
        "",
        "## Pipeline",
        "",
        f"- Total accounts: {len(rows)}",
        f"- Active accounts: {sum(counts[s] for s in ACTIVE_STATUSES)}",
        f"- Contact-ready: {counts['contact-ready']}",
        f"- Discovery booked: {counts['discovery-booked']}",
        f"- Qualified: {counts['qualified']}",
        f"- Proposals sent: {counts['proposal-sent']}",
        f"- Paid pilots: {counts['paid-pilot']}",
        f"- Closed no: {counts['closed-no']}",
        "",
        "## Countries",
        "",
    ]
    lines.extend(f"- {country}: {count}" for country, count in sorted(countries.items()))

    lines.extend(["", "## Actions due", ""])
    if due:
        for next_date, row in due:
            lines.append(
                f"- {next_date.isoformat()} | {row['tier']} | {row['company']} | "
                f"{row['contact_name'] or row['contact_role']} | {row['next_action']}"
            )
    else:
        lines.append("- None")

    lines.extend(["", "## Contact-ready queue", ""])
    if contact_ready:
        for row in contact_ready:
            route = row["contact_email"] or row["linkedin_url"] or row["contact_url"]
            lines.append(
                f"- {row['tier']} | {row['country']} | {row['company']} | "
                f"{row['contact_name'] or row['contact_role']} | {route} | {row['why_now']}"
            )
    else:
        lines.append("- None")

    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("pipeline", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--today", type=date.fromisoformat, default=date.today())
    args = parser.parse_args()

    try:
        rows = load_pipeline(args.pipeline)
    except (OSError, ValueError) as exc:
        print(f"ERROR: {exc}")
        return 2

    errors = validate(rows)
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1

    dashboard = render(rows, args.today)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(dashboard, encoding="utf-8")
        print(f"Wrote {args.output}")
    else:
        print(dashboard, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
