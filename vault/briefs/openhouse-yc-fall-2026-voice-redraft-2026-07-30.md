---
title: OpenHouse YC Fall 2026 voice redraft
company_id: openhouse-ai
date: 2026-07-30
status: review-candidate-not-canonical
source: authenticated YC Fall 2026 form, production Supabase audit and current product code
---

# OpenHouse YC Fall 2026 voice redraft

This is a fresh rewrite for Sam's review. It is not the canonical submission candidate and must not be copied into YC until Sam approves the voice and factual gates.

## Writing decisions

- Explain the actual homeowner experience, not an abstract platform.
- Make the anonymous developer intelligence loop visible.
- Use the new conservative production metric once, in the usage answer.
- Keep Longview context mainly in progress and founder-market fit.
- Do not repeat the same proof or caveat in every answer.
- Use plain language and natural variation in sentence length.

## Founders

### Who writes code, or does other technical work on your product? Was any of it done by a non-founder? Please explain.

> I do. I built OpenHouse end to end and still write all of the production code. I use Claude Code and Hermes Agent heavily, but I decide how the product works, review every change, test it and deploy it. No non-founder has written product code.

### Are you looking for a cofounder?

Select: **No**

If a text field appears:

> No. I am building OpenHouse as a solo founder.

## Founder Video

### One-minute founder video script

> Hi, I'm Sam Donworth, founder of OpenHouse. I help run Longview Estates, where we've delivered more than 200 homes. I built OpenHouse after seeing what happened once buyers got their keys. They had a folder of documents but no simple way to ask about their own heating, warranties, finishes or maintenance, so the same questions came back to us for years. OpenHouse gives each home an assistant that knows its exact record. Homeowners can ask a question or send a photo of a problem. Routine questions are answered immediately, while the developer sees the patterns across all of its homes. The product is live across four developments. I built it myself, and I'm applying to YC to turn that internal deployment into a company.

## Company

### Company name

OpenHouse

### Describe what your company does in 50 characters or less.

> AI handover and aftercare for homebuilders

### Company URL

`https://www.openhouseai.ie`

### Demo

Upload the final narrated product demo directly to YC. It should show one homeowner question, one photo-led issue and the anonymous developer insight created by those interactions. Do not turn it into a dashboard tour.

### Product link

`https://portal.openhouseai.ie`

Only provide this with a synthetic reviewer account that has no access to real purchaser data. Otherwise rely on the uploaded demo.

### What is your company going to make? Please describe your product and what it does or will do.

> OpenHouse gives every new home a living digital record at handover. A homeowner can ask plain-English questions about their exact home: how the heating works, what warranty covers an appliance, room dimensions, finishes, manuals, energy use, broadband, bins or nearby services. They can also send a photo of a crack or leak and turn it into a properly documented aftercare issue.
>
> Most routine questions are answered from developer-approved information without staff involvement. Behind the scenes, OpenHouse groups the questions into an anonymous development-level view. The developer can see what people are confused by, which issues keep appearing and where its handover information is weak. The same loop reduces aftercare now and gives the builder feedback to improve the next homes it delivers.

### Where do you live now, and where would the company be based after YC?

If the real post-batch decision is San Francisco:

`Cork, Ireland / San Francisco, United States`

If the company remains based in Cork after the batch:

`Cork, Ireland / Cork, Ireland`

### Explain your decision regarding location.

San Francisco version:

> I live in Cork, where I learned the problem and built the first deployment. If accepted, I will move to San Francisco and work exclusively on OpenHouse. Ireland is a strong place to prove the product with developers I understand; the US is the much larger market I want to build the company in.

Cork version:

> I live in Cork, where I learned the problem and built the first deployment. I will move to San Francisco for the batch and work exclusively on OpenHouse, but initially keep the company based in Cork while I prove the first external deployments and build a US sales route.

## Progress

### How far along are you?

> OpenHouse is in production across four Longview developments. Homeowners can access the record for their exact home, ask the assistant questions, upload photos, save useful answers and create aftercare issues. On the other side, the developer can see the most common topics and unanswered questions, then improve its documents or answer once for every home. I am now preparing the first paid external rollout.

### How long have you been working on this? How much has been full-time?

> I started serious product development in October 2025 and have built OpenHouse during evenings and weekends alongside my full-time role at Longview Estates. I have not worked on it full-time yet. If accepted, I will leave my job and stop all other paid work to work exclusively on OpenHouse.

### What tech stack are you using? Include AI models and AI coding tools.

> TypeScript, Next.js, React, Supabase/Postgres and Vercel. The assistant uses OpenAI GPT-4o and GPT-4.1 models for document extraction, classification, property-specific answers and image-led issue handling. I use Claude Code and Hermes Agent to build, test and review the product.

### Are people using your product?

Select: **Yes**

If the form requests detail:

> Yes. Across those four developments, the assistant has answered 259 property-specific questions from 79 homes. Of those, 245 were written rather than selected from suggested prompts. People ask about solar panels, first-year maintenance, broadband, utilities, warranties, room dimensions, finishes, energy costs, schools and when they need to contact the developer.

### Do you have revenue?

Select: **No**

If the form requests detail:

> OpenHouse has €0 revenue. Longview is where I work and is not a paying customer. The first external developer will be the first commercial proof.

### Previous YC application

> This is my first YC application.

### Incubator or accelerator participation

> No.

Recheck this immediately before submission if the NDRC position changes.

## Idea

### Why did you pick this idea? Do you have domain expertise? How do you know people need it?

> I picked this because I deal with it every day. I have spent the last two years helping deliver and hand over homes at Longview Estates. We would spend months assembling specifications, drawings, warranties and contacts, then give the buyer a folder of documents and lose the thread. Homeowners called or emailed with questions whose answers already existed somewhere, while the developer learned almost nothing from what people struggled with after moving in.
>
> I built OpenHouse inside that workflow. The questions now coming through the product show the need more clearly than interviews could: people want help with their exact home, and the developer needs a way to answer once, spot patterns and improve what it builds next.

### Who are your competitors? What do you understand that they don't?

> Foundation and Spaciable are the closest competitors. Clixifix and Verisk are stronger on defects and warranty, while many developers still use PDFs, email and spreadsheets.
>
> Most products treat the homeowner portal as a place to distribute information or close tickets. I see it as a feedback system. Every anonymous question is a small piece of post-occupancy data: which systems confuse people, what information was missing and which problems keep recurring. OpenHouse uses the developer's record to answer the homeowner, then returns the aggregate learning to the developer. That can reduce today's aftercare while improving the next phase of homes.

### How will you make money? How much could you make?

> Developers will pay a scheme setup fee and a fee for every home provisioned. My first pricing hypothesis is €99 per home, so a developer delivering 500 homes a year would be worth €49,500 before setup fees. I expect the assistant, warranty, maintenance and insight layer to become a recurring annual contract after handover.
>
> The €99 provisioning fee gets OpenHouse into each home. The recurring business comes from keeping the assistant, warranty, maintenance and insight layer running after handover. If 1,000 large developers eventually paid an average of €100,000 a year, OpenHouse would reach €100 million in annual revenue. I have not validated that pricing yet; the first external rollout will test it.

### Other ideas considered

> OpenHouse is the only company I considered applying to YC with.

## Equity

### Have you formed a legal entity?

Select: **Yes**

> OpenHouse Ai Limited is an Irish private limited company incorporated on 4 February 2026. Sam Donworth owns 100%.

Use the exact registered legal spelling in this answer.

### Have you taken investment?

Select: **No**

If detail is requested and Sam certifies the figure:

> No outside investment, grants, loans, SAFEs or family money. I have personally funded approximately €10,000 of company costs.

### Are you currently fundraising?

Select: **No**

If detail is requested:

> I am applying to YC and NDRC but am not raising from anyone else.

## Curious

### What convinced you to apply to YC?

> OpenHouse is no longer an idea I work on in private. It is being used in real homes, and I now need to find out quickly whether I can sell it beyond the developer where I work. YC is the best place to put that question under pressure, learn how to sell into the US and turn a strong internal product into a real company. I had treated YC as something for other founders until I realised that was a limit I had imposed on myself.

Add the following only if true:

> No one directly encouraged me to apply and I have not attended a YC event.

### How did you hear about YC?

> I first heard about YC through the companies and founders it backed, then through founder podcasts, books and interviews.

## Batch preference

Select: **Fall 2026**

## Remaining founder decisions

- Choose the post-batch base.
- Confirm that acceptance means stopping all other paid work.
- Decide whether to create a synthetic YC reviewer account.
- Recheck NDRC status.
- Certify the legal, funding and equity statements.
- Confirm the YC encouragement and event sentence.

## Evidence

- [[briefs/2026-07-30-openhouse-yc-usage-evidence]]
- [[briefs/openhouse-yc-fall-2026-live-form-candidate-2026-07-30]]
- [[companies/openhouse-ai]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-30-openhouse-yc-usage-evidence]]
- [[briefs/openhouse-yc-fall-2026-first-principles-full-review-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-high-conviction-redraft-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-live-form-candidate-2026-07-30]]
- [[companies/openhouse-ai]]

