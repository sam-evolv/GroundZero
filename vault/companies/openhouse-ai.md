---
id: openhouse-ai
name: OpenHouse AI
short: OpenHouse
sector: PropTech
---

Premium proptech SaaS platform for property developers: homeowner handover, aftercare, and sales pipeline management. Live at portal.openhouseai.ie. Built largely solo with AI tooling. Premium design is non-negotiable on every surface.

## Current priorities
1. Stabilise the production database migration. Real Longview Estates data is now live across four schemes; backup tables to be dropped after a clean week.
2. Close Sprint 5 tickets: PR #184 (issue_category wiring) and PR #186 (housing-reasoning prompt drift).
3. Hold every scheme portal at feature parity and at the premium bar.

## In flight
- PR #184: `issue_reports` has an `issue_category` column that the multimodal route does not populate. One-line wiring fix at the insert block, `route.ts` lines 439-458.
- PR #186: housing-reasoning prompt has dual storage. `docs/prompts/housing-reasoning-v1.md` is the source of truth, with a verbatim copy in `apps/unified-portal/lib/housing-reasoning/v1/prompt.ts` actually served to the model. No drift enforcement.
- Production migration stabilisation and backup-table cleanup.

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
