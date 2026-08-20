---
title: OpenHouse DTC Master Plan
date: 2026-07-27
status: canonical-strategy
company_id: openhouse-ai
source: Sam voice direction plus current-source product, integration and GTM research
---

# OpenHouse DTC Master Plan

## Executive decision

OpenHouse should build a direct-to-consumer line, but it should not launch as a generic AI home assistant, a document vault, an energy dashboard or an inexpensive subscription looking for a reason to exist.

The company-level product is:

> **The evidence-backed operating record for the home, with an agent that notices, explains, prioritises, follows through and remembers.**

The first Irish acquisition hypothesis is:

> **OpenHouse Upgrade Ready Plan**
> Before you spend thousands upgrading your home, know what to do first.

The customer uploads a BER or survey, a recent bill and a few guided photos. OpenHouse returns a sourced, home-specific plan showing what is known, what remains uncertain, what to do first and what to ask before accepting a quote.

Sam's 27 July voice stress-test established a second hypothesis, the **Home Performance Check**: help a heat-pump, solar, EV or modern-home owner understand how the home wants to be run, identify one evidence-backed operational opportunity and establish a performance baseline. Upgrade Ready and Home Performance must be tested against payment commitment before the acquisition product is fixed.

The reviewed Irish policy and post-occupancy evidence strengthens this second hypothesis without selecting it as the winner. BER is an asset rating based on standardised assumptions, while measured household outcomes can diverge because of comfort preferences, settings, commissioning, equipment, weather, occupancy and model limitations. OpenHouse should therefore diagnose an evidence hierarchy rather than grade or blame the resident. See [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]].

The initial DTC experience should be free-first and no-card: OpenHouse must demonstrate a credible home-specific result before asking an Irish homeowner to pay. A paid decision product remains a later option, but the membership conversion is earned through the value of maintaining the persistent Home Record. See [[briefs/openhouse-free-first-dtc-conversion-plan-2026-07-28]].

DTC and developer handover are not separate companies. They are two ways of creating the same living Home Record:

- Developer distribution supplies a verified baseline at handover.
- DTC lets an existing homeowner progressively build the same record.
- The private household layer remains owned and controlled by the household.

### North-star clarification from the voice stress-test

The consumer category is:

> **OpenHouse knows your home and helps you run it right.**

The internal system is a Home Record, evidence graph, event engine, value ledger and approval-controlled action layer. The consumer buys the assistant, not the architecture.

Energy and homeowner operation are the first recurring proof loop. The agent should observe, infer, qualify, notify, explain, recommend, verify and remember. The digital twin is accumulated through useful interactions rather than demanded at onboarding.

A guided spatial and systems capture is now a priority feasibility experiment. On supported Apple devices, RoomPlan can use camera and LiDAR to create room geometry with dimensions and furniture types. A normal video cannot yet be promised to produce survey-grade floor plans or authoritative hidden-property facts. All extracted attributes remain candidate facts until evidence or confirmation promotes them.

A future scoped MCP or equivalent Home Context API can let other assistants use OpenHouse's permissioned home knowledge. This is a long-term distribution architecture, not a current integration claim.

See [[briefs/openhouse-dtc-voice-stress-test-synthesis-2026-07-27]] and [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]].
The policy and performance-gap evidence is reviewed in [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]].

## The founder-level correction

A larger market does not make distribution easy. Ireland may contain roughly 1.1 million relevant homes, but the company wins only if it can acquire an individual household economically and repeatedly produce more value than free alternatives.

A €5 monthly price is not an acquisition strategy. With payment, model, storage and support costs, the allowable acquisition cost is too low unless retention is excellent. Homeowner needs are also episodic.

Therefore:

1. Acquire through an expensive or anxious decision.
2. Charge for the immediate outcome.
3. Build the Home Record while solving that problem.
4. Offer a low-cost annual membership only after recurring value exists.
5. Treat profitable project passes as a valid business even if subscription retention is not proven.

## The product stack

### Layer 1: The Home Record

The durable, portable model of the actual home:

- identity and address
- fabric and BER/EPC evidence
- rooms and dimensions
- heating and hot-water systems
- ventilation
- electricity and tariff history
- solar, battery and EV systems
- installed assets and nameplates
- documents, manuals, invoices and warranties
- maintenance and service history
- issues and projects
- decisions, actions and verified outcomes
- household preferences and permissions

Every fact carries provenance, confidence, freshness and status. A fact can be candidate, confirmed, disputed, superseded or stale.

### Layer 2: The Evidence Graph

OpenHouse must know not only a fact, but why it believes it.

Evidence classes include:

- developer supplied
- professional confirmed
- document extracted
- imported measurement
- photo observed
- user stated
- user confirmed
- model inferred

Every material claim should resolve to a document page, bill field, source row, photo region, integration observation or explicit user confirmation. Contradictions are surfaced rather than silently overwritten.

### Layer 3: The Home Agent

The agent follows one operating loop:

1. Observe a change, question or trigger.
2. Retrieve the minimum relevant home context.
3. Separate evidence, assumptions and unknowns.
4. Explain the effect in Money, Comfort and Risk terms.
5. Recommend one safe next action.
6. Ask for approval where an action affects an external system.
7. Verify the result.
8. Record the decision and outcome in the Home Record.

The agent is not an unrestricted chat wrapper. It runs home-specific jobs using deterministic parsers, calculators and typed tools before asking an LLM to explain or orchestrate.

### Layer 4: The Value Ledger

OpenHouse records:

- opportunities identified
- action recommended
- action accepted, deferred or rejected
- evidence supplied
- professional or device confirmation
- cost, comfort or risk outcome
- confidence in the outcome

An opportunity is never described as money saved. Savings are recorded only after the action and outcome are verified against a documented baseline.

### Layer 5: The Action Layer

The autonomy ladder is:

1. Observe.
2. Recommend.
3. Prepare an action.
4. Ask for one-time approval.
5. Execute one bounded action.
6. Verify and issue a receipt.
7. Later, allow an approved recurring rule with limits, expiry and instant revocation.

No autonomous switching, heating, EV or battery control belongs in the Irish launch.

## Why it is more than ChatGPT

ChatGPT can explain a bill, BER or photograph in one conversation. OpenHouse earns payment only by doing what a generic chat session does not reliably do:

- maintain a typed, persistent record of the home
- preserve evidence and field-level provenance
- distinguish confirmation from inference
- detect contradictions and stale facts
- know which missing evidence could change the current decision
- operate reminders, warranties, projects and energy reviews over time
- remember actions and outcomes rather than only conversation
- create professional-ready briefs
- accept verified developer handover into the same model
- provide visible correction, deletion, export and sharing controls

The moat is not the model. It is the trusted Home Record, evidence graph, accumulated outcome history and workflows operating on them.

## Initial customer and job

### Primary customer

An Irish owner-occupier who:

- is considering a €3,000 to €30,000 home or energy decision
- has a BER, survey, electricity bill or contractor quote
- does not know the correct order of work
- fears buying the wrong measure or accepting a weak quote
- can supply a few documents and photos
- wants preparation and decision confidence, not certification

Best moments:

- a solar, heat-pump, insulation, window or EV-charger quote arrives
- a BER advisory report recommends multiple upgrades without sequencing them
- a first winter bill creates concern
- a recent buyer discovers that the survey, BER and systems do not form a usable plan

### Do not target initially

- all homeowners
- renters without authority to act
- low-use households wanting generic tips
- consumers seeking professional certification
- people unwilling to provide one real evidence item
- smart-home hobbyists seeking broad automation
- people wanting unlimited chat for €5 per month

## Paid acquisition candidates

### Candidate A: OpenHouse Upgrade Ready Plan

Consumer promise:

> **Before you spend thousands upgrading your home, know what to do first.**
> Upload your BER or survey, latest bill and a few photos. OpenHouse gives you a sourced plan showing what matters, what is missing and the questions to ask before accepting a quote.

Price during concierge validation: **€79**.

Deliverable:

- known home facts with sources and confidence
- contradictions and evidence gaps
- likely dependencies and decision blockers
- Money, Comfort and Risk explanation
- ranked 30-day and 90-day actions
- assessor and contractor question list
- documents, systems and reminders entering the Home Record
- one next-best evidence request

Delivery during concierge validation: within 48 hours.

### Candidate B: OpenHouse Home Performance Check

Consumer promise:

> **Find out how your home wants to be run, what may be costing you and what to change first.**
> Provide your BER or handover information, a bill or HDF where available, and a short guided systems capture. OpenHouse explains the home's intended operation, identifies one evidence-backed opportunity and establishes a first performance baseline.

Price during matched concierge validation: **€79**.

Deliverable:

- sourced home and low-carbon-system facts
- plain-English controls and operating guide
- one evidence-backed operational opportunity where the evidence supports it
- Money, Comfort and Risk explanation
- first Home Performance baseline with confidence and exclusions
- one next action and one next evidence request
- candidate systems and room context entering the Home Record

This candidate is strongest for heat-pump, solar, EV, battery and recently built homes. It must not promise live monitoring without a real refresh source or attribute consumption change to OpenHouse without sufficient evidence.

The check must separate household preference and schedule from control settings, commissioning or installation, equipment behaviour, weather and tariff context, and model or evidence limitations. Its purpose is to establish a defensible operating baseline and one safe next action, not to label a household inefficient or imply that BER predicts its actual bill.

### Useful Action Guarantee

> If the plan does not identify at least one specific action, question or evidence gap that helps the customer make the current home decision, the customer can request a full refund within seven days.

The customer must provide the stated minimum evidence. The refund is capped at the purchase price. OpenHouse does not guarantee grants, installation performance, certification, regulatory approval or bill reductions.

### Secondary products

**Move-In Home Plan, €79 retail**

- survey or snag translation
- 30, 90 and 365-day plan
- systems and warranty capture
- first-bill preparation
- maintenance reminders
- questions for the seller, developer or contractor

Best distributed as a mortgage-broker, conveyancer, estate-agent, surveyor or developer closing gift.

**Decision Passes, €49 to €99**

- contractor quote check
- heat-pump checkup
- solar, EV or tariff optimisation
- retrofit sequence update

These become easier after the Home Record exists.

## The recurring product

### OpenHouse Home Membership

Offer only after the household has a useful record, a recurring project, active reminders or enough energy evidence to create ongoing value.

Initial pricing hypothesis:

- €59 per year, annual-first
- €5.99 per month as an alternative

Membership contains:

- persistent Home Record
- household and professional sharing controls
- document, manual and warranty memory
- maintenance and expiry reminders
- seasonal home check
- annual Home Status report
- one lightweight Decision Pass credit
- monthly Home Review only when new evidence creates genuine value
- portable export

Do not sell unlimited AI usage. Do not manufacture weekly content. If a home has nothing useful to say, suppress the notification.

### Qualified savings-backed membership

This is a later product for households with meaningful flexible loads such as EV, solar, battery or heat pump.

Only invite a household when its own data shows projected opportunities of at least 1.5 times the annual fee.

Required evidence:

- 30 to 90 days of interval data, preferably 12 months
- documented tariff and baseline
- a controllable tariff, schedule or system opportunity
- customer authority to act
- published methodology and exclusions

Promise:

> We only invite you when your data shows enough potential value to cover the membership. If the documented opportunities do not exceed the membership price, we refund the membership fee.

The refund is capped at fees paid. OpenHouse does not insure actual savings.

## Low-friction context acquisition

The onboarding objective is decision readiness, not profile completion.

### First five minutes

1. Enter through a job:
   - understand a bill or plan an upgrade
   - understand a BER or survey
   - prepare for a contractor or quote
   - organise systems, manuals and warranties

2. Confirm the home:
   - Eircode/address
   - dwelling type
   - approximate build decade if known

3. Bring one proof:
   - BER/advisory report
   - electricity bill
   - survey
   - contractor quote
   - manual, warranty or invoice

4. Review extracted facts:
   - show the value
   - show its source page or image
   - show confidence
   - confirm, correct or mark unsure

5. Request only job-relevant photos:
   - heat source
   - controls and hot-water system
   - meter or consumer unit
   - attic or window clue
   - nameplate when model-specific guidance matters

6. Deliver the first Home Snapshot before a full inventory, smart-meter import or subscription wall.

7. Ask for one next evidence item only when it changes a decision.

### Friction-reduction mechanisms

- mobile share sheet and drag-and-drop
- bill, document and screenshot OCR
- future opaque email-forwarding address for bills and documents
- QR or camera nameplate capture
- guided photos with an explanation and Skip
- household member invite to supply a missing artifact
- pre-filled developer baseline where available
- connection centre with explicit source, scope, freshness and revoke controls

Never ask for retailer, ESB or device passwords.

### Next-best-context formula

Rank every question or upload request by:

> decision impact × uncertainty reduction × urgency × reuse potential, divided by user effort × sensitivity × friction

This prevents a million-question onboarding flow.

## What fills the agent's brain

The assistant should retrieve task-specific slices from:

- typed Home Record facts
- evidence spans from documents and photos
- household-confirmed preferences
- recent working conversation state
- current project state and decisions
- warranty and maintenance schedule
- normalized energy periods and tariffs
- approved connected-device observations
- current professional and regulatory knowledge
- official manuals for identified systems
- OpenHouse safety and professional-boundary policy

Conversation is not the canonical memory. Incidental chat creates a candidate fact. Only evidence, explicit confirmation or a trusted import promotes it to durable home memory.

## Energy and renewable connection strategy

Ireland launches file-first and advisory-only. Live connection is optional enrichment, never activation.

### Build first

1. ESB Networks HDF importer.
   - up to two years of customer-downloaded interval data
   - import and export handling
   - coverage, gap, duplicate, daylight-saving and meter-change checks
   - confirm home and date range before attaching
   - label expected source delay

2. Generic bill parser.
   - PDF, image, screenshot and later email forwarding
   - tariff, charges, VAT, billing period, estimated/actual reads and discounts
   - specialist parsing for Electric Ireland, Energia, Bord Gáis Energy and SSE Airtricity

3. BER certificate and Advisory Report importer.
   - homeowner PDF is primary
   - BER number or MPRN lookup only with explicit user input and confirmation
   - no address-only promise and no production scraping
   - assessed/modelled performance remains separate from measured consumption

4. Screenshot OCR and guided manual confirmation.
   - this is a permanent fallback, not an embarrassing temporary workaround

### First direct connectors after product proof

1. Enphase OAuth v4 for solar and related energy devices.
2. Tesla Fleet API Energy, read-only first.
3. Homey OAuth as a multi-device bridge.
4. Home Assistant outbound integration for technical homes.
5. SolarEdge ONE V2 when production terms are available. Do not anchor to V1 before its stated November 2026 deprecation.

### Heat-pump partnership order

1. Vaillant Energy Management API.
2. NIBE/myUplink after delegated access and terms are verified.
3. Samsung through SmartThings where the exact model exposes useful capabilities.
4. LG through ThinQ where model and geography support are verified.
5. Daikin only after commercial/customer delegation is confirmed.

Do not build on reverse-engineered Mitsubishi MELCloud, Panasonic Comfort Cloud or other unofficial login flows.

### EV and smart-home rules

- Validate proper delegated access for Easee and Zaptec before building.
- Do not build an OpenHouse OCPP backend at launch.
- Do not assume OCPP can be enabled without disrupting the charger's vendor backend.
- Treat Matter as an input through an existing hub, not a universal device-access promise.
- Do not make OpenHouse another mainstream smart-home controller until advisory value and demand are proven.

### Read and control separation

Every read connector exposes authorization, sync, normalization, health and revocation.

A control connector is physically and logically separate. It must simulate the action, create an approval request, execute only the approved action, verify the outcome and return to a safe state when verification fails.

Read scopes must never silently become command scopes.

### What OpenHouse must not claim

- universal one-tap Irish energy connection
- real-time ESB Networks data
- automatic access to every retailer
- support for every inverter, battery, heat pump or charger
- appliance-level disaggregation from whole-home meter data
- exact reconciliation between meter, bill and device clouds
- current building performance from an old BER
- autonomous control at launch
- universal Matter or OCPP access
- guaranteed savings
- permanence of a vendor API

## Ongoing value loop

The product earns retention through completed home jobs, not chat volume.

The loop is:

1. A bill, quote, move, fault, service, warranty or upgrade creates a trigger.
2. The household supplies one relevant artifact.
3. OpenHouse produces a sourced decision or plan.
4. The household records what it did, deferred or rejected.
5. The result is verified where possible.
6. The outcome updates the Home Record.
7. A real reminder, seasonal check or changed condition creates the next trigger.
8. A useful artifact creates a referral or professional share.

### Recurring jobs

Event-driven:

- parse new evidence
- identify contradictions
- update tasks and snapshot
- produce a professional brief

Daily background checks:

- due tasks
- service and warranty windows
- failed ingestion
- unresolved review
- consented connector refresh

Monthly Home Review, only when evidence changed:

- what changed
- Money, Comfort and Risk findings
- completed and outstanding actions
- stale evidence
- maintenance and warranty events
- measured energy comparison where valid
- one next action
- one optional context request

Seasonal:

- pre-winter heating and ventilation check
- annual service and warranty review
- tariff review after a useful data period
- annual Home Record export

## Consumer trust is part of the product

Required consumer controls:

- Home Memory screen showing stored facts and sources
- confirm, correct, dispute and delete
- separate deletion for conversations, energy imports and source artifacts
- download the Home Record
- disconnect integrations
- revoke sharing
- household role management
- time-limited professional shares
- clear notification preferences and quiet hours
- separate consent for analysis, ongoing monitoring, professional sharing and anonymised analytics
- no training on household content by default

Raw interval energy data can reveal household behaviour. Complete a DPIA before processing at production scale. Keep raw bills, screenshots and interval data only as long as needed or explicitly requested. Aggregate where detailed data is no longer necessary.

Do not sell household data. Any later aggregate insight product requires explicit opt-in, strong de-identification, minimum cohort thresholds and a separate factual review. It is not part of the launch business model.

## Shared DTC and developer architecture

Both channels use one channel-neutral `home` model.

The ownership layers are:

1. Stable property identity.
2. Imported developer baseline with immutable provenance.
3. Private household layer containing bills, behaviour, conversations, photos, notes and post-handover history.

Developer-origin facts can enter the homeowner record. Household changes never flow back to a developer unless the homeowner shares a specific issue or artifact.

Developer-funded residents are not charged again for funded features. Scheme analytics must be aggregated, anonymised and thresholded.

DTC strengthens the developer proposition by proving:

- which documents residents use
- which low-carbon systems create confusion
- which missing facts generate support demand
- what makes a useful handover record
- whether homeowners return to a persistent record
- what education prevents avoidable escalation

The developer proposition becomes:

> Developer-provisioned OpenHouse homes begin with a verified Home Record on day one. DTC households must assemble that record progressively.

## Business model and economics

### Why the plan comes before membership

At roughly €5 per month, contribution after payment and model/storage/support costs may be only around €3 per month. If monthly churn is high, lifetime contribution cannot support education-heavy consumer acquisition.

The €79 plan can support first-purchase payback:

- conservative manual contribution before acquisition is roughly €49 if fulfilment takes 30 minutes
- productised contribution can rise above €60 when standard fulfilment takes five minutes
- target organic CAC below €15
- target blended CAC below €25
- possible partner payout of €10 to €15

These are planning assumptions, not observed OpenHouse economics.

## Acquisition system

### 1. High-intent search

Publish decision pages rather than a broad content calendar:

- what to do after receiving a BER report
- the correct order for home energy upgrades
- questions before accepting a solar quote in Ireland
- why a heat-pump electricity bill may be high
- how to read an ESB Networks HDF
- what documents a new homeowner should receive
- BER report versus heat-loss assessment

Each page answers directly, shows one worked example, states evidence limits and offers the matching paid plan. One strong page every two weeks is enough.

### 2. Asynchronous closing-gift distribution

Target mortgage brokers, conveyancers, estate agents, snagging firms and surveyors.

Offer:

- retail value €79
- partner price hypothesis €59 per activated plan
- household owns the record
- partner receives only activation status, never documents or findings
- one-page explanation and sample report, no daytime demo dependency

### 3. Professional preparation partners

BER assessors, retrofit coordinators and installers can use OpenHouse as a customer preparation layer. The customer approves any professional share.

Neutrality matters. Paid placement and commission must be disclosed. An installer cannot influence the recommendation logic.

### 4. Customer referral

- shareable redacted artifact
- give a friend €10 off
- receive a €10 Decision Pass credit
- prompt referrals around the same homeowner event

### Reject initially

- paid social
- broad homeowner targeting
- app-store launch
- influencer sponsorship
- generic founder networking
- founder-by-founder daytime sales dependence
- PR around an AI home agent
- affiliate revenue as the core model

Never use private Longview resident data or recruit Longview homeowners without explicit organisational permission.

## Marketing message

### Simple proposition

> **Before you spend thousands upgrading your home, know what to do first.**
> Upload your BER or survey, latest bill and a few photos. OpenHouse gives you a sourced plan showing what matters, what is missing and what to ask before accepting a quote.
> **€79. Refunded if it does not produce one useful action, question or evidence gap.**

Primary CTA:

> Get my Upgrade Ready Plan

Secondary CTA:

> See a sample plan

### Narrative

> A BER gives you a rating. A bill tells you what you spent. A quote tells you what someone wants to sell. None of them tells you what your home needs first.
>
> OpenHouse turns the evidence you already own into one sourced plan, so you know what to do, what to ask and what not to pay for yet.

Credibility:

> Built in Cork from direct property-development and home-handover experience.

Do not imply an external paying developer customer or broad DTC traction.

### Landing-page structure

1. Proposition, price, guarantee and one CTA.
2. Why BER, bills, surveys and quotes leave an ordering problem.
3. Visible input-to-output example.
4. Exact plan deliverables.
5. Who it is and is not for.
6. Five-minute intake and 48-hour concierge delivery.
7. Honest sample report.
8. Evidence, portability and OpenHouse differentiation.
9. Privacy and household control.
10. Pricing, guarantee, FAQ and final CTA.

Keep the main public OpenHouse site developer-led until DTC earns proof. Put the validated consumer proposition under the homeowner route.

## 90-day validation plan

### Days 1 to 30: prove payment and usefulness

Do not adapt the broad application yet.

Create:

- one Upgrade Ready proposition and sample
- one Home Performance proposition and sample
- one shared payment and evidence-upload path
- one manual fulfilment workflow built on the same Home Record
- one feedback/outcome ledger

Show both propositions to qualified households and use payment or a refundable deposit, not stated preference, to select the winning acquisition message.

Capacity: maximum four plans per week.

Targets:

- 10 paid customers at €79
- usefulness of at least 8/10
- refund rate below 15%
- 70% take or schedule one recommended action
- 40% voluntarily supply a second evidence item
- median fulfilment below 45 minutes by customer ten
- at least three request another decision, reminder or retained record

Test three trigger messages within the same product:

- before accepting an energy quote
- after receiving a BER
- first winter bill or heat-pump concern

### Days 31 to 60: prove repeatability and one channel

Targets:

- 20 paid plans cumulatively
- median fulfilment below 30 minutes
- 70% gross margin before acquisition
- at least five recurring finding patterns
- one source producing five activated customers
- blended CAC below €25
- 20% follow-on purchase or explicit annual intent
- 30-day triggered return above 25%

Only productise intake, extraction, report assembly, Home Record creation, reminders and feedback.

### Days 61 to 90: prove a system rather than a launch spike

Targets:

- 30 paid households cumulatively
- two acquisition routes with at least five customers each
- at least six Home Membership purchases or deposits
- at least five direct referrals
- standard fulfilment below 15 minutes
- 50% add a second artifact
- 30% complete or verify an action
- one permissioned evidence-backed case study
- a UK waitlist or concierge cohort of ten qualified households

No email-signup, free-scan or friendly-praise metric counts as traction.

## Productisation gates

### Phase 0: concierge proof

Twenty paid or payment-committed Irish plans before broad platform work.

If people buy reports but do not return, retain Decision Passes and do not force a subscription thesis.

### Phase 1: Snapshot MVP

Build only after concierge evidence:

- real consumer and household identity
- claim home
- select job
- upload BER, bill and survey
- extraction and confirmation
- guided photo capture
- evidence-backed Home Snapshot
- actions and reminders
- project-pass and membership entitlement
- correction, export and deletion controls

Across 100 qualified households, target:

- median time to first snapshot under five minutes after a usable upload
- activation at least 60%
- extraction review completion at least 70%
- second evidence item within seven days at least 35%
- snapshot usefulness at least 75% positive
- all material home-specific claims carrying evidence
- zero unsupported high-risk claims
- activated-to-paid conversion at least 15%

### Phase 2: recurring Home Agent

Add:

- systems and warranties
- maintenance timeline
- household and professional sharing
- quote and contractor briefs
- ESB HDF import
- value ledger
- monthly Home Review

Pass only if:

- 50% of paid homes receive a non-chat value event each month
- paid day-90 retention is at least 60%
- 30% complete or explicitly dismiss a recommended action
- Home Review open rate is at least 45%
- 25% use sharing, export, reminders or a second project by day 90
- notification complaint or opt-out remains below 5%

### Phase 3: qualified monitoring and UK

Add official, customer-authorised connectors and qualified tariff/usage monitoring only after recurring value is proven.

No device control or universal savings claim until OpenHouse can verify actions and outcomes.

## Codebase adaptation

### Reuse and extend

- existing unit/home schema concepts
- room and floor-plan primitives
- document ingestion and retrieval
- installed-system and Home User Guide concepts
- assistant and image infrastructure
- recent-turn storage
- home notes UX
- notification delivery
- cron entry patterns
- source/confidence provenance pattern

### Adapt heavily

- create a channel-neutral `home` and household membership model rather than treating a development unit as the universal owner
- replace monolithic prompt context with task-specific evidence retrieval
- add household artifact versions and field-level citations
- separate candidate-fact extraction from conversational answering
- turn notes into structured events, tasks and decisions
- add DTC notification categories, quiet hours, idempotency and suppression
- verify every tenant/home boundary using database-enforced scoping

### Build new

- progressive DTC onboarding
- consumer checkout, project-pass entitlement and refund handling
- canonical Home Record/evidence lifecycle
- HDF, bill and BER ingestion
- value and outcome ledger
- consumer export, deletion, integration and memory centre
- durable job queue and run receipts

### Do not present as production capability

- current energy endpoint reads seeded `demo_home` metadata
- current Irish BER auto-lookup is an unverified scraper spike
- migration files do not prove production deployment
- existing purchaser QR identity is not a DTC user account

No DTC implementation should bypass the P0 tenant, credential, migration and release-provenance gates already identified in [[briefs/2026-07-24-openhouse-market-readiness-audit]].

## Kill criteria

Kill or radically reframe the initial offer if:

- fewer than five people pay €79 after 200 high-intent visitors or 30 qualified partner referrals
- usefulness is below 7/10
- refunds exceed 20%
- fewer than 30% supply a second evidence item
- fewer than 20% act on or use a recommendation
- fulfilment remains above 45 minutes after 20 plans
- fewer than five recurring finding patterns appear
- no acquisition route achieves CAC below €25
- the praised value can be reproduced by a single generic ChatGPT upload

Keep project passes but kill the subscription thesis if:

- one-off demand exists
- 30-day return is below 20%
- annual membership attach is below 15%
- people do not retain documents or use reminders
- recurring use requires manufactured notifications

Stop DTC as a strategic line after 90 days if:

- fewer than 20 genuine households pay
- no cohort repeats or refers
- every acquisition depends on founder persuasion
- home-specific sourced value cannot exceed 70% gross margin

A failed subscription does not invalidate profitable plans or B2B2C closing gifts.

## UK expansion

Expand only after Ireland proves:

- 20 paid plans
- usefulness at least 8/10
- fulfilment below 30 minutes
- second-evidence rate above 40%
- one repeatable acquisition route
- 20% follow-on or annual intent

Initial UK customer:

- England or Wales homeowner
- Octopus or available half-hourly data
- EV, heat pump, solar or battery
- meaningful flexible load
- current tariff or system decision

Sequence:

1. Localise BER to EPC and Irish terms to UK equivalents.
2. Manually fulfil ten UK plans from user-supplied exports.
3. Test £79 plan and £99 annual monitoring.
4. Pursue an official Octopus delegated/partner route.
5. Use an authorised smart-meter data partner rather than becoming a direct DCC participant at launch.

Do not treat a customer-entered Octopus API key as frictionless OAuth.

## North-star metric

> **Paid homes that complete one evidence-backed decision and retain the outcome in their Home Record.**

Chat messages, uploads, registrations and reports sent are supporting metrics, not the north star.

## Immediate sequence

1. Protect the existing developer-pilot P0 safety work.
2. Define matched concierge templates and illustrative samples for Upgrade Ready and Home Performance.
3. Prototype guided walkthrough capture manually across LiDAR, ordinary video and still-photo paths before committing to computer-vision infrastructure.
4. Create the minimum shared payment, upload, consent and fulfilment path.
5. Recruit only qualified, evidence-bearing households and test payment commitment rather than preference.
6. Fulfil the first ten manually and capture the value ledger.
7. Decide after twenty paid plans which entry wedge, if either, deserves productisation.
8. Add HDF and bill ingestion before any device connector.
9. Earn subscription through observed recurrence.
10. Add read-only connectors in ranked order.
11. Attempt approved control only after advisory outcomes are trusted.

## Decision status

This plan authorises a bounded DTC concierge validation track as the next product-discovery priority. It does not authorise production deployment, migrations, consumer-data processing at scale, paid acquisition, vendor contracting or device control.

## Official and primary sources

- Apple RoomPlan: https://developer.apple.com/augmented-reality/roomplan/
- ESB Networks smart-meter usage and HDF: https://www.esbnetworks.ie/services/manage-my-meter/view-my-smart-meter-usage
- CRU smart meters and services: https://www.cru.ie/consumer-information/billing/smart-meters-and-services/
- SEAI National BER Register: https://ndber.seai.ie/pass/ber/search.aspx
- Eircode: https://www.eircode.ie/
- Enphase API v4: https://developer-v4.enphase.com/docs/quickstart.html
- Tesla Fleet API: https://developer.tesla.com/docs/fleet-api/getting-started/what-is-fleet-api
- SolarEdge developers: https://api-docs.solaredge.com/
- Vaillant developers: https://developer.vaillant-group.com/
- myUplink developers: https://dev.myuplink.com/
- Home Assistant authentication: https://developers.home-assistant.io/docs/auth_api/
- Homey API: https://api.developer.homey.app/
- Open Charge Alliance OCPP: https://openchargealliance.org/protocols/open-charge-point-protocol/
- Octopus Energy API: https://docs.octopus.energy/rest/guides/api-basics/
- England and Wales EPC data: https://get-energy-performance-data.communities.gov.uk/
- Irish Residential Property Price Register: https://www.propertypriceregister.ie/
- EU data-protection framework: https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en

## Connected vault notes

- [[companies/openhouse-ai]]
- [[project_state/oh]]
- [[context/openhouse-product-map]]
- [[context/openhouse-sales-routes]]
- [[context/business-opportunities-moc]]
- [[briefs/openhouse-dtc-onboarding-positioning-update-2026-07-27]]
- [[imports/chatgpt/openhouse-dtc-voice-stress-test-2026-07-27]]
- [[briefs/openhouse-dtc-voice-stress-test-synthesis-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]]
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]

- [[imports/campaigns/openhouse-full-context]] — shared signals: openhouse, full
- [[imports/campaigns/openhouse-innovation-strategy]] — shared signals: innovation, openhouse, strategy
- [[imports/cara-conversation-summary-2026-07-12]] — shared signals: conversation, summary, cara
- [[imports/claude/openhouse-company-memory]] — shared signals: openhouse, company, memory
- [[imports/x/gipp-obsidian-self-maintaining-wiki-2026-06-26]] — shared signals: maintaining, obsidian, 2026

- [[imports/2026-08-06-personal-agent-founder-voice-notes]] — shared signals: personal, founder, voice
- [[imports/chatgpt/ireland-gpt-product-pricing-gtm-delegation-strategy-2026-08-06]] — shared signals: delegation, strategy, ireland
- [[imports/heres-health-app-project-brief-2026-08-13]] — shared signals: project, health, heres
- [[imports/linkedin/connections-2026-08-12]] — shared signals: connections, linkedin, 2026
## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
- [[briefs/openhouse-a-rated-homeowner-policy-thesis-2026-07-28]]
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]]
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]]
- [[briefs/openhouse-dtc-onboarding-positioning-update-2026-07-27]]
- [[briefs/openhouse-dtc-voice-stress-test-synthesis-2026-07-27]]
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]]
- [[briefs/openhouse-free-first-dtc-conversion-plan-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-ndrc-pre-accelerator-rehearsal-2026-07-28]]
- [[briefs/openhouse-show-house-evidence-capture-2026-07-28]]
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
- [[briefs/wiki-refiner-2026-08-10]]
- [[briefs/wiki-refiner-2026-08-11]]
- [[briefs/wiki-refiner-2026-08-12]]
- [[briefs/wiki-refiner-2026-08-13]]
- [[briefs/wiki-refiner-2026-08-14]]
- [[briefs/wiki-refiner-2026-08-15]]
- [[briefs/wiki-refiner-2026-08-16]]
- [[briefs/wiki-refiner-2026-08-17]]
- [[briefs/wiki-refiner-2026-08-18]]
- [[briefs/wiki-refiner-2026-08-19]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[context/openhouse-product-map]]
- [[context/openhouse-sales-routes]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[project_state/oh]]

