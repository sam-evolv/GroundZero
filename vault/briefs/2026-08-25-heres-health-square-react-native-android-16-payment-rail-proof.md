---
title: Here’s Health Square React Native Android 16 payment-rail proof
date: 2026-08-25
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Square In-App Payments SDK and React Native plugin documentation, Square’s current npm package metadata, official Google Play target-API policy, and the active Here’s Health discovery and release-gate notes
---

# Here’s Health Square React Native Android 16 payment-rail proof

## Bounded proposal

Add one **release-shaped native payment-rail proof** to [[items/heres-health-week-one-discovery-and-technical-proof]] before the app architecture, quote or delivery timetable treats Square payments as de-risked.

The proof should freeze an exact React Native/Expo native toolchain, pin Square’s current `react-native-square-in-app-payments` package, build the Android app with `targetSdkVersion 36`, and exercise one Square Sandbox order/payment path with buyer verification. If the required accounts and certificates are available, repeat the wallet path on physical Android and iOS devices.

This is not a new product or a separate active item. It is a narrow release gate inside the already-active technical proof. Only if repeated Square, React Native or store-policy drift later creates measured maintenance work and Here’s Health explicitly values it should it become a recurring support line.

## Why this clears the research bar

### Verified Ground Zero fit

- [[project_state/heres-health-app]] records that the Square commerce flow, credentials, order states, hardware and app-release path are still unverified.
- [[items/heres-health-week-one-discovery-and-technical-proof]] already requires an end-to-end Square proof before the six-week build and fixed-price scope are locked.
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] keeps the whole-brand mobile product and the commerce rail conceptually separate; this proof validates only the Square rail.
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]] and [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]] establish that payment success is insufficient without correct Square order, location, menu and pickup state.
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] already requires a production-candidate dependency and store-readiness receipt. The proposed build proof supplies the payment-SDK portion of that evidence rather than creating a parallel control.
- A duplicate and conflict search on 25 August 2026 found no Ground Zero note covering Android 16/API 36 compatibility for the Square React Native payment rail.

### Verified live evidence

- Square’s official documentation still presents an open-source React Native plugin for the native In-App Payments SDK on both iOS and Android.
- npm reports `react-native-square-in-app-payments` version `2.1.1` as current, with package metadata modified on 18 August 2026. The package repository currently develops against React Native `0.81.1` and exposes an Expo config plugin.
- Square’s current getting-started guide says Android SDK `1.6.9` and newer are built with Kotlin `2.3.0`, require Kotlin `2.2.21` or newer, and use OkHttp 5.x. It documents temporary Kotlin and packaging workarounds for bare React Native builds; the Expo config plugin handles those two workarounds.
- The same guide still shows `targetSdkVersion = 33` only as an example. Google Play’s official policy says that from **31 August 2026**, new Android apps and app updates must target Android 16/API level 36 or higher. A literal copy of Square’s example would therefore miss the store submission requirement six days after this note.
- This discrepancy does **not** prove Square’s SDK is incompatible with API 36. It proves that documentation-level confidence is insufficient and that the exact release toolchain must be built and exercised now.
- Square documents Sandbox support for the In-App Payments SDK, React Native card entry, Apple Pay and Google Pay nonce flows, and SCA buyer verification. Square says SCA should be invoked for all customer-initiated transactions, including digital-wallet payments, and that payment creation belongs on the backend.

## Smallest validation test

Run one **no-production, release-shaped payment proof** after Sam approves the exercise and the necessary Here’s Health/Square/Apple/Google test-account owners are named.

1. Freeze the proposed app toolchain: React Native or Expo version, `react-native-square-in-app-payments@2.1.1`, resolved native Square SDK versions, Gradle/Android Gradle Plugin, JDK, Kotlin and CocoaPods/Xcode versions. Record the lockfile and build identifiers.
2. Configure Android with `compileSdkVersion` and `targetSdkVersion` 36, a consciously chosen `minSdkVersion` of at least Square’s required 24, and the Kotlin/OkHttp packaging treatment required by the pinned dependency graph. Do not rely on the guide’s API 33 example.
3. Produce a signed release-mode Android App Bundle locally and inspect its manifest/target SDK. No Play Console upload is required for this first test.
4. In Square Sandbox, create one café pickup order for one location, collect a card nonce through the React Native plugin, run SCA buyer verification, and create the payment server-side with an idempotency key and the exact Square `order_id` and `location_id`.
5. Verify the returned Square order and payment records agree on amount, currency, order, location and terminal state. Record request/response IDs and redact tokens or customer data.
6. On a physical Android device, exercise Google Pay only if the Square application/location reports the method as eligible. On a physical iPhone, exercise Apple Pay only if Sam approves the certificate/account work; Square’s React Native guide says Apple Pay Sandbox testing is unsupported in the simulator.
7. Repeat one network interruption/retry and one buyer-verification failure. Confirm that idempotency prevents a duplicate charge/order and that the UI does not claim success until both payment and required order state are verified.
8. Produce one compact receipt: exact dependency versions, API target, device/OS, enabled payment methods, SCA result, Square order/payment IDs, failure-path result, unresolved warnings and `pass`, `blocked` or `not applicable` for each gate.

### Pass criteria

The native rail clears the gate only when:

- the release-mode Android bundle targets API 36 and builds without unresolved Square/Kotlin/OkHttp compatibility errors;
- card entry, SCA and backend payment creation succeed in Square Sandbox with no client-side access token;
- the payment is attached to the correct Square order and location and produces no duplicate on retry;
- at least one real Android device completes the core flow, with Google Pay tested or explicitly marked unavailable/blocked by account eligibility;
- the iOS build and Apple Pay path are tested on a physical device when the required client-owned Apple/Square accounts and certificates are available, or are explicitly recorded as a launch blocker;
- failure and ambiguous states are represented truthfully in the UI and receipt;
- the tested dependency set feeds the existing privacy/SDK-drift and release-readiness gates.

If API 36, the chosen React Native/Expo version or the native wallet path fails, stop and compare a bounded Square Web Payments/Checkout fallback before promising the native rail. Do not accumulate local patches or treat sandbox card success alone as production readiness.

## Assumptions to falsify

- Square’s current React Native plugin and resolved native SDKs compile and run correctly with the proposed API 36 release toolchain.
- The Expo config plugin, if chosen, applies all required Kotlin and OkHttp packaging changes without hiding a release-only failure.
- Here’s Health’s Irish Square seller location is eligible for the intended online card and wallet methods in EUR.
- SCA buyer verification can be completed through the React Native wrapper for card, Google Pay and Apple Pay paths actually included at launch.
- A Square order created for café pickup can be linked to the payment without introducing duplicate orders, location mismatch or a misleading success state.
- Client-owned Apple, Google Play and Square accounts can be made release-ready without Sam assuming long-term ownership of credentials or certificates.
- The maintenance burden is material enough to justify any recurring support line rather than remaining ordinary release hardening.

## Downside and constraints

- Square’s package being recently updated is not proof of compatibility with the exact Here’s Health stack or API 36.
- Sandbox does not reproduce issuer, production-wallet, settlement, refund, webhook-delay or café-load behaviour.
- Wallet availability is country, account, device, card and seller-eligibility dependent; a documented method must not be displayed unless the live application can actually initialize it.
- Physical-device wallet testing can require client-owned developer accounts, certificates and real cards. No credential transfer or account ownership should be inferred.
- Native payment SDKs increase release coupling to React Native, Kotlin, Gradle, Xcode, CocoaPods, store target levels and vendor SDK updates.
- A successful payment can still be operationally wrong if it references the wrong location/order or outruns live menu and pickup-capacity controls.
- The proof can expand into an implementation sprint if strict stop conditions are not kept. Its purpose is a go/no-go architecture receipt, not production completion.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Here’s Health, Square, Apple, Google or another vendor;
- accessing or changing Square, Apple Developer, App Store Connect, Play Console, Shopify or production accounts;
- creating certificates, uploading a build, submitting an app, processing a live payment or using customer/order data;
- spending money, accepting platform terms on the client’s behalf, changing the quote, or promising wallet availability;
- modifying production code, credentials, Square catalogue/order configuration or live webhooks;
- converting this gate into a paid recurring service without observed maintenance burden and explicit agreement.

Any account access, certificate work, physical-wallet test, client contact, store upload, live transaction, commercial proposal or production change requires Sam’s explicit approval and the relevant Here’s Health owner’s informed agreement.

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
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]]
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]]

### Official external sources fetched on 25 August 2026

- Square React Native plugin overview: https://developer.squareup.com/docs/in-app-payments-sdk/react-native
- Square React Native plugin repository and getting-started guide: https://github.com/square/in-app-payments-react-native-plugin and https://github.com/square/in-app-payments-react-native-plugin/blob/master/docs/get-started.md
- npm package metadata: https://www.npmjs.com/package/react-native-square-in-app-payments
- Square In-App Payments SDK installation/Sandbox support: https://developer.squareup.com/docs/in-app-payments-sdk/installation
- Square buyer verification/SCA: https://developer.squareup.com/docs/in-app-payments-sdk/verify-buyer
- Square React Native Apple Pay guide: https://github.com/square/in-app-payments-react-native-plugin/blob/master/docs/enable-applepay.md
- Square React Native Google Pay guide: https://github.com/square/in-app-payments-react-native-plugin/blob/master/docs/enable-googlepay.md
- Google Play target API requirements: https://support.google.com/googleplay/android-developer/answer/11926878 and https://developer.android.com/google/play/requirements/target-sdk

## Connected vault notes

- [[context/business-opportunities-moc]] — Here’s Health opportunity and release-gate cluster
- [[companies/heres-health]] — client and commercial context
- [[project_state/heres-health-app]] — live app status and unresolved evidence
- [[items/heres-health-week-one-discovery-and-technical-proof]] — parent active proof item
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — controlling architecture boundary
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]] — order/payment integrity and measured support question
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]] — order promise and location truth
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] — dependency and store-release evidence gate

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]]
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]]
- [[briefs/2026-08-28-heres-health-shopify-checkout-kit-architecture-gate]]
- [[briefs/2026-08-30-heres-health-acuity-sauna-booking-release-gate]]
- [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

