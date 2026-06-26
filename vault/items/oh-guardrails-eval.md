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
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
Guardrails is the difference between a promising AI surface and a shippable product. Expanding the eval suite increases confidence before active mode.

## Technical approach
- Expand from 20 questions to 50+.
- Cover the six current dimensions plus adversarial cases.
- Add scenarios for ambiguity handling, product awareness, and unverified claims.
- Treat evals as a living regression suite, not a one-off test.

## Risks
- Test set bloat without better signal.
- Overfitting the system to the eval suite.
- Maintenance overhead if the questions are not tied to real failures.

## Effort
M. A few days to write and tune the additional questions, then ongoing upkeep.

## Market timing
Very timely. Teams shipping AI features are moving toward stronger eval gates, especially where hallucination and ambiguity can damage trust.

## Connects to

- [[goals/oh-guardrails-active]] — the goal this eval feeds
- [[goals/oh-aftercare-os]] — aftercare OS needs active guardrails
- [[items/oh-warranty-triage-router]] — triage is guardrails-sensitive
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- oh-aftercare-os
- room inference
- premium support and triage surfaces


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/dashboard]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-guardrails-active]]

## Recommendation
This should stay inside the active guardrails project. Once the suite is bigger and stable, it becomes reasonable to flip from shadow to active mode.
