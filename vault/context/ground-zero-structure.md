---
title: Ground Zero Structure
purpose: How the vault is organized and what belongs where
---

# Ground Zero Structure

Ground Zero is the canonical shared context source for Sam's businesses. This note explains the vault layout and the filing rules that keep the system useful. It does not cover secrets or temporary chat clutter; use the right note type and preserve history.

## When to Use

- "where does this belong?"
- "what is the vault structure?"
- "file this fact"
- "update the source of truth"
- "find the right note type"

## Prerequisites

- Vault root: `/Users/samdonworth/GroundZero/vault`
- Shared entry point: `/Users/samdonworth/GroundZero/vault/context/index.md`
- Compact context: `/Users/samdonworth/GroundZero/vault/context/model-pack.md`

## How to Run

Invoke through `read_file`, `search_files`, `patch`, and `write_file`.

Start at `vault/context/index.md`, then open the relevant domain note before editing.

## Quick Reference

- `people/` = stable personal preferences, working style, operating rules
- `companies/` = canonical facts about each venture
- `project_state/` = current headline status for active work
- `goals/` = durable outcomes and targets
- `items/` = active work and tactical tasks
- `decisions/` = durable decisions and why they were made
- `briefs/` = dated snapshots and handoff summaries
- `context/` = shared entry points and operating notes
- `capture/` = temporary inbox for uncategorized facts
- `imports/` = raw source material from external systems
- `templates/` = starter shapes for new notes

## Procedure

1. Decide whether the information is stable, live, decided, active, temporary, or raw.
2. File stable facts into `people/` or `companies/`.
3. File current status into `project_state/`.
4. File durable choices into `decisions/`.
5. File active work into `items/`.
6. File temporary scraps into `capture/inbox.md`.
7. File raw external material into `imports/`.
8. Preserve history by adding new notes or appending new facts instead of overwriting old ones.
9. If a note grows into a repeatable process, promote it into a `context/` note or a skill.

## Pitfalls

- Do not leave durable facts in `capture/inbox.md`.
- Do not store secrets in the vault.
- Do not overwrite old decisions just because the world changed.
- Do not treat `imports/` as canonical; curate useful parts into the live notes.
- Do not skip `context/index.md` when loading cross-business context.

## Verification

Use `read_file` on `/Users/samdonworth/GroundZero/vault/context/index.md` and confirm the load order plus the note-type map are present.
