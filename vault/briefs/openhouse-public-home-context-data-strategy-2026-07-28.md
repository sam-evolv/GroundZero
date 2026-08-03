# OpenHouse public home-context data strategy

Date: 2026-07-28
Status: Research-backed product and technical recommendation
Scope: Irish DTC homeowner onboarding and the channel-neutral OpenHouse Home Record

## Executive conclusion

Yes. OpenHouse can create a real address-to-home-context magic moment from Irish public and licensed data.

The strongest verified opportunity is not a speculative scraper. Ireland already publishes a national, current, open-licensed planning metadata service with point and site-polygon layers for all 31 planning authorities. It can be queried spatially after the homeowner confirms their address location.

The product moment should be:

> OpenHouse found official records connected to this property. We found the original planning application and later changes. Confirm which records belong to your home, then add the available material to your private Home Record.

This is materially stronger than beginning with a blank assistant or asking the homeowner to complete a long home profile.

The correct system is not `scrape everything into an LLM`. It is:

`confirmed address identity → spatial public-record discovery → ranked candidate records → homeowner confirmation → permissioned document acquisition → evidence extraction → private Home Record → retrieval when relevant`

Planning is the hero reveal. Other datasets should enrich a live homeowner job, not produce a generic risk dashboard.

## The decisive factual discovery

### Official national planning API

The Department of Housing, Local Government and Heritage publishes **National Planning Applications** through ArcGIS FeatureServer:

- Dataset page: https://data.gov.ie/dataset/national-planning-applications
- ArcGIS service: https://services.arcgis.com/NzlPQPKn5QF9v2US/arcgis/rest/services/IrishPlanningApplications/FeatureServer
- Point layer: https://services.arcgis.com/NzlPQPKn5QF9v2US/arcgis/rest/services/IrishPlanningApplications/FeatureServer/0
- Site-polygon layer: https://services.arcgis.com/NzlPQPKn5QF9v2US/arcgis/rest/services/IrishPlanningApplications/FeatureServer/1

The data.gov.ie record lists the licence as Creative Commons Attribution 4.0.

Live inspection on 2026-07-28 found:

- 500,736 point records;
- 500,559 planning-site polygons;
- all 31 planning authorities represented;
- oldest `ReceivedDate` in the merged service: 1991-03-05;
- newest `ReceivedDate`: 2026-07-27;
- newest `ETL_DATE`: 2026-07-28.

The service is therefore national and current enough to support per-home discovery. Historic depth varies by authority and should not be assumed from the national minimum date.

The NPAD map viewer's own disclaimer says the national data is not a legal definition of an application's status or geographic extent and that original information should be obtained from the relevant planning authority. OpenHouse should therefore treat NPAD as the discovery and candidate-matching layer, then preserve the authority record as the primary source.

### Fields available

The point layer exposes fields including:

- planning authority;
- application number;
- application type;
- development description;
- development address;
- development postcode when supplied;
- applicant forename and surname fields;
- application status;
- decision;
- appeal reference and status;
- received, decision and appeal dates;
- site area;
- floor area;
- number of residential units;
- latitude and longitude;
- official application-details link.

Not all fields are populated.

### Measured field coverage

Live count queries against the point layer found:

- total records: 500,736;
- populated development address: 500,733, effectively universal;
- populated official application-details link: 437,485, or 87.37%;
- populated site area: 301,872, or 60.29%;
- populated floor area: 132,730, or 26.51%;
- populated number of residential units: 121,904, or 24.34%;
- populated development postcode: 2,637, or 0.53%;
- populated applicant surname: zero in the national point layer at the time tested.

The 2,637 populated postcode values were concentrated in South Dublin County Council records in the live authority-level check. The field should therefore be treated as authority-specific enrichment, not a national address key.

Implication: Eircode and homeowner name cannot be the national planning match key. A coordinate and site-polygon intersection are the correct starting point.

### Why the polygon layer matters

The site-polygon layer means OpenHouse can query the exact coordinate of a confirmed home and retrieve planning sites that contain or overlap it. This is stronger than address string search alone.

A property can validly return multiple applications over time:

- original dwelling or estate permission;
- amendments;
- extensions;
- retention applications;
- change of use;
- related estate or infrastructure applications.

OpenHouse must rank and explain candidates, not silently choose one.

## What the official planning system requires to be public

The Local Government Ireland Online Planning Portal privacy notice states that planning authorities are obliged to maintain a publicly available online register.

It says the register includes:

- the planning application and supporting particulars;
- evidence, written reports, studies and further information;
- submissions and observations;
- reports prepared by or for the planning authority;
- the decision and notification;
- relevant contribution documents;
- a map enabling the register entry to be traced.

It also states that planning-application details must be publicly available for at least seven years after the planning authority decision.

Official pages:

- Portal: https://planning.localgov.ie/
- Privacy notice: https://planning.localgov.ie/privacy-notice
- Terms: https://planning.localgov.ie/terms-and-conditions

This confirms that planning packs are a real and durable public-record source. It does not by itself grant OpenHouse commercial republication rights over every document.

## The planning-document boundary

### What was verified

A sample `LinkAppDetails` record in the national API opened the relevant council application page. That page exposed a `View Scanned Files` route through the council's iDocs system.

The iDocs route displayed a copyright notice requiring the visitor to agree that maps, drawings and other material remain the copyright of their originator.

No agreement was accepted during this research.

### Product implication

Separate these rights and actions:

1. **Automatically retrieve open planning metadata.**
2. **Automatically store the official council record link.**
3. **Ask the homeowner to confirm the candidate application.**
4. **Do not silently accept portal legal notices on the homeowner's behalf.**
5. **Import documents only through a supported API, council/LGMA agreement, compatible licence, or an explicit homeowner-led route approved after legal review.**
6. **Do not publicly republish architects' drawings or third-party submissions by default.**

Publicly viewable does not mean copyright-free, free of personal data, or licensed for automated commercial reuse.

### Portal fragmentation

The Local Government Ireland authority selector currently routes searches across approximately three portal families rather than one national document API:

- `eplanning.ie` for most authorities;
- `planning.agileapplications.ie` for Cork, Dublin, Dún Laoghaire-Rathdown, Fingal and Wexford routes shown by the selector;
- a separate South Dublin route.

The national ArcGIS metadata layer should be the discovery spine. Document retrieval would require a small adapter family, not 31 unrelated integrations, but supported access is preferable to reverse-engineering internal endpoints.

Automated crawling is not a safe assumed fallback. Live checks on 2026-07-28 found that `planning.agileapplications.ie/robots.txt` disallows all user agents. The inspected ePlanning robots file also places crawler restrictions on named bots. Robots directives are not a substitute for legal analysis, but they are a clear operational signal not to build unattended document harvesting without written approval.

### Recommended institutional route

OpenHouse should approach:

- LGMA planning portal team;
- Department of Housing open-data owner;
- representative ePlanning council;
- representative Agile Applications council;
- relevant document-system suppliers if directed by the authorities.

Ask for:

- a supported read-only document manifest/API;
- rate limits and service expectations;
- permitted private homeowner use;
- permitted temporary processing and extraction;
- storage and retention rights;
- attribution requirements;
- treatment of copyrighted drawings;
- treatment of submissions and personal data;
- whether applicant documents have stable identifiers and checksums;
- update and deletion/correction handling.

Contact published by LGMA for portal enquiries: planningportaltickets@lgma.ie.

## Address identity and geocoding

### Eircode is not an open national API

Eircode's business page states that it offers two data products for purchase:

- **ECAF**, the Eircode Address File, containing over 2.2 million address points with Eircode and postal address;
- **ECAD**, the Eircode Address Database, adding coordinates, alias addresses, boundary data and building information.

Official page:

- https://www.eircode.ie/business/products-and-services

Eircode states these products do not contain private individuals' names.

The pricing PDF linked from the current page is marked effective March 2015. Its prices must not be treated as current. It nevertheless shows that transaction-based access through Eircode providers is a supported commercial pattern.

Recommended early route:

- obtain current quotes from two or three Eircode providers;
- price per-transaction Eircode-to-coordinate and address validation;
- confirm whether OpenHouse may retain the coordinate and derived public-record links;
- avoid buying the full national ECAD until volume justifies it.

### Manual-validation fallback

For the €79 concierge validation:

1. homeowner supplies address and Eircode;
2. operator confirms the home on a map;
3. homeowner confirms the map pin;
4. OpenHouse queries planning polygons at and near that coordinate;
5. homeowner confirms the candidate records.

This proves customer value before a licensed production address resolver is purchased.

### Tailte Éireann national Buildings layer

Tailte Éireann publishes a national High Value Dataset for buildings:

- Dataset page: https://data.gov.ie/dataset/high-value-dataset-buildings1
- ArcGIS item: https://www.arcgis.com/home/item.html?id=cd14d445bb6d4af586f4edcfa01da895
- FeatureServer: https://services-eu1.arcgis.com/FH5XCsx8rYXqnjF5/arcgis/rest/services/Buildings/FeatureServer

Live inspection on 2026-07-28 found 3,785,414 building polygons. Each feature exposes a GUID and geometry-derived area and length fields.

The authoritative ArcGIS item states that Tailte Éireann open data is licensed under CC BY 4.0. It also warns that the data is generalised, may contain inaccuracies and is for reference purposes only. Boundaries are not necessarily legal boundaries.

Use it for:

- candidate current building footprint;
- stable mapped-building GUID;
- approximate footprint area and shape;
- comparison with planning-site geometry;
- identifying detached structures and outbuildings for homeowner confirmation.

Do not treat it as:

- a floor plan;
- a legal boundary;
- proof of ownership;
- proof of use, storeys or current internal layout;
- a survey-grade measurement.

This is a high-value automatic layer and should sit directly beside planning discovery in the future acquisition pipeline.

### OpenStreetMap

OpenStreetMap data is available under ODbL with attribution and share-alike obligations:

- https://www.openstreetmap.org/copyright

OSM building footprints and roads can provide useful fallback context, but Tailte's national building layer is the stronger Irish primary source where its licence and service remain suitable. OSM coverage and address accuracy vary.

The public Nominatim service is not a production-scale free geocoder. Its policy specifies a maximum of one request per second, prohibits autocomplete and systematic queries, and warns commercial applications not to depend on the public service:

- https://operations.osmfoundation.org/policies/nominatim/

Production choices are:

- a licensed geocoding provider;
- OpenHouse's own hosted Nominatim instance using an appropriate OSM extract;
- Eircode/ECAD provider access for Irish address identity.

### Google Maps and imagery

Google Maps Platform can support licensed geocoding and map display. Do not assume that ordinary map-display rights automatically permit:

- bulk imagery extraction;
- feeding Street View or aerial imagery to an AI model;
- retaining imagery-derived building facts;
- constructing a separate property database from Google content.

Current terms must be reviewed for the exact APIs and derived-data use:

- https://cloud.google.com/maps-platform/terms
- https://cloud.google.com/maps-platform/terms/maps-service-terms

For the MVP, homeowner-uploaded exterior photographs and map-pin confirmation are cleaner than agentic analysis of third-party imagery.

## Ranked data-source inventory

### Tier 1: use in the concierge test now

#### 1. National planning application metadata

Use for:

- official application history;
- development descriptions;
- dates, status and decisions;
- site polygons;
- candidate floor/site areas and unit counts when populated;
- official local-authority links.

Access:

- automatic ArcGIS REST query;
- CC BY 4.0 according to data.gov.ie;
- per-field provenance and source date required.

Primary magic value: very high.

#### 2. Homeowner-confirmed planning documents

Use for:

- floor plans;
- elevations;
- site layouts;
- design statements;
- planning reports;
- extension history;
- construction descriptions;
- developer and authority conditions.

Access:

- user follows official link and confirms/imports;
- or OpenHouse uses a future supported document API/agreement;
- never bypass notices or portal controls.

Primary magic value: extremely high when documents are available.

#### 3. User-provided BER certificate and advisory report

The SEAI National BER Register search currently requests either:

- a BER number; or
- an MPRN.

It is not an address-only national bootstrap:

- https://ndber.seai.ie/Pass/ber/search.aspx

Use for:

- modelled asset rating;
- age/type and fabric assumptions where documented;
- systems and renewable assumptions;
- recommended measures;
- comparison against later operational evidence.

Treat BER as modelled asset evidence, not measured household performance.

#### 4. Homeowner HDF smart-meter export

ESB Networks says a registered user can access actual usage data and an HDF containing up to two years of electricity usage:

- https://www.esbnetworks.ie/services/manage-my-meter/view-my-smart-meter-usage

Use owner-mediated upload. Do not ask for ESB login credentials and do not scrape the account portal.

Use for:

- baseline shape;
- day/night/peak behaviour;
- change comparisons;
- weather-normalised analysis where methodologically valid;
- post-action measurement.

#### 5. Walkthrough, plans, manuals and system labels

These remain the highest-confidence route to exact installed systems and current layout.

The planning pack describes proposed or approved work. It does not prove that work was built exactly as drawn, that later exempt works did not change it, or that equipment remains installed.

### Tier 2: automatically enrich when relevant

#### 6. Tailte Éireann national building polygons

Use the CC BY 4.0 High Value Dataset Buildings layer for a homeowner-confirmed candidate footprint, stable Tailte GUID, approximate footprint geometry and nearby detached structures.

This is reference geometry only. It is not a legal boundary, floor plan, building-use classification or survey-grade measurement.

- https://data.gov.ie/dataset/high-value-dataset-buildings1

Primary magic value: high when shown as `We found the mapped outline of this building` and paired with homeowner confirmation.

#### 7. Planning zoning and development-plan layers

Examples include national generalised zoning and authority-specific development-plan services:

- https://data.gov.ie/dataset/generalised-zoning-plans1

Use for renovation, extension and site questions. Do not present zoning as planning advice or a guarantee of permission.

#### 8. Record of Protected Structures and architectural conservation areas

Data is published by many local authorities through data.gov.ie and ArcGIS/GeoJSON services. Examples:

- https://data.gov.ie/dataset/record-protected-structures-dcc
- https://data.gov.ie/dataset/record-of-protected-structure
- https://data.gov.ie/dataset/architectural-conservation-areas1

Use for material renovation constraints and professional questions. Confirm against the current local authority record before making a home-specific claim.

#### 9. National Inventory of Architectural Heritage

National dataset:

- https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

Use to identify candidate heritage records and supporting descriptions. NIAH inclusion and statutory protected status are not interchangeable.

#### 10. Archaeological Survey of Ireland and protected-area layers

Examples:

- https://data.gov.ie/dataset/national-monuments-service-archaeological-survey-of-ireland
- https://data.gov.ie/dataset/special-area-conservation1

Use only for relevant project preparation and professional questions. These are spatial context, not a DIY determination of legal obligations.

#### 11. EPA radon risk map

Official open-data records include:

- https://data.gov.ie/dataset/radon-risk-map-of-ireland

Use for area-level risk context and a recommendation to test where appropriate. Never present a mapped risk class as a measurement of the household's radon level.

#### 12. OPW flood mapping

Official flood datasets are published through data.gov.ie, including current and future indicative layers. Licences vary, including some CC BY and some CC BY-NC-ND datasets.

Examples:

- https://data.gov.ie/dataset/nifm-river-flood-depth-current-scenario
- https://data.gov.ie/dataset/nifm-river-flood-extents-current-scenario

Use only datasets whose licence permits the intended product use. Label scenario, map type, resolution and date. Do not equate mapped context with a property-specific flood assessment or insurance decision.

#### 13. Geological Survey Ireland

Useful open datasets include:

- bedrock geology;
- groundwater vulnerability;
- subsoil permeability;
- aquifers;
- karst;
- landslide susceptibility;
- geothermal suitability.

Examples:

- https://data.gov.ie/dataset/bedrock-geology-1100000-ireland-roi-itm
- https://data.gov.ie/dataset/groundwater-vulnerability-140000-ireland-roi-itm
- https://data.gov.ie/dataset/landslide-susceptibility-classification-150000-ireland-roi-itm
- https://data.gov.ie/dataset/geothermal-open-loop-domestic-suitability-1-100-000-ireland-roi-itm

Use only for a relevant home project. These regional/modelled layers do not establish site conditions or replace surveys.

#### 14. EPA national soils and subsoils

Examples:

- https://data.gov.ie/dataset/national-soils-map
- https://data.gov.ie/dataset/national-subsoils-map

Potential value is low for ordinary operation but higher for drainage, private well, landscaping or extension context. Preserve scale and uncertainty.

#### 15. Met Éireann weather and solar-radiation data

Examples:

- https://data.gov.ie/dataset/solar-radiation-data
- station and monthly weather datasets published by Met Éireann on data.gov.ie.

Use for:

- weather-normalised energy comparisons;
- regional heating context;
- broad solar-resource context;
- seasonal guidance.

Do not turn regional solar data into a roof-yield estimate without system size, orientation, tilt, shading and losses.

#### 16. CSO Census small-area data

Use for aggregate contextual research, not as a fact about the household. It has low default DTC value and should not be loaded into the assistant unless it changes a live decision.

### Tier 3: potentially useful but legally or operationally constrained

#### 17. Residential Property Price Register

The PSRA register contains date of sale, price and address for residential property purchases from 2010. A Dublin subset on data.gov.ie is listed under CC BY 4.0:

- https://data.gov.ie/dataset/dublin-residential-property-price-register
- https://www.propertypriceregister.ie/
- https://www.psr.ie/re-use-of-public-sector-information/

Potential use:

- candidate purchase-history event in the Home Record;
- address-normalisation aid;
- original-versus-resale timeline.

Guardrails:

- do not treat it as a valuation or price index;
- address matching can be ambiguous;
- confirm the event with the homeowner;
- verify national-download terms separately from the Dublin open-data subset;
- do not foreground a prior purchase price unless it serves the homeowner's task.

#### 18. Building commencement and completion data

National and local open datasets exist, but address-level coverage and fields are not uniform:

- https://data.gov.ie/dataset/bcnccc
- https://data.gov.ie/dataset/dublin-city-council-commencement-notices

Use as a candidate timeline signal, not proof that the exact home has a valid completion certificate. Owner/developer documents remain stronger evidence.

#### 19. Historical maps and aerial imagery

Historical maps, orthophotography and map viewers can be useful for change history. Rights vary by product and provider. Tailte Éireann or other providers must confirm commercial AI-processing, storage and display permissions.

Do not copy viewer imagery into OpenHouse by default.

#### 20. Broadband, air quality and noise

Public area-level datasets exist but rarely strengthen the first Home Performance Check. Use only for relevant questions and avoid implying property-level measurement from a regional station or model.

### Tier 4: owner-authorised, paid or not public

#### 21. Land Registry and title information

Landdirect/Tailte services are paid and title documentation is not a free public API bootstrap. Treat title plans, folios, deeds and conveyancing material as homeowner-provided or explicitly purchased for a defined task.

#### 22. GeoDirectory

GeoDirectory is a commercial Irish address/building database and may be an alternative or complement to ECAD. Obtain a current product specification and licence quote before relying on fields or derived-use rights.

#### 23. Utility and retailer accounts

There is no verified universal delegated API for household electricity, gas or water accounts. Use:

- owner-downloaded bills;
- ESB HDF;
- official OAuth/API integrations where a named provider supports them;
- device-export files.

Never request or retain portal passwords.

#### 24. Solar, heat-pump, charger and home-control telemetry

Use named official customer-authorised adapters only. Begin with user exports and screenshots. Product-family manuals and public device databases do not prove the installed variant or settings.

#### 25. SEAI grant and retrofit records

Public aggregate statistics do not establish whether a specific dwelling received a grant or which measure was installed. Treat property-level grant letters, invoices and completion documents as owner-provided evidence.

## The recommended DTC journey

### Screen 1: one ask

Ask for:

- Eircode/address;
- confirmation of the selected home on a map;
- consent to search official public records for that property.

Purpose wording:

> We use your confirmed address to look for official records connected to the property. We will show candidate matches for you to confirm before adding anything to your Home Record.

Do not ask for a full home profile before returning value.

### Screen 2: the reveal

Return a compact result such as:

> We found 4 official planning records connected to this site.
>
> - Original development permission, 2017
> - Revised house-type application, 2018
> - Estate-level amendment, 2019
> - Later extension application, 2024
>
> Confirm which records apply to your home.

Each record should show:

- development description;
- authority and application number;
- date and decision;
- spatial relationship to the confirmed home;
- source link;
- match confidence and reason;
- `This may cover the wider development` where relevant.

### Screen 3: private Home Record

After confirmation:

- add the planning metadata and source link;
- offer `View official planning file`;
- offer `Add documents to my private Home Record` only through a legally approved route;
- extract candidate rooms, dimensions, construction notes and change history;
- ask the homeowner to verify material facts.

### Screen 4: the smallest next proof

Ask for one item that resolves the largest uncertainty:

- current walkthrough video;
- floor-plan image;
- BER/advisory report;
- system-label photos;
- ESB HDF;
- bill.

Example:

> The planning drawings show the approved layout in 2018. A two-minute walkthrough will tell us what is actually there now.

### Screen 5: first useful artefact

Return:

- a reconstructed home timeline;
- proposed-versus-observed layout;
- confirmed and candidate systems;
- missing handover documents;
- safe next actions;
- one evidence request that changes a decision.

## Matching design

### Candidate generation

1. Resolve the homeowner-confirmed address to latitude/longitude.
2. Query planning polygons containing that coordinate.
3. Query point records and polygons within a conservative nearby radius.
4. Include the relevant planning authority and adjacent records where estate-scale permissions overlap.
5. Deduplicate point/polygon representations by authority and application number.

### Candidate scoring

Use explainable signals:

- point inside planning polygon;
- distance from confirmed home;
- normalised address overlap;
- development description containing house number, estate or townland;
- application dates relative to approximate build/extension dates;
- residential application type;
- site area and unit count;
- whether a record is dwelling-specific or estate-wide;
- relationship to another confirmed application.

Do not use homeowner name as the primary match. It is absent from the national API and may differ across builder, prior owner and agent records.

### Confirmation states

Every candidate should be one of:

- found, not yet reviewed;
- homeowner-confirmed;
- probable but unresolved;
- wider-development context;
- rejected by homeowner;
- superseded;
- disputed.

Never silently promote a candidate to a confirmed home fact.

## Home Record and assistant architecture

### Do not put the planning pack into a permanent prompt

Store:

- source artifact;
- source URL and authority;
- application identifier;
- licence and access basis;
- acquisition timestamp;
- checksum where storage is permitted;
- page/region extraction evidence;
- candidate facts;
- homeowner confirmation state;
- sensitivity and visibility;
- retention/deletion state.

The assistant should retrieve relevant sections when answering. It should not receive every drawing, submission and personal detail on every conversation turn.

### Required provenance on derived facts

Example:

- subject: kitchen;
- predicate: proposed floor area;
- value: extracted value;
- source: planning drawing reference and revision;
- page and image region;
- date of proposal;
- state: candidate until homeowner/current walkthrough confirms;
- note: approved/proposed does not prove as-built.

### Contradiction handling

A later walkthrough, survey or BER may conflict with the planning record. Preserve both sources and label the conflict.

Correct answer pattern:

> The 2018 approved drawing shows X. Your 2026 walkthrough appears to show Y. OpenHouse cannot establish when or under what approval the change occurred from these two sources alone.

## Privacy, copyright and data-protection design

### Core rule

Public availability does not remove GDPR, copyright, confidentiality, accuracy or fairness obligations.

The homeowner's instruction and confirmation are essential product controls, but a click labelled `consent` is not a substitute for documenting the correct GDPR Article 6 lawful basis for each purpose. OpenHouse should expect to be a controller for its own Home Record, matching, retrieval and assistance purposes. A data-protection review should determine where performance of the requested service, legitimate interests with a balancing assessment, or specific optional consent is appropriate.

Official DPC guidance:

- lawful processing: https://www.dataprotection.ie/en/organisations/know-your-obligations/lawful-processing
- data-protection principles: https://www.dataprotection.ie/en/organisations/data-protection-basics/principles-data-protection
- Articles 13 and 14 transparency: https://www.dataprotection.ie/en/individuals/know-your-rights/right-be-informed-transparency-article-13-14-gdpr
- DPIAs: https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-impact-assessments

### Minimum controls before scaled use

- explicit purpose notice at address entry;
- homeowner confirmation before associating planning candidates with their private Home Record;
- data minimisation;
- do not ingest third-party submissions unless relevant and legally permitted;
- redact phone numbers, emails, signatures, personal correspondence, vehicle details and security-sensitive information;
- suppress applicant names unless necessary for the homeowner's task;
- per-source retention rules;
- delete/disconnect controls;
- correction and dispute workflow;
- provenance and retrieval date;
- attribution required by open-data licences;
- Article 14 assessment where personal data was not obtained from the data subject;
- DPIA before scaled profiling or long-term household-behaviour monitoring;
- legal review of planning-document copyright and portal terms;
- no automated acceptance of legal notices on behalf of the homeowner.

GDPR source:

- https://eur-lex.europa.eu/eli/reg/2016/679/oj

### Public case studies

Never expose planning-pack documents or extracted identifiers publicly without a separate permission and rights review. Remove:

- exact address and Eircode;
- names and signatures;
- application correspondence unrelated to the case-study purpose;
- phone and email details;
- title/folio details;
- security and access information;
- QR codes and account identifiers.

## What not to claim

Do not claim that:

- a planning drawing is the as-built layout;
- planning permission proves compliance or completion;
- a mapped planning point belongs to the home without confirmation;
- a nearby flood, radon, geology or soil layer measures the property;
- a BER is measured operating performance;
- regional weather proves expected household energy use;
- public device documentation proves the installed model;
- Google or other map imagery may be freely copied and analysed;
- a publicly viewable planning document may automatically be republished commercially.

## Recommended validation before product build

Add a **Public Home Context** section to the existing manual €79 Home Performance Check for the next 20 permissioned homes.

For each home, record:

- whether coordinate confirmation succeeded;
- number of intersecting and nearby planning records;
- whether the correct record was found;
- whether homeowner confirmation was easy;
- whether a council deep link existed;
- whether documents were viewable;
- whether floor plans/elevations existed;
- time required to retrieve and interpret;
- number of material facts extracted;
- number of conflicts with current homeowner evidence;
- homeowner reaction to the planning reveal;
- whether it caused a voluntary second upload;
- whether it changed a decision;
- rights/access problems encountered.

Success gate for an automated planning-discovery MVP:

- high correct-candidate recall after map confirmation;
- false association rate close to zero because candidates remain unconfirmed;
- first planning result in seconds, not minutes;
- clear value even when documents cannot be imported;
- homeowner voluntarily confirms or opens the record;
- meaningful second evidence upload;
- zero unsupported as-built, compliance or risk claims.

Do not build all environmental layers into the default experience before this gate.

## Build sequence

### Phase 0: concierge, now

- use map-pin confirmation;
- call the national planning ArcGIS service manually or with a local operator script;
- present candidate applications;
- use council deep links;
- have the homeowner download/upload documents where appropriate;
- capture match and delight metrics.

### Phase 1: planning-discovery spike

Build locally and keep feature-gated:

- coordinate input;
- polygon and nearby-point query;
- candidate deduplication;
- explainable scoring;
- source links;
- no document crawling;
- no production deployment.

### Phase 2: licensed address resolver

- select Eircode/ECAD provider;
- confirm derived-data and retention rights;
- add address normalisation and map confirmation;
- measure lookup cost and match improvement.

### Phase 3: permissioned document acquisition

Only after LGMA/council/legal validation:

- supported document manifest;
- explicit homeowner action;
- private storage;
- malware scanning;
- OCR and plan extraction;
- personal-data redaction;
- correction/deletion processing;
- claim-level provenance.

### Phase 4: task-relevant context layers

Add zoning, heritage, radon, flood, geology, weather and solar context only when a homeowner job makes them useful.

### Phase 5: owner performance evidence

- BER/advisory report;
- ESB HDF;
- bills and tariff;
- device exports;
- measured comparison against the static Home Record.

## Strategic judgement

This is not a distraction from the €79 wedge. It improves the same evidence-backed Home Record and reduces onboarding friction.

The planning reveal could be a genuine acquisition and activation advantage because:

- most homeowners do not know the national record exists;
- the files can contain emotionally recognisable plans and elevations;
- it demonstrates that OpenHouse already understands something specific before asking for work;
- it creates a natural request for current evidence: `Is this still how the home is laid out?`;
- it separates OpenHouse from generic document vaults and chatbots.

The moat is not scraping. The moat is the verified identity resolver, source adapters, evidence graph, contradiction handling, homeowner confirmations and accumulated operating history.

## Recommended immediate decision

Proceed with a **planning discovery concierge experiment**, not a broad public-data platform build.

Specifically:

1. Add planning-record discovery to the next permissioned Home Performance Checks.
2. Test coordinate-to-planning matching on 20 homes.
3. Seek current Eircode provider quotes.
4. Ask LGMA for supported document access and reuse guidance.
5. Keep document import homeowner-led until rights are clear.
6. Keep environmental datasets out of the default onboarding reveal.
7. Measure whether the recovered planning record creates the voluntary second upload and changed-decision signal.

If the reveal consistently produces `How did you find that?` and materially improves the Home Record, automate the discovery layer next.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]]
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/wiki-refiner-2026-07-29]]
- [[briefs/wiki-refiner-2026-07-30]]
- [[briefs/wiki-refiner-2026-07-31]]
- [[briefs/wiki-refiner-2026-08-01]]
- [[briefs/wiki-refiner-2026-08-02]]
- [[companies/openhouse-ai]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]

