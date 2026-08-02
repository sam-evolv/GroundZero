---
title: PR 205 merge-readiness audit
company_id: openhouse-ai
created_at: "2026-08-02"
updated_at: "2026-08-02"
role: brief
status: blocked
---

# PR 205 merge-readiness audit

## Verdict

**FAIL. Do not merge PR #205 at head `ee475043c570345535f99972548b2d9c4e990ac2`.**

The data corrections are internally consistent and the answer-side matcher hardening works, but the change does not fully stop the reported answer replacement failure. The migrations also repeat a known unsafe public-backup-table pattern.

## Release blockers

### 1. The query gate still misclassifies home questions as local amenities

Changed call sites:

- `apps/unified-portal/app/api/chat/route.ts:3960-3967`
- `apps/unified-portal/app/api/chat/route.ts:4504-4509`

The code treats `detectPOICategoryExpanded(message).category !== null` as proof of genuine local intent. Focused runtime probes at the exact PR head returned:

- `How do I service my heat pump?` as `restaurant`, because `eat` matches inside `heat`
- `What colour is the spare room paint?` as `supermarket`, because `spar` matches inside `spare`
- `Tell me about my home at Longview Park` as `park`

The original failure remains reproducible end to end. A Longview Park home answer is detected as a location claim, and the false-positive query gate permits replacement with the generic amenities response.

Required fix: use explicit local or place intent, not a non-null category alone; add negative regression coverage for the reported home questions at both route call sites.

### 2. Migrations create unprotected persistent backup tables

- `migrations/071_fix_unit_38_longview_baruwa.sql:37-44`
- `migrations/072_fix_units_25_50_longview_bs02_specs.sql:25-31`

Both use `DROP TABLE` followed by `CREATE TABLE ... AS` in the default public schema. The new tables have no RLS, role revocation, protected schema or cleanup. Migration 057 already documents this exact Supabase pattern as a critical exposure because the anon key can read public tables without RLS.

Rerunning the migrations also drops the original pre-change snapshot and replaces it with post-change values, so the claimed backup and safe-rerun semantics are false.

Required fix: verify whether these tables now exist in the live OpenHouse Supabase project. Move any retained snapshot into a non-API schema with explicit revocation and RLS, or delete it after a controlled backup. Preserve the first snapshot rather than dropping it on rerun.

### 3. The migrations are not atomic through the repository migration command

`apps/unified-portal/scripts/run-migrations-local.ts:48-65` splits SQL files on semicolons and sends every statement through a separate HTTP RPC. The `BEGIN` and `COMMIT` statements in migrations 071 and 072 therefore cannot enclose the intervening updates. Partial application is possible.

Required fix: run transaction-bearing migrations through one verified atomic database connection or make the repository runner reject them.

### 4. No committed regression tests cover the changed behavior

The PR changes no test file. The stated 11/11 matcher test is not preserved in the repository. Existing amenity tests exercise a different validator and positive POI categories only.

Required fix: commit tests for `Longview Park`, `145 m²`, `central`, `spare`, `heat pump`, non-local home questions, and both route enforcement paths.

### 5. Generated compiler state is included

`apps/unified-portal/tsconfig.tsbuildinfo` is host-specific incremental compiler output and changed again during verification. Revert it from the PR and ignore generated `*.tsbuildinfo` where appropriate.

## What passed

- Exact review scope: PR head `ee475043c570345535f99972548b2d9c4e990ac2` against main `ad327a4bc337b60dd9bfe3944ff5602b2c29adcc`
- GitHub reports the PR as mergeable and Vercel green
- `npm ci` passed
- `npm run typecheck` passed
- `npm run build` passed, with missing Supabase environment warnings during static generation
- `git diff --check origin/main...HEAD` passed
- Focused matcher probes confirmed the new answer-side boundaries correctly reject `central`, `spare`, `grimace`, `145 m²` and `145 m2` as false positives while retaining real venue and distance claims
- Unit 25, 38 and 50 seed values agree on 3 bedrooms, 2 bathrooms and 1188.33 square feet; conversion to 110.4 square metres is arithmetically consistent

## Separate baseline concern

`npm audit --omit=dev` reported 37 production-dependency findings: 4 critical, 10 high, 18 moderate and 5 low. PR #205 changes no dependency manifest, so these are not attributed to this diff, but they remain a separate release-hardening backlog.

## Next action

Correct the five blockers on the PR branch, run the same focused probes plus full typecheck/build, and require a fresh independent PASS before merge. Do not deploy or reapply migrations until the live backup-table state and atomic migration path are verified.

## Connected notes

- [[items/oh-answer-quality-audit-loop]]
- [[project_state/oh]]
