---
title: OpenHouse free-first DTC conversion plan
date: 2026-07-28
company_id: openhouse-ai
status: proposed-strategy
source: Sam voice working session
---

# OpenHouse free-first DTC conversion plan

## Decision

OpenHouse should not ask an Irish homeowner to pay before it has demonstrated specific value. The direct-to-consumer journey should start with a free, no-card trial that creates a credible home-specific result within ten minutes.

The conversion is not a charge for generic AI chat. It is membership of a living, protected Home Record: the evidence-backed operating and service history of the home that becomes more useful as the homeowner uses it.

Free-first applies to the initial ten-minute reveal only. It does not supersede the commercial gate in [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]: deeper manual concierge fulfilment requires a real €79 payment or refundable payment commitment, and twenty paid or payment-committed plans still gate productisation. The free reveal proves recognition and usefulness; payment proves demand.

## The psychological job

The consumer promise should not be "AI for your home" or an abstract savings claim. It should make the homeowner feel that OpenHouse helps them understand, protect and improve one of their largest assets.

The immediate emotional jobs are:

- avoid making an expensive mistake;
- avoid being taken advantage of when a repair, quote or upgrade arrives;
- understand what is actually true about the home;
- keep the home's history organised and ready when it matters;
- preserve evidence that helps with maintenance, warranty, insurance and eventual resale.

The long-term metaphor is a properly maintained service history for a car, but adapted to the greater complexity and value of a home. It is not a document folder. It is a living record of what was installed, commissioned, serviced, repaired, upgraded, checked and decided, with the evidence attached.

## Product model

### Free trial: prove recognition and usefulness

The trial begins with:

1. address or Eircode;
2. building confirmation;
3. clear consent for applicable discovery;
4. one homeowner goal.

OpenHouse creates a provisional Home Record, recovers permitted context in the background and returns one useful result within ten minutes. The first result must show:

- what OpenHouse found;
- which facts are verified and which are only candidate facts;
- one useful observation related to the selected goal;
- one important unknown;
- one optional, low-friction action that would improve the answer.

The trial should feel like the home coming into focus, not like form completion. No payment card, full inventory, long questionnaire or multi-account connection should be required before value.

### Paid membership: maintain the living record

The membership should be positioned as continuity, protection and readiness, not access to a chatbot. It retains and develops the homeowner's private Home Record through:

- a verified home and service history;
- documents, manuals, warranties, invoices and photos attached to the right system or event;
- maintenance, warranty, insurance and review reminders;
- ongoing help when a bill, issue, quote, upgrade or life event occurs;
- decision and quote review in the context of the actual home;
- controlled export and selective sharing with a contractor, installer, insurer, surveyor or future buyer;
- a record of actions taken and outcomes, rather than an unstructured conversation archive.

An annual membership is the preferred hypothesis for testing. It better matches the idea of maintaining a serious asset than a low-cost monthly app subscription. No price is fixed until the trial-to-membership value is tested.

### Free versus paid boundary

The free tier must be useful but static:

- one home snapshot;
- a limited first answer or guided result;
- transparent evidence states;
- a clear next action that illustrates what deeper context unlocks.

The paid tier is the active and accumulating layer:

- sustained Home Record and service history;
- ongoing assistance and evidence collection;
- reminders and lifecycle prompts;
- quote, project and issue support;
- sharing, export and resale-readiness tools.

Do not degrade the free answer to force conversion. The homeowner must see enough real value to believe the record is worth maintaining.

## Product surface and function

For DTC, add a primary **Home** surface to the homeowner experience. It is the consumer replacement for developer-supplied handover context, not a new requirement for homes already provisioned by a developer.

The surface has four functions:

1. **Home identity** - resolve and confirm the physical home and relevant permitted public records.
2. **Evidence record** - retain facts with source, freshness and state: verified, candidate, disputed, superseded or unknown.
3. **Next best evidence** - request the single lowest-friction proof that materially improves the homeowner's present goal.
4. **Home snapshot** - show the homeowner what OpenHouse knows, what it suspects and what one next action would unlock.

This is deliberately not a percentage-complete profile, gamified checklist or generic dashboard.

The existing developer route remains simple: a developer can provision a verified baseline at handover. Both routes populate the same underlying Home Record, but the user-facing promise differs:

- developer-provided home: "Your home is ready.";
- direct consumer home: "Let's understand your home.".

## Value loops to build after the first result

### First 90 days

Give a new owner or newly enrolled homeowner a calm, home-specific operating plan: essential documents, key systems, first bill, heating and ventilation behaviour, warranty boundaries and what is normal versus what should be investigated.

### Decision confidence

When the homeowner receives a repair, retrofit, solar, heating or other substantial quote, OpenHouse should help them understand what it means for their particular home, what evidence is missing and what questions to ask. This is a high-value moment, not the only acquisition route.

### Service history and resale readiness

Every confirmed service, repair, upgrade, document and decision should strengthen the record. The homeowner can later generate a controlled, selective summary for a buyer or professional without exposing the entire private household record.

### Developer feedback loop

For developer-provided homes, homeowner questions and evidence should produce privacy-safe operational insight: repeated handover gaps, unclear systems, recurring issues and documentation weaknesses. The output is not household surveillance; it is a better next phase, handover and aftercare process.

## Validation plan

Before broad consumer build, test the free-first experience manually across the existing three-home truth-test shape: Sam's occupied home, the Longview show house and an independent older data-poor home.

These three homes validate activation mechanics, evidence quality, source yield and founder-independence. They do not validate demand. Stated willingness and stated annual value are qualitative signals only; payment commitment remains the commercial evidence.

Measure:

- time to a credible first result;
- whether the homeowner recognises a useful home-specific insight;
- voluntary completion of the one next evidence action;
- whether the homeowner returns for a second job;
- whether they understand verified versus candidate context;
- whether they say the record would be worth maintaining annually, recorded only as a directional signal;
- what feature or trigger would make them pay;
- privacy, rights and data-quality failures.

The membership proposition is not validated by trial sign-up alone. It is validated when homeowners return, add evidence voluntarily and say that losing the accumulated record, reminders and decision support would be a real loss.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-ndrc-pre-accelerator-rehearsal-2026-07-28]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]


## Guardrails

- Never imply that candidate public context is confirmed as-built fact.
- Do not make unverified savings, resale-value or insurance-outcome claims.
- Keep the household record private by default; sharing is specific, revocable and scoped to a job.
- Do not sell or expose individual household behavioural data to developers.
- Do not create a broad consumer build, integration catalogue or autonomous device control before the trial and evidence gates pass.
- Preserve developer handover as the strongest verified-baseline route rather than making it compete with DTC.

## Immediate next steps

1. Run one operator-mediated occupied-home proof with Sam's Eircode or address, building confirmation, explicit consent and one current goal. Do not put private identifiers in the vault.
2. Deliver the first result under the ten-minute contract with transparent provenance and at most one optional evidence action.
3. Record whether it changes a decision, action or question, plus actual source and operator cost.
4. Require a real €79 payment or refundable payment commitment before deeper concierge fulfilment.
5. Continue to Longview only with organisational permission, then test one independently consented older data-poor home without founder briefing.
6. Convert only repeated, trusted bottlenecks into product build. Developer proof packaging and Bridgewater outreach remain the primary commercial lane.

## Connected notes

- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[briefs/openhouse-founder-home-and-longview-prebuild-validation-2026-07-28]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
