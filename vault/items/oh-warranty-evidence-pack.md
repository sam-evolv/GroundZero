---
id: oh-warranty-evidence-pack
company_id: openhouse-ai
domain: innovation
title: Turn warranty issues into an evidence pack
rationale: Current warranty data is split between issue_reports and assistant_media_analysis, which makes it hard to prove patterns, priority, and resolution history to developers.
council_note: New idea from gap analysis · Effort M
effort: M
impact: 78
state: proposed
is_one_thing: false
source: ground-zero-incubation 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T11:05:00Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
This is more than a filter. A warranty evidence pack lets OpenHouse package recurring defects, supporting photos, and resolution state into something a developer can actually use. That strengthens aftercare trust and creates a more defensible premium story.

## Technical approach
- Extend issue_reports with warranty metadata.
- Group related issues by scheme, unit, room, and defect type.
- Pull supporting images and analysis notes into a downloadable evidence pack.
- Add simple export formats for developer review and warranty meetings.
- Reuse room inference so the pack can cluster issues more intelligently.

## Risks
- Overpromising automated certainty on warranty classification.
- Cross-table joins could get messy if the data model stays split.
- If the export is too manual, it becomes another report no one uses.

## Effort
M. Roughly a week if it is a report and UI slice, longer if the workflow also includes approvals and signoff.

## Market timing
Timely. Buyers of proptech software are asking for more evidence, less admin, and AI that reduces aftercare noise rather than adding another inbox.

## Connects to

- [[items/oh-warranty-filter]] — warranty column is the input
- [[items/oh-warranty-triage-router]] — triager feeds the pack with classified issues
- [[goals/oh-aftercare-os]] — aftercare OS vision this serves
- [[goals/oh-room-inference]] — room inference makes the pack smarter
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- [[context/openhouse-product-map]] — product surface this ships on


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-09]]
- [[companies/openhouse-ai]]
- [[context/openhouse-product-map]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-room-inference]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-warranty-filter]]
- [[items/oh-warranty-triage-router]]
- [[project_state/oh]]


## Recommendation
This is a stronger commercial idea than the raw filter alone. It is a plausible project once the data plumbing is in place.
