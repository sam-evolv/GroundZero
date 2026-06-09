---
id: oh-sprint5-close
company_id: openhouse-ai
domain: innovation
title: Close Sprint 5 — PR #184 and #186
rationale: Two tickets holding up the sprint. PR #184 is a one-line wiring fix. PR #186 needs drift enforcement between the prompt source of truth and the served copy.
council_note: Innovation pass · Effort S
effort: S
impact: 90
state: proposed
is_one_thing: false
source: ground-zero-vault 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T20:00:00Z"
updated_at: "2026-06-09T20:00:00Z"
---

PR #184: `issue_reports` has an `issue_category` column that the multimodal route does not populate. Fix at `route.ts` lines 439-458. Good candidate for an autonomous Claude Code PR.

PR #186: `docs/prompts/housing-reasoning-v1.md` is the source of truth, with a verbatim copy in `apps/unified-portal/lib/housing-reasoning/v1/prompt.ts`. No drift enforcement. Recommend a CI check that fails on drift.
