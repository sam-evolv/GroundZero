---
kind: item
id: heres-health-week-one-discovery-and-technical-proof
company_id: heres-health
title: Here’s Health Week 1 discovery and technical proof
state: building
status: active
priority: P0
effort: M
impact: 95
source: Sam-supplied project brief, 2026-08-13
created_at: "2026-08-13T00:00:00+01:00"
updated_at: "2026-08-13T00:00:00+01:00"
---

# Here’s Health Week 1 discovery and technical proof

## Problem

The attractive whole-brand app thesis is materially larger than the original café pilot. A six-week production-candidate target is only credible after the real Square account, hardware, fulfilment path, Shopify configuration, app-account readiness and operating policies are inspected. Building before this proof risks a polished app that cannot be operated safely by café staff or released on time.

## Plan

### 1. Intake and access

- Review Conor’s email and all supplied material.
- Establish scoped Shopify and Square access securely.
- Confirm the legal entity, app ownership, account ownership and acceptance owners.
- Record dependencies without storing secrets in Ground Zero.

### 2. Square proof

- Map merchant and location structure.
- Inventory hardware, kitchen printers, KDS or Order Manager use.
- Inspect catalogue, categories, modifiers, availability and loyalty.
- Exercise one representative Sandbox flow: catalogue to configured item, collection time, payment/order creation, staff receipt, status transition, cancellation/refund handling.
- Confirm webhook verification, idempotency and missed-event reconciliation approach.

### 3. Café operations proof

- Map opening hours, cut-offs, preparation rules, collection-slot capacity, time-based menus, sold-out handling and location differences.
- Confirm allergen and dietary data ownership and disclaimers.
- Define how staff accept, prepare, complete and recover failed online orders.

### 4. Shopify proof

- Inspect plan, storefront access, product/collection structure, customer accounts, stock, discounts, fulfilment and checkout.
- Exercise catalogue, search, basket and Checkout Kit against an agreed safe environment.
- Confirm what order history and customer identity can be exposed safely in the app.

### 5. Product and commercial lock

- Separate Phase One into launch-critical, launch-optional and post-launch.
- Get explicit client acceptance of the whole-brand proposal versus the original café-only pilot.
- Define price, change control, ongoing support and third-party cost ownership.
- Re-estimate the six-week plan from evidence.

## Done when

- Square and Shopify proof receipts are recorded.
- The staff fulfilment path is demonstrated, not assumed.
- Apple and Google organisation account status is known.
- Legal, privacy, consent, allergen, support and refund owners are named.
- A signed or explicitly accepted Phase One scope exists.
- The six-week production-candidate plan has a dependency-aware critical path and a protected cut line.
- Week 2 can begin with three visual directions against a stable, evidence-backed customer journey.

## Risk controls

- Do not combine Square and Shopify baskets or transactions in version one.
- Do not allow rewards unification or AI scope to delay launch.
- Do not promise App Store public availability by the six-week build date.
- Do not hold production credentials in the mobile app or vault.
- Do not treat “Square says it is possible” as an integration proof.
- Do not begin full visual build before the operational order path is proven.

## Connected vault notes

- [[companies/heres-health]] — client company
- [[project_state/heres-health-app]] — live project state
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — strategic brief
- [[imports/heres-health-app-project-brief-2026-08-13]] — supplied source
- [[people/conor-heres-health]] — primary client contact
- [[people/keith-crowley]] — referral source
- [[items/_Index]] — active item queue
- [[context/business-opportunities-moc]] — opportunity map

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-14-heres-health-food-waste-margin-baseline]]
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]]
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]]
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]]
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[people/conor-heres-health]]
- [[people/keith-crowley]]
- [[project_state/heres-health-app]]

