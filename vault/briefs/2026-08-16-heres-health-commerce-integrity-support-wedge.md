---
title: Here’s Health commerce integrity and managed-support wedge
date: 2026-08-16
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Square and Shopify webhook documentation plus the active Here’s Health discovery brief
---

# Here’s Health commerce integrity and managed-support wedge

## Bounded proposal

Turn one control already required for the Here’s Health launch — **truthful, recoverable commerce state** — into a named Week 1 evidence gate, then test whether the resulting monitoring and recovery workflow belongs in paid ongoing support.

The first proof is not a new customer feature, a combined Square/Shopify transaction layer or a separate software product. It is a controlled receipt for one representative café order showing what the customer app sent, what Square accepted, what staff could see, which fulfilment transitions occurred, and how a missed, duplicate or out-of-order event would be recovered without creating a second order or regressing customer-visible state.

This belongs inside [[items/heres-health-week-one-discovery-and-technical-proof]], which already calls for webhook verification, idempotency and missed-event reconciliation. It should not become a separate active item or enlarge the six-week feature promise. A recurring service is justified only if the test exposes a material operating burden and Here’s Health values an explicit monitoring and recovery commitment.

## Why this clears the research bar

### Verified external evidence

Square’s official webhook documentation says event notifications can arrive more than once, are not guaranteed to arrive in order, and are retried for up to 24 hours when a timely `2xx` acknowledgement is not received. After that window, the notification is discarded. Square directs integrators to use the event ID for idempotency and its Events API to recover and reconcile missed notifications.[1]

Square’s Events API can search and retrieve Square API events from a 28-day period and is described by Square as a disaster-recovery and reconciliation mechanism for outages, subscription errors and network failures.[2] Square publishes `order.created`, `order.fulfillment.updated` and `order.updated` events; fulfilment changes can be triggered by Square products or the Orders API.[3]

Square also requires each public webhook notification to be authenticated using the `x-square-hmacsha256-signature` header, the subscription signature key, notification URL and raw request body. Requests that fail validation should be discarded.[4]

Shopify’s official webhook guidance independently says webhook ordering is not guaranteed, delivery is not always guaranteed, and applications should run reconciliation jobs rather than rely on webhook receipt alone.[5] Shopify also documents duplicate delivery, idempotent processing or duplicate detection using `X-Shopify-Webhook-Id`, and a short HTTPS acknowledgement budget: one second to connect and five seconds for the entire request.[6]

These are platform characteristics, not evidence that Here’s Health currently loses orders or has weak operations.

### Verified Ground Zero fit

The accepted Here’s Health direction keeps Square and Shopify as separate transactional sources of truth. The flagship café journey depends on staff receiving a Square order and the customer seeing truthful preparation and collection updates. The active Week 1 item already names signature verification, idempotency, staff receipt and missed-event reconciliation as proof obligations.

The new commercial insight is bounded: the same evidence needed to make launch safe can reveal whether a small managed commerce-assurance line has recurring value. It does not justify a new platform before that operating evidence exists.

## Smallest validation test

Run one **no-production integrity drill** in Square Sandbox or an agreed safe test location after Sam and Here’s Health approve access.

1. Map one representative collection order from app request through Square acceptance, staff visibility, fulfilment update, completion and one cancellation or refund path.
2. Record a minimal, non-secret receipt: internal attempt ID, Square order ID, event ID, event type, source timestamp, receipt timestamp, last accepted order version/state, staff-visible state and final outcome.
3. Validate the Square signature before accepting each event, acknowledge quickly, and process state changes asynchronously.
4. Replay the same event to prove duplicate delivery creates no second order, notification or state transition.
5. Deliver a valid older event after a newer one to prove out-of-order delivery cannot regress the customer-visible state.
6. Suppress one test notification, then recover and reconcile the missing event through the Square Events API or the authoritative order record.
7. Walk a named café operator through three exception cards or checklist entries: paid but not visible to staff, visible but status stale, and duplicate or conflicting update. Do not ask staff to interpret developer logs.
8. Estimate the actual support burden and ask whether Here’s Health would pay for a defined monitoring, reconciliation and incident-response line in ongoing support before building any dedicated dashboard.

Shopify should be added to this drill only if Phase One displays Shopify order history or app-owned retail status. Hosted Shopify checkout does not by itself justify a second custom monitoring layer.

### Pass criteria

- all test notifications are signature-validated;
- a duplicate event produces zero duplicate side effects;
- an older event cannot overwrite a newer authoritative state;
- the deliberately missed event is detected and reconciled against Square’s source record;
- the staff operator can identify the correct order and recovery step from the human-readable receipt without developer help;
- the test establishes a measured response target and a named owner for production exceptions; and
- Here’s Health explicitly values a recurring assurance commitment enough to include it in paid support.

If the normal Square operating surface already gives staff sufficient recovery, the app does not mirror live status, exceptions are rare, or Here’s Health treats the work as ordinary maintenance, keep the controls as launch hardening and stop. Do not create a new product or premium line.

## Assumptions to falsify

- The intended Square hardware and staff workflow surfaces app-created orders and fulfilment transitions consistently.
- The application needs webhook-driven state rather than safe direct reads for each customer-visible status.
- Square event IDs, order versions or source timestamps are sufficient to prevent duplicate and regressive processing in the chosen architecture.
- A missed-event reconciliation path can run without broad customer-data collection.
- Staff need a human-readable exception receipt rather than existing Square tools alone.
- The recurring monitoring and recovery burden is material enough to support a paid service.
- The pattern repeats across additional cafés or commerce surfaces.

## Downside and constraints

- Official retry and recovery mechanisms reduce risk; they do not prove that a paid managed service is necessary.
- A technically elaborate event ledger could be over-engineering for a low-volume launch.
- Square Sandbox behaviour and actual café hardware flow may differ, so the final acceptance path still requires an approved staff pilot.
- Reconciliation can repair application state but cannot guarantee that a busy operator noticed or acted on an order.
- Customer-facing status must remain conservative when the authoritative state is delayed or unknown.
- The Square Events API’s 28-day window is a recovery aid, not an indefinite audit archive.
- Shopify should remain separate unless a real Phase One Shopify state gap appears.
- This work could distract from the core catalogue-to-staff order path if treated as a new platform rather than a narrow release control.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, Square, Shopify or another vendor;
- accessing Square, Shopify, customer, payment or staff data;
- creating a production order, refund, cancellation or webhook subscription;
- changing café hardware, staff procedure, production code or customer-visible status;
- adding a feature, service level, support charge or delivery promise to the proposal;
- collecting reusable credentials, payment data or unnecessary customer identifiers;
- spending money, buying monitoring software or publishing a claim; or
- representing that Here’s Health currently loses orders or has a compliance failure.

Any account access, test order, staff drill, commercial proposal, implementation or production mutation requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

Official platform documentation inspected 16 August 2026. No Here’s Health account, order, hardware, staff workflow or production integration was inspected.

## Sources

[1] https://developer.squareup.com/docs/webhooks/overview — Square Webhooks overview: duplicate delivery, unordered events, acknowledgement and retry window.

[2] https://developer.squareup.com/docs/events-api/overview — Square Events API: 28-day event retrieval, disaster recovery and reconciliation.

[3] https://developer.squareup.com/docs/webhooks/v2webhook-events-tech-ref — Square webhook event reference: Orders API event types.

[4] https://developer.squareup.com/docs/webhooks/step3validate — Square webhook signature validation.

[5] https://shopify.dev/docs/apps/build/webhooks — Shopify webhook expectations: no ordering guarantee and recommended reconciliation jobs.

[6] https://shopify.dev/docs/apps/build/webhooks/verify-deliveries — Shopify signature checks, duplicate handling, acknowledgement timing and queueing.

## Connected vault notes

- [[context/business-opportunities-moc]] — nearest opportunity map
- [[companies/heres-health]] — client context and engagement boundary
- [[project_state/heres-health-app]] — current discovery state and unverified integration surface
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — flagship journey, ongoing-support boundary and protected cut line
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — separate-commerce architecture decision
- [[items/heres-health-week-one-discovery-and-technical-proof]] — existing P0 execution container
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]] — separate launch-evidence control
- [[briefs/2026-08-14-heres-health-food-waste-margin-baseline]] — separate post-launch operations wedge
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-14-heres-health-food-waste-margin-baseline]]
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]]
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]]
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

