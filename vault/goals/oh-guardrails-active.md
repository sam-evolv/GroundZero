---
id: oh-guardrails-active
company_id: openhouse-ai
title: Flip guardrails to active mode
status: active
period: "2026-06"
metric: "Shadow mode to active mode"
domain: ai-safety
---

# Goal: Flip guardrails to active mode

Guardrails are currently in shadow mode. The path to active:

1. Patch confidence-scorer and proactive-clarifier
2. Build 50+ eval suite (currently 20)
3. Set up autoresearch loop
4. Flip from shadow → active

## Feeding items

- [[items/oh-guardrails-eval]] — expand eval suite from 20 to 50+ questions (M, 85)

## Grounding

- [[companies/openhouse-ai]] — guardrails are the difference between promising AI and shippable product
- [[goals/oh-aftercare-os]] — aftercare OS scales only once guardrails are active
- [[goals/oh-room-inference]] — room inference is a guardrails-sensitive surface
- [[project_state/oh]] — current eval score 4.18/5, grounding (3.8) needs work

## Why this matters

Guardrails are the gate on every AI surface. No active guardrails = no AI concierge, no auto-triage, no auto-generated packets. [[briefs/ai-money-patterns-2026-06]] notes that teams shipping AI features are moving toward stronger eval gates, especially where hallucination can damage trust.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openhouse-ai]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-room-inference]]
- [[items/oh-guardrails-eval]]
- [[items/oh-warranty-triage-router]]

