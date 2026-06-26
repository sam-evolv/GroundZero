---
id: ob-no-show-deposits
company_id: openbook
domain: bizdev
title: Add refundable deposits to kill no-shows
rationale: No-shows are 18% of bookings and the top churn complaint from venues.
council_note: Bizdev pass · Effort L
effort: L
impact: 88
state: proposed
is_one_thing: false
source: morning-brief 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T06:30:00Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. No OpenBook live-system change was checked in this sync."
---

## Opportunity size
Very high. No-shows are 18% of bookings and the top churn complaint from venues, so even a small reduction has direct revenue value.

## Technical approach
- Add refundable or pre-authorized deposits at booking.
- Make deposit rules configurable by venue.
- Pair the deposit with reminders and pre-visit expectations.
- Handle refunds cleanly and make the policy obvious in checkout.
- Keep exception handling for high-trust or low-ticket bookings.

## Risks
- Deposits can add friction and reduce conversion if introduced bluntly.
- Payment handling and refunds need to be bulletproof.
- Some venues may prefer softer nudges before hard deposits.

## Effort
L. The payment and policy layer will take longer than the copy or UI.

## Market timing
Timely. Venues are increasingly open to revenue-protection mechanics, especially when no-shows are already hurting them.

## Connects to

- [[items/ob-no-show-deposit-workflow]] — automation wraps this wedge
- [[items/ob-cancellation-waitlist]] — sister wedge: no-show + cancellation compound
- [[items/ob-venue-health-radar]] — no-show rate is the key churn signal
- [[goals/ob-retention]] — primary feeding goal
- [[goals/ob-supply]] — retention makes supply growth net-positive
- [[launches/launch-2026-06-24-launch-openbook-no-show-reduction-wedge]] — launch brief for this wedge
- [[launch-signals/1782296564720-launch-2026-06-24-launch-openbook-no-show-reduction-wedge]] — venue replied wanting deposit pilot
- [[companies/openbook]] — parent company
- [[project_state/ob]] — live status


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-09]]
- [[companies/openbook]]
- [[context/business-opportunities-moc]]
- [[goals/ob-retention]]
- [[goals/ob-supply]]
- [[items/ob-cancellation-waitlist]]
- [[items/ob-loyalty-points]]
- [[items/ob-no-show-deposit-workflow]]
- [[items/ob-realtime-availability]]
- [[items/ob-venue-health-radar]]
- [[items/ops-daily-sync-digest]]
- [[project_state/ob]]

## Recommendation
This is the clearest commercial lever in OpenBook right now. It should move into a project once the wedge validation shows real venue pull and the payment rules are confirmed.
