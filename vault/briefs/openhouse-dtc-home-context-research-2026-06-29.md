---
title: OpenHouse DTC home context research
company_id: openhouse-ai
date: 2026-06-29
status: research-brief
source: delegated web research
---

# OpenHouse DTC home context research

## Executive answer

A direct-to-consumer OpenHouse AI can get **useful** home context without developer-provided data, but not enough to reliably deliver a full digital twin automatically. The strongest wedge is not “we know everything about your house from the address”; it is:

> We make it 10x easier to assemble and use your home file, then turn it into specific maintenance, retrofit, planning, warranty and energy decisions.

Best starting markets:

1. **England/Wales** — strongest open property/energy stack: EPC bulk/API, Land Registry price paid, planning.data.gov.uk, local planning portals, smart-meter APIs via suppliers/third parties.
2. **Ireland** — good for planning and sale prices, but BER data is restricted/personal; homeowner consent may unlock BER details, but a consumer product cannot assume open BER-by-address at scale. Eircode licensing is also a friction point.
3. **US** — high consumer spend and many APIs, but public data is fragmented by county/city; national parcel/permit/property APIs are mostly paid aggregators. Energy-label coverage is weak versus EPC/BER.

Bottom line: DTC is plausible as a focused paid product for high-intent moments — buying/selling, retrofit/grants, insurance/home inventory, renovation planning, maintenance troubleshooting — not as a generic always-on $20/month homeowner assistant.

Recommended MVP:

> **Home Context Builder + Retrofit/Maintenance Copilot**

with address lookup, EPC/BER/import flows, document/photo/manual OCR, utility/smart-meter import, appliance/manual recognition, and expert-grade checklists.

## Data sources and feasibility

### Ireland

#### Property price / comparable sales
- Residential Property Price Register includes date of sale, price, and address for Irish residential purchases since 1 Jan 2010.
- It has no further particulars such as floor area or room count.
- Useful for comps and transaction history, poor for physical attributes.
- Source: https://www.propertypriceregister.ie/

#### BER / energy performance
- Public BER map gives aggregate/cluster insight, not reliable individual property details for a DTC app.
- Domestic BER transaction-level API exists, but the Public Service Data Catalogue marks it **Personal**, **Protected**, **restricted**, **not open data**, primary identifier **MPRN**.
- Users must sign a trusted partner agreement with SEAI, demonstrate eligibility, and obtain homeowner consent.
- Promising for consented flows, but not an open-by-address bootstrap.
- Source: https://datacatalogue.gov.ie/dataset/domestic-building-energy-rating-data

#### Planning
- National Planning Applications dataset exists on data.gov.ie and likely provides spatial/tabular data on planning applications in Ireland.
- Useful for property/neighbourhood planning history, extensions, retention applications, etc.
- Current resource URLs / ArcGIS endpoints need implementation validation.

#### Addresses / geocoding
- Eircode is strategically valuable but licensing/commercial access is a likely blocker.
- Without paid/licensed address matching, address normalization will be noisy.

#### Smart meter / utilities
- Ireland smart-meter data is consumer-accessible through suppliers/ESB Networks portals, but no clean public third-party API equivalent to UK Octopus or US UtilityAPI was verified.
- Treat as upload-first: CSV/PDF bills, screenshots, or Green Button-like files if available.
- Later: partner/OAuth with suppliers if possible.

#### Ireland verdict
Strong enough for an MVP if the product leans on user uploads + consented BER + planning/price context. Weak for fully automated address-only context.

### UK / England & Wales

#### EPC / energy performance
- GOV.UK “Get energy performance of buildings data” covers England and Wales.
- Includes domestic/non-domestic EPCs and public building DECs, certificates registered since 2012, bulk CSV download, and developer API.
- Data includes expired/replaced certificates; product must pick latest/current and handle stale data.
- Source: https://get-energy-performance-data.communities.gov.uk/

#### Price paid / sales
- HM Land Registry Price Paid Data includes all England/Wales property sales lodged for registration since 1995, updated monthly.
- Available as CSV/TXT/linked data under OGL with address-data restrictions.
- Source: https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads

#### Planning / housing data
- planning.data.gov.uk is an official beta platform for authoritative planning and housing datasets in England.
- Supports map exploration, search/filter/download in bulk, and an API.
- Source: https://www.planning.data.gov.uk/

#### Smart meter / utilities
- Octopus Energy has REST and GraphQL API docs, including account/meter/tariff/consumption endpoints for customers with API keys.
- This is a strong DTC integration for Octopus customers, especially for time-of-use, heat pump, solar/battery, EV optimisation.
- Source: https://developer.octopus.energy/rest/
- Broader UK smart-meter access is harder because DCC/consent routes are regulated and not uniformly consumer-app friendly. Hildebrand/Glowmarkt-like routes may help but need validation.

#### UK verdict
Best testbed. Address-only can retrieve EPC + transaction + planning context for many homes. User upload/scan fills missing manuals, appliance data, invoices, photos, and actual utility usage.

### United States

#### Property/parcel/assessor/permit data
- US data is fragmented across county assessors, recorders, cities, and permit portals.
- Many local governments expose Socrata/ArcGIS/open data APIs, but coverage is inconsistent.
- Census Building Permits Survey provides national/state/CBSA/county/place-level statistics, not property-level homeowner context.
- Source: https://www.census.gov/construction/bps/index.html
- National property context generally requires paid aggregators: ATTOM, Regrid, CoreLogic, DataTree, HouseCanary, Shovels/BuildZoom-style permit data.
- Sources: https://api.developer.attomdata.com/docs , https://regrid.com/api

#### Energy labels
- No national EPC/BER equivalent.
- Home Energy Score exists but coverage is sparse.
- Utility bills/smart meters matter more than labels.

#### Smart meter / utilities
- Green Button supports consumer-authorized energy usage data through Download My Data / Connect My Data.
- Source: https://www.greenbuttondata.org/
- UtilityAPI provides consented authorization forms and endpoints for authorizations, meters, bills, intervals, files and webhooks.
- Source: https://utilityapi.com/docs/api

#### US verdict
Commercially attractive but hard to bootstrap cheaply. Address-only quality depends on paid data providers. DTC should start in specific states/cities/utilities or accept high variable data costs.

## Consumer-uploadable context: enough to beat generic ChatGPT if structured

High-value user-uploaded items:
- survey/homebuyer report, appraisal, inspection report
- BER/EPC certificate and recommendation report
- floorplans, planning drawings, architect PDFs, structural reports
- invoices/receipts/warranties for boiler, heat pump, windows, insulation, roof, solar, appliances
- utility bills/smart meter CSVs/screenshots
- photos/video walkthrough of rooms, consumer unit/fuse board, boiler/heat pump, cylinder, attic insulation, windows, radiators, ventilation, damp/mould, cracks
- appliance nameplate photos/model numbers/barcodes
- manuals and installation certificates
- insurance schedule and home inventory photos

Modern OCR/vision can extract enough: model numbers, serials, install dates, dimensions, U-values/BER fields, EPC recommendation text, grant-relevant measures, MPRN/MPAN-like identifiers, meter readings, warranty expiry dates.

This is where OpenHouse can beat ChatGPT:
- structured persistent home graph
- retrieval
- reminders
- region-specific rules/grants
- evidence-backed recommendations
- exportable artifacts

## Product wedges that can justify payment

Strong wedges:

1. **Retrofit/grants planner** — upload EPC/BER + bills + photos; get ranked measures, grant eligibility, payback bands, contractor brief.
2. **Homebuyer/seller dossier** — convert survey/EPC/planning/price data into repair risk, negotiation checklist, maintenance forecast, and seller handover pack.
3. **Appliance/manual/warranty copilot** — scan appliance, fetch/store manual, troubleshoot, track filters/servicing/warranty; successor to Centriq but AI-first.
4. **Home maintenance autopilot** — recurring tasks personalized by actual appliances/materials/climate, not generic checklists.
5. **Insurance/home inventory** — photo-to-inventory with receipts/warranties; claim-ready export.
6. **Planning/renovation pre-check** — pull local planning precedents and constraints; generate homeowner brief for architect/builder.

Weak wedges:
- “Ask anything about your house” as a generic subscription.
- Address-only valuation/comps.
- Pure smart-meter analytics.

## Pricing and willingness-to-pay

Reference points:
- HomeZada pricing: free Essentials; Premium $99/year or $15.95/month; Deluxe $189/year; AI chat/photo quotas; extra property $99/year; property file publishing/transfer add-ons.
- ChatGPT has a strong free tier and paid Plus/Pro reference anchor, so generic AI utility competes against this.

Realistic DTC pricing:
- **Free**: address lookup + limited home profile + 3 uploads + basic maintenance checklist.
- **Core**: €6–10/month or €59–99/year for one home.
- **Project pass**: €29–79 one-off for “retrofit plan,” “homebuyer report review,” or “planning/renovation brief.” This may convert better than monthly because homeowner intent is episodic.
- **Premium**: €149–249/year for households actively renovating/retrofitting: smart-meter integration, document vault, exportable contractor briefs, family sharing, insurance inventory.
- **B2B2C/affiliate**: mortgage brokers, estate agents, insurers, energy auditors, utilities, contractors could subsidize acquisition; pure DTC CAC may be tough.

Recommendation: lead with annual/project pricing, not a generic $20/month assistant.

## Strong arguments for DTC

- UK/EW has unusually good open EPC + price + planning data; DTC can create impressive instant value from an address.
- Consumers already possess the missing context in PDFs/photos/bills; OCR/vision can convert it with lower friction than asking developers for feeds.
- Developer-supplied data is not always clean or complete for post-occupancy life.
- Privacy/ownership story is strong: “your home file, portable, not locked to developer/estate agent.”
- DTC can discover demand and data schema before selling to developers/professionals.

## Weak arguments / risks

- Context acquisition is still work. Most consumers will not upload 20 docs unless they have a burning job-to-be-done.
- Ireland BER API is restricted; US property data is fragmented/paid; Eircode/address matching and UK address-data licensing can introduce hidden costs.
- Generic ChatGPT can already analyze uploaded PDFs/photos in a session; OpenHouse must provide persistence, automation, local data integrations, and structured outputs.
- Homeowner subscriptions are low-frequency; churn risk high after the project is complete.
- Liability: retrofit/planning/structural/electrical advice must be framed as guidance, not professional certification.
- Public data is stale/incomplete.

## Recommended DTC MVP

### Market
Start England/Wales first if allowed by company strategy; Ireland second with consented BER/manual upload. US later or city/utility-specific.

### Persona/event
Homeowner or buyer planning retrofit/renovation after receiving EPC/BER/survey, or new homeowner organizing the house.

### MVP flow
1. User enters address.
2. System retrieves: EPC latest + recommendations; price-paid history/comps; planning constraints/nearby applications where available; local climate/flood/solar potential if available.
3. User uploads: survey/report, EPC/BER PDF, 12 months bills/smart-meter CSV, photos of heating system/consumer unit/windows/attic/appliances, invoices/manuals.
4. OCR/vision builds a structured home graph: rooms, fabric, heating/hot water, ventilation, appliances, warranties, maintenance schedule, known issues, energy use baseline.
5. Deliver three concrete artifacts:
   - **Home Health Snapshot**: what we know, confidence, risks, missing evidence.
   - **90-day action plan**: maintenance + safety + quick savings.
   - **Retrofit/renovation brief**: ranked measures, grant eligibility prompts, questions for contractors, expected dependencies and risks.
6. Add persistent chat only after artifacts: every answer cites home facts/sources and asks for missing context.

### Differentiator vs ChatGPT
- auto-fetch public datasets
- persistent structured home memory
- confidence/missing-evidence model
- localized rules/grants/checklists
- ongoing reminders/warranty/manual retrieval
- exportable reports for contractors/insurers/buyers

### Success metric
- Can a user get a credible first Home Health Snapshot in under 5 minutes from address + EPC/BER/survey upload?
- Does >20–30% of users in a project-intent landing page pay €29–79 for the one-off report or convert to €79/year?

## Final recommendation

Do not bypass developers entirely as the long-term strategy, but do run a DTC MVP to validate the home-context layer. The data is sufficient for useful, paid, project-based products — especially in England/Wales and partially in Ireland — but insufficient for a magical fully automatic digital twin. Position OpenHouse as the **AI home file and decision engine**, not a generic homeowner chatbot.

## Connected vault notes

- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — current project state
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] — post-Cairn route reset
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]] — UK/US expansion research
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]] — Irish funding routes
- [[briefs/openhouse-energy-assistant-wedge]] — energy assistant wedge
- [[briefs/openhouse-investor-readiness-operating-plan]] — investor operating plan
- [[context/openhouse-sales-routes]] — sales routes and wedges

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]]
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]]
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[companies/openhouse-ai]]
- [[context/openhouse-sales-routes]]
- [[project_state/oh]]

