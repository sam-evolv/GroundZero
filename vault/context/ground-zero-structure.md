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

- `people/` = stable personal preferences → [[people/sam-donworth]]
- `companies/` = canonical facts → [[companies/openhouse-ai]], [[companies/openbook]], [[companies/evolv-renewables]]
- `project_state/` = current status → [[project_state/oh]], [[project_state/ob]], [[project_state/renew]]
- `goals/` = target outcomes → [[goals/oh-activation]], [[goals/oh-v2-launch]], [[goals/ob-retention]]
- `items/` = active work → [[items/_Index]]
- `decisions/` = why choices were made → [[decisions/ground-zero-canonical]]
- `briefs/` = dated snapshots → [[briefs/planet-satellite-opportunity]], [[briefs/solar-installer-software-wedge]]
- `context/` = shared entry points → [[context/index]]
- `capture/` = temporary inbox → [[capture/inbox]]
## Connected vault notes

- [[context/index]] — main entry point
- [[context/model-pack]] — compact model context
- [[context/capture-workflow]] — how information flows in
- [[context/review-workflow]] — how it stays fresh
- [[decisions/ground-zero-canonical]] — vault is canonical
- [[README]] — pipeline update
- [[Daily/_Index]] — chronological index of daily run notes
- [[imports/claude/README.md]] — Claude import inbox
- [[templates/company]] — starter shape for companies
- [[templates/decision]] — starter shape for decisions
- [[templates/goal]] — starter shape for goals
- [[templates/item]] — starter shape for items
- [[templates/person]] — starter shape for people
- [[templates/project-state]] — starter shape for project state
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

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-13-hermes-community-setup-review]]
- [[briefs/planet-satellite-opportunity]]
- [[briefs/solar-installer-software-wedge]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[briefs/wiki-refiner-2026-06-28]]
- [[briefs/wiki-refiner-2026-06-29]]
- [[briefs/wiki-refiner-2026-06-30]]
- [[companies/evolv-renewables]]
- [[companies/openbook]]
- [[companies/openhouse-ai]]
- [[context/capture-workflow]]
- [[context/dashboard]]
- [[context/index]]
- [[context/model-pack]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/ground-zero-canonical]]
- [[goals/ob-retention]]
- [[goals/oh-activation]]
- [[goals/oh-v2-launch]]
- [[people/sam-donworth]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/renew]]

