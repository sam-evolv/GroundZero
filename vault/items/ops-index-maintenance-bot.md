---
id: ops-index-maintenance-bot
company_id: ground-zero
domain: ops
title: Auto-maintain the operations index and daily log
rationale: Each scan ends with the same bookkeeping pass, updating items/_Index.md, tagging priorities, and drafting the daily log entry.
council_note: Data entry pass · Effort S
effort: S
impact: 72
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-26
run_date: "2026-06-26"
created_at: "2026-06-26T18:02:52+01:00"
updated_at: "2026-06-26T18:02:52+01:00"
---

## What the automation does
Watches newly created or updated automation notes, updates the Operations section of `items/_Index.md`, and drafts the daily log summary with the new items and priority changes. It should keep the bookkeeping narrow and only touch the notes that actually changed.

## Tools and APIs
- Local filesystem access to the vault
- Markdown parsing and diffing
- Optional LLM classification for priority and grouping
- A scheduled runner or manual trigger

## Estimated setup effort
S. The logic is simple, but the index writer needs to avoid duplicate entries and accidental reshuffles.

## Expected time savings
10 to 15 minutes per run, plus fewer missed index updates.

## Priority ranking
P2

## Connects to

- [[items/ops-daily-sync-digest]] — daily ops digest
- [[context/capture-workflow]] — capture workflow
- [[items/_Index]] — item index upkeep
- [[briefs/wiki-refiner-2026-06-26]] — briefing and status note hygiene
- [[context/ops-automation-moc]] — MOC hub


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/wiki-refiner-2026-06-26]]
- [[context/automation-ideas]]
- [[context/capture-workflow]]
- [[context/ops-automation-moc]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-sync-digest]]


## Incubation analysis, 22 July 2026

### Opportunity size
The direct saving is only 10 to 15 minutes per incubation run. The larger value is portfolio accuracy: missing, duplicated or stale index rows can cause agents to revive parked work or overlook an active proof gate. This is internal hygiene, not a commercial opportunity.

### Technical approach
Generate the table from parsed frontmatter, validate that each linked note exists, preserve section ordering and write only a minimal diff. Daily-log text should remain a draft derived from actual file changes. Use deterministic rules for status and size. Route unknown schemas or conflicting fields to review instead of guessing.

### Risks
- A writer can silently reorder the index or overwrite human prioritisation.
- Inconsistent use of `state` and `status`, or `effort` and `size`, can produce false rows.
- Automating a small chore can cost more to maintain than it saves.

### Effort and timing
Small if implemented as a validation and rendering step inside the existing wiki-refiner or daily job. Timely because the active queue now spans four companies, but there is no justification for another scheduled agent.

## Recommendation
Do not promote as a standalone project. Add index validation and deterministic rendering to [[items/ops-capture-inbox-refinery]] or [[items/ops-daily-sync-digest]] only when it can reuse their existing run and rollback path.
