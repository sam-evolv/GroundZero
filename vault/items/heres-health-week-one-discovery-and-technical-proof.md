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
source: Sam-supplied project briefs, 2026-08-13 and 2026-08-29
created_at: "2026-08-13T00:00:00+01:00"
updated_at: "2026-09-06T20:29:00+01:00"
---

# Here’s Health Week 1 discovery and technical proof

## Evening pre-sales proof checkpoint — 6 September 2026, 20:29 IST

- Exact reviewed imagery baseline `12a7bd57c036a52ecc21eb4860d6990afb4bbf65` is now the public preview: fresh anonymous HTTP readback matched the live root to its `app/index.html` SHA-256 `eeca71df1d105ccf048e7a59d1a0cb48dc7115eb4ecccfb60a6c695e02909f01`, and retained publication evidence covers 73 hosted images. The earlier 91-unresolved-slot blocker below is superseded.
- Bottom-navigation fix `14f1162bb827120b0e9ccfccc3ef0355e1274b23` is independently accepted with conditions on local Chromium/WebKit geometry, not on Sam's physical Telegram/iPhone surface and not on the hosted preview.
- Clean local candidate `a56fe568772753270cbb42060cffedecb83e41b0` combines that nav fix with the approved browser-local personal usual, motion code and branded share metadata; its exact bundle SHA-256 is `e484fc8b2b9ec012eb8d9d999b18663b0dc5defff819030656bbd24939715173`. Vera task `t_76caa3a8` reproduced the usual journey, café “Added ✓”, 159 imagery slots and 80 nav-flush checks, but issued `REJECT` because motion never binds, the share image contains a transient toast, detail copy is clipped/overpainted and Shop “Added ✓” was not visually reproduced. Rework `t_1446610d` is running with no repaired commit yet. Publication, signed-out hosted version/unfurl checks, short walkthrough and same-browser physical-phone close-out remain gated.
- This advances bounded pre-sales craft only. Square, Shopify, Acuity, staff workflow, account ownership, app-store, release-mode, legal/commercial and live-transaction decisions remain open; no client message was sent.

## Pre-sales browser-preview checkpoint — 6 September 2026

- Sam clarified that Here’s Health is not yet fully committed. The current browser work is bounded pre-sales proof, while production scope, integrations, accounts and commercial acceptance remain inside this Week 1 gate.
- Exact reviewed source `586546fac563de588507210dcedc6d1b77b1a9d2` / tree `83a005958df60a47ac135e524612e586147c9912` was published only after Sam approved those bytes. Live Vercel readback confirms the separate preview remains Ready and the existing production presentation remains separate. The release receipt binds 51 hosted files and anonymous Chromium/WebKit smoke, not physical-phone craft or production integration.
- Sam’s physical-phone screenshot then superseded the earlier functional acceptance by exposing uneven Shop card alignment and blank image tiles. The current local refinement has no candidate commit and no replacement publication. Its source manifest `c2fed85e1ffbeadffad6d23fdd2c518d36ef8ea19699299228cce7be2d20cc28` passed `39/39` source regressions and a partial two-engine premium slice, but correctly fails overall because 91 image slots across 31 entities remain unresolved; no final independent review ran.
- The next decision is whether inaccurate sample catalogue identities may be corrected to verified merchant products and clearly labelled illustrative café photography may fill otherwise unavailable slots, or whether exact client-provided assets are required. This does not close Square, Shopify, Acuity, staff workflow, account ownership, legal/commercial, release-mode, physical-device or live transaction gates.

## Accepted source handoff checkpoint — 5 September 2026

- The accepted local `747bbacccd663384c940e0d25c1d37d262f57840` source is now frozen in independently verified artifact `heres-health-app-source-747bbac.zip`: `2,409,097` bytes / SHA-256 `86b0cd87846704b1820af02a22e18d1fbe71e965926eec0e82a43c247dc0e170`, with all `160/160` tracked files matching the accepted Git tree.
- This does not advance Week 1 technical or commercial acceptance. The ZIP remains local and unuploaded; handing it to Astra requires Sam approval. Provider-account, transaction, staff-hardware, app-account, release-mode, physical-device and production gates remain open.

## Verified checkpoint — 31 August 2026

- The Week 1 evidence-mapping receipt was independently accepted with conditions against delivery base `9267fe0c77c07a9a88f9697de0a6f4b94af8b200`.
- A bounded local sauna Session Pass checkpoint at `747bbacccd663384c940e0d25c1d37d262f57840` was independently accepted with conditions. It truthfully derives date, time, guest count and peak/off-peak pricing, retains Acuity as the only live sauna boundary, and preserves the Square/Shopify separation and owner/customer privacy boundary.
- Independent checks passed format, lint, typecheck, build, production audit and `101/101` tests; current-source iOS Simulator evidence covered Home and Session Pass rendering plus a Home/Café/Shop/Sauna/Account regression sweep. This is simulator evidence, not physical-device or release acceptance.
- The item remains building. Square and Shopify account proofs, staff fulfilment and hardware mapping, app-account ownership, legal/commercial gates, a single-run first-run transition, release-mode proof, physical-device proof and live booking/payment proof remain open.
- The checkpoint is local only. No push, merge, deployment, provider contact or production mutation occurred, and the canonical remote still exposes no refs or writable branch.

## Problem

The owner has now accepted the whole-brand app direction in principle and requested no material redesign, according to Sam’s 29 August meeting record. The delivery risk has therefore shifted from proposal acceptance to technical and operational proof: the real Square account, hardware, fulfilment path, Shopify configuration, sauna-booking route, app-account readiness and operating policies still need inspection. Building past those unknowns risks a polished app that cannot be operated safely by staff or released against the new café deadline.

## Plan

### 1. Intake and access

- Inspect Conor’s supplied Shopify, Square and Acuity access with Sam authenticating directly in each account surface.
- Record account roles, merchants/locations, environments and least-privilege requirements without storing credentials in Ground Zero, chat, source control or the app.
- Confirm the legal entity, app ownership, account ownership and acceptance owners.

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

- Freeze the accepted product direction while separating launch-critical, launch-optional and post-launch scope.
- Define price, change control, ongoing support, third-party cost ownership and acceptance responsibilities.
- Re-estimate the release plan from evidence and protect the café-opening cut line.

### Parallel Donworth AI-discovery experiment (non-launch-critical)

Once the Phase One scope is explicitly accepted, secure access is available and Here’s Health has consented to the exercise, use Here’s Health as the first bounded Donworth Studio test of Searchable-style AI discovery measurement.

- Keep the experiment separate from the Square, Shopify and app-release critical path.
- Begin with public URLs, public brand information and an agreed buyer-prompt baseline.
- Before any non-public client data is uploaded, obtain an agency-authorised agreement, DPA, model-training opt-out and marketing-reference opt-out.
- Measure mentions, citations, competitors and referral evidence; verify important findings manually.
- Implement only separately approved website, structured-data or source-corroboration changes, then remeasure.
- Do not promise ranking, recommendation or distribution by any AI platform.

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

- [[imports/heres-health-project-master-brief-2026-08-29]] — Sam-supplied post-meeting master brief
- [[imports/heres-health-meeting-record-addendum-2026-08-29]] — Sam’s corrections on access, Acuity, decision-makers and app-store ownership
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
- [[briefs/2026-08-20-heres-health-side-by-side-owner-performance-brief]]
- [[briefs/2026-08-21-heres-health-shopify-replenishment-reminder-proof]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[briefs/2026-08-28-heres-health-shopify-checkout-kit-architecture-gate]]
- [[briefs/2026-08-30-heres-health-acuity-sauna-booking-release-gate]]
- [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]]
- [[briefs/2026-09-05-heres-health-notification-state-and-consent-receipt-gate]]
- [[briefs/substack-draft-2026-08-23-someone-still-has-to-pay]]
- [[briefs/substack-draft-2026-08-30-a-client-said-proceed]]
- [[briefs/substack-draft-2026-09-06-proceed-was-too-strong]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/dashboard]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-planday-brightpay-export-proof]]
- [[items/heres-health-westron-price-file-diff-proof]]
- [[items/ops-project-state-reconciler]]
- [[people/conor-heres-health]]
- [[people/keith-crowley]]
- [[project_state/heres-health-app]]

