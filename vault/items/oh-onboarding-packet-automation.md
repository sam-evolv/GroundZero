---
id: oh-onboarding-packet-automation
company_id: openhouse-ai
domain: operations
title: Auto-generate the OpenHouse onboarding packet
rationale: New scheme or homeowner onboarding still requires manual assembly of welcome messages, checklists, and requested documents.
council_note: Customer onboarding pass · Effort M
effort: M
impact: 86
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T17:02:14Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## What the automation does
When a deal closes or a scheme moves to onboarding, this automation assembles the customer packet automatically. It should prefill known data, generate the welcome email, create the checklist, request the missing files, and open the internal follow-up tasks.

## Opportunity size
High. Onboarding quality sets the tone for the relationship, and every manual packet burns time while introducing avoidable errors. If each onboarding saves 30 to 60 minutes and improves the first impression, the value compounds quickly as more schemes and homeowners come through.

## Technical approach
- Trigger the workflow when a deal closes or a scheme changes state to onboarding.
- Pull source-of-truth data from Supabase and any linked docs or CRM fields.
- Merge that data into email, checklist, and document templates.
- Draft the welcome message in the OpenHouse premium tone.
- Create internal tasks for any missing files or follow-up items.
- Keep the first version template driven so the packet remains deterministic.

## Risks
- Bad source data will produce bad packets, so validation matters.
- Over-automation can make the handoff feel generic if the templates are not polished.
- The workflow needs a clear fallback when required fields are missing.

## Effort
M. The first version should be mostly templated and event-driven. The main work is data mapping, template quality, and making the outputs look premium.

## Market timing
Timely. SaaS buyers increasingly expect fast, polished onboarding and immediate value delivery, and AI-assisted document generation is now a normal expectation rather than a novelty.

## Connects to

- [[goals/oh-activation]] — primary feeding goal
- [[goals/oh-aftercare-os]] — aftercare OS vision
- [[items/oh-onboarding-cut]] — sister item: flow cut + packet compound
- [[items/oh-handover-readiness-scan]] — readiness scan feeds packet data
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- [[context/capture-workflow]] — input layer
- scheme launch process
- premium homeowner and developer experience


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openhouse-ai]]
- [[context/capture-workflow]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-onboarding-cut]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/ops-meeting-followup-assembler]]
- [[project_state/oh]]


## Recommendation
This is a strong project candidate once the production migration stabilises. It is operationally useful, brand-positive, and easy to explain to customers.
