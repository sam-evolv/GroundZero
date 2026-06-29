---
id: openhouse-ai
name: OpenHouse AI
short: OpenHouse
sector: PropTech
role: primary-company
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
- Checked 2026-06-27 12:01 IST. GitHub open PRs are still #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6.
- Open issues are still #195, #194, #130, #128, #125, and #123.
- Vercel production remains healthy. `npx vercel ls` shows the latest deployment for `openhouseais-projects/ground-zero` as Ready.
- Supabase CLI is installed, but `supabase status` is blocked by a stopped Docker daemon. `SUPABASE_ACCESS_TOKEN` is unset, so no remote Supabase check was attempted.

## Known gaps
- `warranty_relevant` lives only on `assistant_media_analysis`. Add a `warranty` column to `issue_reports`, or build a join view.

## Connected notes

- [[project_state/oh]] - live status, migration progress
- [[goals/oh-activation]] - lift activation to 60%
- [[goals/oh-v2-launch]] - migrate every agency to Database V2
- [[goals/oh-aftercare-os]] - AI aftercare operating system vision
- [[goals/oh-funder-pitch]] - funder-grade narrative
- [[goals/oh-guardrails-active]] - flip guardrails to active
- [[goals/oh-room-inference]] - room analysis MVP
- [[items/oh-onboarding-cut]] - strongest design candidate
- [[items/oh-production-migration]] - stabilize migration
- [[items/oh-warranty-triage-router]] - AI issue triage
- [[items/oh-warranty-evidence-pack]] - warranty evidence
- [[items/oh-warranty-filter]] - warranty dashboard filter
- [[context/openhouse-product-map]] - product surface map
- [[briefs/openhouse-energy-assistant-wedge]] - energy assistant extension
- [[briefs/openhouse-ndrc-accelerator-pitch]] - NDRC pitch
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] - post-Cairn funding / UK-US / DTC strategy reset
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]] - Ireland funding and backing routes
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]] - UK/US expansion research
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]] - direct-to-consumer home context feasibility
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]] - DTC as core company thesis, not fallback
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]] - DTC Home Savings Scan / Home Agent plan
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]] - DTC acquisition hooks and personas
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]] - savings guarantee and DTC energy mechanisms
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]] - 14-day DTC concierge MVP execution sprint
- [[imports/claude/openhouse-company-memory]] - council-facing memory

## Decisions
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

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-09]]
- [[briefs/2026-06-25]]
- [[briefs/2026-06-28]]
- [[briefs/investor-pitch-deck-research-openhouse]]
- [[briefs/openhouse-chatgpt-deck-rebuild-context]]
- [[briefs/openhouse-claude-design-final-polish-prompt]]
- [[briefs/openhouse-energy-assistant-wedge]]
- [[briefs/openhouse-energy-intelligence-sketch]]
- [[briefs/openhouse-investor-brief-latest-pdf-qa-2026-06-28]]
- [[briefs/openhouse-investor-brief-update-1-qa-2026-06-28]]
- [[briefs/openhouse-investor-brief-v1-review-2026-06-28]]
- [[briefs/openhouse-investor-readiness-operating-plan]]
- [[briefs/openhouse-ndrc-accelerator-pitch]]
- [[briefs/openhouse-standalone-investor-brief-qa-2026-06-28]]
- [[briefs/planet-satellite-opportunity]]
- [[briefs/solar-installer-workflow-analysis]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[briefs/wiki-refiner-2026-06-28]]
- [[context/autonomous-business-launch-loop]]
- [[context/business-opportunities-moc]]
- [[context/capture-workflow]]
- [[context/claude-access-observed]]
- [[context/claude-quickstart]]
- [[context/claude-vault-integration]]
- [[context/consulting-wedges]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/model-pack]]
- [[context/openhouse-product-map]]
- [[context/openhouse-sales-routes]]
- [[context/ops-automation-moc]]
- [[context/scaling-playbook]]
- [[context/solo-founder-era]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]
- [[goals/oh-guardrails-active]]
- [[goals/oh-room-inference]]
- [[goals/oh-v2-launch]]
- [[items/oh-guardrails-eval]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-onboarding-cut]]
- [[items/oh-onboarding-packet-automation]]
- [[items/oh-pricing-experiment]]
- [[items/oh-production-migration]]
- [[items/oh-rls-audit]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-sprint5-close]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-filter]]
- [[items/oh-warranty-triage-router]]
- [[items/ops-pr-issue-ageing-escalator]]
- [[people/sam-donworth]]
- [[project_state/oh]]

