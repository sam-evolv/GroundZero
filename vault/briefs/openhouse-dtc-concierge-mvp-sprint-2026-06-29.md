---
title: OpenHouse DTC Concierge MVP Sprint
company_id: openhouse-ai
date: 2026-06-29
status: execution-plan
source: Sam standing goal / DTC revenue sprint
---

# OpenHouse DTC Concierge MVP Sprint

## Goal

Validate the fastest credible DTC revenue wedge for OpenHouse before overbuilding: sell and manually fulfil paid **Move-In Home Plans** and **Home Savings Scans**, then use the results to decide which product becomes the first automated subscription path.

## Core decision

Do **not** start by building the whole home agent. Start by selling the outcome.

The first 14 days should answer:

1. Will people pay for a home-specific AI report now?
2. Which hook gets more intent: move-in overwhelm or bill/savings anxiety?
3. Which report creates repeat use or subscription intent?
4. Which data inputs are easiest to collect?
5. Which findings are valuable enough to justify recurring payment?

## Wedge hypothesis

Two offers should be tested side-by-side.

### Offer A: Move-In Home Plan

**Hero promise:**

> Your house came with 200 pages of documents. We turn them into a first-year action plan.

**One-liner:**

> Upload your survey, snag list, utility bill and appliance photos. OpenHouse turns them into a 30/90/365-day plan: what to fix, what to ignore, what’s costing you money, and what to remember before small problems become expensive.

**Price test:**

- Early access: **€49**
- Premium/manual review: **€99**
- Refund if the report produces no useful action

**Best audience:**

- first-time buyers
- people who closed/moved in within 12 months
- buyers with survey/snagging reports
- new-build homeowners with handover packs
- older-home buyers planning repairs

### Offer B: Home Savings Scan

**Hero promise:**

> Find what your home is costing you.

**One-liner:**

> Upload your bill or smart-meter file and a few photos of your heating, EV, solar or appliances. OpenHouse checks tariff fit, high-cost habits, obvious waste, maintenance risks and the top actions to reduce avoidable cost.

**Price test:**

- Early access: **€29**
- Detailed energy/device scan: **€79**
- Refund if no useful money/risk finding is identified

**Best audience:**

- people with bill shock
- EV owners
- heat pump owners
- solar/battery owners
- new homeowners after first utility bill
- UK Octopus users / Ireland ESB smart-meter users

## Landing page copy

### Shared nav/brand

**Brand line:**

> OpenHouse gives your home a brain.

**Trust subline:**

> We use your own documents, bills, photos and devices to create practical home guidance — not generic chatbot answers.

### Landing page 1 — Move-In Home Plan

**Headline:**

> Your house came with 200 pages of documents. We turn them into a first-year action plan.

**Subheadline:**

> Upload your survey, snagging report, utility bill and appliance photos. Get a prioritized 30/90/365-day plan showing what to fix, what to ignore, what might cost you money, and what to remember before small problems become expensive.

**CTA:**

> Get my first-year home plan

**Price anchor:**

> Early access: €49. Refunded if we don’t find at least one useful action, saving, risk or reminder.

**Outcome bullets:**

- Prioritized 30/90/365-day home checklist
- Hidden-cost and maintenance warnings
- Warranty/manual/document vault starter
- Claim-ready room/photo inventory starter
- Questions to ask contractors, insurers or developers
- Your OpenHouse Home Brain started

**Before/after block:**

> Before: survey PDFs, appliance stickers, random bills and a long list of worries.
>
> After: 12 prioritized actions, key reminders, device/manual records, and a simple plan for your first year in the home.

**Proof-style framing:**

> Most home advice is generic. OpenHouse is specific to your house: your documents, your appliances, your bills, your risks.

### Landing page 2 — Home Savings Scan

**Headline:**

> Your home may be quietly wasting money. Find out where.

**Alternative headline:**

> Your bill is high. Find out if it’s the tariff, thermostat, water heater, EV, solar setup — or the house.

**Subheadline:**

> Upload your energy bill or smart-meter file. Add photos of your heating system, thermostat, EV charger, solar inverter or key appliances. OpenHouse finds tariff red flags, high-cost patterns, maintenance risks and the top actions worth taking now.

**CTA:**

> Scan my home for savings

**Price anchor:**

> Early access: €29. If we can’t find a useful saving, avoidable cost, or maintenance risk, you don’t pay.

**Outcome bullets:**

- Bill and tariff explanation
- Peak/night usage red flags where data is available
- EV / heat pump / solar / appliance flags
- Always-on load estimate if smart-meter data is available
- Top 3 actions ranked by value and effort
- Savings confidence bands with caveats

**Guarantee wording:**

> We do not promise every home will save money. We only recommend a subscription when your own data shows enough potential value to cover the cost.

### Landing page 3 — Heat Pump Checkup

**Headline:**

> Is your heat pump costing more than it should?

**Subheadline:**

> Upload your bill, thermostat photos and heat-pump model label. Get a plain-English checkup: likely settings issues, expensive habits, installer questions, maintenance reminders and what to monitor next.

**CTA:**

> Check my heat pump

**Price anchor:**

> Early access: €29.

## Intake form fields

Build one form with branching for both offers.

### Required fields

- Name
- Email
- Country
- Home type: apartment / terraced / semi-d / detached / other
- Home status: buying / moved in <3 months / moved in <12 months / long-term homeowner / renter
- Main pain:
  - just moved in and overwhelmed
  - high energy bill
  - heat pump confusion
  - EV / solar / battery optimisation
  - warranty/manual mess
  - renovation/retrofit planning
  - issue/fault in the home
- What would make this worth paying for?
- Consent to use uploaded docs/photos for producing the report

### Move-In Plan uploads

- Survey / inspection report
- Snagging list
- Handover pack or warranty docs
- Appliance/manual photos
- Utility bill if available
- Room photos optional
- List of biggest concerns

### Home Savings Scan uploads

- Latest electricity/gas bill
- ESB Networks HDF/CSV or UK supplier/Octopus export if available
- Current supplier/tariff if known
- Heating type
- EV at home? yes/no
- Solar? yes/no
- Battery? yes/no
- Heat pump? yes/no
- Photos: thermostat, heat pump/boiler, EV charger, solar inverter, consumer unit, appliance labels

## Manual fulfilment workflow

### Step 1: Triage submission

Classify into one primary report type:

- Move-In Home Plan
- Home Savings Scan
- Heat Pump Checkup
- Solar/EV Optimisation
- Contractor/retrofit concern

If data is insufficient, ask for one missing artifact only. Avoid overwhelming the user.

### Step 2: Extract home facts

Create a structured record:

```yaml
home:
  country:
  home_type:
  move_stage:
  heating_type:
  ev:
  solar:
  battery:
  key_documents:
  key_devices:
  main_pain:
  known_risks:
  missing_context:
```

### Step 3: Produce report

Use the relevant report template below.

### Step 4: Ask for payment / feedback

If not prepaid:

> I found [N] useful actions, including [one concrete example]. The full report is ready. Early-access price is €29/€49. If you don’t find it useful, I’ll refund it.

### Step 5: Capture outcome

Track:

- paid? yes/no
- refunded? yes/no
- perceived usefulness 1–10
- would subscribe? yes/no/maybe
- best feature
- missing feature
- estimated value found
- next action taken

## Move-In Home Plan report template

# Your First-Year Home Plan

## 1. Executive summary

- Home stage:
- Main risks found:
- Biggest avoidable cost/risk:
- Best first action:
- Confidence level:

## 2. Your 30/90/365-day plan

### Next 30 days — urgent / high leverage

| Action | Why it matters | Effort | Cost/risk | Who to ask |
|---|---|---:|---:|---|

### Next 90 days — important setup

| Action | Why it matters | Effort | Cost/risk | Who to ask |
|---|---|---:|---:|---|

### First year — maintenance / planning

| Action | Season/timing | Why it matters | Reminder |
|---|---|---|---|

## 3. Hidden cost and risk warnings

- Energy/bill risk:
- Maintenance risk:
- Warranty/document risk:
- Contractor/quote risk:
- Insurance/inventory risk:

## 4. Devices, manuals and warranties captured

| Item | Evidence | Manual/warranty needed? | Reminder |
|---|---|---|---|

## 5. Questions to ask before spending money

- For developer/seller:
- For electrician/plumber/HVAC:
- For insurer:
- For energy supplier:

## 6. Missing context checklist

Upload next:

- [ ] latest electricity/gas bill
- [ ] BER/EPC
- [ ] heating system photo
- [ ] thermostat photo
- [ ] appliance model labels
- [ ] warranty docs
- [ ] room walkthrough video

## 7. Your Home Brain started

Facts saved:

- Home type:
- Heating:
- Key devices:
- Documents:
- Reminders:

## Home Savings Scan report template

# Your Home Savings Scan

## 1. Executive summary

- Main finding:
- Estimated value/risk identified:
- Confidence:
- Top action this week:

## 2. Bill/tariff diagnosis

| Area | Finding | Confidence | Action |
|---|---|---:|---|

Include:

- current supplier/tariff if known
- usage period
- actual vs estimated readings
- standing charges / taxes / network charges explained
- peak/night split if data exists
- tariff mismatch warning if applicable

## 3. Home energy profile

- Heating type:
- EV:
- Solar:
- Battery:
- Smart meter data:
- Flexible loads:

## 4. Savings opportunities

| Opportunity | Estimated value | Confidence | Effort | Caveat |
|---|---:|---:|---:|---|

Only use clear caveated language:

- “Potential saving if usage pattern stays similar”
- “Estimate based on uploaded bill”
- “Needs smart-meter data to verify”
- “Not guaranteed until tariff/eligibility confirmed”

## 5. Risk/maintenance flags

- heat pump/boiler service risk
- immersion/water heating risk
- EV charging timing risk
- solar export/import issue
- appliance always-on suspicion
- ventilation/moisture risk if surfaced from docs/photos

## 6. Top 3 actions

1. Do this now:
2. Check this next:
3. Upload this to improve confidence:

## 7. Subscription recommendation

Use one of three outcomes:

### A. Subscription recommended

> Your data shows likely annual savings greater than the annual subscription. You are eligible for ongoing monitoring.

### B. One-off scan only

> We found useful one-off actions, but not enough ongoing savings evidence to recommend a subscription yet.

### C. Already optimised / insufficient data

> We do not recommend a paid subscription yet. Upload [specific data] if you want a more confident check.

## Validation dashboard

Track this in a simple spreadsheet.

| Metric | Target to continue | Kill/adjust signal |
|---|---:|---:|
| Landing email conversion | 5% cold / 10% warm | <2% cold and no qualitative interest |
| Paid manual scans | 10 in 14 days | <3 despite direct outreach |
| Report usefulness | 7/10 average | <6/10 average |
| Refund rate | <20% | >40% |
| Subscription intent | 3/10+ | 0/10 |
| Extra uploads after report | 30%+ | <10% |
| Repeated finding patterns | 5+ recurring patterns | every report bespoke/unscalable |

## Outreach messages

### Warm homeowner / friend-of-friend

> I’m testing a new OpenHouse product for people who’ve moved into a home or are dealing with scary bills. You upload a survey/bill/photos and I turn it into a practical action plan: what to fix, what to ignore, what could cost you money, and what reminders to set. Early test is €29–€49, refunded if it’s not useful. Would you be willing to try it or send it to someone who just bought/moved?

### First-time buyer group

> Just bought or moved into a home? I’m testing OpenHouse: upload your survey/snags/bill/appliance photos and get a 30/90/365-day home plan — urgent fixes, hidden-cost warnings, warranty/manual vault and maintenance reminders. Looking for 10 early testers at €49, refunded if it doesn’t produce at least one useful action.

### Energy/bill shock group

> If your electricity bill looks wrong or too high, I’m testing a Home Savings Scan. Upload your bill/smart-meter file and a few home-system photos; I’ll check tariff fit, peak usage, EV/heat pump/solar flags and obvious waste. €29 early access, refunded if I find nothing useful.

### Estate agent / broker channel

> I’m testing a closing-gift style product for new homeowners: OpenHouse turns the buyer’s survey, snag list, utility setup and appliance photos into a first-year home operating plan. It helps buyers know what to fix, what to ignore, and what reminders/warranties to keep. Would you test it with 2 recent buyers as a free/discounted pilot?

## Build-after-validation scope

Only build these after manual demand appears.

### V1 productized MVP

- landing page with two offers
- Stripe checkout for scan/project pass
- upload intake form
- document/image storage
- bill/document OCR extraction
- report generator
- persistent home profile
- reminders/tasks
- feedback/satisfaction capture

### Do not build yet

- full smart-meter API integrations across markets
- device control
- contractor marketplace
- full digital twin
- unrestricted chat as primary product
- universal savings guarantee

## 14-day execution schedule

### Day 1

- Create two landing pages or two sections on one page.
- Create intake form.
- Create payment link or manual payment process.
- Create spreadsheet dashboard.

### Day 2

- Create one sample Move-In Home Plan.
- Create one sample Home Savings Scan.
- Record 60-second Loom showing before/after.

### Days 3–5

- Send 50 direct/warm messages.
- Post in 3–5 relevant groups.
- Ask 5 estate agents/brokers/installers for channel feedback.

### Days 6–10

- Fulfil first 5–10 reports manually.
- Ask every user for usefulness score and subscription intent.
- Record repeated findings.

### Days 11–14

- Compare hooks.
- Decide winner:
  - Move-In Plan first
  - Home Savings Scan first
  - Heat Pump/Energy specialist first
- Write product requirements for automated V1.
- Use results in PSSF/NDRC narrative.

## Decision rules

### If Move-In Plan wins

Build OpenHouse as:

> The AI home agent for your first year in a new home.

Then energy/savings becomes the strongest module inside the home brain.

### If Home Savings Scan wins

Build OpenHouse as:

> The money-saving operating system for your home.

Then move-in/document/warranty vault becomes the retention layer.

### If Heat Pump / EV / Solar wins

Build a specialist vertical first:

> The AI operating guide for expensive low-carbon home systems.

Then expand horizontally into the full home brain.

## Investor-useful output

At the end of the sprint, prepare a one-page proof memo:

- number of landing page visitors
- number of leads
- number of paid scans/plans
- average price paid
- refund rate
- usefulness score
- top repeated findings
- strongest customer quotes
- subscription intent
- next build decision

Investor line:

> We validated that homeowners will pay for OpenHouse when it is framed around a concrete home event: move-in overwhelm or bill/savings anxiety. Every paid report creates a structured home model, which compounds into the broader AI home operating layer.

## Connected vault notes

- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — current project state
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]] — parent DTC plan
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]] — acquisition hook evidence
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]] — savings guarantee logic
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]] — DTC as core thesis
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] — post-Cairn strategy reset

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]]
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[companies/openhouse-ai]]
- [[items/oh-dtc-home-savings-scan-concierge]]
- [[project_state/oh]]

