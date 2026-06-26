---
id: ops-meeting-followup-assembler
company_id: ground-zero
domain: ops
title: Draft meeting follow-ups and schedule holds automatically
rationale: Communication and scheduling work still needs manual follow-up drafting after calls, demos, and customer conversations.
council_note: Communication and scheduling pass | Effort M
effort: M
impact: 76
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T18:02:35+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Turns meeting notes or transcripts into a follow-up package. It drafts the recap email, lists action items, creates tasks, and proposes calendar holds or next-step bookings so the post-call admin does not have to be assembled by hand.

## Tools and APIs
- Gmail API or another email provider API
- Google Calendar API or a scheduling service
- Optional transcription input from recorded calls
- LLM summarisation and task extraction
- Markdown or issue tracker writes for the action list

## Estimated setup effort
M. The workflow is straightforward, but the integration points for email and calendar need careful permissions and testing.

## Expected time savings
30 to 60 minutes per meeting block, especially when several follow-ups stack up in one day.

## Priority ranking
P3

## Connects to

- [[items/oh-onboarding-packet-automation]] — customer onboarding
- [[goals/oh-funder-pitch]] — sales follow-up
- [[items/ops-daily-sync-digest]] — scheduling hygiene
- [[context/ops-automation-moc]] — MOC hub

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[context/ops-automation-moc]]

