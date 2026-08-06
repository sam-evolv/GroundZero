---
title: IrelandGPT onboarding, profile and business-model direction
status: active-hypotheses
created: 2026-08-06
source: Sam founder voice note via Telegram
company: personal-agent
---

# IrelandGPT onboarding, profile and business-model direction

## Founder direction

Sam wants IrelandGPT to prove value before demanding registration. The commercial model should convert people only after they have experienced useful assistance, then deepen retention through a living, user-owned context profile and frictionless payment.

This is a hypothesis and evidence brief. It does not yet set public prices, model routing, trial length or child-account policy.

## Acquisition and first use

- Do not open with a mandatory signup wall.
- Let a new visitor try a real IrelandGPT conversation immediately, similar to an anonymous ChatGPT trial.
- Give the guest enough real capability to understand the product, while enforcing a bounded abuse and cost allowance.
- Replace an arbitrary daily euro promise with a server-side workload allowance covering model, tool, media and agent execution cost.
- Ask the user to create an account when continuity, memory, a connector, an artifact or additional usage becomes valuable.
- Preserve the guest conversation during conversion only with clear consent and a secure account-binding flow.

## Signup and payment

- Offer Apple, Google and email account creation.
- Target one or two actions from conversion prompt to a working account.
- Keep billing equally short, using Stripe-hosted checkout and supported wallet methods where current regional and recurring-payment contracts allow.
- Do not request profile information, connectors or payment details before the user understands why they are useful.
- Test a limited guest allowance, a time-limited trial and a paid-first conversion path rather than assuming a free month is optimal.

## Living profile and context

The Profile becomes the inspectable living hub for what IrelandGPT knows about the user. It should hold useful personal context such as work, responsibilities, interests, preferences, goals, recurring tasks and important constraints.

The context advantage should be earned through better assistance, not artificial lock-in.

- The user can inspect, correct, forget and export context.
- Each important item has provenance, confidence and last-confirmed time.
- Raw chat, durable context and temporary live state remain distinct.
- IrelandGPT retrieves only the relevant context capsule for a task.
- The product should not frame personal data accumulation itself as the moat. Trust, continuity and consistently better outcomes are the defensible advantage.

## Optional context interview

Offer an optional guided conversation, named in ordinary language rather than “interview”. Candidate framing includes “Help me get to know you” or “Make IrelandGPT more useful”.

- Five to ten high-yield questions.
- Text or dictation.
- Skippable and resumable.
- Explain why each category improves assistance.
- Avoid collecting sensitive information without a specific, understandable use.
- Prefer questions that reveal responsibilities, recurring friction, current priorities, communication style and approval preferences over demographic trivia.

## Pricing hypotheses

Candidate structure discussed by Sam:

- free guest use with a bounded cost allowance;
- accessible plan around €9.99 per month for ordinary text assistance and bounded agent work;
- broader plan around €19.99 per month with near-full everyday functionality, higher usage and selected image/media work;
- a higher-usage premium plan in the €40–€50 range;
- a family subscription with several separate accounts.

These are not approved prices. They must be reverse-engineered from net revenue, workload distributions and support obligations.

## Immediate margin correction

Irish consumer prices normally need to be modelled including VAT. At 23% VAT:

- €9.99 gross is approximately €8.12 before payment fees. A €2.50 variable-service budget leaves approximately €5.62 before Stripe, refunds, support and fixed overhead.
- €19.99 gross is approximately €16.25 before payment fees. A €7.50 variable-service budget leaves approximately €8.75 before those costs.

The desired unit-economics principle remains sound: each incremental paid customer should cover their own incremental model, tool, media, storage, bandwidth, support and payment costs from the beginning. Fixed-cost break-even is a separate calculation.

## Model-routing hypothesis

Primary-source research confirmed that both “DeepSeek V4 Flash” and “GPT-5.6 Luna” are current public API products.

- `deepseek-v4-flash`: $0.14/M uncached input, $0.0028/M cache-hit input and $0.28/M output. DeepSeek warns of a significant near-term price increase, so this route requires a pricing kill switch and must not anchor customer-tier economics.
- `gpt-5.6-luna`: text and image input, text output, tools and reasoning at $0.20/M input, $0.02/M cached input and $1.20/M output. This is a credible default high-volume route subject to IrelandGPT workload evaluation.

Full point-in-time sources and alternative routing candidates are recorded in [[briefs/2026-08-06-irelandgpt-business-model-evidence-ledger]].

The cost model should be provider-agnostic and workload based:

- lightweight classification and extraction;
- ordinary text assistance;
- complex reasoning;
- coding;
- vision and document understanding;
- image generation;
- video generation;
- web, browser and other tool execution;
- memory retrieval and storage;
- retries, evaluation and safety overhead.

Route automatically by quality, consequence, latency, privacy and cost. Do not promise a named underlying model as the consumer value proposition.

## Family-plan hypothesis and safety boundary

A family plan may create genuine household value through shared billing, separate accounts and age-appropriate experiences. It must not become covert parent surveillance.

The proposed automatic parent alert for self-harm, drugs or other sensitive prompts is not approved. It carries material risks:

- children may avoid asking for help if private questions are silently disclosed;
- self-harm and substance-use inferences can involve highly sensitive data and serious false positives;
- parent access, child transparency, profiling, age assurance and consent require Irish/EU legal and safeguarding review;
- an alert can create harm in unsafe households;
- “Big Brother lite” is still surveillance if the child does not understand and control the boundary.

A safer starting architecture is:

- shared family billing with separate private accounts and memories;
- transparent age-appropriate safety rules;
- no parent transcript access by default;
- clear crisis-support responses and immediate-help options;
- only narrowly defined escalation after specialist legal, safeguarding and clinical design, with explicit disclosure and an imminent-safety threshold where appropriate;
- an adult-independent privacy and support path for teenagers.

## Required study

The unit-economics model must include:

- gross price, VAT and payment fees;
- workload distribution by user cohort and percentile, not only the average;
- input, cached-input and output tokens by routed model;
- tool, search, browser, image, video, voice and code execution;
- storage, database, bandwidth, logging and observability;
- authentication, email, notifications and customer support;
- refunds, fraud, failed payments and guest abuse;
- safety and moderation overhead;
- fixed engineering, legal, accounting and operational costs;
- contribution margin and break-even customer count;
- hard and soft usage limits at each tier;
- quality degradation risk when routing to cheaper models.

Model at least median, heavy, power and adversarial usage. A plan is viable only if heavy legitimate users do not destroy the cohort margin or force an unusably low cap.

## Initial external evidence

- CSO found 42% of Irish internet users aged 16+ used generative AI in the previous three months. Among users, 69% reported private use, 50% work use and 28% education use.
- Among non-users, 54% saw no need, 20% did not know how to use it and 19% cited privacy or safety. This validates a value-first, trust-explicit onboarding strategy.
- Ireland has strong digital-payment readiness: 85% bought online, 94% used online/mobile banking, 71% paid for video/sport streaming and 56% paid for music streaming.
- There is still no Irish primary evidence establishing willingness to pay for an AI subscription or validating a €9.99 or €19.99 price.
- Stripe Ireland lists standard EEA cards at 1.5% + €0.25 and Stripe Billing at 0.7% of volume. At 23% VAT, a €9.99 standard-EEA subscription leaves approximately €7.65 after VAT and these simplified payment fees, before service costs.

## Product sequence

1. Complete Hermes Desktop capability parity.
2. Instrument real founder workloads and cost per completed outcome.
3. Build bounded guest use and frictionless account conversion.
4. Build the inspectable living profile and optional context conversation.
5. Test pricing and allowances using measured workload distributions.
6. Add family billing only after privacy, safeguarding and tenancy architecture is independently reviewed.

## Connected vault notes

- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]] — functional baseline
- [[items/personal-agent-unit-economics-and-onboarding]] — evidence and modelling work
- [[briefs/2026-08-06-irelandgpt-business-model-evidence-ledger]] — primary-source findings and current cost inputs
- [[items/personal-agent-hermes-desktop-parity]] — active parity build
- [[companies/personal-agent]] — venture context
- [[project_state/personal-agent]] — live build state
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]] — founder thesis
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]] — build sequence

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-06-irelandgpt-business-model-evidence-ledger]]
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]]
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]]
- [[companies/personal-agent]]
- [[context/index]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[items/personal-agent-unit-economics-and-onboarding]]
- [[project_state/personal-agent]]

