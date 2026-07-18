---
id: renew-reporting-source-baseline
company_id: evolv-renewables
domain: validation
title: Baseline one rooftop compliance workflow before automation
rationale: Three Renew reporting ideas depend on source inputs and cadence that have not been refreshed since 1 July.
effort: S
impact: 82
state: proposed
priority: P1
is_one_thing: true
source: ground-zero-incubation 2026-07-18
created_at: "2026-07-18"
---

# Baseline one rooftop compliance workflow before automation

## Thesis

Evolv should capture one complete reporting cycle before choosing between grid automation, compliance-pack automation and a client portal. The commercial gap is not another interface. It is a verified source map, measured manual cost and one client-ready evidence pack that can become the product template.

## Opportunity size

The current direct saving is approximately three hours per week on one live commercial asset. That is enough to justify a narrow internal automation if accuracy is high. The larger opportunity is a repeatable evidence service that strengthens renewals, sales proof and client trust as the number of rooftops grows. The first baseline prevents a medium build from being aimed at an unstable or low-frequency workflow.

## Technical approach

1. Observe and timestamp one complete reporting cycle.
2. List every source file, owner, transformation, validation, exception and final recipient.
3. Record manual minutes and corrections by step.
4. Create a canonical input schema and deterministic report template.
5. Produce one client-ready pack manually from that schema.
6. Mark each step as automate, assist or retain for human approval.
7. Use the resulting evidence to choose whether [[items/renew-grid-automation]] and [[items/renew-compliance-reporting-automation]] are one project or two.

No portal or scheduled writer should be built from this note.

## Risks

- One cycle may not capture format changes, missing data or seasonal exceptions.
- The source system may not offer a stable export or API.
- Automating a three-hour task can have weak payback if maintenance is high.
- Compliance errors create more downside than the saved time, so review and audit logs remain mandatory.
- The recorded Renew state is stale and must be refreshed before scope is fixed.

## Effort

Small. One observed reporting cycle, one source map and one evidence-pack template. The work should fit inside a single reporting period and produce a go, narrow or stop decision.

## Market timing

Timely. The European Commission states that the revised Energy Performance of Buildings Directive focuses on renovation, decarbonisation, modernisation and digitalisation, and had a national transposition deadline of 29 May 2026. It also reports that buildings use around 40% of EU energy. This supports demand for better building and energy evidence, but it does not prove a software market by itself. Source: [European Commission EPBD overview](https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive_en), checked 18 July 2026.

## Promotion gate

Promote the automation into a project if:

- one stable input schema covers at least 80% of the reporting cycle;
- manual work is confirmed at two or more hours per week or has meaningful compliance risk;
- the deterministic pack passes human review without material correction;
- expected setup and three-month maintenance cost is lower than six months of saved labour or creates clear sales value;
- exceptions and approval ownership are documented.

## Recommendation

This is mature enough to become a bounded discovery and validation project. It should precede both compliance automation and the portal, and it may reveal that the two existing automation notes should be consolidated.

## Connected vault notes

- [[items/renew-grid-automation]] - narrow data automation candidate
- [[items/renew-compliance-reporting-automation]] - full pack automation candidate
- [[items/renew-compliance-portal]] - productised follow-on
- [[goals/renew-pipeline]] - commercial growth goal
- [[companies/evolv-renewables]] - parent company
- [[project_state/renew]] - state to refresh
- [[briefs/solar-installer-workflow-analysis]] - market workflow evidence
