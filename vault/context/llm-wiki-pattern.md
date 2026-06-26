---
title: LLM Wiki Pattern
purpose: Source-to-note workflow for a self-growing Obsidian knowledge base
---

# LLM Wiki Pattern

This note captures the operating pattern behind a Hermes-driven Obsidian knowledge base that keeps growing as new sources arrive.

## Goal

Turn raw sources into durable, interlinked markdown notes instead of letting them sit in isolation.

## Current implementation
- Refiner script: `scripts/wiki-refiner.py`
- Hermes cron job: `Ground Zero LLM Wiki Refiner` (`338ecd7eae63`)
- Daily output: `briefs/wiki-refiner-YYYY-MM-DD.md`
- Sync hook: `scripts/sync-vault.sh` runs the refiner before vault sync so the wiki compounds on every pull/push pass

## Inputs

- `vault/imports/` for raw source drops and external exports
- `vault/capture/inbox.md` for temporary scraps and transcribed prompts
- `vault/context/index.md` and `vault/context/model-pack.md` for shared starting context

## Outputs

- Curated notes in `briefs/`, `decisions/`, `items/`, `goals/`, `companies/`, and `project_state/`
- Backlinks to related notes so the vault becomes more connected over time
- A contradiction note or follow-up item when sources disagree
- Optional Telegram delivery for quick review when a cron job is configured to send it

## Procedure

1. Read the new source in full.
2. Extract durable facts, open questions, and action items.
3. Search the vault for related notes and likely duplicates.
4. Write or update the best destination note type.
5. Add backlinks to the source note and to related context notes.
6. If the source conflicts with an existing note, preserve both and flag the discrepancy instead of overwriting history.
7. Leave the raw source in `imports/` so the provenance stays intact.

## Good filing rules

- Stable facts go in `companies/` or `people/`
- Current status goes in `project_state/`
- Durable decisions go in `decisions/`
- Active work goes in `items/`
- Synthesis and context snapshots go in `briefs/`
- Temporary material stays in `capture/inbox.md` until it is classified

## Verification

A successful pass should show all of these:

- New notes link back to related vault notes
- Durable facts are filed in the right place
- Conflicts are flagged, not silently replaced
- The raw source still exists in `imports/`
- The final note set reads like a connected wiki, not a pile of isolated pages
