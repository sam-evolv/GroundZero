---
title: Evolv commercial renovation-passport evidence-continuity gate
created: 2026-09-22
status: bounded-research-proposal
company_id: evolv-renewables
scope: one static, permissioned commercial-rooftop appendix inside the existing reporting baseline
source: ground-zero opportunity incubation
---

# Evolv commercial renovation-passport evidence-continuity gate

## Bounded proposal

Test whether one existing Evolv commercial rooftop can add a **Renovation Passport-compatible evidence-continuity appendix** to the manual owner report already contemplated by [[items/renew-reporting-source-baseline]].

The appendix would bind one installed solar intervention to the building or meter identity, the permissioned source records that describe the work, one measured reporting period, later changes or exceptions, and the next owner decision. It would not be a Renovation Passport, an energy assessment, a digital twin, a BER, a compliance opinion or a new portal.

The commercial question is narrow: **does a durable, source-linked record of what was installed, what evidence supports it, what happened in operation and what remains unresolved make Evolv's owner-side assurance materially more useful than the current periodic pack?**

## Why this is genuinely new but not a new product line

[[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] tests one period of HDF, inverter and supplier evidence. [[items/renew-reporting-source-baseline]] tests the current reporting workflow before automation. This proposal does not duplicate either one.

The new question comes from the Irish Green Building Council's September 2026 publication of an SEAI-funded commercial Renovation Passport pilot. The findings move the opportunity from a general EPBD narrative to an Irish, field-tested information model: a long-lived repository of verified building-performance records, assumptions, planned measures, completed works and operational outcomes, with clear access, versioning and quality controls.

Evolv should not try to author or certify passports. The bounded opportunity is to see whether its existing solar evidence can become a clean input to a future owner- or assessor-led passport while improving today's owner report. If not, the idea should be discarded without opening another product lane.

## Verified evidence

- The IGBC report was coordinated by IGBC with Integrated Environmental Solutions and CSTB, funded through SEAI's Research, Development & Demonstration programme, and informed by stakeholder engagement, professional training and a representative commercial-building pilot.
- The pilot says commercial-building information is commonly dispersed across BERs, audits, spreadsheets and consultant reports, making staged renovation planning difficult.
- Its methodology is decision-led, scalable, transparent and usable. It distinguishes an early-screening `LITE` route from a richer `PLUS` route when a building is approaching an investment or regulatory decision.
- The findings recommend a secure central digital platform, verifiable evidence, standardised reports plus interactive dashboards, long-term storage, access controls, quality assurance and a record that can follow the asset and MPRN over time.
- The report explicitly describes value in retaining records of works, equipment, certification, drawings and actual performance so later owners, occupiers and advisers can avoid duplicated surveys and resume a staged plan.
- The pilot also makes the professional boundary clear: assessments, models, costs, sequencing and Renovation Passport issuance belong with appropriately qualified assessors and the eventual governed scheme. The report states that a residential Renovation Passport system is to be introduced and managed by SEAI.

These findings support an evidence-continuity test. They do not prove customer willingness to pay, permit Evolv to access a customer's MPRN or building records, or establish that a rooftop-solar pack qualifies as a Renovation Passport.

## Assumptions to falsify

- The live commercial rooftop has a permissioned installation and reporting bundle that can be bound to one building or meter identity without copying portal credentials or exposing the full MPRN in Ground Zero.
- Existing records identify the installed solar intervention, issuer, date, scope, equipment, commissioning or connection evidence, warranty or maintenance evidence and later operational data clearly enough to preserve provenance.
- The current owner report does not already provide the same lifecycle continuity.
- At least one owner decision, such as maintenance, warranty, reporting, future upgrade sequencing or evidence transfer, becomes easier because the appendix connects the installed work to the later operational evidence.
- The additional effort is small enough to remain an appendix to the existing reporting baseline rather than a separate service or software build.

## Smallest validation test

Use one existing commercial rooftop and one complete reporting period already eligible for the manual proofs in [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]]. Keep the work local, static and read-only.

1. Obtain Sam's approval for the exact site, conflict and IP boundary, then obtain the registered customer's approval for the exact records and purpose.
2. Preserve the customer's full MPRN and source files only in the approved client workspace. In the appendix use a controlled internal asset identifier or masked meter reference.
3. Inventory only records the parties may legitimately use: installation scope, equipment schedule, connection or commissioning evidence, warranties, maintenance records, inverter export, HDF and supplier statement where available.
4. Build a deterministic manifest with: asset identifier, intervention, source owner, source file, issuer, date, building or meter binding, evidence status, operational period, measured outcome, later change, unresolved field and next responsible party.
5. Produce one page showing the solar intervention as a completed step in the building's longer lifecycle: what changed, what source proves it, what the selected period shows, what cannot be concluded and what the next owner decision is.
6. Run three retrieval tasks against the ordinary pack and the appendix: prove what was installed, find the evidence behind one measured figure, and identify what an owner or future assessor would still need before the next upgrade decision.
7. Record additional preparation minutes, corrections, disputed fields and whether the appendix changed a real reporting, maintenance, warranty or future-upgrade decision.
8. Decide **discard**, **retain as a manual appendix within the existing reporting baseline**, or **seek approval for a second-site test**. Do not create a separate project or portal from one result.

### Pass gate

Retain the appendix only if:

- every material field is source-linked or visibly `UNKNOWN`;
- the selected rooftop is bound to the correct building or meter without exposing credentials or unnecessary personal or commercial data;
- the appendix adds no more than 60 minutes once the ordinary period pack exists;
- it makes at least two of the three retrieval tasks materially faster or less ambiguous; and
- the owner identifies one real decision or future handoff made clearer by the continuity record.

A technically tidy appendix with no owner decision value does not pass.

### Kill gate

Discard or park the wedge if the ordinary reporting pack already answers the same questions, the records cannot be bound to the correct asset, the useful output depends on whole-building modelling or assessor judgement, the owner sees no value, the data boundary is unclear, or the exercise creates unsupported passport, BER, savings, compliance or asset-value claims.

## Downside and safeguards

- The official pilot concerns non-residential Renovation Passports as a whole-building planning framework. One solar installation is only one intervention and cannot stand in for the building baseline, renovation roadmap or professional assessment.
- The report is policy and pilot evidence, not proof that Irish commercial owners will buy an Evolv appendix.
- MPRN, interval data, invoices, equipment identifiers and site records can expose sensitive commercial or operating information. Minimise fields, purpose and retention; keep secrets and customer files out of Ground Zero.
- A source-linked record can still be wrong if the source itself is stale, estimated or scoped to a different asset. Preserve issuer, date, scope and evidence status.
- Do not imply that Evolv, OpenHouse or Donworth Studio is approved by SEAI or IGBC, issues Renovation Passports, performs BER/NEAP assessments, certifies compliance or gives regulated technical advice.
- Do not let this test compete with the already required reporting-source baseline or the next paid 60–90 day owner-side assurance gate in [[project_state/renew]].

## Approval boundary

This note authorises public-source research and proposes one static, permissioned test only. It does not authorise:

- customer, SEAI, IGBC, assessor, supplier or third-party contact;
- access to credentials, portals, MPRNs, invoices, site files or live meter/inverter data;
- a software build, API integration, scheduled ingestion, portal, model or digital twin;
- a BER, NEAP, Renovation Passport, savings estimate, valuation, compliance conclusion or commercial claim;
- publication, outreach, spending, production mutation or changes to an operating asset.

Sam must approve the exact site and evidence scope after conflict, confidentiality and IP review. The registered customer must approve the exact files and purpose. Any assessor review, external proposal, paid pilot or second-site test requires separate approval.

## Provenance

Official sources reviewed 22 September 2026:

- IGBC, *Renovation Passport Commercial Pilot Findings* publication page: https://www.igbc.ie/publication/renovation-passport-commercial-pilot-findings
- IGBC / SEAI-funded pilot, *Renovation Passport Commercial Pilot Findings* PDF: https://www.igbc.ie/wp-content/uploads/2026/09/BRP_FINDINGS_vF.pdf
- IGBC, *Renovation Passport Guidance for Property Owners and Occupiers* publication page: https://www.igbc.ie/publication/renovation-passport-guidance-for-property-owners-and-occupiers
- IGBC / SEAI-funded pilot, *Renovation Passport Guidance for Property Owners and Occupiers* PDF: https://www.igbc.ie/wp-content/uploads/2026/09/BRP_GUIDANCE_vF.pdf
- European Commission BUILD UP, *Renovation passports in action across Europe*: https://build-up.ec.europa.eu/en/news-and-events/news/renovation-passports-across-Europe-examples-projects

## Cross-domain bridge

| Evidence pattern | Primary use | Boundary |
|---|---|---|
| Source-linked installed-work and operational record | [[items/renew-reporting-source-baseline]] | appendix to one approved Evolv rooftop pack, not a passport |
| Long-lived exact-asset provenance model | [[companies/openhouse-ai]] | conceptual reuse only; no shared client data or product expansion |
| Owner-side operations and assurance | [[briefs/2026-08-04-renewables-operations-intelligence-business]] | validate manually before automation or a paid claim |

## Connected vault notes

- [[context/business-opportunities-moc]] - opportunity map
- [[companies/evolv-renewables]] - parent company
- [[project_state/renew]] - live manual-reporting state and paid-baseline gate
- [[goals/renew-pipeline]] - commercial rooftop goal
- [[items/renew-reporting-source-baseline]] - required validation container
- [[items/renew-compliance-reporting-automation]] - downstream only if the baseline passes
- [[items/renew-compliance-portal]] - explicitly not justified by this proposal
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] - permissioned period evidence proof
- [[briefs/2026-09-09-evolv-duos-group-public-benchmark-gate]] - optional public context, not asset continuity
- [[briefs/2026-08-04-renewables-operations-intelligence-business]] - owner-side assurance thesis
- [[companies/openhouse-ai]] - cross-domain evidence-model adjacency only

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-renewables-operations-intelligence-business]]
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]]
- [[briefs/2026-09-09-evolv-duos-group-public-benchmark-gate]]
- [[briefs/2026-09-23-evolv-commercial-solar-grant-grid-readiness-receipt]]
- [[briefs/2026-09-29-evolv-commercial-solar-triple-e-aca-decision-receipt]]
- [[briefs/2026-10-01-evolv-epbd-solar-trigger-decision-receipt]]
- [[briefs/substack-draft-2026-09-27-more-precise-not-complete]]
- [[companies/evolv-renewables]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[goals/renew-pipeline]]
- [[items/renew-compliance-portal]]
- [[items/renew-compliance-reporting-automation]]
- [[items/renew-reporting-source-baseline]]
- [[project_state/renew]]

