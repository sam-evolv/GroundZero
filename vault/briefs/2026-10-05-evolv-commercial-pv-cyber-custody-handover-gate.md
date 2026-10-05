---
title: Evolv commercial PV cyber custody and maintenance handover gate
created: 2026-10-05
status: bounded-research-proposal
company_id: evolv-renewables
scope: one static, permissioned receipt for one commercial PV installation; no security testing or system change
source: ground-zero opportunity incubation
---

# Evolv commercial PV cyber custody and maintenance handover gate

## Bounded proposal

Test whether Evolv should add a one-page **PV cyber custody and maintenance handover receipt** to one real, permissioned commercial rooftop installation that falls within the 10 kW to 1 MW use case assessed by the Smart Energy Expert Group.

The receipt would record only:

- a controlled site identifier and the exact inverter, gateway and monitoring-platform products and versions evidenced in the approved client workspace;
- the ESB Networks Low Carbon Technology Register reference used for connection evidence, explicitly labelled as connection evidence rather than cybersecurity assurance;
- the owner, installer, manufacturer and maintenance accounts that can monitor, configure, update or remotely access the installation;
- whether each human account is named, protected by multi-factor authentication where available, and subject to a documented grant, review and revocation route;
- the network and remote-access owner, the permitted communication path, and the competent party responsible for firewall, router, VPN or segmentation decisions;
- the firmware-update authority, automatic or controlled-manual state, current version, evidence date, support channel and known support period;
- the custody location for credentials, keys, configuration backups, recovery instructions, vendor advisories and incident contacts; and
- one controlled outcome: `HANDOVER EVIDENCE COMPLETE`, `OWNER OR CYBER PROFESSIONAL ACTION REQUIRED`, or `INSUFFICIENT EVIDENCE - DO NOT RELY`.

The commercial question is narrow: **can a source-linked receipt expose who retains control of a commercial PV installation, who can change it, and how access or updates will be governed before handover or a maintenance transition?**

This is not a penetration test, vulnerability assessment, NIS2 or Cyber Resilience Act compliance service, certification, secure-product claim, managed security service, network design, incident-response retainer or warranty. It is a manual evidence and responsibility check subordinate to [[items/renew-reporting-source-baseline]] and the paid owner-side assurance baseline in [[project_state/renew]].

## Why this is genuinely new but subordinate

A vault-wide search on 5 October 2026 found no existing note covering PV cybersecurity, inverter security, retained installer access, firmware custody or the Cyber Resilience Act. Existing Evolv notes cover grid and grant readiness, interval-data reconciliation, reporting, export routes, energy sharing and owner-side operations. They do not preserve a cyber custody boundary at commissioning or maintenance handover.

The new evidence is directly connected to Evolv's commercial rooftop and owner-side assurance context:

- The Smart Energy Expert Group's cybersecurity working group published version 1.1 of *Recommendations to address cybersecurity risks in photovoltaic generation* on 1 October 2026. It defines a commercial and industrial use case from 10 kW to 1 MW, says installers often retain remote access after installation, and rates attacks through installer or maintenance providers as a medium risk for that segment.[1]
- The report recommends controlled manual firmware updates by qualified maintenance providers for commercial, industrial and utility-scale installations, security training for installer staff, protection of installer systems and checklists or documentation around secure configuration and internet connectivity.[1]
- The report is expert-group consensus and explicitly says it does not represent the European Commission's opinion. Its recommendations are not proof of an Irish legal duty, certification scheme or mandatory customer deliverable.[1]
- Ireland's NCSC says Cyber Resilience Act Article 14 reporting obligations for manufacturers commenced on 11 September 2026, ahead of the full technical product compliance rules in December 2027.[2] This creates a stronger reason to preserve exact product, version, support and vendor-contact evidence, but it does not make Evolv the manufacturer's reporting agent or certify an installed product.
- ESB Networks says Irish low-voltage solar PV connections should use products on its Low Carbon Technology Register and describes the register as validation against requirements it considers appropriate for LV connection.[3] The public page does not present that register as cybersecurity approval, so the receipt must keep connection evidence and cyber evidence separate.

This supports one bounded handover test, not a new cybersecurity business line. No public source reviewed establishes Irish customer demand, willingness to pay, insurer acceptance, an approved checklist or Evolv's competence to give cyber advice.

## Verified evidence

- The SEEG report covers commercial and industrial PV installations from 10 kW to 1 MW. It describes professional installation and maintenance, manufacturer-platform or VPN access, and installers retaining remote access in many cases.[1]
- For that use case, the expert assessment rates attacks through manufacturer platforms and intentional manufacturer backdoors as high risk, attacks through installers or maintenance providers as medium risk, and attacks from local networks and aggregators as low risk at electricity-system scale.[1]
- The report recommends strong authentication for service-provider remote access, including certificate-based or mutual TLS for system-to-system access and multi-factor authentication for user access.[1]
- It recommends controlled rather than manufacturer-triggered automatic firmware updates for larger commercial, industrial and utility-scale installations, with qualified maintenance providers testing and applying updates.[1]
- It recommends installer staff training in secure configuration, firewalls, social engineering and credential handling, plus protection of laptops, remote-access systems, keys, credentials and confidential documentation used to install or maintain inverters.[1]
- Its voluntary measures include secure-configuration guidelines and checklists, installer awareness, owner awareness, and the possibility of documentation showing that internet connectivity has been controlled.[1]
- The report also identifies legal and implementation gaps. Its proposals for harmonised inverter standards, important-product classification and qualified-installer security requirements are recommendations, not evidence that those controls are already mandatory or implemented.[1]
- The NCSC's current CRA page places the active reporting obligation on manufacturers of products made available in the EU market.[2] This note does not transfer that obligation to an owner, installer or assurance provider.
- ESB Networks' current LCT Register is relevant to connection-product identity and the NC6, NC7 or NC8 application path.[3] It is not evidence, on the cited page, of firmware security, cloud-platform security, access-control quality, support life or vulnerability status.

These sources establish a credible custody and evidence problem. They do **not** establish that the live Evolv installation is within the assessed capacity band, remotely accessible, insecure, subject to NIS2, unsupported, misconfigured or commercially suitable for this receipt.

## Assumptions to falsify

- One real Evolv owner or customer has a commercial PV installation between 10 kW and 1 MW and will authorise a document-only handover review.
- Approved commissioning and maintenance records can identify the exact inverter, gateway, platform, account roles, firmware and remote-access route without network scanning or credential collection.
- The owner does not already receive an equivalent, source-linked cyber custody record from the installer, OEM, maintenance provider, IT provider, insurer or procurement team.
- A one-page receipt can expose a material owner decision, access gap or maintenance dependency without Evolv interpreting network security or giving legal advice.
- The exact vendor provides enough support-period, advisory, firmware and account-management evidence to make the receipt useful.
- The customer's IT or cybersecurity owner is willing and competent to decide any remediation; Evolv does not perform it.
- There is buyer value in evidence continuity at handover or contractor transition. Policy movement and expert concern alone do not prove willingness to pay.

## Smallest validation test

Do not access a site, client workspace, portal, network, inverter, router, VPN, account or credential until Sam approves the exact candidate, evidence scope and conflict, confidentiality and IP boundary.

If a suitable candidate exists:

1. Re-check the SEEG report, NCSC CRA guidance, ESB Networks LCT Register and exact vendor's official security, support and firmware documentation on the day of the test. Freeze every source by title, version, date, URL and retrieval time.
2. Confirm that the installation is inside the tested 10 kW to 1 MW scope. If it is above 1 MW, stop and treat it as a different utility-scale control problem.
3. Use documents and authorised confirmations only. Perform no port scan, vulnerability scan, exploit, password test, configuration change, firmware update, account creation, account deletion, remote login or live control action.
4. In the approved client workspace, record the minimum product and custody facts. Keep serial numbers, site addresses, network diagrams, usernames, credentials, keys and customer records out of Ground Zero.
5. Map every monitoring, configuration, update and remote-access capability to a named organisation and accountable owner. Mark unknowns as `unknown`; do not infer that an account is disabled, MFA is active or a firmware version is current.
6. Record whether residual installer or manufacturer access is intended, contractually supported, reviewable and revocable. Any technical or legal judgement goes to the customer's competent IT, cybersecurity, legal or procurement owner.
7. Compare the receipt with the existing commissioning, connection and maintenance handover. Record whether it exposes a missing owner, undocumented access path, unsupported product, unclear update authority or absent revocation/incident route.
8. Return one outcome: **discard**, **retain as a manual handover appendix**, or **seek separately approved specialist review for this one installation**. Do not build software, test security, change a system or market a cyber service from one case.

### Pass gate

Retain the manual appendix only if:

- the exact approved installation and responsible parties are established;
- every statement is source-linked, owner-confirmed or visibly marked unknown;
- the work identifies at least one material custody, access, update, support or escalation question before handover or maintenance transition;
- the competent owner says the receipt changes a real acceptance, remediation, contract or responsibility decision;
- the incremental preparation takes no more than 60 minutes after approved records are available; and
- all remediation remains with a competent authorised party.

A generic cyber checklist, vendor-risk opinion, unsupported security score or polished handover document with no changed decision does not pass.

### Kill gate

Discard or park the wedge if no suitable permissioned installation exists; the site is outside the assessed scope; records cannot establish the product and access chain; the ordinary commissioning or maintenance pack already covers the same evidence; the owner has no competent recipient for the result; no decision changes; professional liability, insurance, competence or data-handling requirements exceed the value; or the exercise would require probing, credentials or production change.

## Downside and safeguards

- **False assurance:** a completed receipt is not proof that a device, cloud platform, network or installer is secure. Use evidence-status labels and never issue a pass certificate.
- **Scope creep:** account review can turn into security testing or managed service. Keep the first test document-only and read-only.
- **Competence and liability:** Evolv must not prescribe firewall, VPN, firmware or incident-response changes without qualified authority and suitable insurance.
- **Operational risk:** an update or access change can interrupt generation, warranty, monitoring or maintenance. This proposal authorises no change.
- **Credential risk:** never copy passwords, private keys, recovery codes or tokens into the receipt or Ground Zero. Record only custody, role and evidence status.
- **Vendor and geopolitical overclaim:** the SEEG report discusses supplier-jurisdiction risk but does not classify any exact vendor used by Evolv. Do not create a blacklist or make unsupported claims about a supplier.
- **Regulatory overclaim:** CRA manufacturer reporting, future product rules, NIS2, RfG and expert recommendations are different layers. Do not label the receipt compliant, required or regulator-approved.
- **Connection-evidence confusion:** LCT Register inclusion supports the cited LV connection process only. Do not present it as cyber approval.
- **Priority drift:** this remains subordinate to a real rooftop sale, [[items/renew-reporting-source-baseline]] and the paid owner-side assurance baseline in [[project_state/renew]].

## Approval boundary

This note authorises public-source research and records one possible later document-only test. It does not authorise:

- customer, installer, OEM, maintenance provider, IT provider, insurer, ESB Networks, NCSC, regulator, adviser or third-party contact;
- access to a client file, portal, inverter, gateway, local network, router, firewall, VPN, monitoring platform, account, credentials, keys or live site data;
- network discovery, scanning, testing, exploitation, social engineering, firmware action, configuration change, account change, remote control or incident response;
- cybersecurity, NIS2, CRA, RfG, legal, regulatory, engineering, grid, insurance, procurement or warranty advice;
- publication, outreach, lead generation, spending, quotation, contract change, software development, automation or production mutation.

Sam must approve the exact installation and evidence scope after conflict, confidentiality and IP review. The owner must approve the records, purpose, recipients and retention. A competent cybersecurity or IT professional must own any security conclusion or remediation. Any contact, customer-facing appendix, paid pilot, second case or software work requires separate approval.

## Open gaps

- The capacity, inverter, gateway, platform, connectivity, firmware and residual-access state of any current Evolv installation.
- Whether the live customer or survey opportunity is in the SEEG commercial and industrial capacity band.
- The exact vendor's support period, security-advisory channel, vulnerability-disclosure process and firmware-control options.
- Whether installer or OEM contracts permit owner review and revocation of remote access without affecting warranty or maintenance.
- Whether an Irish customer, insurer, funder, procurement team or maintenance provider values a separate custody receipt.
- Whether the customer's existing IT, OT or cybersecurity controls already cover the installation.
- The exact Irish NIS2 scope and supervisory treatment for any candidate owner or installer; no applicability is inferred here.
- Professional competence, liability and insurance requirements if Evolv were ever paid for this work.

## Provenance

Official sources reviewed 5 October 2026:

- Smart Energy Expert Group, Working Group on Cybersecurity, *Recommendations to address cybersecurity risks in photovoltaic generation*, version 1.1, 1 October 2026.[1]
- Ireland National Cyber Security Centre, *EU Cyber Resilience Act*, last updated 11 September 2026.[2]
- ESB Networks, *Low Carbon Technology Register*, current page and registers visible 5 October 2026.[3]

## Connected vault notes

- [[context/business-opportunities-moc]] - opportunity map
- [[companies/evolv-renewables]] - company context
- [[project_state/renew]] - owner-side assurance direction and paid baseline gate
- [[goals/renew-pipeline]] - three-commercial-rooftop goal
- [[items/renew-reporting-source-baseline]] - prerequisite live workflow baseline
- [[items/renew-compliance-reporting-automation]] - possible later evidence-pack adjacency, not an authorised build
- [[items/renew-compliance-portal]] - existing proposed portal, not required for this test
- [[briefs/2026-09-23-evolv-commercial-solar-grant-grid-readiness-receipt]] - separate grant and connection decision receipt
- [[briefs/2026-09-22-evolv-commercial-renovation-passport-evidence-continuity-gate]] - related asset-evidence continuity pattern

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/business-opportunities-moc]]

## Sources

[1] https://webgate.ec.europa.eu/circabc-ewpp/d/d/workspace/SpacesStore/aea31d36-5812-46a3-9f32-fc528e44b9b9/download - SEEG: Recommendations to address cybersecurity risks in photovoltaic generation, v1.1
[2] https://www.ncsc.gov.ie/cra - Ireland NCSC: EU Cyber Resilience Act
[3] https://www.esbnetworks.ie/about-us/projects/low-carbon-technology-register - ESB Networks: Low Carbon Technology register