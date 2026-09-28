---
title: Evolv DUoS-group public benchmark gate
created: 2026-09-09
status: proposed-test
company_id: evolv-renewables
scope: one public-data comparison against one permissioned rooftop period
source: ground-zero opportunity incubation
---

# Evolv DUoS-group public benchmark gate

## Bounded proposal

Test whether ESB Networks' newly available monthly, non-personal DUoS-group interval reports add a useful public reference layer to the existing [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]]. Compare one existing Evolv rooftop's permissioned half-hourly import/export shape with the matching published DUoS group's average shape for the same month, solely to learn whether the comparison helps explain operating patterns or spot periods worth investigating.

This is not a performance league table, savings claim, peer benchmark product or substitute for site, inverter, weather, tariff or supplier evidence. The immediate outcome is a one-page annotated comparison and a decision to **discard**, **retain as context**, or **test across more sites later**.

## Verified evidence

- ESB Networks says it began publishing non-personal smart-meter reports after S.I. No. 589/2025 was enacted in December 2025.
- The reports provide average active import and export in kW for each 30-minute interval within a DUoS group, include actual rather than estimated readings, use daylight-saving time, and are published monthly for the previous calendar month.
- The official page currently exposes monthly CSV downloads from January through July 2026 and says reports remain available for up to 24 months.
- The July 2026 CSV is directly downloadable and contains the declared fields: DUoS Group, month, interval timestamp, average active import interval data, and average active export interval data.
- S.I. No. 589/2025 defines eligible parties broadly and provides for access by third parties acting for final customers, but ESB Networks says the required access systems and processes are still being implemented. This does not establish that Evolv currently has an operational delegated-access route.

## Inference and opportunity boundary

A free, recurring national dataset may provide a lightweight reference shape while Evolv's reporting remains manual. It could make an owner report more intelligible by showing whether a site's import/export timing differs from its broad connection class, without exposing another customer's data.

The comparison may also be commercially useless: DUoS groups classify network/tariff characteristics, not matched buildings, sectors, system sizes or weather zones. Differences must therefore be described as prompts for investigation, never as underperformance or a quantified savings opportunity.

## Assumptions to test

- The live rooftop's DUoS group can be identified from authoritative account or connection evidence.
- A matching month exists in both the public report and the permissioned site dataset.
- Site and public timestamps can be aligned without concealing DST or interval-definition differences.
- Normalising shape, rather than comparing raw kW magnitude, produces an interpretable result.
- The owner finds at least one annotation useful for a real reporting, maintenance or tariff question.

## Smallest validation test

**Scope:** one rooftop, one complete month, one public CSV and the permissioned files already contemplated by the reconciliation proof; no API, scheduled downloader, production integration or customer contact.

1. Confirm the site's DUoS group from source evidence; do not infer it from load shape.
2. Select one month present in both the ESB Networks public CSV and the authorised site data.
3. Preserve source URLs/files, extraction time, units, DST convention and transformation steps.
4. Compare normalised 30-minute import/export shapes and label raw magnitude as non-comparable unless a valid denominator is available.
5. Ask only three questions: does the comparison reveal a timing anomaly, clarify self-consumption/export timing, or improve the owner's understanding of the site?
6. Record preparation minutes, interpretation disputes and whether the comparison changed any next investigation.
7. Decide **discard**, **retain as contextual appendix**, or **test on a second asset only after approval**.

### Pass gate

Retain the public benchmark only if the DUoS match is authoritative, timestamps and semantics reconcile, the owner can interpret the comparison without overclaiming, and at least one decision-relevant question emerges that was not already obvious from the site's own data.

### Kill gate

Discard it if the site's DUoS group cannot be confirmed, the aggregate obscures more than it explains, normalisation is unstable, or the result invites unsupported peer-performance claims. Do not automate collection merely because the files are public.

## Downside and safeguards

- DUoS averages blend heterogeneous premises and system sizes; they are not a matched control group.
- Monthly publication lag prevents operational alerting.
- Average profiles can mask variation, outages and weather effects.
- Site interval data remains sensitive even when the comparator is non-personal; retain the customer-authorisation, minimisation and deletion boundary from the reconciliation proof.
- Public-file schemas, URLs and coverage may change. Preserve each exact source and fail visibly on drift.
- A visually persuasive chart can overstate causal meaning. Every output must label the public series as an aggregate contextual reference.

## Approval boundary

This note authorises public-source research and proposes one offline comparison only. It does not authorise customer contact, collection of live site data, credentials, delegated-access registration, a software build, scheduled ingestion, external publication, performance claims, tariff advice, spending, or any operational or production change. Sam must approve the exact site/data test after conflict, confidentiality and IP review; the customer must approve any site files and purpose.

## Open gaps

- Authoritative DUoS group and interval-data availability for the live Evolv rooftop.
- Whether the published group includes a meaningful number and mix of comparable exporting commercial sites.
- Whether the report's interval row represents a monthly mean for each clock interval exactly as assumed.
- Whether weather and generation-capacity normalisation is needed before any useful interpretation.
- Owner willingness to use or pay for this contextual layer.

## Provenance

Official sources checked 9 September 2026:

- [ESB Networks — Non-personal smart meter data](https://www.esbnetworks.ie/about-us/company/data-and-digital/non-personal-smart-meter-data)
- [ESB Networks — July 2026 DUoS Group Averaged 30-minute Interval Meter Data CSV](https://media.esbnetworks.ie/media/docs/default-source/smdao-use-case-1/duos-group-averaged-30-minute-interval-meter-data-july-2026.csv?sfvrsn=3f513432_8&download=true)
- [ESB Networks — Smart Meter Data Access Code](https://www.esbnetworks.ie/about-us/company/data-and-digital/smart-meter-data-access-code)
- [Irish Statute Book — S.I. No. 589/2025](https://www.irishstatutebook.ie/eli/2025/si/589/made/en/print)

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/evolv-renewables]] — company context
- [[project_state/renew]] — live manual-reporting state and paid-baseline gate
- [[goals/renew-pipeline]] — commercial goal
- [[items/renew-reporting-source-baseline]] — prerequisite workflow baseline
- [[items/renew-grid-automation]] — existing data-automation question
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] — permissioned site-data proof this may supplement
- [[briefs/2026-08-04-renewables-operations-intelligence-business]] — broader owner-side assurance thesis

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-renewables-operations-intelligence-business]]
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]]
- [[briefs/2026-09-22-evolv-commercial-renovation-passport-evidence-continuity-gate]]
- [[briefs/2026-09-25-evolv-electricity-carbon-claims-evidence-boundary]]
- [[briefs/2026-09-26-evolv-local-business-flex-evidence-readiness-gate]]
- [[companies/evolv-renewables]]
- [[context/business-opportunities-moc]]
- [[goals/renew-pipeline]]
- [[items/renew-grid-automation]]
- [[items/renew-reporting-source-baseline]]
- [[project_state/renew]]

