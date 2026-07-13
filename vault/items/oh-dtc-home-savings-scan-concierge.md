---
id: oh-dtc-home-savings-scan-concierge
title: Validate a paid OpenHouse Home Savings Scan by concierge
company_id: openhouse-ai
domain: growth
state: proposed
effort: S
impact: 86
priority: P1
created_at: "2026-07-13"
source: ground-zero-incubation 2026-07-13
---

# OpenHouse DTC Home Savings Scan concierge validation

## Thesis
OpenHouse has an unusually credible route to direct homeowner revenue: turn a utility bill, home documents and a small amount of guided context into a paid, evidence-led action plan. This is not a generic chat experience. The sale is a concrete answer to what the home is costing, what is at risk, and what to do next.

## Opportunity size
A paid scan can create near-term customer revenue and, more importantly, prove whether homeowners will exchange money and structured home data for an ongoing home operating layer. The initial unit economics are attractive if manual delivery is limited to a tightly defined report: test €29, €49 and €79 as one-off prices, then measure demand for an annual continuation. The strategic upside is higher than the first transaction because every scan seeds a durable home profile, document vault, maintenance timeline and future energy or aftercare workflow.

## Technical approach
Start without building a new product surface.

1. Use one focused landing page and intake form.
2. Collect a bill, energy setup, location, heating type and optional appliance or system photos.
3. Produce a structured report from a controlled template: bill explanation, confidence-tagged opportunities, risks, three actions, missing evidence and next upload.
4. Record time-to-deliver, value found, follow-up questions, price accepted and subscription intent in a simple experiment ledger.
5. Productise only the repeatable path: upload, extraction, report and persistent home profile.

The existing OpenHouse document, warranty, issue and evidence concepts provide a stronger foundation than a greenfield consumer assistant. Keep the first pass upload-first, especially for Ireland, rather than depending on fragile external integrations.

## Risks
- Savings claims can create regulatory and trust risk. Use value bands, source evidence and clear exclusions. Do not promise bill reductions.
- Concierge time can hide weak economics. Cap the report scope and record delivery minutes from the first participant.
- A broad home-agent pitch may dilute conversion. Lead with a single urgent use case: high bill, heat pump confusion or move-in documents.
- OpenHouse production migration remains the primary operational priority. This validation must not consume engineering capacity until paid pull is visible.
- Personal household documents require a clear consent, retention and deletion path before paid testing.

## Effort
Small for validation: one landing page, intake, report template, payment or deposit signal and a 10-customer experiment ledger. Medium for the productised MVP after repeatable demand is proven. No engineering build is recommended for the first ten scans.

## Market timing
Timely. Household energy cost sensitivity, increasing ownership of complex energy assets and growing consumer comfort with document-aware AI create demand for a specific financial or maintenance outcome. The portfolio's June research already identifies UK smart-tariff users with EV, solar, battery or heat-pump assets as the strongest data-rich segment, while Ireland is suitable for upload-first friendly testing. The opportunity is viable only if the output is auditable and materially more useful than a generic AI answer.

## Validation gate
Run ten manually delivered scans before productisation.

- At least five users provide a payment signal at €29 or above.
- At least seven rate the report useful enough to act on.
- At least three express annual continuation intent at €79 or above.
- Median delivery time falls below 30 minutes by the final three scans.
- At least half upload a second artefact after receiving the report.

## Connection to existing work

- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]] contains the broader DTC thesis and pricing hypotheses.
- [[items/oh-warranty-evidence-pack]] and [[items/oh-warranty-triage-router]] supply evidence and issue workflows that can become paid report modules.
- [[items/oh-handover-readiness-scan]] and [[items/oh-scheme-launch-scorecard]] remain the B2B evidence-led core.
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]] provides a prior 14-day execution frame.
- [[project_state/oh]] confirms migration stability remains the current prerequisite for product work.

## Recommendation
This is mature enough to become a tightly bounded validation project, not a full DTC product project. Approve only the ten-scan concierge experiment after defining consent and report-claim guardrails. Promote to product build only if the validation gate passes.
