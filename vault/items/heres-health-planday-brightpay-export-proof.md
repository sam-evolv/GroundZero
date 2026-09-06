---
kind: item
id: heres-health-planday-brightpay-export-proof
company_id: heres-health
title: Prove Planday-to-BrightPay payroll export parity before considering replacement
state: proposed
status: proposal-only
priority: P2
effort: S
source: Sam-supplied Here’s Health meeting record, 2026-08-29
created_at: "2026-08-30"
---

# Prove Planday-to-BrightPay payroll export parity before considering replacement

## Proposal

Run one bounded, read-only payroll-export compatibility proof using Here’s Health’s current Planday output and the owner-supplied BrightPay template/example. Produce a reviewed mapping and reconciliation receipt only; do not import anything into BrightPay, change a rota, process payroll or build a replacement rostering system.

This is post-launch operational discovery. It must not delay [[items/heres-health-week-one-discovery-and-technical-proof]] or enlarge the adopted Phase One app scope.

## Bottleneck

The 29 August meeting record says Here’s Health has approximately 100 employees and pays approximately €3 per employee per month for Planday, or roughly €300 per month / €3,600 per year. BrightPay should remain. Planday’s important current role is producing staff/time data in the payroll format BrightPay needs, and the owner supplied a template/example.

The exact export, BrightPay import requirements, manual handling time, breaks, overtime, holidays, multi-location rules, pay-rate handling, permissions and audit process have not been verified. The stated employee count and saving are approximate meeting-record figures, not a checked invoice or proven net saving.

## Value category

- **Cost reduction:** test whether the approximately €3,600 annual Planday cost is technically avoidable without shifting greater cost into support and risk.
- **Operational continuity:** document the exact roster-to-payroll contract before considering any replacement.
- **Payroll accuracy and auditability:** reconcile every mapped field, transformation and exception before a production import is even considered.
- **Scope control:** falsify the replacement idea cheaply before building employee, location, leave, rota or staff-access features.

## Smallest live test

Only after Here’s Health explicitly approves the exercise and names the payroll/rostering acceptance owner:

1. Record the current Planday-to-BrightPay steps, the approved source totals and any manual corrections for one already-closed pay period. If the workflow is not owned or cannot be safely inspected, stop.
2. Keep all employee and payroll data in a client-controlled environment. Use the minimum fields required for the proof and pseudonymous employee keys where the import contract allows. Do not collect bank, tax, deduction, health or free-text data unless the named payroll owner confirms it is strictly required and separately approves its handling.
3. Freeze the BrightPay target schema and transformation rules before generating output. Include representative standard hours plus only the cases actually present in the approved sample, such as breaks, overtime, holiday, absence, multiple locations or pay categories.
4. Generate a candidate BrightPay-compatible file for a maximum of ten representative employee rows. Quarantine missing, duplicate or ambiguous mappings instead of guessing.
5. Compare the candidate row by row and in aggregate with the approved Planday export/template and closed-period totals. Record every mismatch, manual correction and elapsed review time.
6. Stop after the payroll owner reviews the receipt. Do not import the candidate file, create or publish shifts, notify staff, calculate pay or cancel Planday.

## Evidence of success

The proof clears its gate only if the saved receipt shows:

- the candidate file passes the owner-confirmed BrightPay schema checks without a live import;
- employee-row count, total hours and every represented pay/time category reconcile exactly to the approved closed-period source;
- no employee, location or pay category is mapped incorrectly, and every ambiguity is quarantined;
- all transformations are documented and reproducible from the source export;
- the named payroll owner confirms the output would require no unrecorded manual correction for the tested rows; and
- the evidence is strong enough to price a separate replacement-discovery phase, including support and compliance costs, without yet claiming the approximate €3,600 as net savings.

Any unexplained mismatch, unsafe data requirement or missing owner approval is a stop condition.

## Downside

A payroll mapping error could underpay or overpay staff, corrupt statutory records or create an employment dispute. The export may conceal important Planday functions around breaks, holidays, approvals, multi-location work or audit history. A custom rostering system could cost more to maintain than the approximate subscription saving, concentrate support risk on Donworth Studio and expose sensitive employee data. A ten-row proof establishes export compatibility only; it does not establish full rostering parity, legal compliance or production readiness.

## Approval boundary

- This note authorises a proposal and reviewable test design only.
- Sam must approve any client contact, and Here’s Health must explicitly approve the data scope, purpose, environment, named acceptance owner and closed-period sample before access or processing.
- No BrightPay import, payroll run, pay calculation, rota creation/change/publication, employee notification, Planday cancellation, production integration, credential use, paid tool or third-party processor is authorised.
- Employee and payroll data must not be placed in Ground Zero, chat, source control or an unapproved AI service.
- Any broader discovery, DPIA/legal review, paid proposal, implementation or production trial requires a separate approved scope.

## What it replaces

The bounded proof replaces no production system. If later phases prove full functional, operational and compliance parity, a replacement could remove Planday’s paid rostering and BrightPay-export role. It would not replace BrightPay, manager-owned rota approval, payroll-owner review, statutory records or human responsibility for paying staff correctly.

## Provenance

- [[imports/heres-health-project-master-brief-2026-08-29]] — Sam-supplied source for the approximate employee count, subscription cost, Planday role, owner-supplied template and required pre-replacement checks.
- [[companies/heres-health]] and [[project_state/heres-health-app]] — current client context, app-first sequence and unverified Planday-to-BrightPay architecture.
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — adopted Phase One scope boundary; operational automation must not delay launch.
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]] — adjacent aggregate staffing diagnostic. It does not test payroll-export parity or authorise a roster replacement.
- [[items/heres-health-westron-price-file-diff-proof]] — adjacent review-only operational proof and approval pattern; this proposal does not duplicate its supplier-pricing workflow.

## Connected vault notes

- [[companies/heres-health]] — client and commercial context
- [[project_state/heres-health-app]] — current discovery state
- [[items/heres-health-week-one-discovery-and-technical-proof]] — launch-critical predecessor
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]] — adjacent workforce diagnostic
- [[items/heres-health-westron-price-file-diff-proof]] — adjacent operational proof
- [[context/business-opportunities-moc]] — nearest opportunity map
- [[context/ops-automation-moc]] — approval-gated automation patterns
- [[items/_Index]] — item queue

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/ops-automation-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[items/heres-health-westron-price-file-diff-proof]]
- [[project_state/heres-health-app]]

