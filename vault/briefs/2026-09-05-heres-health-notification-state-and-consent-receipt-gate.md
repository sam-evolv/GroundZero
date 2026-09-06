---
title: Here’s Health notification-state and consent receipt gate
date: 2026-09-05
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Apple, Android, Square, Firebase and Irish Data Protection Commission material plus the active Here’s Health discovery brief
---

# Here’s Health notification-state and consent receipt gate

## Bounded proposal

Add one **notification-state and consent receipt gate** to the Here’s Health release proof. Separate notifications into two product classes before implementation:

1. **Order and booking updates**, triggered by authoritative Square or Acuity state and used only to tell the customer that a requested transaction changed.
2. **Offers and news**, enabled only through a distinct, recorded marketing choice and independently switchable without disabling order updates.

Treat every push as a best-effort alert that points back to current in-app state, never as the order or booking source of truth. The app must still work when system notification permission is denied, and the marketing preference must not be inferred from a device-level notification grant.

The first deliverable is a synthetic cross-platform receipt for one café pickup order and one marketing preference change. This belongs inside [[items/heres-health-week-one-discovery-and-technical-proof]] and should not become a new active item, messaging platform or paid service unless live operation proves a recurring support burden that Here’s Health values.

## Why this clears the research bar

### Verified Ground Zero fit

- The accepted Phase One direction includes push notifications, live café order status, notification preferences, marketing consent, accounts and offers.
- [[project_state/heres-health-app]] still lists notification, privacy, consent, live Square and physical-device proof as open.
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]] establishes Square as the authoritative menu and pickup-promise surface.
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] requires push-token and consent flows to match store declarations and the public privacy surface.
- [[briefs/2026-08-21-heres-health-shopify-replenishment-reminder-proof]] covers a later marketing experiment, but no existing Here’s Health note defines the launch notification classes, degraded path or evidence receipt.

### Verified platform evidence

Apple’s App Review Guideline 4.5.4 says push notifications must not be required for an app to function. It also says promotional or direct-marketing push requires explicit opt-in through in-app consent language and an in-app opt-out. Apple’s notification documentation recommends requesting system permission in context, after the person can understand the benefit, and requires the app to respect settings that can change later.

Android 13 and later turns notifications off by default for newly installed apps until `POST_NOTIFICATIONS` is granted. Android recommends requesting permission in context and checking current authorization before sending. Since Android 8, every notification belongs to a user-controllable channel. That supports at least two visible channels, such as `Orders and bookings` and `Offers and news`, rather than one all-or-nothing stream.

Apple describes APNs as best effort: notifications can be reordered, throttled, stored, overwritten or not delivered. Firebase also states that Apple platforms do not guarantee background-notification delivery. A push receipt therefore cannot prove that the customer saw the current order state, and a missed push cannot be allowed to leave the app stale.

Square’s Orders API exposes pickup fulfilment states including `PROPOSED`, `RESERVED`, `PREPARED`, `COMPLETED`, `CANCELED` and `FAILED`, and recommends subscribing to Orders webhooks for fulfilment changes made in Square products. Those events can trigger customer alerts, but the app should retrieve the current order before rendering the deep-linked destination so a delayed or duplicated notification cannot move the customer backwards.

The Irish Data Protection Commission says the general rule for electronic direct marketing is clear affirmative consent, subject to a narrow existing-customer exception, and that recipients must be able to object with an opt-out route in each marketing communication. The inspected DPC pages discuss electronic mail, texts and email rather than determining the exact legal treatment of in-app push. The legal basis and channel-specific presentation therefore remain client/legal decisions. Apple’s explicit marketing-push rule applies regardless.

These sources establish a real launch and trust boundary. They do not establish that Here’s Health currently has notification failures, an unlawful marketing flow or a separately chargeable support need.

## Smallest validation test

Run one **no-production, synthetic notification-state drill** after Sam approves the exercise and Here’s Health names the owner of order messaging and marketing consent.

1. Define a compact notification matrix before coding: purpose, authoritative source, trigger state, deep-link destination, minimum payload, default interruption level, expiry, in-app preference and whether marketing consent is required.
2. Use only two launch classes: `Orders and bookings` and `Offers and news`. On Android, map them to distinct notification channels. On both platforms, expose separate in-app preferences and a route to system notification settings.
3. Request system permission only in context, such as after a test customer places the first pickup order or explicitly enables reminders. Denial must leave order history, current status, receipts and support routes usable in the app.
4. In Square Sandbox or an approved safe test location, move one synthetic pickup through representative fulfilment states. For each webhook, create an idempotent notification job tied to the Square order ID, fulfilment UID, source version or event ID, and target state.
5. Test delivery on one supported iOS device or simulator path and one supported Android device or emulator path. Open each notification and prove that the destination fetches current order state rather than trusting the payload text.
6. Replay a duplicate event, deliver an older event after a newer one, let one notification expire or fail, and open the app without tapping any notification. The displayed order state must remain current and must never regress.
7. Toggle `Offers and news` on with explicit test consent, send one clearly promotional test notification, then withdraw the preference. Prove that later promotional jobs are suppressed while order updates remain eligible. Do not rely on the operating-system grant as the marketing record.
8. Keep lock-screen content minimal: no detailed purchase history, dietary preference, payment information or inferred health information. The deep-linked, authenticated app may show the current authorised detail.
9. Produce one receipt tied to an exact build: source event and timestamp, notification class and purpose, consent/preference version where applicable, provider acceptance, device observation if available, deep-link result, authoritative state on open, denial/revocation outcome and unresolved gaps.

### Pass criteria

The drill passes only when:

- the app remains complete and usable with notifications denied;
- order updates and marketing are separately controllable;
- a system permission grant does not create marketing consent;
- a marketing opt-out suppresses later promotional sends without suppressing order-state access;
- duplicate, delayed, missed and out-of-order notifications cannot regress the in-app order state;
- every notification opens a valid, authenticated destination and refreshes authoritative state;
- lock-screen text exposes no unnecessary purchase, dietary, account or payment detail;
- the receipt distinguishes provider acceptance, device delivery or observation, user interaction and current Square state; and
- no recurring support line is proposed without measured operational burden and explicit client willingness to pay.

If native Square, Acuity or Shopify messaging already covers the required customer journey without confusing duplication, if Here’s Health chooses no marketing push at launch, or if one simple order-update class is sufficient, reduce or remove custom push scope rather than preserving it for completeness.

## Assumptions to falsify

- Here’s Health needs custom app notifications for café pickup or sauna booking rather than existing provider messages alone.
- Square fulfilment webhooks map cleanly to customer-meaningful states in the real staff workflow.
- A separate in-app marketing preference can be maintained without creating a second conflicting consent source beside Shopify or another client system.
- The release architecture can recover current order state after missed, expired or out-of-order pushes.
- Two notification classes provide enough control without a large preferences screen.
- Here’s Health can name the owner for message wording, consent evidence, opt-out handling and support.
- The measured notification and consent burden is large enough to justify recurring paid assurance rather than ordinary release maintenance.

## Downside and constraints

- Push delivery is best effort. Treating it as confirmation that an order is ready can create customer-service failures.
- Square, Acuity, Shopify and the app may each send messages. Duplicate or contradictory notifications are possible until the real account configuration is inspected.
- Android channels are durable user-facing identifiers whose behaviour cannot simply be changed after creation; careless naming or importance choices become release debt.
- iOS and Android permission states differ, so a single boolean cannot truthfully represent authorization.
- A custom preference ledger adds privacy, retention, audit and account-recovery obligations.
- The DPC sources reviewed do not settle the precise ePrivacy classification of app push. Client/legal review remains necessary for marketing claims and consent design.
- Aggressive engagement messaging could damage trust even where technically permitted.
- A sophisticated campaign or segmentation system would be scope creep and should remain outside the launch path.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, customers, Apple, Google, Square, Shopify, Acuity, Firebase, the DPC or a lawyer;
- accessing any production provider account, customer, order, booking, token, consent or campaign data;
- registering a production push credential, sending a real notification or changing a live notification preference;
- deciding the legal basis, existing-customer exception, consent language, retention period or compliance status;
- adding a campaign tool, analytics SDK, segmentation system, paid support line or delivery promise to scope;
- changing production code, schemas, app-store metadata, privacy materials or provider configuration;
- storing push tokens, customer identifiers, credentials or live consent records in Ground Zero;
- spending money, submitting an app, publishing a claim or contacting third parties.

Any account access, real-device send, production token, client-facing wording, legal decision, scope change, store submission or recurring service requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

Canonical Ground Zero context and duplicate checks were completed on 5 September 2026 against [[companies/heres-health]], [[project_state/heres-health-app]], [[items/heres-health-week-one-discovery-and-technical-proof]], the current opportunity MOC, recent Here’s Health briefs and the decision log. Vault content was searched for notification classes, notification consent, `POST_NOTIFICATIONS`, APNs, push opt-out and order-status notifications. No existing launch notification-state receipt proposal was found.

Official sources reviewed 5 September 2026:

- Apple App Review Guidelines, section 4.5.4: https://developer.apple.com/app-store/review/guidelines
- Apple, Asking permission to use notifications: https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications
- Apple, Sending notification requests to APNs: https://developer.apple.com/documentation/usernotifications/sending-notification-requests-to-apns
- Android, Notification runtime permission: https://developer.android.com/develop/ui/compose/notifications/notification-permission
- Android, Create and manage notification channels: https://developer.android.com/develop/ui/views/notifications/channels
- Firebase, Receive messages in Apple platform apps: https://firebase.google.com/docs/cloud-messaging/ios/receive-messages
- Square, Manage Order Fulfillments: https://developer.squareup.com/docs/orders-api/fulfillments
- Square, Orders API: https://developer.squareup.com/docs/orders-api/what-it-does
- Irish Data Protection Commission, consent for electronic direct marketing: https://www.dataprotection.ie/en/faqs/direct-marketing/consent-explicitly-required-all-cases-electronic-direct-marketing
- Irish Data Protection Commission, objection to electronic direct marketing: https://www.dataprotection.ie/en/faqs/direct-marketing/can-customers-object-electronic-direct-marketing

## Connected vault notes

- [[context/business-opportunities-moc]] - nearest opportunity map
- [[companies/heres-health]] - client context and engagement boundary
- [[project_state/heres-health-app]] - current release and provider gates
- [[items/heres-health-week-one-discovery-and-technical-proof]] - existing P0 validation container
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] - adopted source-of-truth boundary
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]] - adjacent Square availability and pickup proof
- [[briefs/2026-08-21-heres-health-shopify-replenishment-reminder-proof]] - adjacent post-launch marketing experiment
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] - adjacent privacy and store-declaration gate

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[briefs/2026-08-21-heres-health-shopify-replenishment-reminder-proof]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

