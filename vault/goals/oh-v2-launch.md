---
id: oh-v2-launch
company_id: openhouse-ai
title: Migrate every agency to Database V2
status: active
period: "2026-06"
metric: "70% to 100% migrated"
domain: platform
---

# Goal: Migrate every agency to Database V2

**Target:** move from 70% to 100% V2 migration by end of June 2026.

Real Longview Estates data is live across four schemes. Backup tables are waiting for one clean week before drop.

## Feeding items

- [[items/oh-production-migration]] — stabilize migration + drop backup tables (S, 95)
- [[items/oh-rls-audit]] — launch-critical RLS policy audit (S, building)
- [[items/oh-live-portal-boundary-activation]] — approval-gated required merge check and V2 deployment isolation

## Release boundary · 3 August 2026

Database V2 progression does not authorise the new homeowner **My Home** surface on current live portals. Under [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]], live fixes remain based on `origin/main` while My Home stays on the isolated V2 branch and preview. A future rollout requires a server-controlled, default-off capability gate and exact-home readiness proof; a client-side flag alone is insufficient.

## Grounding

- [[companies/openhouse-ai]] — stack facts, live schemes, known gaps
- [[project_state/oh]] — migration status, open PRs, Vercel health
- [[goals/oh-activation]] — activation work scales only after V2 is stable
- [[goals/oh-aftercare-os]] — aftercare OS builds on V2 data model
- [[goals/oh-funder-pitch]] — migration completion de-risks the funder story

## Signals to watch

- migration progress (% schemes on V2)
- backup-table validation clean week
- open PRs / issues that block migration
- Supabase remote anomaly checks (blocked until SUPABASE_ACCESS_TOKEN is set)

## Why this matters

V2 is the platform. Every other goal — activation, aftercare OS, funder pitch — builds on top of it. [[briefs/2026-06-09]] called stabilization the top priority.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-09]]
- [[briefs/2026-08-03-current-live-boundary-and-v2-handoff]]
- [[companies/openhouse-ai]]
- [[context/ground-zero-structure]]
- [[context/model-pack]]
- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]
- [[items/oh-live-portal-boundary-activation]]
- [[items/oh-pricing-experiment]]
- [[items/oh-production-migration]]
- [[items/oh-rls-audit]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-sprint5-close]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-pr-issue-ageing-escalator]]
- [[project_state/oh]]

