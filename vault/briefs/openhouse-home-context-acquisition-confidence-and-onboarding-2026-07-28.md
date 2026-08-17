---
title: OpenHouse home-context acquisition, confidence and frictionless onboarding
company_id: openhouse-ai
date: 2026-07-28
status: product-architecture-decision
source: Sam voice direction plus verified Irish public-data, show-house media and repository-grounded DTC research
---

# OpenHouse home-context acquisition, confidence and frictionless onboarding

## Executive decision

Before building the broad DTC surface, OpenHouse should exhaust the **home-context acquisition territory**, but it should not integrate every available dataset or require the homeowner to complete a full home inventory.

The product should progressively recover context from four acquisition channels:

1. official, licensed and open property sources;
2. homeowner-owned documents and exports;
3. guided physical capture of the current home;
4. measured operating data and confirmed outcomes.

The acquisition experience should feel like recognition, not form filling:

> Enter your address, confirm the building, and give OpenHouse one useful piece of evidence. Agents recover everything else they can, show what they found, and ask only the next question that materially improves the current answer.

The digital twin is accumulated through useful interactions. It is not demanded at signup.

## The core context problem

A useful home assistant must distinguish five different kinds of truth:

1. **What was proposed or approved**
   - planning applications;
   - architectural drawings;
   - design statements;
   - building-control records;
   - BER and design assumptions.

2. **What is mapped externally**
   - address identity;
   - building footprint;
   - site/planning polygons;
   - zoning, heritage and environmental context.

3. **What is physically present now**
   - rooms;
   - equipment;
   - controls;
   - labels;
   - visible condition;
   - current layout.

4. **How the home is currently configured and operated**
   - controller states;
   - schedules;
   - tariff;
   - occupancy and comfort preferences;
   - device settings;
   - maintenance state.

5. **How the home actually performs**
   - meter intervals;
   - bills;
   - solar generation;
   - heat-pump telemetry;
   - temperature and comfort observations;
   - actions and measured outcomes.

No one source provides all five. OpenHouse's advantage comes from reconciling them while preserving disagreements.

## Source universe

## 1. Automatic address and official-record context

### National address identity

Production options:

- licensed Eircode ECAF/ECAD provider;
- GeoDirectory or another appropriately licensed Irish address provider;
- homeowner-confirmed map pin as a manual-validation fallback.

Potential contribution:

- canonical postal address;
- Eircode;
- coordinate;
- address aliases;
- candidate building identity;
- building classification fields where licensed;
- join key for spatial public-data queries.

The free Eircode Finder is not a bulk/API licence.

### Tailte Éireann national building polygons

Verified open layer:

- 3,785,414 building polygons observed on 2026-07-28;
- stable GUID;
- approximate geometry-derived footprint information;
- CC BY 4.0 in the authoritative ArcGIS item.

Potential contribution:

- candidate current external footprint;
- detached structures and outbuildings;
- relationship between the selected home and planning sites;
- a visual confirmation surface.

Limitations:

- generalised reference data;
- not a floor plan;
- not a legal boundary;
- not proof of ownership, use, storeys or current internal layout.

### National Planning Applications Database

Verified national layer:

- all 31 planning authorities;
- 500,736 point records and 500,559 site polygons on 2026-07-28;
- current ETL and recent applications;
- CC BY 4.0 planning metadata;
- official local-authority deep links on most records.

Potential contribution:

- planning timeline;
- proposed works;
- dates, decisions and status;
- site red line/site polygon;
- floor and site area where populated;
- estate-wide versus dwelling-specific context;
- official council record links.

Limitations:

- not a legal definition of current status or extent;
- postcode and applicant-name fields are not a reliable national match key;
- approved work does not prove as-built work;
- deep links and document availability vary.

### Planning packs

Potential contribution:

- floor plans;
- elevations;
- site plans;
- red-line boundaries;
- design and access statements;
- architectural reports;
- extension history;
- planning conditions;
- authority reports and further information.

Access boundary:

- publicly viewable does not equal freely reusable;
- drawings remain copyrighted;
- submissions can include personal data;
- portal notices and robots restrictions prevent an assumed unattended crawler model;
- begin with official deep links and homeowner-led import;
- pursue a supported LGMA/council document manifest or agreement.

### Property and development context

Use only where relevant:

- zoning and development-plan objectives;
- Record of Protected Structures;
- Architectural Conservation Areas;
- National Inventory of Architectural Heritage;
- archaeological records;
- special conservation areas;
- national and local commencement/completion datasets;
- Residential Property Price Register;
- Land Registry/title material through owner-authorised or paid routes.

These sources can create timeline or project context. They must not be used as ownership proof, valuation or professional planning/legal advice.

### Environmental and site context

Use when it changes a live home decision:

- EPA radon risk;
- OPW flood scenarios with compatible licensing;
- Geological Survey Ireland geology, groundwater, karst, landslide and geothermal layers;
- soils and subsoils;
- Met Éireann weather and solar resource;
- air quality, noise and water-supply context;
- CSO small-area aggregates.

These are contextual or modelled layers. They are not household measurements.

## 2. Homeowner-owned documentary context

### Sale and purchase material

Potential sources:

- estate-agent brochure or supplied listing PDF;
- floor plan supplied during sale;
- survey or structural report;
- valuation report;
- snag list;
- conveyancing pack;
- title/folio material;
- insurance rebuild assessment;
- seller or developer handover documents.

Third-party listing pages and photographs should not be automatically copied or retained without rights review. Homeowner-supplied copies are the cleaner route.

### Building and retrofit evidence

Potential sources:

- BER certificate and Advisory Report;
- airtightness result;
- heat-loss calculation;
- Part L/F or other relevant documents;
- commencement notice;
- Certificate of Compliance on Completion;
- planning compliance documents;
- grant letters;
- contractor quotations;
- installation invoices;
- commissioning sheets;
- electrical certificates;
- service reports;
- warranties;
- product manuals.

These documents can establish design intent, installed assets, professional confirmation and service history. Their date and scope must remain visible.

### Household operating evidence

Potential sources:

- electricity and gas bills;
- tariff and contract details;
- ESB Networks HDF;
- solar-generation exports;
- battery exports;
- heat-pump reports;
- EV-charger exports;
- app screenshots;
- smart-home hub exports;
- temperature, humidity or indoor-air-quality histories;
- household-stated comfort and schedule preferences.

Never request account passwords. Use uploads or official delegated read access.

### Passive document acquisition later

Potential low-friction routes:

- mobile share sheet;
- drag and drop;
- camera scan;
- opaque household forwarding email for bills and documents;
- household-member invitation to provide a missing item;
- professional/developer share link with explicit scope;
- official OAuth or delegated API connectors.

## 3. Guided physical capture

### Ordinary walkthrough video

Best use:

- room sequence;
- broad current layout;
- plant and control locations;
- visible installed equipment;
- relationships between systems;
- identification of evidence gaps;
- generation of targeted follow-up requests.

It is not the right tool for:

- small rating-plate OCR;
- exact dimensions;
- hidden fabric;
- commissioning state;
- fault diagnosis;
- operating performance.

### Guided still photography

Best use:

- rating plates;
- controller displays;
- thermostats;
- consumer-unit schedule;
- inverter and charger labels;
- pipe/manifold labels;
- external plant;
- ventilation plant;
- room-specific visual evidence.

The capture interface should ask for one decisive image at a time and explain why it matters.

### RoomPlan and LiDAR

On supported Apple devices, RoomPlan can create candidate room geometry, dimensions and furniture/object classifications.

Use as:

- guided spatial capture;
- candidate geometry;
- current-layout evidence;
- comparison against planning drawings.

Do not promise survey-grade dimensions or hidden-building information. Preserve device/model/version and homeowner confirmation.

### Specialist capture later

Only when the job justifies it:

- thermal imaging;
- blower-door/airtightness testing;
- electrical monitoring;
- flow/temperature measurements;
- indoor-air-quality sensors;
- moisture investigation;
- professional survey.

Do not make specialist hardware part of signup.

## The show-house evidence audit

## What the walkthrough gave OpenHouse

The two clips total approximately two and a half minutes. They were low-resolution portrait copies, suitable for room and medium-object context but poor for small labels.

The walkthrough was sufficient to establish or strongly support:

- a provisional two-floor room sequence;
- a likely three-bedroom layout, pending floor-plan confirmation;
- physical installation of AquaBox equipment;
- physical installation of a Daikin indoor unit;
- plant and utility locations;
- visible upstairs panel radiators;
- a visible ensuite vertical radiator/towel radiator;
- locations of at least two wall controls;
- a likely ensuite extract terminal;
- a consumer unit with dedicated `EV CHARGER` and `SOLAR PV` circuit labels;
- the distinction between present evidence and missing evidence;
- the exact next capture needed for each system.

Combined with the supplied manuals, it also allowed OpenHouse to:

- correct the AquaBox classification from possible hot-water equipment to potable-water storage and pressure equipment;
- associate visible and documented equipment at product-family level;
- separate manufacturer test figures from installed-home performance;
- explain which homeowner questions are safe;
- generate installer/developer questions;
- produce a handover-document gap list.

## What it did not give OpenHouse

The walkthrough did not establish:

- exact Daikin indoor or outdoor model;
- heat-pump size, flow temperature, schedule, weather compensation or COP;
- exact AquaBox model, capacity, pressure or branch functions;
- physical Ohme charger model or settings;
- solar module count, inverter or array capacity;
- exact thermostat/controller models and states;
- ground-floor emitter type;
- ventilation plant/model or commissioning;
- fabric, airtightness or insulation details;
- room dimensions, orientation or floor area;
- actual energy, cost, comfort or performance;
- fault, safety or compliance state.

## Show-house verdict

### Was it valuable?

Yes, substantially.

Its primary value was **orientation and uncertainty reduction**. It converted an unknown house into a provisional room/system map and replaced generic evidence requests with a precise twelve-item label-and-controls pass.

It also delivered a meaningful homeowner answer immediately: what the AquaBox does, how it differs from the Daikin hot-water role, which systems appear to exist, and what evidence is still required.

### Was it enough to make the assistant better?

Yes, for these jobs:

- `What is this equipment?`
- `Where are the main systems?`
- `Which manual relates to which system?`
- `What did my handover pack fail to explain?`
- `What should I photograph next?`
- `What questions should I ask the developer or installer?`
- `What can I safely check myself?`

It was not enough for these jobs:

- `Is my heat pump operating efficiently?`
- `Is it correctly sized or commissioned?`
- `Why is my bill high?`
- `Is the PV producing what it should?`
- `Is there a fault?`
- `How much can I save?`

### Was the benefit worth the homeowner effort?

A short generic video has strong value when the home starts with little or no structured context. The value is lower after a verified developer handover or complete planning/floor-plan import.

The right product rule is:

- ask for a walkthrough when it is the lowest-friction way to map the current home;
- do not ask for repeated broad video;
- turn the first video into targeted follow-up requests;
- stop requesting evidence once the current homeowner job is decision-ready.

## Confidence model

OpenHouse should not assign one confidence score to the whole home. Confidence belongs to a specific claim, time and decision.

### Evidence states

#### Context only

Examples:

- area flood scenario;
- regional weather;
- planning-site polygon;
- generalised building footprint.

Useful for context, not proof of the home condition.

#### Candidate

Examples:

- three bedrooms inferred from walkthrough;
- a wall control that may be a thermostat;
- product family inferred from appearance and supplied manual.

The assistant can explain the candidate and ask for confirmation, but must not present it as installed truth.

#### Corroborated

Two independent sources align, for example:

- planning drawing and walkthrough show the same room arrangement;
- manual family and visible branding align;
- public building polygon and homeowner map confirmation align.

Corroboration raises confidence but does not replace a rating plate or current measurement.

#### Installed confirmed

Supported by:

- readable rating plate;
- installation schedule;
- invoice tied to the home;
- commissioning document;
- professional confirmation;
- homeowner-confirmed physical evidence with strong provenance.

This supports exact manual selection and model-specific operating guidance within safety boundaries.

#### Current state confirmed

Supported by:

- current controller/display capture;
- timestamped device observation;
- official app export;
- fresh connected data;
- homeowner confirmation where appropriate.

This supports explanation of current settings and next safe actions.

#### Measured performance confirmed

Requires:

- appropriate time-series or meter data;
- date coverage and gap checks;
- tariff and bill context where money is discussed;
- weather/season context where relevant;
- occupancy and comfort context where interpretation depends on them;
- action and baseline evidence for claimed outcomes.

This supports performance comparisons. It does not automatically prove cause.

#### Professionally verified

Required for claims involving:

- compliance;
- structural condition;
- electrical or gas safety;
- formal commissioning;
- certified BER inputs;
- legal/planning determination;
- diagnosis outside OpenHouse's competence.

## Job-readiness gates

The assistant can be highly confident about one job and unready for another.

### Home orientation readiness

Needs:

- confirmed address/building;
- planning or floor-plan candidate;
- current walkthrough or RoomPlan capture.

### System-identification readiness

Needs:

- current visual evidence;
- readable label or installation record;
- correct manufacturer manual.

### Operating-guidance readiness

Needs:

- installed model;
- user-facing controller model/state;
- homeowner goal and preference;
- current manufacturer instructions;
- safety boundary.

### Performance-readiness

Needs:

- BER/design evidence separated from actual operation;
- bill/HDF/device data;
- tariff;
- date coverage;
- weather and household context;
- sufficient baseline.

### Fault/compliance readiness

OpenHouse can organise evidence and identify escalation triggers. It does not independently become professionally ready to certify or diagnose high-risk conditions.

## Minimum evidence bundles

## Bundle A: instant recovered context

Homeowner effort:

- address/Eircode;
- map confirmation.

Agents recover:

- building polygon;
- planning candidates;
- planning timeline;
- official record links;
- relevant zoning/heritage/context when needed.

Output:

- `We found this building and these official records. Confirm what belongs to your home.`

## Bundle B: current-home model

Homeowner effort:

- one walkthrough video or RoomPlan capture.

Agents recover:

- room sequence;
- system/plant locations;
- candidate controls and equipment;
- contradictions with planning drawings;
- minimum label capture list.

Output:

- provisional current layout and system map.

## Bundle C: installed-system record

Homeowner effort:

- guided rating-plate/control photos;
- relevant manual, invoice or commissioning sheet where available.

Agents recover:

- exact model;
- correct manual;
- system role;
- visible settings;
- safe operating guidance;
- warranty/service records;
- unresolved professional questions.

Output:

- installed equipment register and operating guide.

## Bundle D: performance baseline

Homeowner effort:

- BER/advisory report;
- recent bill;
- ESB HDF or device export;
- brief comfort/schedule confirmation.

Agents recover:

- modelled-versus-measured comparison;
- tariff and usage shape;
- evidence-backed opportunities;
- exclusions and uncertainty;
- first baseline.

Output:

- Money, Comfort and Risk Home Performance Check.

The user should never be forced to complete Bundles B, C and D before receiving value from Bundle A.

## Frictionless signup architecture

## Principle 1: start from a job, not a profile

Ask one question:

> What would you like OpenHouse to help with today?

Choices may include:

- understand this home;
- understand a bill;
- check how the home is operating;
- plan an upgrade;
- prepare for a quote;
- organise the home record.

The selected job determines which evidence matters.

## Principle 2: create value before asking for uploads

After address and map confirmation, immediately run public-source agents.

Show progressive discoveries:

- `We found the mapped building.`
- `We found three planning records touching this site.`
- `One appears to describe the original development.`
- `Review these while we prepare your Home Record.`

This turns waiting into visible product value.

## Principle 3: one required proof

After the public-record reveal, ask for only one item that serves the selected job:

- a planning document;
- a BER;
- a bill;
- a survey;
- a quote;
- a walkthrough.

Do not show a wall of upload boxes.

## Principle 4: one question at a time

The reconciliation agent should ask only the highest-value unresolved question.

Rank requests by:

`decision impact × uncertainty reduction × urgency × reuse potential / user effort × sensitivity × acquisition friction`

Example:

> The walkthrough confirms the Daikin indoor unit but not the model. One photo of the rating plate will let OpenHouse select the correct manual. Take photo or skip.

## Principle 5: every request explains the payoff

Bad:

> Upload heat-pump photos.

Good:

> Photograph this label so OpenHouse can identify the exact model and stop giving family-level guidance.

## Principle 6: the user can leave

- persist progress immediately;
- process uploads in the background;
- notify only when a useful result or resolving question is ready;
- let the homeowner resume at the exact unresolved item;
- never require them to watch a processing screen.

## Principle 7: show job readiness, not home completeness

Do not display `Your home is 27% complete`.

Display:

- `Ready to explain your planning history`;
- `One photo needed for exact heat-pump guidance`;
- `Bill analysis ready`;
- `Performance assessment waiting for usage data`.

A home model is never universally complete.

## Agent orchestration during signup

### Identity agent

- normalises the authorised address through a licensed route;
- obtains candidate coordinate/building;
- asks for map confirmation;
- creates an unconfirmed property candidate first.

### Building agent

- queries Tailte building polygons;
- identifies the candidate footprint and nearby structures;
- prepares a visual confirmation card.

### Planning agent

- queries NPAD point and site-polygon layers;
- ranks dwelling-specific, estate-wide and later-work applications;
- stores metadata and official links;
- does not silently choose or crawl restricted documents.

### Rights agent

- applies the source registry;
- checks licence, access method, caching, storage and display rules;
- blocks document persistence when rights are unresolved;
- records attribution and source dates.

### Document agent

- OCRs and classifies uploaded documents;
- extracts candidate facts with exact page evidence;
- detects duplicate and revised documents;
- separates design intent from current/installed fact.

### Spatial agent

- parses planning drawings, floor plans, RoomPlan and walkthrough sequence;
- builds a provisional room/zone graph;
- preserves the distinction between approved, mapped and observed geometry.

### Media agent

- processes video broadly for room/system context;
- runs targeted extraction around equipment;
- detects labels that require a still photograph;
- flags sensitive QR, serial and location information.

### System agent

- links installed/candidate equipment to manufacturer sources;
- models system relationships;
- selects the exact manual only when installed identity is confirmed;
- produces safe controls and handover questions.

### Energy agent

- parses BER, bill, HDF and device exports;
- validates periods, gaps, units and freshness;
- keeps modelled and measured performance separate;
- produces only supportable Money, Comfort and Risk findings.

### Reconciliation agent

- finds contradictions across planning, mapped, observed, professional and measured evidence;
- never silently overwrites;
- ranks the next resolving question.

### Snapshot agent

- produces the first useful artifact before full ingestion is complete;
- states known, candidate, conflicting and missing facts;
- provides one safe next action and one next evidence request.

## Signup latency and effort targets

These are design targets to validate, not current measured performance:

- address and map confirmation should be the only compulsory initial context;
- first visible recovered context should appear in under one minute where sources respond;
- no more than one upload should be required before the first sourced artifact;
- no more than one unresolved question should be presented at a time;
- broad video processing and planning/document work should continue asynchronously;
- the homeowner should be able to stop after any value event without losing progress.

## What should be automatic and what should be optional

### Automatic after clear notice and home confirmation

- licensed address resolution;
- Tailte building lookup;
- NPAD planning metadata lookup;
- candidate ranking;
- source attribution;
- task-relevant open spatial context.

### Explicit homeowner action

- confirm property and planning records;
- open/import copyrighted planning documents;
- upload private documents, photos and video;
- attach BER/MPRN/HDF to the home;
- connect devices;
- share with household members or professionals;
- publish or use in a case study.

### Never at signup

- utility or device passwords;
- mandatory full-room inventory;
- mandatory full planning-pack retrieval;
- required HDF/device connection;
- unrestricted access to household data;
- autonomous control;
- a twenty-minute questionnaire.

## Current OpenHouse product implications

The verified repository already contains useful primitives:

- units and rooms;
- floor-plan concepts;
- document ingestion, sections and retrieval;
- multimodal upload;
- house-context loading;
- unit systems;
- handover events;
- generated guides;
- notification/cron patterns;
- conversation history.

However, the current house-context loader is a prompt briefing rather than the canonical evidence model required here. Existing energy data is demo metadata rather than a production importer. The inspected product did not yet prove:

- progressive DTC onboarding;
- canonical claim-level evidence graph;
- source-rights registry;
- planning/Tailte adapters;
- ESB HDF importer;
- production BER importer;
- consumer export/erasure centre;
- job-specific readiness engine.

This is convergence and productisation work over existing capabilities, not a completely separate application. The architecture should remain one channel-neutral Home Record with developer, household-private and explicitly shared provenance/visibility domains.

## What to exhaust before a broad consumer build

Exhaust the territory through a bounded **Context Acquisition Lab**, not endless desk research.

Use a deliberately varied permissioned sample:

- recent developer-built home with handover material;
- recent home without complete handover;
- older urban home with several planning applications;
- older rural home with sparse digital planning history;
- extended or materially altered home;
- apartment;
- protected or conservation-context property;
- home with heat pump, PV and EV;
- conventional gas/oil home;
- home with no smart meter or usable BER.

For each home, measure:

- public records found;
- correct match and false candidates;
- planning documents available;
- current-layout reconstruction quality;
- system-identification yield;
- homeowner time and number of interactions;
- professional or measured evidence still required;
- first useful answer produced;
- voluntary second evidence upload;
- changed decision;
- rights/licence blocker;
- processing time and cost.

This will reveal which acquisition routes repeat across real homes and deserve automation.

## Recommended build order after the lab

1. Home identity and map confirmation.
2. Tailte building and NPAD planning discovery.
3. Candidate confirmation and official planning links.
4. One-proof upload and document extraction.
5. Walkthrough processing plus guided still capture.
6. Claim-level evidence graph and reconciliation.
7. First sourced Home Snapshot.
8. BER, bill and HDF importers.
9. Rights-approved planning-document acquisition.
10. Named device connectors only after repeated demand.

Do not begin with a broad dashboard, universal integration centre or generic assistant chat.

## Product thesis

The magic is not that OpenHouse has every available datapoint.

The magic is that OpenHouse:

- recognises the home before asking the homeowner to describe it;
- reconstructs what was proposed, mapped and currently observed;
- knows why it believes each fact;
- asks only the question that changes the current answer;
- becomes more useful after every document, photo, decision and outcome;
- remains honest about what is unknown.

The assistant becomes confident by narrowing the claim to the evidence, not by pretending the home is fully known.

## Connected vault notes

- [[companies/openhouse-ai]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/openhouse-show-house-walkthrough-evidence-2026-07-28]]
- [[briefs/openhouse-show-house-manual-evidence-register-2026-07-28]]
- [[briefs/openhouse-show-house-evidence-capture-2026-07-28]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]

- [[imports/campaigns/openhouse-full-context]] — shared signals: openhouse, full
- [[imports/chatgpt/openhouse-dtc-voice-stress-test-2026-07-27]] — shared signals: openhouse, chatgpt, stress

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]]
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]]
- [[briefs/openhouse-free-first-dtc-conversion-plan-2026-07-28]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/openhouse-show-house-evidence-capture-2026-07-28]]
- [[briefs/openhouse-show-house-manual-evidence-register-2026-07-28]]
- [[briefs/openhouse-show-house-walkthrough-evidence-2026-07-28]]
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
- [[companies/openhouse-ai]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]

