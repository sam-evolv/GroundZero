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
- Write new durable facts back into the correct note type.
- Preserve history rather than overwriting it.
