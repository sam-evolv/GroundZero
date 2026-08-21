---
title: OpenHouse YC Fall 2026 application pack
company_id: openhouse-ai
date: 2026-07-29
status: same-day draft
submission_target: 2026-07-29
sources:
  - live Supabase production query
  - GitHub canonical repository and API
  - Vercel production deployment
  - OpenHouse public website
  - YC official application, FAQ, How to Apply, Interview Guide and RFS
  - YC official company directory API, W23 through S26
---

# OpenHouse YC Fall 2026 application pack

## Decision

Submit the Fall 2026 application today, 29 July 2026.

The on-time deadline was 27 July at 8pm Pacific. YC is still accepting late applications and explicitly says ready companies should apply now. The application should therefore be completed, fact-checked, recorded and submitted today rather than held for additional traction.

## Core positioning decision

Lead with OpenHouse as B2B software for residential developers.

The initial buyer is the developer. The first workflow is home handover and aftercare. The compounding asset is a verified, living record for every home. Homeowner intelligence, warranty, maintenance and energy support are the expansion, not the opening pitch.

## The central story

Developers create the richest record a home will ever have during construction. At handover, that knowledge is reduced to PDFs, emails and scattered support threads.

OpenHouse keeps the record alive.

It turns the developer's approved scheme, house-type, system, document and warranty information into a digital record for each home. Homeowners use that record to understand the property and report issues. Developers use the same record to manage handover, aftercare and repeated gaps across a scheme.

The initial commercial wedge is narrow and credible. The long-term opportunity is large because the record persists after the developer's normal handover relationship ends.

## Best 50-character description

**Handover and aftercare for homebuilders**

Character count: 39.

This is intentionally plain. It identifies the workflow and buyer. Do not use "operating system for every home" as the first description. That is the eventual category, not the present product explanation.

## Verified evidence ledger

### Product and deployment

- The canonical product repository is `sam-evolv/property-assistant`.
- The canonical application workspace is `apps/unified-portal`.
- Production is live at `https://portal.openhouseai.ie`.
- The Vercel production deployment was checked live on 29 July 2026 and returned `READY`.
- The current production deployment was created on 28 June 2026.
- The public marketing site is live at `https://www.openhouseai.ie`.
- The marketing site clearly marks walkthrough data as illustrative rather than real customer data.
- The real product contains developer, purchaser, handover, documents, aftercare, issue, communication and AI-assistant workflows.

### Live production data

A read-only query of the production Supabase project on 29 July 2026 verified the following four Longview developments:

- Ardan View: 111 unit records
- Longview Park: 75 unit records
- Rathard Park: 52 unit records
- Rathard Lawn: 43 unit records

Verified four-scheme totals:

- 281 unit or home records
- 143 distinct units with timestamped purchaser handover agreements
- 85 units linked to homeowner accounts

Use these three figures in the application.

Do not currently quote the raw message or document totals. The database contains historical tenant-ID mismatches affecting some message and document rows. The unit records have no tenant mismatch, and the 143 purchaser agreements are distinct units with timestamps. The account, unit and agreement figures are therefore the cleanest application-grade proof.

### Build velocity

Checked against `origin/main` on 29 July 2026:

- 2,307 commits on the main branch
- 2,610 unique commits across all branches
- 182 merged pull requests
- 2,016 tracked TypeScript and TSX files
- 125 tracked test or spec files
- 13 contributors shown by the local main history
- GitHub attributes the large majority of named repository contributions to Sam and Claude, consistent with the product being built largely solo with AI coding agents

Do not lead with these figures as traction. They are supporting evidence that a solo, domain founder can build and iterate quickly.

### Founder-market fit

Verified founder facts:

- Sam Donworth is OpenHouse's sole founder and shareholder.
- Sam is one of three people responsible for taking Longview Estates from greenfield to more than 200 completed homes in a planned 750-plus-home development.
- Sam works directly in residential property development, including the environment in which handover, buyer communication and aftercare occur.
- Sam holds a UCC Level 8 Economics degree through Transformational Learning.
- OpenHouse was built largely solo using AI tooling.

### Commercial status

Verified:

- The four-scheme Longview deployment is internal operating proof, not an arm's-length external customer.
- OpenHouse does not yet have a verified external paying developer customer in the records reviewed.
- Carol Tallon has offered a warm introduction to Bridgewater Developments.
- Bridgewater remains a potential prospect; the offered introduction has not yet happened.
- A major Irish developer previously engaged with the category but did not adopt. Do not name or characterise this as validation unless Sam approves the exact wording.

All founder-supplied factual questions are resolved. The founder and product-demo assets remain to be recorded and linked.

## YC cohort research

### Method

The official YC company directory API was queried across ten batches:

- W23
- S23
- W24
- S24
- F24
- W25
- S25
- F25
- W26
- S26

This produced 1,800 unique company records. Every record was included in the quantitative language and category analysis. Sixty records were identified as construction, real-estate or proptech companies from official industry and tag metadata and reviewed as the closest cohort.

YC does not publish the applications of these 1,800 companies. The directory can show what accepted companies became and how they explain themselves publicly. It cannot prove which sentence or metric caused acceptance. Do not claim causal findings that the source cannot support.

### Quantitative findings

Across 1,800 accepted-company one-liners:

- Median length: 6 words
- Mean length: 6.4 words
- Middle 50 percent: 5 to 8 words
- 49.7 percent contain the word "for", usually to identify the buyer or use case
- 22.7 percent begin with "AI"
- Only 7.3 percent use "platform"
- Only 1.8 percent use "operating system"
- B2B is the dominant official industry, covering 1,145 of 1,800 records
- Europe appears in 152 records

The implication is not that using a phrase causes selection. It is that accepted companies explain themselves with a short category, mechanism or buyer statement. OpenHouse should do the same.

### Closest accepted-company patterns

#### Foundation, S23

One-liner: "Shopify for Homebuilders"

Public description: a buyer-experience platform that brings new-home shopping, purchase and ownership online.

Lesson: YC has already funded a B2B homebuilder product that extends into ownership. The category is fundable. OpenHouse must distinguish itself through handover, verified home context and evidence-backed aftercare rather than generic buyer experience.

#### Haven, W23

One-liner: "AI workforce for property management"

Public description starts with one agent for maintenance coordination, including intake, diagnosis, dispatch and follow-up.

Lesson: broad vision, narrow first workflow. OpenHouse should follow this structure without copying its claim. Start with handover and aftercare, then expand.

#### RealPact, S26

One-liner: "AI-native OS for Real Estate Brokerages"

Its description immediately narrows the product to transaction paperwork and then states that it will expand into other brokerage operations.

Lesson: even companies using "OS" explain the concrete initial task first. OpenHouse should not ask the reader to believe the operating-system vision before understanding the handover workflow.

#### IronLedger.ai, S25

One-liner: "AI-enabled Corporate Cards and Invoice Processing for Real Estate"

Its description says it automates property accounting, starting with accounts payable.

Lesson: a specific, expensive workflow gives credibility to a broader system.

#### PermitPortal, F24

One-liner: "AI Operating System for Pre-construction"

Its description identifies the concrete workflows: site finding, entitlements and local development sentiment.

Lesson: lifecycle position plus concrete workflows is more persuasive than a generic property OS.

#### Alloovium, S26

One-liner: "Construction paperwork that finally works for your team"

Its public description emphasises source-cited answers, clause-level checking and human sign-off.

Lesson: trust and provenance are increasingly legible advantages in physical-world AI. OpenHouse's approved-source answers and refusal to guess should be made concrete.

#### Foreman, W26

One-liner: "Keeping contractors on the job site, not behind a desk."

Its public description names the existing mess, including spreadsheets, email, Word documents and photos across phones, before explaining the unified system.

Lesson: familiar operational substitutes make a complex product easy to understand.

### Current YC fit

YC's Fall 2026 Requests for Startups says AI is moving into the physical world and highlights construction, maintenance and real-world operations. It states that software for the physical world has changed little in 20 years and argues that the strongest new systems will record work as it actually happens, creating end-to-end data that frontier models and incumbents do not have.

OpenHouse fits this direction naturally:

- It operates in construction, handover and maintenance-adjacent work.
- It captures the verified record of a physical asset.
- It receives homeowner questions and issue evidence after delivery.
- It can connect the original construction context to what happens in the home over time.

Do not mention the RFS in a pandering way. Make the company describe this reality clearly enough that the fit is self-evident.

## Persuasion architecture

YC explicitly warns against marketing language and psychological manipulation. The application should therefore use no tricks in the conventional sense. The strongest psychological effects come from making the truth unusually easy to understand and hard to dismiss.

Use these principles:

### 1. Cognitive compression

Give the partner a five-word mental handle:

> Handover and aftercare for homebuilders.

### 2. Concrete contrast

Show before and after:

> Today: PDFs, emails, manuals and scattered support threads.
>
> OpenHouse: one verified record for each home, shared across handover and aftercare.

### 3. Founder inevitability

Make Sam's route to the idea feel causal, not decorative:

> He helped deliver more than 200 homes, saw the same information loss repeatedly, and built the product inside that environment.

### 4. Specific proof

Use 281, 143 and 85 instead of "multiple developments" or "real traction".

### 5. Honest asymmetry

State the weakness before the reviewer discovers it:

> The deployment is inside Sam's employer, not an independent paying customer. The next proof is one external paid scheme.

This increases trust and shows that the founder knows the real risk.

### 6. Narrow wedge, compounding expansion

Start with the workflow that can be bought now. Then show why each deployment creates an asset that supports a larger company.

### 7. A memorable insight

The application should teach YC one thing:

> Handover is the only moment when the developer still has the authority, documents and context required to create a verified digital record of the home at low cost.

That record becomes harder and more expensive to reconstruct after completion. This is the specific insight behind the developer-first distribution strategy.

### 8. Earned ambition

Do not write "OpenHouse will be the operating system for every home" as a naked claim. Earn it in three steps:

1. Developers provision the record at handover.
2. Homeowners and aftercare workflows keep the record alive.
3. The record becomes the context layer for warranties, maintenance and home performance.

## Provisional YC narrative score

The independent 100-point rubric scores the current draft at **88/100**:

- Immediate comprehension: 15/15
- Pain and user specificity: 11/12
- Founder insight and right to win: 14/15
- Progress, learning and speed: 14/18
- Wedge and distribution: 11/12
- Venture-scale path: 8/12
- Differentiation and obstacle awareness: 7/8
- Integrity and factual calibration: 8/8

This is strong enough for a late application. Commitment, legal entity, ownership, revenue, founder funding, technical contributors, programme history, cofounder position, internal-deployment status and IP position are now confirmed. The personally created IP has not yet been formally assigned to OpenHouse Ai Limited and should be assigned before taking investment. Any misleading answer would be an automatic failure regardless of the numerical score.

The draft now includes a verified progress-to-learning example: homeowners tried to describe settlement cracks and other snags in text, so Sam added photo upload and media analysis to create clearer issue evidence and context-aware triage.

## Draft core application answers

These drafts must be reconciled against the exact live form and its character limits before submission.

### Describe what your company does in 50 characters or less

> Handover and aftercare for homebuilders

### What is your company going to make? Describe your product and what it does or will do.

> OpenHouse gives residential developers one system to hand over homes and manage what happens after completion. A developer uploads the approved information for a scheme, including house types, installed systems, manuals, warranties and homeowner guidance. OpenHouse turns it into a digital record for each home. The homeowner receives a branded handover, can ask questions based on the specific property and can report an issue with photos or video. The developer sees missing information, repeated questions and aftercare issues across the scheme. We start with handover and aftercare because that is where developers have the richest context and the most immediate customer friction. Over time, the verified record becomes the context layer for warranty, maintenance and home-performance support.

### Why did you pick this idea? Do you have domain expertise? How do you know people need it?

> I am one of three people responsible for taking a residential development from greenfield to more than 200 completed homes within a planned 750-plus-home scheme. I work directly across the environment in which homes are sold, handed over and supported. I repeatedly saw that the developer has the richest information a home will ever have during construction, but the homeowner receives fragmented PDFs, manuals, emails and support contacts. I built OpenHouse inside that operating environment. It now contains 281 real home records across four developments, 143 homes have timestamped purchaser handover agreements and 85 are linked to homeowner accounts. The deployment is within my employer rather than an independent paying customer. The next proof is converting the internal product into one paid external scheme.

### What's new about what you're making? What substitutes do people use today?

> Developers currently assemble handover packs from PDFs, spreadsheets, email, shared drives and the knowledge of individual site, sales and customer-care staff. After completion, homeowner questions, snags and warranty issues move into separate inboxes or defect systems, so the original home context is lost. OpenHouse treats handover as the creation of a persistent digital record for the individual home. The same approved record answers homeowner questions, cites its sources, refuses to guess when information is missing and carries issue evidence back into developer aftercare. The new part is not a chat interface. It is keeping the verified construction and handover context attached to the home so every later workflow starts with the correct property-specific information.

### Who are your competitors? What do you understand that they don't?

> The closest products include Foundation for homebuilder buyer experience, Spaciable for homeowner handover and portals, Clixifix and Verisk Punchlist Manager for defects and warranty, and HomeBinder or Centriq for homeowner records. Developers also use generic CRMs, shared drives, PDFs, email and spreadsheets. Our specific insight is that handover is the cheapest and most reliable point at which to create the permanent digital identity of a home. The developer still has the approved documents, installed-system information and authority to provision it for the buyer. Most tools optimise one side of the lifecycle, such as content delivery, defects or homeowner storage. OpenHouse's bet is that the handover record should remain the shared context for homeowner questions, aftercare evidence, warranties, maintenance and later home-performance intelligence.

### How do or will you make money? How much could you make?

> Residential developers will pay a scheme implementation fee, a per-home provisioning fee and recurring software fees while homes remain in active aftercare. The initial hypothesis is €99 per home, approximately what a developer already spends on a printed handover folder for a home worth roughly €500,000. A developer delivering 500 homes per year represents €49,500 before setup or recurring software. Volume pricing and recurring fees for developer workflow and portfolio intelligence will be tested with external customers. Reaching approximately €100 million at the current per-home price would require about 2,000 developers averaging 500 homes per year, or fewer as recurring contract value grows. The UK and US are the most relevant expansion markets because new-home quality, warranty and post-completion support already have established budgets and regulatory pressure. This pricing has not yet been validated externally.

### How far along are you?

> The product is live at portal.openhouseai.ie and contains real operating data from four Longview Estates developments. Production currently holds 281 home records. 143 distinct homes have timestamped purchaser handover agreements and 85 homes are linked to homeowner accounts. After early homeowners tried to describe settlement cracks and other snags in text, I added photo upload and media analysis so issues could arrive with visual evidence and be triaged against the home's context. I built the product largely solo with AI coding agents. This is internal operating proof inside the residential developer where I work, not an independent customer, and OpenHouse has €0 revenue. A senior industry contact has offered to introduce me to Bridgewater Developments; that introduction has not yet happened. The next milestone is a paid external scheme with agreed handover and aftercare outcomes.

### How will you get users? If there is a chicken-and-egg problem, how will you solve it?

> We sell to residential developers, so one customer provisions OpenHouse for an entire scheme of 50 to 300 homes. I have direct access to the Irish developer market through my property work. A senior industry contact has offered to introduce me to Bridgewater Developments; the introduction has not yet happened. The first sale is a tightly scoped paid scheme launch: import the developer's existing house-type and handover information, provision the home records, onboard one homeowner cohort and report aftercare gaps. We then expand to additional schemes within the same developer. The UK route is mid-sized homebuilders facing New Homes Quality Code and warranty pressure; the US route is regional builders with established warranty teams. There is no consumer chicken-and-egg problem because the developer owns the initial data and distributes the product at handover.

## Additional application fields

The current field structure below comes from a recent open-source YC application coach that reproduces 24 modern form questions. It is not an official YC source and must be reconciled against the live form before submission.

### Who writes code or does other technical work? Was any of it done by a non-founder?

Draft:

> I am the sole founder and am responsible for the product and technical work. I use Claude Code and other AI coding agents extensively to implement the software, then review, test and deploy the work. The production application is a TypeScript and Next.js monorepo with Supabase and Vercel. No human non-founder has written product code.

Do not describe an AI agent as a cofounder or employee. If any contractor, friend or employee wrote material code, identify them and explain the ownership terms.

### Are you looking for a cofounder?

> I am not actively looking. I would consider an exceptional cofounder with proven execution ability, strong long-term alignment and a relevant network, but I am not delaying the company while searching.

### Company name

OpenHouse

Confirm whether YC should receive the legal name or trading name in a separate field.

### Company location

Recommended only if true:

> Cork, Ireland / San Francisco, United States

Explanation:

> I live in Cork, where I learned the problem and built the first deployment inside a residential developer. If accepted, I am fully committed to OpenHouse and open to relocating to San Francisco for YC and to build the US homebuilder market, while continuing to serve Ireland and the UK.

If Sam intends to remain based in Cork, state that plainly and explain how the company will participate fully in the San Francisco batch.

### Tech stack

> TypeScript, Next.js 14, React, Supabase/Postgres, Vercel, OpenAI, Drizzle ORM, Tailwind and Radix UI. The product is a multi-tenant monorepo with role-based developer and homeowner applications, document-processing and AI-assistant workflows.

Do not list every dependency. The purpose is to demonstrate that the application is real and that the founder knows its architecture.

### Are people using the product?

> Yes. OpenHouse is live inside Longview Estates across four residential developments. The production database contains 281 home records. 143 distinct homes have timestamped purchaser handover agreements and 85 homes are linked to homeowner accounts. This is an internal deployment within the developer where I work, not an independent customer. We do not yet have a clean retention metric and I will not treat provisioned records as equivalent to active users.

### Previous YC application

> This is my first YC application.

### Incubator, accelerator or pre-accelerator participation

> I applied to NDRC's pre-accelerator in Ireland and completed the interview on 29 July 2026. Their decision is pending. NDRC has not offered funding, requested equity or created any commitment.

### Company URL

Primary: `https://www.openhouseai.ie`

Demo/product: `https://portal.openhouseai.ie`

A dedicated obscure demo URL or demo account should be prepared if the portal requires authentication.

### Founder

Sam Donworth, sole founder.

### Most impressive achievement outside OpenHouse

Draft:

> I entered property development without a conventional professional background and became one of three people running Longview Estates. I helped take it from greenfield to more than 200 completed homes within a 750-plus-home development and played a major role in the planning application for another 260 homes, taking the planned pipeline above 1,000. We are delivering roughly 200 homes per year while building the infrastructure of a small town, including schools, retail, care and community facilities.

### How long have you worked on this?

> I began serious product development in October 2025 and incorporated OpenHouse Ai Limited on 4 February 2026. I have built it during evenings and weekends alongside my full-time role at Longview Estates and have never yet worked on it full-time.

Add any full-time periods only if factually correct.

### Founder commitment

> If accepted, I will leave my current role and work exclusively on OpenHouse. I will attend the Fall 2026 batch in San Francisco.

### Revenue

Current draft:

> €0 revenue. The live Longview deployment is internal operating proof, not an arm's-length paying customer.

### Competitor list for form field

- Foundation
- Spaciable
- Clixifix
- Verisk Punchlist Manager
- Buildertrend / BuildTopia
- HomeBinder / Centriq
- Generic CRM, email, shared-drive and PDF workflows

### Category

Primary: B2B

Secondary: Real Estate and Construction / Proptech

### Other ideas considered

> OpenHouse is the only company I have considered applying to YC with.

### Other accelerators

> I applied to NDRC's pre-accelerator in Ireland and completed the interview on 29 July 2026. Their decision is pending. NDRC has not offered funding, requested equity or created any commitment.

### Legal entity

> OpenHouse Ai Limited is an Irish private limited company incorporated on 4 February 2026, company number 807744, and owned 100% by Sam Donworth.

### Investment

> No outside investment, grants, loans, SAFEs or family money. Sam has personally funded approximately €10,000 of company costs.

### Currently fundraising

Draft if accurate:

> I am applying to YC and NDRC but am not raising from anyone else.

### What convinced you to apply to Y Combinator?

> OpenHouse has reached the point where the product is real but the company must prove it can sell repeatedly outside the environment where it was built. YC is unusually strong at helping domain founders narrow a wedge, move faster and enter the US market. I had treated YC as something for other founders until I saw Irish companies with early products get accepted and realised that assumption was simply self-imposed. I am applying because I have lived this problem, built the product and want to find out how far it can go when I work on it without the constraints of a full-time job.

This answer should not frame YC as a status symbol or proof of personal worth.

### How did you hear about Y Combinator?

> I first learned about YC years ago through the companies and entrepreneurs it backed, then kept encountering it through founder podcasts, books and interviews.

### Legal and IP

> Sam built OpenHouse primarily on personal time using his own computer, accounts and money. A limited amount of work occurred during Longview hours because the product was being used in Longview's live handover workflow, but it was not an assigned or paid Longview duty. His employment contract contains no IP or invention-assignment clause. Sam owns 100% of OpenHouse Ai Limited and personally controls the code, repository, domains, Supabase, Vercel and all other product assets. No one else has been promised IP, equity or future rights. As one of three people running Longview, deploying technology for handover and aftercare falls within his operating remit. He initiated the deployment with the knowledge and full backing of the other Longview principals. There is no separate written commercial, DPA, licence or IP agreement between Longview and OpenHouse. The personally created IP has not yet been formally assigned to OpenHouse Ai Limited; Sam will complete that assignment before taking investment.

## Founder video

Target: one unedited 60-second video, Sam looking at the camera, no deck or cinematic production.

### Script

> Hi, I'm Sam Donworth, the sole founder of OpenHouse. I am one of three people running Longview Estates, where we have taken a residential development from greenfield to more than 200 completed homes. I saw developers create the richest record a home will ever have, then reduce it at handover to PDFs, email and repeated support questions. I built OpenHouse to keep that record alive. It gives homebuilders one system for handover and aftercare, and gives homeowners answers based on their specific property. It is live internally at Longview across four developments. It contains 281 home records as of 2026-07-29. Longview is not an independent customer. I built it during evenings and weekends. If accepted, I will leave my role and work exclusively on OpenHouse.

Speak naturally. Do not memorise every word. The important beats are founder, lived problem, concrete product, verified progress and ambition.

## Product demo

Target: 90 seconds to 3 minutes. No slides.

### Shot sequence

1. Developer development overview
   - "This is one real development inside OpenHouse."
2. Select an individual unit or home
   - "The developer provisions the approved record for this specific home."
3. Show documents and installed-system context
   - "The record contains the home's handover documents, systems and guidance."
4. Show homeowner portal
   - "The homeowner receives this at handover instead of a static pack."
5. Ask one source-backed question
   - "The answer uses the correct home and scheme information and shows its source."
6. Ask a question the record cannot answer
   - "When the evidence is missing, it refuses to guess and sends the gap back to the developer."
7. Show issue or aftercare workflow
   - "Questions and issue evidence become structured aftercare rather than another email thread."
8. Close on developer view
   - "Every handover makes the record more useful for the homeowner and the developer."

Use a permissioned demo or illustrative tenant. Do not expose purchaser personal data in the recording.

## Hardest YC objections

### Is this just a homeowner portal?

No. The portal is one interface. The product's value is the verified home record shared across developer handover and aftercare.

### Is Longview actually a customer?

No. It is Sam's employer and the deployment is internal operating proof. The external-commercial question remains open.

### Why has the product not produced an external paid customer?

The honest answer must cover focus, part-time constraints, product breadth and the recent narrowing to a sellable scheme launch. Do not blame developer inertia.

### Why will developers pay?

This is not yet proven externally. The buying hypothesis is reduced handover administration, fewer repeated questions, cleaner aftercare evidence and stronger quality/compliance proof. The first paid pilot must measure these outcomes.

### Why is this venture-scale?

A developer sale provisions tens or hundreds of homes. The record persists beyond handover and becomes the context layer for recurring warranty, maintenance and home-performance workflows. The expansion is attached to an accumulating physical asset, not a one-off portal licence.

### Why does AI matter?

It turns unstructured home documents, photos and conversations into source-backed answers and structured follow-up. Without verified property context, generic AI is unsafe and undifferentiated. OpenHouse's asset is the home-specific record and the workflow that keeps it current.

### Why can incumbents not add this?

They can add chat or isolated features. OpenHouse's bet is that the system must be organised around a persistent home identity created at handover, with context and evidence flowing across the developer and homeowner sides. The answer should still acknowledge that incumbents are serious competitors.

### Is a solo non-technical founder fundable?

The product and repository demonstrate unusually high building velocity. The stronger answer is not "AI replaces a cofounder". It is that Sam combines direct domain access, product judgment and the ability to ship. He should also be candid about where future technical leadership or hiring may be needed.

### Will Sam actually leave his job?

Confirmed: if accepted, Sam will leave his current role, work exclusively on OpenHouse and attend YC in San Francisco. He is fully open to relocating if needed.

### Is the product secure enough for developer and homeowner data?

Security has been materially hardened, but the latest market-readiness audit still identified external-pilot gates. The application should not claim enterprise readiness. It should say the product is live internally and is being hardened for an external paid scheme.

## What not to say

Do not lead with:

- "The operating system for every home"
- "Revolutionising the property industry"
- "Transforming the way people interact with their homes"
- "AI-powered end-to-end property lifecycle platform"
- "No competitors"
- "Validated by major Irish developers"
- "Hundreds of active users"
- "Enterprise ready"
- "Fully autonomous"
- Unverified energy savings
- Illustrative marketing-site dashboard numbers

## Same-day submission sequence

1. Reconcile these drafts against the exact live YC form.
2. Confirm legal name, incorporation, funding, revenue and ownership.
3. Make the full-time commitment decision.
4. Confirm OpenHouse IP and Longview data permission.
5. Create a safe demo login or obscure demo link.
6. Record the 60-second founder video.
7. Record the product demo.
8. Paste and shorten every answer to the live field limits.
9. Run a factual review, YC-partner review and hostile review.
10. Sam reads every answer aloud once.
11. Submit today.
12. Save the confirmation and final answers to Ground Zero.

## Primary sources

- YC Apply: https://www.ycombinator.com/apply
- YC FAQ: https://www.ycombinator.com/faq
- YC How to Apply: https://www.ycombinator.com/howtoapply
- YC Interview Guide: https://www.ycombinator.com/interviews
- YC Fall 2026 Requests for Startups: https://www.ycombinator.com/rfs
- YC company directory: https://www.ycombinator.com/companies
- YC company directory API: https://api.ycombinator.com/v0.1/companies
- Dropbox original application: https://www.ycombinator.com/apply/dropbox

## Working conclusion

The irresistible version of OpenHouse is not a grand claim. It is a sequence of truths:

1. Sam has lived the problem at unusual depth.
2. He built a substantial product largely alone.
3. The product is live on 281 real homes.
4. The first buyer and workflow are clear.
5. The current weakness, no external paying customer, is understood precisely.
6. Each developer deployment creates a persistent home record that supports a much larger company.

The application should make YC think:

> This founder knows a real physical-world workflow that most software founders have never seen. He has already built far more than expected while part-time. If he goes full-time and proves one external developer will pay, this could become the data and workflow layer attached to every new home.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-10-openhouse-west-x-west-future-foundry-entry]]
- [[briefs/openhouse-perfect-yc-application-playbook-2026-07-29]]
- [[briefs/openhouse-yc-acceptance-patterns-and-competitive-positioning-2026-07-29]]
- [[briefs/wiki-refiner-2026-07-30]]
- [[briefs/wiki-refiner-2026-07-31]]
- [[briefs/wiki-refiner-2026-08-01]]
- [[briefs/wiki-refiner-2026-08-02]]
- [[briefs/wiki-refiner-2026-08-03]]
- [[briefs/wiki-refiner-2026-08-04]]
- [[briefs/wiki-refiner-2026-08-05]]
- [[briefs/wiki-refiner-2026-08-06]]
- [[briefs/wiki-refiner-2026-08-07]]
- [[briefs/wiki-refiner-2026-08-08]]
- [[briefs/wiki-refiner-2026-08-09]]
- [[briefs/wiki-refiner-2026-08-10]]
- [[briefs/wiki-refiner-2026-08-11]]
- [[briefs/wiki-refiner-2026-08-12]]
- [[briefs/wiki-refiner-2026-08-13]]
- [[briefs/wiki-refiner-2026-08-14]]
- [[briefs/wiki-refiner-2026-08-15]]
- [[briefs/wiki-refiner-2026-08-16]]
- [[briefs/wiki-refiner-2026-08-17]]
- [[briefs/wiki-refiner-2026-08-18]]
- [[briefs/wiki-refiner-2026-08-19]]
- [[briefs/wiki-refiner-2026-08-20]]

