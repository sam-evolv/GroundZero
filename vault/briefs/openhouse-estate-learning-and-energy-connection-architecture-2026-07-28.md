---
title: OpenHouse estate learning and energy connection architecture
company_id: openhouse-ai
date: 2026-07-28
status: proposed-architecture
---

# OpenHouse estate learning and energy connection architecture

## Decision question

How should OpenHouse:

1. learn from repeated homes in the same estate without making every homeowner repeat the first homeowner's capture burden;
2. prevent one household's private data or mistakes from becoming another household's truth;
3. connect real energy data from modern systems;
4. keep My Home valuable for boilers, immersions and other systems with no direct cloud connection; and
5. validate the energy architecture against the Longview show house before committing to broad integrations?

## Executive decision

OpenHouse should add two linked product systems:

1. a **scoped property-cohort knowledge layer** that sits between public or developer evidence and each private Home Record;
2. an **adaptive energy evidence ladder** inside My Home that works with no telemetry, improves with bills or HDF, and becomes live only when an approved device or meter connection exists.

The product should never copy one homeowner's Home Record into another. It should promote only explicitly shareable, non-personal claims into the narrowest valid cohort:

- estate;
- development phase;
- builder package;
- house type;
- plot variant;
- unit;
- household operation.

The current repository already has useful seeds:

- developments, house types and units;
- house-type room-dimension fallback with explicit `source: house_type`;
- unit-scoped installed systems;
- a purchaser My Home surface;
- an older Care telemetry and adapter pattern.

It does not yet have:

- general claim inheritance;
- claim promotion and contradiction handling;
- privacy-safe cross-home learning;
- a consumer energy-connection model;
- an evidence-aware My Home mode without telemetry.

## Part one: the estate learning opportunity

### The correct mental model

The estate in the Carrigaline example is not one giant duplicated home.

It is a family of overlapping cohorts.

A home might belong to:

- the estate;
- a specific planning application;
- a construction phase;
- a builder and subcontractor package;
- a named house type;
- a handed or mirrored layout variant;
- an energy-system package;
- an upgrade cohort created years later.

A claim should attach to the narrowest cohort that the evidence supports.

Examples:

- "The estate was built by Builder X" may be estate-level.
- "These streets were delivered in phase two" may be phase-level.
- "This floor plan has three bedrooms" may be house-type-level.
- "This row used a different boiler" may be plot-range-level.
- "The kitchen was extended in 2018" is unit-level.
- "The heating schedule is set this way" is household-level and never shared.

### Why estate-level alone is too coarse

Large estates often contain:

- several planning permissions;
- multiple build phases;
- different house types;
- mirrored layouts;
- substitutions caused by supply availability;
- different installers;
- later extensions and attic conversions;
- replaced boilers, controls, windows and appliances.

If OpenHouse promotes a finding directly from one unit to an entire estate, it will create confident but false answers.

The inheritance hierarchy should therefore be:

1. unit-confirmed fact;
2. plot or variant fact;
3. house-type fact;
4. builder-package fact;
5. phase fact;
6. development or estate fact;
7. area context.

The assistant should use the most specific applicable claim and preserve its source.

### What happens when the first homeowner signs up

The first homeowner should not manually create the estate profile.

Background acquisition should already attempt to create candidate cohorts from:

- licensed address identity;
- mapped building footprints;
- planning site polygons;
- application boundaries;
- planning descriptions and drawings;
- phase or development names;
- house-type drawings;
- developer brochures;
- homeowner-confirmed relationships.

The first household's evidence stays private by default.

OpenHouse may derive a candidate shareable claim only when:

- the claim is non-personal;
- the household has consented to the relevant use;
- the claim is useful beyond that unit;
- the evidence licence and purpose allow the use;
- the candidate is attached to a defined cohort;
- the original evidence remains auditable;
- the homeowner's private document or media is not exposed.

Example:

A rating-plate photograph from home one confirms a boiler model in that unit. It does not immediately prove the same model across the estate.

It can produce:

> Candidate: this house-type or phase may commonly use Boiler Model A.

The original photograph remains unit-private.

### What happens when later homeowners sign up

The second homeowner should see candidate inherited context such as:

> Similar homes in this house type commonly use Boiler Model A. Is this the controller or boiler you have?

They should be able to:

- confirm;
- reject;
- upload one resolving photograph;
- say that their home was altered;
- defer the question.

Every response updates the cohort claim without exposing household identity.

By later signups, OpenHouse should be able to say:

> We already recognise this estate, likely phase and likely house type. Confirm these three items.

That is the network effect.

### Confidence must not be a vote counter

Confidence should not rise simply because more rows contain the same value.

Ten records copied from one developer brochure are one source, not ten independent confirmations.

Confidence should consider:

- evidence authority;
- independence of sources;
- number of distinct confirming units;
- confirmed cohort membership;
- proportion of checked homes that agree;
- variation between streets, phases and house types;
- recency;
- exactness of the claim;
- known substitutions or alterations;
- unresolved contradictions.

Confidence should plateau when all confirmations depend on the same source.

### Contradictions are how cohorts improve

A contradiction should not merely lower an estate-wide score.

It should trigger a cohort-splitting question:

- Is this a different phase?
- Is the layout mirrored?
- Is it a different house type?
- Was the equipment substituted?
- Was the home upgraded later?
- Was the original match wrong?

The system becomes intelligent by discovering narrower groups, not by averaging away differences.

## Proposed Supabase model

This is a proposed architecture, not an authorised migration.

### `property_cohorts`

Represents a reusable grouping.

Suggested fields:

- `id`
- `cohort_type`
- `parent_cohort_id`
- `canonical_name`
- `aliases`
- `builder_name`
- `construction_from`
- `construction_to`
- `planning_application_refs`
- `spatial_geometry`
- `status`
- `created_at`
- `updated_at`

Suggested cohort types:

- `estate`
- `phase`
- `planning_site`
- `builder_package`
- `house_type`
- `plot_variant`
- `building`

### `property_cohort_memberships`

Links a unit or property to one or more cohorts.

Suggested fields:

- `property_id`
- `cohort_id`
- `match_method`
- `match_confidence`
- `confirmation_state`
- `source_evidence_id`
- `valid_from`
- `valid_to`

Suggested states:

- `candidate`
- `system_matched`
- `homeowner_confirmed`
- `source_verified`
- `rejected`

### `evidence_claims`

Stores all claims without flattening them into unit metadata.

Suggested fields:

- `id`
- `subject_type`
- `subject_id`
- `claim_key`
- `value_json`
- `units`
- `evidence_class`
- `verification_state`
- `confidence_band`
- `scope_notes`
- `observed_at`
- `valid_from`
- `valid_to`
- `superseded_by`
- `sensitivity_class`

The subject may be:

- a cohort;
- a property;
- a room;
- an installed system;
- a household operation profile.

### `claim_evidence_links`

Connects claims to provenance records.

Suggested fields:

- `claim_id`
- `evidence_id`
- `relationship`
- `extraction_confidence`
- `supports_or_conflicts`

### `claim_cohort_observations`

Stores anonymised confirmation or contradiction signals without exposing the original household record to later households.

Suggested fields:

- `claim_id`
- `property_id`
- `observation_state`
- `evidence_class`
- `independence_group`
- `observed_at`
- `eligible_for_aggregate`

### `claim_promotion_reviews`

Audits proposed movement from unit evidence to cohort knowledge.

Suggested fields:

- `claim_id`
- `from_scope`
- `to_scope`
- `supporting_units`
- `independent_source_groups`
- `conflicting_units`
- `decision`
- `decision_reason`
- `reviewed_by`
- `reviewed_at`

### Resolution precedence

When OpenHouse answers for one home, claim resolution should follow:

1. current unit-confirmed claim;
2. current property-specific official record;
3. confirmed plot variant;
4. confirmed house type;
5. confirmed phase or builder package;
6. confirmed estate-level claim;
7. area context;
8. unresolved candidate.

An inherited fact should always carry wording such as:

- typical for this house type;
- common in this phase;
- specified in the original development documents;
- not yet confirmed for this home.

### Privacy boundary

Never promote or expose:

- household names;
- bills;
- MPRNs;
- account identifiers;
- Wi-Fi details;
- serial numbers;
- photographs or video;
- private documents;
- exact occupancy;
- schedules;
- detailed consumption;
- security-sensitive layouts;
- one household's assistant conversation.

Only derived non-personal claims and sufficiently aggregated benchmarks can cross the unit boundary.

## Part two: the energy connection problem

### Core product principle

My Home is the permanent product surface.

Energy is a capability inside it, not a separate app that only exists for technologically connectable homes.

The same My Home surface should adapt to the strongest evidence available.

### Evidence ladder

#### Level zero: systems known, no usage data

Available inputs:

- house context;
- BER;
- heating and hot-water type;
- controls;
- manuals;
- household-stated routines;
- tariff or bill totals where available.

My Home can provide:

- system map;
- how the home works;
- control guidance;
- maintenance and warranty reminders;
- safe checks;
- tariff questions;
- bill-upload prompt;
- upgrade-readiness guidance;
- planning and home records.

It must not show live power, COP, short-cycling or measured savings.

#### Level one: bill or meter reading

Available inputs:

- bill PDF;
- bill photograph;
- manual meter reading;
- tariff;
- billing period.

My Home can provide:

- cost and consumption trend;
- estimated annual use;
- tariff explanation;
- abnormal bill change;
- standing-charge and unit-rate analysis;
- targeted next evidence request.

It cannot attribute consumption to individual appliances.

#### Level two: ESB Networks HDF

The official ESB Networks page states that the homeowner can access actual smart-meter usage and download a Harmonised Downloadable File containing up to two years of electricity usage.

Source:

- https://www.esbnetworks.ie/services/manage-my-meter/view-my-smart-meter-usage

My Home can provide:

- interval consumption profile;
- day, night and peak usage;
- baseload;
- timing anomalies;
- before-and-after comparisons;
- weather-aware household demand patterns;
- tariff-fit analysis.

It still cannot reliably identify heat-pump, EV or immersion load without supporting data or a defensible disaggregation method.

#### Level three: one connected system

Examples:

- solar inverter;
- EV charger;
- heat pump;
- battery;
- thermostat or home hub.

My Home can combine the device feed with whole-home electricity to improve attribution.

#### Level four: multiple connected systems

My Home can show coordinated flows and interactions:

- solar generation;
- grid import and export;
- EV charging;
- heat-pump demand;
- battery charging and discharge;
- tariff windows.

#### Level five: measured learning loop

OpenHouse records:

- advice;
- homeowner action;
- relevant operating change;
- before and after period;
- weather and occupancy caveats;
- confidence of the result.

This is where OpenHouse moves from dashboard to performance assistant.

## Connection routes

### Route one: homeowner-authorised uploads

Build and validate first:

- ESB Networks HDF upload;
- bill upload;
- inverter CSV export;
- charger-history export;
- manufacturer report export;
- screenshot-assisted capture when no export exists.

Advantages:

- broad coverage;
- no password handling;
- no dependency on undocumented consumer APIs;
- immediate validation of insight quality;
- suitable for older homes.

### Route two: approved OAuth or partner APIs

Only add a vendor when:

- there is an official route;
- commercial use is permitted;
- homeowner consent is explicit;
- token refresh and revocation are supported;
- retention and deletion are defined;
- the data changes a useful answer;
- failure never silently becomes demo data.

### Route three: installer or developer handover connection

This may be the best route for new-build homes.

At commissioning or handover, the installer or developer can supply:

- exact equipment identity;
- system serials;
- commissioning evidence;
- homeowner account activation;
- monitoring-site transfer;
- documented consent;
- supported partner connection.

This is easier and safer than asking a homeowner months later to reconstruct the installation.

### Route four: homeowner-owned hub

Later candidates include:

- Home Assistant;
- Homey;
- vendor-neutral gateways;
- local energy-management systems.

This should be an advanced route, not the mass-market onboarding assumption.

## What the repository currently does

### Existing strength

`lib/house-context/loader.ts` already distinguishes unit-specific room dimensions from house-type fallback and labels inherited rooms as `source: house_type`.

That is the correct semantic pattern for broader cohort inheritance.

### Current My Home limitation

`PurchaserMyHomeTab.tsx` computes `hasEnergy` from `showcase_month_detail`.

When `hasEnergy` is false, almost the entire home and system experience is hidden. The interface degrades to:

- the header;
- home identity where available;
- BER where available;
- Your Area.

This is too weak for boilers, immersions or unconnected homes.

### Current energy limitation

`/api/purchaser/home-energy` reads `units.metadata.demo_home`.

The current live-looking surface is therefore demonstrative rather than a real connection layer.

The component itself correctly discloses synthetic demo data for the known demo state, but future architecture must bind every metric to an explicit source and freshness state.

### Current installed-system limitation

`unit_systems` is unit-scoped and useful, but it is not currently the source of the purchaser My Home system cards.

The current cards are hard-wired around:

- heat pump;
- ventilation;
- EV charger;
- solar.

My Home needs to render from the actual installed-system graph and adapt to:

- boiler;
- immersion;
- storage heating;
- stove;
- heat pump;
- solar;
- battery;
- EV charger;
- controls;
- ventilation.

### Existing Care telemetry warning

The older Care schema includes:

- `installations`;
- `installation_telemetry`;
- `installation_alerts`;
- a SolarEdge adapter.

The concepts are reusable, but the implementation should not be wired directly into consumer My Home because:

- Care installations are not cleanly bound to purchaser units;
- credentials appear in installation rows rather than a dedicated encrypted connection vault;
- the SolarEdge adapter silently generates mock readings when credentials are missing or a request fails;
- mock and measured data must never share the same trust state.

## Proposed consumer energy model

This is a proposed architecture, not an authorised migration.

### `energy_connections`

- `id`
- `property_id`
- `unit_system_id`
- `provider`
- `connection_type`
- `status`
- `consent_id`
- `credential_ref`
- `external_site_id`
- `scopes`
- `connected_at`
- `last_success_at`
- `last_failure_at`
- `revoked_at`

Credentials belong in an encrypted secret store. They should not be placed in ordinary JSON metadata or returned to the client.

### `energy_data_sources`

Describes provenance independently from the connection.

- `provider`
- `source_kind`
- `evidence_class`
- `resolution`
- `coverage_start`
- `coverage_end`
- `retrieved_at`
- `freshness_state`
- `terms_version`
- `import_id`

### `energy_readings`

Normalized time series:

- `property_id`
- `unit_system_id`
- `source_id`
- `metric`
- `value`
- `unit`
- `interval_start`
- `interval_end`
- `quality_state`

Metrics may include:

- grid import;
- grid export;
- solar generation;
- EV charging;
- heat-pump electricity;
- heat output;
- flow temperature;
- room temperature;
- battery state of charge.

### `energy_derived_metrics`

Every derived metric should name:

- calculation version;
- source readings;
- period;
- assumptions;
- completeness;
- confidence;
- invalidation state.

### `energy_actions`

Closes the loop between advice and outcome.

- insight shown;
- action accepted;
- action date;
- claimed change;
- relevant system;
- comparison window;
- measured result;
- caveats;
- confidence.

## My Home product modes

### My Home Core

For every home:

- home identity;
- rooms and layout;
- installed systems;
- documents and warranties;
- maintenance timeline;
- planning and alteration record;
- current priorities;
- assistant;
- targeted requests to improve the record.

### My Energy Snapshot

For bills or HDF:

- consumption and cost trends;
- usage by time window;
- baseload;
- tariff fit;
- one recommended action;
- explicit limits on attribution.

### Connected Systems

For system feeds:

- connection health;
- current state only when truly live;
- system-specific performance;
- alerts;
- comparison with the whole-home meter;
- data freshness and source.

### Home Performance

For sufficient measured evidence:

- outcome tracking;
- weather-aware comparisons;
- comfort and cost trade-offs;
- evidence-backed recommendations;
- confidence and unresolved context.

## Longview show-house pilot

### What it can validate

The show house can validate:

- installed-system identity;
- handover-to-account activation;
- connection consent;
- HDF ingestion if a smart meter account is available;
- vendor data acquisition;
- normalization;
- freshness and failure states;
- My Home adaptive rendering;
- assistant grounding against system and meter evidence.

### What it cannot validate by itself

Because the show house is not a normal occupied household, it cannot establish:

- normal household energy use;
- comfort outcomes;
- occupant-driven schedules;
- typical savings;
- robust estate benchmarks;
- voluntary consumer retention.

It is a connection-pipeline case study, not the final energy-outcome case study.

### Evidence required next

#### Whole-home electricity

- MPRN held privately;
- smart-meter status;
- ESB Networks account status;
- HDF export;
- tariff and supplier;
- knowledge of show-house opening hours and unusual loads.

#### Daikin

- indoor and outdoor rating plates;
- controller model;
- installer and commissioning sheet;
- Onecta account and device registration status;
- explicit homeowner or organisational consent;
- verified approved API or partner route.

Daikin currently exposes an official developer portal with signup, application registration and API product concepts:

- https://developer.cloud.daikineurope.com/

That establishes that a developer surface exists. It does not establish that OpenHouse has approval, that the relevant Onecta product is available to a newly registered application, or that commercial delegated household access is permitted. Those must be verified through account registration and terms review.

#### Solar

- inverter make and model;
- inverter serial;
- monitoring platform;
- site owner;
- site transfer or sharing capability;
- panel count and orientation;
- commissioning and NC6 evidence.

The Amerisolar panel family is not the data connection point. The inverter and its monitoring platform are.

#### Ohme

- charger model;
- serial;
- owner account;
- app activation;
- available user export;
- official partner or delegated access route.

No official public Ohme developer route was verified in this pass. OpenHouse should request formal confirmation from Ohme rather than depending on an undocumented endpoint or asking for the homeowner's password.

#### AquaBox

- exact model and capacity;
- rating plates;
- controller capability;
- any electrical load or alarm output.

The supplied evidence does not support treating AquaBox as a cloud energy source.

### Pilot sequence

1. Inventory exact systems and owners.
2. Activate the homeowner-facing manufacturer apps properly.
3. Export the ESB Networks HDF.
4. Import HDF and bills into a local, feature-gated energy source model.
5. Determine which device exports are available without custom API work.
6. Apply for or enquire about approved Daikin, Ohme and inverter access.
7. Normalize all acquired readings with source, time and freshness.
8. Render My Home from capability states rather than one `hasEnergy` boolean.
9. Ask the assistant questions that require progressively stronger evidence.
10. Confirm that unavailable or failed feeds are shown as unavailable, never simulated.
11. Repeat on an occupied home before making savings or comfort claims.

## Validation questions

### Estate learning

- Does a later homeowner complete less capture work?
- Are inherited claims correctly scoped to estate, phase or house type?
- How often are suggested inherited claims rejected?
- Do contradictions produce better cohort splits?
- Can a homeowner see why OpenHouse thinks a claim applies?
- Can private household evidence remain private while derived cohort learning improves?

### Energy

- Can a homeowner provide useful data without sharing a password?
- Does HDF alone generate a decision-changing insight?
- Which vendor connection adds enough value to justify maintenance?
- Does My Home remain useful without telemetry?
- Are live, historical, modelled and inferred metrics visually distinct?
- Does the assistant refuse unsupported appliance attribution?
- Can an action be linked to a measured outcome?

## Recommended product decisions

1. Add cohort-scoped inheritance to the Home Record rather than copying unit profiles.
2. Promote only non-personal derived claims, never source household media or documents.
3. Make independent corroboration and cohort specificity drive confidence.
4. Treat contradictions as cohort-splitting evidence.
5. Make My Home useful at every evidence level.
6. Build HDF and bill ingestion before a wide vendor-API programme.
7. Pursue developer or installer-assisted connection transfer for new builds.
8. Use the Longview show house to validate connectivity and truthful rendering.
9. Use an occupied home to validate performance outcomes.
10. Remove silent mock fallbacks from any real consumer data path.

## Connected context

- [[companies/openhouse-ai]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/openhouse-show-house-walkthrough-evidence-2026-07-28]]
- [[briefs/openhouse-show-house-manual-evidence-register-2026-07-28]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/openhouse-show-house-manual-evidence-register-2026-07-28]]
- [[briefs/openhouse-show-house-walkthrough-evidence-2026-07-28]]
- [[companies/openhouse-ai]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]

