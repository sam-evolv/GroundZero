---
title: OpenHouse construction-product-passport ingestion wedge
date: 2026-08-13
status: bounded-research-proposal
company_id: openhouse-ai
source: primary EU law and official implementation material
---

# OpenHouse construction-product-passport ingestion wedge

## Bounded proposal

Do not position OpenHouse as a construction Digital Product Passport compliance vendor. Test a narrower, adjacent capability: **ingest the passport or passport-ready evidence for products actually installed in a home, bind it to the correct home and system, and preserve it inside the living Home Record for handover, maintenance, warranty, reuse and aftercare.**

This is a new evidence source for the existing OpenHouse architecture, not a new company, product line or active build. It should remain inside the existing [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]] and developer-handover work until a real workflow and buyer signal exist.

## Why this is credible now

Regulation (EU) 2024/3110 creates a construction Digital Product Passport system. The law requires the Commission to establish the system by delegated act. Once that delegated act enters into force, manufacturers have 18 months to make passports available through it.

The passport is intended to contain, among other things:

- the declaration of performance and conformity;
- general product information, use instructions and safety information;
- technical documentation;
- identifiers and data carriers;
- documentation required by other applicable EU law.

The regulation also requires open, interoperable, machine-readable information; differentiated access; long-lived availability; data integrity, privacy and security; and compatibility with Building Information Modelling. Its recitals explicitly connect the common construction-product data dictionary to BIM, building logbooks, digital passports and registries.

The opportunity is therefore not to duplicate the EU passport registry. It is to solve the exact-home problem the regulation does not solve by itself: **which passport belongs to which installed product, in which home, with what installation, commissioning, warranty, maintenance and replacement history?** That is closely aligned with OpenHouse's existing claim-level provenance and living Home Record.

## Timing boundary

This is an early standards-readiness wedge, not a current statutory deadline for Irish developers.

- The Commission had commissioned a feasibility study by September 2025. It compared a central EU database with decentralised models and found a licensed-service-provider model more scalable and adaptable than a fully centralised approach.
- The Commission adopted its first Construction Products Regulation Working Plan 2026–2029 on 16 December 2025.
- The delegated act that establishes the passport system and its operating conditions is still the key trigger. The manufacturer's 18-month implementation clock follows that act.

OpenHouse must not claim that developers currently have to buy a passport solution, that the final data model is settled, or that OpenHouse is accredited or integrated with the EU system.

## Smallest validation test

Run one no-contact, no-production **installed-product manifest** test inside an already permissioned Longview or show-house evidence pack.

1. Choose one home for which OpenHouse already has legitimate organisational permission and usable handover material.
2. Select ten consequential installed products or systems, for example heat pump, ventilation, hot-water, windows, fire-safety equipment and controls.
3. For each, capture only existing evidence: manufacturer, model or product type, serial or batch where available, declaration of performance or conformity, manual, safety information, commissioning record, warranty and current installation location.
4. Map those fields against Articles 75–79 of Regulation (EU) 2024/3110 and store the result as a static local manifest or spreadsheet. Do not build a connector, registry or production feature.
5. Test three real retrieval tasks: identify the exact product, retrieve the relevant safe instruction or warranty evidence, and show what proof is still missing.

### Pass criteria

- at least 7 of 10 products can be bound unambiguously to a product type from existing evidence;
- the manifest makes all three retrieval tasks faster or more reliable than the current document stack;
- unresolved fields remain visibly unknown rather than inferred;
- the full test takes no more than 90 minutes of operator effort after the source pack is assembled;
- no household data is inserted into a manufacturer passport, and no vendor data is reused beyond its permitted purpose.

If the test fails on identifier quality, document availability or operator burden, park the wedge. If it passes, add the field map to the existing handover/context-acquisition specification rather than opening a separate product build.

## Assumptions to falsify

- Developers or operators can recover product-type identifiers and declarations from the handover evidence they already receive.
- Binding a product passport to an exact installed asset creates more practical value than linking to a generic manufacturer page.
- The OpenHouse evidence model can keep manufacturer/product-type facts separate from home-specific installation, commissioning and service facts.
- A future passport data carrier will be accessible under rights compatible with homeowner and aftercare use.
- The eventual delegated act will preserve enough interoperability for an independent Home Record to consume permitted data without becoming the regulated passport registry.

## Downside and constraints

- Final delegated-act rules, identifiers and access rights may change, making premature connector work wasteful.
- Construction-product passports are product-level compliance records, not proof that a particular item was correctly installed, commissioned or maintained in a specific home.
- Many current homes will have weak identifiers and incomplete declarations, so the near-term workflow could be manual and low-yield.
- Manufacturers or passport providers may control access, licensing or service terms.
- A developer may see this as supplier compliance work rather than a paid aftercare benefit.
- Product and household data have different privacy and authority boundaries. OpenHouse must not merge them silently or write homeowner data back into an external passport.

## Approval boundary

This note authorises research and one static, permissioned evidence-mapping exercise only. It does not authorise:

- contacting developers, manufacturers, regulators or passport providers;
- spending money or procuring a service;
- changing production code, schemas or live portals;
- scraping or republishing manufacturer documentation;
- claiming regulatory compliance, accreditation or statutory urgency;
- creating or updating an external Digital Product Passport;
- storing new personal or household data outside the existing approved evidence boundary.

Any external pilot, connector, vendor relationship, production implementation or public claim requires Sam's explicit approval after the static test and the delegated-act/access-rights position are rechecked.

## Provenance

Primary and official sources reviewed 13 August 2026:

- Regulation (EU) 2024/3110, especially Articles 22(7) and 75–79: https://eur-lex.europa.eu/eli/reg/2024/3110/oj
- Official Publications Office edition: https://op.europa.eu/en/publication-detail/-/publication/a860ee13-bce2-11ef-91ed-01aa75ed71a1/language-en
- European Commission construction-platform summary of the DPP feasibility study, 26 September 2025: https://transition-pathways.europa.eu/construction/construction-products/feasibility-study-establishment-construction-products-regulation
- Official feasibility-study record: https://op.europa.eu/en/publication-detail/-/publication/cf329d5e-3464-11f0-8a44-01aa75ed71a1/language-en
- European Commission construction-platform notice on the CPR Working Plan 2026–2029, 7 January 2026: https://transition-pathways.europa.eu/construction/construction-products/first-working-plan-implementation-construction-products
- Belgian FPS Economy implementation overview, including the delegated-act and 18-month sequencing: https://economie.fgov.be/en/themes/enterprises/specific-sectors/construction/construction-products/regulation-eu-20243110/digital-product-passport

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/openhouse-ai]] — parent company and living Home Record architecture
- [[project_state/oh]] — current OpenHouse gates and approval boundaries
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]] — exact-home evidence authority
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]] — correct validation container
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]] — digital building logbook policy context
- [[items/oh-handover-readiness-scan]] — nearest existing workflow, not a new active project

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[items/oh-handover-readiness-scan]]
- [[project_state/oh]]

