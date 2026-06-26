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

- capture workflow
- review workflow
- briefs and decisions hygiene
- daily ops digest
- model-pack and context index maintenance
