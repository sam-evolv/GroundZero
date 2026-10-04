---
title: Evolv electricity carbon-claims evidence boundary
created: 2026-09-25
status: bounded-research-proposal
company_id: evolv-renewables
scope: one static, permissioned electricity-activity and attribute appendix for one operating commercial rooftop
source: ground-zero opportunity incubation
---

# Evolv electricity carbon-claims evidence boundary

## Bounded proposal

Test whether Evolv can add one static, source-linked **electricity activity and attribute appendix** to the existing owner-side reporting proof for one operating commercial rooftop.

The appendix would separate facts that are easy to blur in a solar report:

- grid import, solar generation, export and derived on-site consumption;
- actual, estimated and derived readings;
- the reporting period and meter boundary;
- the owner and contractual status of the generating asset;
- the supplier's published Fuel Mix Disclosure and CO2 intensity;
- any tariff, power-purchase, Guarantee of Origin or generator-attribute evidence supplied by the owner;
- each emission factor's year, geography, units and system boundary; and
- every accounting classification that still requires confirmation by the owner's qualified carbon accountant or assurance provider.

This is not a carbon footprint, CSRD service, emissions assurance, green-electricity certification, Guarantee of Origin service, avoided-emissions claim or software build. The commercial question is narrower: **does an evidence-bound appendix prevent a material electricity or renewable-attribute misstatement and make one owner's reporting handoff easier than the existing energy pack alone?**

## Why this is new but subordinate to existing work

[[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] already tests the physical-energy evidence: customer-authorised meter import/export, inverter generation and the supplier statement for one period. [[briefs/2026-09-09-evolv-duos-group-public-benchmark-gate]] adds only a contextual DUoS shape. [[items/renew-reporting-source-baseline]] remains the prerequisite workflow baseline.

Those notes do not test the separate **claim boundary**: which factor applies to which activity, what a supplier-specific fuel mix represents, whether renewable attributes were retained or transferred, and which conclusions remain outside Evolv's authority. The proposed appendix should therefore be attempted only as a small add-on to a successful reconciliation proof, not as another independent product lane.

No existing Ground Zero note used the terms `Scope 2`, `location-based`, `market-based`, `residual mix` or `carbon accounting` when checked on 25 September 2026. This records a genuine evidence gap, not proof of customer demand.

## Verified evidence

- GHG Protocol's current Scope 2 Guidance covers emissions from purchased or acquired electricity, steam, heat and cooling. Its official overview says the guidance contains requirements for energy contracts and instruments, eight quality criteria for contractual instruments and recommendations for transparent energy-purchase disclosure.
- The current guidance requires organizations operating where contractual instruments exist to report scope 2 using both location-based and market-based methods. A renewable-energy claim therefore cannot be inferred from physical meter flow alone.
- CRU says Irish suppliers must disclose annually the fuel mix and CO2 intensity of the electricity supplied to customers. It also says a Guarantee of Origin represents one MWh of renewable generation, is tradable across the EU and does not have to follow the physical flow of electricity.
- CRU explicitly notes that imported Guarantees of Origin can make a supplier's disclosed renewable share higher than the share of renewable electricity physically generated and distributed in Ireland. It says the AIB exchange system is intended to prevent double counting.
- SEMO says suppliers make annual declarations using instruments such as Guarantees of Origin, qualifying contracts and generator attributes. A supplier that does not submit a declaration has the residual mix applied to its demand.
- SEMO says an unsupported electricity producer or an active supplier may register for an Irish Guarantee of Origin account. Producers can request and transfer certificates, while cancellation for Irish Fuel Mix Disclosure is performed by suppliers. Unclaimed eligible generator attributes enter the residual mix.
- SEAI's current electricity-consumption factor is a 2025 provisional national-statistics factor of 197.8 gCO2/kWh. SEAI says this factor combines scope 2 generation emissions with scope 3 transmission and distribution losses and plant own-use. It is therefore not safely interchangeable, without method confirmation, with a pure scope 2 factor or a supplier-specific market-based factor.
- SEAI's Large Energy User electricity-emissions framework is a recommendation report. SEAI says the decision whether and how to implement it belongs to government. It must not be presented as a current universal reporting requirement.
- GHG Protocol's official page says a public consultation on revisions to the 2015 Scope 2 Guidance ran from 20 October 2025 to 31 January 2026. The proposals and feedback are not final guidance. Any template must preserve the governing version and fail visibly when the standard changes.

These sources establish a real classification and evidence problem around physical electricity, contractual claims and factor boundaries. They do not prove that Evolv's customer currently makes an incorrect claim, has a reporting obligation, wants this appendix or will pay for it.

## Assumptions to falsify

- A current, permissioned Evolv rooftop owner has an actual reporting recipient, such as management, an accountant, a lender, an investor or an assurance provider.
- The existing owner report includes or is expected to support electricity-emissions or renewable-electricity statements.
- The physical-energy reconciliation passes first and exposes a stable import, generation, export and on-site-consumption ledger.
- The owner can supply the applicable tariff or contract, supplier bill and Fuel Mix Disclosure, plus any evidence governing renewable attributes.
- The generating-asset ownership, support status and contractual rights are knowable without guessing from export payments or energy flow.
- A qualified carbon accountant or assurance provider will confirm classifications; Evolv is valuable as the evidence preparer, not the accounting authority.
- The appendix prevents a real ambiguity or rework rather than repackaging information already controlled by the owner's accountant.

## Smallest validation test

Do not run this as a separate live-data exercise. First complete, or obtain Sam's approval to combine it with, the exact permissioned test in [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]].

For one closed reporting period at one operating rooftop:

1. Preserve the authorised source files and their semantics: MPRN-controlled meter data, inverter generation, supplier bill or export statement, reporting period, timezone, units and actual/estimated/derived status. Keep credentials and full client files outside Ground Zero.
2. Produce a deterministic activity ledger for grid import, generation, export and derived on-site consumption. Label the meter boundary and every formula; do not call a derived value measured.
3. Add an attribute ledger containing only evidenced fields: asset owner/operator, support status, supplier and tariff, applicable supplier Fuel Mix Disclosure, and any contract, Guarantee of Origin, cancellation, transfer or generator-attribute record supplied by the owner. Use `NOT EVIDENCED` rather than inference.
4. Add a factor registry for every proposed number: source authority, title, publication year, geography, activity covered, CO2 or CO2e basis, included scopes or losses, units and retrieval date. Do not calculate a final footprint unless separately commissioned and controlled by a qualified party.
5. Ask the owner's qualified carbon accountant or assurance provider, through an approved channel, to confirm only the classification and factor-selection fields. Record corrections and unresolved disagreements; Evolv does not overrule them.
6. Return a one-page appendix that separates `PHYSICAL ACTIVITY`, `CONTRACTUAL ATTRIBUTE`, `FACTOR`, `QUALIFIED CONFIRMATION REQUIRED` and `OUT OF SCOPE`.
7. Record incremental preparation time, corrections, evidence gaps and whether the appendix prevented one unsupported statement, changed a reporting input or reduced a real handoff cycle.
8. Decide **discard**, **retain as a manual appendix to the reporting baseline**, or **seek approval for one paid second-site test**. Do not build a calculator, portal or automated disclosure workflow from one result.

### Pass gate

Retain the manual appendix only if:

- the underlying energy reconciliation passes its own gate;
- every material figure and attribute is source-linked or visibly unresolved;
- a qualified reviewer confirms the method boundaries after no more than one correction cycle;
- incremental preparation takes no more than 60 minutes once the source files are available; and
- the appendix prevents at least one material claim or factor ambiguity, or materially reduces a real reporting handoff.

A polished table with no changed decision or reduced rework does not pass.

### Kill gate

Discard or park the wedge if the owner has no real reporting recipient, the accountant already controls an equivalent evidence schedule, the physical data cannot reconcile, asset or attribute rights cannot be evidenced, source periods cannot be aligned, the qualified reviewer will not rely on the evidence format, the standard changes faster than the template can be governed, or the work adds more risk than decision value.

## Downside and safeguards

- **Greenwashing and double counting:** physical renewable generation, export revenue, a supplier green tariff and ownership of renewable attributes are not interchangeable. Never imply that the environmental benefit follows the electrons or the payment without evidence.
- **Factor misuse:** SEAI's national electricity-consumption factor includes elements beyond scope 2 generation. Do not label it a pure scope 2 factor or mix it silently with supplier, residual-mix, marginal or life-cycle factors.
- **Boundary error:** asset ownership, third-party on-site supply, PPAs, support and exported attributes can change the accounting treatment. Escalate classification; do not infer it.
- **Standards drift:** the 2015 GHG Protocol guidance is under revision. Record source versions, retrieval dates and a review-by date; never treat consultation proposals as current requirements.
- **False compliance positioning:** the SEAI LEU framework is not a universal implemented mandate, and CSRD applicability is entity-specific. The appendix cannot claim regulatory compliance.
- **Sensitive operational data:** interval data can reveal operating patterns. Minimise the period, agree purpose, access, retention and deletion, and keep credentials and unnecessary commercial records outside Ground Zero.
- **Professional authority:** final accounting, assurance, tax, legal and regulatory conclusions remain with the customer's qualified advisers.
- **Priority drift:** this proposal must not displace the paid 60-90 day operational baseline in [[project_state/renew]] or create a new build before [[items/renew-reporting-source-baseline]] is validated.

## Approval boundary

This note records official-source research and proposes one local, static, permissioned appendix only. It does not authorise:

- customer, accountant, auditor, supplier, SEMO, CRU, SEAI or third-party contact;
- access to credentials, portals, MPRNs, contracts, bills, interval data or client files;
- a carbon footprint, Scope 2 calculation, CSRD assessment, assurance opinion, green claim or avoided-emissions claim;
- registration, issuance, transfer, purchase, sale or cancellation of a Guarantee of Origin or generator attribute;
- a supplier declaration, complaint, regulatory filing or public disclosure;
- a software build, API integration, scheduled ingestion, publication, outreach, spending or production mutation.

Sam must first approve the exact site, recipient, evidence scope and conflict, confidentiality and IP boundary. The registered customer must approve the exact records and purpose. A qualified carbon accountant or assurance provider must confirm classifications and factor selection. Any external proposal, paid pilot, second-site test or recurring service requires separate approval.

## Open gaps

- Whether any current Evolv owner has an electricity-emissions reporting recipient and what method that recipient requires.
- The live rooftop's asset ownership, support and renewable-attribute arrangements.
- The applicable supplier, tariff, Fuel Mix Disclosure and reporting year.
- Whether exported generation has any separate contractual attribute treatment at the site.
- Which qualified reviewer would accept or reject the appendix and what evidence format they require.
- Whether the evidence saves time or only moves work from the accountant to Evolv.
- The final form and effective date of the revised GHG Protocol standard.

## Provenance

Official sources reviewed 25 September 2026:

- GHG Protocol, Scope 2 Guidance overview: https://ghgprotocol.org/scope-2-guidance
- GHG Protocol, Scope 2 Guidance (2015): https://ghgprotocol.org/sites/default/files/2023-03/Scope%202%20Guidance.pdf
- GHG Protocol, Scope 2 public-consultation feedback summary (29 July 2026): https://ghgprotocol.org/sites/default/files/2026-07/S2-ExecutiveSummary-PublicConsultation%20ummaryofFeedback-2026.07.29.pdf
- SEAI, Conversion factors: https://www.seai.ie/data-and-insights/seai-statistics/conversion-factors
- SEAI, Large Energy Users electricity emissions reporting framework: https://www.seai.ie/plan-your-energy-journey/for-your-business/standards/electricity-emissions-reporting-framework
- CRU, Fuel Mix and Guarantees of Origin: https://www.cru.ie/regulations-policy/energy/fuel-mix-and-guarantees-of-origin/
- SEMO, Guarantees of Origin: https://www.sem-o.com/markets/guarantees-of-origin
- SEMO, Fuel Mix Disclosure: https://www.sem-o.com/markets/fuel-mix-disclosure
- AIB, European Residual Mix 2025: https://www.aib-net.org/facts/european-residual-mix/2025

## Connected vault notes

- [[context/business-opportunities-moc]] - opportunity map
- [[companies/evolv-renewables]] - parent company
- [[project_state/renew]] - stale live state and paid-baseline gate
- [[goals/renew-pipeline]] - commercial rooftop goal
- [[items/renew-reporting-source-baseline]] - prerequisite workflow baseline
- [[items/renew-compliance-reporting-automation]] - downstream only if the manual evidence schedule repeats
- [[items/renew-compliance-portal]] - explicitly not justified by this proposal
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] - required physical-energy evidence proof
- [[briefs/2026-09-09-evolv-duos-group-public-benchmark-gate]] - contextual public-data layer, not a carbon factor
- [[briefs/2026-09-23-evolv-commercial-solar-grant-grid-readiness-receipt]] - distinct pre-commit evidence boundary
- [[briefs/2026-08-04-renewables-operations-intelligence-business]] - owner-side operations and assurance thesis

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-renewables-operations-intelligence-business]]
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]]
- [[briefs/2026-09-09-evolv-duos-group-public-benchmark-gate]]
- [[briefs/2026-09-23-evolv-commercial-solar-grant-grid-readiness-receipt]]
- [[briefs/2026-09-26-evolv-local-business-flex-evidence-readiness-gate]]
- [[briefs/2026-09-29-evolv-commercial-solar-triple-e-aca-decision-receipt]]
- [[briefs/substack-draft-2026-09-27-more-precise-not-complete]]
- [[companies/evolv-renewables]]
- [[context/business-opportunities-moc]]
- [[goals/renew-pipeline]]
- [[items/renew-compliance-portal]]
- [[items/renew-compliance-reporting-automation]]
- [[items/renew-reporting-source-baseline]]
- [[project_state/renew]]

