---
id: ops-project-state-reconciler
company_id: ground-zero
domain: ops
title: Reconcile project_state and company memory from live signals
rationale: The daily run keeps rebuilding the same current state from PRs, issues, deployments, and recent notes, then manually patches project_state and company memory.
council_note: State sync pass · Effort M
effort: M
impact: 87
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-26
run_date: "2026-06-26"
created_at: "2026-06-26T18:02:52+01:00"
updated_at: "2026-06-26T18:02:52+01:00"
---

## What the automation does
Reads the live signals and compares them with `project_state/` and the OpenHouse company memory, then drafts a minimal update or patch for only the notes that drifted. It should preserve human review for any contradiction and keep the canonical state aligned after each sync.

## Tools and APIs
- Local filesystem access to `vault/project_state/`, `vault/companies/`, and `vault/items/`
- GitHub API for PR and issue state
- Vercel status checks
- Supabase CLI or API where credentials allow
- Optional LLM diff summarisation for deciding what changed

## Estimated setup effort
M. The main work is mapping live signals to the right note fields and making sure the diffs stay small.

## Expected time savings
15 to 25 minutes per day, plus less drift between the live systems and the vault.

## Priority ranking
P1

## Connects to
- daily ops digest
- daily report pack
- OpenHouse company memory
- project_state notes

## Recommendation
Strong candidate because it removes the most repetitive bookkeeping after the daily status sweep. It also reduces the chance that later analyses run on stale state.
