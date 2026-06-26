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
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
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

- [[items/oh-warranty-triage-router]] — same data model
- [[items/oh-warranty-evidence-pack]] — filter feeds the pack
- [[goals/oh-room-inference]] — room inference feeds warranty classification
- [[goals/oh-aftercare-os]] — aftercare OS vision
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status- OpenHouse aftercare OS
- room inference
- issue triage and premium developer reporting


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openhouse-ai]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-room-inference]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-triage-router]]
- [[project_state/oh]]


## Recommendation
Keep as a fast follow feature. It is valuable, but not yet large enough to justify its own project.
