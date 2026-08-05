---
id: oh-uk-aftercare-design-partner-sprint
title: Validate the UK new-build aftercare wedge with five design partners
company_id: openhouse-ai
domain: growth
state: active-commercial-validation
effort: S
impact: 84
priority: P0
is_one_thing: true
source: ground-zero-incubation 2026-07-22
created_at: "2026-07-22"
---

# Validate the UK new-build aftercare wedge with five design partners

## Thesis

OpenHouse has a researched UK strategy but no bounded commercial proof item for it. Before localisation or product work, test whether SME housebuilders, housing associations, warranty providers or resident-experience partners will commit to an evidence-led aftercare pilot. The sellable outcome is not another portal. It is fewer unresolved complaints and an Ombudsman-ready record of issue intake, evidence, communication and resolution.

## Opportunity size

England recorded 190,600 new-build homes in 2024-25. This is a large annual flow market before counting the installed base of recently completed homes still inside aftercare and warranty periods. A narrow design-partner sprint does not need a national share assumption. One paid pilot with a mid-market developer could cover multiple homes and create UK reference evidence, while five interviews can test whether compliance and complaint handling have an owned budget.

Source: [UK Government, Housing supply: net additional dwellings, England: 2024 to 2025](https://www.gov.uk/government/statistics/housing-supply-net-additional-dwellings-england-2024-to-2025/housing-supply-net-additional-dwellings-england-2024-to-2025), published 20 November 2025 and checked 22 July 2026.

## Validation approach

1. Define one workflow around post-completion complaints: structured intake, photo and document evidence, response chronology, owner, deadline and exportable case pack.
2. Prepare a non-product sample using anonymised OpenHouse-style evidence and the New Homes Quality Code structure.
3. Secure five conversations through targeted direct outreach, warm channels, accelerators, investors or industry introductions. Cold outreach is valid when the buyer, active scheme and opening hook are specifically researched.
4. Interview at least two housebuilders or housing associations and two warranty, aftercare or resident-experience operators.
5. Ask for a paid diagnostic, a data-backed pilot commitment or an introduction to the budget owner.
6. Record current handling time, complaint volume, evidence gaps, escalation cost, incumbent tools, procurement constraints and willingness to pay.

No UK product build, localisation or integration work starts from this note.

## Technical approach after proof

Reuse the existing OpenHouse issue and evidence model rather than create a separate UK application. Add a deterministic case chronology, Code-aligned fields, service-level timers and a PDF or structured export. Keep AI to classification, missing-evidence prompts and draft summaries with human approval. The React, Next.js, Supabase and Vercel stack remains fixed.

## Risks

- The New Homes Quality Code is a process and consumer-protection framework, not proof that buyers will purchase another software layer.
- Clixifix, Spaciable and incumbent CRM or defect tools may already satisfy the buyer's minimum need.
- UK procurement and data-processing requirements can make a small pilot slow even when pain is real.
- An Ombudsman-ready claim could overstate legal or procedural completeness. Position the output as evidence support unless independently reviewed.
- Targeted direct outreach may still be ignored. Use a real operating owner, one active-scheme hook and a precise 25-minute workflow ask rather than waiting indefinitely for a warm route.
- OpenHouse production migration and the six-week WIP limit take precedence.

## Effort

Small for discovery: one sample case pack, five interviews and one decision memo. Medium only after a paid or commitment-backed pilot, when UK terminology, workflow configuration, data processing and export requirements are known.

## Market timing

Timely. The New Homes Quality Board published Version 2 of the New Homes Quality Code in March 2026, and the New Homes Ombudsman is publishing current decisions under the Code. The regulatory workflow is active and evidence-heavy. England also delivered 190,600 new-build homes in 2024-25 despite a broader housing-supply decline, leaving a substantial annual aftercare cohort.

Sources checked 22 July 2026:

- [New Homes Quality Board](https://www.nhqb.org.uk/), including New Homes Quality Code Version 2, March 2026.
- [New Homes Ombudsman Service](https://www.nhos.org.uk/), including current published decisions.
- [UK Government housing supply statistics](https://www.gov.uk/government/statistics/housing-supply-net-additional-dwellings-england-2024-to-2025/housing-supply-net-additional-dwellings-england-2024-to-2025).

## Promotion gate

Promote to a bounded commercial validation project only if:

- targeted direct or channel-led outreach produces five qualified conversations;
- at least three buyers confirm the same costly evidence or complaint-handling failure;
- one buyer offers payment, data access or a signed pilot commitment;
- the workflow can be piloted without a separate UK codebase;
- the expected contract value justifies procurement and support overhead;
- activation does not breach the current one-proof-loop WIP limit.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]]
- [[companies/openhouse-ai]]
- [[decisions/2026-07-22-six-month-agent-co-pilot-protocol]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-triage-router]]
- [[project_state/oh]]

## Recommendation

Activated on 5 August 2026 as the primary non-Irish commercial validation lane. Research and outreach preparation may proceed immediately. Do not build UK-specific product features until interviews or a paid commitment identify a requirement.

## Connected vault notes

- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] - UK warranty and compliance route
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]] - market map
- [[items/oh-warranty-evidence-pack]] - core evidence output
- [[items/oh-warranty-triage-router]] - supervised issue classification
- [[items/oh-handover-readiness-scan]] - shared evidence rules
- [[items/oh-scheme-launch-scorecard]] - management view to consolidate
- [[goals/oh-aftercare-os]] - strategic product goal
- [[goals/oh-funder-pitch]] - UK scale narrative
- [[companies/openhouse-ai]] - parent company
- [[project_state/oh]] - production and migration state
- [[decisions/2026-07-22-six-month-agent-co-pilot-protocol]] - current WIP constraint
