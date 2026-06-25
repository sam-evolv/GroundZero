---
id: openhouse-ai
name: OpenHouse AI
short: OpenHouse
sector: PropTech
---

Premium proptech SaaS platform for property developers: homeowner handover, aftercare, and sales pipeline management. Live at portal.openhouseai.ie. Built largely solo with AI tooling. Premium design is non-negotiable on every surface.

## Current priorities
1. Stabilise the production database migration. Real Longview Estates data is now live across four schemes; the backup tables are still waiting for one clean week before drop.
2. Triage the current open issues in sam-evolv/property-assistant: #195 raw markdown bold rendering, #194 tsconfig ignoreDeprecations mismatch, #130 chat-route refactor, #128 nullability cleanup, #125 RLS policy migration, #123 homeowner session design.
3. Hold every scheme portal at feature parity and at the premium bar.

## In flight
- Production migration stabilisation and backup-table cleanup.
- Vercel production deployments are healthy. Latest deployment is ready.
- PR #184 and PR #186 are merged and no longer in flight.

## Live check
- Checked 2026-06-25 16:02 Europe/Dublin. GitHub open PRs are still #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6.
- Open issues are still #195, #194, #130, #128, #125, and #123.
- Vercel production remains healthy. `npx vercel ls` shows the latest deployment for `openhouseais-projects/ground-zero` as Ready.
- Supabase CLI is installed, but `supabase status` is blocked by a stopped Docker daemon. `SUPABASE_ACCESS_TOKEN` is unset, so no remote Supabase check was attempted.

## Known gaps
- `warranty_relevant` lives only on `assistant_media_analysis`. Add a `warranty` column to `issue_reports`, or build a join view.

## Decided
- Stack is fixed: React, Next.js, Supabase, Vercel. No framework migrations.
- Security audited and hardened: ten unauthenticated endpoints remediated, leaked service role key rotated, `withAuth` middleware in place, full RLS lockdown across 35+ tables.

## Key facts
- GitHub: org `sam-evolv`, repo `sam-evolv/property-assistant`, workspace `apps/unified-portal`
- Supabase project: `mddxbilpjukwskeefakz`
- Vercel project: `prj_okAOLGbRgbTKEvbl1RgD4UsRdZX2`
- Schemes with live data: Longview Park, Ardan View, Rathard Lawn, Rathard Park
- Design: gold `#D4AF37`, near-black `#080808` / `#111827`, Inter + Source Serif 4
- Secrets live in the runtime environment only, never in the repo

## Working preferences
- Premium design is mandatory. Stability over clever refactors.
- No em dashes anywhere. Timezone Europe/Dublin.
- For any proposed fix: ranked options, exact file paths, the change, how to validate, how to roll back.

## Strategic lens
- OpenHouse should act like a premium evidence layer and workflow layer for property developers, not a generic admin SaaS.
- The product should reduce handover, aftercare, and sales friction by turning messy project state into structured, defensible customer-facing outputs.
- The moat should be trust, premium delivery, and operational leverage, not headcount.
- Build around simple infrastructure, strong context, and reusable workflows that can be automated without weakening the premium bar.
- Use AI to compress repeatable work, but keep customer-facing commitments human-reviewed.
- Prioritise regulated or proof-heavy pain points where the product can become the system of record for the relevant workflow.