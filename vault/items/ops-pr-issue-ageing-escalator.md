---
id: ops-pr-issue-ageing-escalator
company_id: ground-zero
domain: ops
title: Auto-escalate stale PRs and issues
rationale: The daily ops sweep keeps re-checking GitHub for long-running PRs, blocked issues, and unresolved review comments.
council_note: GitHub triage pass | Effort S
effort: S
impact: 90
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T18:02:35+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Runs a scheduled GitHub sweep, finds stale or blocked PRs and issues, groups them by repo and age, and writes a short action list into the vault. It can also draft a comment or follow-up task for the highest priority blockers.

## Tools and APIs
- GitHub REST or GraphQL API
- GitHub Actions or a cron runner
- Markdown vault writes
- Optional OpenAI structured classification for severity and routing

## Estimated setup effort
S. Mostly query logic, age thresholds, and a clean Markdown output.

## Expected time savings
20 to 30 minutes per day, plus fewer missed blockers.

## Priority ranking
P1

## Connects to
- OpenHouse open issues and PR triage
- production migration monitoring
- daily ops digest
