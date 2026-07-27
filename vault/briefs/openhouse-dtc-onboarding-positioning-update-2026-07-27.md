---
title: OpenHouse DTC onboarding and positioning update
date: 2026-07-27
status: research-brief
scope: Ireland-first consumer home context without developer handover data
---

# DTC home onboarding: evidence and recommendation

## Decision

**Recommendation, not market fact:** Launch a paid, event-led **Home Energy Upgrade Ready Plan**, rather than a generic recurring homeowner chatbot or a generic home-document vault.

> *Upload your BER/advisory report and latest bill, add four guided photos, and get a home-specific upgrade-ready brief: what we know, the likely energy blockers, the evidence to collect, and the next best actions.*

It gives a first meaningful output despite no developer handover, earns the right to ask for richer context over time, and creates the same structured living-home record that a developer, assessor, installer or utility could later populate or purchase as a B2B/B2B2C workflow.

## What can credibly create a home context without a developer

| Signal | What it can establish | Best consumer interaction | Limit / rule |
|---|---|---|---|
| **Eircode / address** | Canonical home identity; local climate/area and any separately licensed public enrichment | Address search, then user confirms the returned address | Eircode says its system accurately identifies addresses; it is an identity anchor, **not** proof of fabric, systems or ownership. Do not promise address-only digital-twin accuracy. |
| **Age and dwelling type** | Initial maintenance and retrofit assumptions, e.g. likely fabric/system era | Ask user to confirm: detached/semi/terrace/apartment, approximate build decade, floor area/bedrooms if known | Treat all inferred fields as provisional and display confidence. A construction year in a BER is stronger but can still be stale after upgrades. |
| **BER certificate + advisory report** | BER score, energy/fabric/system assumptions, recommendations and report date | Scan QR / upload PDF; optionally enter BER number or MPRN after clear consent | SEAI’s National BER Register searches by BER number or MPRN, rather than address. The Research Tool is statistical and downloadable; do not build an Ireland address-to-individual-BER promise around it. |
| **Survey, purchase pack, invoices, warranties, manuals** | Evidence-backed asset/system facts: make/model, install date, servicing/warranty status, known defects | Forward/upload the documents in a “start with what you have” tray | OCR must show the extracted field, source page/photo, and a “confirm” action. Missing docs are normal, not a product failure. |
| **Guided photos and nameplates** | Heating/hot water/ventilation equipment, insulation clues, windows, meter and appliance serial/model labels | Four initial prompts: heat source, hot-water/cylinder/controls, electricity meter/consumer unit, attic/window; then nameplate close-ups | Vision is an intake accelerator, not a safety inspection. Never diagnose electrical, structural, gas or fire safety from a photo as fact. |
| **Bills / ESB smart-meter export** | Actual historic consumption, MPRN, tariff periods, load shape, baseline | Upload a recent bill first; show an optional guided ESB Networks export path afterward | ESB Networks says its customer portal provides actual usage and an HDF download of up to two years; it also says only the customer can access smart-meter data. This supports a user-mediated import, not an assumed third-party API. |
| **Device inventory** | What must be maintained, what may be under warranty, and targeted reminders/manual retrieval | “Scan the label” flow grouped by room/system, not an empty spreadsheet | Begin with high-cost/high-risk assets: boiler/heat pump, cylinder, ventilation, solar/inverter, EV charger, washing machine/dryer. Do not ask users to inventory every possession at first-run. |

## Evidence: Ireland-specific data and access constraints

1. **Eircode is a strong address-confirmation primitive.** Its public site says it is Ireland’s postcode system and that an Eircode helps accurately identify an address; the Finder returns Eircodes for addresses. This supports a user-confirmed home record and reduces free-text address ambiguity. It does not grant a general, free property-data API.
2. **BER is valuable when supplied or consented, not a safe address-only bootstrap.** SEAI’s National BER Register requires a BER number or 11-digit MPRN to retrieve a property certificate/advisory report. SEAI’s BER Research Tool provides statistical data and a bulk download. The product should therefore lead with upload/scan/number entry and make the provenance visible.
3. **Energy data can be owned/imported by the customer.** ESB Networks says an account holder can see actual usage, day/night/peak breakdown, and download a Harmonised Downloadable File covering up to two years, even across a supplier change. It says the data can be uploaded to price-comparison sites, confirming an export-led workflow is feasible. Its published delay is 36–48 hours, so OpenHouse should not display it as real-time control data.
4. **Retailer dashboards already teach the core energy task.** Electric Ireland promotes smart meters as accurate usage data, access/control of consumption, smart-meter plans, and a customer mobile app. That makes “see usage / choose tariff” an established substitute and argues against entering first with another generic dashboard.

## Competitive map and strategic implication

| Substitute / competitor | What it already does | Product implication (recommendation) |
|---|---|---|
| **ESB Networks account** | Meter readings, MPRN, outage status, actual smart-meter usage, downloadable history | Do not replicate meter access. Give the user a simple export/import route and turn the file into a home-specific decision and baseline. |
| **Supplier / retailer apps (e.g. Electric Ireland)** | Billing, tariffs, usage visibility, account management; retailers increasingly bundle solar, EV and heat-pump offers | Avoid “one more energy chart.” Be provider-neutral and combine usage with BER, physical system evidence, invoices, and an action brief. |
| **Homey** | Device integration/control, rules/automations, connected-device energy and dashboards; its official site positions Cloud as free-to-start and Pro as a local smart-home hub | Homey is strongest after the home has compatible connected devices. OpenHouse should be the **home record and decision layer** that works before, during and without smart-home hardware; later it can ingest/point to device data rather than compete on automations. |
| **HomeZada / digital home-management tools** | Inventory, maintenance, projects, documents, finances and AI; HomeZada explicitly markets AI photo recognition for room/item inventory plus maintenance scheduling | This validates photo-led inventory and an ongoing home record, but it also means a generic “documents + reminders + AI chat” proposition is not distinctive. Win on local energy/retrofit evidence, confidence, and a contractor-ready output. |
| **Generic AI (ChatGPT et al.), folders, spreadsheets, installers/assessors** | Can interpret a supplied PDF/photo or provide general advice; folders retain documents; professionals give high-trust project advice | OpenHouse must preserve a structured record, identify what is missing, cite its evidence, schedule follow-ups, and export a brief a professional can use. It should not present itself as replacing an assessor, electrician, architect or surveyor. |

## Willingness-to-pay and repeat-use risk

### Evidence

- The category is fragmented: utilities own billing/usage; Homey owns connected-home automation; HomeZada owns inventory/maintenance. These are not proof of a broad consumer subscription willingness to pay for an assistant that merely answers questions.
- Homey’s official free-to-start Cloud proposition and HomeZada’s free onboarding proposition are strong signals that onboarding must demonstrate value before demanding payment.
- In Ireland, smart-meter exports are available through the owner’s ESB Networks account, but require an account, MPRN/verification and an active consumer step. This friction means energy data should be an optional enrichment after an immediate upload-based payoff.

### Strategic recommendation

- **Do not lead with €15–20/month.** Household use is episodic: buying, moving, a fault, an annual service, a retrofit and an insurance event. A generic assistant has high post-project churn and competes with free AI.
- Start with a **one-off €29–79 Upgrade Ready Plan** (or free for a tightly scoped acquisition test). Offer a **€59–99/year Home File** only once the user has an asset register, documents, a maintenance cadence or a live retrofit project worth preserving.
- Define activation as: address confirmed + BER/bill or report uploaded + 2–4 photos + a useful brief opened. Measure a 30/90-day return triggered by a real task (service reminder, bill comparison, quote review), not chat messages alone.
- Use annual/project purchase rather than usage-token pricing. Offer family/partner sharing and a portable PDF/CSV record to reduce lock-in anxiety.

## Recommended onboarding: a 5-minute progressive flow

1. **Claim the home:** Eircode/address, user confirmation, dwelling type and approximate age. Explain what is an estimate.
2. **Choose a job:** “lower bills / plan an upgrade,” “understand a report,” “organise systems and warranties,” or “prepare for a contractor.” Default acquisition campaign: lower bills/upgrade.
3. **Bring one proof:** BER/advisory report, survey, or most recent electricity bill. Accept PDF, photo and email forward; do not block on all fields.
4. **Four photo prompts:** heating source, controls/hot water, meter/consumer unit, attic/window. For each, let the user skip and explain why it would help.
5. **Return an immediate artefact:** `Home Energy Snapshot` with (a) facts + source, (b) provisional assumptions, (c) missing evidence, (d) 90-day actions, and (e) a next upload/photo only if it changes a decision.
6. **Earn deeper enrichment:** offer ESB HDF upload, nameplate scans, manuals/invoices, then reminders and quote/contractor-brief export.

## First use case: Home Energy Upgrade Ready Plan

**User moment:** An Irish homeowner has rising electricity bills, a BER/survey from purchase, or is considering a heat pump/solar/insulation quote, but does not know which evidence or upgrades matter first.

**Promise:** “Turn the evidence you already own into the questions, order of work and information needed to make a safe next decision.”

**First deliverable (not advice masquerading as certification):**
- known home facts and confidence/source trail;
- consumption baseline from bill or ESB HDF;
- likely upgrade dependencies and missing evidence (for example, ventilation/heat-loss assessment/controls/system details as applicable);
- a ranked *investigation and decision* checklist, not guaranteed savings;
- contractor/BER-assessor question list and shareable home brief;
- follow-up reminders for document/quote/servicing milestones.

**Why this is the best wedge (recommendation):** It has a current, expensive, high-intent job; it turns fragmented consumer files into tangible value; it avoids direct competition with retailer billing screens; and it maps directly to OpenHouse’s existing Money / Comfort / Risk living-home model. After a consumer builds this record, developer handover can become an accelerator (“pre-populate/verify the same record”), not a dependency.

## Sources (accessed 2026-07-27)

- Eircode, *What is Eircode / Find an Eircode*: https://www.eircode.ie/
- SEAI, *National BER Register* (BER/MPRN search and advisory-report access): https://ndber.seai.ie/Pass/ber/search.aspx
- SEAI, *BER Public Research Tool* (statistical/building-energy data and bulk download): https://ndber.seai.ie/BERResearchTool/
- ESB Networks, *View my smart meter usage* (account access, HDF export, time periods, two-year history, privacy): https://www.esbnetworks.ie/services/manage-my-meter/view-my-smart-meter-usage
- Electric Ireland, *Smart meters* (consumer energy-usage/tariff/mobile-app positioning): https://www.electricireland.ie/residential/products/smart-meters
- Homey, official product page (Cloud, Pro, device control, automation, Energy, Insights, Dashboards): https://www.homey.app/en-us/
- HomeZada, official overview: https://www.homezada.com/
- HomeZada, *Home Inventory* (AI photo recognition and insurance/inventory positioning): https://www.homezada.com/homeowners/home-inventory
- HomeZada, *Home Maintenance* (personalised maintenance scheduling): https://www.homezada.com/homeowners/home-maintenance

## Prior work

This is a current-source refinement of [[briefs/openhouse-dtc-home-context-research-2026-06-29]], which contains broader UK/US comparison and earlier pricing hypotheses.
