---
title: Here’s Health side-by-side owner performance brief
date: 2026-08-20
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Square Orders and Shopify Admin API documentation plus Sam's active Here’s Health source brief
---

# Here’s Health side-by-side owner performance brief

## Bounded proposal

After the launch-critical Here’s Health app work is stable, test a **read-only owner performance brief** across one Square café location and the Shopify store. Present the two systems side by side, with explicit cut-off times and source labels, so Conor can see what changed, what needs attention and which figure is still provisional without opening multiple reports.

The first deliverable is a ten-day, manually supervised brief built from approved aggregate exports or least-privilege read access. It is not an AI dashboard, a combined transaction ledger, a customer-data platform or a launch dependency. Keep Square café and Shopify retail figures separate; do not invent a blended “total business revenue” measure until taxes, tips, refunds, discounts, fulfilment and reporting cut-offs reconcile under a client-approved definition.

This is a concrete translation of the already-recorded longer-term interest in owner intelligence across Square and Shopify and automated performance briefs. It should become a paid pilot only if the manual proof saves owner/manager time or repeatedly surfaces decision-worthy exceptions that the native reports do not make easy to act on.

## Why this clears the research bar

### Verified Ground Zero fit

- [[imports/heres-health-app-project-brief-2026-08-13]] records that Conor wants to discuss operational AI after returning at the end of August and explicitly names owner intelligence across Square and Shopify, automated performance briefs, management reporting and anomaly detection as future opportunities.
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] keeps management intelligence and operational AI post-launch and requires the consumer launch to remain the priority.
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] requires Square and Shopify commerce to remain operationally separate in Phase One. The brief must preserve that boundary rather than manufacturing one merged source of truth.
- No existing Ground Zero brief or item specifies a side-by-side owner operating brief. The existing food-waste brief is a separate, measured café-margin experiment; the commerce-integrity brief is a launch reliability control.

### Verified platform evidence

Square’s `SearchOrders` endpoint searches one or more locations and includes sales, returns and exchanges regardless of whether they entered through Square Point of Sale, Invoices or connected APIs. The query can filter and sort results and return either complete orders or lightweight order entries.[1] Square’s Orders API records order line items, fulfilment information, source, location and summary data, and can expose orders created anywhere in the connected Square account.[2]

That makes a location- and period-bounded café summary technically plausible, but not perfectly real-time. Square warns that offline Point of Sale orders can take up to 72 hours to reach Square and that their server-side `created_at` reflects transmission time rather than the original device creation time.[1] A daily brief must therefore label recent Square figures as provisional and reconcile late-arriving orders instead of presenting yesterday’s number as immutable.

Shopify’s GraphQL Admin `orders` query supports filtering by `created_at`, current total price, financial status and fulfilment status. Its documented order fields include creation time, financial and fulfilment states, total and subtotal price sets and line items.[3] This is sufficient to test a bounded retail order and fulfilment summary without first building a separate analytics platform.

Shopify grants normal order access only for the last 60 days by default; access to all orders requires the separately approved `read_all_orders` scope alongside the ordinary order scope.[4] A ten-day proof should remain inside the default window and must not request historical access merely because it might be useful later.

Shopify classifies customer-linked API resources as protected customer data. Its requirements prioritise data minimisation, declared purpose, bounded retention, encryption and limited staff access; unapproved protected fields can be redacted.[5] The first owner brief should use aggregate order and operational measures and omit names, emails, phone numbers, addresses and customer-level profiling.

## Smallest validation test

Run one **approved ten-business-day manual proof** using one established café location plus the Shopify store. If the new café is still ramping, do not use it as the baseline.

1. Ask Conor or a named operator what they currently check in Square and Shopify, how long it takes, which decisions follow, and which exceptions are easiest to miss. Record the current workaround before designing the brief.
2. Agree one reporting cut-off, timezone and definition sheet for each system. Keep Square Café and Shopify Shop in separate panels and label gross, net, tax, discount, refund and fulfilment semantics exactly as their source defines them.
3. Use an approved client-controlled export first. If read-only API access is later approved, request only the minimum current-order scopes needed for the ten-day window; do not request `read_all_orders` or protected identity fields.
4. Produce one concise daily brief with no more than:
   - **Café / Square:** closed order count, source-defined sales total, returns or refunds, notable item or daypart movement and unresolved fulfilment exceptions for the chosen location;
   - **Shop / Shopify:** paid order count, source-defined order total, unfulfilled or delayed orders, refunds/cancellations and notable product movement;
   - **Attention needed:** at most three evidence-linked exceptions with source, timestamp, why it matters, named owner and the next human decision;
   - **Data quality:** late Square offline orders, missing periods, revised figures, scope limitations and any failed reconciliation.
5. Reconcile each brief against the native Square and Shopify report or client-approved export on the following business day. Preserve corrections rather than silently overwriting the earlier figure.
6. Keep every exception rule deterministic for the proof—for example, an unfulfilled order older than an agreed threshold or a material day-over-day change. Do not introduce forecasting or model-generated causal claims.
7. Have the named owner rate each brief: useful action, useful context, already known, or noise. Measure reading time, preparation time, corrections and decisions changed.
8. At day ten, offer a bounded paid 60-day pilot only if the evidence clears the pass criteria. Automation should reproduce the accepted manual brief, not expand it.

### Pass criteria

- the owner can read the brief in under five minutes;
- at least three of ten briefs cause a useful action, changed question or earlier exception response, rather than merely restating native dashboards;
- the brief replaces at least 30 minutes per week of repeated report-switching or manual compilation, measured against the recorded baseline;
- every published figure reconciles to an approved Square or Shopify source under the agreed definition, with late revisions visible;
- Square and Shopify remain clearly separate, with no unsupported blended revenue, margin or customer metric;
- zero direct customer identifiers leave the client-controlled environment and no protected Shopify field is required for the proof;
- fewer than 20% of surfaced exceptions are rated as noise after rule adjustment; and
- Conor explicitly agrees that a defined 60-day paid pilot is worth funding before automation is built.

If native Square and Shopify reports already answer the owner’s questions quickly, the two systems cannot be reconciled without extensive custom accounting logic, the brief surfaces no repeated decisions, or there is no paid signal, stop. Preserve the definition sheet and do not create a product.

## Assumptions to falsify

- Conor or a manager currently spends meaningful time switching between Square and Shopify reports or receives fragmented updates from staff.
- A side-by-side brief is more useful than each platform’s native dashboard without pretending the systems share one ledger.
- Recent-order access and aggregate exports are sufficient for the first proof; all-order access and customer identity are unnecessary.
- The existing café provides a stable enough baseline while the new location is opening.
- Operational exceptions can be defined deterministically before any anomaly-detection model is warranted.
- Square’s late offline-order boundary can be handled through visible next-day reconciliation.
- The owner values a compact decision brief enough to fund ongoing preparation and maintenance.

## Downside and constraints

- Square and Shopify may already provide adequate native reports; another brief could add noise rather than leverage.
- Similar labels can carry different accounting meanings across systems. A combined total could be materially misleading if taxes, tips, discounts, returns, refunds, cancelled orders and reporting cut-offs differ.
- Square offline orders can revise recent periods for up to 72 hours, so a same-day brief cannot promise final numbers.[1]
- A ten-day test may be distorted by a launch, promotion, holiday, weather or low order volume.
- Order APIs show transactions and fulfilment, not purchasing cost, labour, waste or true margin. Do not infer profit from revenue.
- Customer-level segmentation would trigger a larger privacy, consent, access and retention burden and is outside this proof.
- Alert thresholds can become noisy or create false urgency if they are not tied to an owner decision.
- Automating before the manual brief is accepted would turn an uncertain reporting habit into maintenance debt.
- This opportunity must not compete with Week 1 discovery, the six-week consumer-product cut line or Sam’s higher-priority ventures.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, Square, Shopify or another vendor;
- accessing a Square or Shopify account, API, report, export, order, payment, fulfilment or customer record;
- requesting credentials, `read_all_orders`, protected customer fields or any write scope;
- exporting or storing names, emails, phone numbers, addresses, customer profiles, payment data or secrets;
- delivering a recurring brief, changing a staff reporting process or sending a notification;
- adding analytics, AI, anomaly detection, a dashboard, a paid pilot or support charge to the active proposal;
- changing production, installing an app, creating an integration or spending money; or
- claiming that Here’s Health currently has fragmented reporting, missed exceptions, wasted management time or a quantified revenue opportunity.

Any client contact, account access, data export, manual live proof, paid proposal, automation or production integration requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

Official Square and Shopify documentation was inspected on 20 August 2026. No Here’s Health account, report, export, order, customer record, staff workflow or native dashboard was inspected. The client need is recorded through Sam’s supplied project brief; the current reporting burden and willingness to pay remain open gaps.

## Connected vault notes

- [[context/business-opportunities-moc]] — nearest opportunity map
- [[companies/heres-health]] — client context and engagement boundary
- [[project_state/heres-health-app]] — current discovery state
- [[imports/heres-health-app-project-brief-2026-08-13]] — direct source for the later owner-intelligence conversation
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — active product and post-launch sequencing
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — separate-commerce boundary
- [[items/heres-health-week-one-discovery-and-technical-proof]] — P0 work this proposal must not delay
- [[briefs/2026-08-14-heres-health-food-waste-margin-baseline]] — adjacent measured café-margin experiment, not duplicated here
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]] — adjacent launch reliability control, not duplicated here
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Sources

[1] https://developer.squareup.com/reference/square/orders-api/search-orders — POST /v2/orders/search - Square API Reference
[2] https://developer.squareup.com/docs/orders-api/what-it-does — Square Orders API overview
[3] https://shopify.dev/docs/api/admin-graphql/latest/queries/orders — Shopify GraphQL Admin orders query
[4] https://shopify.dev/docs/api/usage/access-scopes — Shopify API access scopes
[5] https://shopify.dev/docs/apps/launch/protected-customer-data — Shopify protected customer data requirements
