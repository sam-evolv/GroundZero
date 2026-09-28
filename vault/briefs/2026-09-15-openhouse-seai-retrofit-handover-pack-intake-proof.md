---
title: OpenHouse SEAI retrofit handover pack intake proof
date: 2026-09-15
status: bounded-research-proposal
company_id: openhouse-ai
source: SEAI 2026 technical standard and Irish government 2026 retrofit programme updates
scope: research and one static permissioned test only
---

# OpenHouse SEAI retrofit handover pack intake proof

## Bounded proposal

Test whether OpenHouse can turn the documentation already required at the end of an SEAI-supported home-energy upgrade into a useful, exact-home **retrofit handover pack** inside the living Home Record.

This is not a new product line, an SEAI integration or a compliance service. It is a narrower input-and-retrieval proof inside the existing Home Performance and handover direction: preserve the homeowner's supplied BER/advisory material, product and system evidence, commissioning records, warranties, operating instructions and maintenance requirements; then show what is present, what is missing and the next safe retrieval task.

## New evidence that makes the question timely

SEAI's March 2026 *Domestic Technical Standards and Specifications* defines a Building Renovation Passport as a roadmap plus a logbook, with the logbook holding information about building fabric and performance and a record of previous works. The same standard says contractors must provide warranty information and relevant documents to the homeowner on completion; its measure-specific requirements include commissioning, operating, maintenance and handover records.

The market is also expanding rather than merely theoretical. An Irish government 2026 programme update reports 29,000 SEAI applications processed in Q1, up 96% year on year, including more than 7,000 window-and-door applications, more than 350 heat-pump applications and more than 10,000 solar-PV applications. It reports 257,000 upgrades delivered since 2019 and a 2026 target of 73,000 upgrades backed by a €640 million allocation.

This evidence supports a growing volume of homeowner records and handover documents. It does **not** prove that homeowners or One Stop Shops will pay OpenHouse, that every scheme issues a formal renovation passport, or that OpenHouse may access SEAI-held records.

## Why this is distinct but adjacent

- [[briefs/2026-08-04-openhouse-dtc-upgrade-ready-plan-validation]] starts before a decision and tests a €79 evidence-backed upgrade plan.
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]] covers post-occupancy operating evidence and the broader digital-building-logbook policy direction.
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]] binds product-level compliance evidence to exact installed assets.

The bounded new question is downstream and operational: **after a real retrofit, can the homeowner's completed handover pack become a reliable Home Record that answers maintenance, warranty, safe-operation and future-upgrade questions better than a document folder?** If the answer is no, do not create another OpenHouse surface.

## Smallest validation test

Use one legitimately permissioned, completed Irish retrofit pack supplied by its homeowner. Do not request records from SEAI, an installer or a One Stop Shop.

1. Inventory only the documents actually supplied: pre/post BER or advisory report, declaration/certification, product details, design or installer sheets, commissioning records, warranties, user instructions and maintenance schedules.
2. Build a static local manifest with: document, system/measure, issuer, date, exact-home binding evidence, warranty/maintenance trigger, confidence and missing field. Preserve unknowns; do not infer compliance.
3. Run four retrieval tasks:
   - locate the evidence needed for a warranty question;
   - locate the correct operating or safety instruction for one installed system;
   - identify the next maintenance obligation and its source;
   - explain what evidence would be needed before a later upgrade decision.
4. Compare completion time and unresolved ambiguity against the original folder or email bundle.

### Pass criteria

- at least 80% of supplied documents can be bound unambiguously to the correct home and measure;
- all four retrieval tasks return a source document, page/section where practical, and visible confidence or gap;
- no compliance, savings or equipment-performance conclusion is inferred from document presence alone;
- the first manual pack takes no more than 90 minutes after files are assembled;
- the homeowner says at least two of the four tasks are materially easier than using the original bundle.

Fail or park if exact-home binding is weak, the pack lacks commissioning/warranty evidence, operator effort remains above 150 minutes after one iteration, or the homeowner sees no retrieval value beyond ordinary cloud storage.

## Assumptions to falsify

- A completed retrofit produces a coherent enough homeowner-side pack to support useful retrieval.
- The documents include exact-home or exact-system identifiers rather than only generic brochures.
- Warranty, maintenance and operating questions occur often enough to matter after works finish.
- OpenHouse's existing evidence model can distinguish required, supplied, missing and independently verified facts.
- Homeowner-controlled upload is sufficient for a first proof without an SEAI or contractor integration.
- The value is evidence-backed action and continuity, not merely file storage.

## Downside and constraints

- Required documentation may be inconsistently handed over, leaving the proof dependent on installer quality.
- A formal Building Renovation Passport may not exist for most current jobs despite the term appearing in SEAI's glossary.
- One successful pack would not establish a scalable acquisition channel or willingness to pay.
- Handling BERs, addresses, serial numbers and household records creates privacy and retention obligations.
- Poorly framed output could be mistaken for certification, technical advice or proof that works complied with grant rules.
- This could duplicate the existing Home Performance workflow unless it is treated strictly as an evidence intake and retrieval test.

## Approval boundary

This note authorises desk research and one static, local test using a homeowner-supplied pack for which OpenHouse already has legitimate permission. It does not authorise:

- contacting homeowners, SEAI, One Stop Shops, installers, lenders or public bodies;
- buying data, advertising, spending money or offering the service for sale;
- accessing SEAI accounts or records, scraping portals or creating an API integration;
- modifying production code, schemas or customer-facing claims;
- asserting grant compliance, certification, energy savings or equipment performance;
- uploading personal or property data to an unapproved service;
- changing the current OpenHouse project state or launch priority.

Any outreach, paid pilot, production implementation or partner discussion requires Sam's explicit approval after the static proof.

## Provenance

Official sources reviewed 15 September 2026:

- SEAI, *Domestic Technical Standards and Specifications*, v3.1, March 2026: https://www.seai.ie/sites/default/files/publications/Domestic-Technical-Standards-and-Specifications.pdf
- Department of Climate, Energy and the Environment, *Applications for Home Energy Upgrades up 96% so far in 2026*: https://www.gov.ie/en/department-of-climate-energy-and-the-environment/press-releases/applications-for-home-energy-upgrades-up-96-so-far-in-2026-minister-obrien
- Department of Climate, Energy and the Environment, *Minister O'Brien announces suite of new SEAI grant supports*: https://www.gov.ie/en/department-of-climate-energy-and-the-environment/press-releases/minister-obrien-announces-suite-of-new-seai-grant-supports-bringing-energy-upgrades-to-more-and-more-homeowners

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/openhouse-ai]] — parent company and living Home Record architecture
- [[project_state/oh]] — current state; unchanged by this proposal
- [[briefs/2026-08-04-openhouse-dtc-upgrade-ready-plan-validation]] — pre-upgrade decision-product boundary
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]] — post-occupancy and digital-logbook context
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]] — exact installed-product evidence adjacency
- [[items/oh-handover-readiness-scan]] — nearest existing handover evidence workflow
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]] — correct validation container

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-openhouse-dtc-upgrade-ready-plan-validation]]
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]
- [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]]
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]]
- [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[items/oh-handover-readiness-scan]]
- [[project_state/oh]]

