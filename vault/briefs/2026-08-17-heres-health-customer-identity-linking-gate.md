---
title: Here’s Health customer identity linking and duplicate-control gate
date: 2026-08-17
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Square Customers and Loyalty documentation, official Shopify Customer Account API documentation, and the active Here’s Health discovery brief
---

# Here’s Health customer identity linking and duplicate-control gate

## Bounded proposal

Add one **customer identity linking and duplicate-control gate** to the Here’s Health Week 1 proof if Phase One retains a unified Account or combined presentation of customer history. The gate should prove that one app account can link to the correct Shopify customer and, where operationally necessary, the correct Square customer without silently merging the two systems, duplicating profiles or making café rewards part of the launch critical path.

The first deliverable is a narrow identity map and recovery receipt, not a master customer database, unified rewards product or customer-data platform. Shopify remains the authenticated source for Shopify customer-scoped profile and order data. Square remains the source for café customer and loyalty records. An app-owned identifier may store the explicit platform IDs and consent state needed to present a coherent account, while preserving separate commerce ownership.

This belongs inside [[items/heres-health-week-one-discovery-and-technical-proof]], which already asks what customer identity and order history can safely be exposed. It should not become a separate active item or paid support line unless real duplicate/linking drift creates a recurring operating burden that Here’s Health values.

## Why this clears the research bar

### Verified external evidence

Square’s official Customers documentation says `CreateCustomer` and bulk creation do not check for duplicate records. Square tells integrators to search by phone number, email address or reference ID before creating a profile. Its profile-management guidance also says customer consent must be obtained before storing collected information.[1][2]

Square does not support merging customer profiles through the Customers API. Its documentation warns that when profiles are merged through Square and the customer ID changes, searching orders with the new merged ID does not return orders tied to the former IDs. Square also warns that some Square Online orders may not include `customer_id`, so integrations should not assume one field yields a complete history.[1][2]

Square Loyalty is available in Ireland, but the loyalty account’s phone-number mapping can be changed independently of the phone number on the associated customer profile. This means a phone number is a useful search signal, not a safe permanent cross-system primary key.[3]

Shopify’s Customer Account API is a customer-authenticated GraphQL API. Shopify requires an OAuth 2.0 authorization flow and a token associated with the specific logged-in customer; the API is the intended source for that customer’s profile and order data.[4][5]

These platform properties create a real integration risk for the proposed unified Account and filtered-history presentation. They do **not** prove that Here’s Health currently has duplicate customers, fragmented consent or a paid identity-management problem.

### Verified Ground Zero fit

The adopted Here’s Health direction keeps Square and Shopify transactions separate while allowing a unified customer-facing profile, favourites, notifications and filtered history. The Phase One brief already names identity fragmentation as a principal risk and explicitly defers cross-system rewards if they threaten the six-week cut line.

The bounded commercial insight is therefore to use the launch proof to determine whether identity linking remains ordinary implementation hardening or becomes a recurring, paid customer-account assurance obligation. No new product is justified before direct account and workflow evidence exists.

## Smallest validation test

Run one **no-production identity drill** after Sam and Here’s Health approve the exact access and data scope.

1. Define one app-owned internal subject ID. Record only the minimum mapping required to the relevant Shopify customer ID and Square customer or loyalty ID; do not use email or phone as the durable primary key.
2. Prove Shopify login and customer-scoped order retrieval with a synthetic or explicitly approved test customer through Shopify’s supported OAuth flow.
3. In Square Sandbox or an agreed safe test location, search by normalised email, phone and an app reference ID before creating a test profile. Repeat the same signup to prove the flow reuses the intended profile rather than creating a second one.
4. Test three ambiguous cases with synthetic data: shared family email, changed phone number and an existing duplicate Square profile. The flow must stop for explicit resolution rather than guessing.
5. Demonstrate a non-destructive recovery receipt containing the app subject ID, platform IDs, consent purpose and timestamp, match method, ambiguity state and operator decision. Do not automate a Square merge.
6. Verify that Shopify history is shown only for the currently authenticated Shopify customer and that Square history is labelled separately unless completeness has been proven.
7. If Here’s Health approves a real-data check, run only an aggregate, minimised duplicate-rate review in the client-controlled environment; export counts and failure categories, not raw customer identifiers.
8. Ask whether recurring duplicate review, consent evidence and account-recovery support are worth including in paid ongoing support before building any dashboard or automation.

### Pass criteria

- repeated signup creates no duplicate Square profile in the tested path;
- Shopify data is inaccessible without the correct customer-scoped authorization and maps only to the logged-in customer;
- ambiguous email or phone matches fail closed and require an operator decision;
- the app can retain separate Square and Shopify platform IDs without presenting a false mixed-commerce history;
- a customer can revoke or correct the app-owned link without deleting or corrupting the underlying platform records;
- the drill establishes a named Here’s Health owner for identity disputes and recovery; and
- any recurring support proposal is backed by observed drift or workload plus explicit client willingness to pay.

If the app does not need a unified Account, Shopify login alone covers the required experience, Square profiles are unnecessary for launch, or the current data is already clean and low-touch, stop. Keep the control as implementation hardening and do not create a product or premium service.

## Assumptions to falsify

- Phase One genuinely needs one app account spanning both customer contexts rather than two clearly separate destinations.
- Shopify customer authentication can coexist cleanly with the chosen mobile architecture and existing store configuration.
- A Square customer profile is necessary for the café path rather than an avoidable data duplicate.
- Search-before-create plus an app reference ID can prevent most new Square duplicates.
- Existing Square duplicates or identifier changes are frequent enough to require an operator recovery path.
- Separate platform IDs can support a coherent presentation without implying one combined transaction or complete combined history.
- Here’s Health will pay for recurring identity assurance rather than treating it as ordinary support.

## Downside and constraints

- A custom identity layer adds security, privacy, account-recovery and support obligations to an already dense six-week scope.
- Email and phone can change, be shared or be entered inconsistently; neither is a safe permanent customer key.
- Square’s API merge limitation means destructive cleanup cannot be safely automated through the Customers API.
- A merged Square profile can still have incomplete order search under the surviving ID, so “all your café history” may overclaim completeness.
- An app-owned mapping can become a second source of truth unless its purpose is narrow and corrections are recoverable.
- Real customer-data sampling requires client approval, purpose limitation, access controls and a documented retention/deletion boundary.
- The safest launch may be to authenticate Shopify only and keep Square café ordering guest-like or separately identified.
- This work must not pull unified rewards, loyalty migration or mixed-commerce history back onto the launch path.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, Square, Shopify or another vendor;
- accessing Shopify, Square, loyalty, order or customer records;
- creating, editing, merging or deleting a production customer or loyalty profile;
- processing real customer identifiers, exporting a customer list or running a live duplicate scan;
- changing login, consent, account-recovery, privacy or retention policies;
- adding unified rewards, mixed history, a customer-data platform or a paid support line to scope;
- building a production identity service, dashboard or synchronisation process;
- spending money, changing production or publishing a claim.

Any account access, real-data test, identity design, contractual promise, recurring service or production implementation requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

Official platform documentation inspected 17 August 2026. No Here’s Health Shopify, Square, loyalty, customer, order or consent records were inspected.

## Sources

[1] https://developer.squareup.com/docs/customers-api/what-it-does — Square Customers API overview: duplicate creation risk, search-before-create, order/customer linking limitations and incomplete history after merges.

[2] https://developer.squareup.com/docs/customers-api/use-the-api/keep-records — Square customer-profile management: explicit consent, duplicate checks, reference IDs and unsupported API merges.

[3] https://developer.squareup.com/docs/loyalty-api/overview — Square Loyalty availability in Ireland and phone-number mapping behaviour.

[4] https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/getting-started — Shopify Customer Account API setup and OAuth 2.0 customer authorization.

[5] https://shopify.dev/docs/api/customer/latest — Shopify Customer Account API reference: customer-scoped profile and order access.

## Connected vault notes

- [[context/business-opportunities-moc]] — nearest opportunity map
- [[companies/heres-health]] — client context and engagement boundary
- [[project_state/heres-health-app]] — current discovery state and identity-risk boundary
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — adopted Phase One thesis and named identity-fragmentation risk
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — separate-commerce and deferred-rewards decision
- [[items/heres-health-week-one-discovery-and-technical-proof]] — existing P0 execution container
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]] — adjacent launch-integrity control
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]] — adjacent source-of-truth control
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]]
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]]
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-30-heres-health-acuity-sauna-booking-release-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

