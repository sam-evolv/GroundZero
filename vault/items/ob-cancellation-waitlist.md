---
id: ob-cancellation-waitlist
company_id: openbook
domain: innovation
title: Auto-fill cancelled bookings from a live waitlist
rationale: OpenBook already has the supply-side problem and the no-show wedge. There is still no automated way to recover value when a booking cancels or a slot opens up.
council_note: New idea from gap analysis · Effort M
effort: M
impact: 76
state: proposed
is_one_thing: false
source: ground-zero-incubation 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T00:02:14+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. No OpenBook live-system change was checked in this sync."
---

## Opportunity size
High for utilisation. Every cancelled or unfilled slot is lost revenue and lost venue confidence. A waitlist that can automatically reoffer slots to interested guests improves fill rate, reduces manual chasing, and complements the no-show reduction wedge.

## Technical approach
- Let guests opt into a venue-specific waitlist for sold-out or cancelled slots.
- Monitor cancellations, pre-auth releases, and newly opened inventory.
- Reoffer the slot to the next qualified guest with a time-limited booking link.
- Respect venue rules for priority, party size, and lead time.
- Log every offer so venues can see why a slot was assigned.

## Risks
- Over-messaging can annoy guests if the waitlist is not tightly controlled.
- Race conditions can occur if multiple guests are offered the same slot.
- The waitlist only works if availability data is accurate in real time.

## Effort
M. The hardest part is the inventory and offer-state logic, not the UI.

## Market timing
Timely. Venue software is moving toward better yield management, and automated cancellation recovery is a straightforward way to make the product feel smarter without adding much operational overhead.

## Connects to

- [[items/ob-realtime-availability]] — waitlist needs accurate availability data
- [[items/ob-no-show-deposits]] — sister wedge: no-show reduction + cancellation recovery compound
- [[items/ob-no-show-deposit-workflow]] — same payment/reminder infrastructure
- [[items/ob-venue-health-radar]] — cancellation rate feeds the health score
- [[goals/ob-retention]] — this item feeds the retention goal
- [[goals/ob-supply]] — recovered slots improve net venue utilization
- [[companies/openbook]] — parent company
- [[project_state/ob]] — live status
- OpenBook supply growth

## Recommendation
This is a solid follow-on project after realtime availability and deposit workflows. It is commercially meaningful, but it depends on reliable booking state first.
