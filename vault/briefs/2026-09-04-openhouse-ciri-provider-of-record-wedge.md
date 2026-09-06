---
title: OpenHouse CIRI provider-of-record traceability wedge
date: 2026-09-04
status: bounded-research-proposal
company_id: openhouse-ai
source: Irish primary legislation and official CIRI implementation material
---

# OpenHouse CIRI provider-of-record traceability wedge

## Bounded proposal

Do not position OpenHouse as a Construction Industry Register Ireland compliance platform. Test a narrower evidence capability inside the existing living Home Record and handover workflow: **bind each consequential work package in a home to the legal provider that performed it, the evidence that establishes that relationship, and, when the statutory register becomes operational, the provider's relevant CIRI division and registration status at the relevant date.**

CIRI is designed to establish whether a provider is registered and competent for a category of building work. It will not by itself establish which provider installed or altered a particular system in a particular home. OpenHouse's adjacent opportunity is the exact-home link between provider, work package, installed asset, commissioning evidence, warranty and later aftercare history.

This is a potential field set for [[items/oh-handover-readiness-scan]], not a new company, public compliance claim or active product build.

## Why this is credible

The Regulation of Providers of Building Works and Miscellaneous Provisions Act 2022 creates the statutory basis for CIRI.

- Section 3 defines providers broadly, including paid providers of works and persons who build and dispose of interests in new buildings by sale, lease or rent.
- Section 26 specifies a register containing provider identity and registration number, the relevant division, named competent persons, and certain recent convictions, sanctions, Building Control Act orders and suspension information. It also requires the register to be publicly inspectable online without charge.
- Section 27 divides the register by prescribed categories of work, including building construction, alterations, services, fittings and equipment.
- Section 33 prohibits providing or holding out as providing work without the relevant registration once the provision and division are legally in force.
- Sections 44 and 58 provide for complaints and publication of specified sanctions or convictions after the relevant process.

The official CIRI registration-body page says the first expected divisions cover triplex and duplex buildings, housing developments of ten or more homes, and all apartment providers. That scope is directly adjacent to OpenHouse's developer-handover market.

The useful distinction from [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]] is:

- the construction-product passport answers **what product is this?**;
- CIRI answers **is this provider registered for this category?**;
- the OpenHouse Home Record can answer **who did this work in this exact home, what evidence proves it, and where should a later warranty or aftercare issue go?**

## Timing and evidence boundary

This is an early readiness wedge, not a current compliance deadline or a live data integration.

The current Irish Statute Book commencement table retrieved in this research states that sections 26 to 59, including the register, mandatory-practice, complaints and sanctions provisions above, are **not yet commenced**. The official CIRI page says in its overview that applications will open during 2027 and that applicants will have 12 months after each division launches. The same page's historical timeline still says applications would open during 2026, while the CIF 2025 annual report also expected early 2026. The later 2027 overview is the stronger current operational signal, but the internal inconsistency means timing must be rechecked before any proposal or public claim.

No public API, stable data schema, bulk reuse right or historical status endpoint was verified. The Act guarantees public online inspection and provides for certified entries, but it does not guarantee an API or authorise OpenHouse to scrape, republish or continuously monitor the register.

OpenHouse must not claim that CIRI is already mandatory, that a listed provider performed work on a particular home, that registration proves defect-free work, or that the register replaces contracts, BCAR records, commissioning certificates, warranties or professional judgement.

## Smallest validation test

Run one no-contact, no-production **provider-of-record manifest** against an already permissioned Longview or show-home handover pack.

1. Select ten aftercare-sensitive work packages, such as the dwelling build, windows, roofing, fire stopping, plumbing, heat pump, ventilation, hot water, controls and external works.
2. From existing contracts, appointment records, certificates, commissioning sheets, manuals, invoices and warranty documents, capture the legal provider name, company number or other stable identifier where already present, package, home or house-type scope, relevant dates, source document and confidence state.
3. Record current voluntary-register evidence only where it can be inspected lawfully. Mark future CIRI division, statutory registration number, sanctions and competent-person fields `UNAVAILABLE` until the statutory source is live and reuse terms are known.
4. Keep the developer, main contractor, subcontractor, installer, manufacturer, certifier and warranty provider as separate roles. Do not infer one from another.
5. Test three retrieval tasks: identify who should receive an aftercare issue, show the evidence that ties that provider to the exact home or system, and expose what identity, scope or registration proof is missing.

### Pass criteria

- at least 8 of 10 work packages can be bound to an unambiguous legal provider from existing evidence;
- all three retrieval tasks are faster or more reliable than searching the current handover document stack;
- every relationship retains its source and date, and unresolved roles remain visibly `UNKNOWN`;
- the manifest takes no more than 90 minutes after the source pack is assembled;
- the result identifies at least one actionable missing-evidence or routing gap without generating a false compliance conclusion.

If the test fails because legal identities, work-package boundaries or source documents are routinely unavailable, park the wedge. If it passes, add the minimum provider-of-record fields to the deterministic handover-readiness specification. Do not build a CIRI connector until the statutory register is operational, access terms are known and a developer confirms the field changes a real handover or aftercare decision.

## Assumptions to falsify

- Developer handover packs contain enough evidence to identify the legal provider responsible for consequential work packages.
- The legal provider can be separated reliably from the brand, manufacturer, main contractor, subcontractor, certifier and warranty administrator.
- Exact-home provider binding reduces aftercare routing time or prevents misdirected claims.
- The eventual public CIRI register exposes stable identifiers and status that can be used for permitted point-in-time checks.
- A developer values a dated provider-of-record receipt enough to include it in handover or scheme-readiness review.
- The incremental value is distinct from existing BCAR, procurement, document-management and warranty processes rather than duplicating them.

## Downside and constraints

- The statutory register is delayed and its core provisions are not yet commenced.
- The official implementation page contains conflicting 2026 and 2027 application dates.
- Public inspection does not imply API access, bulk monitoring or commercial republication rights.
- Registration establishes entry in a division, not that a provider performed specific work correctly or accepts a warranty claim.
- Provider identity can be obscured by SPVs, subcontracting, trading names and changes over time.
- Competent-person and sanction information can be sensitive, time-dependent and legally risky if cached or presented without current context.
- A provider-of-record field could create false confidence if the underlying contract, installation or commissioning evidence is weak.
- The workflow may duplicate the developer's existing BCAR or procurement records without producing buyer value.

## Approval boundary

This note authorises research and one static, permissioned evidence-mapping exercise only. It does not authorise:

- contacting developers, contractors, CIF, CIRI, regulators or homeowners;
- scraping, bulk copying or monitoring the voluntary or future statutory register;
- publishing provider identities, registration status, complaints, sanctions or convictions;
- making a compliance, competence, warranty, defect or liability determination;
- changing production code, schemas, portals or live data;
- importing new personal data beyond the existing approved handover evidence boundary;
- spending money, procuring data or issuing legal advice.

Any external pilot, production field, automated lookup, monitoring service, buyer claim or contact requires Sam's explicit approval after the static test and a fresh check of commencement, divisions, access terms and legal presentation risk.

## Provenance

Primary and official sources reviewed 4 September 2026:

- Regulation of Providers of Building Works and Miscellaneous Provisions Act 2022, sections 3, 26, 27, 33, 44 and 58: https://www.irishstatutebook.ie/eli/2022/act/15/enacted/en/html
- Irish Statute Book commencement and secondary-legislation table: https://www.irishstatutebook.ie/isbc/2022_15.html
- Construction Industry Federation, appointed CIRI registration body, implementation overview and timeline: https://cif.ie/ciri-2
- Department of Housing consultation on the draft statutory Code of Practice: https://www.gov.ie/en/department-of-housing-local-government-and-heritage/consultations/public-consultation-on-a-draft-code-of-practice-for-providers-of-building-works-as-required-under-section-20-of-the-regulation-of-providers-of-building-works-and-miscellaneous-provisions-act-2022
- Department of Housing announcement of the statutory-register legislation and intended consumer-protection purpose: https://www.gov.ie/en/department-of-housing-local-government-and-heritage/press-releases/legislation-requiring-providers-of-building-services-to-register-with-construction-industry-register-ireland-published
- CIF Annual Report 2025, retained only as the older timing expectation that conflicts with the current overview: https://cif.ie/wp-content/uploads/2025/12/CIF-Annual-Report-2025.pdf

## Connected vault notes

- [[context/business-opportunities-moc]] - opportunity map
- [[companies/openhouse-ai]] - parent company and exact-home evidence strategy
- [[project_state/oh]] - current OpenHouse gates and commercial priority
- [[items/oh-handover-readiness-scan]] - correct validation container
- [[items/oh-developer-outreach-proposal-pack]] - paid developer validation remains the commercial gate
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]] - complementary product-of-record evidence wedge
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] - prevents this from becoming a competing product build

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-handover-readiness-scan]]
- [[project_state/oh]]

