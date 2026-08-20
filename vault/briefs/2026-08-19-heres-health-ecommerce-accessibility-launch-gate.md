---
title: Here’s Health ecommerce accessibility launch gate
date: 2026-08-19
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Irish Statutory Instrument 636/2023, European Commission EAA guidance, W3C WCAG 2.2, official Apple and Android accessibility guidance, and the active Here’s Health discovery brief
---

# Here’s Health ecommerce accessibility launch gate

## Bounded proposal

Add one **ecommerce accessibility and evidence gate** to the Here’s Health Week 1 discovery and release acceptance. Before the six-week scope is locked, determine whether the Here’s Health legal entity is exempt as a service-providing microenterprise and identify who owns the legal interpretation. Regardless of exemption, exercise one complete Café and one complete Shop purchase journey with mobile assistive technologies, preserve a compact defect and acceptance receipt, and draft the accessibility information that the client would need if the Irish requirements apply.

The first deliverable is a tested transaction-path baseline plus an ownership decision, not a compliance certification, redesign programme or generic accessibility consultancy. Keep it inside [[items/heres-health-week-one-discovery-and-technical-proof]]. Only consider a paid recurring accessibility-assurance line if launch testing exposes repeated regression risk and Here’s Health explicitly values ongoing evidence after releases.

## Why this clears the research bar

### Verified Irish and EU evidence

Ireland’s European Union (Accessibility Requirements of Products and Services) Regulations 2023 came into operation on **28 June 2025**. They apply to consumer ecommerce services and define those services as services provided at a distance through websites and mobile-device-based services, by electronic means and at a consumer’s individual request, with a view to concluding a consumer contract.[1]

The Regulations expressly require covered websites, online applications, mobile-device-based services and mobile applications to be made accessible in a consistent and adequate way so they are **perceivable, operable, understandable and robust**. For ecommerce specifically, identification, security and payment functionality delivered as part of the service must meet the same functional qualities.[1]

A covered service provider must prepare information explaining how the service meets the applicable requirements, make it publicly available in accessible written and oral formats, retain it while the service operates, and maintain procedures so the service remains conformant. Schedule 3 says the information belongs in the general terms and conditions or an equivalent document and should describe the service, its operation, how the relevant requirements are met, and how delivery and monitoring sustain compliance.[1]

A service supplied by a **microenterprise** is exempt from the service accessibility requirements and those service-provider duties. The Irish Regulations define a microenterprise as employing fewer than 10 people and having annual turnover **or** annual balance-sheet total not exceeding €2 million.[1] Ground Zero does not contain Here’s Health staffing, turnover or balance-sheet evidence, so applicability cannot be assumed in either direction.

The Competition and Consumer Protection Commission is the Irish compliance authority for ecommerce services. Failure to comply with the core service requirement can be an offence; the Regulations provide for a class A fine or up to six months’ imprisonment on summary conviction, and up to €60,000 or 18 months’ imprisonment on indictment. This is a reason to obtain a qualified applicability view, not a basis for Sam to make a legal claim to the client.[1]

The European Commission’s current EAA overview independently lists ecommerce among the products and services covered by the European Accessibility Act and describes the Act as a common EU accessibility framework.[2]

### Verified implementation evidence

W3C recommends WCAG 2.2 for current accessibility work. WCAG supplies testable criteria under the same four principles—perceivable, operable, understandable and robust—and defines A, AA and AAA conformance levels.[3] Use WCAG 2.2 AA as a practical engineering and acceptance baseline, not as an unsupported claim that it alone proves Irish legal conformity.

Apple tells developers to test with the assistive technologies people use, including VoiceOver, and provides Accessibility Inspector for inspecting how an app represents itself to accessibility features.[4] Android’s official guidance recommends a combination of manual assistive-technology testing, analysis tools, automated tests and user testing; it specifically documents TalkBack, Accessibility Scanner and Google Play pre-launch accessibility reports.[5]

### Verified Ground Zero fit

The supplied Here’s Health brief already requires accessible sizing and contrast, names accessibility as business-and-compliance discovery, and schedules accessibility work for Week 5. The live project state says no accessibility material has been reviewed. Because Phase One is proposed to let consumers browse, identify themselves, pay and conclude both Café and Shop contracts on mobile, deferring the entire question to Week 5 creates a late critical-path risk.

The bounded commercial insight is to move **applicability, ownership and one transaction-path proof** into Week 1, then retain full remediation and regression testing in the normal delivery plan. No standalone product or recurring service is justified before a real build and client acceptance expose the actual burden.

## Smallest validation test

Run one **approved, non-production accessibility drill** against a development or safe test build.

1. Record the Here’s Health legal entity expected to provide the consumer service. Ask the client’s qualified adviser to determine whether the microenterprise exemption applies using current employee count and turnover or balance-sheet evidence. Record only the conclusion, date, adviser/owner and review trigger in the project receipt—not payroll or financial records in Ground Zero.
2. Name one Here’s Health owner for accessibility information and complaints, and one delivery owner for accessibility defects. Clarify responsibility across the native shell, Square-owned payment surface, Shopify Checkout Kit or hosted checkout, and any third-party content.
3. Freeze two representative journeys:
   - **Café:** open app → select location → inspect item/modifiers/allergen information → add to Café basket → choose pickup time → identify/pay → receive confirmation and status;
   - **Shop:** search/browse → inspect product → add to Shopify basket → identify/pay through the selected Shopify checkout → receive confirmation.
4. Exercise both journeys on one current iPhone with VoiceOver, Larger Text, increased contrast and reduced motion, and on one current Android device with TalkBack, large font/display scaling and Accessibility Scanner. Include keyboard or switch-style navigation where the selected device and build support it.
5. Check at minimum: semantic names and roles; logical focus order; visible and programmatic focus; text scaling without clipped actions; colour-independent status; sufficient contrast; reachable modifiers and pickup controls; understandable validation; error recovery; status announcements; authentication; payment; confirmation; and return from third-party checkout.
6. Add focused automated regression checks for critical labels, roles, states and focus order in the React Native test surface. Treat automated checks as coverage support, not a substitute for manual or disabled-user testing.
7. Record a compact receipt for every blocker: build, device/OS, journey step, expected accessible behaviour, observed behaviour, severity, owner, remediation status and retest result. Do not store customer, payment or credential data.
8. Draft—not publish—the Schedule 3 accessibility information or equivalent accessibility statement: service description, operation, relevant accessibility approach, known limitations, contact/complaint route and ongoing monitoring owner. Route it to the client’s qualified adviser before any compliance claim.
9. With separate approval, have at least one relevant assistive-technology user exercise the two frozen journeys. Record task completion and blockers, not sensitive personal or medical details.
10. Ask whether release-by-release regression evidence and complaint triage have enough measured burden and risk to belong in paid ongoing support. Do not infer willingness to pay from the legal requirement.

### Pass criteria

- the exemption/applicability question has a named qualified owner and dated conclusion;
- the native, Square and Shopify responsibility boundary has no unowned purchase step;
- both representative journeys can be completed with VoiceOver and TalkBack without a blocking defect;
- text scaling, focus, controls, errors, authentication, payment and status updates remain usable on both platforms;
- critical accessibility semantics and state changes have focused automated regression coverage;
- all blockers have owners and successful retest receipts before release acceptance;
- a client-reviewable accessibility-information draft and complaint route exist if required; and
- any recurring support proposal is backed by observed defects, retest effort, release frequency and explicit client willingness to pay.

If Here’s Health is confirmed exempt, the two journeys pass cleanly, platform components carry clear responsibility, and ongoing changes are low-risk, retain accessibility as ordinary product quality and stop. Do not create a new service line.

## Assumptions to falsify

- The Here’s Health entity providing the app service is not exempt, or the client wants the same standard despite an exemption.
- The proposed Café and Shop paths fall within the Irish ecommerce-service definition.
- Square and Shopify surfaces can be made accessible in the selected mobile architecture without replacing the adopted separate-commerce boundary.
- Week 1 can expose architectural blockers early enough to protect the six-week cut line.
- WCAG 2.2 AA plus platform-specific manual testing is a useful engineering baseline for the applicable functional requirements.
- Accessibility defects will recur often enough after release to justify paid assurance rather than ordinary maintenance.
- Here’s Health will assign an operational owner for complaints, content and ongoing conformance information.

## Downside and constraints

- This note is not legal advice. Applicability, exemption, contractual allocation and the sufficiency of any evidence require qualified review.
- WCAG conformance or a clean automated scan does not by itself prove compliance with the Irish Regulations.
- Accessibility introduced as a broad redesign programme could overload an already dense six-week scope; the first gate must stay on the two highest-risk transaction paths.
- VoiceOver and TalkBack checks by the build team cannot replace feedback from disabled users.
- A third-party Square or Shopify surface may still create a customer-visible blocker. Contractual responsibility does not remove the need to test the complete journey.
- The microenterprise test depends on current entity-level facts absent from Ground Zero; Sam must not guess them from the number of stores or public appearance.
- Publishing an accessibility statement before the build and operating process support it could create a false assurance.
- Recurring paid assurance may have no value if releases are infrequent, platform components are stable or the client treats retesting as ordinary support.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, customers, disabled-user testers, lawyers, accountants, Square, Shopify or another vendor;
- requesting or storing payroll, turnover, balance-sheet, customer, payment, credential or disability data;
- deciding or representing that Here’s Health is exempt, compliant or non-compliant;
- issuing legal advice, an accessibility certification, a WCAG conformance claim or an EAA compliance claim;
- accessing a client account or testing/changing a production app, catalogue, checkout, payment or order;
- publishing an accessibility statement, terms update, complaint route or App Store accessibility claim;
- adding audit work, remediation scope, a tester, certification cost or recurring support charge to the proposal;
- changing the six-week scope, production, pricing or delivery promise; or
- spending money or contacting any third party.

Any account access, real-build test, disabled-user session, legal review, contract term, public statement, recurring service or production change requires Sam’s explicit approval and Here’s Health’s informed agreement.

## Provenance

Official Irish, EU, W3C, Apple and Android sources were inspected on 19 August 2026. No Here’s Health staff/financial records, client accounts, source code, prototype, checkout, device build or accessibility artefact was inspected. The client’s legal applicability and current accessibility state remain open gaps.

## Sources

[1] https://www.irishstatutebook.ie/eli/2023/si/636/made/en/print — S.I. No. 636/2023: commencement; ecommerce/mobile-service scope; microenterprise exemption; service-provider duties; functional requirements; compliance authority; enforcement and Schedule 3 evidence requirements.

[2] https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en — European Commission overview listing ecommerce within the EAA’s covered products and services.

[3] https://www.w3.org/TR/WCAG22/ — W3C Recommendation: current WCAG 2.2 principles, testable success criteria and conformance levels.

[4] https://developer.apple.com/documentation/accessibility — Apple accessibility guidance: assistive-technology testing, VoiceOver and Accessibility Inspector.

[5] https://developer.android.com/guide/topics/ui/accessibility/testing — Android accessibility testing guidance: manual assistive-technology tests, TalkBack, analysis tools, automation, user testing and Play pre-launch reports.

## Connected vault notes

- [[context/business-opportunities-moc]] — nearest opportunity map
- [[companies/heres-health]] — client context and unresolved applicability facts
- [[project_state/heres-health-app]] — current discovery state and unreviewed accessibility materials
- [[imports/heres-health-app-project-brief-2026-08-13]] — source requirement for accessible mobile commerce
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — accepted proposal direction and six-week cut line
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — separate Square and Shopify commerce boundary
- [[items/heres-health-week-one-discovery-and-technical-proof]] — existing P0 execution container
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]] — adjacent content-truth control
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]] — adjacent Café transaction control
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]]
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

