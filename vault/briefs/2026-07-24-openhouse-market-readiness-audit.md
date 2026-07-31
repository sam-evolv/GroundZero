---
title: OpenHouse market-readiness audit
status: active audit
source: Canonical codebase inspection, clean production build, dependency audit, public-site review
updated: 2026-07-24
---

# OpenHouse market-readiness audit

## Bottom line

OpenHouse has the material for a meaningful developer-facing home lifecycle platform, but it is **not yet ready to be represented as an enterprise-ready, investor-ready or multi-developer rollout product**.

The strongest near-term business is not a broad proptech OS. It is a premium, repeatable developer launch service and software layer:

> **Developer handover to living-home intelligence for one scheme, with evidence-backed aftercare and energy context.**

This gives a credible land motion: sell a paid scheme launch, earn proof in a live development, then expand from handover and aftercare into portfolio intelligence.

## Direct evidence from the canonical repository

### What is real and strategically valuable

- A sizeable unified product surface exists for developer, resident, document, handover, issues, care and AI-assistance workflows.
- The model already recognises home systems including heat pumps, MVHR, solar PV, battery, EV chargers, hot water and ventilation.
- Resident guidance explicitly contains Ireland-aware high-performance-home behaviour, including heat-pump and MVHR guidance.
- The BTR surface has real routes and data types for units, tenancies, maintenance, compliance, amenities and resident welcome.
- AI governance, rate-limit, audit-log and write-protection foundations exist in the codebase.
- The canonical Git worktree builds after a clean `npm ci`.

### What prevents an honest developer-ready claim

1. **Source-control/release ambiguity**
   - The repository area contains a canonical tracked source tree and a divergent unmanaged legacy copy with contradictory application contracts.
   - Release work must use only the canonical repository root. The legacy copy must be quarantined or removed after verification.

2. **Tenant isolation was incomplete**
   - The BTR development endpoint loaded development, unit, tenancy, maintenance and compliance data by ID without verifying that the developer belonged to that tenant.
   - The super-admin unit endpoint returned purchaser contact data too broadly for its intended role.
   - Local fixes are in the isolated branch and build-verified:
     - `3e6f3098 Protect admin unit data with super-admin session gate`
     - `1bf553e5 Scope BTR development data to authenticated tenant`
   - No code is pushed or deployed.

3. **Runtime schema mutation and service-role sprawl**
   - The onboarding route can create a database table through `exec_sql` and creates its storage bucket at request time.
   - Several other runtime routes create buckets on demand.
   - Enterprise onboarding needs reviewed migrations, fixed storage policy, retention/deletion policy and environment-specific infrastructure, not live schema creation.

4. **Onboarding is not frictionless or productised**
   - Current flow is a form that uploads spreadsheet and documents then promises a human follow-up within 48 hours.
   - It does not show validation, import mapping, data-quality score, preview, acceptance criteria, launch checklist, rollback or owner/operator self-service.

5. **QR/handover contract is not production-safe**
   - The canonical QR route tenant-checks a development, but produces unsigned links to a hard-coded Replit domain.
   - It cannot be used as an enterprise handover artefact until it is replaced by an owned-domain, signed, revocable, expiry-aware invite/onboarding mechanism.

6. **Production build configuration is fail-soft**
   - Clean build exits successfully but logs missing Supabase configuration while statically generating pages.
   - Required production configuration should fail closed in production CI while a named test configuration supports local build checks.

7. **Supply-chain exposure**
   - `npm audit --omit=dev` reported 37 vulnerabilities: 4 critical, 10 high, 18 moderate, 5 low.
   - Material direct/core findings include the current Next.js range, jsPDF, Drizzle ORM, xlsx, sharp and postcss chains.
   - A formal upgrade, compatibility and regression pass is mandatory before external developer rollout.

8. **Scope and claim debt**
   - The product contains developer, agent, lettings, care, BTR, PBSA, homeowner, handover, data-hub and AI surfaces.
   - Some public marketing claims describe broad availability and automation that the codebase currently supports only partially, conditionally or through demos/fallbacks.
   - Investor diligence will identify this quickly. Narrow the story and make every public claim provable.

## Commercial diagnosis

### Do not sell first

- A generic property operating system
- Autonomous AI across sales, lettings and aftercare
- Portfolio-wide energy optimisation without live meter/device data and measured outcomes
- PBSA as a product vertical before one operator-grade workflow exists
- “Fully automated” compliance, handover, financial intelligence or cross-scheme intelligence

### Sell first

A **paid Scheme Launch and Living Home Intelligence Pilot** for a build-to-sell developer.

Deliverable for one scheme:

1. validated unit register and document pack
2. system-specific living-home model for every unit type
3. buyer QR/invite onboarding that is secure, revocable and branded
4. homeowner app that answers only from approved scheme and home information
5. developer aftercare queue with evidence, issue classification and handover completeness
6. weekly scheme launch scorecard: activation, unanswered questions, recurring issues, defect/warranty signals and resident energy-confidence signals

The customer buys a lower-risk completion and aftercare experience. OpenHouse gains the data, references and operational proof needed for expansion.

## Energy thesis: where the deeper opportunity is

Do not pitch generic “energy savings” first. The commercial wedge is **commissioning confidence and adoption of installed home systems**.

OpenHouse can become the system that links:

- as-built/commissioning documents
- named system and model data
- room, unit-type and home context
- homeowner questions and confusion patterns
- onboarding/acknowledgement records
- issue, snag and warranty evidence
- later, consented smart-meter and equipment telemetry

### First energy product: Home Performance Adoption Layer

For A-rated new homes, the immediate value is avoiding poor operation of heat pumps, MVHR, hot-water controls, solar PV, batteries and EV chargers.

It should provide:

- a short home-specific “first 30 days” journey
- maintenance and behaviour prompts based on the actual installed systems
- evidence-backed answers rather than generic chat
- structured issue capture with photo/video and warranty/installer routing
- a developer dashboard of repeated uncertainty and suspected commissioning gaps

This is stronger than an energy dashboard because it solves an immediate developer and homeowner pain without claiming savings that have not been measured.

### Second energy product: consented portfolio learning

Only after proven operational data exists:

- anonymised patterns by unit type/system configuration
- recurring comfort and system-use questions
- commissioning/aftercare cost signals
- correlation between handover completion, support burden and energy-confidence outcomes

This becomes investor-grade differentiation only when the data lineage and consent model are credible.

## BTR and PBSA recommendation

### BTR

BTR is a sensible second beachhead after build-to-sell proof because the existing BTR shape maps to genuine operator needs: turnover, maintenance, compliance, welcome and units.

But it is not ready today. Before selling BTR, deliver one operator-grade workflow end-to-end:

> **resident welcome -> maintenance intake -> triage -> work order/appointment -> resident update -> closeout evidence -> portfolio reporting**

Requirements:

- tenant and operator roles, not homeowner roles repainted
- tenancy lifecycle and void-turn controls
- service-level agreements and escalation timers
- supplier/contractor permissions
- complete audit trail and data retention policy
- integration boundary with the property-management system of record

### PBSA

The repository has PBSA labels/configuration but not a differentiated PBSA product. Do not pursue it as a sales line yet.

The eventual opportunity is not “student accommodation dashboard.” It is high-volume resident operations:

- booking/arrival/check-in
- arrival packs and room-level home knowledge
- fault reporting with media, triage and permissions
- shared-space incident and amenity workflows
- high-turnover annual reset, inventory and closeout
- multilingual, mobile-first resident help

PBSA is attractive only after the core resident-operation engine is proven in BTR or a large build-to-sell scheme.

## Readiness gates before the first external developer pilot

### P0: must close before sharing meaningful private scheme data

- [ ] one canonical source tree, release branch and deployment runbook
- [ ] route-by-route tenant-isolation audit, with automated cross-tenant tests
- [ ] remove all runtime DDL and bucket creation from request paths
- [ ] secure, revocable, expiring owned-domain onboarding links
- [ ] dependency upgrade plan closing critical/high issues
- [ ] production configuration validation that fails fast
- [ ] DPIA, data map, data-processing agreement and developer NDA template
- [ ] backups, restore test, incident response and support escalation owner

### P1: must close before charging for a pilot

- [ ] deterministic spreadsheet/document import with errors, mapping and preview
- [ ] scheme launch checklist with an explicit acceptance record
- [ ] document provenance, versioning and homeowner-facing approval process
- [ ] evidence-backed assistant evaluation suite across real home questions
- [ ] support/issue SLA, warranty handoff and operator dashboard
- [ ] measured baseline: activation, time-to-first-answer, unanswered-question rate, aftercare contacts per home, repeat issue rate

### P2: earns expansion, not first sale

- [ ] verified smart-meter/device data integrations
- [ ] BTR property-management-system integration
- [ ] portfolio benchmarking based on anonymised, consented data
- [ ] PBSA-specific operations layer

## Six-month seven-figure route

A seven-figure company in six months should mean a credible contracted revenue pipeline or annual contract value, not an ungrounded valuation claim.

### Month 1: reduce risk and create the sellable unit

- Close P0 security/release blockers.
- Strip marketing to one accountable promise: premium launch and living-home intelligence for developers.
- Package a paid pilot with fixed scope, implementation milestones, customer inputs, acceptance criteria and price.
- Use Longview as the operating proof, not as a feature catalogue.

### Months 2-3: obtain one paid design-partner deployment

- Choose one developer/scheme with an identifiable first-handover date.
- Sell implementation plus recurring per-home/platform fee.
- Deliver only the handover, system-specific home model, resident onboarding, aftercare signal and weekly evidence report.
- Establish baseline and target outcomes before launch.

### Months 3-4: convert proof into a repeatable scheme-launch playbook

- Document input template, migration/import, home model generation, quality assurance, launch and support process.
- Turn pilot results into a one-page quantified case study and investor proof pack.
- Charge implementation rather than absorbing onboarding labour.

### Months 4-6: expand within the same buyer category

- land one additional developer or second scheme from the first operator
- sell a portfolio agreement based on demonstrated reduction in handover/aftercare friction
- add energy performance adoption reporting only where evidence allows it
- keep BTR as a tightly scoped discovery/pilot conversation, not a parallel product build

## Immediate operating decision

The next strategic work should be a **30-day market-readiness hardening sprint**, not more features.

1. Establish canonical-code and release control.
2. Close P0 data and dependency risks.
3. Replace QR/onboarding with a deployment-grade scheme-launch path.
4. Select a single measurable developer pilot outcome.
5. Reconcile every public statement to evidence.

## Ireland market evidence and commercial sequencing

### Verified market facts

- RTB recorded **327,992 tenancies** at the end of 2024, including **36,521 student-specific accommodation tenancies**. Large landlords with 100+ tenancies represented 13.11% of private tenancies nationally and 26% in Dublin. Source: [RTB Annual Report 2024](https://rtb.ie/wp-content/uploads/2025/09/Annual-Report-2024.pdf).
- Ireland’s 2026 rental reforms increase the importance of retention, maintenance efficiency and operating NOI for institutional landlords. Source: [Department of Housing rental-sector reforms](https://www.gov.ie/en/department-of-housing-local-government-and-heritage/publications/government-reforms-to-the-rental-sector-starting-1-march-2026/).
- The National Student Accommodation Strategy projects approximately **42,000 beds** required by 2035, including a 15,000-bed deficit. This validates PBSA as a future vertical but not necessarily a first sales route. Source: [National Student Accommodation Strategy 2026-2035](https://www.gov.ie/en/department-of-further-and-higher-education-research-innovation-and-science/publications/national-student-accommodation-strategy-2026-2035/).
- HPI and HPP explicitly include consumer information, aftercare, commissioning, performance monitoring and post-occupancy evaluation. OpenHouse can organise the underlying evidence and homeowner workflow but must not claim to certify compliance. Sources: [HPI technical manual](https://homeperformanceindex.ie/wp-content/uploads/2025/11/HPI-Technical-Manual-v3.1.pdf) and [HPP manual](https://homeperformanceindex.ie/wp-content/uploads/2026/03/hpp_technical-manual_v1-1_26-03-12.pdf).
- SEAI is explicit that BER is an asset rating, not measured household consumption. This makes a home-specific education and consent-led data layer legitimate, but prohibits unproven savings claims. Source: [SEAI, Understand a BER](https://www.seai.ie/ber/understand-a-ber-rating).
- Smart meters record half-hourly usage. The registered customer can download consumption/export data, while supplier access to detailed data is consent-governed. OpenHouse should start with homeowner CSV/HDF upload and explicit consent, not automatic data collection. Sources: [CRU smart meters](https://www.cru.ie/consumer-information/billing/smart-meters-and-services/) and [ESB Networks usage data](https://www.esbnetworks.ie/customer-support/customer-support-queries/meter-reading/my-energy-consumption).

### Market recommendation

The commercial order is:

1. **Build-to-sell developer pilot:** Living Home Handover & Aftercare.
2. **Private BTR operator:** 90-day, 150–500-home resident operations and verified building-knowledge pilot.
3. **Private PBSA operator:** only after BTR/build-to-sell proof, as an augmentation layer rather than a booking, tenancy or welfare system.
4. **Public HEI/state-backed PBSA:** strategic later route, after a private reference, DPIA and procurement-ready security pack exist.

The BTR/PBSA pilot should measure support deflection, correct fault routing, time-to-resolution, recurring-fault signals, resident usefulness and operator-validated staff time saved. It should not claim rent optimisation, tenant scoring, automated tenancy decisions, system diagnosis or energy savings.

### Independent legacy-tree audit warning

An independent read-only review found severe unauthenticated API, QR/revocation and chat-scope vulnerabilities in a divergent local `property-assistant` copy. The canonical worktree inspected for this audit already has materially different route implementations, including QR validation and secured admin-homeowner access, so those legacy findings must **not** be misrepresented as confirmed production vulnerabilities.

They do, however, prove a P0 release-control requirement: quarantine/remove the unmanaged tree after retaining any genuinely needed changes, and confirm the Vercel deployment uses only the canonical repository and branch. Any future security audit must record exact repository root, commit SHA and deployment target.

## Connected vault notes

- [[companies/openhouse-ai]] — company context
- [[project_state/oh]] — active delivery state
- [[context/openhouse-product-map]] — current product surface
- [[briefs/openhouse-energy-assistant-wedge]] — energy wedge history
- [[briefs/openhouse-investor-readiness-operating-plan]] — investor readiness context
- [[items/oh-onboarding-cut]] — onboarding work
- [[items/oh-rls-audit]] — tenant and RLS work
- [[items/oh-handover-readiness-scan]] — launch readiness work

- [[imports/campaigns/openhouse-full-context]] — shared signals: openhouse, full

- [[imports/claude/openhouse-company-memory]] — shared signals: openhouse, company, claude
## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-27-market-intel]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-energy-assistant-wedge]]
- [[briefs/openhouse-investor-readiness-operating-plan]]
- [[briefs/openhouse-yc-acceptance-patterns-and-competitive-positioning-2026-07-29]]
- [[briefs/wiki-refiner-2026-07-25]]
- [[briefs/wiki-refiner-2026-07-26]]
- [[briefs/wiki-refiner-2026-07-27]]
- [[briefs/wiki-refiner-2026-07-28]]
- [[briefs/wiki-refiner-2026-07-29]]
- [[briefs/wiki-refiner-2026-07-30]]
- [[companies/openhouse-ai]]
- [[context/openhouse-product-map]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[items/oh-answer-quality-audit-loop]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-onboarding-cut]]
- [[items/oh-rls-audit]]
- [[project_state/oh]]

