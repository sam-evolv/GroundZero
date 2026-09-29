---
title: OpenBook × GymMaster membership-attribution proof
date: 2026-09-27
type: opportunity-brief
status: proposed
company_id: openbook
source: Official GymMaster, Google Analytics and Irish DPC guidance plus bounded live inspection
---

# OpenBook × GymMaster membership-attribution proof

## Open question

Can OpenBook prove that an Empire Gym website visit becomes a GymMaster lead or membership, without building a second checkout, weakening consent, or distracting from the committed client-portal and billing work?

## Why this clears the evidence bar

### Verified

- [[project_state/ob]] records the live gap precisely: Empire Gym's membership CTAs now reach `empiregym.gymmasteronline.com`, but downstream enrolment and payment remain unverified.
- A bounded live inspection on 27 September 2026 found six public membership/day-pass links from `www.empiregym.ie` to the GymMaster portal. Neither the marketing page nor the inspected public GymMaster membership page loaded a Google Analytics or Google Tag Manager resource, exposed a GA/GTM identifier, or created a `dataLayer` during that inspection. This is a point-in-time browser observation, not proof about authenticated settings or every route.
- GymMaster's official **Track Signups with Google Analytics** help page, retrieved 27 September 2026 and displayed as updated seven days earlier, says its Member Portal can emit lead, membership-selection, checkout, payment-information and completed-purchase events to Google Analytics. It directs an operator to add a Google measurement ID under `Settings > Integrations > Analytics` and verify it with Tag Assistant.
- GymMaster's official custom-fields manual says a club can record `Source Promotion` on enquiries and sign-ups and report on that field. The contact-form path can use promotion-specific links; the regular sign-up path can ask the prospect to select a source.
- Google's official GA4 guidance says cross-domain measurement requires the same Google tag ID from the same web data stream on each domain. A working handoff should append a `_gl` linker parameter when the user moves between configured domains.
- Ireland's Data Protection Commission says analytics cookies require consent. Non-essential tracking must not be activated merely because the vendor supports it.

### Inference

OpenBook may be able to add a **membership-attribution receipt** to the existing gym-site subscription: not a new analytics platform, but a repeatable setup-and-verification service that proves whether the website produces leads and completed memberships inside the client's system of record. Empire Gym is the correct first proof because the cross-domain handoff already exists and the missing downstream evidence is explicit.

This is not yet a sellable feature. The decisive unknown is whether GymMaster's analytics integration can respect an Irish/EU consent decision across the separate marketing and portal domains. The public documentation proves that analytics events exist; it does not prove consent-mode support, Empire's plan entitlement, source continuity, or accurate revenue attribution.

## Bounded proposal

Test one **Empire Gym website-to-GymMaster attribution receipt** after the committed self-edit portal and billing acceptance, or fold the read-only discovery into that same client acceptance session if it adds no material delay.

The receipt would show only:

1. the exact marketing-page CTA used;
2. whether consent was granted or refused;
3. whether the cross-domain handoff retained one GA4 session;
4. which documented GymMaster funnel events appeared;
5. whether GymMaster recorded a source/promotion; and
6. the evidence gaps that remain between an analytics event, a valid membership and collected revenue.

Do not build a custom checkout, copy member data into OpenBook, or use the GymMaster API for this proof. Vendor-native settings and a manual receipt are enough to test the value.

## Falsifiable assumptions

| Assumption | Evidence that would falsify it |
|---|---|
| Empire's GymMaster plan exposes the documented Analytics integration. | The setting is absent, disabled or requires an uneconomic plan change. |
| A consented session can continue from `empiregym.ie` to `empiregym.gymmasteronline.com`. | The portal cannot share the same tag, the `_gl` linker is stripped, or the portal starts a new self-referral session. |
| Analytics can remain off until valid consent and stay off after refusal. | GymMaster loads the tag before consent, cannot receive consent state, or cannot provide an equivalent compliant control. |
| The documented funnel events are useful enough to prove outcome progression. | Tag Assistant/DebugView does not show the expected events or events cannot be tied safely to the originating session. |
| The receipt changes an owner decision. | Empire's owner would not use the result to alter a CTA, campaign or membership offer and would not value it in the monthly service. |

## Smallest validation test

### Phase 0 — no production change

With the client's explicit approval and an authorised account owner present:

1. Confirm, without saving anything, whether Empire's GymMaster account exposes `Settings > Integrations > Analytics`, source/promotion settings and an appropriate test or zero-charge membership path.
2. Ask GymMaster support or verify from authoritative account documentation whether the portal can defer analytics until consent and carry consent state across the two domains. Do not infer this from the existence of the measurement-ID field.
3. Inventory the current marketing-site cookie/consent surface and privacy wording. The 27 September public inspection found no visible cookie/analytics wording; legal adequacy was not assessed.

Stop if consent compatibility is absent or unclear.

### Phase 1 — approval-gated manual proof

Only after client/privacy approval:

1. Use one client-owned GA4 web stream and the same tag ID on both approved domains.
2. Configure cross-domain measurement for `empiregym.ie` and `empiregym.gymmasteronline.com`.
3. In separate clean sessions, verify both **refuse analytics** and **accept analytics** behavior. Refusal must produce no analytics hit; acceptance must preserve the handoff and add the `_gl` linker.
4. Use Tag Assistant/GA4 DebugView to observe a staff-controlled journey as far as a lead or `begin_checkout`-equivalent event without making a real payment.
5. Exercise a completed `purchase` event only through a vendor-supported test/zero-charge membership and only with explicit approval. Otherwise leave purchase and collected revenue unverified.
6. Compare the analytics result with GymMaster's `Source Promotion` record/report and produce a one-page manual receipt.

### Success gate

A successful proof requires all of the following:

- no analytics before consent and none after refusal;
- one consented cross-domain session rather than a self-referral;
- at least one documented downstream funnel event in the correct GA4 property;
- a matching, non-sensitive GymMaster source/promotion record where the chosen path supports it;
- no paid transaction, member-data export or production-code change; and
- an owner answer to: “Would this evidence change a CTA, campaign or offer decision?”

If any gate fails, do not productise the service. Record the failure as a vendor or consent boundary, not as a development backlog by default.

## Downside and constraints

- Consent may make end-to-end attribution incomplete by design; ad blockers and refusal will also reduce coverage.
- A separate vendor-controlled portal may not support a shared consent state even though it supports a GA measurement ID.
- GA events are evidence of browser activity, not proof that money settled, a membership remained valid, or a campaign caused the sale.
- Asking users to choose a promotion source adds friction and self-report bias. Promotion links are stronger for enquiries than the documented regular sign-up flow.
- The integration may be plan-gated or unavailable in Empire's tenant despite current public documentation.
- This cannot compete with [[items/ob-client-self-edit-portal-billing]], which remains OpenBook's committed commercial unblock.

## Approval boundary

Sam and the Empire Gym owner must approve any account access, analytics property, measurement ID, cookie/consent change, privacy wording, test member, test signup, payment-path exercise or production setting save. No outreach, paid media, live campaign, API extraction, real charge or member-data handling is authorised by this brief.

## Sources

- GymMaster, **Track Signups with Google Analytics**: https://www.gymmaster.com/help/help_track_signups_with_google_analytics/
- GymMaster, **Custom Fields / Promotions**: https://www.gymmaster.com/user-manual/manual_customfields/
- GymMaster, **Sign Up Online**: https://www.gymmaster.com/user-manual/manual_reference_howto_memberportal_signup/
- Google Analytics, **Set up cross-domain measurement**: https://support.google.com/analytics/answer/10071811?hl=en
- Google Tag Manager, **Troubleshoot with Tag Assistant**: https://support.google.com/tagmanager/answer/10039345?hl=en
- Irish Data Protection Commission, **Do I need consent for analytics cookies?**: https://www.dataprotection.ie/en/faqs/cookies/do-i-need-consent-analytics-cookies
- Live surfaces inspected read-only on 27 September 2026: https://www.empiregym.ie/ and one public `empiregym.gymmasteronline.com` membership route.

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/openbook]] — parent company
- [[project_state/ob]] — current Empire Gym and OpenBook state
- [[items/ob-client-self-edit-portal-billing]] — committed commercial unblock that retains priority
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] — scope and sequencing constraint
- [[goals/ob-retention]] — measurable client value may support retention
- [[goals/ob-supply]] — reusable outcome proof may support later venue acquisition

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openbook]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[goals/ob-retention]]
- [[goals/ob-supply]]
- [[items/ob-client-self-edit-portal-billing]]
- [[project_state/ob]]

