---
title: Evolv commercial-solar grant and grid-connection readiness receipt
created: 2026-09-23
status: bounded-research-proposal
company_id: evolv-renewables
scope: one static, permissioned pre-commit receipt for one current commercial rooftop opportunity
source: ground-zero opportunity incubation
---

# Evolv commercial-solar grant and grid-connection readiness receipt

## Bounded proposal

Test whether Evolv can add a one-page, source-linked **grant and grid-connection readiness receipt** to the existing owner-side solar assurance offer for one current commercial rooftop opportunity, before equipment is ordered or installation work starts.

The receipt would bind the permissioned site or meter identity to the current source documents and show, without making a compliance decision:

- who owns the MPRN and whether a Letter of Authority is required;
- the proposed installed capacity and the still-to-be-confirmed ESB Networks route;
- whether the SEAI grant offer exists before purchase or works;
- the grant-offer expiry and connection-stage deadlines;
- the applicable planning or solar-safeguarding question that needs qualified confirmation;
- the registered company, installer and electrician evidence;
- the design, connection, commissioning, photographic, warranty and operating records required at handover; and
- every missing field, its owner and the next irreversible decision it blocks.

This is not a grant application service, engineering design, planning opinion, grid study, compliance certificate, software build or submission to SEAI or ESB Networks. The commercial question is narrower: **does a pre-commit evidence receipt prevent avoidable delay or ambiguity and make one owner decision materially easier than the current survey or quotation pack?**

## Why this is new without opening a new product lane

[[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] starts after operation and reconciles meter, inverter and supplier evidence for one reporting period. [[briefs/2026-09-22-evolv-commercial-renovation-passport-evidence-continuity-gate]] tests long-term evidence continuity after an intervention. [[items/renew-reporting-source-baseline]] measures the recurring reporting workflow.

This proposal tests an earlier boundary that those notes do not cover: **before commitment, has the owner and delivery team assembled enough authoritative evidence to follow the right grant and connection path and preserve the records that the later owner pack will need?** If the ordinary installer process already answers that question cleanly, discard the receipt rather than creating another service.

The wedge is connected to Evolv's existing owner-side operations and assurance thesis and the stated goal to sign three commercial rooftop deals. It does not change [[project_state/renew]] or claim that the July-recorded survey opportunity is still live. Current site status must be refreshed before any test.

## Verified evidence

- SEAI's current Non-Domestic Microgen Grant page covers eligible solar PV systems up to 1,000 kWp and publishes a maximum grant of €162,600. This establishes that a material public-funding process exists, not that any Evolv site qualifies or that a buyer will pay for help.
- SEAI's Application Guide says grant approval must be in place before material purchase or works begin. The offer remains valid for eight months, and the works plus required documentation must be completed within that period.
- The same guide requires an eligible self-consumption site, an active SEAI-registered company and installer, a Safe Electric registered electrician, the applicable ESB Networks connection evidence, and conformance with the scheme Code of Practice.
- SEAI's March 2025 Code of Practice completion checklist includes the Declaration of Works; EN 62446 inspection, test and commissioning report; Safe Electric certificate; the route-specific NC6, NC7 or NC5/NC8 completion evidence; invoice; prescribed installation photographs; equipment datasheets; warranties; an owner O&M manual; start-up, shutdown, safety, operation and maintenance instructions; and an estimated system-performance record.
- SEAI's terms allow desktop audit and site inspection, require access within 14 days when selected, and provide for refusal, revocation or clawback where scheme conditions are breached. They also say the applicant is responsible for permissions, application information and supporting documents.
- ESB Networks separates connection routes by electrical capacity, not by the SEAI grant's kWp bands. Micro-generation covers up to about 6 kVA single-phase or 11 kVA three-phase; mini-generation covers above those limits up to about 17 kVA single-phase or 50 kVA three-phase; inverter-connected small-scale generation covers above 50 kVA three-phase up to 200 kVA. A kWp figure alone is therefore not enough to assign the route.
- ESB Networks currently publishes an 8 to 10 week average from fee payment to connection-offer documents for mini-generation and small-scale generation, with longer periods possible for complex applications. The current published non-refundable application fees are €995.07 for mini-generation and €1,245.99 for small-scale generation, both including VAT at 23%.
- The mini-generation path requires a technical assessment and accepted connection agreement before works progress. After installation, the confirmation certificate is due as soon as the generator is connected and no later than 12 months from the connection-offer date; ESB Networks says the MEC is not updated to the supplier until it receives that certificate.
- Small-scale generation requires a connection agreement, mandatory G10 protection, ESB Networks witness testing before operation, and route-specific post-installation evidence. The corresponding MEC is not updated to the supplier until successful witness testing.

These sources establish a staged, evidence-heavy process with real timing, fee and document consequences. They do not prove that Evolv's current workflow has a gap, that the recorded site is eligible, that a receipt would change a decision, or that anyone will pay for it.

## Source-version and authority boundary

The official materials reviewed are not one same-date document set: the live SEAI page is current at review, the Application Guide is Version 1.4 dated 5 November 2024, the Code of Practice records Version 1.4 dated 4 March 2025, and the SEAI terms PDF carries a 2023 footer. SEAI's own terms say the application-date guide, form and terms control and can be revised.

The receipt must therefore record the URL, document title, visible version or date, retrieval date and application date for every governing source. It must show `CONFIRM CURRENT VERSION` rather than silently reconciling inconsistent or stale wording. A qualified installer, engineer or relevant authority remains the decision-maker for the technical route and compliance interpretation.

## Assumptions to falsify

- Evolv has a current, permissioned commercial rooftop opportunity that is still early enough for a pre-commit check to matter.
- The owner expects Evolv or its delivery partners to coordinate evidence across the grant, grid and handover stages.
- The existing installer survey, quote or contract does not already provide an authoritative, owner-readable version of the same receipt.
- A masked site profile contains enough information to identify the unresolved route and evidence questions without copying credentials or unnecessary commercial data into Ground Zero.
- At least one missing record or deadline can be found before an irreversible purchase, fee, works start, grant expiry or energisation step.
- The owner values a clearer decision or handoff, not merely a more polished checklist.

## Smallest validation test

Run no live-file test until the current Renew state and the named site's status, conflict, confidentiality and IP boundary are refreshed and approved by Sam.

If a suitable current opportunity exists:

1. Freeze the current official SEAI and ESB Networks pages, forms and scheme documents by title, visible version, URL and retrieval date. Do not assume today's documents govern an earlier or later application.
2. In an approved client workspace, create a masked site record containing only the minimum decision fields: controlled asset ID, MPRN-owner role, connection phase, proposed DC kWp, proposed inverter AC kVA, MIC, proposed MEC, export-limiting status, grant stage, connection stage and named source files. Keep the full MPRN, credentials, quotes and client files out of Ground Zero.
3. Build a deterministic route-and-evidence matrix. Every line must be one of `SOURCE CONFIRMED`, `OWNER CONFIRMATION REQUIRED`, `QUALIFIED TECHNICAL CONFIRMATION REQUIRED`, `AUTHORITY CONFIRMATION REQUIRED`, `MISSING` or `NOT APPLICABLE WITH SOURCE`.
4. Compare the receipt with the ordinary survey or quotation pack. Do not fill gaps from memory or vendor marketing.
5. Ask the qualified installer or engineer to confirm only the technical route and evidence-owner fields through the normal approved project channel. The receipt cannot self-certify them.
6. Record preparation minutes, corrections, disputed fields, previously hidden deadlines and whether any purchase, fee, grant, connection, commissioning or handover decision changed.
7. Return one of three outcomes: **discard**, **retain as a manual owner-side assurance template**, or **seek approval for one second-site test**. Do not build a portal, submission bot or grant service from one result.

### Pass gate

Retain the manual template only if:

- every material field is source-linked or visibly unresolved;
- the correct route is confirmed by a qualified party rather than inferred from kWp alone;
- the completed receipt takes no more than 45 additional minutes after source files are available;
- it exposes at least two actionable gaps or resolves one decision that the ordinary pack left ambiguous; and
- the owner or delivery lead says the receipt materially improved a real pre-commit or handover decision.

A complete-looking checklist that changes no decision does not pass.

### Kill gate

Discard or park the wedge if there is no current permissioned site, the registered installer already provides the same owner-readable evidence, the source versions cannot be bounded, the route requires bespoke professional judgement that cannot be represented safely, the additional work exceeds the decision value, or the result is useful only as generic education.

## Downside and safeguards

- Grant, planning and connection rules can change between research, application, offer, installation and payment. The receipt must preserve dates and never claim that an earlier snapshot is current.
- DC array capacity in kWp, inverter or generator capacity in kVA, MIC and MEC are different quantities. A false conversion can send a site down the wrong connection path.
- Missing or incorrect application evidence can create delay, cost or funding risk, but the public sources do not quantify the incidence or prove a paid market.
- MPRNs, connection records, quotes, invoices, equipment serials and operating data are sensitive commercial records. Minimise fields, keep secrets and client files outside Ground Zero, and agree purpose, access, retention and deletion.
- The receipt must not present Evolv as SEAI, ESB Networks, a planning authority, a registered installer, a certifier, a grant adviser, an engineer or a legal adviser unless the relevant real-world role and authority exist independently.
- Do not let this proposal compete with the required [[items/renew-reporting-source-baseline]] or the paid 60 to 90 day owner-side operational baseline in [[project_state/renew]].

## Approval boundary

This note records public-source research and proposes one local, static, permissioned test only. It does not authorise:

- customer, installer, SEAI, ESB Networks, supplier, planning-authority or third-party contact;
- access to a customer's portal, credentials, MPRN, quote, invoice, design file or application;
- an NC6, NC7, NC8, NC5, grant, planning, payment, witness-test or supplier submission;
- payment of an application fee, purchase, works instruction, energisation, export arrangement or operating change;
- engineering, planning, grant, tax, legal or compliance advice;
- a software build, API integration, scheduled ingestion, portal, publication, outreach, spending or production mutation.

Sam must first approve the exact site and evidence scope after conflict, confidentiality and IP review. The registered customer must approve the exact records and purpose. The qualified installer or engineer must confirm the technical route. Any external proposal, paid pilot, submission or second-site test requires separate approval.

## Provenance

Official sources reviewed 23 September 2026:

- SEAI, Non-Domestic Microgen Grant: https://www.seai.ie/grants/business-grants/commercial-solar-pv
- SEAI, Non-Domestic Microgen Scheme Application Guide, Version 1.4: https://www.seai.ie/sites/default/files/grants/business-grants/commercial-solar-pv/Non-Domestic-Microgen-Scheme-Application-Guide.pdf
- SEAI, Non-Domestic Microgen Scheme Code of Practice for Companies and Installers, Version 1.4: https://www.seai.ie/sites/default/files/grants/business-grants/commercial-solar-pv/Non-Domestic-Microgen-Scheme-Code-of-Practice.pdf
- SEAI, Non-Domestic Microgen Scheme Terms and Conditions: https://www.seai.ie/sites/default/files/grants/business-grants/commercial-solar-pv/Non-Domestic-Microgen-Scheme-Terms-and-Conditions.pdf
- ESB Networks, Micro-generation: https://www.esbnetworks.ie/services/get-connected/renewable-connection/micro-generation
- ESB Networks, Mini-generation: https://www.esbnetworks.ie/services/get-connected/renewable-connection/mini-generation
- ESB Networks, Small-scale generation: https://www.esbnetworks.ie/services/get-connected/renewable-connection/small-scale-generation
- CRU, Microgeneration and export-payment overview: https://www.cru.ie/consumer-information/microgeneration

## Connected vault notes

- [[context/business-opportunities-moc]] - opportunity map
- [[companies/evolv-renewables]] - parent company
- [[project_state/renew]] - stale live state that must be refreshed before a site test
- [[goals/renew-pipeline]] - commercial rooftop goal
- [[items/renew-reporting-source-baseline]] - required recurring-workflow validation
- [[items/renew-compliance-reporting-automation]] - downstream only if manual evidence work repeats
- [[items/renew-compliance-portal]] - explicitly not justified by this proposal
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] - post-operation period reconciliation
- [[briefs/2026-09-22-evolv-commercial-renovation-passport-evidence-continuity-gate]] - post-installation lifecycle evidence
- [[briefs/2026-08-04-renewables-operations-intelligence-business]] - owner-side operations and assurance thesis

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-renewables-operations-intelligence-business]]
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]]
- [[briefs/2026-09-22-evolv-commercial-renovation-passport-evidence-continuity-gate]]
- [[briefs/2026-09-25-evolv-electricity-carbon-claims-evidence-boundary]]
- [[briefs/2026-09-26-evolv-local-business-flex-evidence-readiness-gate]]
- [[briefs/substack-draft-2026-09-27-more-precise-not-complete]]
- [[companies/evolv-renewables]]
- [[context/business-opportunities-moc]]
- [[goals/renew-pipeline]]
- [[items/renew-compliance-portal]]
- [[items/renew-compliance-reporting-automation]]
- [[items/renew-reporting-source-baseline]]
- [[project_state/renew]]

