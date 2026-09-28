---
title: OpenHouse Safety File custody and future-works receipt proof
created: 2026-09-18
status: bounded-research-proposal
company_id: openhouse-ai
scope: one static, permissioned Longview phase and exact-home evidence-map test
source: ground-zero opportunity incubation
---

# OpenHouse Safety File custody and future-works receipt proof

## Bounded proposal

Test whether OpenHouse can turn one existing, permissioned construction Safety File into a source-linked **future-works receipt** for one Longview phase and a small set of exact homes.

The receipt should answer four questions without making a new safety, legal or compliance judgement:

1. Which structure, phase, home or shared asset does each relevant record cover?
2. Where is the source information needed before a later maintenance, repair, alteration or demolition task?
3. Who is the recorded custodian or intended recipient of the file, and where is that still unresolved?
4. Which homeowner-facing, operational or aftercare records remain outside the Safety File?

This is a static source-mapping test inside [[items/oh-handover-readiness-scan]], not a Safety File authoring service, a professional safety review, a legal opinion or a new product line. The commercial question is narrow: **does exact-home scope and custody traceability reduce a developer operator's future-works, handover or aftercare search enough to strengthen one paid developer pilot?**

## Verified evidence

The Health and Safety Authority describes the Safety File as an end-user record focused on significant safety and health risks that must be addressed during later maintenance, repair, construction work or demolition. It says the PSDP prepares the file, the client must keep it available for people who need it for their duties or construction work, and the completed file must reach the final owner of the relevant structure.[1]

The operative 2013 Construction Regulations require the PSDP to prepare a project-appropriate file containing relevant information for later construction work and deliver it to the client on completion. They also provide for a client or subsequent owner disposing of an interest to deliver the file to the person acquiring that interest.[2]

The custody path is not automatically the individual home purchaser. The HSA says that, for domestic dwellings built for a developer and later taken in charge, the file should pass to the local authority or management company. The exact recipient, scope and access position therefore need to be established from the selected project's facts rather than assumed.[1]

The official Building Control Code of Practice says Assigned Certifiers and Builders should retain project records for at least six years after completion and that a significant amount of those records may form part of the Safety File. This creates a documented bridge between the completion-evidence bundle and the later-work safety record, but it does not make the two files equivalent.[3]

The Department of Housing's January 2026 quality-housing requirements separately call for contractor information for the Health and Safety File, operation and maintenance manuals, certificates, a tenant health, safety and operating handbook, commissioning, and a handover walk-through of dwelling systems. This supports a real handover information stack while also showing that the Safety File alone is not the whole occupant or aftercare record.[4]

## Why this is new but adjacent

[[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]] asks which exact homes and works a statutory completion pack covers. [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]] asks whether source evidence can populate a home-specific operating guide. [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]] asks which product was installed.

This proposal asks a different lifecycle question: **can the developer-held future-works safety record be bound to exact homes and shared assets, with a visible custody chain, so the right source can be found before later work begins?**

The result should become one source layer inside the existing handover-readiness workflow. It should not create a separate Safety File product, duplicate the BCMS receipt or replace professional duty holders.

## Assumptions to falsify

- The selected Longview phase has a legitimately permissioned Safety File or a clearly identifiable subset that OpenHouse may inspect.
- The file contains records that are materially useful for later maintenance, repair or alteration, rather than only generic project administration.
- At least some records can be bound to exact homes, house types, structures or shared assets without guessing from filenames or addresses.
- The current custodian, intended recipient and access boundary can be recorded without OpenHouse interpreting legal responsibility.
- The existing folder structure does not already answer scope, custody and retrieval questions quickly.
- A developer operator values faster retrieval enough for this to support the existing paid-pilot conversation.
- The output remains useful when unresolved scope and custody states are preserved visibly.

## Smallest validation test

Use one already permissioned Longview phase and one Safety File that OpenHouse may legitimately inspect. Keep all work local and static.

1. Freeze the official sources, retrieval dates and the selected file inventory.
2. Record the project, phase, structure and current known custodian from existing evidence only. Mark any ownership or recipient ambiguity `UNRESOLVED`.
3. Build a deterministic matrix with: source file, section or page, record type, issuer, date, affected structure or system, phase, house type, OpenHouse home ID where supported, future-work trigger, custody evidence, access classification and confidence state.
4. For ten homes or all homes in the selected scope, whichever is smaller, classify each relevant record as `IN_SCOPE`, `OUT_OF_SCOPE` or `UNRESOLVED` from source evidence alone.
5. Run three retrieval tasks:
   - find the source information relevant to one real maintenance, repair or alteration question;
   - prove whether one exact home or shared asset is covered by the selected record;
   - identify one operational, warranty or homeowner-facing record that must come from the wider handover pack rather than the Safety File.
6. Cross-check the matrix against the existing completion pack or [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]] output where available, while keeping certification evidence separate from later-work safety information.
7. Compare elapsed operator time, unresolved scope questions and corrections against the current folder-search process.
8. Decide `discard`, `retain as a manual paid-pilot appendix`, or `seek approval to add the minimum custody and future-work fields to the handover-readiness specification`.

### Pass gate

Retain the proof only if:

- every tested record and home receives a source-backed scope state, with uncertainty left visible;
- every future-work answer points to an exact source location and does not become professional safety advice;
- the current custodian or recipient evidence is recorded without asserting ownership where the source is ambiguous;
- the matrix and three retrieval tasks take no more than 90 minutes once the file is available;
- an internal developer operator identifies at least one material reduction in future-work search, handover review or aftercare ambiguity; and
- the result is demonstrably more useful than storing the unchanged Safety File beside the Home Record.

### Kill gate

Discard or park the wedge if the Safety File is unavailable, the selected records cannot be bound below scheme level, custody depends on legal interpretation, the existing BCAR or document folder already answers the same questions quickly, the output duplicates the HPI guide or BCMS receipt, or no live developer buyer values the retrieval layer.

## Downside and safeguards

- A Safety File is not proof that a building is defect-free, currently safe or compliant in every respect.
- File scope may sit at development, phase, structure, shared-asset or home level. Do not infer exact-home coverage from an address or house type alone.
- Custody may involve a developer, final owner, subsequent owner, local authority or management company. Do not present OpenHouse as deciding the lawful holder or access right.
- The file may contain security-sensitive drawings, service routes, professional details, addresses or contractor information. Use the minimum permissioned subset and keep it inside the approved boundary.
- Later works can change the risk picture. A dated record must not be presented as a substitute for a competent person's current assessment.
- A polished receipt could create false confidence. Preserve source dates, role boundaries and `UNRESOLVED` states.
- This test must not compete with the current P0 market-readiness gates or paid-developer validation objective.

## Approval boundary

This note authorises desk research and one static local mapping using a Safety File and related records OpenHouse already has legitimate permission to inspect. It does not authorise:

- contacting the HSA, a local authority, management company, PSDP, PSCS, Assigned Certifier, builder, developer, homeowner or any other third party;
- deciding legal ownership, custody, access rights or duty-holder compliance;
- preparing, certifying, amending or validating a Safety File;
- giving safety, engineering, construction or legal advice;
- modifying production code, schemas, websites or customer data;
- publishing drawings, service routes, contractor, homeowner or property records;
- spending money or offering the workflow for sale; or
- changing OpenHouse project state, WIP priority or outreach approvals.

Any professional review, external pilot, sales appendix, production field or buyer communication requires Sam's explicit approval.

## Provenance

Official sources reviewed 18 September 2026. The proposal is also grounded in the current paid-developer validation objective in [[project_state/oh]], the exact-home evidence strategy in [[companies/openhouse-ai]], and the existing bounded handover and completion proofs. No live Longview Safety File was opened during this research pass, so source availability, exact scope, custody and operator value remain unverified assumptions for the static test.

## Connected vault notes

- [[context/business-opportunities-moc]]: opportunity map
- [[companies/openhouse-ai]]: parent company and exact-home evidence strategy
- [[project_state/oh]]: current P0 and paid-developer validation gates
- [[items/oh-handover-readiness-scan]]: correct validation container
- [[items/oh-developer-outreach-proposal-pack]]: possible commercial container only after approval
- [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]]: statutory completion-scope adjacency
- [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]]: occupant guide adjacency
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]: installed-product evidence adjacency
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]: prevents a competing product build

## Sources

[1] https://www.hsa.ie/your_industry/construction/construction_faqs/safety_file — Safety File - Health and Safety Authority
    > "The Safety File is a record of information, prepared by the project supervisor design process for the end user, which focuses on safety and health.  The information it contains will alert those who are responsible for the structure and services in it of the significant safety and health risks that will need to be addressed during subsequent maintenance, repair or other construction work including demolition."
    > "On completion, the safety file must be delivered to the final owner of the structure to which the safety file relates."
    > "The client must keep the safety file available for inspection by any person who may need the information in order to fulfil their duties or to carry out construction work on the structure to which the safety file relates."
    > "The safety file should be passed on to the local authority, or to a management company if the project involves the building or domestic dwellings for a client who is also a developer, if the completed development is taken “in charge” by the local authority or by a management company."
[2] https://www.irishstatutebook.ie/eli/2013/si/291/made/en/print — S.I. No. 291/2013 - Construction Regulations 2013
    > "The project supervisor for the design process shall— (a) prepare a written safety file appropriate to the characteristics of the project, containing relevant safety and health information, including any information provided under Regulation 21, to be taken into account during any subsequent construction work following completion of the project, and (b) promptly deliver the safety file to the client on completion of the project."
    > "It is sufficient compliance with paragraph (1) by a client and every subsequent owner of a structure who disposes of the client’s or owner’s interest in the structure involved if the client or subsequent owner delivers the safety file for that structure to the person who acquires the interest."
[3] https://nbco.nbco.localgov.ie/sites/default/files/4567776/2025-02/20161021_Code%20of%20practice%20for_Inspecting%20%26%20Certifying%20buildings%20%26%20works_2016.pdf — Code of Practice for Inspecting and Certifying Buildings and Works
    > "Arrangements should be put in place by the Assigned Certifier and the Builder to ensure that records relating to the full service they provided to individual projects are retained for a minimum period of 6 years after completion."
    > "A significant amount of these records may form part of the Safety File provided for under the Safety, Health and Welfare at Work (Construction) Regulations 2013, in which case these records do not need to be retained separately."
[4] https://assets.gov.ie/static/documents/79f7cad3/Employers_Requirements_for_Detail_Design_of_Quality_Housing_Revision_2_January_2026.pdf — Employer's Requirements for Detail Design of Quality Housing, Revision 2
    > "The tender/contract documents should also include the requirement that the owner of the building should be provided with sufficient information about the building, the fixed building services and their maintenance requirements so that the building can be operated in such a manner as to use no more fuel and energy than is reasonable."
    > "Handover over procedures should include a walkthrough of the operation and maintenance procedures for dwelling systems with the dwelling occupant and, where appropriate, customized online videos can be used to provide information to dwelling occupants."

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]
- [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]]
- [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]]
- [[briefs/2026-09-19-openhouse-taking-in-charge-boundary-aftercare-routing-proof]]
- [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-warranty-evidence-pack]]
- [[project_state/oh]]

