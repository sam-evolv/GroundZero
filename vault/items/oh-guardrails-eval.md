---
id: oh-guardrails-eval
company_id: openhouse-ai
domain: innovation
title: Expand guardrails eval suite from 20 to 50+ questions
rationale: Current eval covers 6 dimensions with 20 questions. Score is 4.18/5 but grounding (3.8) and consistency need work. Bigger eval suite will catch more edge cases before flipping to active mode.
council_note: Innovation pass · Effort M
effort: M
impact: 85
state: proposed
is_one_thing: false
source: ground-zero-vault 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T20:00:00Z"
updated_at: "2026-06-09T20:00:00Z"
---

Custom TypeScript guardrail system on main. 6 modules: confidence-scorer, conversation-tracker, proactive-clarifier, adaptive-thresholds, orchestrator, types. Shadow mode default. Critical failures: role mis-mapping, unverified spec claims, ambiguity non-handling, conversational inconsistency, product unawareness.
