---
id: oh-warranty-filter
company_id: openhouse-ai
domain: innovation
title: Add warranty filter to issue_reports dashboard
rationale: `warranty_relevant` lives only on `assistant_media_analysis`. The dashboard cannot filter issues by warranty status.
council_note: Innovation pass · Effort S
effort: S
impact: 70
state: proposed
is_one_thing: false
source: ground-zero-vault 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T20:00:00Z"
updated_at: "2026-06-09T20:00:00Z"
---

Two options: add a `warranty` column to `issue_reports` (simpler, more performant), or build a join view between `issue_reports` and `assistant_media_analysis`. Recommend option 1.
