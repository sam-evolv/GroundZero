# OpenHouse AI — Company Memory

Last updated: 2 June 2026. Maintained by Sam. The council reads this in full at the start of every run and treats it as current reality. Keep it short and current; prune anything stale.

## What OpenHouse is
A premium proptech SaaS platform for property developers: homeowner handover, aftercare, and sales pipeline management. Live homeowner and agent portals at portal.openhouseai.ie. Built largely solo with AI tooling. Premium design is non-negotiable on every surface.

## Current priorities
1. Stabilise the production database migration. Real Longview Estates data is now live across the four schemes; the backup tables are to be dropped after a clean week.
2. Close the two open Sprint 5 tickets, #184 and #186.
3. Hold every scheme portal at feature parity and at the premium bar.

(Re-rank this list as priorities move.)

## In flight — do not re-propose, track and progress
- PR #184: `issue_reports` has an `issue_category` column that the multimodal route does not populate. One-line wiring fix at the insert block, `route.ts` lines 439-458. Good candidate for an autonomous `claude/`-branch PR.
- PR #186: the housing-reasoning prompt has dual storage. `docs/prompts/housing-reasoning-v1.md` is the stated source of truth, with a verbatim copy in `apps/unified-portal/lib/housing-reasoning/v1/prompt.ts` actually served to the model, and no drift enforcement. Fix options: a build step that reads the `.md` at compile time, or a CI check that fails on drift.
- Production migration stabilisation and backup-table cleanup.

## Known real gaps — fair game to propose
- `warranty_relevant` lives only on `assistant_media_analysis`. Add a `warranty` column to `issue_reports`, or build a join view, so the dashboard can filter by warranty status.

## Decided — do not re-litigate
- Security was audited and hardened: ten unauthenticated endpoints remediated, a leaked service role key rotated, `withAuth` middleware in place, full RLS lockdown across 35+ tables. Posture is strong. Do not propose redoing this work; only flag genuinely new exposure.
- Stack is fixed: React, Next.js, Supabase, Vercel. Do not propose framework migrations.

## Parked — considered, not now
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

## Working preferences
- Premium design is mandatory. Stability over clever refactors. Low tolerance for repeated breakage.
- No em dashes anywhere. Timezone Europe/Dublin.
- For any proposed fix, the standard is: ranked options, exact file paths, the change, how to validate, and how to roll back.
