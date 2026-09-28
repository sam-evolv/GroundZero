---
title: OpenHouse BCMS completion-scope to exact-home proof
created: 2026-09-17
status: bounded-research-proposal
company_id: openhouse-ai
scope: one static, permissioned Longview phase and exact-home evidence-map test
source: ground-zero opportunity incubation
---

# OpenHouse BCMS completion-scope to exact-home proof

## Bounded proposal

Test whether OpenHouse can turn one developer-held Certificate of Compliance on Completion pack into an exact-home completion receipt for a permissioned Longview phase.

The receipt should answer three questions without making a new compliance judgement:

1. Is this exact home unambiguously within the scope of this validated completion certificate?
2. Which plans, calculations, specifications, ancillary certificates, inspection records and test results support that scope?
3. Which operational, warranty or homeowner-facing records are still missing even though the statutory completion pack exists?

This is a source-mapping test inside [[items/oh-handover-readiness-scan]], not a BCMS connector, a certification service, a legal opinion or a new product line. The commercial question is narrow: **does exact-home scope traceability reduce a developer operator's handover review or later aftercare search enough to strengthen one paid developer pilot?**

## New evidence that makes the question concrete

### The completion certificate is a defined evidence container

Article 20F of the Building Control (Amendment) Regulations 2014 requires an applicable Certificate of Compliance on Completion to be submitted and entered on the statutory register before the relevant works or building may be opened, occupied or used. It must be accompanied by:

- plans, calculations, specifications and particulars showing how the completed works differ from the commencement submission and comply with the Building Regulations;
- an Annex listing that material; and
- the Inspection Plan as implemented by the Assigned Certifier.

The same article allows one certificate to refer to works, buildings, areas within a building, developments or phases. The exact scope therefore matters when a scheme-level certificate is later used as evidence for one home.

The National Building Control Office's current completion FAQ separates the mandatory uploaded certificate, implemented inspection plan and Annex from supporting material available on Building Control Authority request. Its typical dwelling list includes ventilation and heat-recovery commissioning, wastewater commissioning, space and water-heating commissioning, airtightness, as-built DEAP and fire-detection commissioning evidence.

The official 2016 Code of Practice assigns complementary record duties: the builder provides relevant documents for handover and certification, while the Assigned Certifier coordinates and collates the ancillary certification and supplies the implemented inspection plan. This creates a real developer-held evidence bundle, but it does not guarantee that the bundle is bound cleanly to each home or useful in homeowner aftercare.

### The public data shows that scope and phasing are not edge cases

The National Building Control Office publishes a CC BY 4.0 dataset covering Commencement Notices and Certificates of Compliance on Completion submitted through BCMS to all 31 Building Control Authorities since 2014.

The live CKAN metadata checked on 17 September 2026 reported:

- 248,048 dataset rows;
- a data-resource modification date of 6 September 2026; and
- 57,846 distinct non-null completion-certificate numbers in a read-only SQL aggregate.

The same aggregate grouped distinct certificate numbers as:

- 31,429 full-completion certificates;
- 21,387 certificates for completion of some buildings;
- 4,831 partial-completion certificates; and
- 199 records without a populated type.

These are dataset records, not a market-size estimate or a count of unique homes. They do show that phased and some-building completions are common enough for exact scope to be a practical data problem rather than a hypothetical one.

The public schema exposes certificate metadata such as certificate number, validation date, completion type and units completed. It does not expose the full Annex, implemented inspection plan or underlying evidence pack. Public metadata can therefore be a cross-check and discovery receipt, but developer-held source documents remain the authority for the proposed test.

## Why this is new but adjacent

[[briefs/openhouse-public-home-context-data-strategy-2026-07-28]] already treats public commencement and completion data as a candidate timeline signal, not proof that an exact home has a valid completion certificate.

[[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]] asks whether existing evidence can populate a homeowner operating guide. [[briefs/2026-09-04-openhouse-ciri-provider-of-record-wedge]] asks who performed consequential work. [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]] asks which product was installed.

This proposal asks a different upstream question: **which exact homes and works does one statutory completion pack cover, and can every later handover claim point back to that scope without over-reading the certificate?**

The answer should become a deterministic source layer for the existing handover-readiness scan. It should not create a second readiness product.

## Assumptions to falsify

- The selected phase has a legitimately permissioned completion certificate, Annex and enough supporting material for an exact scope test.
- The certificate or its supporting documents can be bound to individual homes, buildings or house types without guessing from postal address alone.
- The developer's current folder structure does not already answer exact-home scope and evidence questions quickly and reliably.
- A certificate-level receipt prevents at least one real ambiguity in handover, homeowner support, warranty routing or future works.
- Public BCMS metadata can corroborate certificate number, type, date or unit count without being treated as the underlying compliance proof.
- The result is useful to an operator and not only to a certifier or lawyer.

## Smallest validation test

Use one already permissioned Longview phase whose source pack OpenHouse may legitimately inspect. Keep the output local and static.

1. Freeze the relevant official sources and retrieval dates.
2. Select one completion certificate that covers multiple homes, some buildings or a phase.
3. Record only the certificate metadata needed for traceability: certificate number, validation date, completion type, stated works, commencement notice, phase, units completed and public-dataset match where available.
4. Build a deterministic matrix with one row per selected home or building and columns for: OpenHouse home ID, address or plot reference, house type, certificate scope statement, inclusion evidence, exclusion or ambiguity, Annex entry, source file, source page or section, issuer, date and confidence state.
5. For ten homes or all homes in the selected certificate scope, whichever is smaller, test whether each can be classified as `IN_SCOPE`, `OUT_OF_SCOPE` or `UNRESOLVED` from the source evidence alone.
6. Link five high-value completion records, where present, such as ventilation, heating, airtightness, as-built DEAP and fire-detection commissioning, while keeping document presence separate from proof about current condition or performance.
7. Run three retrieval tasks: prove whether one home is covered, locate the source behind one completion claim, and identify one homeowner-facing or aftercare record that the statutory pack does not supply.
8. Compare elapsed operator time, unresolved scope questions and corrections against the current folder-search process.
9. Decide `discard`, `retain as a manual paid-pilot appendix`, or `seek approval to add the minimum fields to the handover-readiness specification`.

### Pass gate

Retain the proof only if:

- every tested home receives a source-backed scope state, with unresolved cases left visibly unresolved;
- every mapped claim points to the exact certificate, Annex entry and source location;
- no public metadata field is promoted into a compliance, defect-free or current-condition conclusion;
- the matrix and three retrieval tasks take no more than 90 minutes once the pack is available;
- an internal developer operator identifies at least one material reduction in review effort, missing-evidence chase or aftercare ambiguity; and
- the result is demonstrably more useful than storing the unchanged certificate pack beside the Home Record.

### Kill gate

Discard or park the wedge if unit-to-certificate binding depends on guesswork, the Annex is unavailable, scope remains scheme-wide with no reliable exact-home bridge, the existing BCAR folder already answers the same questions quickly, or no live developer buyer values the receipt.

## Downside and safeguards

- A validated Certificate of Compliance on Completion is not proof that a building is defect-free or that the Building Control Authority performed a full technical assessment.
- Certificate scope may be phased, partial or expressed at building level rather than individual-home level.
- The Annex can list documents without proving that every listed record is complete, current or homeowner-useful.
- Supporting records may contain professional, contractor, address or household data. Use the minimum permissioned source set and keep it inside the existing approved boundary.
- Public BCMS metadata may contain duplicate rows, incomplete fields or later corrections. Use it only as a dated cross-check.
- The 2016 Code of Practice remains an official source but must be rechecked for amendment or replacement before any external proposal.
- A polished receipt could create false confidence. Preserve `UNRESOLVED`, source dates and role boundaries, and never label OpenHouse as the certifier.
- This test must not compete with the current P0 market-readiness gates or paid-developer validation objective.

## Approval boundary

This note authorises desk research and one static local mapping using evidence OpenHouse already has legitimate permission to inspect. It does not authorise:

- contacting a Building Control Authority, the National Building Control Office, Assigned Certifiers, builders, developers, homeowners or any other third party;
- accessing a private BCMS account, accepting portal terms, scraping the statutory register or bulk downloading personal data;
- issuing, validating, amending or interpreting a statutory certificate;
- making a building-regulations, occupancy, defect, title, warranty or legal conclusion;
- modifying production code, schemas, websites or customer data;
- publishing certificate, contractor, homeowner or property records;
- spending money or offering the workflow for sale; or
- changing OpenHouse project state, WIP priority or outreach approvals.

Any external pilot, sales appendix, production field, BCMS integration, professional review or buyer communication requires Sam's explicit approval.

## Provenance

Official sources reviewed 17 September 2026:

- Irish Statute Book, Building Control (Amendment) Regulations 2014, especially Article 20F and the Sixth Schedule: https://www.irishstatutebook.ie/eli/2014/si/9/made/en/pdf
- National Building Control Office, completion-certificate FAQ and Annex guidance: https://nbco.nbco.localgov.ie/faqs?faq_category=19&page=1
- National Building Control Office, *Code of Practice for Inspecting and Certifying Buildings and Works*, September 2016: https://nbco.nbco.localgov.ie/sites/default/files/4567776/2025-02/20161021_Code%20of%20practice%20for_Inspecting%20%26%20Certifying%20buildings%20%26%20works_2016.pdf
- data.gov.ie, *Building Commencement and Completion Data 2014 to Present*: https://data.gov.ie/dataset/bcnccc
- data.gov.ie CKAN package metadata, including resource dates and schema links: https://data.gov.ie/api/3/action/package_show?id=bcnccc
- NBCO CKAN DataStore schema and one-row response: https://data.nbco.gov.ie/api/3/action/datastore_search?resource_id=0774e781-7af8-46da-b623-872e74cf541e&limit=1
- NBCO open-data aggregate used for the bounded counts: https://data.nbco.gov.ie/api/3/action/datastore_search_sql?sql=SELECT%20COUNT(*)%20AS%20total,%20COUNT(%22CCC_Number%22)%20AS%20ccc_rows,%20COUNT(DISTINCT%20%22CCC_Number%22)%20AS%20ccc_distinct,%20SUM(%22CN_Valid_Completion_Certificate%22)%20AS%20valid_flag_sum%20FROM%20%220774e781-7af8-46da-b623-872e74cf541e%22
- National Building Control Office, *Data Collected - Certificate of Compliance on Completion and BCMS Certificate Details*, 22 December 2021: https://data.nbco.gov.ie/dataset/2704a333-874d-46f5-b3bc-3673766bf816/resource/89deb20c-cfe2-4c4d-8a6a-3f1e9315adfb/download/20211222-nbcmp-odp-data-collected-certificate-of-compliance-on-compeltion-d02.pdf

## Connected vault notes

- [[context/business-opportunities-moc]] - opportunity map
- [[companies/openhouse-ai]] - parent company and exact-home evidence strategy
- [[project_state/oh]] - current P0 and paid-developer validation gates
- [[items/oh-handover-readiness-scan]] - correct validation container
- [[items/oh-developer-outreach-proposal-pack]] - possible commercial container only after approval
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]] - public completion metadata boundary
- [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]] - downstream homeowner guide adjacency
- [[briefs/2026-09-04-openhouse-ciri-provider-of-record-wedge]] - provider traceability adjacency
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]] - installed-product evidence adjacency
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] - prevents a competing product build

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]
- [[briefs/2026-09-04-openhouse-ciri-provider-of-record-wedge]]
- [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]]
- [[briefs/2026-09-18-openhouse-safety-file-custody-future-works-proof]]
- [[briefs/2026-09-19-openhouse-taking-in-charge-boundary-aftercare-routing-proof]]
- [[briefs/openhouse-public-home-context-data-strategy-2026-07-28]]
- [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-warranty-evidence-pack]]
- [[project_state/oh]]

