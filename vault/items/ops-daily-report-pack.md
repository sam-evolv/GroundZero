---
id: ops-daily-report-pack
company_id: ground-zero
domain: ops
title: Assemble daily reporting packs for each company
rationale: Sam keeps manually checking the same operational signals and then writing separate status notes for the companies.
council_note: Daily reporting pass | Effort M
effort: M
impact: 88
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T18:02:35+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Builds a daily report pack for OpenHouse, OpenBook, and Renew by pulling the live signals, summarising what changed, and writing the ready-to-file note back into the vault. It should keep the summary short, exception focused, and aligned to the current project_state notes.

## Tools and APIs
- Local vault reads and writes
- GitHub API for repo health
- Vercel status checks
- Supabase status where available
- Optional OpenAI summarisation for the final Markdown draft

## Estimated setup effort
M. It is mostly orchestration and formatting, but the signal selection needs to stay tight.

## Expected time savings
20 to 30 minutes per day, plus less context switching between projects.

## Priority ranking
P1

## Connects to

- [[items/ops-daily-sync-digest]] — sister daily automation
- [[items/ops-project-state-reconciler]] — project_state notes
- [[imports/claude/openhouse-company-memory]] — company memory updates
- [[context/ops-automation-moc]] — MOC hub
- [[Daily/<date>]] — output goes here
- [[briefs/wiki-refiner-2026-06-26]] — refiner context

## Incubation analysis, 18 July 2026

### Opportunity, risks and timing
At 20 to 30 minutes saved per day, the direct return is roughly two hours a week, plus earlier detection of delivery or data risks. The main danger is duplication: the existing daily portfolio brief and sync digest already cover much of this output. A second reporting layer would increase reading and maintenance without creating new decisions.

### Technical approach and effort
Use one evidence collection pass, one canonical structured snapshot and multiple thin views only where audiences genuinely differ. Medium effort becomes small if this is folded into the existing daily portfolio job rather than built separately.

### Recommendation
Do not promote as a standalone project. Merge its useful per-company sections into [[items/ops-daily-sync-digest]] and [[items/ops-project-state-reconciler]], then archive this proposal if no distinct user or decision contract can be named.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[context/dashboard]]
- [[context/ops-automation-moc]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-pr-issue-ageing-escalator]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-weekly-status-pack]]

