---
title: OpenHouse founder-home and Longview pre-build validation
company_id: openhouse-ai
date: 2026-07-28
status: proposed-validation
---

# OpenHouse founder-home and Longview pre-build validation

## Purpose

Determine whether OpenHouse can produce home-specific, decision-useful value within ten minutes and then improve through low-friction enrichment before broad DTC or device-integration build.

This protocol tests three distinct risks:

1. whether an occupied household receives recurring practical value;
2. whether a new-build home can be pre-provisioned and connected without homeowner labour;
3. whether the product still works for an older, data-poor home whose owner did not help design OpenHouse.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-free-first-dtc-conversion-plan-2026-07-28]]
- [[companies/openhouse-ai]]

## Recommendation

Do not start with a broad consumer application or large connector catalogue.

Run three bounded manual pilots:

- Sam's occupied home;
- the Longview show house;
- one independent older, data-poor home.

Build only the smallest reusable ingestion or interface slice needed to remove a repeated bottleneck observed in those pilots.

The first result must comply with [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]].

## Why the three homes are different

### Sam's occupied home

Tests:

- address-only passive acquisition;
- real bills and tariff;
- actual occupancy and comfort context;
- everyday systems and maintenance;
- whether Sam voluntarily returns;
- whether advice creates a measurable outcome;
- whether OpenHouse reveals something Sam did not already know.

Founder bias risk:

Sam knows what the product is trying to do and may unconsciously supply missing context or tolerate friction that a normal customer would reject.

### Longview show house

Tests:

- developer-origin baseline;
- exact equipment identity;
- commissioning evidence;
- app and account activation;
- monitoring-site ownership;
- HDF availability;
- Daikin, inverter and Ohme connection feasibility;
- pre-provisioned My Home;
- truthful connection, stale and unavailable states.

Limit:

An unoccupied show house cannot validate ordinary consumption, comfort, behaviour, savings or retention.

### Independent older home

Tests:

- sparse public records;
- ambiguous estate and planning matches;
- boiler, immersion or other unconnected systems;
- little or no handover documentation;
- referral-led ten-minute activation;
- value without modern telemetry;
- whether the owner understands confidence and inherited context;
- whether the owner volunteers a second evidence item after value.

This is the strongest defence against designing a product that works only for modern homes and founders.

## Pilot one: Sam's home

### Rule zero

Sam should initially provide only:

- address or Eircode;
- building confirmation;
- consent for the bounded test;
- one selected goal.

He should not initially volunteer:

- system inventory;
- serial numbers;
- known planning history;
- BER;
- dimensions;
- bills;
- tariff;
- explanations of how the home operates.

The point is to measure what OpenHouse can recover before founder assistance.

### Stage one: passive preflight

Attempt:

- licensed address and building match;
- building footprint;
- planning application and polygon candidates;
- development or estate identity;
- construction period candidate;
- house-type or cohort candidates;
- property transaction corroboration where appropriate;
- BER candidate only through an approved or homeowner-confirmed route;
- contextual weather, solar, flood, radon and environmental data only where relevant to the selected job.

Record:

- source;
- rights state;
- match method;
- claim scope;
- confidence;
- contradictions;
- retrieval time;
- acquisition cost;
- homeowner input avoided.

### Stage two: first reveal

Within the activation contract, show:

- recognised property;
- recovered facts;
- inherited candidate facts;
- meaningful unknowns;
- one finding related to the selected goal;
- one practical action;
- one optional evidence request.

Sam scores:

- Did it know more than expected?
- Was anything wrong or overconfident?
- Was the result useful rather than merely interesting?
- Would a normal homeowner understand the evidence states?
- Was the optional request worth completing?

### Stage three: one evidence action

Choose the single evidence action that most improves the selected job:

- HDF;
- bill;
- BER;
- controller photograph;
- rating plate;
- plan;
- planning confirmation.

Do not request a full home inventory.

### Stage four: operating baseline

If the selected job concerns energy, establish:

- bill period;
- tariff;
- HDF coverage;
- major electric loads;
- heating and hot-water source;
- solar, battery and EV presence;
- minimal occupancy and comfort context needed to interpret the evidence.

Ask only interpretation-changing questions.

Example:

> Is the home normally occupied during weekdays?

Do not ask for a detailed weekly schedule unless the current analysis depends on it.

### Stage five: action and outcome

OpenHouse must produce one bounded action or evidence-gathering step.

Record:

- advice;
- evidence basis;
- action accepted or rejected;
- action date;
- expected observation;
- comparison period;
- weather and occupancy caveats;
- actual result;
- confidence.

The pilot is not complete when a dashboard appears. It is complete when OpenHouse helps make or evaluate one real decision.

### Founder-use measure

The strongest signal is not Sam saying the result looks good.

It is whether Sam voluntarily returns to OpenHouse for a real home question without treating the session as product work.

## Pilot two: Longview connection spike

### Objective

Test whether a new home can arrive in My Home already recognised, documented and ready for one-tap connection activation.

### Property baseline

Acquire:

- exact show-house unit and house type;
- plans and room schedule;
- BER and design assumptions;
- developer specification;
- installed-system register;
- commissioning records;
- warranties;
- manuals;
- handover contacts;
- relevant planning records.

### Meter baseline

Acquire privately and with organisational permission:

- MPRN;
- smart-meter status;
- ESB Networks account status;
- HDF;
- supplier;
- tariff;
- unusual show-house loads;
- opening hours.

### Daikin

Acquire:

- indoor and outdoor rating plates;
- controller model;
- commissioning sheet;
- Onecta registration state;
- current site or account owner;
- approved developer, installer or homeowner access route;
- available metrics and resolution;
- revocation and stale-data behaviour.

### Solar

Acquire:

- inverter make and model;
- inverter serial;
- monitoring platform;
- site owner;
- site identifier;
- account transfer or sharing route;
- panel count and orientation;
- commissioning and NC6 evidence;
- metrics, history and resolution.

The Amerisolar panel is not itself the telemetry source.

### Ohme

Acquire:

- charger model;
- serial;
- current owner account;
- activation state;
- charging-history export;
- approved delegated or partner route;
- metrics and history;
- revocation and failure state.

### AquaBox

Acquire:

- exact model;
- capacity;
- pump and controller labels;
- electrical load;
- alarm or output capability;
- whether any useful data interface exists.

Do not presume it is a cloud source.

### Connection test states

For each source, demonstrate:

- not available;
- available but not connected;
- authorisation started;
- connected;
- first sync;
- fresh;
- stale;
- failed;
- revoked;
- ownership transferred.

No failed connection may silently fall back to simulated data.

### Longview success

A purchaser should be able to open My Home and see:

- the correct home;
- correct system families;
- correct manuals and warranties;
- which exact models are confirmed;
- which data connections are available;
- a one-tap activation route where supported;
- honest static guidance where no connection exists.

## Pilot three: independent older home

### Rule

The owner should arrive through a normal referral and receive no founder briefing beyond the product promise.

### Mandatory inputs

- address or Eircode;
- building confirmation;
- consent;
- one goal.

### First result

Measure:

- time to recognised building;
- planning and estate match quality;
- inherited cohort usefulness;
- wrong assumptions;
- first home-specific finding;
- whether one optional bill, document or photograph improves it;
- whether value exists without telemetry;
- whether the owner would pay, refer or return.

### Success

The older home must not receive an empty My Home merely because its boiler, immersion or controls cannot connect.

## Rich data points already covered

The existing architecture already includes:

- address and building identity;
- planning and house geometry;
- developer and house-type information;
- BER and modelled asset context;
- installed systems;
- manuals, warranties and commissioning;
- bills, tariff and HDF;
- device and smart-home exports;
- weather and environmental context;
- room and system capture;
- maintenance and service history;
- household comfort and schedule context;
- action and outcome history;
- estate and cohort learning.

The remaining high-value gaps are product-system gaps rather than another bulk public dataset.

## Missing product-system questions

### Property versus household ownership

The Home Record needs separable layers:

- stable property identity;
- public and licensed property evidence;
- developer baseline;
- current installed-home layer;
- private household-operation layer.

When a home is sold:

- public property identity remains;
- developer-origin facts remain with provenance;
- transferable home documents require an explicit transfer flow;
- the previous household's bills, behaviour, conversations, schedules and account connections do not transfer;
- device connections are revoked or transferred through the provider;
- the new owner confirms current installed state.

This transfer lifecycle is not yet sufficiently specified in the existing strategy.

### Entitlement and roles

Address knowledge alone cannot authorise sensitive property or energy access.

OpenHouse must distinguish:

- owner;
- co-owner or household member;
- tenant;
- landlord;
- property manager;
- installer;
- developer;
- invited professional.

Each role needs bounded access and revocation.

### Household context without questionnaire friction

Energy interpretation may depend on:

- normal occupancy;
- comfort preference;
- vulnerable occupants;
- unusual loads;
- EV use;
- working from home;
- recent changes.

Do not collect these as a signup survey.

Ask one interpretation-changing question at the point where the answer matters, and let the homeowner skip it.

### Home change events

The Home Record needs first-class events for:

- extension;
- renovation;
- equipment replacement;
- maintenance;
- tariff change;
- new EV;
- solar or battery installation;
- household move;
- professional inspection;
- advice and measured outcome.

Without this, inherited and historic facts will become stale.

### Connector reliability and support burden

Every connection creates:

- authentication failures;
- token refresh;
- API changes;
- provider outages;
- ownership transfers;
- missing periods;
- customer support;
- deletion obligations.

Track connector support cost and data usefulness, not only connection completion.

### Unit economics by source

For each source or connector, measure:

- acquisition cost;
- processing time;
- model cost;
- storage;
- manual review;
- support burden;
- match failure;
- contribution to the first result;
- contribution to retention or payment.

A rich connector that does not alter a decision may be commercially worse than a one-time file upload.

### Gateway or hardware fallback

A vendor-neutral whole-home monitor or gateway could later provide near-real-time electricity when manufacturer APIs are absent.

Candidate categories include:

- qualified-installer current-transformer monitors;
- existing homeowner energy gateways;
- local smart-home hubs;
- supported meter data interfaces where available.

This is only a future feasibility branch because hardware introduces:

- installation friction;
- safety and liability;
- procurement;
- connectivity support;
- replacement and warranty burden;
- additional acquisition cost.

Do not make hardware part of activation or build proprietary hardware before HDF and approved connections are proven insufficient.

### Benchmark fairness

Estate or similar-home energy comparisons must account for relevant differences such as:

- floor area;
- weather;
- occupancy;
- comfort preferences;
- EV charging;
- solar and battery;
- tariff;
- extensions;
- system type;
- data completeness.

Otherwise the benchmark will confidently blame the wrong household or system.

### Safety and escalation

The assistant must know when the next action belongs to:

- the homeowner;
- a developer or warranty provider;
- an electrician;
- a plumber;
- a heating specialist;
- a BER assessor;
- an engineer;
- emergency services.

System access should not drift into unsupported diagnosis or control.

## What not to build yet

- full DTC application;
- nationwide unattended planning-document harvesting;
- broad vendor connector catalogue;
- appliance-level disaggregation claims;
- automatic control;
- proprietary hardware;
- estate benchmark product;
- complete digital-twin capture;
- twenty-minute questionnaire.

## What may need a thin build

Only after the manual pilots identify repetition:

- address-to-candidate Home Record orchestration;
- claim and provenance store;
- first-reveal page;
- one-action evidence request;
- HDF and bill parser;
- connection capability registry;
- source freshness and failure state;
- action and outcome receipt;
- property and household layer separation.

## Pass criteria

### Activation

- credible home-specific result within ten minutes;
- no more than the compulsory activation inputs;
- at most one optional evidence action before first value;
- clear evidence and uncertainty;
- no privacy surprise.

### Value

- one finding that changes a decision, action or question;
- homeowner rates it useful;
- homeowner voluntarily provides a next evidence item or returns;
- no unsupported performance or savings claim.

### Connection

- HDF import works;
- at least one Longview system has a verified approved connection or export path;
- stale, failed and revoked states remain truthful;
- no passwords are handled by OpenHouse.

### Commercial

- manual time and source cost are measured;
- repeated acquisition steps are identified;
- prospective margin remains compatible with the €79 concierge gate;
- no connector is built solely because it is technically interesting.

## Failure criteria

Pause broad DTC build if:

- Sam's home produces no recurring reason to return;
- the independent older home cannot obtain useful value without extensive input;
- first value repeatedly takes more than ten minutes;
- device connections require passwords or unsupported methods;
- connection support overwhelms delivered value;
- the first result is interesting but does not change a decision;
- the product requires founder explanation;
- source and fulfilment cost break the paid-plan economics.

## Recommended order

1. Run Sam's address-only passive preflight.
2. Deliver Sam's first reveal under the activation contract.
3. Add one HDF, bill or evidence action based on his selected goal.
4. Complete one action-to-outcome loop.
5. Inventory and test Longview connection ownership and exports.
6. Produce the pre-provisioned Longview My Home state.
7. Run the independent older-home referral test.
8. Compare value, friction, source yield and cost across all three.
9. Build only the repeated highest-value bottleneck.
10. Decide whether to continue DTC, emphasise developer distribution or keep the service concierge-led.

## Connected context

- [[companies/openhouse-ai]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
