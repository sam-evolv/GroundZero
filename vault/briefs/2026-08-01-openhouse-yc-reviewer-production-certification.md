---
title: OpenHouse YC reviewer production certification
company_id: openhouse-ai
date: 2026-08-01
status: certified
source: verified production migration, direct data-plane probes and browser tests
---

# OpenHouse YC reviewer production certification

## Scope

This note records the credential-free production certification of the dedicated YC reviewer experience at `https://openhouse-yc-showhouse.vercel.app` for the sanitized, unoccupied show house at **8 Longview Park**.

The reviewer identity remains exact-home `reviewer_full`. Existing reviewer credentials were not rotated, reset, renamed, rewritten or replaced. No credentials, cookies, tokens, database URLs or service keys are stored here.

## Live deployment

- Stable URL: `https://openhouse-yc-showhouse.vercel.app`
- Reviewed Vercel deployment: `dpl_8G4UazFJPjBukkyAPjyTTQ1xN8Rz`
- Deployment target: preview
- Deployment status at certification: Ready
- Authentic portal journey: pass
- Reviewer home: 8 Longview Park
- Cross-home access: denied

## Assistant grounding

The live Assistant answered the AquaBox warranty question using the strict sanitized home-record projection:

> The warranty for the AquaBox Systems water system in your home runs until 7 November 2026.

Controls verified:

- Explicit metadata allowlist only
- Unknown and private keys excluded
- Serialized record capped at 3,200 UTF-8 bytes
- Warranty evidence survives compaction fallbacks
- Metadata treated as data, never instructions
- ISO dates rendered as `D Month YYYY`

## Production migration 076

Migration `076_fix_developments_users_rls_recursion.sql` was applied on 1 August 2026 as the complete independently reviewed artifact.

- SHA-256: `7688bcd68ebf7238a8f54147872c64bdf3224cfde837263497553e5769a0ca49`
- Execution: `psql -X` with `ON_ERROR_STOP=1`
- Transaction: explicit and complete
- Result: committed
- Purpose: remove SQLSTATE `42P17` recursion from direct `developments` and `users` reads without granting reviewer access

Postconditions:

- Two required helpers exist
- Both helpers are owned by `postgres`
- Both are `SECURITY DEFINER`
- Both use fixed `search_path = pg_catalog`
- `PUBLIC` and `anon` have no execute grants
- Only `authenticated` and `service_role` have required execute grants
- Exact replacement SELECT policies exist with `TO authenticated`

## Direct data-plane certification

Post-migration probes passed:

- REST: 163 tables, 326 anonymous/reviewer requests, zero non-empty responses, zero unexpected errors
- Direct inserts: denied
- RPC: anonymous denied, reviewer denied, service role retained
- Storage: no violating private listings or object access
- GraphQL extension: absent in production (`pg_graphql` extension count zero)
- GraphQL endpoint: five known sensitive collections probed for anonymous access and five for reviewer access; all ten returned GraphQL errors and exposed no rows
- SQLSTATE `42P17`: eliminated from direct REST certification

## Browser and lifecycle certification

The stable portal passed:

- Existing-credential login
- Exact-home `reviewer_full` binding
- Documents: 59
- Videos: 1
- Noticeboard
- Note create, read, update and delete
- Cross-home denial
- Browser restart
- Copied foreign URL containment
- Missing-capability recovery
- Logout clearing both capability and Supabase authorization
- Relogin
- Grant expiry denial
- Grant revocation denial
- Fresh login denial after expiry and revocation
- Grant restoration
- Live Assistant grounding to 7 November 2026

## Final independent verdict

- **PASS, 2026-08-01.** The first final review requested explicit GraphQL-disabled evidence. Production confirmed `pg_graphql_extension_count = 0`, and all ten known sensitive-collection probes were denied across anonymous and reviewer roles. The independent re-review confirmed the sole blocker closed and reported no remaining certification blockers.

## Remaining non-blocking product work

- Prove Care magic-link continuity using a real authorized Care account, without weakening anonymous installation access.
- Replace or formally accept dependency risk for `xlsx`, which has no registry fix.
- Plan a compatibility-tested AI SDK upgrade for the transitive `undici` advisory; do not force an unsafe package override.
- Package the remediation as clean reviewable repository changes before merge. Do not push, deploy or merge without the normal approval path.

## Connected vault notes

- [[briefs/openhouse-yc-fall-2026-live-form-candidate-2026-07-30]] — canonical submitted YC application evidence
- [[project_state/oh]] — current OpenHouse project state
- [[companies/openhouse-ai]] — company context
- [[items/oh-production-migration]] — production migration workstream
