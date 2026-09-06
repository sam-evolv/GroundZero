---
title: Here’s Health client-owned app-store account readiness gate
date: 2026-08-31
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Apple Developer and Google Play Console account, verification and app-transfer documentation; active Here’s Health discovery notes
---

# Here’s Health client-owned app-store account readiness gate

## Bounded proposal

Add one **client-owned Apple Developer and Google Play organisation-account readiness receipt** to [[items/heres-health-week-one-discovery-and-technical-proof]] before the first bundle identifier, app record, TestFlight build, Play test track or public submission is created.

The default should be:

1. Here’s Health is the legal owner of both organisation accounts;
2. a Here’s Health representative with authority to bind the business holds Apple Account Holder and Google Play account-owner responsibility;
3. Sam/Donworth Studio receives only the least-privilege roles needed to build, test and submit; and
4. renewal, public contact, recovery, policy, signing and handover responsibilities are recorded before release work begins.

This is not a new product, commercial expansion or invitation to open accounts speculatively. It converts an existing launch blocker into a bounded Week 1 receipt and protects the client and Donworth Studio from a transfer-dependent release.

## Why this clears the evidence bar

### Verified Ground Zero fit

- [[companies/heres-health]] and [[project_state/heres-health-app]] record that app-store ownership is undecided and must be resolved before submission.
- [[items/heres-health-week-one-discovery-and-technical-proof]] already requires Apple and Google organisation-account status to be known before Week 1 is done.
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] says Here’s Health must own the Apple and Google organisation accounts.
- The 29 August meeting record makes the release target dependent on an unfixed café opening roughly two months away. Account verification is therefore a critical-path dependency, not post-build administration.
- A Ground Zero duplicate search on 31 August found the ownership requirement and release-account gap, but no bounded note covering the two platforms’ current verification lead times or the costs of publishing first under a Donworth-owned account.

### Verified official evidence

- Apple requires an organisation enrolling in the Apple Developer Program to be a recognised legal entity, use its D‑U‑N‑S number, and have an enrollee with authority to bind the organisation. Apple says a newly requested D‑U‑N‑S number can take up to five business days, followed by up to two business days for the information to reach Apple; Apple’s separate enrolment review follows after submission.
- Apple permits an organisation’s Account Holder role to move only to another employee on the same team who has legal authority to bind that organisation. The Account Holder remains responsible for legal agreements, submissions and membership renewal.
- Apple app transfer is not a clean pre-release ownership shortcut: its current criteria require the app to have at least one version released on the App Store. A transferred app keeps its Bundle ID, and capabilities, keys, webhooks and other configuration may require recipient-side follow-up.
- Google requires an organisation account to provide a D‑U‑N‑S number, legal organisation name and address through its payments profile, an organisation website, verified contact details, and public developer email and phone details. Google says obtaining a D‑U‑N‑S number can take up to 30 days.
- Google says both source and target Play developer accounts must be registered and active before an app transfer. Transfers preserve users, ratings and store-listing information, but reports, test groups and integrated-service permissions do not all transfer; the target account must recreate or relink parts of the release setup.

These sources do not prove Here’s Health lacks the required accounts or D‑U‑N‑S record. They prove that account ownership and verification can create a material launch delay and that “publish under Donworth now, transfer later” is not a neutral fallback.

## Smallest validation test

Run one **no-upload account-readiness check** after Sam asks Here’s Health to nominate the legal/account owner and Here’s Health explicitly agrees to the review.

### Stage A — status and ownership receipt

1. Record the exact legal entity intended to own the apps, its registered name/address, public website and whether its correct D‑U‑N‑S record already exists. Record status only; do not copy identity documents, payment details or credentials into Ground Zero.
2. Ask the nominated Here’s Health owner to sign in directly and report whether an active Apple Developer organisation membership and verified Google Play organisation account already exist. Do not use a Donworth account as a proxy.
3. For each platform, record `active`, `verification pending`, `not enrolled`, or `blocked`, plus the client-side owner, renewal/payment owner, official contact channel and any mismatch requiring the client to resolve.
4. Agree a least-privilege role matrix for Sam/Donworth Studio: build/test/submission access only, no transfer of Account Holder/account-owner status, payments profile, legal authority or recovery ownership.
5. Record the intended developer display name, public support contacts, privacy-policy owner, app ownership, support owner and offboarding route before any public account fields or app records are created.
6. Produce one redacted receipt with platform, legal owner, account type, verification state, D‑U‑N‑S match state, named client owner, Donworth role, renewal owner, open blocker and target resolution date.

### Stage B — only if enrolment is required

After separate approval from Sam and the named Here’s Health owner, the client owner completes the organisation enrolment, verification and payment directly. Donworth Studio may guide the process but does not accept legal terms, supply personal credentials or become the permanent owner. No bundle identifier, app record, certificate, signing key, test track or upload is required merely to prove account readiness.

## Pass criteria

The release-account gate clears only when:

- the exact Here’s Health legal entity and D‑U‑N‑S status are confirmed on both platforms;
- both organisation accounts are active and able to invite the agreed Donworth role, or an explicit dated verification blocker is on the release critical path;
- a Here’s Health representative holds Apple Account Holder and Google Play account-owner responsibility;
- renewal/payment, public developer contacts, recovery, legal agreements, privacy/support and offboarding owners are named;
- Sam’s access is least-privilege and revocable without transferring client ownership; and
- the six-week estimate and café-launch cut line reflect any unresolved D‑U‑N‑S, verification or account-review delay.

If Here’s Health cannot establish client-owned accounts before the safe submission date, stop and re-plan the release sequence. Do not silently publish first under Donworth Studio and describe later transfer as routine.

## Assumptions to falsify

- Here’s Health is a legal entity eligible for organisation enrolment under the exact name that should appear publicly.
- The business already has one correct D‑U‑N‑S record, or can obtain and reconcile one within the launch window.
- A Here’s Health owner or authorised employee can hold the platform-owner roles and accept legal agreements.
- Existing Apple or Google developer accounts, if any, represent the correct entity and remain active, accessible and verified.
- The organisation can provide durable domain-based contact routes and a named renewal/recovery owner.
- Least-privilege invitations give Donworth Studio the build, testing and submission access actually required.
- The client-owned route can clear before store submission without moving the launch-critical build into a Donworth-owned account.

## Downside and constraints

- Verification can move slower than the build. Google states that a new D‑U‑N‑S number can take up to 30 days; Apple states up to five business days for issuance plus up to two for synchronisation before enrolment review.
- Legal-name, address, D‑U‑N‑S and payments-profile mismatches can block verification and require client action outside Donworth Studio’s control.
- Google displays organisation legal and developer contact information publicly. The client must choose accurate, durable contact details knowingly.
- Client ownership adds coordination now, but Donworth ownership would add legal, renewal, recovery and handover risk later.
- Apple transfer is unavailable before at least one App Store release. Google transfer can break continuity of reports, test groups and service permissions even when the listing and users move.
- An active developer account does not prove that certificates, payment rails, privacy declarations, store metadata, review or production release will pass. Those remain separate gates.

## Approval boundary

This note authorises research and a client-reviewable checklist only. It does not authorise:

- contacting Here’s Health, Apple, Google or Dun & Bradstreet;
- signing into, creating, enrolling, verifying, paying for or changing any developer, payments or organisation account;
- accepting platform terms or becoming Account Holder/account owner on the client’s behalf;
- uploading builds, reserving identifiers, creating certificates or signing keys, opening test tracks, submitting apps or publishing public contact details;
- copying credentials, identity documents, payment data, D‑U‑N‑S records or recovery information into Ground Zero, chat or source control; or
- changing the commercial quote, launch promise, support obligation or ownership position.

Every enrolment, fee, legal acceptance, public-field change, account invitation, identifier, certificate, upload, submission or vendor contact requires Sam’s explicit approval and the informed action of the nominated Here’s Health owner.

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
- [[imports/heres-health-project-master-brief-2026-08-29]]
- [[imports/heres-health-meeting-record-addendum-2026-08-29]]

### Official sources checked 31 August 2026

- Apple Developer, D‑U‑N‑S Number: https://developer.apple.com/support/D-U-N-S
- Apple Developer, enrolling an organisation: https://developer.apple.com/support/app-account
- Apple Developer, transfer the Account Holder role: https://developer.apple.com/support/account-holder-transfer
- App Store Connect, app-transfer criteria: https://developer.apple.com/help/app-store-connect/transfer-an-app/app-transfer-criteria
- App Store Connect, overview of app transfer: https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer
- Google Play Console, required organisation-account information: https://support.google.com/googleplay/android-developer/answer/13628312?hl=en
- Google Play Console, manage verified organisation-account information: https://support.google.com/googleplay/android-developer/answer/13634081?hl=en
- Google Play Console, transfer apps between accounts: https://support.google.com/googleplay/android-developer/answer/6230247?hl=en

## Connected vault notes

- [[companies/heres-health]] — client and ownership context
- [[project_state/heres-health-app]] — live release blockers
- [[items/heres-health-week-one-discovery-and-technical-proof]] — parent evidence gate
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — controlling client-ownership decision
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] — adjacent store-declaration and release receipt
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]] — adjacent payment/build gate
- [[context/business-opportunities-moc]] — opportunity map

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

