---
title: Here’s Health menu and allergen evidence workflow
date: 2026-08-15
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Live Here’s Health café menu, FSAI allergen guidance, FSAI MenuCal, and the active Here’s Health discovery brief
---

# Here’s Health menu and allergen evidence workflow

## Bounded proposal

Treat **menu and allergen evidence control** as a named launch gate for the Here’s Health click-and-collect app, then test whether it merits a small recurring assurance service inside ongoing support.

The first offer is not an allergen AI, a new compliance platform or an expansion of the six-week feature list. It is a controlled workflow that keeps one operator-approved record of each café item, modifier and intentional allergen; maps that record to Square; publishes it consistently to the app and other agreed menu surfaces; and leaves a dated approval receipt whenever the menu changes.

This should be folded into [[items/heres-health-week-one-discovery-and-technical-proof]], which already requires a named allergen-data owner. It should not become a separate active item unless direct workflow evidence and client willingness to pay both appear.

## Why this clears the research bar

The public Here’s Health café page currently presents the Douglas menu as four image panels. In the assets checked on 15 August 2026, many items carry numeric codes such as `(1, 3, 7, 10)` and some carry dietary markers such as `GF`, `V` or `VG`, but none of the four panels shows a visible numeric allergen key. The lunch panel also says “Allergens vary – please ask your server” for the Super Salads.[1]

That visual observation does **not** establish that Here’s Health is non-compliant: an allergen key or item record may exist elsewhere, the website is not currently the café checkout, and in-store written material was not inspected. It does show that the new app cannot safely copy the public menu artwork or infer allergens from dietary labels.

FSAI guidance says non-prepacked food businesses must provide written allergen information at presentation, sale or supply; it must be easily accessible before purchase, customers must not have to ask for it, and it must relate directly to the exact food or beverage.[2] For food ordered remotely, FSAI says allergen information must be available before the purchase is concluded.[2]

FSAI already provides MenuCal to help Irish food-service businesses identify and manage menu allergens.[3] The opportunity is therefore not to recreate a free public tool. It is to connect Here’s Health’s approved source record to the live Square catalogue and customer surfaces, with ownership, change control and release evidence.

## Smallest validation test

Run one **no-build menu evidence check** during Week 1 only after Sam and Here’s Health approve access.

1. Name the café operator responsible for recipe and allergen truth and identify the current written source, including whether MenuCal is already used.
2. Select 20 representative items: fixed breakfast and lunch dishes, a modifier-heavy item, a weekly special, one soup or salad whose ingredients vary, and drinks with milk alternatives or syrups.
3. Compare the operator-approved recipe/allergen record against the current Square item and modifier data, the public menu assets and the proposed app fields. Do not infer missing allergens.
4. Record each mismatch by type: missing declaration, stale item, code with no accessible key, modifier not covered, variable item without an approved update step, or surface published before approval.
5. Time one real menu change from operator edit to approved Square/app/publication receipt using a checklist or spreadsheet only.
6. Ask whether Here’s Health would include a recurring menu-evidence check in paid support before building any dedicated workflow.

### Pass criteria

- a named food-business owner accepts responsibility for the underlying recipe and allergen declarations;
- the 20-item check reveals at least two repeated drift mechanisms or a recurring update burden that the operator considers material;
- the same approved record can map to Square and the app without unsafe inference;
- a checklist-based update and approval receipt reduces ambiguity without adding disproportionate staff work; and
- Here’s Health explicitly values the control enough to include it in implementation or ongoing support.

If the current process is already controlled, the public numeric key is available elsewhere, Square cleanly holds the required declarations, or MenuCal plus a simple operating procedure is sufficient, stop. Do not create a product.

## Assumptions to falsify

- The current numeric codes have an authoritative, maintained key and are not merely a design convention.
- Menu and recipe changes create cross-surface drift often enough to justify a control workflow.
- Square can hold or reliably reference the approved item- and modifier-level allergen data needed by the app.
- A named operator can approve changes without making the workflow slower than the risk it removes.
- Here’s Health will pay for recurring assurance rather than treating it as ordinary content maintenance.
- The pattern repeats across more than one café or menu surface.

## Downside and constraints

- The public-page observation is incomplete and must not be presented as a compliance finding.
- Sam is not the food-business operator and should not become the legal authority for recipes, allergens, cross-contamination or HACCP controls.
- Numeric allergen codes may be workable if their key is visible and unambiguous at the point of purchase; the live operating surface must be checked.
- Specials, substitutions, supplier changes, sauces, drinks and modifiers can invalidate a static declaration quickly.
- A software workflow cannot make incorrect source data safe.
- MenuCal or a disciplined spreadsheet may solve the problem without custom engineering.
- This can become dangerous scope creep if it is sold as a new platform before the core Square order and staff-fulfilment path is proven.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, café staff, FSAI, suppliers or technology vendors;
- declaring the current Here’s Health menus compliant or non-compliant;
- giving legal, food-safety, nutrition or allergen advice;
- accessing Square, recipes, supplier specifications, MenuCal or internal food-safety records;
- changing any menu, allergen declaration, recipe, modifier, Square catalogue or public surface;
- adding work to the six-week scope, support contract or price;
- building a synchronisation service, AI classifier, dashboard or production integration; or
- publishing claims or spending money.

Any data access, client discussion, operational test, scope change or implementation requires Sam’s explicit approval and Here’s Health’s informed agreement. The food business must retain responsibility for source accuracy and final approval.

## Provenance

Sources inspected on 15 August 2026. The live menu observation is limited to the four Douglas menu images reachable from the public café page; no Square account, in-store material or internal food-safety record was inspected.

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/heres-health]] — client context and engagement boundary
- [[project_state/heres-health-app]] — current discovery state
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — accepted Phase One direction and protected cut line
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — separate-commerce architecture decision
- [[items/heres-health-week-one-discovery-and-technical-proof]] — existing P0 evidence gate; nearest execution container
- [[briefs/2026-08-14-heres-health-food-waste-margin-baseline]] — separate post-launch operational wedge
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Sources

[1] https://www.hereshealth.ie/pages/cafe — Here's Health cafe
    > "Our menu consists of a wide variety of fresh, healthy and organic options with most of our dishes suitable for vegetarians and vegans."
[2] https://www.fsai.ie/business-advice/running-a-food-business/allergens/allergen-information-for-non-prepacked-food — FSAI: Allergen Information for Non-prepacked Food
    > "Food businesses must indicate food allergens in writing for non-prepacked food at the point of presentation, or sale, or supply."
    > "be easily located and accessible before the sale or supply of the food - customers must have the information before buying and must not have to ask for the information"
    > "Allergen information must be available before the purchase is concluded which could include supporting material that enables consumers to order a product."
[3] https://menucal.fsai.ie — FSAI MenuCal
    > "MenuCal, the menu calculator, has been developed to assist Ireland's food service businesses identify and manage allergen information for their menus."

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-14-heres-health-food-waste-margin-baseline]]
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]]
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

