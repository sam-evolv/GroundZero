---
title: OpenHouse context acquisition lab before broad DTC build
company_id: openhouse-ai
date: 2026-07-28
status: active-decision
---

# OpenHouse context acquisition lab before broad DTC build

## Decision

Before building a broad direct-to-consumer interface, OpenHouse will run a bounded, permissioned Context Acquisition Lab across varied Irish homes.

The lab will determine how much useful, reliable home context can be recovered from:

- licensed address resolution;
- national building and planning data;
- homeowner-confirmed planning documents;
- BER, surveys, bills and other homeowner-owned records;
- walkthrough video, guided photographs and RoomPlan where supported;
- commissioning records and manufacturer evidence;
- smart-meter and device exports;
- household preferences, actions and measured outcomes.

This extends the existing twenty-home €79 concierge validation. It does not replace the payment, usefulness or return-behaviour gates.

## Why

- Older homes often lack developer-provisioned handover context.
- Planning packs can recover intended layouts, development history and design evidence.
- Current media can show what appears to exist now.
- Rating plates, commissioning documents and telemetry are required for stronger installed and performance claims.
- The show-house walkthrough proved that a short video is valuable for orientation and evidence triage but is not enough for efficiency, fault, commissioning or savings claims.
- A broad UI built before this evidence work would risk encoding the wrong onboarding questions and acquisition priorities.

## Consequences

- OpenHouse treats signup as parallel evidence recovery, not profile completion.
- Address and map confirmation trigger background public-record discovery.
- The homeowner receives visible value before being asked for a broad home inventory.
- One proof is requested for the first sourced artifact.
- Further evidence is requested one item at a time according to decision impact and friction.
- Assistant confidence is claim-specific and job-specific.
- Planning, mapped, observed, installed, modelled and measured evidence remain separate.
- Publicly viewable documents are not automatically scraped, stored or republished.
- No universal device connector, full digital twin or lengthy questionnaire becomes a launch dependency.
- No production deployment, migration, paid acquisition or vendor contract follows without separate approval.

## Lab evidence gate

Across a deliberately varied permissioned sample, capture:

- public-record yield and false matches;
- planning-document availability;
- current-layout reconstruction quality;
- exact installed-system identification;
- unresolved professional and measured evidence;
- homeowner time and interaction count;
- time to first useful sourced result;
- voluntary second evidence;
- changed homeowner decision;
- legal/licence blockers;
- repeatable patterns worth automating.

Only repeated, high-value, low-friction acquisition routes should be productised first.

## Connected vault notes

- [[decisions/_Index]]
- [[companies/openhouse-ai]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/openhouse-show-house-walkthrough-evidence-2026-07-28]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[project_state/oh]]
