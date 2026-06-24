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
updated_at: "2026-06-24T11:05:00Z"
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
- ob-retention
- OpenBook no-show reduction wedge
- launch brief from 2026-06-24

## Recommendation
This is the clearest commercial lever in OpenBook right now. It should move into a project once the wedge validation shows real venue pull.
