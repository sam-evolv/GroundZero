---
title: Here’s Health Shopify-only replenishment reminder proof
date: 2026-08-21
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Shopify protected-customer-data and customer-segmentation documentation, Irish Data Protection Commission direct-marketing FAQs, and Sam's active Here’s Health source brief
---

# Here’s Health Shopify-only replenishment reminder proof

## Bounded proposal

After the launch-critical Here’s Health work is stable, test one **Shopify-only replenishment reminder** for a small set of repeatable retail products. Start with a client-controlled order-history analysis to determine whether any product has a sufficiently consistent repurchase interval to justify a reminder. Only if that pattern exists, run one approved reminder against an existing Shopify marketing-consented cohort with a holdout group.

This is not a launch feature, subscription programme, cross-system rewards layer or AI recommender. It must not use Square data, infer health conditions, promise a medical outcome or combine café and retail identity. The first proof should use Shopify’s existing purchase history and marketing state, no discount, one message and one measured reorder window. A recurring service or in-app feature is justified only if it creates incremental repeat orders without an unacceptable opt-out or support burden.

## Why this clears the research bar

### Verified Ground Zero fit

- Sam’s supplied Here’s Health brief explicitly names replenishment reminders, purchase frequency and repeat purchase behaviour as possible future value.
- [[project_state/heres-health-app]] already classifies replenishment reminders as deferrable unless discovery proves them low-risk.
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] keeps advanced personalisation and broader AI outside the protected launch path.
- No replenishment-specific brief or item existed in the vault before this note. The existing [[briefs/2026-08-20-heres-health-side-by-side-owner-performance-brief]] concerns aggregate owner reporting, not customer messaging or incremental reorder behaviour.

### Verified platform and regulatory evidence

- Shopify’s Admin GraphQL `Customer` object exposes purchase-history primitives including orders, last order and number of orders, but requires the `read_customers` scope and warns that access should be limited to legitimate app functionality.
- Shopify’s `customerSegmentMembers` query can group customers using ShopifyQL facts, includes an `email_subscription_status` example, and can sort by last order date and number of orders. This supports a narrow, Shopify-only cohort without a new cross-system customer database.
- Shopify’s protected-customer-data requirements require minimum-necessary processing, purpose limitation, consent decisions, retention controls, encryption and merchant transparency. A proof that exports identifiable customer history into a new datastore would therefore add material scope rather than being “just analytics.”
- Ireland’s Data Protection Commission says clear affirmative consent is the general rule for electronic direct marketing. Its existing-customer exception is conditional: the organisation’s own similar product, a clear objection opportunity when details are collected and in every message, and the first communication within 12 months of the original sale. The DPC separately states that individuals can object at any time and that their data must then stop being processed for direct-marketing purposes.

These sources establish technical feasibility and a strict consent/minimisation boundary. They do **not** establish that Here’s Health has predictable replenishment behaviour, an eligible audience or incremental revenue; the test below is designed to falsify those assumptions cheaply.

## Smallest validation test

Run only after Sam approves the test and Here’s Health approves the exact products, data use, legal basis and customer communication.

### Phase A — no-contact data-shape check

1. Ask a named Here’s Health retail owner to select three to five stable consumable products that customers plausibly buy repeatedly. Exclude products whose reminder timing could imply a health condition, dosage, treatment outcome or sensitive inference.
2. In a client-controlled environment, use an approved Shopify export or least-privilege read access to assemble only: an internal pseudonymous customer key, product or variant ID, paid order date, quantity, cancellation/refund state and marketing-subscription state. Do not export names, emails, phones, addresses or payment data for the analysis.
3. For each product, measure repeat-customer count, time between paid purchases, cancelled/refunded orders and how often a later purchase falls inside a useful reminder window. Freeze the method before looking for a favourable result.
4. Stop before messaging if no product has enough repeat observations for a stable interval, if the apparent interval varies too widely, if the eligible marketing-consented cohort is too small for a holdout, or if Here’s Health cannot name the purpose, retention period and deletion owner.

### Phase B — one consent-safe reminder proof

5. Select one product and one pre-agreed reorder window. Use only customers whose current Shopify marketing state is subscribed for the chosen channel; do not rely on the existing-customer exception for this first proof.
6. Randomly divide the eligible cohort into reminder and holdout groups. Freeze the primary measure, observation window and minimum worthwhile lift before sending.
7. Send one plain reminder through an approved Here’s Health-controlled marketing surface. Use no discount, health claim, scarcity claim or personalised medical language. Include the required sender identity and opt-out mechanism.
8. Measure incremental paid reorders in the agreed window, unsubscribe/complaint signals, failed deliveries, gross contribution after channel cost and staff time. Reconcile orders to Shopify and preserve corrections.
9. Interview the named operator after the result: did the proof replace an existing manual task, create support work, or merely duplicate a native Shopify capability?

### Pass criteria

Proceed only if all are true:

- at least one selected product shows a repeat interval stable enough for a pre-declared reminder window rather than post-hoc targeting;
- the eligible subscribed cohort is large enough to retain a genuine holdout under a pre-agreed measurement plan;
- the reminder cohort produces a pre-agreed worthwhile incremental reorder result over holdout without relying on a discount;
- unsubscribe, complaint and support signals remain within limits agreed before the send;
- every recipient was eligible at send time, every opt-out is applied, and no sensitive health inference or unnecessary identifier is processed;
- the operator judges the workflow useful rather than duplicate native Shopify work; and
- Here’s Health explicitly values a bounded paid pilot before any recurring automation or app feature is built.

If the interval is noisy, the audience is too small, native Shopify tooling already solves the job, the reminder has no incremental effect, consent evidence is unclear, or the message creates disproportionate opt-out/support burden, stop and keep replenishment outside scope.

## Assumptions to falsify

- A small set of Here’s Health retail products is repurchased on a timing pattern that is useful at individual-customer level.
- Purchase timing is a reasonable reorder signal rather than a misleading proxy for consumption or health need.
- A sufficient explicitly subscribed Shopify cohort exists for a holdout test.
- A reminder adds incremental orders rather than harvesting purchases that would have happened anyway.
- The operator can run or supervise the workflow without a new customer-data platform.
- The value is high enough to fund a bounded pilot after launch-critical work, rather than being ordinary marketing setup.

## Downside and constraints

- Health and wellness purchases can reveal or imply sensitive interests. Product selection and copy must avoid condition, dosage, treatment or diagnosis inference.
- A purchase interval does not prove product depletion; households share products, customers buy elsewhere, and pack sizes or usage vary.
- Customer/order history is protected data. New exports, retention or third-party processing can create more privacy and security scope than the commercial value warrants.
- Poorly timed reminders can feel intrusive, increase unsubscribes and damage trust.
- A small cohort can create a false positive. The holdout and success threshold must be fixed before the send and the result treated as directional unless the sample supports stronger inference.
- Shopify-native segmentation or automation may already be sufficient. If so, the correct outcome is configuration and operating guidance, not custom software.
- This work competes with the accepted six-week integration path and must remain post-launch or explicitly separately funded.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, customers, Shopify, a lawyer or another vendor;
- accessing or exporting any Shopify customer, order, marketing-consent, product or payment data;
- creating a customer segment, marketing automation, email, push notification, discount, subscription or campaign;
- deciding that consent or the existing-customer exception applies, or giving legal, medical, nutrition or compliance advice;
- inferring a customer’s health condition, dosage, diagnosis, treatment, deficiency or sensitive category;
- adding replenishment, personalisation, protected-customer-data access or a paid service to the six-week scope;
- changing production, installing an app, spending money or publishing a claim; or
- representing that Here’s Health currently has a retention problem, predictable replenishment demand or an eligible audience.

Any client contact, account/data access, legal-basis decision, live cohort, customer message, paid proposal, implementation or production change requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

- Canonical venture context: [[companies/heres-health]], [[project_state/heres-health-app]] and [[items/heres-health-week-one-discovery-and-technical-proof]].
- Original opportunity language: [[imports/heres-health-app-project-brief-2026-08-13]].
- Decision boundary: [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]].
- Duplicate check: Ground Zero search on 2026-08-21 found replenishment only in the source import and project-state deferral; no existing replenishment brief or item was present.
- External pages were fetched successfully from their official domains on 2026-08-21. Shopify Help Center pages were not used because they returned an access-verification response in this environment.

## Sources

- Shopify Developers — Work with protected customer data: https://shopify.dev/docs/apps/launch/protected-customer-data
- Shopify Admin GraphQL — `Customer`: https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer
- Shopify Admin GraphQL — `customerSegmentMembers`: https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembers
- Irish Data Protection Commission — Is consent explicitly required for all cases of electronic direct marketing?: https://www.dataprotection.ie/en/faqs/direct-marketing/consent-explicitly-required-all-cases-electronic-direct-marketing
- Irish Data Protection Commission — What rules apply to electronic direct marketing?: https://www.dataprotection.ie/en/faqs/direct-marketing/what-rules-apply-electronic-direct-marketing
- Irish Data Protection Commission — Can customers object to electronic direct marketing?: https://www.dataprotection.ie/en/faqs/direct-marketing/can-customers-object-electronic-direct-marketing

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/heres-health]] — client and commercial context
- [[project_state/heres-health-app]] — live discovery state and launch cut line
- [[items/heres-health-week-one-discovery-and-technical-proof]] — active evidence gate; this proposal must not enlarge it without approval
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — separate-commerce and launch-priority decision
- [[imports/heres-health-app-project-brief-2026-08-13]] — source that names replenishment and purchase-frequency opportunities
- [[briefs/2026-08-20-heres-health-side-by-side-owner-performance-brief]] — adjacent aggregate owner-intelligence proof, not a customer-messaging duplicate

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/business-opportunities-moc]]
