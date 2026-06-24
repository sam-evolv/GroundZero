---
id: oh-warranty-filter
company_id: openhouse-ai
domain: innovation
title: Add warranty filter to issue_reports dashboard
rationale: "`warranty_relevant` lives only on `assistant_media_analysis`. The dashboard cannot filter issues by warranty status."
council_note: Innovation pass · Effort S
effort: S
impact: 70
state: proposed
is_one_thing: false
source: ground-zero-vault 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T20:00:00Z"
updated_at: "2026-06-24T11:05:00Z"
---

## Opportunity size
Small feature, high trust value. Warranty filtering shortens triage time for every scheme, makes aftercare reporting easier, and helps the developer portal feel like a serious operating system rather than a generic inbox.

## Technical approach
1. Add a `warranty` column to `issue_reports`.
2. Backfill from `assistant_media_analysis.warranty_relevant`.
3. Populate the field in the multimodal insert path.
4. Add a dashboard filter and a saved warranty view.
5. Keep a join view as a fallback only if backfill risk is high.

## Risks
- Classification drift between the two tables.
- Old rows can look empty until backfilled.
- A dual-source model can confuse future maintenance.

## Effort
S. One to two hours for schema and write-path wiring, half a day if you include backfill and UI polish.

## Market timing
Timely. Warranty and aftercare automation are becoming a clearer selling point in proptech because teams want fewer manual support loops and better evidence for customers.

## Connects to
- OpenHouse aftercare OS
- room inference
- issue triage and premium developer reporting

## Recommendation
Keep as a fast follow feature. It is valuable, but not yet large enough to justify its own project.
