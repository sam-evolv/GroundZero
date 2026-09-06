---
title: Here’s Health Shopify Checkout Kit React Native architecture gate
date: 2026-08-28
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Shopify Checkout Kit documentation, Shopify’s official React Native repository and release metadata, npm registry metadata, and the active Here’s Health discovery notes
---

# Here’s Health Shopify Checkout Kit React Native architecture gate

## Bounded proposal

Add one **release-shaped Shopify retail checkout proof** to [[items/heres-health-week-one-discovery-and-technical-proof]] before the React Native architecture, six-week estimate or fixed-price scope treats Shopify Checkout Kit as de-risked.

The proof should pin one exact React Native architecture and `@shopify/checkout-sheet-kit` version, build both release targets, create a cart through Shopify’s Storefront API, present its `checkoutUrl` in Checkout Kit, and verify one safe test order plus the completed, failed and cancelled lifecycle states on physical iOS and Android devices.

This is not a new product, a separate active item or a reason to expand the agreed platform. It is the Shopify counterpart to [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]] inside the existing Week 1 evidence gate. If the embedded kit does not pass, the bounded fallback is an external Shopify-hosted checkout using the same `checkoutUrl`, not a custom retail payment implementation.

## Why this clears the research bar

### Verified Ground Zero fit

- [[project_state/heres-health-app]] records that no Shopify catalogue, basket or Checkout Kit path has been proven against the real store configuration or an agreed safe test setup.
- [[items/heres-health-week-one-discovery-and-technical-proof]] already makes that path a launch gate before the six-week plan and commercial scope are locked.
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] keeps Shopify as the retail source of truth and forbids combining Shopify and Square transactions in version one.
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]] already requires the selected Shopify checkout path to pass the real transaction journey; this proposal supplies the architecture and lifecycle portion rather than creating a parallel control.
- A Ground Zero content search on 28 August 2026 found references to exercising Checkout Kit, but no existing note covering Checkout Kit `3.9.0`, its React Native architecture boundary or a release-shaped compatibility receipt.

### Verified live evidence

- Shopify’s official Checkout Kit documentation says the kit embeds Shopify checkout from a Storefront API cart or cart-permalink `checkoutUrl`; Shopify processes payment, applies tax and regulatory rules, creates the order, and emits completed, failed and cancelled callbacks.
- Shopify’s official npm package metadata lists `@shopify/checkout-sheet-kit` `3.9.0` as the latest release, published on 26 August 2026.
- Shopify’s official `3.9.0` release says it adds React Native New Architecture support in interop mode, so the same line can run with either architecture.
- The tagged `3.9.0` README raises the package’s React Native minimum from `0.70` to `0.76`. It states that `3.9.x` keeps the existing async API and supports old and new architectures, while the planned `4.x` line will require the New Architecture (TurboModules and Fabric).
- The package’s npm peer dependencies are wildcards for React and React Native, so package installation alone does not enforce the documented React Native minimum. The tested application lockfile and release build must carry the compatibility evidence.
- Shopify’s current developer page still summarizes React Native `0.70` as the minimum and Android JDK `17`, while the tagged `3.9.0` README says React Native `0.76` and Java `11`. This is an official-source documentation conflict, not proof that either runtime fails. Use the stricter compatible combination in the proof and do not infer safety from either summary alone.
- Shopify’s developer page says Checkout UI extensions and advanced checkout branding require Shopify Plus. Here’s Health’s Shopify plan is still unknown, so the Phase One proposal must not promise plan-gated checkout customization before the real account is inspected.

## Smallest validation test

Run one **no-production, release-shaped retail checkout proof** after Sam approves the exercise and Here’s Health names the Shopify test-account and acceptance owners.

1. Record the real Shopify plan, customer-account mode, checkout customizations, payment methods, markets/currency, fulfilment settings and any offsite-payment redirects relevant to the Irish store. Do not copy credentials or customer data into Ground Zero.
2. Freeze the proposed app toolchain: React Native or Expo version, old or New Architecture, `@shopify/checkout-sheet-kit@3.9.0`, lockfile, Android SDK/Gradle/JDK, Xcode/CocoaPods and release identifiers. Use React Native `0.76+`, JDK `17` and Android API `36` as the conservative proof baseline unless the selected stack provides stronger official constraints.
3. Produce local release-mode Android and iOS builds. Confirm the Android bundle targets API 36 and that the selected Checkout Kit architecture links without unresolved native-module, Fabric, TurboModule, WebView or CocoaPods errors.
4. Against a Shopify development store or explicitly approved safe test configuration, use the Storefront API to retrieve one representative product, create a cart, add a line, obtain `checkoutUrl`, and present it through Checkout Kit.
5. Complete one test order with a Shopify test payment method. Verify the amount, currency, line item, discount, tax, fulfilment choice and resulting Shopify order agree with the app state. Record only redacted IDs and build evidence.
6. Exercise the kit’s completed, failed and cancelled callbacks. Confirm that the app does not clear the basket, show success or expose order history until the authoritative Shopify result supports that state.
7. Exercise one offsite or accelerated method only if it is actually configured and eligible on the Here’s Health store. Verify return-to-app/deep-link behaviour on physical iOS and Android devices; mark unavailable methods explicitly instead of displaying them optimistically.
8. Test one signed-in and one guest path if both are proposed for launch. Confirm what identity and order history can be shown without attempting Square/Shopify identity unification.
9. Produce one compact receipt: exact dependency versions and architecture, plan-dependent features, device/OS, cart and checkout result, callback outcomes, deep-link result, accessibility handoff, unresolved warnings and `pass`, `blocked` or `not applicable` for each gate.

### Pass criteria

The Shopify retail rail clears the gate only when:

- the pinned release builds succeed on both platforms with the chosen React Native architecture and Android API 36;
- one representative Storefront API cart reaches the correct Shopify checkout and creates one matching safe test order;
- completed, failed and cancelled states are represented truthfully and do not corrupt or prematurely clear the basket;
- the return path works on physical iOS and Android devices for every payment method actually included at launch;
- guest and signed-in behaviour, order-history limits and plan-gated customization are documented from the real store configuration;
- the selected checkout passes the existing accessibility, privacy and release-readiness gates; and
- the six-week estimate includes any required React Native architecture migration or explicitly pins a compatible `3.9.x` line with an owner and upgrade trigger.

If the embedded kit or required React Native architecture fails, stop and compare the external Shopify-hosted `checkoutUrl` fallback. Do not build custom retail payments, silently downgrade package versions or expand into cross-system rewards.

## Assumptions to falsify

- The proposed app can run React Native `0.76+` and the chosen architecture without conflicting with the pinned Square payment rail or Expo/native build path.
- Checkout Kit `3.9.0` works with Here’s Health’s real Shopify plan, checkout configuration, Storefront API permissions and payment methods.
- A Storefront API cart and its `checkoutUrl` preserve the required products, discounts, tax, currency and fulfilment behaviour.
- The completed, failed and cancelled callbacks are sufficient for truthful app state without inventing a second retail order system.
- Here’s Health does not require Shopify Plus-only checkout extensions or branding to accept Phase One.
- Guest and signed-in customer paths can remain Shopify-owned without delaying launch for Square/Shopify identity unification.
- The embedded native kit produces enough conversion or experience value to justify its release coupling versus opening Shopify-hosted checkout externally.

## Downside and constraints

- A release two days old is current evidence, not production proof for the exact Here’s Health stack.
- Official Shopify sources presently disagree on minimum React Native and Java/JDK versions; a build receipt is stronger than choosing one sentence.
- Moving the whole app to React Native `0.76+` or the New Architecture may affect Square, notifications, analytics, storage and other native dependencies. This gate must be evaluated against the single application dependency graph, not in isolation.
- Shopify test payments do not prove production issuer behaviour, settlement, fraud checks, offsite-provider return, peak load or refund operations.
- Checkout UI extensions and advanced branding may be unavailable without Shopify Plus; the proposal should under-claim until the client plan is verified.
- Preloading, accelerated checkout, authenticated checkout and deep links can add privacy, certificate and lifecycle work beyond the minimum cart-to-checkout path.
- Checkout success does not prove correct catalogue, inventory, fulfilment or customer-history behaviour. Those remain separate Week 1 checks.
- The proof can turn into a migration sprint if the stop conditions are ignored. Its purpose is an architecture and scope receipt, not production completion.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Here’s Health, Shopify, Apple, Google or a payment provider;
- accessing or changing Shopify Admin, customer, order, payment, app-store or production accounts;
- creating a development store, private/custom app, Storefront token, certificate or deep-link association on the client’s behalf;
- processing a live order, using customer data, changing checkout, themes, functions, extensions, payment methods, markets, taxes or fulfilment;
- uploading a build, submitting an app, spending money, accepting platform terms, changing the quote or promising Shopify Plus-only features;
- modifying production code or converting this gate into recurring support without measured maintenance burden and explicit agreement.

Any account access, test-store creation, certificate or deep-link work, physical-device transaction, client contact, store upload, commercial proposal or production change requires Sam’s explicit approval and the relevant Here’s Health owner’s informed agreement.

## Provenance

### Canonical Ground Zero sources reviewed

- [[context/index]]
- [[context/model-pack]]
- [[context/dashboard]]
- [[context/business-opportunities-moc]]
- [[items/_Index]]
- [[companies/heres-health]]
- [[project_state/heres-health-app]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[decisions/_Index]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]

### Official external sources fetched on 28 August 2026

- Shopify Checkout Kit overview: https://shopify.dev/docs/storefronts/mobile/checkout-kit
- Shopify React Native Checkout Kit repository and tagged `3.9.0` README: https://github.com/Shopify/checkout-sheet-kit-react-native and https://github.com/Shopify/checkout-sheet-kit-react-native/tree/3.9.0
- Shopify `3.9.0` release: https://github.com/Shopify/checkout-sheet-kit-react-native/releases/tag/3.9.0
- npm package page and registry metadata: https://www.npmjs.com/package/@shopify/checkout-sheet-kit and https://registry.npmjs.org/@shopify/checkout-sheet-kit

Web search and extraction through the configured Nous gateway were unavailable during this run. The official URLs above were fetched directly over HTTPS; no secondary or search-result source was used.

## Connected vault notes

- [[context/business-opportunities-moc]] — Here’s Health opportunity and release-gate cluster
- [[companies/heres-health]] — client and commercial context
- [[project_state/heres-health-app]] — live app status and unresolved evidence
- [[items/heres-health-week-one-discovery-and-technical-proof]] — parent active proof item
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — controlling commerce boundary
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]] — transaction-path accessibility and ownership gate
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] — dependency and store-release evidence gate
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]] — sibling native commerce-rail proof

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[briefs/2026-08-30-heres-health-acuity-sauna-booking-release-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

