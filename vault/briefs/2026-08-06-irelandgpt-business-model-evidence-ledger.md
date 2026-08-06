---
title: IrelandGPT business-model evidence ledger
status: active
created: 2026-08-06
source: primary-source research commissioned from founder voice note
company: personal-agent
---

# IrelandGPT business-model evidence ledger

## Evidence status

Primary-source research completed on 6 August 2026. Web search was unavailable, so researchers retrieved official public pages directly. Provider prices remain point-in-time inputs and require revalidation before launch or any public pricing change.

## Model availability and routing inputs

### DeepSeek V4 Flash

Verified public API product:

- API name: `deepseek-v4-flash`
- version: DeepSeek-V4-Flash-0731
- context: 1 million tokens
- maximum output: 384,000 tokens
- modes: thinking and non-thinking
- supports JSON, tools, Responses API, Anthropic-compatible API and FIM completion
- uncached input: $0.14 per million tokens
- cache-hit input: $0.0028 per million tokens
- output: $0.28 per million tokens
- material caveat: DeepSeek says a significant near-term price increase is planned

Source: https://api-docs.deepseek.com/quick_start/pricing

Decision consequence: evaluate it as a cost floor and optional route, but do not make a customer tier dependent on the current promotional-looking price. Use a provider-price kill switch and fallback route.

### GPT-5.6 Luna

Verified public OpenAI API product:

- API name: `gpt-5.6-luna`
- input: text and image
- output: text
- context: 1,050,000 tokens
- maximum output: 128,000 tokens
- supports reasoning, streaming, function calling, structured outputs and Responses API tools
- standard input: $0.20 per million tokens
- cached input: $0.02 per million tokens
- output: $1.20 per million tokens
- Batch prices: $0.10 input, $0.01 cached input and $0.60 output per million tokens

Sources:

- https://developers.openai.com/api/docs/models/gpt-5.6-luna
- https://developers.openai.com/api/docs/pricing

Decision consequence: credible default high-volume route for general assistance, tool use and light image understanding, subject to IrelandGPT workload evaluations.

### Other verified candidates

- Gemini 3.1 Flash-Lite: text, image, video and audio input; $0.25/M text-image-video input, $0.50/M audio input and $1.50/M output. Candidate low-cost multimodal route.
- Gemini 3.5 Flash: $1.50/M input and $9/M output, with grounding and multimodal tools. Candidate for richer grounded work.
- GPT-5.6 Terra: $2/M input, $0.20/M cached input and $12/M output. Candidate stronger reasoning/coding escalation.
- Claude Sonnet 5: model future economics at the 1 September 2026 standard price of $3/M input, $0.30/M cache hit and $15/M output, not its temporary August introductory rate.
- Claude Haiku 4.5: $1/M input, $0.10/M cache hit and $5/M output.

Sources:

- https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite
- https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash
- https://ai.google.dev/gemini-api/docs/pricing
- https://developers.openai.com/api/docs/pricing
- https://platform.claude.com/docs/en/about-claude/models/overview
- https://platform.claude.com/docs/en/about-claude/pricing

### Media cost inputs

- OpenAI Sora 2 standard 720p video with audio: $0.10 per second; Batch: $0.05 per second.
- Sora 2 Pro: $0.30 per second at 720p, $0.50 at 1024p and $0.70 at 1080p; Batch is half.
- xAI Grok Imagine Video: $0.05 per second at 480p and $0.07 at 720p.
- xAI Grok Imagine Image Quality: $0.05 per 1K output and $0.07 per 2K output.
- xAI Voice API starts at $0.05 per minute; TTS $15/M characters; Batch STT $0.10/hour and streaming STT $0.20/hour.

Sources:

- https://developers.openai.com/api/docs/pricing
- https://docs.x.ai/developers/models/grok-imagine-video
- https://docs.x.ai/developers/models/grok-imagine-image-quality
- https://docs.x.ai/developers/models

Decision consequence: ordinary text inference is unlikely to be the binding cost. Tool services, rich media, retries, support and heavy-user tails deserve explicit allowances.

## Irish demand evidence

CSO Q2 2025 household digital-consumer research, published 5 December 2025:

- 42% of Irish internet users aged 16+ used generative AI during the previous three months.
- 65% of 16-to-29-year-olds used it, versus 15% of 60-to-74-year-olds and 6% of people aged 75+.
- Students were at 66%; employees at 46%.
- Among users, 69% reported private use, 50% professional/work use and 28% education use.
- Among non-users, 54% reported no need, 20% did not know how to use it and 19% cited security, privacy or safety concerns.
- Privacy/safety concern was 24% among women and 13% among men.
- 85% of internet users bought online in the prior three months.
- 94% used online or mobile banking.
- 71% used paid video or sports streaming; 56% paid music streaming.

Sources:

- https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/generativeai/
- https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/internetpurchasesandsubscriptions/
- https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/keyfindings/

Decision consequence: there is a substantial aware market and strong digital-payment readiness. The acquisition problem is proving relevance and trust, not teaching Ireland that AI exists. There is no Irish primary evidence yet for AI subscription willingness to pay, preferred login or a viable IrelandGPT price.

## Onboarding evidence and launch funnel

Baymard reports that 19% of US online shoppers have abandoned a purchase because account creation was required and 17% because checkout was too long or complicated. This is directional cross-market evidence, not Irish AI-specific proof.

Source: https://baymard.com/lists/cart-abandonment-rate

RevenueCat's 2026 dataset across more than 115,000 subscription apps and $16 billion revenue reports:

- day-35 download-to-paid conversion of 10.7% for hard-paywall apps versus 2.1% for freemium;
- Western Europe median day-35 conversion of 2.0%;
- 42.5% trial-to-paid for trials lasting 17+ days versus 25.5% for shorter trials.

Source: https://www.revenuecat.com/state-of-subscription-apps/

Limitations: app-store data is not Irish web SaaS evidence, and hard-paywall versus freemium results are observational rather than causal.

Recommended initial experiment:

- Variant A: three useful guest answers, then account and paywall.
- Variant B: three useful guest answers, then account and 14-day no-card trial.
- Variant C: one strong free answer, then account and paywall.

Instrument visitor, first prompt, useful answer, guest limit, account method, paywall, checkout, payment, first renewal and active use in the seven days before renewal. Optimise paid subscribers per qualified visitor and renewal, not signup count alone.

## Payment economics

Stripe Ireland public list pricing on 6 August 2026:

- standard EEA online cards: 1.5% + €0.25
- premium EEA cards: 2.8% + €0.25
- UK cards: 2.5% + €0.25
- international cards: 3.15% + €0.25
- Stripe Billing: 0.7% of Billing volume

Source: https://stripe.com/ie/pricing

For a standard EEA recurring card using Stripe Billing, simplified fee = €0.25 + 2.2% of gross. Confirm actual contracted rates before launch.

At 23% Irish VAT and this simplified standard EEA Stripe cost:

- €9.99 gross: €8.12 excluding VAT; €0.47 Stripe/Billing; €7.65 after VAT and payment; €5.15 after a €2.50 variable-service allowance.
- €14.99 gross: €12.19 excluding VAT; €0.58 Stripe/Billing; €11.61 after VAT and payment.
- €19.99 gross: €16.25 excluding VAT; €0.69 Stripe/Billing; €15.56 after VAT and payment; €8.06 after a €7.50 variable-service allowance.
- €39.99 gross: €32.51 excluding VAT; €1.13 Stripe/Billing; €31.38 after VAT and payment.
- €49.99 gross: €40.64 excluding VAT; €1.35 Stripe/Billing; €39.29 after VAT and payment.

These are not contribution profits. They still exclude refunds, fraud, support, infrastructure, notification, safety, accounting and fixed costs.

Stripe states that web Apple Pay has no additional processing fee and supports recurring payments. Google Pay is also compatible with recurring payments through Stripe.

Sources:

- https://docs.stripe.com/apple-pay
- https://docs.stripe.com/google-pay

Decision consequence: web-first Stripe checkout is the economic baseline. A native paywall requires fresh Apple and Google policy/economics review.

## Family plan and child safety

Research conclusion: reject automatic parent alerts for self-harm, drugs or sensitive prompts as the default family feature.

Key constraints:

- Ireland's GDPR digital-consent age is 16 where Article 8 consent applies.
- Parent purchase does not remove the child's GDPR rights or create blanket parent access to private content.
- Systematic self-harm inference should be treated as potentially special-category health-data processing.
- Model-generated risk labels and alerts create profiling, accuracy, confidentiality and potentially Article 22 concerns.
- This design requires a DPIA and child-rights/safeguarding impact assessment before launch.
- No model-only classifier should notify a parent, categorise a child, report externally, suspend access or make a welfare determination.

Recommended architecture:

- separate private child account;
- parent controls payment, age-appropriate capabilities and external-action permissions;
- no transcript, search-history, mood score or concerning-activity feed;
- child-readable explanation of privacy and exceptional escalation boundaries;
- supportive in-chat safety response;
- no training, advertising or behavioural profiling from child chats;
- only credible imminent-serious-harm cases may enter a narrowly defined, trained-human-reviewed protocol;
- minimum necessary disclosure and no automatic transcript forwarding;
- Irish privacy, safeguarding and clinical counsel before implementation.

Primary sources:

- https://eur-lex.europa.eu/eli/reg/2016/679/oj
- https://www.irishstatutebook.ie/eli/2018/act/7/section/31/enacted/en/html
- https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- https://www.dataprotection.ie/sites/default/files/uploads/2021-12/Fundamentals%20for%20a%20Child-Oriented%20Approach%20to%20Data%20Processing_FINAL_EN.pdf
- https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-impact-assessments
- https://www.tusla.ie/children-first/children-first-guidance-and-legislation/
- https://www.hse.ie/eng/services/list/4/mental-health-services/nosp/

## Model formula

For each routed request:

`LLM cost = new input tokens / 1,000,000 × input price + cached input tokens / 1,000,000 × cache-hit price + output tokens / 1,000,000 × output price + tool and media charges`

Monthly contribution envelope:

`gross price - VAT - payment and billing fees - models - tools - media - storage - bandwidth - support - refunds/fraud reserve - variable safety/operations`

Tier decisions must be made from measured routing logs by usage percentile, with a provider-price-change buffer. Average prompts are not a sufficient planning unit.

## Connected vault notes

- [[briefs/2026-08-06-irelandgpt-onboarding-profile-and-business-model]] — founder direction and hypotheses
- [[items/personal-agent-unit-economics-and-onboarding]] — validation workstream
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]] — product baseline
- [[companies/personal-agent]] — venture context
- [[project_state/personal-agent]] — live state

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-06-irelandgpt-onboarding-profile-and-business-model]]
- [[companies/personal-agent]]
- [[context/index]]
- [[items/personal-agent-unit-economics-and-onboarding]]
- [[project_state/personal-agent]]

