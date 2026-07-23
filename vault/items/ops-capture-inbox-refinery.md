---
id: ops-capture-inbox-refinery
company_id: ground-zero
domain: ops
title: Auto-file the capture inbox into the right notes
rationale: The capture inbox is a temporary bucket, but it still needs regular manual sorting into durable notes.
council_note: Vault hygiene pass | Effort S
effort: S
impact: 82
state: building
is_one_thing: true
source: ground-zero-ops-scan 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T18:02:35+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Reads `vault/capture/inbox.md`, classifies each scrap as a task, decision, fact, brief, or reusable process, then files or drafts it into the right note type with backlinks. It can also spot duplicates and flag items that need human review before they become permanent.

## Current implementation
- Implemented as `scripts/wiki-refiner.py`
- Cron job: `Ground Zero LLM Wiki Refiner` (`338ecd7eae63`)
- Capture inbox scraps that are confidently classifiable are auto-filed into the matching note type
- Ambiguous scraps remain in `vault/capture/inbox.md`
- The sync script now runs the refiner before the vault pull/push pass, so the wiki compounds on every sync

## Tools and APIs
- Local filesystem access to the vault
- Markdown templates from `vault/templates/`
- Optional LLM classification for note routing
- A scheduled runner or manual trigger

## Estimated setup effort
S to M. The routing rules are simple, but the note templates and edge cases need care.

## Expected time savings
15 to 20 minutes per day, especially when capture volume is high.

## Priority ranking
P2

## Connects to

- [[context/capture-workflow]] — capture workflow this refines
- [[context/review-workflow]] — review workflow
- [[briefs/wiki-refiner-2026-06-26]] — briefs and decisions hygiene
- [[items/ops-source-to-wiki-ingest]] — sister wiki-ingest item
- [[items/ops-daily-sync-digest]] — daily ops digest
- [[context/llm-wiki-pattern]] — the pattern this implements
- [[capture/inbox]] — the inbox this refines
- [[context/ops-automation-moc]] — MOC hub

## Incubation analysis, 18 July 2026

### Opportunity, risks and timing
The value is internal leverage: less manual filing and better retrieval across every company. The main risk is silent corruption of canonical context through bad routing, duplicate notes or lost provenance. Market timing is strong because agent output is increasing faster than Sam's review capacity, but this is already an implemented workflow rather than a new commercial opportunity.

### Effort and recommendation
Remaining effort is small and should focus on precision, rollback and an exception queue. Status is now `building` to match the documented implementation. Treat it as standing infrastructure and do not promote it into a separate project unless routing quality is measured and maintenance becomes material.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[context/capture-workflow]]
- [[context/llm-wiki-pattern]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-index-maintenance-bot]]
- [[items/ops-source-to-wiki-ingest]]

