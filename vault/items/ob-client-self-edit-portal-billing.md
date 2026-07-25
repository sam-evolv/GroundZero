---
id: ob-client-self-edit-portal-billing
company_id: openbook
domain: bizdev
title: OpenBook client self-edit portal plus Stripe billing
rationale: OpenBook already has one live customer and a second prospect (Grace), but charging is blocked by a promised light self-edit portal. This is the single highest-value near-term revenue unblock in the portfolio.
council_note: New idea from 24 July reset gap analysis · Effort S-M
effort: M
impact: 92
state: building
is_one_thing: false
source: ground-zero-incubation 2026-07-24
run_date: "2026-07-24"
created_at: "2026-07-24T06:30:00+01:00"
updated_at: "2026-07-24T06:30:00+01:00"
sync_status: "Created from the 2026-07-24 OpenHouse/OpenBook reset decision. No OpenBook live-system state was checked in this incubation run."
---

## Opportunity size
Direct and immediate. This is not a speculative wedge, it is the release valve on revenue that already exists. One customer is live and Grace is a warm prospect. At €79/month, two to three customers cover most or all of the roughly €300/month AI and development subscription burn, which turns the portfolio cash-flow negative-to-neutral without new customer acquisition. Every additional venue on the same portal is near-pure margin because the content model is standardised.

## Technical approach
- Define the minimum content model first: the small set of editable fields (hero text, about text, opening hours, menu or service text) plus a photo set (add, replace, remove) per client site.
- Build a scoped self-edit portal so each client edits only their own site text and photos, with no code changes and no redeploy. Content should be data-driven from Supabase so edits render live.
- Enforce per-client permissions and tenant isolation so one client cannot see or edit another's content.
- Add Stripe monthly subscriptions at €79/month once the portal is usable and customer-facing terms are clear. Verify webhook and billing states (active, past_due, canceled) before charging anyone.
- Gate live-site editing on an active subscription so billing and access are one system.

## Risks
- Scope creep into a full CMS. The guardrail is the fixed minimum content model, not an open page builder.
- Billing edge cases (failed payment, cancellation, refunds) charging or locking a client incorrectly. Mitigate by testing webhook states before go-live.
- Photo handling (size, format, storage cost) if uploads are unconstrained. Constrain dimensions and count.
- Charging before the portal genuinely removes the manual edit burden would break trust with the first customer.

## Effort
S to M. The content model and edit UI are a focused slice on the existing stack. Stripe subscription plus webhook verification is well-trodden. The work is bounded precisely because the content model is deliberately small.

## Market timing
Not timing-sensitive. This is an existing promise to an existing customer. The value is realised the moment charging starts, so the only clock that matters is Sam's weekend capacity.

## Connects to
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] — the decision that scopes this work
- [[briefs/2026-07-24-openhouse-openbook-reset]] — full context and weekend order
- [[items/ob-prepared-leadgen-loop]] — the follow-on that this unblock gates
- [[companies/openbook]] — parent company
- [[project_state/ob]] — live status
- [[goals/ob-supply]] — protects and grows paying venue count


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[items/ob-prepared-leadgen-loop]]

## Recommendation
This is the clearest promotion candidate in the OpenBook queue and is already committed in the 24 July decision. Treat it as an active build, not a proposal. Sequence: minimum content model, then scoped edit portal tested against the live customer site, then Stripe €79/month with verified webhook states before any charge. Do not expand into a general CMS.
