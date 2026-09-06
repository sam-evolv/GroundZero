---
title: Evolv customer-authorised meter-data reconciliation proof
created: 2026-09-06
status: proposed-test
company_id: evolv-renewables
scope: one Irish commercial rooftop, manual read-only evidence proof
source: ground-zero opportunity incubation
---

# Evolv customer-authorised meter-data reconciliation proof

## Bounded proposal

Test whether one existing Evolv commercial rooftop can produce a trustworthy owner-facing energy evidence pack from three permissioned sources:

1. the registered customer's ESB Networks Harmonised Downloadable (HDF) CSV containing smart-meter import and export readings;
2. the site's inverter or monitoring-portal generation export; and
3. the supplier bill or microgeneration credit statement for the same period.

The immediate outcome is not a portal or automated API integration. It is one manually assembled reconciliation that distinguishes measured generation, grid import, grid export, derived on-site use, missing intervals and billing/settlement differences. If this removes real reporting effort or exposes a decision-relevant discrepancy, it becomes a narrow input to [[items/renew-reporting-source-baseline]] and the broader owner-side assurance thesis.

## Verified evidence

- ESB Networks says smart meters record consumption and applicable export in intervals of up to 30 minutes, and customers can view and download their data through the ESB Networks Online Account.
- ESB Networks says the downloadable HDF files are CSVs and can contain 30-minute kW and kWh readings plus daily usage/export snapshots, with up to two years visible. Access is limited to the registered customer for the MPRN.
- CRU says microgeneration customers can be paid for each metered exported kWh and that customers on a smart tariff can download half-hour demand and export data from the ESB Networks customer portal.
- ESB Networks warns that supplier billing can use estimated interval data when communications fail, while the online account shows actual meter data only. Timing or estimation can therefore create differences that must be labelled and investigated rather than called an error automatically.
- SEAI's Non-Domestic Microgen Grant currently supports solar PV systems from 1 kWp to 1,000 kWp, confirming that the official Irish commercial-solar pathway spans small-business through materially larger rooftop systems. This does not establish demand for this reporting service.

## Inference and opportunity boundary

The HDF creates a low-cost, customer-controlled evidence source for the existing [[items/renew-grid-automation]] question. Combining it with inverter generation and supplier settlement data could make export, self-consumption, missing-data and payment discrepancies inspectable without granting Evolv plant-control rights.

This is a refinement of the existing reporting and owner-side assurance direction, not a new standalone SaaS thesis. No universal ESB Networks third-party API, delegated-access flow or unattended download route was verified. The first proof must therefore be file-based and customer-authorised.

## Assumptions to test

- The live rooftop has a communicating smart meter and the correct microgeneration registration.
- The registered MPRN customer can access an HDF containing export data for the chosen period.
- The inverter or monitoring portal can export generation data at a usable cadence.
- The supplier statement exposes the billed or credited export period and units clearly enough to compare.
- The parties agree in advance which differences are acceptable and who can adjudicate a discrepancy.

## Smallest validation test

**Scope:** one existing rooftop and one complete billing/reporting period; no new software, account integration, subscription or production write.

1. Obtain explicit owner approval for the named period and files.
2. Have the registered MPRN customer download the HDF themselves; do not copy credentials or assume delegated portal access.
3. Export generation data from the inverter/monitoring source and obtain the matching supplier statement.
4. Record source owner, extraction time, timezone, units, interval cadence, missing rows and whether values are actual, estimated or derived.
5. Produce a deterministic reconciliation table and a one-page owner pack with every figure linked to its source.
6. Record manual minutes, corrections, unresolved differences and whether the result changed a payment, maintenance, reporting or operating decision.
7. Decide **stop**, **retain as a manual template**, or **promote into the existing reporting baseline**.

### Pass gate

Promote only if all three sources are permissioned and interpretable; missing or estimated periods are visible; totals reconcile within a tolerance agreed before the test or every exception has an owner; and the pack either removes material recurring effort or surfaces a decision-relevant discrepancy. A paid follow-on remains separately gated.

### Kill gate

Stop if the site lacks usable interval/export data, the customer cannot lawfully provide it, the inverter export is not comparable, the supplier statement cannot be mapped to the same period, or the result merely recreates an existing trusted report.

## Downside and safeguards

- Smart-meter data can reveal business operating patterns and is treated as personal data by ESB Networks; minimise the period, use explicit purpose-bound approval, restrict access, and agree retention/deletion before collection.
- MPRN access follows the registered customer. Evolv must not retain portal credentials or represent itself as the account owner.
- Portal data and supplier billing data can legitimately differ because of estimates or timing. The pack must label source semantics and never allege underpayment from a raw mismatch alone.
- Interval cadence, units and timezone handling can create false discrepancies. Preserve original files and deterministic transformation receipts.
- One rooftop proves feasibility only. It does not prove a repeatable market, a universal connector or willingness to pay.

## Approval boundary

This note authorises research and a proposed manual test only. It does not authorise customer contact, credential access, collection of live site data, a paid tool, an API integration, a software build, a supplier complaint, a commercial claim or any operational/control action. Sam must approve the exact customer/data test after conflict, confidentiality and IP review; the registered customer must approve the exact files and purpose.

## Open gaps

- Current smart-meter, NC6/NC7, MPRN-owner and supplier status of the live Evolv rooftop.
- Exact HDF schema and whether export rows are available for that site.
- Inverter vendor/export format and clock convention.
- Existing reporting recipient, cadence, acceptance tolerance and measured labour.
- Whether the customer would value or pay for this pack after seeing one manual result.

## Provenance

Official sources checked 6 September 2026:

- [ESB Networks — Smart meters and data](https://www.esbnetworks.ie/services/manage-my-meter/about-smart-meters/smart-meters-and-data)
- [ESB Networks — My energy consumption](https://www.esbnetworks.ie/customer-support/customer-support-queries/meter-reading/my-energy-consumption)
- [ESB Networks — Meter reading policy](https://www.esbnetworks.ie/services/manage-my-meter/meter-reading-policy)
- [CRU — Microgeneration](https://www.cru.ie/consumer-information/microgeneration)
- [SEAI — Non-Domestic Microgen Grant](https://www.seai.ie/grants/business-grants/commercial-solar-pv)

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/evolv-renewables]] — company context
- [[project_state/renew]] — live state and paid-baseline gate
- [[goals/renew-pipeline]] — commercial goal
- [[items/renew-reporting-source-baseline]] — prerequisite workflow baseline
- [[items/renew-grid-automation]] — existing data-automation question
- [[items/renew-compliance-reporting-automation]] — possible downstream use
- [[briefs/2026-08-04-renewables-operations-intelligence-business]] — broader owner-side assurance thesis
- [[briefs/2026-08-04-renewable-operations-business-proposition]] — commercial boundary and no-build gate

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/business-opportunities-moc]]

