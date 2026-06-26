---
id: ops-weekly-status-pack
company_id: ground-zero
domain: ops
title: Generate a weekly cross-company status pack
rationale: The current review loop repeatedly reassembles the same live state from project notes, issue lists, and deployment checks.
council_note: Reporting and briefing pass | Effort M
effort: M
impact: 84
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T18:02:35+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Pulls the current project_state notes, active items, and live system checks into one weekly brief. It writes a clean summary of what moved, what is blocked, and what needs attention so the same context does not need to be rebuilt by hand every week.

## Tools and APIs
- Local vault reads and writes
- GitHub API for PR and issue status
- Vercel deployment checks
- Supabase CLI or API when credentials allow
- Markdown export for the weekly brief

## Estimated setup effort
M. The main work is choosing the right signals and shaping them into a useful brief.

## Expected time savings
1 to 2 hours per week, plus better continuity between daily runs.

## Priority ranking
P2

## Connects to

- [[items/ops-project-state-reconciler]] — project_state refresh
- [[items/ops-daily-sync-digest]] — daily ops digest
- [[items/ops-daily-report-pack]] — monthly planning and briefing
- [[context/ops-automation-moc]] — MOC hub

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]

