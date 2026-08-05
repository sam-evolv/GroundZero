---
title: Managed agent product thesis, consumer-first wedge and licensing boundary
status: exploratory
created: 2026-08-05
source: Sam discussion
---

# Managed agent product thesis, consumer-first wedge and licensing boundary

## Thesis
A non-technical wrapper around an agent such as Hermes could be valuable if it sells outcomes rather than model access: a simple, approval-first assistant that can use a browser, files and connected services. The product is not a generic chatbot or a thin “Hermes wrapper”; its differentiated value must be onboarding, trusted workflows, permissions, context, safety, support and measurable user outcomes.

## Founder direction
Sam’s preferred initial market is normal people, before expanding to businesses. This is reasonable as a UX and trust-learning wedge, but should begin with a tightly managed cohort rather than a broad consumer launch. The best early users are likely prosumers: founders, freelancers and busy professionals who have real recurring admin but will tolerate an early product and can articulate value.

The product should let a person make ordinary requests such as reviewing what is in their browser, preparing a follow-up, organising documents or handling a bounded personal-admin task. High-consequence actions remain approval-first.

## Legal and technical facts verified on 5 August 2026
- Hermes Agent’s local upstream repository is `NousResearch/hermes-agent`, currently synced to commit `6564f319a647b47de391cab2f608660323804a2b`.
- Its repository `LICENSE` is MIT. The text permits use, modification, publication, distribution, sublicensing and sale, provided the copyright and permission notice are included in copies or substantial portions.
- MIT licensing does not itself grant rights to use the Hermes or Nous Research trademarks, logos or endorsement. A customer-facing product should use its own brand and preserve required open-source notices; obtain legal advice before public launch and check all bundled dependency licences separately.
- The appropriate upstream strategy is a pinned fork or adapter layer: track upstream releases, test each update in staging, then merge/cherry-pick deliberately. Do not auto-deploy every upstream update into customer environments.
- Current Hermes Desktop includes a browser/preview reader; it lets the agent read rendered visible content in the active preview. It is an enabling capability, not a product moat.

## Product architecture hypothesis
1. Maintain a version-pinned Hermes core with minimal modification.
2. Build a separate backend/control plane for accounts, subscriptions, workflow packs, permissions, audit logs and model routing.
3. Build Sam’s own simple web/desktop interface, with no model/provider configuration exposed to normal users.
4. Use explicit per-connector consent, least-privilege scopes, confirmation gates, activity/audit history, export/delete controls and clear recovery paths.
5. Treat security and privacy as product architecture from day one. Consumer data protection is not a lower bar than business data protection; the practical difference is enterprise procurement rather than the underlying duty of care.

## Compute and financial model hypothesis
Do not pool or resell customers’ unused ChatGPT or Claude consumer subscriptions. Those plans are not a transferable compute bank and at least Anthropic’s current consumer terms expressly prohibit using its service to develop a competing product or resell the service. Use commercial API contracts and treat consumer subscriptions as unrelated.

The legitimate equivalent is a pooled managed-service model: buy API capacity centrally, route tasks intelligently and price a plan around expected cohort usage rather than exposing tokens. On 5 August 2026, DeepSeek’s official V4 Flash page listed $0.14 per 1M cache-miss input tokens, $0.0028 per 1M cache-hit input tokens and $0.28 per 1M output tokens; it also warned that a future peak/off-peak price policy may change rates. Illustrative monthly text-only workloads at those rates were about $0.10 light, $0.43 active and $1.29 heavy. These are not total cost of service: browser execution, file/video rendering, storage, messaging, support, safety controls and payments remain material.

Recommended commercial shape:
- Subscription pays for a persistent assistant, paired-device relay, memory, basic compute and a sensible-use allowance.
- Product language measures useful work, such as completed tasks or premium work packs, rather than raw tokens.
- Expensive artifact generation, long-running work and high-cost model calls use a clear visible allowance or purchasable work pack before execution.
- Route routine classification, drafting and background work to inexpensive models; reserve premium models for tasks where quality demonstrably matters.
- Keep retrieval, file indexing and eligible execution on the paired device where possible. This improves privacy and lowers cloud cost.
- Use provider redundancy and version-pinned routing. DeepSeek economics are an advantage, not a dependency.

## Signature “holy shit” moments
The core validation target is not a generic feature checklist. It is a set of memorable, word-of-mouth moments where a person discovers that their digital assistant can bridge their physical computer, current context and mobile life.

- **Your computer on the move:** while away from their desk, a person texts their assistant for a document on their paired computer. The assistant finds the authorised file, resolves ambiguity only if needed, and delivers it back into the same conversation.
- **One request to finished asset:** a person asks for a video, presentation, research pack or other deliverable. The assistant navigates the relevant product or web context, produces the work, and returns the completed artifact through the channel where the request started.
- **Look at this and take the next step:** a person gives the assistant a live browser page, email, document or spreadsheet. It understands the specific situation, prepares the useful next action and visibly holds consequential actions for approval.

The OpenHouse YC video creation and Telegram delivery is a founder-observed proof of the second moment: the value is not an impressive tool call but a real finished artifact arriving where the user already is.

Achieving the first moment requires a deliberately designed paired-device relay, explicit folder authorisation, searchable local context, encrypted transport, visible activity history and offline/permission failure handling. These are product requirements, not a reason to dilute the promise.

## Relationship to Cara
This may be the broader product truth inside Cara rather than an unrelated new idea: a person should be able to speak, text, browse and receive completed work from one persistent digital assistant. Cara’s earlier Irish-SME phone-number wedge remains distinct, and Cara is currently deprioritised; this does not reactivate that build. The managed-agent opportunity should be evaluated as a broader, consumer/prosumer-first reframe that could later use voice and messaging as natural surfaces.

## Product experience hypothesis
The core packaging insight is to avoid selling “agents”, model providers or autonomous workflows. The user should feel they have a calm, capable digital operator that can see the work in front of them, propose the next move, do bounded tasks and always show what happened.

A compelling experience is likely not a chat box alone. It should combine a simple ask box with a visible operating surface: what the assistant is working on, the evidence it used, actions awaiting approval, completed work, and a small number of obvious modes such as “help me think”, “prepare this”, “do this with approval” and “keep an eye on this”. Agentic capability is then experienced as reliable momentum rather than marketed as technical autonomy.

## Validation before building a platform
- Recruit 20–50 invited prosumer users.
- Deliver three narrow, repeatable, approval-first workflows.
- Measure retained weekly use, time saved, completed outcomes, trust failures and support burden.
- Do not claim autonomy; prove supervised value first.
- Only build business-specific controls when repeated prosumer demand and usage establish the right workflow.

## Connected vault notes
- [[context/solo-founder-era]] — generic chatbot avoidance and vertical-agent thesis
- [[context/agentic-value-creation-mission]] — approval boundaries and capability-adoption gate
- [[context/business-opportunities-moc]] — opportunity map
- [[companies/cara]] — earlier voice-first digital-assistant wedge and possible future surface
- [[project_state/cara]] — current deprioritised state; no implicit reactivation
- [[companies/openbook]] — relevant SME workflow experience
