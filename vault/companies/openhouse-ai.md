---
id: openhouse-ai
name: OpenHouse AI
short: OpenHouse
sector: PropTech
role: primary-company
---

Premium proptech SaaS platform for property developers: homeowner handover, aftercare, and sales pipeline management. Live at portal.openhouseai.ie. Built largely solo with AI tooling. Premium design is non-negotiable on every surface.

## Current priorities
1. Close the verified P0 market-readiness gates before any external developer or consumer-data rollout.
2. Keep DTC as a bounded manual evidence lane: give a free ten-minute first reveal, then require a real €79 payment or refundable commitment before deeper Upgrade Ready or Home Performance fulfilment. Twenty paid or payment-committed plans still gate broad consumer productisation. See [[decisions/openhouse-dtc-concierge-validation-2026-07-27]].
3. Package one narrow, evidence-backed developer handover pilot using the same living Home Record architecture.
4. Hold every scheme portal at feature parity and at the premium bar.
5. Validate address-to-planning-record discovery inside the bounded DTC concierge check before building a broad public-data platform. Use the official national planning and Tailte building layers for candidate discovery; keep planning-document import homeowner-led until access, copyright and reuse rights are approved. See [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]].
6. Run a bounded Context Acquisition Lab across varied permissioned homes before broad DTC UI build. Validate public-record yield, walkthrough value, installed-system confirmation, job-specific assistant confidence and homeowner effort. See [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]].
7. Validate scoped estate, phase and house-type learning plus the My Home energy evidence ladder. Use privacy-safe cohort claims rather than copying household records; begin with HDF and bills, then add approved vendor connections where they change the homeowner's answer. Use the Longview show house for the connection pipeline and an occupied home for outcome validation. See [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]].
8. Enforce the ten-minute DTC activation contract: address or Eircode, building confirmation, consent, one goal and at most one optional evidence action must produce a credible home-specific benefit. Serial numbers may identify and bind devices but cannot replace approved homeowner authorisation. See [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]].
9. Run the pre-build truth tests in sequence: first one operator-mediated test on Sam's occupied home, then Longview with organisational permission for pre-provisioning and connection feasibility, then one independently consented older data-poor home without founder advantage. These tests validate activation and evidence quality, not paid demand. See [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]].

## In flight
- Production migration stabilisation and backup-table cleanup.
- Vercel production deployments are healthy. Latest deployment is ready.
- Carol Tallon has offered a warm introduction to Bridgewater Developments. This is an active lead, being researched and prepared in parallel with marketing-site refinement. See [[items/oh-bridgewater-warm-introduction]].
- PR #184 and PR #186 are merged and no longer in flight.

## Live check
- Checked 2026-07-01. GitHub open PRs are #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6.
- Open issues are #195, #194, #130, #128, #125, and #123.
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
- [[briefs/2026-08-10-aire-business-operating-intelligence-thesis]] - exploratory shared platform thesis positioning OpenHouse as a potential deep vertical proof
- [[briefs/2026-08-10-openhouse-west-x-west-future-foundry-entry]] - Future Foundry entry audit; strong fit but published 12-month incorporation rule requires written organiser clearance before submission
- [[briefs/2026-08-04-yc-ireland-founder-fit-opportunity-screen]] - five-year YC screen; validates builder warranty and aftercare as OpenHouse's strongest founder-fit opportunity, with planning assurance as the best separate experiment
- [[briefs/openhouse-world-class-marketing-site-research-2026-07-23]] - research-backed marketing-site creative direction, interaction system, validation and performance targets
- [[briefs/kimi-k3-low-bit-edge-ai-opportunity-2026-07-20]] - model-swappable and edge-ready home intelligence direction
- [[briefs/openhouse-ndrc-accelerator-pitch]] - NDRC pitch
- [[briefs/openhouse-ndrc-submission-sprint-2026-07-01]] - active NDRC submission sprint and deck QA plan
- [[briefs/openhouse-ndrc-application-pack-2026-07-01]] - NDRC application fields, answers, blockers and upload checklist
- [[briefs/openhouse-ndrc-interview-final-card-2026-07-29]] - final NDRC interview script, panel preparation and factual claim guardrails
- [[briefs/openhouse-ndrc-slide-2-capability-breadth-prompt-2026-07-28]] - bounded Slide 2 enhancement prompt, preserving the approved NDRC narrative
- [[briefs/openhouse-pre-revenue-vc-shortlist-2026-07-29]] - assessed pre-revenue investor shortlist and fit objections
- [[briefs/2026-07-30-openhouse-yc-usage-evidence]] - read-only production audit supporting the conservative 259-question / 79-home YC usage metric and developer intelligence loop
- [[briefs/openhouse-yc-fall-2026-voice-redraft-2026-07-30]] - non-canonical natural-language YC redraft for Sam's review
- [[briefs/openhouse-yc-fall-2026-first-principles-full-review-2026-07-30]] - complete first-principles YC candidate in authenticated live-form order with unresolved founder gates preserved
- [[briefs/openhouse-yc-fall-2026-high-conviction-redraft-2026-07-30]] - high-conviction YC rewrite centred on the exact-home intelligence layer and developer learning loop
- [[briefs/openhouse-yc-portal-release-readiness-audit-2026-07-30]] - end-to-end YC reviewer-access, My Home and main-publication audit; current verdict is blocked-do-not-publish
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] - post-Cairn funding / UK-US / DTC strategy reset
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]] - Ireland funding and backing routes
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]] - UK/US expansion research
- [[briefs/openhouse-dtc-master-plan-2026-07-27]] - canonical DTC product, context, integration, economics, GTM and validation strategy
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]] - verified Irish planning, building, energy and environmental data sources; address-matching architecture; privacy and document-rights guardrails; 20-home concierge validation
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]] - exhaustive home-context acquisition model, show-house evidence-value audit, claim-level confidence ladder, agentic signup flow and Context Acquisition Lab
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]] - privacy-safe estate and house-type learning, adaptive My Home evidence modes, consumer energy-source model and Longview connection pilot
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]] - three-home pre-build truth test covering founder usefulness, Longview connection feasibility, older-home activation, hidden lifecycle risks and build gates
- [[briefs/openhouse-dtc-voice-stress-test-synthesis-2026-07-27]] - reviewed voice-session implications, corrections and dual-wedge test
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]] - category north star and first recurring proof loop
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]] - bounded €79 dual-wedge validation decision
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]] - non-negotiable activation inputs, passive acquisition order, serial-number boundary, first-value contract and DTC failure conditions
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]] - direct-to-consumer home context feasibility
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]] - DTC as core company thesis, not fallback
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]] - DTC Home Savings Scan / Home Agent plan
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]] - DTC acquisition hooks and personas
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]] - savings guarantee and DTC energy mechanisms
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]] - 14-day DTC concierge MVP execution sprint
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]] - consultancy quick-revenue strategy
- [[briefs/consultancy-cork-property-prospect-list-2026-06-30]] - Cork property prospect list for consultancy sprint
- [[imports/claude/openhouse-company-memory]] - council-facing memory

## Decisions
- Stack is fixed: React, Next.js, Supabase, Vercel. No framework migrations.
- Security audited and hardened: ten unauthenticated endpoints remediated, leaked service role key rotated, `withAuth` middleware in place, full RLS lockdown across 35+ tables.
- Public-data enrichment converges into the same living Home Record. OpenHouse stores source artifacts and claim-level provenance, retrieves relevant evidence on demand, and never silently promotes planning, mapping or area context to confirmed as-built or measured household fact.
- Assistant confidence is claim-specific and job-specific, not one score for the whole home. Address confirmation should trigger background evidence recovery; the homeowner supplies one proof and receives value before any broader inventory is requested.
- Context acquisition will be exhausted through the bounded [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]] before broad DTC productisation, while preserving the existing paid concierge and deployment gates.
- Broad paid DTC must meet the [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]: a credible home-specific result from minimal compulsory input, with further evidence requested progressively only when its benefit is clear.

## Key facts
- Legal entity: OpenHouse Ai Limited, Irish company number 807744, incorporated 4 February 2026 and owned 100% by Sam Donworth.
- Serious product development began in October 2025. Sam has built it during evenings and weekends alongside Longview and has never yet worked on it full-time.
- Revenue is €0 as of 2026-07-29. Sam has self-funded approximately €10,000 and reports no outside investment.
- Sam is the sole founder and no human non-founder has written product code. AI coding agents are used extensively under Sam's product and technical responsibility.
- If accepted by YC, Sam is fully committed to OpenHouse, will leave his current role, work exclusively on the company and is open to relocating to San Francisco if needed.
- Sam is not actively looking for a cofounder but would consider an exceptional person with proven execution, strong alignment and a relevant network.
- OpenHouse is Sam's first and only company considered for a YC application.
- Sam completed the NDRC pre-accelerator interview on 29 July 2026; the formal decision is pending, with no offer, funding, equity request or commitment.
- OpenHouse was built primarily on Sam's personal time using his own equipment, accounts and money. Limited work occurred during Longview hours because it was used in the live workflow, but it was not an assigned Longview duty. Sam reports no employment IP or invention-assignment clause and no third-party promise of OpenHouse IP, equity or future rights.
- Sam personally controls the code and product assets. They have not yet been formally assigned to OpenHouse Ai Limited; the assignment should be completed before outside investment.
- Sam initiated the internal Longview deployment within his operating remit as one of three people running the developer. The other principals knew of it and fully backed it. No separate written commercial, DPA, licence or IP agreement exists between Longview and OpenHouse.
- Sam is one of three people responsible for delivering Longview Estates Limited's town-scale mixed-use development. More than 200 homes have been completed. The current scheme includes 753 homes, with a further 260-plus homes in planning, as well as a supermarket, retail units, a nursing home, primary care centre, pharmacy, schools and a crèche. Sam works across financing, design-team coordination, potential vendors, sales, handover, aftercare and day-to-day development operations.
- GitHub: org `sam-evolv`, repo `sam-evolv/property-assistant`, workspace `apps/unified-portal`
- Supabase project: `mddxbilpjukwskeefakz`
- Vercel project: `prj_okAOLGbRgbTKEvbl1RgD4UsRdZX2`
- Schemes with live data: Longview Park, Ardan View, Rathard Lawn, Rathard Park
- As of 29 July 2026, after excluding one identifiable internal QA home, the production assistant had answered 259 property-specific questions across 79 home contexts in those four Longview developments. Of these, 245 were not built-in suggested prompts. See [[briefs/2026-07-30-openhouse-yc-usage-evidence]].
- Design: [[context/openhouse-openbook-design-system]] is canonical. Gold `#D4AF37`, near-black `#080808` / `#111827`, Inter + Source Serif 4, JetBrains Mono for numerics, Lucide icons and exact tokens from the stored source package.
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
- [[briefs/2026-06-30]]
- [[briefs/2026-07-14-morning-briefing-golf-cara]]
- [[briefs/2026-07-21-escape-velocity-income-engine]]
- [[briefs/2026-07-22-reset-and-bridgewater-opportunity]]
- [[briefs/2026-07-22-six-month-agent-co-pilot-challenge]]
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
- [[briefs/2026-07-24-openhouse-openbook-reset]]
- [[briefs/2026-07-30-openhouse-yc-live-application-execution]]
- [[briefs/2026-07-30-openhouse-yc-usage-evidence]]
- [[briefs/2026-08-01-openhouse-care-password-and-authority-hardening]]
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]]
- [[briefs/2026-08-03-openhouse-accelerator-waiting-period-plan]]
- [[briefs/2026-08-04-bridgewater-meeting-preparation]]
- [[briefs/2026-08-04-business-post-ai-leadership-awards-application]]
- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[briefs/2026-08-04-openhouse-care-installer-paid-validation]]
- [[briefs/2026-08-04-openhouse-dtc-upgrade-ready-plan-validation]]
- [[briefs/2026-08-04-openhouse-founder-morning-action-brief]]
- [[briefs/2026-08-04-openhouse-product-truth-night-audit]]
- [[briefs/2026-08-04-openhouse-qualified-developer-outreach-queue]]
- [[briefs/2026-08-04-openhouse-rapid-onboarding-runbook]]
- [[briefs/2026-08-04-tuesday-founder-regroup]]
- [[briefs/2026-08-04-yc-ireland-founder-fit-opportunity-screen]]
- [[briefs/2026-08-05-personal-intelligence-and-bridgewater-readiness]]
- [[briefs/2026-08-05-yc-2026-rfs-opportunity-map]]
- [[briefs/agentic-value-creation-revenue-cara-proof-plan-2026-07-14]]
- [[briefs/bridgewater-openhouse-discovery-brief-2026-07-22]]
- [[briefs/chatgpt-voice-founder-os-2026-07-31]]
- [[briefs/consultancy-cork-property-prospect-list-2026-06-30]]
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]]
- [[briefs/hermes-community-use-cases-2026-07-28]]
- [[briefs/investor-pitch-deck-research-openhouse]]
- [[briefs/kimi-k3-low-bit-edge-ai-opportunity-2026-07-20]]
- [[briefs/openhouse-a-rated-homeowner-policy-thesis-2026-07-28]]
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]]
- [[briefs/openhouse-chatgpt-deck-rebuild-context]]
- [[briefs/openhouse-claude-design-final-polish-prompt]]
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]]
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]]
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-dtc-voice-stress-test-synthesis-2026-07-27]]
- [[briefs/openhouse-energy-assistant-wedge]]
- [[briefs/openhouse-energy-intelligence-sketch]]
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]]
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-investor-brief-latest-pdf-qa-2026-06-28]]
- [[briefs/openhouse-investor-brief-update-1-qa-2026-06-28]]
- [[briefs/openhouse-investor-brief-v1-review-2026-06-28]]
- [[briefs/openhouse-investor-readiness-operating-plan]]
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]]
- [[briefs/openhouse-ndrc-accelerator-pitch]]
- [[briefs/openhouse-ndrc-application-pack-2026-07-01]]
- [[briefs/openhouse-ndrc-interview-final-card-2026-07-29]]
- [[briefs/openhouse-ndrc-pre-accelerator-rehearsal-2026-07-28]]
- [[briefs/openhouse-ndrc-pre-accelerator-three-slide-fable-prompt-2026-07-28]]
- [[briefs/openhouse-ndrc-slide-2-capability-breadth-prompt-2026-07-28]]
- [[briefs/openhouse-ndrc-submission-sprint-2026-07-01]]
- [[briefs/openhouse-perfect-yc-application-playbook-2026-07-29]]
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[briefs/openhouse-pre-revenue-vc-shortlist-2026-07-29]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/openhouse-recent-yc-acceptance-range-assessment-2026-07-29]]
- [[briefs/openhouse-show-house-evidence-capture-2026-07-28]]
- [[briefs/openhouse-standalone-investor-brief-qa-2026-06-28]]
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]]
- [[briefs/openhouse-world-class-marketing-site-research-2026-07-23]]
- [[briefs/openhouse-yc-acceptance-patterns-and-competitive-positioning-2026-07-29]]
- [[briefs/openhouse-yc-fall-2026-first-principles-full-review-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-high-conviction-redraft-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-live-form-candidate-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-voice-redraft-2026-07-30]]
- [[briefs/openhouse-yc-portal-release-readiness-audit-2026-07-30]]
- [[briefs/planet-satellite-opportunity]]
- [[briefs/sam-90-day-cash-authority-plan-2026-07-13]]
- [[briefs/solar-installer-workflow-analysis]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[briefs/wiki-refiner-2026-06-28]]
- [[briefs/wiki-refiner-2026-06-29]]
- [[briefs/wiki-refiner-2026-06-30]]
- [[briefs/wiki-refiner-2026-07-01]]
- [[briefs/wiki-refiner-2026-07-02]]
- [[briefs/wiki-refiner-2026-07-03]]
- [[briefs/wiki-refiner-2026-07-04]]
- [[briefs/wiki-refiner-2026-07-05]]
- [[briefs/wiki-refiner-2026-07-06]]
- [[briefs/wiki-refiner-2026-07-07]]
- [[briefs/wiki-refiner-2026-07-08]]
- [[briefs/wiki-refiner-2026-07-09]]
- [[briefs/wiki-refiner-2026-07-10]]
- [[briefs/wiki-refiner-2026-07-11]]
- [[briefs/wiki-refiner-2026-07-12]]
- [[briefs/wiki-refiner-2026-07-13]]
- [[briefs/wiki-refiner-2026-07-14]]
- [[briefs/wiki-refiner-2026-07-15]]
- [[briefs/wiki-refiner-2026-07-16]]
- [[briefs/wiki-refiner-2026-07-17]]
- [[briefs/wiki-refiner-2026-07-18]]
- [[briefs/wiki-refiner-2026-07-19]]
- [[briefs/wiki-refiner-2026-07-20]]
- [[briefs/wiki-refiner-2026-07-21]]
- [[briefs/wiki-refiner-2026-07-22]]
- [[briefs/wiki-refiner-2026-07-23]]
- [[briefs/wiki-refiner-2026-07-24]]
- [[briefs/wiki-refiner-2026-07-25]]
- [[briefs/wiki-refiner-2026-07-26]]
- [[briefs/wiki-refiner-2026-07-27]]
- [[briefs/wiki-refiner-2026-07-28]]
- [[briefs/wiki-refiner-2026-07-29]]
- [[briefs/wiki-refiner-2026-07-30]]
- [[briefs/wiki-refiner-2026-07-31]]
- [[briefs/wiki-refiner-2026-08-01]]
- [[briefs/wiki-refiner-2026-08-02]]
- [[briefs/wiki-refiner-2026-08-03]]
- [[briefs/wiki-refiner-2026-08-04]]
- [[briefs/wiki-refiner-2026-08-05]]
- [[briefs/wiki-refiner-2026-08-06]]
- [[briefs/wiki-refiner-2026-08-07]]
- [[briefs/wiki-refiner-2026-08-08]]
- [[briefs/wiki-refiner-2026-08-09]]
- [[context/agentic-value-creation-mission]]
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
- [[context/openhouse-openbook-design-system]]
- [[context/openhouse-product-map]]
- [[context/openhouse-sales-routes]]
- [[context/ops-automation-moc]]
- [[context/scaling-playbook]]
- [[context/solo-founder-era]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]
- [[goals/oh-guardrails-active]]
- [[goals/oh-room-inference]]
- [[goals/oh-v2-launch]]
- [[items/consultancy-cork-property-outreach]]
- [[items/oh-bridgewater-rapid-onboarding]]
- [[items/oh-bridgewater-warm-introduction]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-guardrails-eval]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-onboarding-cut]]
- [[items/oh-onboarding-packet-automation]]
- [[items/oh-pricing-experiment]]
- [[items/oh-production-migration]]
- [[items/oh-proof-asset-engine]]
- [[items/oh-rls-audit]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-sean-gallagher-reconnection]]
- [[items/oh-sprint5-close]]
- [[items/oh-uk-aftercare-design-partner-sprint]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-filter]]
- [[items/oh-warranty-triage-router]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-pr-issue-ageing-escalator]]
- [[people/sam-donworth]]
- [[project_state/oh]]

