---
title: Here’s Health Acuity-owned sauna booking release gate
date: 2026-08-30
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Acuity/Squarespace developer and help documentation, Apple App Review Guidelines, and the active Here’s Health discovery notes
---

# Here’s Health Acuity-owned sauna booking release gate

## Bounded proposal

Add one **Acuity-owned sauna/cold-plunge booking proof** to [[items/heres-health-week-one-discovery-and-technical-proof]] before Phase One promises a native booking integration or treats the reported Acuity-to-Square relationship as de-risked.

The launch-biased route is:

1. keep Acuity as the availability, booking and sauna-payment source of truth;
2. open a direct Acuity scheduling route for the exact sauna appointment type and calendar inside a release-mode mobile web view only if it passes on physical iOS and Android devices;
3. retain the Acuity-hosted page in the system browser as the safe fallback; and
4. defer a custom native availability, booking or payment interface unless the hosted route fails a measured customer requirement and the additional scope is separately approved.

This is not a new product or active item. It is a small architecture and operations receipt inside the existing Week 1 gate. It preserves [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]: the app presents one brand, while Acuity remains responsible for the existing sauna transaction rather than being silently replaced.

## Why this clears the research bar

### Verified Ground Zero fit

- [[companies/heres-health]] and [[project_state/heres-health-app]] record the intended sauna/cold-plunge release surface, but the live Acuity account and the reported Square connection have not been inspected.
- [[items/heres-health-week-one-discovery-and-technical-proof]] already requires the sauna route to be mapped before scope and delivery are locked.
- The project state already names a safe link fallback if a native integration cannot be proven before scope freeze.
- The controlling decision protects a cut line for sauna integration and forbids launch scope from expanding without technical proof.
- A Ground Zero search on 30 August 2026 found Acuity references and the open integration question, but no existing brief that turns the sauna route into a release-shaped test or distinguishes hosted booking from a custom API/payment build.

### Verified live evidence

- Acuity’s official developer documentation explicitly supports embedding its client scheduler in native iOS and Android apps through `WKWebView` and Android `WebView`.
- Acuity direct scheduling links can preselect a calendar and appointment type and can prefill name, email, phone, date/time, package or coupon code and intake-form fields. This permits a focused sauna route without rebuilding the scheduler.
- Acuity’s official payment documentation says clients can pay while booking, Square is a supported payment processor, and payments collected through Acuity are recorded in both Acuity and the connected processor account.
- Acuity can require full payment or a deposit at booking. Its add-ons can add optional paid extras to an appointment.
- Acuity’s official troubleshooting guide says the Acuity currency and Square location currency must match or payments can fail. The live Here’s Health configuration is therefore evidence that must be inspected, not inferred from the existence of a connection.
- Acuity webhooks cover appointment scheduled, rescheduled, cancelled and changed events. Notifications are signed, but the receiver must retrieve authoritative appointment details and handle retries, duplicate event shapes and disabled-webhook recovery.
- Acuity’s appointment API supports availability validation, forms, certificates and add-on IDs, but its create-appointment reference does not describe collecting the client’s card payment in that API call. A fully custom native booking-and-payment interface is therefore not established by the public appointment endpoint alone.
- Acuity’s API uses a numeric user ID plus API key for a single account and explicitly requires requests to come from a server because client-side requests expose credentials. No Acuity credential belongs in the mobile app.
- Apple App Review Guideline 3.1.3(e), last updated 8 June 2026, says physical goods or services consumed outside the app must use a payment method other than in-app purchase. A sauna booking can therefore use Acuity/Square checkout in principle; this does not waive normal privacy, quality, accessibility or review requirements.

## Smallest validation test

Run one **two-stage, release-shaped booking proof** only after Sam approves the exercise and Here’s Health names the Acuity account, operational and refund owners.

### Stage A — no-charge route and operational truth

1. With Sam authenticating directly, inspect the live Acuity plan, business timezone, currency, Square connection, Square location, sauna calendars, appointment types, capacity, duration, buffers, cancellation/reschedule rules, intake forms, reminder settings, packages, subscriptions and current payment terms. Record no credential or customer data in Ground Zero.
2. Identify one representative sauna/cold-plunge service and generate its Acuity direct scheduling link, restricted to the correct appointment type and calendar. Do not create a second schedule or duplicate inventory.
3. Exercise an owner-approved no-charge test slot or equivalent safe test route from availability through confirmation. Verify that the appointment appears once in the existing staff calendar and that cancellation and rescheduling update the same record.
4. Load the direct route in a release-mode iOS web view and Android web view on physical devices. Test navigation, keyboard, rotation, cookies, account login if enabled, reCAPTCHA, back/close behaviour, error recovery, accessibility, privacy disclosures and return to the app.
5. Repeat the same route in the system browser. Treat this as the launch fallback unless the embedded route is measurably better and passes every required state.
6. If café extras are already configured as Acuity add-ons, test one no-charge add-on and confirm how it appears to staff and in the customer confirmation. Do not infer that it creates a Square café catalogue order, kitchen ticket or KDS event.

### Stage B — payment truth

7. Inspect whether the live Acuity/Square setup offers an approved safe test mode. If it does not, stop until Sam and Here’s Health explicitly approve one low-value live transaction and its refund/reconciliation procedure.
8. With that approval, complete one representative sauna payment through the exact launch route. Verify amount, currency, appointment payment status, Square transaction reference, customer confirmation, cancellation/refund ownership and finance reconciliation. Use synthetic test identity and retain only redacted receipt identifiers.
9. Test every wallet or card method actually promised for launch on each physical platform. Acuity documentation says connecting Square or Stripe enables Apple Pay and Google Pay generally, but its embedded-domain guidance is processor-specific; do not advertise a wallet until it renders and completes in the exact Here’s Health route.
10. Subscribe to no production webhook during the research-only phase. If launch requires app status, reminders or future QR entitlements, first simulate signed webhook handling and idempotent reconciliation in an isolated environment; only then request approval for a narrowly scoped production subscription.
11. Produce one compact receipt: account and processor configuration (non-secret), route used, device/OS, appointment type/calendar, booking result, payment result or explicit payment blocker, staff visibility, cancellation/refund result, accessibility findings, fallback outcome and `pass`, `blocked` or `not applicable` for every gate.

### Pass criteria

The sauna rail clears the Phase One gate only when:

- one booking reaches the correct existing Acuity calendar exactly once;
- availability, capacity, buffers, timezone and cancellation/reschedule rules match staff practice;
- the chosen hosted route works on physical iOS and Android devices or the system-browser fallback is explicitly accepted;
- one approved payment reaches the correct Square account and reconciles to the Acuity appointment, or the launch scope is explicitly reduced to a no-payment booking route;
- every advertised wallet or payment method is evidenced on the exact launch path;
- customer confirmation and staff visibility agree on service, time, amount and add-ons;
- the support and refund owner is named; and
- no Acuity API key, Square secret or production credential is shipped to the client.

If the embedded scheduler fails but the Acuity-hosted browser route passes, ship the browser route and defer custom integration. If neither hosted route passes, stop and re-scope; do not jump directly to custom native payments.

## Assumptions to falsify

- Here’s Health’s Acuity account is the real sauna source of truth rather than a thin booking front end over another calendar.
- The reported Square connection is active, attached to the correct Irish Square location and configured in the same currency as Acuity.
- A direct appointment-type/calendar route can represent the launch service without exposing unrelated private services or calendars.
- The existing staff workflow sees, changes and refunds app-originated bookings without a second dashboard or manual re-entry.
- A hosted Acuity route provides acceptable mobile UX, accessibility, authentication, reCAPTCHA and payment behaviour inside a web view or system browser.
- Acuity add-ons, if used for a café extra, are operationally visible enough for the sauna team. They do not automatically prove Square café order, inventory, printer or KDS integration.
- Acuity client accounts can remain separate from the Here’s Health app/Shopify account for Phase One without confusing customers or forcing cross-system identity work.
- A custom native scheduler would create enough measured value to justify server-side credentials, availability race handling, payment orchestration, webhook reconciliation, privacy and support scope. Until measured, this assumption should be treated as false.

## Downside and constraints

- A web view can fail on wallets, cookies, reCAPTCHA, redirects, account login, accessibility or navigation even when the same page works in Safari or Chrome. Official support for embedding is not proof for the selected React Native stack.
- The Acuity/Square connection records payment in Square, but the reviewed official sources do not establish that a sauna booking or add-on becomes a Square café catalogue order, printer ticket, KDS event or inventory movement.
- Acuity does not automatically calculate and add tax; price and tax presentation must match the client’s accounting and legal treatment.
- The official payment docs are product-wide. The live Here’s Health account, Irish Square location, currency, plan and processor configuration control what actually works.
- Acuity client accounts have their own identity, consent and deletion behaviour. Silent account unification with Shopify, Square or the app would reopen the risks in [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]].
- Booking webhooks are event notifications, not a complete ledger. Duplicate or missed delivery and five-day disablement require reconciliation if the app later depends on them.
- A low-value live payment may be the only release-shaped payment proof. That introduces a real transaction and refund, so it cannot be run under this research authorisation.
- Custom native booking would add a server-side credential boundary and a second customer-state surface. It should remain post-launch unless the hosted route fails a paid, measurable requirement.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Here’s Health, Acuity/Squarespace, Square, Apple or Google;
- signing into or changing the live Acuity, Square, Shopify, Apple or Google accounts;
- creating, moving, cancelling or rescheduling a real customer appointment;
- creating a paid test, refund, add-on, package, subscription, calendar, appointment type, coupon, intake form or notification;
- connecting or disconnecting Square, changing currency, location, payment terms, tax copy or staff permissions;
- generating or storing an API key, OAuth client, access token, webhook secret or production credential;
- adding a production webhook, backend endpoint, deep link, web view or mobile dependency;
- changing production code, app-store metadata, the quote, the six-week promise or support terms; or
- presenting Acuity add-ons as Square café fulfilment without a separate staff-path proof.

Any account inspection, live booking, payment/refund, client contact, webhook, code change, device build, commercial promise or production mutation requires Sam’s explicit approval and Here’s Health’s informed agreement.

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
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[briefs/2026-08-28-heres-health-shopify-checkout-kit-architecture-gate]]

### Official external sources fetched on 30 August 2026

- Acuity embeds and dynamic links: https://developers.acuityscheduling.com/docs/embedding
- Acuity appointment creation API: https://developers.acuityscheduling.com/reference/post-appointments
- Acuity API authentication: https://developers.acuityscheduling.com/reference/quick-start
- Acuity OAuth2: https://developers.acuityscheduling.com/docs/oauth2
- Acuity webhooks: https://developers.acuityscheduling.com/docs/webhooks
- Acuity payments overview: https://help.acuityscheduling.com/hc/en-us/articles/16676947528205-Accepting-payments
- Acuity payment processors: https://help.acuityscheduling.com/hc/en-us/articles/16676914206477-Choose-a-payment-processor
- Acuity appointment payment choices: https://help.acuityscheduling.com/hc/en-us/articles/28051014042125-Choosing-how-clients-pay-for-appointments
- Acuity add-ons: https://help.acuityscheduling.com/hc/en-us/articles/16676886445837-Using-Acuity-Scheduling-add-ons
- Acuity processor transaction reconciliation: https://help.acuityscheduling.com/hc/en-us/articles/28052021570701-Review-Acuity-transactions-in-your-payment-processor
- Acuity wallet guidance: https://help.acuityscheduling.com/hc/en-us/articles/47747752135949-Accept-Apple-Pay-and-Google-Pay
- Acuity payment troubleshooting: https://help.acuityscheduling.com/hc/en-us/articles/28052219207949-Troubleshooting-payment-processors
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines

## Connected vault notes

- [[context/business-opportunities-moc]] — Here’s Health opportunity and release-gate cluster
- [[companies/heres-health]] — client and commercial context
- [[project_state/heres-health-app]] — live app status and unresolved Acuity evidence
- [[items/heres-health-week-one-discovery-and-technical-proof]] — parent active proof item
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — controlling source-of-truth and scope boundary
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]] — identity and privacy boundary
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] — store-declaration and release evidence gate
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]] — sibling Square café payment proof
- [[briefs/2026-08-28-heres-health-shopify-checkout-kit-architecture-gate]] — sibling Shopify retail checkout proof

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[briefs/2026-08-28-heres-health-shopify-checkout-kit-architecture-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

