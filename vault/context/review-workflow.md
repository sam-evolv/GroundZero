---
title: Review Workflow
purpose: How Ground Zero stays current over time
---

# Review Workflow

Ground Zero works best when the vault is reviewed on a schedule instead of only when something breaks. This note describes the lightweight review loop for daily status, weekly synthesis, and stale-note cleanup. It does not replace live project notes; it keeps them fresh.

## When to Use

- "review Ground Zero"
- "what changed?"
- "summarize the current state"
- "clean up stale notes"
- "prepare a weekly brief"

## Prerequisites

- Shared entry point: `/Users/samdonworth/GroundZero/vault/context/index.md`
- Compact context: `/Users/samdonworth/GroundZero/vault/context/model-pack.md`
- Current work lives in `project_state/`, `items/`, and `decisions/`

## How to Run

Invoke through `read_file`, `search_files`, `patch`, and `write_file`.

Read the current context, then update the live notes before drafting any summary.

## Quick Reference

- daily: check `project_state/` and `items/`
- weekly: review `goals/`, `decisions/`, and `briefs/`
- stale cleanup: move dead scraps out of `capture/inbox.md`
- handoff: write a dated `briefs/` note

## Connected vault notes

- [[context/automation-ideas]] — automating this review loop
- [[items/ops-daily-sync-digest]] — daily automation of this workflow
- [[items/ops-weekly-status-pack]] — weekly automation of this workflow
- [[items/ops-project-state-reconciler]] — state reconciliation
- [[project_state/oh]], [[project_state/ob]], [[project_state/renew]] — what this workflow reads
- [[items/_Index]] — what this workflow checks
- [[context/capture-workflow]] — input to the review cycle
- [[context/mirror-review-protocol]] — explicit-approval protocol for bounded historic session analysis
- [[context/personal-context-data-contract]] — provenance and correction rules for any durable findings
- [[Daily/_Index]] — daily notes produced by this workflow
- [[briefs/wiki-refiner-2026-07-17]] — latest automated refiner review

## Procedure

1. Load [[context/index]] and the relevant project_state notes.
2. Check active items and decide what moved, blocked, or completed.
3. Update project state first so the vault reflects reality.
4. Capture any new durable decisions in `decisions/`.
5. Write a brief if the review creates a useful handoff or summary.
6. Remove or refile stale scraps from `capture/inbox.md`.
7. If the same review pattern repeats, keep the note current instead of duplicating the summary in chat.

## Pitfalls

- Do not summarize before the live notes are updated.
- Do not let `capture/inbox.md` accumulate permanent content.
- Do not let `briefs/` replace real project state.
- Avoid one-off summaries that never get filed back into the vault.

## Verification

Use `read_file` on the current `project_state/` note and confirm it matches the latest active work before writing a brief.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-13-hermes-community-setup-review]]
- [[briefs/wiki-refiner-2026-07-17]]
- [[context/automation-ideas]]
- [[context/capture-workflow]]
- [[context/founder-execution-os]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/learn-targets]]
- [[context/mirror-review-protocol]]
- [[context/model-pack]]
- [[context/ops-automation-moc]]
- [[context/personal-context-data-contract]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/ground-zero-canonical]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]
- [[items/ops-vault-sync-change-receipt-gate]]
- [[items/ops-weekly-status-pack]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/renew]]

