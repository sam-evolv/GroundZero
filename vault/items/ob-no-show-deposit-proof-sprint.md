---
id: ob-no-show-deposit-proof-sprint
company_id: openbook
domain: growth
title: Validate OpenBook no-show deposits with five venues
rationale: The deposit wedge has one positive venue signal and strong internal pain evidence, but it lacks a measured policy and conversion baseline.
effort: S
impact: 91
state: proposed
priority: P1
is_one_thing: true
source: ground-zero-incubation 2026-07-18
created_at: "2026-07-18"
---

# Validate OpenBook no-show deposits with five venues

## Thesis

OpenBook should not commit to a broad payment build until it knows which deposit policy venues and guests will accept. A five-venue proof sprint can turn the documented 18% no-show problem and one positive venue reply into a commercial decision with real policy data.

## Opportunity size

At 362 recorded live venues, a deposit workflow that materially reduces the 18% no-show rate could improve venue economics and retention across a meaningful installed base. The immediate opportunity is not payment revenue. It is proof that OpenBook can protect venue revenue without depressing booking conversion. Even a small reduction in churn would compound across the venue base.

## Validation approach

1. Refresh the current venue, booking, no-show and churn baseline before recruitment.
2. Recruit five venues across at least two booking profiles.
3. Offer three policy shapes: refundable deposit, card pre-authorisation and reminder-only control.
4. Run manually or with minimal configuration for four weeks.
5. Measure booking conversion, no-show rate, cancellation timing, refund or release exceptions, guest complaints and venue willingness to pay.
6. Record the venue's preferred policy and the minimum configuration needed for self-serve rollout.

This is a supervised commercial experiment. Do not start a broad payments implementation from this note.

## Risks

- The recorded OpenBook state has not been refreshed since 1 July, so the 362-venue and 18% figures must be revalidated before sizing implementation.
- Deposits can reduce booking conversion or shift no-shows into late cancellations.
- A five-venue sample may overrepresent friendly early adopters.
- Manual policy handling can conceal operational cost and payment edge cases.
- Consumer disclosures, refunds and charge disputes require clear terms before any live money test.

## Effort

Small for policy interviews, baseline extraction and a concierge pilot design. Medium only if existing payment infrastructure cannot support a controlled test. Cap the first phase at five venue interviews and one written experiment protocol.

## Market timing

Timely because no-shows remain the top recorded churn driver and one venue has already asked for a deposit pilot. The strongest timing signal is direct customer pull, not feature fashion. Realtime availability should be verified first because bad inventory data would contaminate the pilot.

## Promotion gate

Promote the deposit workflow into a delivery project if:

- at least three of five venues agree to a live paid or commitment-backed pilot;
- the chosen policy does not materially reduce booking conversion;
- the pilot shows a credible reduction in no-shows or late cancellations;
- refund, release and exception paths can be specified without ongoing manual intervention;
- at least two venues state a price or retention commitment tied to the result.

## Recommendation

This is mature enough to become a bounded validation project after the OpenBook live-state refresh. It is the correct bridge between the existing deposit idea and a full payment build.

## Connected vault notes

- [[items/ob-no-show-deposits]] - commercial wedge
- [[items/ob-no-show-deposit-workflow]] - implementation path
- [[items/ob-realtime-availability]] - inventory prerequisite
- [[items/ob-cancellation-waitlist]] - recovery follow-on
- [[items/ob-venue-health-radar]] - retention measurement
- [[goals/ob-retention]] - primary commercial goal
- [[companies/openbook]] - parent company
- [[project_state/ob]] - live state to refresh
- [[launch-signals/1782296564720-launch-2026-06-24-launch-openbook-no-show-reduction-wedge]] - positive venue signal
