---
id: ob-realtime-availability
company_id: openbook
domain: innovation
title: Live availability sync with venue calendars
rationale: Manual calendar updates cause roughly one in nine double-bookings.
council_note: Innovation pass · Effort L
effort: L
impact: 74
state: proposed
is_one_thing: false
source: morning-brief 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T06:30:00Z"
updated_at: "2026-08-13T12:01:00+01:00"
sync_status: "Checked 2026-08-13 12:01 IST. The previously recorded PR #214 was merged on 2026-06-08 and is unrelated to realtime availability; it changed only MCP booking-confirmation copy. No verified implementation PR is currently attached to this item."
---

## Opportunity size
Moderate but concrete. Manual calendar updates are causing roughly one in nine double-bookings, which is a real trust and support problem for venues.

## Technical approach
- Sync venue calendars to a canonical booking source.
- Detect conflicts before confirmation.
- Use webhooks where possible, polling where not.
- Keep a manual override for edge cases and venue-specific rules.
- Surface availability in the booking flow and in staff tools.

## Risks
- Calendar permissions and sync latency can create false availability.
- Venue calendars are often messy and inconsistent.
- If sync fails silently, the product can create more trust damage than it removes.

## Effort
L. More integration-heavy than it looks because reliability matters more than UI.

## Market timing
Strong. Realtime availability is now expected in modern booking software, and it is a baseline feature rather than a novelty.

## Connects to

- [[goals/ob-supply]] — supply growth depends on reliable availability
- [[goals/ob-retention]] — booking reliability reduces churn
- [[items/ob-no-show-deposits]] — no-show reduction wedge
- [[items/ob-cancellation-waitlist]] — waitlist needs accurate availability
- [[items/ob-no-show-deposit-workflow]] — same booking infrastructure
- [[companies/openbook]] — parent company
- [[project_state/ob]] — live status


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-28]]
- [[briefs/2026-06-30]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[briefs/daily-portfolio-brief-2026-07-17]]
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[briefs/daily-portfolio-brief-2026-07-19]]
- [[companies/openbook]]
- [[context/dashboard]]
- [[goals/ob-retention]]
- [[goals/ob-supply]]
- [[items/ob-cancellation-waitlist]]
- [[items/ob-no-show-deposit-proof-sprint]]
- [[items/ob-no-show-deposit-workflow]]
- [[items/ob-no-show-deposits]]
- [[project_state/ob]]


## Recommendation
This is project-ready. Ship it or keep it in the immediate implementation queue.

## Live-source correction, 13 August 2026

GitHub shows PR #214 as merged at commit `1e55666`. Its exact two-file scope was `app/api/mcp/route.ts` and `lib/mcp/manifest.ts`, changing MCP confirmation guidance. It does not implement calendar availability sync. The earlier `pr_ready` state and PR link were therefore stale metadata, not evidence of implementation. This item is proposed until an exact availability-sync candidate exists and is verified.
