---
title: OpenHouse: Innovation & Forward Strategy
created: 2026-06-26
status: working analysis
tags: [openhouse, strategy, forward-looking, Cairn, GTM]
---

# OpenHouse: Innovation & Forward Strategy

This is a forward-looking companion to [[openhouse-full-context]]. It identifies what's undersold, what's missing, and the highest-impact moves to make the strategy airtight.

---

## 1. The proactive guardian is your deepest moat — elevate it

The "home contacting the homeowner" idea is buried in section 12 of the main doc. It deserves to be a first-class product pillar with its own name and framing.

**Why it's the moat:**

- Clixifix can't do it — they have no live home data, no energy context, no per-home reasoning.
- Matterport can't do it — they're a moment-in-time visualization, not a continuous brain.
- Customer portals can't do it — they wait for the homeowner to open them.

**The product shape:** Query logs + home system data → detect drift (heat pump short-cycling, Vent, EV on day rate) → proactively reach out → "Your bill is going to be high this month. Here's why and what to do."

**The Cairn closer:** "I flagged 14 homes this month before the homeowner called you. Zero callbacks this month from the monitored homes." €25k/year is cheap when you can prove prevention.

**Action:** Add a `OpenHouse Guardian` section to the product suite in the main doc. Move it from a parenthetical in "Where this goes" to a standalone pillar.

---

## 2. Unit economics: prove €25k is obviously cheap

The pricing conviction is stated but never justified with numbers. Add a unit-economics frame:

| Item | Estimate |
|------|----------|
| Average callback cost (trades + callout + snag fix) | €400–800 |
| Callbacks per home per year (new-build, first 2 years) | 2–5 |
| Homes per mid-size development (example) | 150 |
| Annual callback cost without OpenHouse | €120k–600k |
| OpenHouse annual fee | €25k |
| **Net savings** | **€95k–575k** |

For the compliance spine alone (defects redress liability, legal exposure, administrative cost), the €25k is a rounding error vs. the exposure it covers.

**Action:** Add a one-page unit-economics appendix to the main doc, or as a separate brief. Use at Monday's Cairn meeting as a handout if needed.

---

## 3. The predictive callback product

This is distinct from the proactive guardian — it's the *developer-side* view of the same data. A portfolio dashboard that says: "12 homes in this scheme are trending toward a callback this month." This is:

- The Cairn demo closer (it's the "which homes will call back" moment in section 14, but it deserves bigger)
- A future product SKU (OpenHouse Predict, or OpenHouse Portfolio)
- What turns your €25k/dev/year into €50k+/dev/year as you prove predictive value

**Action:** Add to the product suite section as a planned expansion. Name it explicitly.

---

## 4. "34 Bayly" — make the demo public and interactive

The Cairn demo energy diagnosis is your strongest sales asset. Right now it lives on a preview deployment that only you can access.

**The move:** Deploy 34 Bayly as a publicly accessible, read-only demo that anyone can chat with. Share the link before Monday's meeting. Let Jen O'Neill "live in" the demo home for 10 minutes before she even gets on the call.

**Why this wins:**
- She can't argue with a live demo she's interacted with.
- The portal-vs-brain framing wins itself through experience, not slides.
- It works as an async evaluator — she can share it with Ollie, other technical evaluators, even their board.

**Risk:** The data is synthetic. You flag it as such. Set expectations: "This is a model home with synthetic data, but the reasoning is real production logic."

**Action:** Create a public demo URL. Prioritize getting this live before Monday.

---

## 5. Solo founder as velocity advantage — weaponize, don't defend

The main doc says "don't apologize for solo founder." Correct. But it's still missing the *offensive* case: being solo in prop-tech is a structural speed advantage over funded competitors who need committees and co-founder alignment.

**The framing:** "I can ship a Cairn-specific demo in a week. A funded team with 4 engineers and a PM needs six meetings to shipped the same thing. Decisions in minutes. That's what partnership with OpenHouse looks like."

**Action:** Rewrite the solo-founder section in the main doc to lead with this velocity framing, with the "not apologising" message as the close, not the open.

---

## 6. NDRC: tighten the terms and use-of-funds

"€100k uncapped SAFE, 20% discount, two tranches" — these details are incomplete without:

- **Implied valuation:** Uncapped with 20% discount means the cap is set by the next round's price. What's the target?
- **Tranche 2 trigger:** What milestone? Revenue? Customer count? Deployment scale?
- **Use of funds:** €100k sole-founder runway = how many months? What does it get you?

**Suggested use-of-funds framing:**
- 18 months solo-founder runway (lean, no office, existing infra)
- 2 major paid pilot deployments with named developers (Cairn + 1 other)
- NDRC program network access (warm intros, demo days, credibility)
- Milestone: first paying customer → trigger tranche 2

**Action:** Add a one-page NDRC brief as an appendix, or update section 11 with these specifics.

---

## 7. Second revenue line: New-Home Intelligence

An underexplored asset: your query logs, anonymized and opt-in, are a proprietary dataset of what homeowners actually ask and struggle with in new-build homes. Who wants this data?

- **Heat pump manufacturers** — real-world usage patterns, misoperation modes, seasonal performance gaps
- **Energy utilities** — understanding homeowner behavior to optimize tariff design
- **Insurance companies** — risk factors in new-build performance
- **HomeBond / warranty providers** — common failure patterns by developer, system type

**The pitch:** "We don't just sell software to developers. We aggregate the largest dataset of how homeowners actually live in new homes and what goes wrong. That data has value."

**Action:** Add a "Data Monetization" section to the main doc under "Where this goes." Frame it as a 2027 revenue line, not a distraction from the core product.

---

## 8. Competitive response: name what Clixifix 2.0 would look like

Right now there's no section on competitive dynamics. Add one:

**Clixifix's likely AI upgrade path:** Add reasoning to their defect log. But without homeowner-facing energy data or live system logs, they can only classify defects — not prevent them, not predict them, not cross-reference with actual home performance.

**Your moat against them:**
1. Per-home energy/system data (they have none)
2. Homeowner-facing AI (they have developer-facing only)
3. Proactive notification (reactive logging vs. proactive prevention)
4. Real-time system drift detection (sensor data, not just photo submissions)

**Action:** Add a 2-page competitive landscape to the strategy brief. This matters for NDRC investors and for Cairn's board-level evaluation.

---

## 9. Use-of-funds for the first paying customer

Beyond NDRC, what happens when the first €25k comes in? The strategy should specify:

- **Reinvestment priority:** More demo deployments (more named developers) → shortens sales cycle for the next customer.
- **Product priority:** The "Predictive" module and the "Device Tab" for Cairn.
- **Positioning:** "First paying developer" is a case study asset, not just revenue. Get permission, document everything, publish with their name (or anonymized if they prefer).

---

## 10. Gaps in the market section

Section 9 is citation-grade cautious (good), but missing:

- **UK entry specifics:** PDTF and Moverly are named, but what does "speaking the UK's emerging property-data language" actually mean in product terms?
- **EU/international:** Ireland proves it. UK is phase 2. What about Europe more broadly (new-build heat pump mandates across the EU)? Phase 3? Year 5?
- **Multi-unit/apartment specifics:** The regulatory section mentions apartment defects redress. But apartments have different systems (central heat pumps, shared ventilation, communal solar) vs. single-family homes. Does the same product work, or does it need adaptation?

---

## Structure recommendation for the main doc

The main document would be stronger with this ordering:

1. One-paragraph version (keep, it's excellent)
2. Core thesis (keep)
3. Product suite (**add Guardian pillar, add Predictive pillar**)
4. The proactive guardian narrative (new — this is the reframing story)
5. Unit economics (new)
6. Competitive landscape (new)
7. Live deployments (keep)
8. Market (keep, add EU/multi-unit gaps)
9. Commercial model (add land-and-expand pricing path)
10. Go-to-market (add first-paying-customer reinvestment plan)
11. NDRC (add use-of-funds)
12. Technical architecture (keep)
13. Where this goes (add Second Revenue line)
14. Principles (keep)
15. Open threads (keep, add predictive/device-tab/Guardian items)

---

Connects to: [[openhouse-full-context]] | [[context/dashboard.md]]
