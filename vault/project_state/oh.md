---
id: oh
company_id: openhouse-ai
headline: Database V2 is stabilising; Cairn declined the large-developer route, so OpenHouse is shifting toward funding, UK/US channels, and DTC optionality.
valid: true
updated_at: "2026-06-29T17:23:00+01:00"
role: project-state
---

The V2 rollout is still on track for end of month. Real Longview Estates data remains live across Longview Park, Ardan View, Rathard Lawn, and Rathard Park. PR #184 and PR #186 remain merged. Checked 2026-06-27 12:01 IST. GitHub open PRs remain #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6. Current open issues in sam-evolv/property-assistant remain #195, #194, #130, #128, #125, and #123. Vercel production is still Ready. Supabase remote anomaly checks are still blocked in this environment because `SUPABASE_ACCESS_TOKEN` is unset and `supabase status` cannot run without a working Docker daemon.

## Summary
- Production migration is still the top priority.
- Vercel production deployment was inspected again on 2026-06-27 at 12:01 IST and the latest deployment is Ready.
- Guardrails remain in shadow mode and the eval suite still needs expansion before flipping to active.
- Supabase remote anomaly checks are still blocked because `SUPABASE_ACCESS_TOKEN` is unset and local `supabase status` cannot reach Docker.

## Next actions
- Keep monitoring the production migration until the backup tables can be dropped after a clean week.
- Triage any open issues that affect the portal experience.

## Risks
- Supabase remote anomaly checks are blocked in this environment because no access token is available and local status checks cannot run without Docker.

## Connected vault notes

- [[companies/openhouse-ai]] - parent company
- [[goals/oh-activation]] - activation goal
- [[goals/oh-v2-launch]] - V2 migration goal
- [[goals/oh-aftercare-os]] - aftercare OS vision
- [[items/oh-production-migration]] - stabilize migration
- [[items/oh-onboarding-cut]] - strongest design candidate
- [[items/oh-warranty-triage-router]] - AI issue triage
- [[briefs/openhouse-ndrc-accelerator-pitch]] - NDRC pitch
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] - post-Cairn route reset: funding, UK/US channels, and DTC optionality
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]] - funding/backing route research
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]] - UK/US route research
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]] - DTC feasibility research
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]] - DTC as core company thesis
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]] - DTC Home Savings Scan / Home Agent plan
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]] - DTC acquisition hooks and personas
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]] - savings guarantee and DTC energy mechanisms
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]] - 14-day DTC concierge MVP execution sprint
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]] - consultancy quick-revenue strategy
- [[briefs/consultancy-cork-property-prospect-list-2026-06-30]] - Cork property prospect list for consultancy sprint
- [[imports/claude/openhouse-company-memory]] - shared signals: openhouse, company, claude

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[briefs/2026-06-28]]
- [[briefs/2026-06-30]]
- [[briefs/consultancy-cork-property-prospect-list-2026-06-30]]
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]]
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]]
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]]
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]]
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]]
- [[briefs/openhouse-ndrc-accelerator-pitch]]
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[briefs/wiki-refiner-2026-06-28]]
- [[companies/openhouse-ai]]
- [[context/capture-workflow]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/model-pack]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]
- [[goals/oh-guardrails-active]]
- [[goals/oh-room-inference]]
- [[goals/oh-v2-launch]]
- [[items/consultancy-cork-property-outreach]]
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
- [[items/ops-project-state-reconciler]]

