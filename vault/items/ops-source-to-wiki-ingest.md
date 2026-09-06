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
updated_at: "2026-08-23T18:04:16+01:00"
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

## Material proposal, 23 August 2026 — precision-gated wiki routing replay

Extend the existing source-to-wiki path with a **dry-run precision gate and review queue** before any automatic backlink or canonical-note write. This is a bounded quality slice of the existing ingestion project, not a second writer.

### Bottleneck

The recurring wiki-refiner is producing cross-venture routing candidates that can contaminate the canonical graph if accepted mechanically. In [[briefs/wiki-refiner-2026-08-23]], two personal-agent imports were routed to [[project_state/ob]], another personal-agent consultancy import was routed to [[project_state/oh]], and the Here’s Health source brief was routed to [[project_state/ob]] instead of [[project_state/heres-health-app]]. The same report shows very high similarity scores, including `956`, so score magnitude alone is not a safe correctness signal. This is the concrete precision gap already anticipated by this item’s requirement for measurable routing precision.

### Value category

- **Decision quality:** prevents unrelated source material from entering the wrong venture’s current-state retrieval path.
- **Risk reduction:** preserves Ground Zero’s canonical authority by failing closed on ambiguous or cross-company routes.
- **Time reclaimed:** replaces repeated manual discovery and correction of bad auto-links after each refiner run.
- **Knowledge quality:** keeps useful graph growth while making confidence and abstention inspectable.

### Smallest live test

Replay only the source/target candidates recorded in [[briefs/wiki-refiner-2026-08-23]] as a fixed, read-only fixture. Add deterministic entity guards before semantic scoring: explicit company/project names, existing source provenance links, note type, and allowed parent relationships. Produce a dry-run table with candidate target, matched evidence, rejected targets, confidence and `ROUTE` or `REVIEW` outcome. Do not edit the vault during the test.

The fixture must include these negative controls:

- personal-agent source material must not route to [[project_state/oh]] or [[project_state/ob]] without explicit OpenHouse/OpenBook evidence;
- the Here’s Health source brief must not route to [[project_state/ob]] and should prefer [[project_state/heres-health-app]] or `REVIEW`;
- a high semantic score without an entity or provenance match must abstain rather than override the company boundary.

### Evidence of success

- Zero known cross-venture false routes on the 23 August fixture.
- Every `ROUTE` row cites an explicit entity/provenance match and an allowed note-type relationship.
- Every ambiguous row lands in `REVIEW`; unavailable evidence remains `UNKNOWN`, never an inferred match.
- A second replay is byte-identical and creates no new candidate.
- A manual review of the fixture finds no source assigned to an unrelated `project_state/` note.
- The test reports precision, abstention rate and reviewed false negatives; recall is not improved by lowering the company-boundary guard.

### Downside and failure mode

A strict gate can reduce recall and leave useful sources unlinked. That is preferable to contaminating canonical project state, but the review queue could become another inbox. Keep the fixture small, surface one reason per abstention, and measure both precision and review volume. Never treat absence of an entity match as proof that no relationship exists.

### Approval boundary

Automation may read the named fixture and canonical relationship notes, compute candidate routes, and write a dry-run report outside canonical notes. It may not move or delete sources, write backlinks, edit `project_state/`, create durable facts, resolve contradictions, or change the live refiner threshold without Sam’s approval. Any future automatic write path must fail closed on company-boundary conflict and preserve the raw import.

### What it replaces

It replaces blind score-led routing and the manual after-the-fact correction of obvious cross-venture candidates. It does **not** replace source preservation, human curation, contradiction review, [[items/ops-capture-inbox-refinery]], or the existing wiki-refiner.

### Provenance

Grounded in the live 23 August refiner output in [[briefs/wiki-refiner-2026-08-23]], this item’s existing routing-precision requirement, the canonical authority rule in [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]], and the provenance/conflict rules in [[context/personal-context-data-contract]].

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-08-23]]
- [[context/automation-ideas]]
- [[context/capture-workflow]]
- [[context/learn-targets]]
- [[context/llm-wiki-pattern]]
- [[context/model-pack]]
- [[context/ops-automation-moc]]
- [[context/personal-context-data-contract]]
- [[context/review-workflow]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-vault-sync-change-receipt-gate]]
- [[project_state/heres-health-app]]
- [[project_state/ob]]
- [[project_state/oh]]

