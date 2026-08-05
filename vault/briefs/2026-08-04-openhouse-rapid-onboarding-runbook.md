---
title: OpenHouse rapid onboarding runbook
company_id: openhouse-ai
date: 2026-08-04
status: active
source: Current OpenHouse code audit and Bridgewater meeting preparation
---

# OpenHouse rapid onboarding runbook

## Decision

If David wants to proceed immediately, use a **concierge pilot**, not the current public self-service onboarding flow.

The immediate promise should be:

> Give me one scheme, one operational contact, a clean unit list and the approved handover documents. I will set up the first test home and bring it back to you for validation before any homeowners are invited.

Do not promise an instant production launch. The first deliverable is one validated test home with no real homeowner personal data.

## What "onboard straight away" means

### Stage 1: first test home

- One Bridgewater tenant.
- One named scheme.
- One synthetic or unoccupied test home.
- One matching house type.
- Approved scheme and house-type documents.
- One Bridgewater operational reviewer.
- No homeowner invitations.
- No homeowner names, emails or phone numbers.

Operational target: one working day after a clean and complete pack is received. This target must be confirmed by an internal dry run before it is offered as a commitment.

### Stage 2: controlled pilot

- Five to ten homes or one small handover cohort.
- Real homeowner data only after the data agreement, permissions and release gate are complete.
- Bridgewater signs off the content, contacts and escalation route.
- OpenHouse verifies exact-home isolation, access, document scope and assistant answers.

### Stage 3: phase rollout

- Remaining homes imported in bulk.
- Additional house types and documents mapped progressively.
- Staff access, reporting and aftercare ownership expanded only after the pilot works.

## Minimum information to request

### Required for the first test home

- Bridgewater legal company name.
- Scheme name and address.
- One named operational owner and email.
- One unit address.
- The matching house type code.
- One approved source folder containing the relevant handover documents.
- Confirmation of which documents may be shown to homeowners.

### Helpful but not blocking

- First handover date.
- Full unit list.
- Bedrooms, property type and Eircodes.
- Logo and brand colour.
- Additional staff contacts.
- Historical homeowner questions.
- Full warranty and contractor matrix.

### Do not request initially

- Complete historical scheme data.
- Every manual before the first test home exists.
- CRM integration.
- Homeowner names, emails or phone numbers.
- Bespoke workflow development.
- Full branding approval.

## Reusable intake pack

Send only one workbook or one CSV, plus a secure shared folder link.

- [[assets/openhouse-onboarding/OpenHouse-rapid-onboarding-template.xlsx]]: complete intake workbook. The first worksheet is directly compatible with the current unit importer.
- [[assets/openhouse-onboarding/OpenHouse-units-import-template.csv]]: minimum direct-import CSV.

The current importer requires only these two fields:

```text
address_line_1
house_type_code
```

The optional fields already accepted are:

```text
bedrooms_raw
property_designation
property_type_raw
eircode
```

## Preferred document folder

```text
Bridgewater - <Scheme Name>/
  00 Approved for homeowners/
    Scheme/
    House Types/
      TYPE-A/
      TYPE-B/
    Warranties/
    Systems and manuals/
    Emergency and aftercare/
  01 Needs Bridgewater review/
  02 OpenHouse outputs/
```

Each document should have:

- a clear title;
- a scheme or house-type scope;
- a Bridgewater owner;
- an approved-for-homeowners decision;
- a source file or approved source link.

## Internal execution path

### 1. Confirm scope

Capture:

- test home, controlled pilot or phase rollout;
- candidate scheme;
- internal Bridgewater owner;
- desired first review date;
- whether real homeowner data is in scope.

### 2. Receive the pack

- Use the workbook or minimum CSV.
- Receive documents through an approved shared folder.
- Do not accept passwords, access tokens or homeowner personal data by ordinary email.
- Check that the unit list and house-type codes agree.

### 3. Create the organisation and scheme

- Create the Bridgewater tenant through the super-admin surface.
- Create the first developer account through the controlled admin path.
- Create one development with a unique code.
- Skip non-essential branding.
- Link a named Bridgewater reviewer before rollout.

### 4. Import units

- Use the dedicated development unit importer.
- Keep `Units` as the first worksheet when using the workbook.
- Validate addresses and house-type codes before import.
- Start with one test row, then import the pilot cohort.
- Record inserted, skipped and failed rows.

### 5. Map documents

- Separate scheme-level and house-type-level material.
- Add only documents approved for the test home.
- Keep unapproved files outside the homeowner-visible corpus.
- Record missing warranties, emergency contacts and aftercare instructions.

### 6. Verify the first home

Before Bridgewater sees it:

- verify the exact tenant, scheme, unit and house type;
- confirm no other development data is visible;
- confirm the expected documents are visible;
- test at least five property-specific questions;
- test one answer the system should decline or escalate;
- confirm the Bridgewater contact and escalation route;
- capture evidence of every check.

### 7. Joint signoff

Bridgewater confirms:

- source material is current;
- homeowner-visible content is approved;
- the house-type mapping is correct;
- emergency and aftercare contacts are correct;
- pilot homes and owners are named;
- the next rollout date is agreed.

Only then invite real homeowners.

## Suggested timing language

If David says yes in the meeting:

> Great. I do not need your full system or every historical document to get started. If you give me one scheme, one contact, a clean unit list and the approved documents, I can prepare the first test home for you to validate. Once that is right, we can load a small pilot cohort without asking Bridgewater to change its whole process.

If he asks how quickly:

> I am targeting the first test home within one working day of receiving a clean pack. I will confirm the production pilot timing after we have checked the data, documents and access requirements. I will not invite homeowners until Bridgewater has signed off the content and the access checks have passed.

## What the code audit found

### Already available

- Super-admin tenant creation.
- Super-admin development creation.
- A bulk unit importer for CSV and Excel.
- Duplicate-address skipping.
- Generated unit identifiers.
- Optional scheme branding.
- A developer onboarding submission form.
- A super-admin queue for reviewing submissions.

### Current friction and risks

1. The public developer onboarding begins with a five-screen product tour.
2. The public form collects a submission but does not create an activated development.
3. The submission route attempts to create its own database table and storage bucket at runtime. There is no matching migration in the inspected repository.
4. Uploaded onboarding files are stored in a private bucket, while the admin page constructs public object URLs. File retrieval may therefore fail.
5. The developer signup page calls a super-admin-only provisioning endpoint from the client. That cannot be treated as a verified self-service path.
6. The new-development wizard previews uploaded unit data, but the inspected create API does not persist the submitted `unitTypes` or `units`. Use the dedicated unit importer instead.
7. Document-to-house-type mapping and assistant readiness are not a verified one-click pipeline.
8. No end-to-end dry run has yet certified the claimed turnaround.

## Engineering sequence after the meeting

Do not start speculative product work. Fix only the path required by the first real pilot.

### P0: safe concierge onboarding

- Create a single server-side "create pilot" action for super-admins.
- Create or select the tenant.
- Link the developer account securely.
- Create the development.
- Import the unit list.
- Return an auditable readiness checklist.
- Make every step idempotent and recoverable.

### P0: fix signup and onboarding storage

- Use one canonical server-side signup/provisioning path.
- Add a real migration for onboarding submissions.
- Use signed URLs for private onboarding files.
- Remove runtime schema creation from request handling.

### P1: first-home readiness gate

- Scheme and unit scope verified.
- House type mapped.
- Approved documents present.
- Bridgewater owner present.
- Exact-home access check passed.
- Assistant answer suite passed.
- Homeowner invitations disabled until every gate passes.

### P2: progressive onboarding

- Add optional branding, integrations, historical documents and wider staff access after the first home is validated.

## Commercial and security boundary

A verbal yes is enough to start a synthetic test home. It is not enough to load real homeowner data or launch publicly.

Before a real cohort:

- define the pilot scope and fee;
- identify the contracting and data-controller entities;
- complete the data agreement;
- name the authorised Bridgewater users;
- run the exact-scope access and release checks;
- obtain written content approval.

## Connected vault notes

- [[briefs/2026-08-04-bridgewater-meeting-preparation]]: discovery and meeting strategy.
- [[briefs/2026-08-04-bridgewater-meeting-card]]: concise in-meeting prompts.
- [[items/oh-bridgewater-warm-introduction]]: active relationship.
- [[items/oh-onboarding-packet-automation]]: broader packet automation.
- [[items/oh-onboarding-cut]]: broader self-service redesign.
- [[companies/openhouse-ai]]: product and company context.
- [[project_state/oh]]: live operating state.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-bridgewater-meeting-card]]
- [[briefs/2026-08-04-business-post-ai-leadership-awards-application]]
- [[items/oh-bridgewater-rapid-onboarding]]
- [[items/oh-bridgewater-warm-introduction]]
- [[project_state/oh]]

