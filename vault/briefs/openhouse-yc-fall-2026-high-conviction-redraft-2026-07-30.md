---
title: OpenHouse YC Fall 2026 high-conviction redraft
company_id: openhouse-ai
date: 2026-07-30
status: review-candidate-not-approved
source: authenticated live form, production evidence, product implementation and founder context
---

# OpenHouse YC Fall 2026 high-conviction redraft

This is a new narrative, not a polish of the previous candidate. The spine is that OpenHouse creates the exact home record at the one moment it can be created cheaply and accurately, then turns it into an assistant for the homeowner and a learning system for the developer.

## Founders

### Who writes code, or does other technical work on your product? Was any of it done by a non-founder? Please explain.

I built the entire production product myself: the developer portal, homeowner experience, property data model, document and retrieval system, multimodal assistant, aftercare workflows, tenant security and anonymous analytics. I use Claude Code and Hermes Agent heavily, but the architecture, product decisions, review, testing and deployment are mine. No non-founder has written product code.

### Are you looking for a cofounder?

Select: No

No. I am building OpenHouse as a solo founder.

## Founder Video

Hi, I’m Sam Donworth, founder of OpenHouse. I am one of three people helping deliver Longview Estates, where we have completed more than 200 homes.

A new home is the most complex product most people will ever own, but on the day they get the keys, everything known about it is reduced to a folder of documents. I built OpenHouse to stop that knowledge disappearing.

OpenHouse gives every home an AI assistant grounded in its exact record. It answers questions about heating, warranties, finishes and maintenance, turns photos into structured aftercare issues, and anonymously shows the developer what homeowners are confused by and which problems keep recurring.

It is live across four developments. I built it during evenings and weekends, and I am applying to YC to turn it into the intelligence layer for every home.

## Company

### Company name

OpenHouse

### Describe what your company does in 50 characters or less.

The AI that knows your exact home

### Company URL, if any

https://www.openhouseai.ie

### Demo

Upload the final product demo, maximum three minutes and 100 MB.

The demo should prove one complete loop:

1. Open one exact home record.
2. Ask a question that depends on that home's heating, finish, warranty or dimensions.
3. Show the property-specific answer.
4. Upload a photo and create a structured aftercare issue.
5. Show the developer receiving the issue with the correct home context.
6. Show the question appearing anonymously as a development-level insight or knowledge gap.

### Please provide a link to the product, if any.

https://portal.openhouseai.ie

### If login credentials are required for the link above, enter them here.

[ACCESS GATE: only provide a tested synthetic reviewer account with no access to purchaser data. Otherwise rely on the uploaded demo.]

### What is your company going to make? Please describe your product and what it does or will do.

OpenHouse is building an AI assistant that knows the exact home, not just how homes work in general.

At handover, the developer turns everything it knows about a property, including its specifications, installed systems, manuals, warranties, finishes, dimensions, energy setup and local services, into a permanent digital record. The homeowner can then ask questions such as “How do I reset my heating?”, “What paint is on this wall?”, “Is this crack covered?” or “What broadband can I get here?” They can upload a photo, preserve the evidence and create an aftercare issue already tied to the correct property.

Routine questions are answered without staff. Every question is also stripped of identity, classified and grouped across the development. The developer sees what homeowners repeatedly misunderstand, which problems recur and where its information is missing. It can fix the knowledge once, improve future answers and carry what it learns into the next homes it builds.

OpenHouse turns handover from a document dump into a live feedback network between the builder and every home it delivers.

### Where do you live now, and where would the company be based after YC?

Recommended if Sam is committing to the move:

Cork, Ireland / San Francisco, United States

Otherwise unresolved founder decision.

### Explain your decision regarding location.

I built OpenHouse in Cork because working inside a residential developer gave me an unfairly close view of the problem and a place to deploy the first product. If accepted, I want to move to San Francisco, work exclusively on OpenHouse and build for the US from the beginning. Ireland is where I proved I could build it; the US is where I believe it can become a very large company.

## Progress

### How far along are you?

OpenHouse is a production system, not a prototype. It is deployed across four Longview developments and covers both sides of the handover: the homeowner gets a property-specific assistant, documents, photos and issue reporting; the developer gets the home record, aftercare workflow, question analytics and a way to turn missing information into better answers for every relevant property.

The product already closes the loop from developer information, to homeowner question, to structured insight, to an improved knowledge base. Longview is where I work, so this is founder-connected operational proof. The next milestone is repeating the deployment with an independent paying developer.

### How long have each of you been working on this? How much of that has been full-time? Please explain.

I began serious product development in October 2025 and built the production system during evenings and weekends alongside my full-time role at Longview Estates. None of that time has been full-time. If accepted, I will leave Longview, stop all other paid work and work exclusively on OpenHouse.

[FOUNDER CERTIFICATION REQUIRED FOR THE FINAL SENTENCE.]

### What tech stack are you using, or planning to use, to build this product? Include AI models and AI coding tools you use.

The product is TypeScript, Next.js and React on Vercel, with Supabase/Postgres for authentication, storage and the tenant-isolated home data model. Its retrieval pipeline assembles the correct property, house type, installed systems, documents, warranty, conversation and photo context before generating an answer. OpenAI GPT-4o and GPT-4.1 handle extraction, classification, property-specific responses and image-led issue analysis. A separate PII-redacted analytics path converts questions into anonymous topics and knowledge gaps for the developer. I use Claude Code and Hermes Agent to build, test and review the system.

### Are people using your product?

Select: Yes

### How many active users or customers do you have? How many are paying? Who is paying you the most, and how much do they pay you?

The assistant has answered 259 property-specific questions across 79 homes in four Longview developments. Of those, 245 were written by users rather than selected from suggested prompts. People are asking about the systems, warranties, dimensions, finishes, energy, broadband, local services and aftercare of their actual homes.

Longview is the developer where I work, not an independent customer. No one is paying yet. OpenHouse has zero paying customers and €0 revenue, so there is no largest payer.

### Do you have revenue?

Select: No

### Previous YC application

This is my first YC application. I have not previously applied with OpenHouse or a different idea.

### Incubator, accelerator or pre-accelerator

No. I completed an interview for the NDRC pre-accelerator on 29 July 2026, but the decision is pending and I have not accepted a place or made any commitment.

[RECHECK NDRC STATUS IMMEDIATELY BEFORE SUBMISSION.]

## Idea

### Why did you pick this idea to work on? Do you have domain expertise in this area? How do you know people need what you’re making?

A developer knows more about a new home than anyone will ever know again. It has the drawings, specifications, installed systems, warranties, finishes, contractors and decisions. Then the keys are handed over and that knowledge fractures across PDFs, inboxes and the memories of staff who eventually move on.

I saw this from inside Longview Estates, where I am one of three people helping deliver a 753-home mixed-use development and work across sales, handover and aftercare. Homeowners were not asking generic questions. They wanted to know how their heating worked, which paint matched their wall, whether a crack was a defect, what a warranty covered or who to contact about their exact home. Staff repeatedly reconstructed answers the developer had once known perfectly.

Handover is the only moment when an accurate home record can be created cheaply and distributed automatically. I built OpenHouse at that moment. The live questions prove people use the exact-home context. The next thing I have to prove is that an independent developer will pay for the system.

### Who are your competitors? What do you understand about your business that they don’t?

Foundation and Spaciable digitise the homebuilder’s customer experience. Clixifix and Verisk Punchlist Manager focus on defects and warranty. The everyday alternative is still a mixture of portals, PDFs, email, spreadsheets and staff memory.

They organise software around a customer journey or a support workflow. OpenHouse is organised around the identity of the physical home. The record is created while the developer still controls the authoritative information, then stays attached to every question, photo, issue, answer and resolution after handover.

That changes the economics of the product. The developer is both the buyer and the distribution channel into hundreds of homes. Homeowners get an assistant that becomes more useful as the record grows. Developers get anonymous post-occupancy intelligence they have never had at scale: what people do not understand, what keeps failing and what information or design should change in the next phase.

### How do or will you make money? How much could you make?

Developers will pay a scheme setup fee, a fee for every home provisioned and a recurring fee to keep the assistant, warranty, maintenance and insight layer active after handover.

My first pricing hypothesis is €99 per new home. A developer delivering 1,000 homes a year would therefore be worth €99,000 annually before setup fees or recurring revenue. At one million new homes provisioned each year, that entry product alone would produce €99 million in annual revenue. The larger business is the recurring relationship with the installed base of homes, where warranties, maintenance, energy and future home services all depend on the same trusted record.

The pricing is not commercially validated yet. The first independent scheme will test what developers will pay to reduce aftercare and gain post-occupancy intelligence.

### Other ideas considered

OpenHouse is the only company I considered applying to YC with.

## Equity

### Have you formed ANY legal entity yet?

Select: Yes

### Please list all legal entities you have and in what state or country each was formed.

OpenHouse Ai Limited, an Irish private company limited by shares, formed in Ireland on 4 February 2026. Company number 807744.

[FOUNDER CERTIFICATION: confirm there are no other legal entities that must be disclosed in this field.]

### Please describe the breakdown of the equity ownership in percentages among the founders, employees and any other stockholders.

Sam Donworth, founder and CEO: 100%. Employees and all other stockholders: 0%.

### Have you taken any investment yet?

Select: No

### Are you currently fundraising?

Select: No

## Curious

### What convinced you to apply to Y Combinator? Did someone encourage you to apply? Have you been to any YC events?

I have reached the point where building more in private would be the easy option. I have unusual access to the problem, a substantial product in production and real usage, but I have not yet proved that I can sell it independently or build it into a global company. YC is the place I most want to put those assumptions under pressure.

I want to be surrounded by people who will force me to move faster, speak to customers sooner and pursue the largest version of what OpenHouse can become. I had treated YC as something for other founders until I realised that was a limit I had imposed on myself.

[FOUNDER CERTIFICATION: No one directly encouraged me to apply, and I have not attended a YC event.]

### How did you hear about Y Combinator?

I first heard about YC through the companies it backed, then through founder interviews, podcasts and the Startup School material.

## Batch Preference

Select: Fall 2026

## Remaining founder gates

- Confirm San Francisco as the intended post-batch company base, or replace the location answer.
- Confirm that acceptance means leaving Longview and stopping every other paid commitment.
- Confirm there are no other legal entities YC expects disclosed.
- Confirm the YC encouragement and event sentence.
- Recheck NDRC status.
- Create and test a privacy-safe reviewer account, or rely on the uploaded demo.

## Connected vault notes

- [[briefs/openhouse-yc-fall-2026-first-principles-full-review-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-live-form-candidate-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-voice-redraft-2026-07-30]]
- [[briefs/2026-07-30-openhouse-yc-usage-evidence]]
- [[companies/openhouse-ai]]
