---
title: OpenHouse world-class marketing site research and creative direction
date: 2026-07-23
status: research-backed creative direction
company_id: openhouse-ai
links:
  - [[companies/openhouse-ai]]
  - [[context/openhouse-product-map]]
  - [[briefs/openhouse-energy-intelligence-sketch]]
---

# OpenHouse world-class marketing site research and creative direction

## Executive decision

OpenHouse should not behave like a conventional proptech brochure, a broad SaaS platform catalogue, or an awards-first studio portfolio.

The world-class direction is a compressed product demonstration built around one memorable idea:

> **A home with a memory.**

OpenHouse captures how a home was built, turns that context into a living home model, and uses that model to answer homeowner questions, explain energy performance, and show developers what needs attention.

The desired visitor response should happen in this order:

1. **Wonder:** this feels unlike another property software site.
2. **Recognition:** I am looking at a real home and real construction evidence.
3. **Understanding:** the evidence becomes a living home model.
4. **Proof:** the model answers a specific question and cites the source.
5. **Commercial meaning:** the same model explains energy and reveals scheme-level patterns.
6. **Action:** I want to see this on one of our house types.

The homepage should therefore behave more like a 20-second product film that the visitor can control than a sequence of feature cards.

## What was inspected

### OpenHouse surfaces

- Live site: https://www.openhouseai.ie
- Draft product-led preview: https://deploy-preview-34--openhouseai-marketingsite.netlify.app
- Repository: `/Users/samdonworth/GroundZero/repos/OpenHouse-MarketingSite-v3`
- Draft PR: https://github.com/sam-evolv/OpenHouse-MarketingSite/pull/34

### Reference experiences

Directly inspected during this research:

- Apple AirPods Pro: https://www.apple.com/airpods-pro/
- Linear: https://linear.app
- Stripe: https://stripe.com/ie
- Vercel: https://vercel.com
- SPAN: https://www.span.io
- Matterport: https://matterport.com
- OpenSpace: https://www.openspace.ai
- Buildots: https://buildots.com
- PassiveLogic: https://www.passivelogic.com
- Josh.ai: https://josh.ai
- Tibber: https://tibber.com/en
- Sierra: https://sierra.ai
- Harvey: https://www.harvey.ai
- Hebbia: https://www.hebbia.com
- Willow: https://willowinc.com
- Homey: https://homey.app/en-us/
- Locomotive: https://locomotive.ca/en
- Active Theory: https://activetheory.net
- Build in Amsterdam: https://www.buildinamsterdam.com
- Pentagram: https://www.pentagram.com/work
- Uncommon: https://www.uncommon.studio
- The Whiteley: https://www.thewhiteleylondon.com
- Awwwards architecture collection: https://www.awwwards.com/websites/architecture/

## Current OpenHouse diagnosis

### The live site

The live site has cinematic craft, rich motion and several strong visual ideas, but its six-product structure fragments the company into Sales, Build, Handover, Intelligence, Agent and Care. A new visitor must first decode the product taxonomy before understanding the company.

The visual energy is often decorative rather than explanatory. Cursor glows, floating cards, multiple service names and generic AI motifs create activity without always moving the visitor through the product logic.

### Draft PR #34

The draft preview is materially stronger. It already includes:

- a real homeowner assistant interface;
- an E3 heat-pump question and cited manual source;
- a floor-plan answer;
- a builder homeowner view;
- resolved versus escalated questions;
- an interactive Money, Comfort and Risk energy view;
- narrower navigation and a more coherent product story.

The preview is ahead of most construction and proptech sites in product concreteness. Its main weakness is the opening abstraction. “The intelligence layer for modern homes” and an aerial development image still resemble category-standard AI and property marketing before the visitor reaches the specific product proof.

### Measured performance baseline

Mobile Lighthouse lab tests were run on 23 July 2026.

Live site:

- Performance: 72
- Accessibility: 94
- Best practices: 100
- SEO: 100
- First Contentful Paint: 2.7 seconds
- Largest Contentful Paint: 7.0 seconds
- Total transferred size: approximately 974 KiB
- Detected issues: low-contrast combinations, non-sequential heading order, oversized image delivery, an unsized footer image

Draft preview:

- Performance: 68
- Accessibility: 94
- Best practices: 96
- SEO: 58, partly because the deploy preview is intentionally blocked from indexing
- First Contentful Paint: 3.0 seconds
- Largest Contentful Paint: 9.7 seconds
- Total transferred size: approximately 2,616 KiB
- Detected issues: low-contrast combinations, non-sequential heading order, oversized image delivery, an unsized footer image

The dynamic redesign cannot simply add more WebGL, video and scroll effects. It must become more selective. A world-class opening that arrives after seven to ten seconds is not world class.

## The scientific basis

### 1. First impressions form extremely quickly

**Evidence:** Lindgaard and colleagues found that people can form stable visual judgements of web pages after very brief exposures, including 50 milliseconds. The exact number should not be treated as a conversion law, but the implication is robust: the opening composition is judged before the copy is fully read.

Source: https://doi.org/10.1080/01449290500330448

**Application to OpenHouse:**

- The first frame must signal premium housing, technical precision and a single product idea.
- The opening cannot look like generic SaaS or a stock property brochure.
- A precise architectural object should dominate the composition.
- The H1 must be short enough to be perceived as part of the visual, not a paragraph to decode.

### 2. Lower visual complexity and recognisable structure improve early appeal

**Evidence:** Tuch and colleagues studied visual complexity and prototypicality in first impressions of websites. Their work supports a tension that matters here: people respond well when a site is easy to parse, while novelty must not destroy recognisability.

Source: https://doi.org/10.1016/j.ijhcs.2012.06.003

**Application to OpenHouse:**

- Use a familiar hierarchy: logo, one clear proposition, one demonstration, one main action.
- Put originality into the visual metaphor and choreography, not into hiding navigation or inventing unfamiliar controls.
- Do not open with six equal ideas, six product names or several simultaneous animations.
- Keep one dominant focal point per viewport.

### 3. Processing fluency influences aesthetic pleasure

**Evidence:** Reber, Schwarz and Winkielman link easier perceptual processing with positive aesthetic response. This does not mean every interface should be bland. It means the visitor should not have to work to discover the intended reading order.

Source: https://doi.org/10.1207/S15327957PSPR0804_3

**Application to OpenHouse:**

- Use plain labels such as “Construction context”, “Home answer”, “Energy explanation” and “Developer insight”.
- Keep body copy short and concrete.
- Use consistent spatial meaning. Evidence enters from one side, resolves in the home model, and produces an answer on the other.
- Reserve gold for sourced knowledge, evidence links and resolved states. This teaches the interface without explanation.

### 4. Aesthetics have distinct classical and expressive dimensions

**Evidence:** Lavie and Tractinsky distinguish clean, orderly aesthetics from expressive, creative aesthetics in website perception.

Source: https://doi.org/10.1016/j.ijhcs.2003.09.002

**Application to OpenHouse:**

- Classical quality comes from typography, spacing, alignment, contrast and restraint.
- Expressive quality comes from the living-home visual, architectural transformations and cinematic pacing.
- OpenHouse needs both. Expressive motion without classical discipline feels like a concept site. Classical restraint without a memorable visual feels like another enterprise SaaS page.

### 5. Credibility is communicated through visible proof and professional execution

**Evidence:** Stanford’s web credibility work emphasises easy verification, visible real-world organisation, expertise, professional design, clear contact routes, current content and the absence of avoidable errors.

Source: https://credibility.stanford.edu/guidelines/

**Application to OpenHouse:**

- Show real product UI early.
- Show where an answer came from.
- Separate current capability, example view and future direction.
- Use real scheme or pilot evidence only where permission and accuracy are confirmed.
- Avoid invented savings, inflated automation claims or fictional usage statistics.
- Make contact, company identity, privacy and data principles easy to find.

### 6. Motion must explain change, not merely signal expense

**Evidence level:** design inference grounded in attention and cognitive-load principles, established usability heuristics, and reduced-motion accessibility requirements.

Sources:

- Nielsen Norman Group usability heuristics: https://www.nngroup.com/articles/ten-usability-heuristics/
- Reduced motion guidance: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- WCAG 2.2: https://www.w3.org/TR/WCAG22/

**Application to OpenHouse:**

Every animation must do at least one of four jobs:

1. **Reveal** what information exists.
2. **Trace** where an answer came from.
3. **Resolve** uncertainty into a useful outcome.
4. **Scale** from one home to scheme-level insight.

Remove floating motion, magnetic buttons, autoplaying carousels and cursor effects that do none of those jobs.

### 7. Speed is part of perceived quality

**Evidence:** Google’s current Core Web Vitals define good field performance at the 75th percentile as:

- LCP within 2.5 seconds;
- INP of 200 milliseconds or less;
- CLS of 0.1 or less.

Source: https://web.dev/articles/vitals

**Application to OpenHouse:**

- The first meaningful frame must be server-rendered.
- The hero must have a lightweight poster or still frame.
- Video and advanced interaction should progressively enhance after the proposition is visible.
- Use responsive AVIF/WebP images and explicitly size every asset.
- Never require a WebGL scene to understand the product.
- Pause all continuous rendering when off-screen.

## What the best sites teach OpenHouse

### Apple: chapter one idea at a time

Observed tactic:

- Apple combines one large claim, one dominant visual and one controlled progression per chapter.
- Motion shows a property or transformation of the product.
- Visitors are given playback controls.

Transfer to OpenHouse:

- Treat living home model, homeowner answer, energy intelligence and developer insight as chapters.
- Let one home remain the protagonist across all chapters.
- Use transitions to change what the visitor understands about the same object.

Do not copy:

- extreme page weight;
- long empty scroll distances;
- image-sequence spectacle that delays comprehension;
- consumer-product hype unsupported by OpenHouse evidence.

### Linear: show the real product at legible scale

Observed tactic:

- The category statement is followed immediately by a large, credible product surface.
- Product screens are not decorative thumbnails. They contain enough readable detail to show workflow.
- The dark visual system is restrained, with sparse accent colour and high consistency.

Transfer to OpenHouse:

- Put a populated assistant interaction in the opening viewport.
- Let the visitor read the question, answer and source without opening a lightbox.
- Use full-width product scenes rather than a grid of tiny screenshots.
- Let each section state one job and show one workflow.

Do not copy:

- monochrome darkness across every section;
- developer-tool density that would overwhelm a property audience;
- generic thin-line system illustrations without architectural meaning.

### Stripe: turn capability into commercial evidence

Observed tactic:

- Stripe combines interface demonstrations with customer evidence, reliability numbers and stakeholder-specific use cases.
- Its strongest sections make an abstract infrastructure product tangible through working surfaces and concrete outcomes.

Transfer to OpenHouse:

- Pair every product demonstration with a developer consequence.
- Move from “question answered” to “avoidable support demand resolved”.
- Move from one home to patterns across a scheme.
- Use verified numbers only.

Do not copy:

- the sprawling product catalogue;
- large logo walls before the proposition is understood;
- the visual grammar of generic global infrastructure.

### Vercel: iconic restraint

Observed tactic:

- A minimal opening gives one symbol, one statement and one primary action disproportionate visual authority.

Transfer to OpenHouse:

- Make the living home model the icon.
- Use black space and gold architectural precision to create confidence.
- Resist adding decorative cards around the hero.

Risk:

- glowing objects on black have become common AI-site shorthand. OpenHouse must remain physically and architecturally specific.

### SPAN: make home energy physical

Observed tactic:

- SPAN leads with a physical household object and clear homeowner value.
- Energy becomes visible through circuits, devices and a real app.

Transfer to OpenHouse:

- Make energy behaviour tangible through the actual home and its systems.
- Show Money, Comfort and Risk as interpretations of a real signal, not abstract analytics cards.
- Use object-level specificity such as heat pump, ventilation, EV charging, solar and hot water.

### Hebbia, Sierra and Palantir: demonstrate a complete task

Observed tactic:

- Hebbia shows populated inputs, intermediate operations and useful outputs rather than decorative dashboard fragments.
- Sierra places a recognisable customer interaction beside its proposition, then shows action and resolution states.
- Palantir labels its product demonstrations by the operation being performed and makes the page itself a guided walkthrough.

Transfer to OpenHouse:

- Show one complete chain from homeowner question to exact home component, source, recommendation and resolved or escalated outcome.
- Keep the input, system reasoning and output visible enough that a visitor can understand the workflow without requesting a demo.
- Compress the walkthrough into roughly 20 seconds rather than reproducing Palantir’s density.

Do not copy:

- generic agent chat;
- enterprise workflow density;
- fictional automation presented without clear example labelling.

### Willow: connect a physical asset to its knowledge graph

Observed tactic:

- Willow combines a building representation with operational alerts and relationships between spaces, sensors, equipment and systems.

Transfer to OpenHouse:

- Connect rooms, installed assets, construction documents and energy signals spatially.
- Preserve warm domestic scale and tactile materials rather than commercial-building command-centre aesthetics.
- Show what the connected model can explain, not merely that a digital model exists.

### Premium property experiences: emotion through place

Observed tactic:

- Experiences such as The Whiteley use cinematic architecture, editorial typography and large-scale imagery to create desire.

Transfer to OpenHouse:

- Preserve premium architecture and a sense of the lived home.
- Use one or two exceptional property moments as emotional punctuation.
- Let the product feel native to premium homes rather than pasted over generic SaaS geometry.

Do not copy:

- long atmospheric sequences before meaning appears;
- hidden navigation;
- fragile rendering;
- property-film language without product proof.

### Award-winning studios: spectacle is a tool, not the objective

Observed tactic:

- Locomotive, Active Theory and similar studios use unusual transitions, bold typography, custom cursors, canvas scenes and non-standard interaction to establish identity.

Transfer to OpenHouse:

- Build one signature transformation that no competitor owns.
- Keep it tightly connected to the product model.
- Use a custom motion grammar and transition language.

Do not copy:

- portfolio navigation that requires exploration to understand;
- essential text inside canvas;
- constant cursor-following effects;
- continuous WebGL rendering;
- scroll hijacking or interaction that reduces control.

## The distinctive creative concept

## A home with a memory

The visual protagonist is a precise cutaway home made from layers of remembered evidence.

The home should not be a generic hologram. It should feel like a real modern Irish or UK home represented through architectural precision.

Its layers are:

- floor plans and dimensions;
- construction specifications;
- product manuals and commissioning data;
- finishes and selections;
- certificates and warranties;
- issue and maintenance history;
- energy and comfort signals;
- homeowner preferences and consented memory.

A single gold “evidence thread” connects those layers. When OpenHouse knows something, the thread visibly traces the answer back to a source. When it does not know, the interface does not bluff. The thread stops and the question escalates.

This gives the brand a distinctive and truthful motion language:

- **Gold means sourced context.**
- **Porcelain means human-readable explanation.**
- **Charcoal means the system and spatial environment.**
- **Muted red or amber means uncertainty, risk or escalation.**

The memorable object is not an AI orb. It is the home model itself.

## The first 20 seconds

### 0 to 3 seconds: recognition

A finished home sits in a dark architectural field. The opening copy is already visible and readable.

Eyebrow:

> THE LIVING HOME MODEL

Headline:

> **A home that can explain itself.**

Supporting line:

> OpenHouse captures how a home was built, then turns that context into practical answers, energy intelligence and developer insight.

Primary action:

> See it working

Commercial action:

> Use OpenHouse on a scheme

### 3 to 7 seconds: construction context becomes memory

The home separates into controlled layers. A floor plan, heat-pump manual, finish schedule and certificate move into the living model.

Plain label:

> Construction context captured

The visitor may scrub, pause or select a layer.

### 7 to 12 seconds: a real answer

A homeowner asks:

> What does E3 mean on my heat pump?

The gold evidence thread moves through the home model to the exact manual page. The response appears with a visible source citation.

Plain label:

> A home-specific answer, with its source

### 12 to 16 seconds: energy becomes understandable

The same home shows one energy signal. It resolves into:

- Money
- Comfort
- Risk

No invented saving is shown. The visitor sees what changed, why it matters and the next sensible action.

### 16 to 20 seconds: one home becomes scheme insight

The camera pulls back from one home to a development. The builder view reveals:

- questions resolved;
- questions escalated;
- recurring knowledge gaps;
- repeated system or education issues.

Plain label:

> What homeowners need, visible across the scheme

The sequence then rests rather than looping aggressively. The user can replay or choose another question.

## Recommended homepage architecture

### 1. Opening: the living home demonstration

Job: establish category, emotional distinctiveness and concrete product understanding.

Keep:

- the short headline;
- the interactive 20-second narrative;
- two clearly differentiated actions;
- immediate real product evidence.

Avoid:

- logo animation as the main event;
- several floating product cards;
- aerial footage as the first explanation;
- generic “AI-powered platform” copy.

### 2. The living model

Headline:

> **Built from what the home already knows.**

Show the cutaway home and selectable evidence layers. Each layer should reveal one real example rather than a feature paragraph.

Suggested layers:

- Fabric
- Systems
- Documents
- History
- Energy

The visitor should understand that OpenHouse is not merely chat. The assistant is powered by structured home context.

### 3. Ask the home

Headline:

> **Ask the home, not the folder.**

Use one large interactive product frame with three selectable real questions:

- What size is my living room?
- What does E3 mean on my heat pump?
- Why did my electricity bill rise?

Each state must show:

- the question;
- a concise answer;
- evidence or source;
- what OpenHouse does next;
- a clear example label where the capability is not yet live.

### 4. Energy intelligence

Headline:

> **Energy, explained around the life inside the home.**

Keep the Money, Comfort and Risk interaction from PR #34, but connect it to the same house and evidence thread.

Make one signal move through this sequence:

> Detect → explain → recommend → remember → escalate

Do not make this a disconnected analytics dashboard.

### 5. Developer insight

Headline:

> **See what homeowners need after keys.**

Visually pull back from one home to a scheme. Use the real builder interface and show:

- known versus unknown questions;
- recurring gaps;
- support demand resolved versus escalated;
- evidence of where homeowner education needs improvement.

This is where investor and developer value becomes explicit.

### 6. Proof and trust

Use only verified material:

- real live product screenshots;
- number of schemes or homes only when current and approved;
- one named developer or case example only with permission;
- one short founder or customer proof point;
- privacy and consent principles;
- labels for “Live”, “Example” and “Direction”.

The strongest possible case study is not a generic testimonial. It is one traceable chain:

> construction evidence → homeowner question → sourced answer → avoided or correctly escalated support demand → developer learning

### 7. Final action

Headline:

> **See one of your house types inside OpenHouse.**

Primary CTA:

> Build my OpenHouse walkthrough

Secondary text link:

> View the live product

The form should ask for as little as possible. Name, work email, company and optional development or house-type link are enough for the first step.

## Visual system

### Preserve

- near-black and charcoal foundations;
- porcelain text and surfaces;
- gold as the distinctive accent;
- cinematic architectural imagery;
- real OpenHouse interfaces;
- premium restraint and generous space.

### Evolve

#### Typography

Use typography to separate the system from the human outcome:

- a precise grotesk for navigation, controls, labels and product language;
- Source Serif 4, already present in the wider OpenHouse system, for selective human statements, homeowner questions or emotional punctuation;
- a compact mono style only for evidence references, house types and source IDs.

Avoid using serif everywhere or turning the site into a luxury-property brochure.

#### Layout

- Use large asymmetric editorial compositions.
- Alternate immersive dark chapters with one warm porcelain or paper-like architectural chapter.
- Replace repeated rounded-card grids with full-width scenes, annotated interfaces and sectional cuts.
- Keep readable line lengths and obvious hierarchy.

#### Colour semantics

- Gold: known, sourced, connected, resolved.
- Porcelain: explanation and human understanding.
- Charcoal: system, space and depth.
- Amber/red: risk, uncertainty or escalation.
- Muted green: verified healthy state only.

Gold should not decorate everything. Scarcity gives it meaning.

#### Architectural texture

Use restrained plan lines, dimensions, section marks, material callouts and document stamps. They should refer to genuine house information, not become arbitrary technical wallpaper.

## Motion and interaction grammar

### Allowed motion

- source lines tracing to evidence;
- layers assembling into the home model;
- a question resolving into an answer;
- a smooth scale transition from room to home to scheme;
- subtle depth or lighting that responds to scroll progress;
- state changes initiated by a visitor selecting a question or layer.

### Motion to remove

- magnetic buttons;
- cursor-following gold glows;
- floating orbs;
- decorative card drift;
- permanent auto-rotation;
- bouncing scroll prompts;
- multiple simultaneous reveal effects;
- scroll hijacking.

### Interaction principles

- The complete story must be understandable without interacting.
- Interaction should deepen understanding rather than reveal essential hidden copy.
- All controls need keyboard and touch operation.
- Autoplay must have pause and replay controls.
- Reduced-motion mode must retain the full narrative through static states.
- Mobile should use a tap-through story or short cross-fades rather than compressed desktop parallax.

## Existing assets and components to reuse

### Reuse directly or with light adaptation

- `public/images/product/assistant-e3-ui.png`
- `public/images/product/assistant-floorplan-ui.png`
- `public/images/product/builder-homeowners-ui.png`
- `components/marketing/ProductShowcase.tsx`
- the Money, Comfort and Risk interaction in PR #34
- the real product screenshots in `attached_assets`
- premium architecture imagery where usage rights are clear

### Rebuild around the new concept

- `components/architecture/LiveSchema.tsx`
  - Replace generic technology nodes with Fabric, Systems, Documents, History and Energy.
- `components/social-proof/ChatReplayGrid.tsx`
  - Replace three equal chat cards with one large, selectable, sourced-answer demonstration.
- `components/comparison/ChaosControlSlider.tsx`
  - Consider reworking it into “scattered construction evidence → living home model”, but only if it remains instantly understandable.
- `components/hero/HeroParallax.tsx` and `components/hero/ModuleHero.tsx`
  - Preserve depth and premium composition, but make the home model and answer trace the protagonist.

### Do not carry forward as primary experiences

- the always-rendering generic 3D orb in `components/three/Hero3D.tsx`;
- the placeholder 3D floorplan in `components/three/FloorplanViewer.tsx`;
- the six-product floating card grid;
- generic mouse-following glows;
- broad lifecycle product taxonomy on the homepage.

## Functional requirements

### Product demonstration

- Three selectable homeowner questions.
- Visible source citation and confidence state.
- Clear “I do not know” or escalation state.
- One energy example using Money, Comfort and Risk.
- One developer view showing aggregate consequence.

### Lead conversion

- One primary developer action throughout the site.
- A low-friction “house type walkthrough” request.
- A direct live-product route for high-intent visitors.
- Optional investor/company brief in the footer or company route, not as a competing homepage CTA.

### Proof system

Every showcased capability should carry one of three unobtrusive labels:

- **Live**
- **Example**
- **Direction**

This protects credibility while allowing the website to communicate the larger opportunity.

### Analytics and learning

Track:

- which demonstration question is selected;
- whether the sequence is played, paused or skipped;
- which source citation is opened;
- scroll depth by chapter;
- developer CTA starts and completions;
- live-product clicks;
- device class and Core Web Vitals.

Do not optimise for raw time on page. Optimise for comprehension and qualified action.

## Performance and accessibility budget

### Required production targets

Measured at the 75th percentile on mobile and desktop:

- LCP at or below 2.5 seconds;
- INP at or below 200 milliseconds;
- CLS at or below 0.1;
- Lighthouse accessibility at 100 in the release candidate;
- no heading-order failure;
- no known contrast failure;
- no unsized images;
- no essential text rendered only inside canvas.

### Recommended implementation constraints

- Server-render the headline, supporting copy, CTA and first hero frame.
- Use a responsive poster for the opening visual.
- Keep hero video or animated asset near 1.5 to 2 MB where feasible.
- Lazy-load non-critical motion and below-fold product scenes.
- Prefer SVG, CSS and DOM for evidence lines and labels.
- Use WebGL only if it adds an irreplaceable spatial effect, behind feature detection and a static fallback.
- Stop all requestAnimationFrame loops while off-screen.
- Honour reduced motion and data-saving preferences.
- Use `next/image`, responsive sizes and modern formats.
- Reserve space for all media before it loads.

## Validation plan

### Test 1: five-second understanding

Show the opening frame for five seconds to 8 to 12 people resembling target developers, investors or industry partners.

Ask:

1. What does the company do?
2. Who is it for?
3. What was the main idea you remember?

Target:

- at least 80% mention a home model, memory or home-specific intelligence;
- at least 80% understand that OpenHouse uses information specific to the home;
- no more than 20% describe it merely as a chatbot or property portal.

### Test 2: 30-second narrative comprehension

Allow the opening sequence to run once.

Ask the participant to explain the chain in their own words.

Target:

- at least 80% can describe construction context becoming a homeowner answer;
- at least 70% mention energy or developer insight as an expansion of the same model;
- no participant believes unsourced autonomous control is already live.

### Test 3: first-click test

Prompt:

> You are a property developer interested in trying this on a scheme. What would you do next?

Target:

- at least 80% choose the main developer CTA without hesitation.

### Test 4: delayed recall

After ten minutes of unrelated conversation, ask what they remember.

Success is not recall of every feature. Success is recall of:

- a home with a memory;
- sourced answers;
- energy understanding;
- scheme insight.

### Test 5: trust review

Ask participants to identify:

- what appears live;
- what appears illustrative;
- what evidence they would need before a commercial conversation.

Use the answers to strengthen proof rather than adding more claims.

## Priority order

### P0: make the opening undeniable

1. Finalise the category line, headline and one-sentence explanation.
2. Storyboard the 20-second living-home sequence.
3. Build a lightweight prototype using existing product assets.
4. Test comprehension before polishing the entire page.

### P1: connect the product chapters

1. Living model.
2. Sourced homeowner answers.
3. Money, Comfort and Risk.
4. Developer scheme insight.

Use the same home, evidence thread and semantic colours across every chapter.

### P2: add proof and conversion

1. Confirm which schemes, numbers and logos may be used.
2. Create one evidence-rich case chain.
3. Implement the house-type walkthrough CTA.
4. Add field performance analytics.

### P3: polish to the premium bar

1. Typography and spacing refinement.
2. Motion easing and chapter transitions.
3. Mobile-specific choreography.
4. Accessibility and reduced-motion QA.
5. Performance tuning.
6. Cross-browser visual QA.

## Stopping criteria

The redesign is ready to ship when:

- a new visitor can describe OpenHouse correctly after the opening sequence;
- the page has one memorable visual idea rather than several competing effects;
- all major claims are either verified, labelled as examples or labelled as direction;
- the real product is visible and legible in the first viewport;
- the living model, assistant, energy intelligence and developer value read as one system;
- the primary developer action is obvious;
- Core Web Vitals meet the stated targets in field data or the best available release-candidate lab tests;
- accessibility, mobile and reduced-motion QA pass;
- further changes are aesthetic preferences rather than comprehension, trust, performance or conversion improvements.

At that point, priority should move from redesign to showing the site to developers, investors and industry partners and learning from real conversations.

## Recommended creative brief in one paragraph

Create a premium, cinematic, product-led OpenHouse homepage around “A home with a memory.” Begin with a precise cutaway home and a short, plain-English proposition. Let construction evidence assemble into a living home model, then trace one real homeowner question to its source, translate one energy signal into Money, Comfort and Risk, and pull back to scheme-level developer insight. Preserve the charcoal, porcelain and gold identity, but make gold semantically mean sourced knowledge. Reuse the existing real OpenHouse interfaces and energy interaction. Replace generic AI motion, floating feature cards and broad lifecycle taxonomy with one signature architectural transformation. Keep the complete story accessible, mobile-first, reduced-motion safe and fast enough to achieve LCP at or below 2.5 seconds.

## Primary evidence and standards sources

- Lindgaard et al., first impressions: https://doi.org/10.1080/01449290500330448
- Tuch et al., visual complexity and prototypicality: https://doi.org/10.1016/j.ijhcs.2012.06.003
- Reber et al., processing fluency and aesthetic pleasure: https://doi.org/10.1207/S15327957PSPR0804_3
- Lavie and Tractinsky, dimensions of website aesthetics: https://doi.org/10.1016/j.ijhcs.2003.09.002
- Stanford web credibility guidelines: https://credibility.stanford.edu/guidelines/
- Nielsen Norman Group usability heuristics: https://www.nngroup.com/articles/ten-usability-heuristics/
- Google Web Vitals: https://web.dev/articles/vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Reduced motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
