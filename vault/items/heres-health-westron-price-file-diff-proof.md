---
kind: item
id: heres-health-westron-price-file-diff-proof
company_id: heres-health
title: Prove a review-only Westron supplier price-file diff
state: proposed
status: proposal-only
priority: P2
effort: S
source: Sam-supplied Here’s Health meeting record, 2026-08-29
created_at: "2026-08-29"
---

# Prove a review-only Westron supplier price-file diff

## Proposal

Run one bounded, read-only comparison between a real supplier pricing spreadsheet and a current Westron product export. Produce a human-review queue of relevant cost and resale-price changes; do not write to Westron.

This is a post-discovery operational proof. It must not delay the launch-critical Shopify, Square, Acuity, café-operations or app-account work in [[items/heres-health-week-one-discovery-and-technical-proof]].

## Bottleneck

The 29 August owner-meeting record says supplier pricing files can contain hundreds or thousands of lines, including products Here’s Health does not stock. The owner’s father manually finds stocked products, identifies cost and resale-price changes, and updates Westron. A cycle can consume days.

The exact file cadence, baseline hours per cycle, Westron version and supported import/export mechanisms are still open evidence gaps. This proposal therefore tests the comparison and review burden only; it does not assume a production integration or annual saving.

## Value category

- **Time returned:** reduce manual filtering and side-by-side spreadsheet comparison.
- **Margin protection:** make changed costs and unusual suggested resale prices visible before approval.
- **Key-person resilience:** turn an undocumented, family-member-dependent process into a repeatable review packet.
- **Auditability:** retain source row, match reason, prior value, proposed value and reviewer decision.

## Smallest live test

With explicit Here’s Health approval:

1. Use one real supplier spreadsheet and one current, read-only Westron catalogue extract obtained through a vendor-supported or client-approved mechanism. If no safe read-only extract exists, stop. Keep the files in an approved local or client-controlled environment; do not upload supplier or commercial data to an unapproved AI service.
2. Agree the test sample and minimum useful match coverage before the run. Match exact SKU or agreed stable identifiers first. Put fuzzy, duplicate, missing and unusually large changes into an exception queue rather than guessing.
3. Produce a draft-only diff showing supplier row, Westron product, current cost, new cost, current resale price, any separately supplied pricing-rule output, match basis and confidence.
4. Limit the first review to at most 100 matched or ambiguous rows and compare it with the reviewer’s normal manual result for the same sample.
5. Record reviewer corrections and elapsed review time. Stop after the receipt; do not import or key any change into Westron.

## Evidence of success

The proof clears its gate only if the saved receipt shows:

- zero wrong-product matches among rows marked safe for approval;
- every ambiguous, duplicate or unusual row in the test sample was quarantined for human review;
- the reviewer can reproduce or improve the manual result for the same sample in at least 50% less review time;
- every proposed change can be traced back to the exact supplier row and Westron record; and
- the reviewer confirms that the queue is easier and safer than the current side-by-side process.

If those conditions are not met, stop. Do not proceed to Westron import, desktop automation or a recurring service.

## Downside

A bad match could corrupt cost, margin or shelf pricing. Supplier SKUs may not align with Westron identifiers, and Westron may not expose a safe export/import route. Commercial pricing files are sensitive. A polished diff could also create false confidence if missing products or silent changes are not measured against a human-reviewed sample.

## Approval boundary

- Sam may prepare this proof only after Here’s Health explicitly approves the data scope and provides authorised read-only exports.
- No production Westron write, import, API mutation, desktop automation, supplier contact or pricing-rule change is authorised by this proposal.
- No price is accepted automatically. A named Here’s Health reviewer approves or rejects every proposed change.
- Any production integration, recurring run, third-party processor or paid tool requires a separate reviewed scope and approval.

## What it replaces

If proven, it replaces manual line-by-line filtering, comparison and transcription preparation. It does **not** replace Westron, the owner’s pricing policy, or human approval of price changes.

## Provenance

- [[imports/heres-health-project-master-brief-2026-08-29]] — source record for the manual pricing bottleneck, target workflow and “do not implement blind autonomous pricing” boundary.
- [[imports/heres-health-meeting-record-addendum-2026-08-29]] — Sam’s corrections on decision-makers, access and the immediate app-first sequence.
- [[companies/heres-health]] and [[project_state/heres-health-app]] — durable client context and current discovery state.

## Connected vault notes

- [[companies/heres-health]] — client and commercial context
- [[project_state/heres-health-app]] — current project state
- [[items/heres-health-week-one-discovery-and-technical-proof]] — launch-critical predecessor and sequencing gate
- [[context/business-opportunities-moc]] — Here’s Health opportunity map
- [[context/ops-automation-moc]] — related approval-gated automation patterns
- [[items/_Index]] — item queue

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/ops-automation-moc]]
- [[items/heres-health-planday-brightpay-export-proof]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

