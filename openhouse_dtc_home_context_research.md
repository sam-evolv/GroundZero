# DTC OpenHouse AI: can we get enough home context without developers?

Date: 2026-06-29

## Executive answer

A direct-to-consumer OpenHouse AI can get **useful** home context without developer-provided data, but not enough to reliably deliver a full digital twin automatically. The strongest wedge is not “we know everything about your house from the address”; it is “we make it 10x easier to assemble and use your home file, then turn it into specific maintenance/retrofit/planning decisions.”

Best starting markets:
1. **England/Wales**: strongest open property/energy stack: EPC bulk/API, Land Registry price paid, planning.data.gov.uk, local planning portals, smart-meter APIs via suppliers/third parties.
2. **Ireland**: good for planning and sale prices, but BER data is restricted/personal; homeowner consent may unlock BER details, but a consumer product cannot assume open BER-by-address at scale. Eircode licensing is also a friction point.
3. **US**: high consumer spend and many APIs, but public data is fragmented by county/city; national parcel/permit/property APIs are mostly paid aggregators. Energy-label coverage is weak versus EPC/BER.

Bottom line: DTC is plausible as a focused paid product for high-intent moments—buying/selling, retrofit/grants, insurance/home inventory, renovation planning, maintenance troubleshooting—not as a generic always-on $20/mo homeowner assistant. Recommended MVP is a “Home Context Builder + Retrofit/Maintenance Copilot” with address lookup, EPC/BER/import flows, document/photo/manual OCR, utility/smart-meter import, appliance/manual recognition, and expert-grade checklists.

## Data sources and feasibility

### Ireland

**Property price / comparable sales**
- Residential Property Price Register: includes date of sale, price, and address for Irish residential purchases since 1 Jan 2010. It explicitly says there are no further particulars such as floor area or room count. Download-all and search are available. Useful for comps and transaction history, but poor for physical attributes.
- Source: https://www.propertypriceregister.ie/

**BER / energy performance**
- Public BER map gives aggregate/cluster insight, not reliable individual property details for a DTC app.
- Domestic BER transaction-level API exists, but the Public Service Data Catalogue marks it **Personal**, **Protected**, **restricted**, **not open data**, primary identifier **MPRN**. Description says users must sign a trusted partner agreement with SEAI, demonstrate eligibility, and obtain homeowner consent.
- This is promising for consented flows, but not an open-by-address bootstrap.
- Source: https://datacatalogue.gov.ie/dataset/domestic-building-energy-rating-data

**Planning**
- National Planning Applications dataset exists on data.gov.ie; Google result summary says it provides spatial and tabular data on planning applications in Ireland. Likely useful for property/neighbourhood planning history, extensions, retention applications, etc.
- Need implementation check on current resource URLs/ArcGIS endpoints; the simple guessed URL 404’d, but search results confirmed the dataset title/resources.
- Search source: https://www.google.com/search?q=site%3Adata.gov.ie+%22National+Planning+Application+Database%22

**Addresses / geocoding**
- Eircode is strategically valuable but licensing/commercial access is a likely blocker. Without paid/licensed address matching, address normalization will be noisy.

**Smart meter / utilities**
- Ireland smart-meter data is consumer-accessible through suppliers/ESB Networks portals, but I did not verify a public third-party API equivalent to UK Octopus/US UtilityAPI. Treat as upload-first: CSV/PDF bills, screenshots, or Green Button-like files if available. Later: partner/OAuth with suppliers if possible.

**Ireland verdict**
- Strong enough for an MVP if the product leans on user uploads + consented BER + planning/price context. Weak for fully automated address-only context.

### UK / England & Wales

**EPC / energy performance**
- GOV.UK “Get energy performance of buildings data” covers England and Wales, includes domestic/non-domestic EPCs and public building DECs, certificates registered since 2012, bulk CSV download, and developer API. It requires GOV.UK One Login for bulk, but API access is documented.
- Data includes expired/replaced certificates too; product must pick latest/current and handle stale data.
- Source: https://get-energy-performance-data.communities.gov.uk/

**Price paid / sales**
- HM Land Registry Price Paid Data includes all England/Wales property sales lodged for registration since 1995, updated monthly, available as CSV/TXT/linked data under OGL with address-data restrictions. Complete file is ~5GB; yearly/monthly files available.
- Fields include postcode, PAON/SAON, street, locality, town/city, district, county; also property type and transaction flags.
- Source: https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads

**Planning / housing data**
- planning.data.gov.uk is an official beta platform for authoritative planning and housing datasets in England. It supports map exploration, search/filter/download in bulk, and an API.
- Source: https://www.planning.data.gov.uk/

**Smart meter / utilities**
- Octopus Energy has REST and GraphQL API docs, including account/meter/tariff/consumption endpoints for customers with API keys. This is a strong DTC integration for Octopus customers, especially for time-of-use, heat pump, solar/battery, EV optimisation.
- Source: https://developer.octopus.energy/rest/
- Broader UK smart-meter access is harder because DCC/consent routes are regulated and not uniformly consumer-app friendly. Hildebrand/Glowmarkt-like routes may help but were not verified in this pass.

**UK verdict**
- Best testbed. Address-only can retrieve EPC + transaction + planning context for many homes. User upload/scan fills missing manuals, appliance data, invoices, photos, and actual utility usage.

### United States

**Property/parcel/assessor/permit data**
- US data is fragmented across county assessors, recorders, cities, and permit portals. Many local governments expose Socrata/ArcGIS/open data APIs, but coverage is inconsistent.
- Census Building Permits Survey provides national/state/CBSA/county/place-level residential construction statistics, not property-level homeowner context. Useful for market/area context, not an individual home file.
- Source: https://www.census.gov/construction/bps/index.html
- National property context generally requires paid aggregators: ATTOM, Regrid, CoreLogic, DataTree, HouseCanary, Shovels/BuildZoom-style permit data. Google result for ATTOM states property characteristics/tax/deed/permits; ATTOM marketing claims 200M+ building permits from 2,000+ building departments. Regrid provides nationwide parcel boundaries and parcel records.
- Sources: https://api.developer.attomdata.com/docs , https://regrid.com/api

**Energy labels**
- No national EPC/BER equivalent. Home Energy Score exists but coverage is sparse and not a universal public property dataset. Utility bills/smart meters matter more than labels.

**Smart meter / utilities**
- Green Button is a standard for consumer-authorized energy usage data for electricity/gas/water; Green Button site describes Download My Data / Connect My Data as consumer-friendly/computer-friendly formats.
- Source: https://www.greenbuttondata.org/
- UtilityAPI provides consented authorization forms and endpoints for authorizations, meters, bills, intervals, files and webhooks. This is the closest US “Plaid for utility data,” but coverage and per-authorization costs matter.
- Source: https://utilityapi.com/docs/api

**US verdict**
- Commercially attractive but hard to bootstrap cheaply. Address-only quality depends on paid data providers. DTC should start in specific states/cities/utilities or accept high variable data costs.

## Consumer-uploadable context: likely enough to beat generic ChatGPT

High-value user-uploaded items:
- Survey/homebuyer report, appraisal, inspection report.
- BER/EPC certificate and recommendation report.
- Floorplans, planning drawings, architect PDFs, structural reports.
- Invoices/receipts/warranties for boiler, heat pump, windows, insulation, roof, solar, appliances.
- Utility bills/smart meter CSVs/screenshots.
- Photos/video walkthrough of rooms, consumer unit/fuse board, boiler/heat pump, cylinder, attic insulation, windows, radiators, ventilation, damp/mould, cracks.
- Appliance nameplate photos/model numbers/barcodes.
- Manuals and installation certificates.
- Insurance schedule and home inventory photos.

Modern OCR/vision can extract enough: model numbers, serials, install dates, dimensions, U-values/BER fields, EPC recommendation text, grant-relevant measures, MPRN/MPAN/MPRN-like identifiers, meter readings, warranty expiry dates. This is where OpenHouse can beat ChatGPT: a structured persistent home graph, retrieval, reminders, region-specific rules/grants, and evidence-backed recommendations rather than ad hoc chat.

## Product wedges that can justify payment

Strong wedges:
1. **Retrofit/grants planner**: “Upload EPC/BER + bills + photos; get ranked measures, grant eligibility, payback bands, contractor brief.” Best in Ireland/UK where EPC/BER/grants are salient.
2. **Homebuyer/seller dossier**: Convert survey/EPC/planning/price data into repair risk, negotiation checklist, maintenance forecast, and seller handover pack.
3. **Appliance/manual/warranty copilot**: Scan appliance, fetch/store manual, troubleshoot, track filters/servicing/warranty; successor to Centriq but AI-first.
4. **Home maintenance autopilot**: Recurring tasks personalized by actual appliances/materials/climate, not generic checklists.
5. **Insurance/home inventory**: Photo-to-inventory with receipts/warranties; claim-ready export.
6. **Planning/renovation pre-check**: Pull local planning precedents and constraints; generate homeowner brief for architect/builder.

Weak wedges:
- “Ask anything about your house” as a generic subscription. ChatGPT can do much of this if the user uploads documents each time.
- Address-only valuation/comps. Many free portals already do this.
- Pure smart-meter analytics. Energy apps/supplier apps already exist; value comes when combined with fabric/appliance/retrofit context.

## Pricing and willingness-to-pay

Observed reference points:
- HomeZada pricing: free Essentials; Premium $99/year or $15.95/month; Deluxe $189/year; AI chat/photo quotas; extra property $99/year; property file publishing/transfer add-ons. Source: https://www.homezada.com/homeowners/pricing
- ChatGPT has a strong free tier and paid Plus/Pro reference anchor; generic AI utility competes against this. Source checked: https://chatgpt.com/pricing/

Realistic DTC pricing:
- **Free**: address lookup + limited home profile + 3 uploads + basic maintenance checklist.
- **Core**: €6–10/month or €59–99/year for one home: persistent home file, OCR/docs, manuals, reminders, 25–100 AI questions/year/month depending costs.
- **Project pass**: €29–79 one-off for “retrofit plan,” “homebuyer report review,” or “planning/renovation brief.” This may convert better than monthly because homeowner intent is episodic.
- **Premium**: €149–249/year for households actively renovating/retrofitting: smart-meter integration, document vault, exportable contractor briefs, family sharing, insurance inventory.
- **B2B2C/affiliate**: mortgage brokers, estate agents, insurers, energy auditors, utilities, contractors could subsidize acquisition; pure DTC CAC may be tough.

Recommendation: lead with annual/project pricing, not a generic $20/month assistant. Homeowners will pay when linked to a costly decision or avoided hassle.

## Strong arguments for DTC

- UK/EW has unusually good open EPC + price + planning data; DTC can create impressive instant value from an address.
- Consumers already possess the missing context in PDFs/photos/bills; OCR/vision can convert it with lower friction than asking developers for feeds.
- Developer-supplied data is not always clean or complete for post-occupancy life. Homeowners have real invoices, appliances, warranties, photos, smart-meter usage.
- Privacy/ownership story is strong: “your home file, portable, not locked to developer/estate agent.”
- DTC can discover demand and data schema before selling to developers/professionals.

## Weak arguments / risks

- Context acquisition is still work. Most consumers will not upload 20 docs unless they have a burning job-to-be-done.
- Ireland BER API is restricted; US property data is fragmented/paid; Eircode/address matching and UK address-data licensing can introduce hidden costs.
- Generic ChatGPT can already analyze uploaded PDFs/photos in a session; OpenHouse must provide persistence, automation, local data integrations, and structured outputs.
- Homeowner subscriptions are low-frequency; churn risk high after the project is complete.
- Liability: retrofit/planning/structural/electrical advice must be framed as guidance, not professional certification.
- Public data is stale/incomplete: EPCs expire/replaced, planning portals differ, renovations may be unpermitted/unrecorded, sale data lacks floor area.

## Recommended DTC MVP

**Market**: start England/Wales first if allowed by company strategy; Ireland second with consented BER/manual upload. US later or city/utility-specific.

**Persona/event**: homeowner or buyer planning retrofit/renovation after receiving EPC/BER/survey, or new homeowner organizing the house.

**MVP flow**
1. User enters address.
2. System retrieves: EPC latest + recommendations; price-paid history/comps; planning constraints/nearby applications where available; local climate/flood/solar potential if available.
3. User uploads: survey/report, EPC/BER PDF, 12 months bills/smart-meter CSV, photos of heating system/consumer unit/windows/attic/appliances, invoices/manuals.
4. OCR/vision builds a structured home graph: rooms, fabric, heating/hot water, ventilation, appliances, warranties, maintenance schedule, known issues, energy use baseline.
5. Deliver three concrete artifacts:
   - **Home Health Snapshot**: what we know, confidence, risks, missing evidence.
   - **90-day action plan**: maintenance + safety + quick savings.
   - **Retrofit/renovation brief**: ranked measures, grant eligibility prompts, questions for contractors, expected dependencies and risks.
6. Add persistent chat only after artifacts: every answer cites home facts/sources and asks for missing context.

**Differentiator vs ChatGPT**
- Auto-fetch public datasets.
- Persistent structured home memory.
- Confidence/missing-evidence model.
- Localized rules/grants/checklists.
- Ongoing reminders/warranty/manual retrieval.
- Exportable reports for contractors/insurers/buyers.

**Success metric**
- Can a user get a credible first Home Health Snapshot in <5 minutes from address + EPC/BER/survey upload?
- Does >20–30% of users in a project-intent landing page pay €29–79 for the one-off report or convert to €79/year?

## Final recommendation

Do not bypass developers entirely as the long-term strategy, but do run a DTC MVP to validate the home-context layer. The data is sufficient for useful, paid, project-based products—especially in England/Wales and partially in Ireland—but insufficient for a magical fully automatic digital twin. Position OpenHouse as the “AI home file and decision engine,” not a generic homeowner chatbot.
