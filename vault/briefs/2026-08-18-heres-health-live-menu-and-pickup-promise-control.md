---
title: Here’s Health live-menu availability and pickup-promise control
date: 2026-08-18
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Square Catalog, Inventory and Orders documentation plus the active Here’s Health discovery brief
---

# Here’s Health live-menu availability and pickup-promise control

## Bounded proposal

Add one **live-menu availability and pickup-promise control** to the Here’s Health Week 1 proof. The control should demonstrate that a location-specific item, modifier, sold-out decision, menu period or preparation-time change made through the agreed Square operating surface reaches the proposed app accurately, without staff maintaining a second catalogue or the app accepting a pickup promise the café cannot fulfil.

This is not a demand-forecasting product, a capacity-optimisation engine or a new app feature. It is a launch gate for the operating requirement already recorded in Ground Zero: Square remains the café source of truth, orders enter the existing Square environment, and staff do not manage a parallel order system.

Keep the proof inside [[items/heres-health-week-one-discovery-and-technical-proof]]. Do not create a separate item or recurring service unless direct observation shows repeated catalogue or pickup-rule drift and Here’s Health values a paid assurance commitment.

## Bottleneck

The supplied Here’s Health brief requires live, location-aware Square menus while also naming opening hours, cut-offs, preparation-time rules, collection-slot capacity, time-of-day availability, sold-out handling and location-specific menus as unresolved discovery work.

Those values change during ordinary café operation. If the app copies them into its own manually maintained catalogue or schedule, staff inherit duplicate updates and customers can see stale products, modifiers or pickup times. If the app reads Square data without understanding location visibility, manual sold-out controls and pickup fulfilment rules, it can still present a technically live but operationally false offer.

No Here’s Health Square account, hardware or staff process has yet been inspected. This proposal therefore treats the integration risk as verified and the client’s actual drift burden as unverified. The smallest test must measure that burden before any automation or support line is proposed.

## Value category

- **Operational reliability:** prevent orders for unavailable products or impossible pickup times.
- **Staff time:** avoid maintaining an app-specific menu, sold-out list or collection schedule beside Square.
- **Customer trust:** keep price, modifier, location, availability and pickup promises aligned with the café’s operating surface.
- **Scope control:** prove whether native Square controls are sufficient before building custom capacity or forecasting logic.
- **Commercial support evidence:** determine whether recurring catalogue and promise assurance has paid value or is ordinary implementation maintenance.

## Evidence that the control is technically grounded

### Verified Ground Zero evidence

- [[imports/heres-health-app-project-brief-2026-08-13]] states that Square must remain source of truth for café products, prices, modifiers and availability and that staff must not manage a parallel order system.
- The same source names opening hours, cut-offs, preparation time, collection-slot capacity, time-of-day availability, sold-out behaviour and location-specific menus as required discovery.
- [[items/heres-health-week-one-discovery-and-technical-proof]] already requires the Square catalogue, hardware, staff fulfilment path and sold-out handling to be demonstrated rather than assumed.

### Verified Square platform evidence

Square’s official **Manage Menus** guide describes synchronising Square menus into a kiosk, mobile application or online-ordering surface. It recommends a periodic sync strategy for item changes, menu-structure changes, availability updates and additions or removals. It also documents location visibility through menu channels and says location-specific menu configuration, including location availability, is managed through the Square Dashboard.[1]

Square’s official sold-out guide says an item variation can become sold out automatically from inventory or manually when a merchant marks it unavailable. The location-specific `sold_out` field is the single Square source for both cases, works without inventory tracking, and is also available for modifiers. Square emits a catalogue-version event when sold-out state changes so an application can synchronise and avoid presenting unavailable items as purchasable.[2]

Square’s Orders documentation says a pickup fulfilment can carry `pickup_at`, `schedule_type` and `prep_time_duration`. For a scheduled pickup, an order does not become active in Order Manager, KDS or kitchen printers until pickup time minus preparation time. Square recommends setting preparation time; without it, a scheduled order becomes active immediately.[3]

Square’s order-ahead guide describes the intended customer-to-staff loop: display catalogue items, create and pay for a pickup order, surface it in Square Order Manager, track fulfilment state and update the customer.[4]

These platform capabilities show that a single-Square-control path is feasible. They do not prove Here’s Health currently uses the relevant menu, sold-out, inventory, channel, Order Manager, KDS, printer or preparation-time controls correctly.

## Smallest live test

Run one **approved, no-production-damage operating drill** in Square Sandbox or an agreed safe test location after Sam and Here’s Health approve access and name the café operator responsible for menu and pickup truth.

1. Select one location, one breakfast or lunch menu, five representative items, one modifier-heavy item and one item staff regularly mark unavailable.
2. Record the agreed Square operating surface for each change: Dashboard, POS, Order Manager or another verified Square product. Do not ask staff to update an app-only spreadsheet.
3. Prove an initial location-filtered menu sync into a test app or a plain inspection receipt. Compare item, variation, modifier, price, menu placement and location visibility against Square.
4. Make four controlled changes through Square: price or description, item sold out, modifier sold out, and one menu/category or time-of-day change. Measure detection and propagation time and confirm that a stale cached client fails safely.
5. Restore one unavailable item and prove it does not reappear at the wrong location or before the Square state permits it.
6. Configure one scheduled pickup with an operator-approved preparation time and one same-day cut-off. Verify when the order appears to staff and that the customer-facing pickup time matches the authoritative Square fulfilment record.
7. Simulate one capacity exception using a checklist rather than custom code: a sudden sold-out item, a longer preparation time or a temporary stop to ordering. Confirm the named operator can make one approved change and see the expected customer and staff result without developer intervention.
8. Record a minimal receipt: Square location and object IDs, source version or timestamp, observed app version, change type, propagation time, customer-visible result, staff-visible result and operator sign-off. Store no credentials or customer/payment data in Ground Zero.
9. Ask whether the measured change frequency, recovery burden and business risk justify recurring paid monitoring. Do not infer willingness to pay from technical success.

## Evidence of success

The test passes only when:

- every test item, modifier and menu appears only at the intended location;
- all four controlled Square changes reach the test surface within an operator-accepted target, with no manual app re-entry;
- item and modifier sold-out state blocks purchase and restores correctly;
- a stale or unreachable sync fails conservatively rather than selling an unverified item;
- the scheduled pickup becomes visible to staff at the expected time and the app shows no earlier or unsupported promise;
- the named operator can execute and verify an exception from the agreed Square surface without developer help;
- the receipt clearly distinguishes source state, app observation and staff acceptance; and
- any recurring support proposal is backed by observed update frequency or drift, measured handling time and explicit client willingness to pay.

Stop and keep this as ordinary launch hardening if Square’s normal menu and order tools already provide a clean single-update workflow, changes are rare, the app can safely read the authoritative state on demand, or Here’s Health does not value a separate assurance commitment.

## What it replaces

The target replacement is **any app-owned parallel menu, sold-out list, location matrix or pickup-rule spreadsheet**, plus ad hoc developer intervention when café availability changes.

Ground Zero does not establish that Here’s Health currently uses such a parallel workflow. The first test must therefore verify the current operating path. If no duplicate path exists, this proposal replaces nothing beyond an unsafe implementation assumption and must not be sold as labour savings.

This proposal does not replace the operator’s responsibility to decide what is available, set preparation times, manage capacity or approve customer promises. It only tests whether those decisions can flow once from the authoritative Square surface to the app and staff workflow.

## Downside and constraints

- Square’s existing tools may already solve the problem; a custom sync service or dashboard could be needless engineering.
- A technically current catalogue can still be operationally wrong if the source menu, location channels, preparation rules or staff practice are wrong.
- Webhooks reduce latency but do not remove the need for startup, periodic and recovery reconciliation.
- Food-and-beverage sold-out decisions may be manual and temporary; inventory counts alone are not authoritative for all café items.
- Location-specific menu settings and channels can create subtle omissions or cross-location leakage if mapped incorrectly.
- Preparation time is not the same as dynamic collection-slot capacity. A custom capacity engine should not be built until direct operating evidence proves that Square plus a simple cut-off cannot meet the need.
- Sandbox behaviour does not prove production hardware, printer, KDS or staff behaviour. Final acceptance still requires an approved real-device and staff pilot.
- Overly aggressive caching can preserve stale availability; overly frequent polling can add cost and fragility.
- Treating this as a new paid service before observing repeated work would inflate scope and distract from the six-week critical path.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, Square or another vendor;
- accessing any Square account, catalogue, order, payment, inventory or staff data;
- creating or changing a production item, modifier, menu, location, sold-out state, inventory count, order or fulfilment;
- changing café hours, cut-offs, preparation times, collection capacity or staff procedure;
- adding a sync service, capacity engine, monitoring line, feature, support charge or delivery promise to scope;
- storing credentials, payment data or customer identifiers in Ground Zero;
- spending money, changing production or publishing a claim; or
- representing that Here’s Health currently has stale menus, failed orders or an inefficient staff process.

Any account access, test change, order drill, staff observation, recurring support proposal or implementation requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

Official Square documentation inspected 18 August 2026. No Here’s Health Square account, catalogue, order, hardware, staff workflow or production app was inspected.

### Sources

[1] https://developer.squareup.com/docs/catalog-api/manage-menus — menu synchronisation, incremental updates, menu channels and location-specific configuration.

[2] https://developer.squareup.com/docs/inventory-api/monitor-sold-out-status-on-item-variation — manual and inventory-based sold-out state, location overrides, modifier availability and catalogue-version events.

[3] https://developer.squareup.com/docs/orders-api/fulfillments — pickup scheduling, preparation time and staff-surface activation behaviour.

[4] https://developer.squareup.com/docs/orders-api/order-ahead-usecase — catalogue-to-order-to-staff fulfilment loop for an order-ahead application.

## Connected vault notes

- [[context/business-opportunities-moc]] — nearest opportunity map
- [[companies/heres-health]] — client context and engagement boundary
- [[project_state/heres-health-app]] — current discovery state
- [[imports/heres-health-app-project-brief-2026-08-13]] — source requirements and unresolved café workflow
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — accepted Phase One direction and protected cut line
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — Square and Shopify source-of-truth boundary
- [[items/heres-health-week-one-discovery-and-technical-proof]] — existing P0 execution container
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]] — adjacent source-data assurance control, not duplicated here
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]] — adjacent order-event recovery control, not duplicated here
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]] — adjacent account-linking control
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/business-opportunities-moc]]

