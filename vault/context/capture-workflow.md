---
title: Capture Workflow
purpose: How Ground Zero captures and files new information
---

# Capture Workflow

This note describes the path from raw input to a filed vault note. It is for new facts, links, screenshots, ideas, and external snippets that have not yet been classified. It does not replace the domain notes; it feeds them.

## When to Use

- "capture this"
- "where should this go?"
- "file this later"
- "sort these links"
- "ingest a raw note"

## Prerequisites

- Temporary inbox: `/Users/samdonworth/GroundZero/vault/capture/inbox.md`
- Raw import area: `/Users/samdonworth/GroundZero/vault/imports/`
- Canonical entry point: `/Users/samdonworth/GroundZero/vault/context/index.md`

## How to Run

Invoke through `read_file`, `search_files`, `patch`, and `write_file`.

Use `capture/inbox.md` for uncategorized scraps, then move the useful parts into the correct note type.
When the wiki refiner is enabled, it can auto-file confidently classifiable scraps into the right durable note and leave the ambiguous ones in the inbox for review.

## Quick Reference

- temporary scraps -> [[capture/inbox]]
- raw external source -> [[imports/claude/openhouse-company-memory]]
- stable fact -> [[people/sam-donworth]] or [[companies/openhouse-ai]]
- live status -> [[project_state/oh]]
- decision -> [[decisions/ground-zero-canonical]]
- action -> [[items/_Index]]
- reusable process -> [[context/]] or a skill

## Connected vault notes

- [[items/ops-capture-inbox-refinery]] — automates this workflow
- [[items/ops-source-to-wiki-ingest]] — auto-file sources into the wiki
- [[context/llm-wiki-pattern]] — the pattern this implements
- [[briefs/wiki-refiner-2026-06-26]] — actual refiner run
- [[context/automation-ideas]] — broader automation context

## Procedure

1. Capture the raw item in `capture/inbox.md` if it is not yet classified.
2. If the source is external and worth preserving, store the raw material in `imports/`.
3. Decide whether the item is a fact, status update, decision, task, or process.
4. Move the useful content into the right note type.
5. Add links back to related notes so the context stays connected.
6. If the same kind of capture repeats often, turn it into a template or skill.

## Pitfalls

- `capture/inbox.md` is not a parking lot for permanent knowledge.
- Raw imports are for source material, not final summaries.
- Do not mix decisions, tasks, and facts in one note when they deserve separate history.
- If a capture looks like a repeatable workflow, do not keep re-explaining it in chat.

## Verification

Use `read_file` on `/Users/samdonworth/GroundZero/vault/capture/inbox.md` and confirm it stays temporary, with durable facts filed elsewhere.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[briefs/wiki-refiner-2026-06-28]]
- [[companies/openhouse-ai]]
- [[context/automation-ideas]]
- [[context/autonomous-business-launch-loop]]
- [[context/business-opportunities-moc]]
- [[context/claude-access-observed]]
- [[context/claude-vault-integration]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/learn-targets]]
- [[context/llm-wiki-pattern]]
- [[context/model-pack]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/ground-zero-canonical]]
- [[items/oh-onboarding-packet-automation]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-index-maintenance-bot]]
- [[items/ops-source-to-wiki-ingest]]
- [[people/sam-donworth]]
- [[project_state/oh]]

