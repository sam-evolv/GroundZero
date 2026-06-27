# OpenHouse AI - Company Memory

Last updated: 27 June 2026. Maintained by Sam. The council reads this in full at the start of every run and treats it as current reality. Keep it short and current; prune anything stale.

## What OpenHouse is
A premium proptech SaaS platform for property developers: homeowner handover, aftercare, and sales pipeline management. Live homeowner and agent portals at portal.openhouseai.ie. Built largely solo with AI tooling. Premium design is non-negotiable on every surface.

## Current priorities
1. Stabilise the production database migration. Real Longview Estates data is now live across the four schemes; the backup tables are still waiting for one clean week before drop.
2. Triage the current open issues in sam-evolv/property-assistant: #195 raw markdown bold rendering, #194 tsconfig ignoreDeprecations mismatch, #130 chat-route refactor, #128 nullability cleanup, #125 RLS policy migration, #123 homeowner session design.
3. Hold every scheme portal at feature parity and at the premium bar.

## In flight - do not re-propose, track and progress
- Production migration stabilisation and backup-table cleanup.
- Vercel production deployments are healthy. Latest deployment is ready.
- PR #184 and PR #186 are merged and no longer in flight.

## Known real gaps - fair game to propose
- `warranty_relevant` lives only on `assistant_media_analysis`. Add a `warranty` column to `issue_reports`, or build a join view, so the dashboard can filter by warranty status.

## Decided - do not re-litigate
- Security was audited and hardened: ten unauthenticated endpoints remediated, a leaked service role key rotated, `withAuth` middleware in place, full RLS lockdown across 35+ tables. Posture is strong. Do not propose redoing this work; only flag genuinely new exposure.
- Stack is fixed: React, Next.js, Supabase, Vercel. Do not propose framework migrations.

## Parked - considered, not now
(Seed this as decisions accumulate, so the council stops re-proposing held ideas.)

## Key facts the council needs
- GitHub: org `sam-evolv`, repo `sam-evolv/property-assistant`, workspace `apps/unified-portal`.
- Supabase project: `mddxbilpjukwskeefakz`.
- Vercel project: `prj_okAOLGbRgbTKEvbl1RgD4UsRdZX2`.
- Schemes with live data: Longview Park, Ardan View, Rathard Lawn, Rathard Park.
- Design system: follow the OpenHouse design system skill. Brand gold `#D4AF37`, near-black `#080808` / `#111827`. Typography Inter and Source Serif 4. The bar is Apple / Stripe / Linear.
- Secrets live in the routine environment only, never in the repo and never in the brief.

## Data the council may ground recommendations in
- Supabase: advisors, error logs, the `issue_reports` and `assistant_media_analysis` tables, and pipeline data per scheme.
- Vercel: deployment status, build and runtime logs.
- GitHub: commit history, open PRs, open issues.

## Connected vault notes

- [[companies/openhouse-ai]] - curated from this import
- [[project_state/oh]] - live status derived from this memory
- [[goals/oh-activation]] - activation goal
- [[goals/oh-v2-launch]] - V2 migration goal
- [[items/oh-production-migration]] - production migration
- [[items/oh-warranty-filter]] - warranty gap noted here
- [[context/claude-vault-integration]] - how Claude reads this
- [[briefs/wiki-refiner-2026-06-26]] - refiner reviewed this file
- [[imports/campaigns/openhouse-full-context]] - master strategy + context (June 2026)
- [[imports/campaigns/openhouse-innovation-strategy]] - forward-looking analysis, unit economics, competitive landscape
- [[briefs/openhouse-energy-intelligence-sketch]] - broader energy intelligence idea sketch
- [[briefs/openhouse-energy-investor-deck-outline]] - slide-by-slide investor deck outline
- [[briefs/openhouse-energy-investor-deck-draft-v0]] - paste-ready investor deck draft

## Working preferences
- Premium design is mandatory. Stability over clever refactors. Low tolerance for repeated breakage.
- No em dashes anywhere. Timezone Europe/Dublin.
- For any proposed fix, the standard is: ranked options, exact file paths, the change, how to validate, and how to roll back.
