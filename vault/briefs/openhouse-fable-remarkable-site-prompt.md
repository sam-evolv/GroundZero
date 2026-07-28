# Fable prompt: make the current OpenHouse site remarkable

I am improving the existing OpenHouse marketing site for two demanding audiences:

1. Irish property developers who should immediately think, “I need this on my next scheme.”
2. Serious investors who should understand the focused wedge, the compounding product advantage and why OpenHouse can become the persistent information layer for every home.

Your job is to improve the current site end to end, not redesign it from scratch. Preserve the strongest visual work, assets, motion language, charcoal and gold identity, typography, product interfaces and page structure where they serve the story. Make targeted, high-leverage changes to positioning, hierarchy, product proof, credibility, conversion and technical quality.

This is an implementation task, not a strategy memo. Inspect the current artifact, make the changes in the codebase, run it, test it, review screenshots and continue iterating until the result is genuinely excellent.

## Source of truth

Start from the current site revision:

- Repository: `sam-evolv/OpenHouse-MarketingSite`
- Branch: `claude/openhouse-marketing-simplify-zri1kv`
- Reviewed commit: `1ea8a24cb86d682c43fd7c0991acd2a90fb37b05`
- Current preview: `https://open-house-marketing-site-77jbyfr4p-openhouseais-projects.vercel.app/care`
- Strategic audit: `/Users/samdonworth/GroundZero/vault/briefs/openhouse-site-strategic-audit-2026-07-23.md`

Inspect the homepage and the `/developers`, `/assistant`, `/care` and `/contact` routes before editing. Understand what is already strong. Do not blindly apply the audit if the actual artifact suggests a better way to achieve the same outcome.

## Core strategic decision

OpenHouse is not three unrelated products.

OpenHouse is one living model of every home, with different views for the people involved:

- The developer supplies the evidence already created for a house type.
- OpenHouse turns it into a persistent home record.
- The homeowner asks a question and gets a sourced answer for that specific home.
- If the evidence is missing, OpenHouse says so and escalates rather than inventing an answer.
- Developers see the recurring questions, issues and information gaps across their homes.
- Those insights improve future handovers.
- Energy intelligence becomes the next layer on the same home record.

The Developer Dashboard is the control plane. The Property Assistant is the homeowner interface. Care is an installer extension or focused campaign route. Energy Intelligence is a layer on the home model, not a separate company thesis.

Remove or rewrite any language that makes the company sound like three early SaaS products bundled together, especially “Three products. One platform” and “a separate product.”

## The memory hooks

A visitor should remember these ideas after leaving:

1. **A home that can explain itself.**
2. Every answer shows where it came from.
3. Every gap tells the developer what to fix.
4. OpenHouse starts with information the developer already has for a house type.
5. The home model is the durable asset. The assistant is the interface.

These ideas should land through hierarchy and visible product behaviour, not by repeating slogans throughout the page.

## Homepage outcome

Rebuild the homepage narrative around one causal product loop while retaining the best of the current visual design.

### 1. Hero

Lead with:

**A home that can explain itself.**

Use concise supporting copy along these lines, improving it where needed:

“OpenHouse turns the information already created for every home into sourced answers for the homeowner and live aftercare insight for the developer. Every answer shows where it came from. Every gap tells the developer what to fix.”

Primary CTA:

**Request a house-type walkthrough**

Secondary CTA:

**Trace a sourced answer**

The first frame must make the developer buyer, problem and outcome clear before animation or scrolling. Do not require the visitor to understand platform architecture.

### 2. Real product proof

Before market statistics or broad feature grids, show one believable end-to-end interaction:

1. A house-type document, floor plan, system manual or approved handover record enters OpenHouse.
2. A homeowner asks a concrete question.
3. OpenHouse answers for that home.
4. The exact source is visible and can be opened.
5. A second question cannot be answered from the evidence.
6. OpenHouse states the gap and offers escalation.
7. The developer sees that recurring information gap across homes.

Use real product captures and existing real assets wherever possible. If the data or interface is illustrative, label it immediately and visibly. Do not create realistic-looking fictional telemetry and hide the disclaimer elsewhere.

### 3. Developer outcome

Translate the proof into practical value:

- clearer property-specific handovers
- fewer repeated homeowner questions
- a record of what each homeowner received
- unresolved knowledge gaps surfaced rather than guessed
- recurring questions aggregated across a scheme
- better future handover information

Do not invent percentages, savings, adoption figures or reductions. Product truth is more persuasive than unsupported ROI.

### 4. Adoption

Make adoption feel small and achievable:

- start with one house type
- use the documents the developer already has
- configure the homeowner experience
- issue it to each matching unit
- improve it as real questions arrive

Show what the developer needs to provide and what OpenHouse produces. Avoid vague “adopt it in an afternoon” claims unless that has been verified.

### 5. Developer intelligence

Show the compounding loop clearly. The developer should see how homeowner interactions reveal:

- missing documents
- confusing handover instructions
- recurring equipment questions
- issues that genuinely need escalation
- information that should be added to future homes

This is the investor proof of defensibility. It should feel like a natural consequence of the homeowner product, not a separate analytics module.

### 6. Home Performance Index

Keep this as a precise, evidenced developer wedge.

OpenHouse can say that it supports the Consumer Information and Aftercare criterion by providing a property-specific digital Home User Guide and a record of ongoing guidance.

Do not imply that OpenHouse guarantees certification, is affiliated with the IGBC or automatically unlocks green finance. Preserve a clear independent-product disclaimer and verify every material claim against primary IGBC sources.

### 7. Traction and credibility

Use only verified evidence already present in the repository or supplied by the founder. Do not invent customers, development names, logos, revenue, usage, savings, testimonials, unit counts or performance metrics.

If the current claim “live on active developments today” is retained, support it with the strongest truthful proof available. If confidentiality prevents naming a project, state clearly that the deployment is anonymised.

The founder section should build trust without sounding inflated. Verify any pipeline size, active-development or “working property developer” claim before keeping it.

### 8. Energy Intelligence

Keep Energy Intelligence subordinate to the core living home model.

Frame homeowner value through:

- Money
- Comfort
- Risk

Distinguish clearly between what is live, what is in pilot and what is direction. Do not imply live integrations, tariff-aware bill attribution, remote control, automatic fault diagnosis, proactive optimisation or quantified savings unless those capabilities are verified in the actual product.

A control action such as “Fix the schedule” must not appear live unless OpenHouse can genuinely execute it with consent, permissions, rules and override. Otherwise use an educational or guided action such as “Show me how to restore the schedule.”

## Developer page

The current developer page contains strong material but is too broad. It recreates the old Sales, Build, Snagging, Handover, Intelligence and Energy fragmentation.

Do not delete useful functionality or routes. Change the hierarchy so the developer first sees the wedge and product loop:

1. One house type becomes a living home record.
2. Every buyer receives sourced, property-specific guidance.
3. Every unanswered question becomes visible aftercare intelligence.
4. The broader scheme workflows sit underneath as supporting capabilities.

Use real interface proof before feature lists. Make each claim answer the buyer’s question: “What changes in my operation if I use this?”

## Property Assistant page

This is currently the clearest expression of the category. Preserve its strongest visual and conversational moments.

Improve it by:

- making the source behind each answer visible
- showing the exact property or house-type context
- including a credible refusal and escalation state
- separating document-grounded answers from live telemetry
- labelling illustrative energy capabilities at the section level
- avoiding claims that the assistant “doesn’t make things up” as an absolute guarantee

Prefer: “Answers are grounded in the home’s approved information. When the evidence is missing, OpenHouse says so and escalates.”

## Care page

Keep Care as a sharp installer-focused route, but do not let it redefine the whole company.

- Remove or properly source “roughly four in ten” avoidable callouts.
- Replace “Acme Renewables” with an honestly labelled demo installer or a real partner used with permission.
- Mark every integration individually as Live, Pilot or Planned.
- Do not imply that OpenHouse replaces certified engineering diagnosis.
- Show how a genuine issue reaches the installer’s existing booking flow.
- Use the installer’s own callout history as the ROI mechanism rather than invented industry averages.
- Consider reducing Care’s prominence in the primary navigation until it has verified commercial traction.

A strong Care CTA is:

**Run the callout calculation**

Supporting line:

“Bring your last three months of callouts. We’ll identify which ones Care could have handled and calculate the value using your own numbers.”

## Conversion

The current “Book a Demo” flow ends on a generic contact page and “Schedule now” is only a mailto link. Replace this with a direct, honest conversion path.

For developers, use **Request a house-type walkthrough**.

Suggested fields:

- name
- company
- role
- current scheme or development type
- approximate units
- biggest handover or aftercare problem
- preferred time

Offer a real calendar handoff if an approved booking link already exists. Do not invent a calendar URL. Preserve direct email as a lower-friction alternative.

For Care, use **Run the callout calculation** with installer-specific fields.

Keep one dominant commercial action per page.

## Visual direction

Do not reinvent the wheel.

Keep:

- the premium charcoal, porcelain and restrained gold palette
- the cinematic architectural and systems imagery
- the strongest current hero compositions
- the editorial serif and clean sans-serif pairing
- the product interface language
- motion that explains product state or evidence
- the current quality of responsive composition

Improve through subtraction, hierarchy and proof. Do not add generic AI gradients, floating feature cards, stock team photography, decorative 3D, gratuitous WebGL, or more equal-weight product tiles.

Gold should continue to mean evidence, provenance, known context or escalation. Do not use it as arbitrary decoration.

Motion must communicate source, state, resolution or escalation. It must respect reduced motion, Save Data, hidden tabs and off-screen pausing. Meaningful content must be visible before JavaScript and must not remain hidden until a scroll animation triggers.

## Technical quality

Fix the issues found in the current review:

- Standardise the `components/fx` versus `components/FX` directory and import casing so a clean local production build succeeds.
- Ensure every clean clone can run the documented development and production commands.
- Render final market numbers in server HTML. Animation may enhance them, but `0` must not be the meaningful default.
- Review the 11 reported dependency vulnerabilities. Apply safe, compatible fixes and document anything that cannot be upgraded without a deliberate breaking change. Do not use a blind force upgrade.
- Add `sharp` if appropriate for production image optimisation.
- Check image loading, semantic headings, focus states, contrast and keyboard navigation.
- Ensure no section becomes blank in full-page capture, reduced-motion mode or with JavaScript delayed.
- Keep mobile clean at 390 by 844 and desktop clean at 1440 by 900.
- Preserve server-rendered first-frame content.

## Boundaries

- Do not rewrite the project from scratch.
- Do not create new products, routes or platform modules.
- Do not invent traction, customers, logos, testimonials, revenue, integrations, savings, telemetry or quantified operational outcomes.
- Do not present roadmap capabilities as live.
- Do not use em dashes in created copy.
- Do not merge, push or deploy to production without explicit approval.
- Do not perform unrelated refactors or dependency migrations.
- Do not make the site louder. Make it simpler, more truthful and more inevitable.

## Working method

Use high effort. When you have enough information to act, act.

1. Inspect the current code, live routes, assets and audit.
2. Write a concise implementation plan tied to specific files and outcomes.
3. Implement the changes in coherent stages.
4. Run the site after each major stage.
5. Review real desktop and mobile screenshots.
6. Use fresh-context verifier reviews for developer clarity, investor coherence, claim truth and responsive quality.
7. Fix the problems those reviews identify.
8. Continue until the final artifact satisfies the acceptance criteria.

Do not stop after producing a plan or a first draft. Do not report something as working without exercising it.

## Acceptance criteria

The work is complete only when:

- A first-time developer can explain OpenHouse correctly after the first screen.
- The homepage presents one compounding home model, not three businesses.
- A real or honestly illustrative sourced-answer loop is visible before broad feature claims.
- Live, Pilot, Example and Direction are impossible to confuse.
- No unsupported customer, integration, savings or traction claim remains.
- The primary CTA leads to a relevant, functional conversion path.
- Desktop and mobile screenshots show no clipping, blank sections or broken hierarchy.
- Reduced-motion and keyboard users can access all meaningful content.
- TypeScript and the clean production build pass.
- Relevant automated tests pass.
- The final working tree contains only intentional changes.

## Final handoff

Lead with the outcome. Then provide:

- the core strategic changes made
- the pages and files changed
- the claims removed, softened or relabelled
- real screenshots of desktop and mobile
- test and build output
- any unresolved decisions that require founder input

Do not push, merge or deploy. Leave the completed work ready for review.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/wiki-refiner-2026-07-24]]
- [[briefs/wiki-refiner-2026-07-25]]
- [[briefs/wiki-refiner-2026-07-26]]
- [[briefs/wiki-refiner-2026-07-27]]

