---
title: Here’s Health app-privacy declaration and SDK-drift release gate
date: 2026-08-22
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Live Here’s Health privacy page, official Apple App Privacy and third-party SDK requirements, official Google Play Data safety and account-deletion requirements, Irish DPC guidance, GDPR Article 25, and the active Here’s Health discovery brief
---

# Here’s Health app-privacy declaration and SDK-drift release gate

## Bounded proposal

Add one **app-privacy declaration and SDK-drift release gate** to the Here’s Health release proof. Before either store submission, reconcile the mobile app’s actual data flows and third-party dependencies against:

- Apple’s App Privacy answers and generated privacy-manifest report;
- Google Play’s Data safety and account-deletion answers;
- the public Here’s Health privacy and privacy-choices surfaces; and
- one client-owned processing, retention and deletion map.

The first deliverable is a compact release receipt for one production-candidate build, not a legal certification, consent platform or new customer feature. It should show what the app and every integrated SDK transmit, why, whether it is linked to an account, where it is retained, who owns correction/deletion, and whether the two store declarations and public policy describe the same behaviour.

This is launch assurance already implicit in [[items/heres-health-week-one-discovery-and-technical-proof]] and the proposed recurring support boundary. It should not become a separate active item or paid service unless the first release proves that dependency, declaration and deletion drift creates recurring work that Here’s Health explicitly values.

## Why this clears the research bar

### Verified Ground Zero fit

- The planned product may include accounts, preferences, favourites, café and Shopify order history, notifications, analytics, diagnostics, location preference, marketing consent and dietary information.
- [[project_state/heres-health-app]] records that privacy, consent, account ownership and release readiness remain unverified.
- [[items/heres-health-week-one-discovery-and-technical-proof]] requires Here’s Health organisation accounts, named legal/privacy owners, secure integration access and a production-candidate release path.
- Sam’s source brief places privacy, GDPR, analytics, error monitoring, support, security updates, API maintenance and App Store releases inside the delivery or recurring-support boundary.
- No Here’s Health privacy-declaration, SDK-drift or store-data-safety proposal existed in Ground Zero before this note. The identity-linking brief concerns account mapping; the accessibility brief concerns transaction-path accessibility; the replenishment brief concerns approved customer messaging.

### Verified live public evidence

The public Here’s Health privacy page was fetched successfully on 22 August 2026 at `https://www.hereshealth.ie/pages/privacy-policy`.

The visible policy is framed around visitors to “our Website”. It also contains legacy-looking references including “DHS.ie does not collect or retain financial information”, Realex and PayPal. The page offers routes for amendment or deletion requests, but the inspected text does not describe a Here’s Health mobile app, Square café ordering, app SDKs, push notifications or mobile-store declarations.

This observation does **not** establish legal non-compliance, identify the current controller, or prove the policy is the only client privacy record. It does establish that the future app cannot safely inherit the public page unchanged or assume that store declarations will remain accurate without a client-approved data-flow review.

### Verified platform and regulatory evidence

Apple requires App Store Connect submissions to describe the app’s privacy practices, including data collected by integrated third-party partners. Apple says the developer is responsible for keeping the answers accurate and current, even when data is collected only for app functionality. Apple’s Xcode distribution workflow combines privacy manifests from third-party SDKs into a report intended to support accurate App Privacy labels; listed SDKs require a privacy manifest and, when used as binary dependencies, a signature.

Apple also requires apps that support account creation to offer a straightforward way to initiate deletion of the entire account and associated personal data. Manual completion may be acceptable if the user is told the timescale and receives confirmation, but deactivation alone is insufficient.

Google Play requires developers to complete a Data safety form describing collection, sharing and security practices, including behaviour of third-party libraries and SDKs. Google states that the developer alone is responsible for complete and accurate declarations and may take enforcement action when actual behaviour and the declaration differ. The requirement applies to closed, open and production testing tracks, not only public production.

For apps that allow account creation, Google requires an in-app deletion path plus a functional web resource through which a user can request deletion without reinstalling the app. Associated app-account data must also be deleted unless a legitimate retention reason applies and is clearly disclosed.

The Irish Data Protection Commission describes data protection by design as embedding privacy features and privacy-enhancing technologies at an early design stage. GDPR Article 25 requires appropriate technical and organisational measures that implement principles such as minimisation and, by default, limit the amount, extent, storage period and accessibility of personal data to what is necessary for each purpose.

These sources establish a concrete release and maintenance obligation. They do **not** prove that Here’s Health has an app-privacy failure, needs a custom compliance product, or will pay separately for the control.

## Smallest validation test

Run one **no-production store-readiness reconciliation** after Sam approves the exercise, Here’s Health names the controller/legal owner, and a representative production-candidate dependency set exists.

1. Freeze the tested app version, dependency lockfiles and backend release identifier. List every first- and third-party service that can receive data: Here’s Health backend, Square, Shopify, push provider, analytics, diagnostics, authentication and any support or marketing SDK.
2. For each data flow, record only: data category, source, destination, purpose, required versus optional, account-linked versus unlinked, retention owner, deletion/correction route, relevant permission or consent, and evidence source. Do not copy credentials or live personal data into Ground Zero.
3. Generate Apple’s privacy-manifest report from the distribution build. Verify required SDK manifests and signatures, required-reason API declarations and the absence of an unreviewed analytics or advertising dependency.
4. Draft, but do not submit, the Apple App Privacy and Google Play Data safety answers from the same inventory. Compare the treatment of account data, order data, diagnostics, push tokens, location, purchase history and marketing state across both stores.
5. Compare those draft answers with the live Here’s Health privacy page and the intended in-app privacy choices. Give the client/legal owner a short discrepancy list; do not rewrite policy or choose the legal basis on Sam’s behalf.
6. Exercise one synthetic account-deletion request in a sandbox or isolated test environment. Prove that app-owned profile, preferences, favourites, notification token and identity links enter a traceable deletion path; clearly separate any Square or Shopify records that the app does not own or is not authorised to delete.
7. Verify both user routes: a findable in-app deletion entry and a functional public web request path suitable for Google Play. Record owner, expected completion time, confirmation step, retained-data exception and source of that retention decision.
8. Produce one signed-off release receipt: tested build/dependencies, unresolved discrepancies, client owner, store-answer versions, policy version/date, deletion test outcome and explicit `pass`, `blocked` or `not applicable` status for each gate.
9. Ask whether Here’s Health wants the same reconciliation on each material SDK/data-flow change as part of paid support. Do not infer recurring value from the existence of store rules alone.

### Pass criteria

The test passes only when:

- every off-device data flow in the tested build has a named purpose, owner and evidence source;
- all integrated SDKs are represented in the inventory and required Apple manifests/signatures are present;
- Apple and Google draft declarations match the tested behaviour and each other where their definitions overlap;
- the public and in-app privacy surfaces have a named client/legal owner and no known contradiction with the draft declarations;
- account deletion is discoverable, testable and bounded across app-owned data, with Square and Shopify ownership explicitly separated;
- no health condition, diagnosis or other sensitive inference is created from dietary, purchase or preference data without a separately approved purpose and legal assessment;
- unresolved discrepancies block store submission rather than being converted into optimistic answers; and
- any recurring support line is backed by observed change burden plus explicit Here’s Health willingness to pay.

If the candidate uses only a small, stable dependency set, native store tooling plus a one-off client/legal review is sufficient, or Here’s Health does not value recurring reconciliation, keep this as ordinary release hardening and stop. Do not create a separate product.

## Assumptions to falsify

- The planned React Native app or backend will transmit enough account, commerce, notification, analytics or diagnostic data to require a non-trivial cross-store inventory.
- Third-party SDK behaviour and release changes create a realistic drift risk beyond a one-time form-filling exercise.
- Here’s Health can name the controller, policy owner, retention owner and deletion owner before submission.
- App-owned data can be separated cleanly from Square and Shopify source records for correction and deletion.
- The current public policy requires an app-specific update rather than an already-planned replacement or separate notice that was not inspected.
- A release receipt materially reduces rework, review risk or client ambiguity.
- The recurring burden is large enough for Here’s Health to fund it inside ongoing support.

## Downside and constraints

- Store declarations and privacy manifests are not legal compliance certificates.
- Apple and Google use different definitions and forms; forcing artificial one-to-one equivalence can create false confidence.
- Vendor privacy documentation may be incomplete or change after an SDK upgrade. Actual build and network behaviour still need bounded technical inspection.
- A public-policy discrepancy may be legacy content, an incomplete observation or already scheduled for replacement. It must be confirmed with the client rather than presented as a legal finding.
- Here’s Health, Square, Shopify and Sam’s delivery entity may have different controller/processor responsibilities that require client and legal determination.
- Account deletion can conflict with justified tax, transaction, fraud or support retention. The correct response is a documented owner and retention rule, not indiscriminate deletion.
- Purchase history, dietary preferences and health-food product interactions can support sensitive inferences even when the app does not ask for a diagnosis. Minimise collection and keep speculative profiling outside the launch path.
- A manually maintained spreadsheet can itself become stale. The receipt must be tied to an exact build and dependency set.
- This control could become scope creep if sold as a broad privacy programme rather than one release gate and one measured support question.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, Apple, Google, Square, Shopify, the DPC, a lawyer or another vendor;
- accessing App Store Connect, Play Console, Square, Shopify, customer, order, analytics, diagnostic or marketing data;
- editing or publishing the Here’s Health privacy policy, terms, consent language, store declarations or deletion page;
- deciding the legal basis, controller/processor allocation, retention period or compliance status;
- adding, removing or upgrading an SDK, creating an account, deleting real data or running a production network inspection;
- submitting an app or update, changing production, installing software, spending money or publishing a claim;
- adding a compliance certification, paid support line or delivery promise to the client scope; or
- representing that Here’s Health currently breaches privacy law or store policy.

Any client contact, account access, build inspection, policy change, store submission, live deletion test, legal decision, paid proposal or production change requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

- Canonical venture context reviewed: [[companies/heres-health]], [[project_state/heres-health-app]], [[items/heres-health-week-one-discovery-and-technical-proof]], [[imports/heres-health-app-project-brief-2026-08-13]] and [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]].
- Duplicate and conflict check: Ground Zero filenames and content were searched on 22 August 2026 for app privacy, privacy manifests, Data safety and third-party SDK declarations. No existing Here’s Health proposal was found. The proposal preserves the adopted separate-commerce boundary and does not reactivate any parked or rejected item.
- Live Here’s Health observation: `https://www.hereshealth.ie/pages/privacy-policy`, fetched successfully on 22 August 2026. No private account or internal policy was inspected.
- Official external pages below were fetched successfully on 22 August 2026. The built-in web gateway was unavailable, so the pages were retrieved directly from their official HTTPS origins.

## Sources

- Apple Developer — App Privacy Details: https://developer.apple.com/app-store/app-privacy-details/
- Apple Developer — Third-party SDK requirements: https://developer.apple.com/support/third-party-SDK-requirements/
- Apple Developer — Offering account deletion in your app: https://developer.apple.com/support/offering-account-deletion-in-your-app/
- Google Play Console Help — Provide information for Google Play’s Data safety section: https://support.google.com/googleplay/android-developer/answer/10787469?hl=en
- Google Play Console Help — Understanding app account deletion requirements: https://support.google.com/googleplay/android-developer/answer/13327111?hl=en
- Irish Data Protection Commission — Data protection by design and default: https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-design-and-default
- EUR-Lex — GDPR Article 25: https://eur-lex.europa.eu/eli/reg/2016/679/art_25/oj
- Here’s Health — live privacy policy: https://www.hereshealth.ie/pages/privacy-policy

## Connected vault notes

- [[context/business-opportunities-moc]] — nearest opportunity map
- [[companies/heres-health]] — client and engagement context
- [[project_state/heres-health-app]] — live discovery state and unverified privacy/release boundary
- [[items/heres-health-week-one-discovery-and-technical-proof]] — existing P0 execution container; this proposal must not enlarge it without approval
- [[imports/heres-health-app-project-brief-2026-08-13]] — direct source for planned data flows, release accounts and support boundary
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — adopted separate-commerce architecture
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]] — adjacent identity control, not a store-declaration duplicate
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]] — adjacent release gate, not a privacy-declaration duplicate
- [[briefs/2026-08-21-heres-health-shopify-replenishment-reminder-proof]] — adjacent post-launch customer-data experiment
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]]
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]]
- [[briefs/2026-08-21-heres-health-shopify-replenishment-reminder-proof]]
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[briefs/2026-08-28-heres-health-shopify-checkout-kit-architecture-gate]]
- [[briefs/2026-08-30-heres-health-acuity-sauna-booking-release-gate]]
- [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]]
- [[briefs/2026-09-05-heres-health-notification-state-and-consent-receipt-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

