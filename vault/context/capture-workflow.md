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

## Quick Reference

- temporary scraps -> `capture/inbox.md`
- raw external source -> `imports/`
- stable fact -> `people/` or `companies/`
- live status -> `project_state/`
- decision -> `decisions/`
- action -> `items/`
- reusable process -> `context/` or a skill

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
