---
title: OpenHouse DTC Home Agent Plan
company_id: openhouse-ai
date: 2026-06-29
status: active-plan
source: Sam /goal voice note
---

# OpenHouse DTC Home Agent Plan

## Goal

Create a direct-to-consumer OpenHouse product compelling enough that homeowners will pay because it saves money, reduces anxiety, and builds the living home model that every house will eventually need.

## Core decision

DTC is not a fallback. DTC is a core route to venture scale.

Developer distribution remains useful, but the bigger company is the AI operating layer for every existing home.

## One-line thesis

> OpenHouse gives your home a brain, starting with your bills, devices, maintenance and warranties.

## The hook

Do not lead with a generic assistant. Lead with an event-triggered, concrete money/risk outcome.

Two hooks should be tested in parallel:

1. **Move-In Home Plan:**
   > Your house came with 200 pages of documents. We turn them into a first-year action plan.

2. **Home Savings Scan:**
   > Find what your home is costing you.

The first sellable product can be either a **Move-In Home Plan** or a **Home Savings Scan**, depending on validation. The stronger long-term package combines them:

> Upload your inspection report, utility bill, appliance photos and home documents. OpenHouse turns them into a 30/90/365-day plan, savings opportunities, maintenance reminders, warranty vault and living home memory.

## The first paid products

### Option A: Move-In Home Plan

A one-off paid report priced at **€49–€99**.

Inputs:
- inspection / survey / snagging report
- electricity bill or supplier setup if available
- appliance photos / model labels
- closing docs / warranties / manuals
- room or issue photos

Outputs:
1. **30/90/365-Day Home Plan** — what to fix, maintain, ignore or investigate.
2. **Hidden-Cost Warnings** — bill, heating, appliance, maintenance or warranty risks.
3. **Warranty / Manual Vault** — key docs and devices saved.
4. **Claim-Ready Inventory Starter** — photos/docs organised by room/category.
5. **Home Brain Started** — structured home profile and reminders.

Why this may be the strongest acquisition wedge:
- high emotional urgency
- broad market of movers/new buyers
- people are already spending money
- inspection/documents are a natural upload artifact
- naturally seeds energy, warranty, maintenance, inventory and retrofit modules

### Option B: Home Savings Scan

A one-off paid report priced at **€29–€79**.

Inputs:
- electricity bill PDF/photo
- tariff/supplier information
- heating type
- photos of heat pump/boiler, thermostat, consumer unit, solar inverter, EV charger if present
- BER/EPC if available
- appliance/manual/warranty docs if available

Outputs:
1. **Savings Opportunities** — tariff, usage, EV, heat pump, solar/self-consumption or bill issues.
2. **Comfort/Risk Flags** — heating, ventilation, maintenance or warranty issues.
3. **Top 3 Actions** — ranked by money, urgency and effort.
4. **Estimated Value Identified** — low/medium/high confidence bands, not guaranteed claims.
5. **Home Brain Started** — structured home profile, devices, docs and reminders saved for ongoing use.

## Money-back / savings-backed offer

Do not guarantee actual savings universally. Use a qualified savings-backed offer for users whose own data shows enough savings potential.

Best consumer promise:

> We only ask you to subscribe when your own data shows enough savings potential to cover the cost.

For qualified users:

> If we cannot find verified first-year savings opportunities greater than your first year of subscription, you get your subscription back.

Qualification should require:
- 30–90 days of interval/smart-meter data or a reliable bill history
- projected gross savings greater than the annual subscription
- willingness/ability to act on recommendations such as tariff switch, EV schedule, device setting or behaviour change
- savings measured against a documented baseline

Refund cap:
- limited to subscription fees paid
- do not guarantee utility bill reductions larger than subscription unless OpenHouse controls and verifies the actions

For unqualified users, use the broader scan promise:

> First Home Savings Scan: find avoidable cost or maintenance risk, or pay nothing.

## Why this beats ChatGPT

ChatGPT can answer a one-off question. OpenHouse should have:
- persistent home memory
- OCR/vision extraction into structured fields
- reminders and timelines
- bill comparison over time
- device/manual/warranty storage
- local grant/tariff/context awareness
- confidence scores and missing-evidence prompts
- exportable contractor briefs
- annual/monthly home reports

The moat is not raw LLM quality. The moat is **home-specific context + recurring workflows + trust + data model**.

## Killer applications to test

### 1. Bill Doctor

User pain: “My electricity bill is huge and I don’t know why.”

Output:
- bill explanation
- what changed vs prior bill if available
- standing/network/tax charges explained
- usage pattern issues
- tariff mismatch warning
- top 3 actions
- likely annual saving band

Why it sells:
- immediate money pain
- universal enough
- easy demo
- creates first data object

### 2. Heat Pump Rescue

User pain: “My new heat pump is costing a fortune / house is cold / I don’t understand it.”

Output:
- safe troubleshooting flow
- likely education vs settings vs install issue
- questions for installer
- settings to check, with disclaimers
- seasonal guidance
- comfort/money/risk view

Why it sells:
- heat pumps are confusing and expensive
- homeowners are anxious
- generic AI lacks device/home context unless prompted heavily

### 3. Home Brain Setup

User pain: “All my house docs/manuals/warranties are a mess.”

Output:
- searchable home memory
- warranty expiry reminders
- maintenance calendar
- manual retrieval
- issue history
- contractor records

Why it sells:
- retention layer
- builds moat
- not easily replaced by one-off ChatGPT

### 4. Photo Fault Triage

User pain: “What is this crack/leak/warning light/noise/stain?”

Output:
- likely categories
- severity/risk
- DIY check vs call professional
- warranty relevance
- contractor brief
- evidence to collect

### 5. Contractor Quote Defence

User pain: “Am I being overcharged / sold the wrong thing?”

Output:
- quote explanation
- missing details
- red flags
- questions to ask
- alternatives to consider
- whether it matches the home needs

This may be one of the strongest one-off paid project passes because people will pay to avoid a bad €1k–€10k decision.

## Subscription packaging

### Free
- basic account
- home profile
- 3 uploads
- 1 mini bill/doc explanation
- basic maintenance checklist
- CTA to full scan

### Paid Scan: €29–€79
- Home Savings Scan
- bill/document/photo analysis
- 3 actions
- estimated value/risk report
- home profile created

### Core: €7.99–€9.99/month or €79/year
- document vault
- reminders
- assistant with home memory
- monthly home report
- issue/photo triage allowance
- manuals/warranties/devices

### Plus: €14.99–€19.99/month or €149/year
- energy integrations where available
- solar/EV/heat pump modules
- quote review
- retrofit planning
- monthly optimisation report

### Savings Guarantee tier: £5–£10/month or local equivalent
Only offer this when user data shows savings potential greater than subscription cost.

Best initial target:
- UK Octopus users with EV / solar / battery / heat pump
- Ireland users who upload ESB HDF/CSV + latest bill

Includes:
- tariff monitoring
- EV charge schedule recommendations or compatible automation
- heat pump settings checklist
- solar/battery scheduling prompts
- demand response alerts where available
- monthly verified savings report

### Project Passes: €49–€99 one-off
- contractor quote review
- homebuyer report review
- renovation/retrofit brief
- pre-winter energy check
- solar/heat pump/EV planning check

## MVP scope

### Must do
1. Upload electricity bill PDF/image.
2. Extract supplier, tariff, dates, usage, charges, estimated/actual markers if visible.
3. Ask 5–8 guided questions: occupancy, heating type, EV, solar, smart meter, main pain, country/region.
4. Allow optional photos: heating system, thermostat, consumer unit, solar inverter, EV charger, appliance label.
5. Generate Home Savings Scan report.
6. Save extracted facts to a persistent home profile.
7. Create 3 reminders/tasks.
8. Offer subscription continuation.

### Should not do yet
- full automated smart meter integration across all markets
- actual device control
- guaranteed savings claims
- full contractor marketplace
- full digital twin
- complex retrofit calculations

## Report structure

1. Summary: “We found 4 opportunities: 2 money, 1 maintenance, 1 missing evidence.”
2. Estimated value identified: value bands and confidence.
3. Bill diagnosis: charges, usage, likely drivers, missing data.
4. Energy system profile: heating, solar/EV/battery, tariff fit.
5. Risk and maintenance flags: warranty/document gaps, service reminders, visible issue triage.
6. Top 3 actions: do this today, ask this question, upload this next.
7. Your Home Brain: facts saved, missing context checklist, next report preview.

## Validation plan

### Week 1 — landing page test
Create 3 landing pages:
1. “Find what your home is costing you.”
2. “Is your heat pump costing more than it should?”
3. “Turn your home folder into an AI assistant.”

Success metric:
- 5%+ visitor-to-email on cold traffic or targeted groups
- 10%+ on warm audiences
- at least 5 people willing to pay for a scan manually

### Week 2 — concierge MVP
Manually produce 10 Home Savings Scans using existing AI tooling.

Charge or ask for payment intent:
- €29 early access
- refundable if no useful finding

Success metric:
- 7/10 say report was useful
- 3/10 would pay €79/year or €9.99/month
- at least 5 recurring feature requests around reminders, monthly reports or follow-up

### Weeks 3–4 — productized MVP
Build upload → extraction → report → saved home profile.

Success metric:
- credible first report in under 5 minutes
- user uploads at least 2 extra context items after report
- 20–30% scan-to-subscription intent from targeted users

## Market sequencing

### Best initial DTC testbed

UK / England and Wales, because it has the strongest data bootstrap:
- EPC API/bulk data
- Land Registry price paid
- planning.data.gov.uk
- Octopus API for energy customers
- high energy-price awareness
- large market

### Best initial savings-guarantee segment

UK Octopus users with at least one high-load/flexible asset:
- EV charging at home
- solar PV
- battery
- heat pump
- meaningful flexible load

This is the strongest route because Octopus provides a practical API and smart tariffs make savings arithmetic defensible.

### Ireland

Ireland remains useful for friendly testing, but bootstrap is weaker:
- BER access is restricted/consent-based
- Eircode licensing friction
- smart meter API access less clear
- upload-first approach is best: bill + BER PDF + photos + manuals
- energy-specific MVP: ESB Networks HDF/CSV upload + latest bill → tariff/savings report

### US

Huge but fragmented. Treat as later or city/utility-specific.

## 30/60/90-day plan

### Days 1–7
- Write landing page copy for Bill Doctor, Heat Pump Rescue and Home Brain.
- Create sample Home Savings Scan from synthetic/real anonymised bill.
- Record 60-second demo video.
- Recruit 10 friendly testers.
- Create manual intake form.

### Days 8–21
- Run 10–20 manual scans.
- Track value found, questions asked, willingness to pay.
- Build library of recurring findings.
- Decide winning hook.

### Days 22–45
- Bill upload/OCR.
- Guided intake.
- Report generator.
- Persistent home profile.
- Device/photo capture.
- Reminders.
- Stripe payment for scan/project pass.

### Days 46–60
- Launch one landing page.
- Test €29/€49/€79 scan price.
- Publish content around bill shock, heat pumps, home maintenance.
- Measure CAC vs paid conversion.

### Days 61–90
- Add monthly home report.
- Add maintenance/reminder cadence.
- Add device/manual/warranty tracker.
- Add heat pump/solar/EV modules based on early users.
- Create investor update with DTC proof.

## Investor story after DTC proof

If DTC gets even small traction, it strengthens the whole company:
- proves homeowners want the home agent directly
- gives usage data without waiting for developers
- creates consumer demand developers can understand
- makes UK/US expansion more credible
- creates revenue and paid validation
- builds the home operation dataset

Investor line:

> OpenHouse is building the AI operating layer for the home. We started with a DTC Home Savings Scan that homeowners pay for because it identifies avoidable cost and risk. Every scan creates a living home model, which expands into energy optimisation, maintenance, warranties, retrofit, insurance, resale and eventually robotics.

## Connected vault notes

- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — current project state
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]] — DTC core thesis
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]] — DTC data feasibility research
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]] — DTC acquisition hooks and personas
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]] — DTC savings guarantee and energy mechanisms
- [[briefs/openhouse-energy-assistant-wedge]] — energy assistant wedge
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] — post-Cairn reset
- [[briefs/openhouse-investor-readiness-operating-plan]] — investor plan
- [[context/openhouse-sales-routes]] — sales route context
