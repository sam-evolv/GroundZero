---
title: Evolv energy-sharing readiness and reconciliation gate
created: 2026-10-04
status: watch-and-bounded-test-proposal
company_id: evolv-renewables
scope: one static, permissioned two-premises interval-data dry run; no live energy sharing
source: ground-zero opportunity incubation
---

# Evolv energy-sharing readiness and reconciliation gate

## Bounded proposal

Test whether Evolv should retain a one-page **energy-sharing readiness and interval-allocation receipt** for one real Irish owner or customer with:

- at least two separately metered premises;
- renewable generation exporting from at least one premises; and
- a credible reason to allocate excess generation to the other premises once an Irish operational framework exists.

The first test is a historical, read-only dry run. It would use customer-authorised interval exports to establish whether the metering, timestamps, export and receiving-load evidence could support an auditable half-hourly allocation in future. It would not perform energy sharing, calculate a legally effective bill, choose a tariff, register an arrangement or claim savings.

The receipt would record only:

- the two controlled site identifiers and whether they are separate premises of one owner or separate customers;
- meter and interval-data availability, cadence, timezone, source owner and missing/estimated periods;
- generation-site export and recipient-site import for one approved historical period;
- one explicitly illustrative allocation rule applied interval by interval, capped by recorded export and recipient demand;
- unresolved legal, market, supplier, network-charge, tax, levy, settlement, payment and customer-protection dependencies; and
- one outcome: `NO CURRENT OPERATIONAL ROUTE — WATCH`, `DATA READY FOR A LATER REGULATED TEST`, or `DISCARD — NO DECISION VALUE`.

The commercial question is narrow: **can Evolv use its existing customer-authorised meter-data and owner-side assurance capability to identify future energy-sharing data readiness without presenting Ireland's unfinished framework as an available service?**

This is not an Energy Sharing Organiser (ESO), trading platform, billing product, PPA, supplier service or regulatory application. It is subordinate to [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]], [[items/renew-reporting-source-baseline]] and the paid owner-side baseline in [[project_state/renew]].

## Why this is genuinely new but gated

A vault-wide search on 4 October 2026 found no existing note for energy sharing, Article 15a, Energy Sharing Organisers or multiple supply contracts. Existing Evolv work covers one-site import/export reconciliation, flexibility readiness, self-consumption, the Clean Export Guarantee and SRESS export-only routes. It does not test cross-premises interval allocation or preserve the regulatory wait state created by Ireland's missed transposition deadline.

The new official evidence establishes both an opportunity and a hard stop:

- EU law creates a future right for households, SMEs and public bodies to participate in energy sharing and allows a third-party organiser to support communications, flexibility, billing, metering and maintenance.
- The European Commission said on 25 September 2026 that Ireland had not communicated full transposition of the free-choice-of-supplier and energy-sharing provisions due by 17 July 2026, opened an infringement procedure and gave Ireland two months to respond and complete notification.
- The CRU's January 2026 paper is explicitly a conceptual design and early policy-stage call for evidence. It anticipates further engagement after Irish transposition and does not establish a live registration, settlement or billing route.

That combination supports a **readiness-and-watch gate**, not a launch. Any dry run is only a data-compatibility exercise that could be discarded once final Irish rules exist.

## Verified evidence

- Directive (EU) 2024/1711 Article 15a requires Member States to give households, small and medium-sized enterprises and public bodies a non-discriminatory right to participate in energy sharing within the same bidding zone or a smaller national area. Active customers may share renewable energy through private agreements or a legal entity.
- Article 15a permits active customers to appoint an energy-sharing organiser for communications with suppliers and network operators, management of flexible loads/generation/storage, contracting and billing, and installation or operation of generation, storage or metering. The Member State must define the regulatory framework.
- Shared electricity is to be deducted from metered consumption within a time interval no longer than the imbalance settlement period, while applicable taxes, levies and cost-reflective network charges remain relevant. System operators or another designated body must monitor, collect, validate and communicate shared-energy meter data at least monthly and provide a registration/information contact point.
- The Directive set 17 July 2026 as the transposition deadline for the amended free-choice-of-supplier and new energy-sharing provisions. On 25 September 2026 the European Commission named Ireland among 18 countries that had not notified full transposition and issued letters of formal notice with a two-month response window. This is a failure-to-notify/full-transposition action, not proof that every Irish rule is absent or that a particular arrangement is unlawful.
- Ireland's S.I. No. 76/2022 already recognises active customers, peer-to-peer trading, jointly acting renewables self-consumers in the same building and energy sharing within citizen or renewable energy communities, subject to applicable rights, charges and later CRU rules. Those provisions must not be confused with proof that the broader Article 15a cross-premises operational process is live.
- The CRU published its conceptual design on 7 January 2026. Its public page describes initial high-level solutions and early-stage policy development; 22 submissions are shown. The paper says final requirements depend on Irish transposition and that more detailed engagement is expected afterwards.
- The CRU's working design considers bilateral sharing between customers, between separate premises of the same customer and between businesses. It also considers an ESO model. For bilateral arrangements, ESB Networks' online account is envisaged as the instruction surface, while payment would remain between the parties. Under the ESO concept, the ESO would issue allocation instructions and manage member payments.
- The CRU paper assumes, for design purposes only, that distribution-connected customers would need an activated smart meter on MCC12 so ESB Networks has data for every 30-minute period. It says an ESO would issue sharing instructions for each half-hourly period. These are conceptual assumptions, not final eligibility or system specifications.
- The CRU identifies material implementation risks: governance uncertainty, supplier forecasting and competition effects, central-market and portal changes, billing and settlement cost, uncertain demand/ESO viability, data protection, cybersecurity and customer-payment exposure.

These sources establish a credible future reconciliation and evidence problem. They do **not** establish a live Irish route, final eligibility, a production interface, an approved allocation method, a settlement price, tax/network-charge treatment, savings, customer demand or a right for Evolv to act as an ESO.

## Assumptions to falsify

- Evolv has one permissioned owner or customer with two separately metered Irish premises and renewable exports at one site; no such live candidate is established in Ground Zero.
- The registered customers can lawfully provide compatible interval import/export files without sharing portal credentials.
- A historic dry run can be completed with minimised, purpose-bound data and without creating a misleading bill, credit or legal entitlement.
- The data-readiness receipt exposes a material future blocker or site-pairing question rather than duplicating the existing one-site reconciliation proof.
- A final Irish framework will preserve enough of the CRU concepts for this data work to remain relevant. It may not.
- A competent energy-market adviser can confirm the final framework before any customer reliance, registration, contracting or payment.
- There is eventual buyer value in readiness or assurance; public policy movement alone does not prove willingness to pay.

## Smallest validation test

Do not access customer records, contact any authority, request an MPRN file or reuse a live site's data until Sam approves the exact two-premises candidate and the conflict, confidentiality and IP boundary.

If a suitable candidate exists:

1. Re-check the Irish Statute Book, Department, CRU and European Commission sources on the day of the test. If transposition or a CRU decision has appeared, replace the conceptual assumptions with the enacted and operative requirements before proceeding.
2. Freeze every governing source by title, identifier, visible date/version, URL and retrieval time. Label the regulatory state `conceptual`, `enacted`, `decided`, `implemented` or `operational`; do not collapse those states.
3. Have each registered customer export the minimum approved historical interval file. Do not collect portal credentials. Add the generation/inverter export only if it is already permissioned and needed to distinguish generation from grid export.
4. Record source owner, meter status, cadence, timezone, units, estimated/actual semantics, missing intervals and period boundaries. Keep addresses, MPRNs, credentials, full bills and personal data outside Ground Zero.
5. For one seven-day historical slice, run one transparent illustrative rule solely to test data compatibility: allocate no more than the generator site's measured export or the recipient site's measured demand in each interval. Label the result `counterfactual — no settlement or bill effect`.
6. Reconcile interval totals and create an exception ledger for missing data, cadence mismatch, clock/DST issues, estimated readings, negative values and unmatched periods. Do not assign a price, tax, levy, network charge, supplier credit or carbon attribute.
7. Compare the result with the ordinary one-site meter-data reconciliation. Record whether cross-premises treatment adds a genuinely new evidence need, changes which sites appear compatible or identifies a final-rule question worth preserving.
8. Return one decision: **discard**, **watch without further work**, or **retain as a manual readiness template pending enacted and operational Irish rules**. Do not build software, register, contract, bill, market or contact anyone from one dry run.

### Pass gate

Retain the manual template only if:

- a real approved two-premises candidate and minimum lawful data exist;
- every input and transformation is source-linked and reproducible;
- the output clearly distinguishes historical evidence, counterfactual arithmetic and absent legal/market implementation;
- at least one material data, site-pairing or future implementation question is exposed before commitment;
- the incremental work is no more than 60 minutes after the existing reconciliation inputs are available; and
- the owner or delivery lead says the receipt changes a real future-readiness decision.

A policy explainer, a simulated saving, a generic ESO pitch or a polished document with no changed decision does not pass.

### Kill or wait gate

Discard or park the wedge if there is no suitable two-premises candidate; interval data is unavailable or cannot be lawfully combined; the work merely repeats the one-site reconciliation; no decision changes; an adviser or supplier already provides the same evidence; the final Irish design invalidates the assumed data shape; or the advisory and data-protection burden exceeds the value.

While full transposition, CRU rules, system-operator processes and an operational route remain unverified, the only permitted outcome is `WATCH` or a private historical data-compatibility result. No commercial energy-sharing offer is authorised.

## Downside and safeguards

- **Premature-market risk:** an EU right and a CRU concept are not a working Irish service. Use explicit stage labels and re-check primary sources before every use.
- **False savings:** interval allocation does not establish avoided import cost, export payment, network charges, levies, taxes, supplier treatment or settlement. Do not price the counterfactual.
- **Double counting:** the same exported kWh must not be represented as simultaneously shared, CEG-paid, SRESS-supported, self-consumed or carrying duplicate renewable/carbon attributes.
- **Data sensitivity:** interval files can expose operating patterns. Minimise sites and periods, obtain purpose-bound approval, restrict access and agree retention/deletion.
- **Identity and authority:** an owner with two sites, two separate customers and an energy community are different arrangements. Do not infer consent or legal authority across MPRNs.
- **Settlement mismatch:** CRU concepts contemplate half-hourly instructions, while billing and source files may contain estimates, revisions or different period semantics. Keep the result counterfactual and exception-led.
- **Cyber and payment exposure:** Evolv must not become an ESO, custodian, biller or funds intermediary through a spreadsheet pilot.
- **Regulatory drift:** final Irish rules may change eligibility, geography, metering, allocation, registration, supplier, network-charge and customer-protection requirements.
- **Priority drift:** this remains subordinate to a real rooftop sale, [[items/renew-reporting-source-baseline]] and the paid owner-side assurance baseline.

## Approval boundary

This note authorises public-source research and records one possible later historical dry run. It does not authorise:

- customer, supplier, ESB Networks, CRU, Department, SEAI, adviser, community, installer or third-party contact;
- access to a portal, MPRN account, meter, bill, customer file, inverter account, credentials or live site data;
- registration, notification, an energy-sharing agreement, supplier change, multiple supply contract, tariff choice, allocation instruction, settlement, payment or invoice;
- operation as an ESO, supplier, aggregator, balance-responsible party, market participant or data intermediary;
- legal, regulatory, engineering, grid, tax, financial, investment, billing, carbon or consumer-protection advice;
- publication, outreach, lead generation, spending, software development, API integration, automation or production mutation.

Sam must approve the exact sites and evidence scope after conflict, confidentiality and IP review. Each registered customer must approve the files, purpose, recipients and retention. A competent energy-market adviser must confirm enacted rules and the operational route before any reliance. Any contact, paid pilot, customer-facing document, second case or software work requires separate approval.

## Open gaps

- Whether Ireland responds within the Commission's two-month formal-notice window and what transposing measures are enacted.
- The final CRU policy, decision, implementation timetable, registration route and ESB Networks system/process changes.
- Final participant eligibility, geographic limits, metering/MCC rules, allocation methods and correction/revision handling.
- Supplier, balancing, network-charge, levy, tax, payment, dispute, data-controller and customer-protection treatment.
- Whether an existing Evolv customer has two suitable premises and would value a readiness receipt.
- Whether supplier, adviser, community-energy or system-operator processes will make a separate Evolv receipt unnecessary.

## Provenance

Official sources reviewed 4 October 2026:

- European Commission, Directorate-General for Energy, *Commission takes action to ensure complete and timely transposition of EU directives — key decisions on energy*, 25 September 2026: https://energy.ec.europa.eu/news/commission-takes-action-ensure-complete-and-timely-transposition-eu-directives-key-decisions-energy-2026-09-25_en
- EUR-Lex, *Directive (EU) 2024/1711*, especially Article 15a and Article 3: https://eur-lex.europa.eu/eli/dir/2024/1711/oj/eng
- CRU, *Call for Evidence on CRU's Conceptual Design for Energy Sharing and Multiple Supply Contracts*, published 7 January 2026; public portal shows the consultation closed and 22 submissions: https://consult.cru.ie/en/consultation/call-evidence-cru%E2%80%99s-conceptual-design-energy-sharing-and-multiple-supply-contracts
- CRU, *Conceptual Design Paper — Energy Sharing and Multiple Supply Contracts*, reference CRU/2025261: https://consult.cru.ie/en/system/files/flipbook_pdf/CRU2025261-Conceptual%20Design%20Paper%20Energy%20Sharing%20and%20Multiple%20Supply%20Contracts(1).pdf
- Irish Statute Book, *S.I. No. 76/2022 — European Union (Renewable Energy) Regulations 2022*: https://www.irishstatutebook.ie/eli/2022/si/76/made/en/print

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/evolv-renewables]] — company context
- [[project_state/renew]] — stale live state and paid owner-side baseline gate
- [[goals/renew-pipeline]] — commercial rooftop goal
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] — parent customer-authorised interval-data proof
- [[briefs/2026-10-03-evolv-self-consumption-sress-export-route-gate]] — separate self-consumption versus export-only support boundary
- [[briefs/2026-09-25-evolv-electricity-carbon-claims-evidence-boundary]] — renewable-attribute and carbon-claim boundary
- [[items/renew-reporting-source-baseline]] — prerequisite workflow baseline
- [[items/renew-grid-automation]] — downstream interval-data and export-reconciliation question

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/substack-draft-2026-10-04-waiting-for-review-is-not-finished]]
- [[context/business-opportunities-moc]]

