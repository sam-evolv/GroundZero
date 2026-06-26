---
id: ob-venue-health-radar
company_id: openbook
domain: innovation
title: Score venue health to spot churn before venues leave
rationale: OpenBook tracks bookings and no-shows, but it does not yet turn those signals into a simple health score for venue retention.
council_note: New idea from gap analysis · Effort M
effort: M
impact: 79
state: proposed
is_one_thing: false
source: ground-zero-incubation 2026-06-26
run_date: "2026-06-26"
created_at: "2026-06-26T00:00:00+01:00"
updated_at: "2026-06-26T00:00:00+01:00"
---

## Opportunity size
High. OpenBook has a 362-venue base, so even a small churn reduction compounds well. A venue health score helps focus account management on the accounts most likely to slip, instead of reacting after revenue is already gone.

## Technical approach
- Combine no-show rate, cancellation rate, utilisation, response latency, and booking frequency into a simple score.
- Break the score into risk bands with clear reasons.
- Surface recommended playbooks for the highest-risk venues.
- Use the same scoring output in retention and expansion conversations.
- Keep the first version read-only so the team can validate the signal before automating outreach.

## Risks
- The score can be noisy when a venue has low volume.
- Oversimplified scoring can mask the real root cause of churn.
- If the recommendations are weak, the score becomes another dashboard nobody checks.

## Effort
M. The scoring logic is straightforward, but it needs good thresholds and a clean presentation to be useful.

## Market timing
Strong. SaaS teams increasingly use health scoring to prioritise retention work, and venue operators are becoming more comfortable with operational analytics that show risk earlier.

## Connects to
- ob-no-show-deposits
- ob-realtime-availability
- ob-retention
- OpenBook supply growth

## Recommendation
Good follow-on after the no-show reduction and availability work. This would give OpenBook a sharper retention layer without adding much operational overhead.
