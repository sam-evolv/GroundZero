---
id: oh-warranty-triage-router
company_id: openhouse-ai
domain: operations
title: Route OpenHouse warranty issues automatically
rationale: Incoming homeowner issues need manual triage for type, urgency, and warranty relevance before they can be handled properly.
council_note: Issue triage pass · Effort M
effort: M
impact: 84
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T17:02:14Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## What the automation does
Classifies each inbound issue, decides whether it is urgent, tags warranty relevance, and routes it to the right queue. It should also draft a reply that asks for the missing details and keeps the premium tone intact.

## Opportunity size
High. Manual issue triage is a hidden cost in aftercare because every message has to be read, classified, and routed. Automating the first pass reduces response latency, prevents misrouting, and makes the support experience feel more organised to homeowners and developers.

## Technical approach
- Start with a read-only classifier that labels issue type, urgency, and warranty relevance.
- Route high-confidence cases into the correct queue.
- Draft a reply that requests missing details, but keep a human in the loop before anything is sent.
- Log the model confidence and the final human override so the system can be tuned.
- Tie the classifier to the same data model that powers the warranty filter and evidence pack work.

## Risks
- Misclassification can send an issue to the wrong queue.
- A poorly phrased draft can weaken the premium tone or overpromise a fix.
- Warranty relevance needs a clean ground truth or the router will become noisy.

## Effort
M. The first useful version is a classifier and queue router. The more time-consuming part is tuning confidence thresholds and review rules.

## Market timing
Timely. AI support triage is now a standard productivity play, but customers in proptech will only trust it if the tone is controlled and the escalation rules are tight.

## Connects to
- oh-guardrails-active
- oh-warranty-filter
- oh-warranty-evidence-pack
- OpenHouse aftercare OS

## Recommendation
Good project candidate, especially if it ships alongside the warranty data plumbing. Start read-only, then graduate to write-back once precision is proven.
