#!/usr/bin/env python3
"""Validate Ground Zero personal-context event ledgers.

Input is newline-delimited JSON. This validator intentionally uses only the
Python standard library so the contract can be checked on a clean Mac.
"""

import argparse
import json
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional


REQUIRED_FIELDS = {
    "event_id",
    "schema_version",
    "owner_id",
    "space",
    "kind",
    "subject",
    "field",
    "value",
    "occurred_at",
    "recorded_at",
    "source_type",
    "source_ref",
    "captured_by",
    "confidence",
    "sensitivity",
    "retention",
    "supersedes",
    "status",
}
EVENT_ID = re.compile(r"^ctxevt_[A-Za-z0-9][A-Za-z0-9_-]*$")
KINDS = {
    "observed",
    "declared",
    "corrected",
    "superseded",
    "retracted",
    "expired",
    "forgotten",
}
CONFIDENCE = {"confirmed", "high", "medium", "low", "unknown"}
SENSITIVITY = {"ordinary", "personal", "sensitive", "private-local"}
RETENTION = {"durable", "review", "expires", "session-only"}
STATUS = {"active", "superseded", "retracted", "expired", "forgotten"}
MISSING_STATES = {
    "not_observed",
    "unavailable",
    "not_applicable",
    "withheld",
    "stale",
    "unknown",
}
SECRET_KEYS = {
    "password",
    "passwd",
    "token",
    "access_token",
    "refresh_token",
    "api_key",
    "apikey",
    "secret",
    "authorization",
    "cookie",
    "private_key",
}


def _timestamp_has_timezone(value: Any) -> bool:
    if not isinstance(value, str) or not value:
        return False
    candidate = value[:-1] + "+00:00" if value.endswith("Z") else value
    try:
        parsed = datetime.fromisoformat(candidate)
    except ValueError:
        return False
    return parsed.tzinfo is not None


def _secret_key_paths(value: Any, prefix: str = "value") -> Iterable[str]:
    if isinstance(value, dict):
        for key, nested in value.items():
            normalized = str(key).strip().lower().replace("-", "_")
            path = "%s.%s" % (prefix, key)
            if normalized in SECRET_KEYS:
                yield path
            yield from _secret_key_paths(nested, path)
    elif isinstance(value, list):
        for index, nested in enumerate(value):
            yield from _secret_key_paths(nested, "%s[%d]" % (prefix, index))


def _validate_event(event: Any, index: int) -> List[str]:
    label = "event[%d]" % index
    if not isinstance(event, dict):
        return ["%s must be an object" % label]

    errors: List[str] = []
    missing = sorted(REQUIRED_FIELDS - set(event))
    if missing:
        errors.append("%s missing required fields: %s" % (label, ", ".join(missing)))
        return errors

    event_id = event["event_id"]
    if not isinstance(event_id, str) or not EVENT_ID.fullmatch(event_id):
        errors.append("%s.event_id must be an opaque ctxevt_ identifier" % label)

    if event["schema_version"] != 1:
        errors.append("%s.schema_version must be 1" % label)

    for field in ("owner_id", "space", "subject", "field", "source_type", "source_ref", "captured_by"):
        if not isinstance(event[field], str) or not event[field].strip():
            errors.append("%s.%s must be a non-empty string" % (label, field))

    enum_fields = {
        "kind": KINDS,
        "confidence": CONFIDENCE,
        "sensitivity": SENSITIVITY,
        "retention": RETENTION,
        "status": STATUS,
    }
    for field, allowed in enum_fields.items():
        if event[field] not in allowed:
            errors.append("%s.%s is not allowed" % (label, field))

    for field in ("occurred_at", "recorded_at"):
        if not _timestamp_has_timezone(event[field]):
            errors.append("%s.%s must be an ISO-8601 timestamp with timezone" % (label, field))

    value = event["value"]
    if value == "" or value is None:
        errors.append(
            "%s.value must use an explicit missing-value object instead of empty/null" % label
        )
    if isinstance(value, dict) and "missing" in value:
        if set(value) != {"missing"} or value["missing"] not in MISSING_STATES:
            errors.append("%s.value has an invalid explicit missing-value state" % label)

    for path in _secret_key_paths(value):
        errors.append("%s contains forbidden secret-bearing key %s" % (label, path))

    supersedes = event["supersedes"]
    if supersedes is not None and (
        not isinstance(supersedes, str) or not EVENT_ID.fullmatch(supersedes)
    ):
        errors.append("%s.supersedes must be null or a ctxevt_ identifier" % label)
    if event["kind"] == "corrected" and supersedes is None:
        errors.append("%s corrected event requires supersedes" % label)

    return errors


def validate_ledger(events: List[Dict[str, Any]]) -> List[str]:
    errors: List[str] = []
    seen: Dict[str, Dict[str, Any]] = {}

    for index, event in enumerate(events):
        event_errors = _validate_event(event, index)
        errors.extend(event_errors)
        if not isinstance(event, dict) or "event_id" not in event:
            continue
        event_id = event["event_id"]
        if event_id in seen:
            errors.append("event[%d].event_id duplicates %s" % (index, event_id))
        else:
            seen[event_id] = event

    for index, event in enumerate(events):
        if not isinstance(event, dict):
            continue
        supersedes = event.get("supersedes")
        if not supersedes:
            continue
        original = seen.get(supersedes)
        if original is None:
            errors.append("event[%d].supersedes references unknown event %s" % (index, supersedes))
            continue
        if event.get("owner_id") != original.get("owner_id"):
            errors.append("event[%d].supersedes must reference the same owner" % index)
        if event.get("space") != original.get("space"):
            errors.append("event[%d].supersedes must reference the same space" % index)
        if event.get("subject") != original.get("subject") or event.get("field") != original.get("field"):
            errors.append("event[%d].supersedes must reference the same subject and field" % index)

    return errors


def parse_jsonl(text: str) -> List[Dict[str, Any]]:
    events: List[Dict[str, Any]] = []
    for line_number, raw_line in enumerate(text.splitlines(), start=1):
        line = raw_line.strip()
        if not line:
            continue
        try:
            value = json.loads(line)
        except json.JSONDecodeError as exc:
            raise ValueError("line %d is not valid JSON: %s" % (line_number, exc)) from exc
        events.append(value)
    return events


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("ledger", type=Path, help="newline-delimited JSON context-event ledger")
    args = parser.parse_args(argv)

    try:
        events = parse_jsonl(args.ledger.read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        print("INVALID: %s" % exc, file=sys.stderr)
        return 2

    errors = validate_ledger(events)
    if errors:
        for error in errors:
            print("INVALID: %s" % error, file=sys.stderr)
        return 1

    print("VALID: %d context event(s)" % len(events))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
