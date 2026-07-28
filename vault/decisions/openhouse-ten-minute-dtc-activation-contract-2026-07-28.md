---
title: OpenHouse ten-minute DTC activation contract
date: 2026-07-28
company_id: openhouse-ai
status: active-decision
---

# OpenHouse ten-minute DTC activation contract

## Decision

A broad paid OpenHouse DTC product is viable only if a homeowner can reach a credible, home-specific benefit within ten minutes.

The compulsory activation inputs are limited to:

1. address or Eircode;
2. building confirmation;
3. permission to search and process the relevant sources;
4. one selected homeowner goal;
5. at most one optional evidence or connection action before the first result.

OpenHouse must not require the homeowner to inventory the home, transcribe serial numbers, answer a long questionnaire or connect every system before showing value.

If this contract cannot be met repeatedly across both data-rich and data-poor homes, the broad paid DTC thesis should be reconsidered before significant consumer build.

## Why this is a gate

The product cannot depend on homeowners spending twenty to forty minutes:

- walking around the home;
- finding every label;
- typing model numbers;
- answering technical questions;
- locating old documents;
- creating several manufacturer accounts;
- granting multiple integrations;
- waiting for processing;
- and paying before receiving a meaningful result.

That behaviour may be realistic for a customer already facing an expensive problem. It is not a realistic default activation loop for a referred consumer product.

The social test is:

> Can one homeowner recommend OpenHouse to a friend, and can that friend reach an impressive home-specific result within ten minutes?

A friend may send a referral and help explain the product. The homeowner must still confirm their own property and authorise any personal or connected data access.

## The minimum viable activation contract

### Required

- Eircode or address;
- map or building confirmation;
- consent to search applicable official and licensed sources;
- one goal, such as understanding the home, checking a bill, reducing costs, operating heating or planning an upgrade.

### Optional before first value

Exactly one of:

- confirm a planning or house-type match;
- connect an approved account;
- upload an HDF;
- photograph or upload one bill;
- photograph one rating plate;
- upload one plan or BER;
- skip and continue with externally acquired context.

### Prohibited before first value

Do not require:

- room-by-room questionnaires;
- manual room dimensions;
- complete equipment inventory;
- multiple serial numbers;
- household schedule questionnaire;
- detailed occupancy profile;
- several manufacturer connections;
- full document pack;
- walkthrough video;
- smart-home installation;
- professional survey.

These may become targeted later actions when the homeowner understands what each one unlocks.

## The ten-minute experience

### Immediately

The homeowner enters an Eircode or address and confirms the building.

Background acquisition begins without waiting for further questions.

### First reveal

OpenHouse should reveal whatever it has already recovered:

- building footprint;
- likely property type;
- development or estate;
- candidate phase or house type;
- planning history;
- floor area candidate;
- BER status where appropriately confirmed;
- likely systems from approved development or cohort evidence;
- one important uncertainty.

Every inherited or proposed fact must be labelled as typical, candidate or unconfirmed for this home.

### Goal selection

The homeowner chooses the reason they came:

- Why is my bill high?
- How should I use my heating?
- What systems are in this home?
- What should I maintain?
- Should I upgrade?
- Organise my home record.

This determines which additional source or evidence is most valuable.

### One resolving action

OpenHouse requests no more than one optional action before the first result.

Examples:

- "Upload one recent bill and I can show what changed."
- "Connect your smart-meter file and I can map when you use electricity."
- "One photograph of this label will identify the correct manual."
- "Confirm this planning record belongs to your extension."

The interface must state the resulting benefit before asking.

### First useful result

The result must contain:

- one home-specific finding;
- the evidence behind it;
- one practical action;
- one meaningful unknown;
- one optional next step that improves the answer.

A data summary without a decision or action is not sufficient activation value.

## Passive acquisition order

Background agents should attempt sources in this order.

### Property identity

- licensed address resolution;
- building footprint;
- spatial property match;
- development and estate aliases;
- planning site and application matches;
- cohort membership candidates.

### Intended home

- planning metadata;
- approved or homeowner-authorised drawings;
- development brochures and specifications where rights permit;
- builder handover material;
- house-type records;
- BER after an approved or homeowner-confirmed match.

### Current home

- prior homeowner-confirmed property facts;
- privacy-safe estate, phase and house-type claims;
- uploaded documents;
- one targeted image;
- later walkthrough or direct measurement.

### Operating home

- bill;
- HDF;
- approved utility or manufacturer connection;
- homeowner-owned data export;
- later telemetry.

## Serial numbers and data access

### What a serial number can do

A serial number may help:

- identify exact make and model;
- retrieve the correct manual;
- determine warranty family;
- match a commissioning record;
- find an existing site after the authorised owner signs in;
- complete device binding inside an approved vendor flow;
- prevent the wrong device from being attached to the home.

### What a serial number must not do

A serial number alone should not allow OpenHouse to retrieve:

- live operating data;
- historical household telemetry;
- location;
- account identity;
- settings;
- remote-control capability.

A device serial is often physically visible and may appear in photographs, invoices or discarded packaging. Treating it as an access credential would be unsafe.

### The low-friction connection target

The preferred interaction is:

1. OpenHouse identifies the likely system from external or cohort evidence.
2. The homeowner taps "Connect".
3. The manufacturer or approved provider authenticates the homeowner.
4. The homeowner grants defined read-only scopes.
5. OpenHouse receives a device or site identifier plus data permissions.
6. The connection can be revoked from either service.

The homeowner should not type a manufacturer password into OpenHouse.

### When the vendor has no suitable consumer API

Use the next best route:

- official report or CSV export;
- shareable monitoring invitation;
- installer or developer site transfer;
- homeowner-uploaded screenshot or file;
- HDF as the whole-home source;
- advanced homeowner-owned hub;
- no connection, with honest static guidance.

Do not depend on undocumented endpoints as a DTC foundation.

## New-build advantage

For a new home, OpenHouse should try to remove connection friction before the purchaser arrives.

The builder, installer and commissioning workflow can provide:

- exact equipment identity;
- serial and site identifiers;
- warranties;
- commissioning records;
- manufacturer account activation;
- monitoring-site ownership transfer;
- read-only OpenHouse invitation;
- homeowner consent at handover.

The ideal Longview handover is not:

> "Walk around and type every system into OpenHouse."

It is:

> "Your home and systems are already recognised. Confirm ownership and choose which connections to activate."

## Data-rich and data-poor homes

### Data-rich home

The ten-minute value may come from:

- recognised house type;
- planning drawings;
- connected HDF;
- identified heat pump;
- inverter or charger connection;
- estate cohort knowledge.

### Data-poor home

OpenHouse still needs a guaranteed route to value.

Use:

- address and building context;
- planning history;
- one selected goal;
- one bill, document or image if volunteered;
- a sourced property snapshot;
- one practical action;
- an explicit missing-evidence request.

OpenHouse must not manufacture a sense of understanding when public records are sparse.

## Product states after activation

The Home Record continues to improve asynchronously.

### Ready now

Facts and guidance supported by available evidence.

### Improving in background

Sources still being processed or matched.

### One action unlocks more

A specific connection, document or photograph with a stated benefit.

### Not available for this home

A capability that depends on inaccessible or nonexistent data.

This is better than showing a generic completion percentage.

## Measurement

The validation should record:

- elapsed time to first home-specific result;
- compulsory homeowner interactions;
- optional evidence actions;
- passive fields recovered;
- correct estate, phase and house-type match;
- rejected inherited claims;
- connection completion rate;
- first-result usefulness;
- voluntary next action;
- willingness to pay or payment commitment;
- referral intent;
- return usage after the first result.

## Failure conditions

The DTC activation model has failed if it repeatedly requires:

- more than ten minutes before useful output;
- a technical inventory before value;
- several account connections;
- serial-number transcription;
- a full walkthrough;
- vague generic advice;
- unsupported confidence;
- payment before the homeowner can understand the benefit.

## Near-term validation sequence

1. Prototype the ten-minute flow manually inside the paid concierge check.
2. Run the address and cohort acquisition before the homeowner session where possible.
3. Give the homeowner only the compulsory activation inputs.
4. Measure what is available by the first reveal.
5. Request only one additional evidence action.
6. Deliver one decision-changing result.
7. Record every point of hesitation or abandonment.
8. Repeat across data-rich and data-poor homes.
9. Validate HDF upload separately from manufacturer connections.
10. Use Longview to test pre-provisioned new-build activation.
11. Only automate the repeated sources and connection routes.

## Build implications

### Build before broad onboarding UI

- activation event model;
- source-acquisition orchestration;
- first-reveal contract;
- capability and evidence states;
- one-action request logic;
- connection-provider registry;
- connection consent and revocation model;
- truthful unavailable and stale states.

### Do not build yet

- a large device-API catalogue;
- a complete questionnaire;
- universal appliance disaggregation;
- automatic control;
- unsupported serial-number lookup;
- nationwide ingestion infrastructure before manual yield is measured.

## Connected context

- [[companies/openhouse-ai]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
