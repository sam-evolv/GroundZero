---
title: OpenHouse energy assistant wedge
company_id: openhouse-ai
date: 2026-06-26
status: research-brief
---

# OpenHouse energy assistant wedge

## One-line thesis
OpenHouse can extend from handover and aftercare into the operating system for low-carbon new homes by giving each buyer a contextual energy assistant that understands their heat pump, solar PV, EV charging, tariff, bills, manuals, warranties, and usage data.

## Why this matters
The strongest version is not "a chatbot for solar panels". It is an evidence and intelligence layer for new-build homes:

- **Homeowner value:** lower bills, fewer support calls, clearer device education, better confidence with heat pumps, PV, EV charging, tariffs, and energy bills.
- **Developer value:** better handover, fewer confused aftercare tickets, stronger ESG / sustainability story, proof that the scheme is not just A-rated on paper but actively supported after occupation.
- **Investor / lender / certification value:** cleaner evidence for HPI / HPP, green finance, ESG reporting, and operational performance narratives.
- **OpenHouse moat:** device context, scheme context, handover docs, homeowner questions, issue reports, warranties, and bills all compound into a domain-specific data layer generic portals do not have.

## Connected vault notes

- [[companies/openhouse-ai]] — parent company
- [[goals/oh-aftercare-os]] — aftercare OS vision this extends
- [[goals/oh-funder-pitch]] — funder pitch narrative
- [[goals/oh-activation]] — activation goal
- [[briefs/solar-installer-software-wedge]] — solar wedge cross-link
- [[briefs/solar-installer-workflow-analysis]] — Irish solar evidence
- [[briefs/planet-satellite-opportunity]] — satellite monitoring
- [[companies/evolv-renewables]] — renewables cross-link
- [[context/consulting-wedges]] — consulting wedge
- [[context/business-opportunities-moc]] — MOC hub
- [[briefs/ai-money-patterns-2026-06]] — pattern context

- [[imports/claude/openhouse-company-memory]] — shared signals: openhouse, company, claude
- [[imports/x/gipp-obsidian-self-maintaining-wiki-2026-06-26]] — shared signals: maintaining, obsidian, gipp
- [[imports/campaigns/openhouse-full-context]] — shared signals: openhouse, full
- [[imports/campaigns/openhouse-innovation-strategy]] — shared signals: innovation, openhouse, strategy
## Evidence from quick research

### 1. HPI / HPP already rewards the exact direction OpenHouse is moving in
The Home Performance Index positions itself as Ireland's national residential sustainability certification and says it provides transparency against ESG criteria, is tailored to the Irish market, and aligns with the EU Taxonomy. The public HPI page also states that AIB and HBFI give homebuilders financial incentives to address climate change using HPI.

The HPI technical documents include a Home User Guide / Consumer Information and Aftercare component. This is directly aligned with OpenHouse's existing aftercare and homeowner education product surface.

Implication: OpenHouse should not pitch this as a speculative AI gadget. It should pitch it as the digital handover, education, evidence, and aftercare layer that makes green-home certification and buyer support easier to prove.

Sources:
- https://www.igbc.ie/home-performance-index/
- https://homeperformanceindex.ie/technical-manual-download/
- https://homeperformanceindex.ie/home-performance-pathway/
- https://homeperformanceindex.ie/aib-to-offer-discounted-loans-to-developers-who-adopt-home-performance-index/

### 2. Cairn-style developers already care about this story
Cairn's 2023 annual report says all new homes in Ireland are A2-rated and meet NZEB standards, and that efficient new homes emit 70% less CO2 than homes built under 2005 standards. Cairn reported 1,741 A2 BER sales completions in 2023, retained a CDP A- rating, committed to net zero by 2050, and highlighted passive-house apartment schemes as reducing Scope 3 emissions and occupant energy bills.

The report also says all Cairn new houses have heat pumps by default and all homes have BER A3 or above.

Implication: the buyer is already saying "sustainability, A-rated homes, heat pumps, passive house, Scope 3, occupant bills". OpenHouse can give them a productized customer-facing layer around that story.

Source:
- Cairn Homes plc Annual Report 2023, via AnnualReports: https://www.annualreports.com/Company/cairn-homes-plc

### 3. Ireland's smart meter infrastructure makes queryable energy insight credible
CRU says smart meters have been installed in over 2 million homes and businesses in Ireland, collect electricity-use data every 30 minutes, and let customers make more informed choices around off-peak use. ESB Networks states smart meters record both import and export data, including half-hourly interval data, where applicable.

Implication: even before direct inverter / heat-pump APIs, a realistic demo can use smart-meter-style interval data, export data, tariffs, and device metadata. The assistant can answer useful questions from synthetic data now and later connect to real consented data sources.

Sources:
- https://www.cru.ie/consumer-information/billing/smart-meters-and-services/
- https://www.esbnetworks.ie/services/manage-my-meter/about-smart-meters/smart-meters-and-data
- https://consult.cru.ie/en/consultation/smart-meter-upgrade-access-near-real-time-metering-data

### 4. Regulation is pushing homes toward exactly this stack
Irish EPBD regulations define energy performance as the calculated or measured energy needed for heating, cooling, ventilation, hot water, and lighting, and include renewable sources such as solar and aerothermal energy. Separate 2021 regulations require ducting infrastructure for EV charging in new residential buildings with more than 10 parking spaces.

The revised EU Energy Performance of Buildings Directive aims for a fully decarbonised building stock by 2050 and references renewable energy, solar panels, and smart readiness of buildings.

Implication: OpenHouse should treat energy devices and smart-readiness as part of the new-home operating layer, not as a separate renewables-installer product.

Sources:
- https://www.irishstatutebook.ie/eli/2019/si/183/made/en/print
- https://www.irishstatutebook.ie/eli/2021/si/393/made/en/print
- https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en

## Recommended product shape

### Homeowner surface
A new **Energy** area in the homeowner portal:

- Device profile: heat pump, solar PV, battery if present, EV charger, smart meter, tariff, BER / HPI context.
- Live-ish dashboard: import, export, solar generation, heat-pump electricity use, EV charging, estimated cost, CO2 avoided, self-consumption, peak usage.
- Assistant answers:
  - "Why was my electricity bill high this month?"
  - "Did my solar panels cover much of my usage?"
  - "Should I charge the car overnight?"
  - "Is my heat pump running inefficiently?"
  - "What changed versus last month?"
  - "Is this bill correct?" with OCR / bill upload.
- Handover content: device manuals, commissioning docs, warranty, installer contacts, maintenance instructions.
- Nudges: tariff optimisation, peak-time alerts, heating schedule suggestions, bill anomaly detection.

### Developer dashboard surface
A new **Energy Intelligence** tab:

- Per-scheme aggregate: average usage, export, heat-pump consumption proxy, self-consumption, peak periods, bill-anomaly volume.
- Cohort comparisons: houses with PV vs no PV, EV charger active vs inactive, by house type, by phase.
- Handover evidence: percent of residents who viewed energy guide, asked assistant questions, uploaded first bill, acknowledged device guidance.
- ESG / HPI pack export: anonymised, aggregated scheme-level evidence and narrative.
- Aftercare reduction: questions answered by assistant, top recurring misunderstandings, likely documentation gaps.

### Assistant context profile for demo
For Cairn demo data, create one fake homeowner profile with:

- A2 BER / NZEB home.
- Air-to-water heat pump.
- Solar PV array.
- EV charger.
- Optional future battery.
- Smart-meter-style interval import / export data.
- Tariff assumptions with day / night / peak periods.
- One uploaded electricity bill image or structured mock bill.
- Device manuals / FAQs as RAG context.

The demo assistant should never pretend it has real live telemetry. It should say "based on your connected devices and recent usage data" in the demo environment.

## Killer applications hiding in the shallow grass

1. **Bill explainer:** homeowner uploads electricity bill, assistant explains charges, usage, export credit, tariff fit, and likely causes.
2. **Heat pump confidence layer:** most buyers do not know how to live with heat pumps. OpenHouse can reduce confusion, comfort complaints, and aftercare tickets.
3. **Solar self-consumption coach:** explain whether the homeowner is using their generated solar or exporting too much.
4. **EV charging optimiser:** recommend charging windows based on tariff, household load, and solar generation.
5. **Scheme ESG evidence pack:** anonymised aggregate performance and engagement evidence for the developer.
6. **HPI / HPP handover proof:** exportable proof that consumer information and aftercare guidance was delivered and used.
7. **Warranty / maintenance routing:** connect device errors, servicing dates, manuals, installer contacts, and support requests.
8. **Commissioning quality check:** flag homes where energy usage pattern looks inconsistent with the installed setup.
9. **Resident education loop:** top homeowner questions become improved handover docs for future schemes.
10. **Retrofit extension later:** the same device-profile and bill-intelligence model could work for retrofit homes, but new builds should stay the first wedge.

## Built-to-rent / student accommodation

This is worth exploring but should not be the first build.

Why it may work:
- Landlords / operators care about aggregate operational costs, tenant support, ESG reporting, and anomalies.
- Apartments can still have metered electricity, smart meters, central plant, district heating, MVHR, communal solar, or building-management systems.
- The assistant could help residents reduce bills and help operators understand energy patterns.

Why it is weaker for the first OpenHouse demo:
- Less clear individual device ownership.
- More privacy sensitivity around tenant monitoring.
- Energy systems are often communal or operator-controlled.
- The sales story may drift away from OpenHouse's new-home handover wedge.

Recommendation: keep BTR as a second use case. For now, build the new-home owner-occupier version because heat pump + PV + EV charger + handover context is cleaner.

## Data and privacy guardrail

The phrase "the data is worth money" is directionally true, but OpenHouse should not position itself as selling homeowner energy data.

Safer, stronger framing:
- consented homeowner value first
- anonymised, aggregated scheme insights for the developer
- opt-in data access
- clear privacy boundaries
- no individual household monitoring sold to developers
- exportable ESG / HPI evidence at scheme level

This preserves trust and avoids turning a premium homeowner platform into something that feels surveillant.

## MVP build recommendation

Build the demo in three layers:

1. **Static device context:** heat pump, solar PV, EV charger, BER / NZEB / HPI profile, manuals, warranties.
2. **Synthetic time-series data:** 30-minute import / export, solar generation, heat-pump load estimate, EV charging sessions, tariff windows, monthly bill.
3. **Assistant tools / prompts:** answer energy questions from the profile + data, explain bill, suggest actions, generate scheme-level developer insights.

Demo success criteria:
- The homeowner can ask 10 realistic questions and get grounded, non-generic answers.
- The developer can see a scheme-level aggregate dashboard without exposing personal household data.
- The product clearly reinforces the existing OpenHouse thesis: handover, aftercare, evidence, and premium homeowner experience.

## Positioning line
OpenHouse turns a low-carbon new home from a box of devices and PDFs into a living operating system: the homeowner knows how to run the home, and the developer can prove the scheme performs beyond handover.

## Clever additions to make the product more compelling

### 1. Home health score
Create a simple homeowner-facing score that combines comfort, cost, solar use, heat-pump efficiency proxy, EV charging behaviour, and maintenance status. Avoid making it feel punitive. Frame it as: "Your home is running well, here are 2 small improvements."

### 2. First 90 days energy concierge
For the first 90 days after move-in, the assistant proactively guides the buyer through the new-home learning curve:
- week 1: heat-pump basics and comfort settings
- week 2: tariff and smart-meter setup
- week 3: solar / export explanation
- month 1: first bill explanation
- month 2: optimise EV charging
- month 3: seasonal settings and maintenance checklist

This is a strong developer pitch because it reduces avoidable aftercare tickets during the highest-friction period.

### 3. Bill anomaly detection
Let the homeowner upload a bill or connect structured bill data. The assistant flags likely causes:
- estimated reading vs actual reading
- wrong tariff
- unusual peak usage
- EV charging at expensive times
- heat-pump schedule issue
- low solar self-consumption
- standing charge / PSO / network-charge explanation

### 4. Comfort complaints triage
When a homeowner says "the house is cold" or "the heat pump is not working", the assistant walks through a safe triage flow before escalating:
- thermostat settings
- hot water schedule
- room-by-room symptoms
- weather context
- expected heat-pump behaviour
- whether this is education, commissioning, installer, or warranty issue

This links energy directly back into OpenHouse aftercare.

### 5. Scheme-level performance story
For developers, create an anonymised monthly scheme report:
- average estimated bill
- average solar self-consumption
- estimated CO2 avoided
- common resident questions
- top documentation gaps
- percent of residents onboarded to energy guide
- aftercare tickets avoided / answered by assistant

This becomes an ESG / HPI / investor-relations artifact, not just a dashboard.

### 6. Digital building passport
Turn OpenHouse into a homeowner-owned record of the home:
- BER / NZEB / HPI status
- devices installed
- serial numbers
- warranties
- commissioning dates
- manuals
- maintenance history
- upgrades
- bill / usage history if consented

This could later support resale, retrofit, warranty, green mortgage, and insurance workflows.

### 7. Smart handover checklist
Make the energy add-on part of the handover ceremony:
- scan QR on heat pump
- confirm EV charger app setup
- confirm smart-meter account setup
- read solar explainer
- upload first bill when it arrives
- acknowledge maintenance basics

Developer gets proof that buyer education happened.

### 8. AI-generated homeowner micro-guides
Instead of dumping PDFs, generate short guides specific to the home:
- "How your heat pump works in this house"
- "How to read your first electricity bill"
- "How to use your solar panels effectively"
- "How to charge your EV cheaply"
- "What to do before calling aftercare"

### 9. Installer / subcontractor quality loop
Aggregate recurring issues back to the developer:
- which heat-pump settings cause support requests
- which installer handovers produce fewer tickets
- which house types show unusual energy patterns
- which manuals are confusing

This gives developers a continuous-improvement loop across schemes.

### 10. Green mortgage / lender pack
Create a resident or developer export that packages energy credentials, BER / HPI context, and operational evidence into a clean document for lenders, valuers, or green-finance partners.

### 11. Seasonal mode
The assistant changes advice by season:
- winter heat-pump optimisation
- summer overheating / ventilation
- spring solar performance
- holiday mode
- storm / outage prep

### 12. Consent-first data vault
Make privacy part of the premium positioning. The homeowner sees exactly what data is connected and can choose:
- private to homeowner only
- anonymous scheme aggregate
- share with developer for aftercare
- share with installer for maintenance

This avoids the product feeling surveillant while preserving the developer insight layer.

## Next implementation brief

- Add an Energy tab to homeowner portal.
- Add Energy Intelligence tab to developer dashboard.
- Add demo seed data for one Cairn-style scheme and one homeowner.
- Add assistant profile / RAG context for heat pump, PV, EV charger, tariff, smart meter, bill, and manuals.
- Add 10-15 canned eval questions before demoing.
- Keep the first pitch focused on Cairn-style new builds and HPI / ESG / buyer support.
- Add the first 90 days energy concierge, bill explainer, smart handover checklist, and scheme-level energy report as the most compelling demo extras.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/ai-money-patterns-2026-06]]
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]]
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]]
- [[briefs/openhouse-energy-intelligence-sketch]]
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]]
- [[briefs/planet-satellite-opportunity]]
- [[briefs/solar-installer-software-wedge]]
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
- [[companies/evolv-renewables]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[context/consulting-wedges]]
- [[context/openhouse-product-map]]
- [[context/openhouse-sales-routes]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]

