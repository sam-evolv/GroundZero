# OpenHouse site strategic audit

Reviewed 23 July 2026.

Source reviewed:
- PR 35
- Branch: `claude/openhouse-marketing-simplify-zri1kv`
- Commit: `1ea8a24cb86d682c43fd7c0991acd2a90fb37b05`
- Routes: `/`, `/developers`, `/assistant`, `/care`, `/contact`

## Verdict

The visual execution is materially stronger than the previous version. It is confident, coherent and works on mobile. The commercial story is still too broad.

The site currently presents three products for three buyers before proving one indispensable OpenHouse loop. This makes the company look wider but less mature. Developers and investors need to understand one compounding system:

1. A developer supplies the evidence already created for a house type.
2. OpenHouse turns it into a living home record.
3. The homeowner asks a question and gets a sourced answer.
4. Missing knowledge is escalated rather than invented.
5. Developers see recurring questions and evidence gaps across homes.
6. Better handover information improves future homes.
7. Energy intelligence is the next layer on the same home record.

## Recommended public thesis

**A home that can explain itself.**

OpenHouse turns the information already created for every home into sourced homeowner answers and live aftercare insight for the developer. Every answer shows where it came from. Every gap tells the developer what to fix.

OpenHouse is one living home model with different views, not three separate products:
- Developer Dashboard: the control plane
- Property Assistant: the homeowner interface
- Care: an installer extension or campaign page, not a separate company thesis
- Energy Intelligence: the next layer, labelled as direction wherever it is not live

## What is already strong

- Premium charcoal and gold visual identity
- Strong responsive first folds at 390px
- Clear developer pain language around spreadsheets, WhatsApp and paper folders
- Strong CTA concept: show the system on the buyer's own scheme or installation base
- Sourced-answer and refusal-to-guess positioning
- Property Assistant is the clearest category-defining surface
- Home Performance Index support is a credible developer wedge when carefully evidenced
- Care has a sharp operational promise for installers

## P0 changes before public launch

### 1. Collapse the three-product story

Remove "Three products. One platform" and "a separate product" from the homepage.

Lead with the living home model. Show the developer, homeowner and installer as participants in one evidence loop.

Keep Care as a secondary installer route until there is real pilot evidence and live integrations.

### 2. Replace concept claims with proof

The homepage needs a real product proof sequence before market statistics:
- real house-type plan or document
- real homeowner question
- exact sourced answer
- visible source opening
- explicit escalation when evidence is missing
- aggregate developer signal produced by that interaction

Use a real product recording or real interface capture. Label all illustrative values beside the claim, not in a distant footnote.

### 3. Tighten capability truth

Do not imply these capabilities are live unless they are exercised in production:
- tariff-aware bill attribution
- remote EV schedule changes
- proactive system reminders
- 24/7 monitoring across all home systems
- Daikin ONECTA, SolarEdge and Huawei FusionSolar telemetry
- automated fault diagnosis
- quantified savings
- portfolio-wide energy analysis

Use "Example", "Pilot" or "Direction" at the section heading level. Do not rely only on small disclaimers.

### 4. Add verifiable traction

Replace broad claims with the strongest real evidence available:
- active development or anonymised scheme
- homes or house types onboarded
- documents indexed
- sourced questions answered
- information gaps identified
- response time
- pilot or paid deployment status
- developer or homeowner quote

If confidentiality prevents names, say exactly what is anonymised and why.

### 5. Fix the conversion flow

"Book a Demo" currently opens a generic contact page. "Schedule now" is only a mailto link.

Replace this with one direct flow:

**Request a house-type walkthrough**

Fields:
- name
- company
- role
- current development or installation base
- number of units or active installs
- biggest handover or aftercare problem
- preferred time

Offer an actual calendar after submission. Preserve email as a lower-friction alternative.

## Recommended homepage order

1. **Hero:** A home that can explain itself
2. **Real proof loop:** evidence to answer to source to escalation
3. **Developer outcome:** fewer repeated queries, clearer handover, visible information gaps
4. **How it fits:** one house type, every unit, one homeowner interface
5. **Developer intelligence:** recurring questions and missing evidence across homes
6. **Home Performance Index:** narrowly evidenced support for the relevant criterion
7. **Traction and founder credibility:** real deployment evidence only
8. **Energy direction:** Money, Comfort and Risk, explicitly labelled where not live
9. **CTA:** Request a house-type walkthrough

## Suggested hero

**A home that can explain itself.**

OpenHouse turns the information already created for every home into sourced answers for the homeowner and live aftercare insight for the developer. Every answer shows where it came from. Every gap tells the developer what to fix.

Primary CTA: **Request a house-type walkthrough**

Secondary CTA: **Trace a sourced answer**

## Care page

Care is commercially sharp but strategically risky as a top-level product.

Change:
- Remove or source "roughly four in ten" callouts.
- Replace Acme Renewables with "Demo installer" or a real pilot brand with permission.
- Label integrations as Live, Pilot or Planned individually.
- Show how a genuine issue is routed without implying OpenHouse performs a certified engineering diagnosis.
- Use the installer's own callout log as the ROI proof instead of generic market statistics.
- Keep Care out of the primary company thesis until there is a paying or committed installer wedge.

## Investor proof to add

- Narrow wedge and buyer
- Evidence that developers pay for it
- Deployment time for one house type
- Gross-margin logic and pricing basis
- Distribution path through developers, handover partners or installers
- Defensible data loop: each homeowner question improves developer handover quality
- Honest current state versus next technical milestone
- Bottom-up market sizing based on target developers and new-home units, not unrelated tenancy totals

## Technical findings

- Mobile first folds render cleanly at 390px with no horizontal overflow or console errors after a clean server restart.
- Server-rendered HTML contains meaningful headings.
- Market counters render as zero before their intersection animation. Render the final values in HTML and enhance with motion rather than making zero the default.
- A clean local production build fails because imports use both `components/fx` and `components/FX`. Standardise directory and import casing.
- `npm audit` reports 11 vulnerabilities: 8 high and 3 critical. Review and remediate before investor or enterprise diligence.
- Next recommends adding `sharp` for production image optimisation.
- The dev/start scripts depend on `concurrently`; verify clean-clone execution in CI.
- The full-page experience relies heavily on scroll-triggered reveals. Ensure content remains visible with JavaScript disabled, reduced motion, Save Data and automated capture contexts.

## Bottom line

Do not add more products or features to the site. Subtract breadth, add real proof, and make the causal loop impossible to miss.

A developer should leave thinking: "This turns the documents I already have into fewer repeated questions and better handovers."

An investor should leave thinking: "They own the persistent information layer for each home, and every interaction makes that layer more valuable."
