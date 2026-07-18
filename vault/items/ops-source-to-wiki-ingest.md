---
id: ops-source-to-wiki-ingest
company_id: ground-zero
domain: automation
title: Auto-file source drops into the wiki
rationale: The vault already stores raw imports and temporary capture, but the next useful step is to turn those sources into linked notes automatically.
council_note: Knowledge base pass | Effort M
effort: M
impact: 86
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-26
run_date: "2026-06-26"
created_at: "2026-06-26T14:10:00+01:00"
updated_at: "2026-06-26T14:10:00+01:00"
---

## What the automation does

Reads new files from `vault/imports/` and unresolved material from `vault/capture/inbox.md`, then files the durable parts into the correct vault note type. It adds wiki links to related notes, preserves provenance, and writes a short contradiction or review note when source material disagrees with existing context.

## Tools and APIs

- Local filesystem access to the vault
- The existing Ground Zero note structure and templates
- Optional LLM classification for routing and contradiction detection
- A scheduled runner or manual trigger

## Estimated setup effort

M. The note routing is straightforward, but the duplicate detection and contradiction handling need careful rules.

## Expected time savings

This should remove the manual source-sorting pass and make the vault grow into a connected wiki instead of a pile of raw imports.

## Priority ranking

P1

## Connects to

- [[context/capture-workflow]] — capture workflow
- [[context/review-workflow]] — review workflow
- [[briefs/wiki-refiner-2026-06-26]] — briefs and decisions hygiene
- [[items/ops-daily-sync-digest]] — daily ops digest
- [[context/model-pack]] — model-pack and context index maintenance
- [[context/llm-wiki-pattern]] — the pattern this implements
- [[context/ops-automation-moc]] — MOC hub

## Incubation analysis, 18 July 2026

### Opportunity, risks and timing
A trustworthy source-to-wiki path compounds every research and operating workflow by preserving provenance and reducing rediscovery. The risk is also portfolio-wide: an incorrect synthesis can spread into decisions, briefs and agent prompts. This is timely because source volume and agent output are rising, but much of the capture path is already implemented by the wiki refiner.

### Technical approach and effort
Use content hashes, source metadata, note-type schemas, explicit confidence and a review queue for contradictions. Keep raw imports immutable. Medium effort remains for duplicate detection and evidence-linked updates, but the routing layer should reuse the current refiner rather than become a second pipeline.

### Recommendation
Merge this proposal with [[items/ops-capture-inbox-refinery]] as one knowledge-ingestion project. Do not build or schedule a competing writer. Promotion is justified only if one owner, one implementation and measurable routing precision are defined.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/wiki-refiner-2026-06-26]]
- [[context/automation-ideas]]
- [[context/capture-workflow]]
- [[context/learn-targets]]
- [[context/llm-wiki-pattern]]
- [[context/model-pack]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-sync-digest]]

