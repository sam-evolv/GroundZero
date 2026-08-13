---
id: ground-zero-canonical
company_id: openhouse-ai
title: Ground Zero vault is the canonical shared context source for all models
date: "2026-06-19"
---

# Decision

## Decision
The git-backed Ground Zero vault at `sam-evolv/GroundZero` is the canonical shared context source for Sam across Hermes, Claude, Gemini, ChatGPT, and any other connected model.

## Context
Sam wants one durable place for the important facts, business state, and working rules so models can load context consistently instead of re-deriving it from chat history.

## Consequences
- Keep the vault structured and current.
- Read from the vault before starting new work.
- Hermes memory remains a small bootstrap cache and must not duplicate company, project or decision state. See [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]].
- Write new durable facts back into the correct note type.
- Preserve history rather than overwriting it.

## Connected vault notes

- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] — authority order and Hermes memory boundary
- [[context/ground-zero-structure]] — vault structure
- [[context/capture-workflow]] — how information flows in
- [[context/review-workflow]] — how it stays fresh
- [[context/claude-vault-integration]] — Claude integration
- [[items/ops-project-state-reconciler]] — state reconciliation
- [[README]] — pipeline update
- [[people/sam-donworth]] — founder context

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/capture-workflow]]
- [[context/claude-vault-integration]]
- [[context/ground-zero-structure]]
- [[context/review-workflow]]
- [[goals/oh-funder-pitch]]
- [[items/ops-project-state-reconciler]]
- [[people/sam-donworth]]

