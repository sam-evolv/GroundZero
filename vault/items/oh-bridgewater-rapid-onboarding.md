---
id: oh-bridgewater-rapid-onboarding
company_id: openhouse-ai
domain: commercial-operations
title: Certify the rapid Bridgewater onboarding path
state: active
is_one_thing: true
source: Bridgewater meeting preparation 2026-08-04
created_at: "2026-08-04"
updated_at: "2026-08-04"
---

# Certify the rapid Bridgewater onboarding path

## Outcome

OpenHouse can accept a verbal pilot yes, receive one minimal data pack and produce one validated test home quickly without using real homeowner data or making an unsafe production promise.

## Current position

A concierge onboarding pack now exists:

- [[briefs/2026-08-04-openhouse-rapid-onboarding-runbook]]
- [[assets/openhouse-onboarding/OpenHouse-rapid-onboarding-template.xlsx]]
- [[assets/openhouse-onboarding/OpenHouse-units-import-template.csv]]

The workbook matches the existing dedicated unit importer. The first worksheet uses the six supported headers and requires only `address_line_1` and `house_type_code`.

## Definition of done

- One clean synthetic Bridgewater-style intake pack is prepared.
- A new tenant, developer, scheme and test unit can be created through the controlled admin path.
- Scheme and house-type documents can be mapped without exposing unapproved files.
- Exact-home access and assistant checks pass.
- The process is timed and captured.
- A written list of required inputs, missing inputs and errors is generated.
- No homeowner invitation is possible before the release gate passes.

## Immediate next action

Run one end-to-end dry run in an isolated preview or approved non-production environment using synthetic Bridgewater-style data. Do not use Carol's email, David's email, Bridgewater customer data or production homeowner records.

## Known blockers

- The public onboarding flow creates a pending submission rather than an activated scheme.
- Signup calls a super-admin-only provisioning endpoint from the client.
- The onboarding submission table and storage setup are attempted at request time rather than through a verified migration.
- Private onboarding files are presented using public object URLs in the admin page.
- The development wizard does not persist the uploaded unit data through the inspected create API.
- No end-to-end turnaround dry run has yet passed.

## Connected vault notes

- [[items/oh-bridgewater-warm-introduction]]: active commercial relationship.
- [[briefs/2026-08-04-bridgewater-meeting-preparation]]: meeting strategy.
- [[items/oh-onboarding-packet-automation]]: broader onboarding automation.
- [[items/oh-onboarding-cut]]: broader self-service redesign.
- [[goals/oh-activation]]: activation goal.
- [[goals/oh-aftercare-os]]: product direction.
- [[companies/openhouse-ai]]: company context.
- [[project_state/oh]]: live operating state.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-bridgewater-meeting-preparation]]
- [[briefs/2026-08-04-openhouse-rapid-onboarding-runbook]]
- [[briefs/2026-08-05-personal-intelligence-and-bridgewater-readiness]]
- [[companies/openhouse-ai]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[items/oh-bridgewater-warm-introduction]]
- [[items/oh-onboarding-cut]]
- [[items/oh-onboarding-packet-automation]]
- [[project_state/oh]]

