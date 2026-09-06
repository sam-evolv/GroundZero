# Cost-efficient agent model routing

Status: Accepted and applied
Recorded: 2026-09-03T22:06:34+0100 IST
Updated: 2026-09-03T22:14:23+0100 IST
Owner: Sam Donworth
Scope: Hermes orchestration profiles `default`, `forge`, and `vera`

## Decision

Use the strongest subscribed ChatGPT model selectively for project direction and final risk ownership, while routing implementation and independent verification to capable OpenCode Go models.

- Skippy / default profile remains `openai-codex` / `gpt-5.6-sol`.
- Skippy fallbacks: `xai-oauth` / `grok-4.6`, then `opencode-go` / `glm-5.3`.
- Forge defaults to `opencode-go` / `kimi-k2.7-code`.
- Forge fallbacks: `opencode-go` / `glm-5.3`, then `xai-oauth` / `grok-4.6`, then `openai-codex` / `gpt-5.6-sol`.
- Vera defaults to `xai-oauth` / `grok-4.6`.
- Vera fallbacks: `opencode-go` / `glm-5.3`, then `opencode-go` / `kimi-k2.7-code`, then `openai-codex` / `gpt-5.6-sol`.
- `security.allow_data_training_tiers_noninteractive` is explicitly `false` for Forge and Vera.
- Existing compression settings remain `threshold: 0.5` and `protect_last_n: 20`. Existing worker turn limits remain unchanged.
- Configuration applies to new worker sessions only. Healthy in-flight work is not restarted to adopt it.

## Why this is the current cost/quality optimum

1. Sol is reserved for project management: objective definition, architecture and risk decisions, acceptance criteria, task routing, evidence integration, and approval recommendations.
2. Forge uses a coding-specialised model with a much larger practical OpenCode Go request allowance than full GLM-5.3.
3. Vera uses Grok 4.6 through Sam's existing SuperGrok subscription, giving review a different frontier model and provider from Forge.
4. Forge uses the already-authenticated OpenCode Go subscription before consuming ChatGPT subscription capacity.
5. Grok 4.6 is the first cross-provider fallback for Skippy and is available in Forge's resilience chain; Sol remains the final worker resilience and quality fallback.
6. Cheap execution is never treated as self-validating. Exact artifacts, source state, tests, runtime evidence and independent review remain mandatory.

## World-class quality boundary

The model split is an efficiency mechanism, not a relaxation of standards.

- Skippy must inspect named live sources or exact receipts for consequential claims; a worker summary is not verification.
- Security, credentials, release artifacts, authentication, billing, deployment and user-visible runtime claims remain evidence-bound and fail closed.
- Push, merge, deployment, production mutation, spending and client communication remain Sam-approved.
- A weak, incomplete, wandering or contradictory worker result is escalated to Sol or rerun on a stronger model rather than accepted to save usage.
- High-risk releases remain gated by an independent Vera verdict and a Sol-level decision review before a recommendation to Sam.
- Routing performance will be judged on real Donworth tasks: acceptance-criteria coverage, tool-call efficiency, test success, correction rate, context loss, runtime and need for escalation.

## Grok 4.6 decision

Use `xai-oauth` / `grok-4.6` as Vera's primary independent reviewer, Skippy's first fallback, and Forge's cross-provider fallback after full GLM-5.3. All three profiles have live xAI OAuth authentication backed by Sam's existing SuperGrok subscription.

A non-sensitive Hermes edit-and-test canary passed in 7 tool calls. A fresh Vera invocation resolved to Grok 4.6 without an override, and a forced invalid Skippy primary proved automatic fallback to Grok 4.6. This is transport and tool-loop evidence; consequential review quality remains acceptance-criteria and receipt gated.

## Muse Spark 1.3 decision

Do not use `muse-spark-1.3-contributor-free` for Donworth, client, credential, Ground Zero or other confidential workloads. The Contributor tier permits Meta to use prompts and completions for training, and Hermes correctly blocks unattended use unless explicitly acknowledged.

A non-sensitive canary proved the route works, but the model used 23 tool calls and initially wandered outside the supplied workspace for a one-line change. It is therefore not the best default despite being free. It may be reconsidered only for sanitized public/non-confidential work after explicit informed approval.

## GLM-5.3 Flash decision

`opencode-go` / `glm-5.3-flash` completed a text canary but failed the initial edit-and-test canary by searching the wrong locations until its run budget expired. Do not promote it to a worker default on that evidence. The full documented `glm-5.3` route completed the same edit-and-test contract successfully.

## Verification receipts

Non-sensitive Hermes canaries on 2026-09-03:

- Muse Spark 1.3 Contributor Free: transport succeeded; edit/test succeeded after 23 tool calls and one invalid tool call.
- GLM-5.3 Flash: transport succeeded; first edit/test canary failed on workspace discovery and exhausted its run budget.
- GLM-5.3: edit/test passed in 7 tool calls.
- Kimi K2.7 Code: edit/test passed in 7 tool calls.
- Grok 4.6 through xAI OAuth: edit/test passed in 7 tool calls.
- Fresh Forge no-override invocation resolved to `opencode-go` / `kimi-k2.7-code` and returned `FORGE_ROUTE_OK`.
- Fresh Vera no-override invocation resolved to `xai-oauth` / `grok-4.6` and returned `VERA_GROK_OK`.
- Forced missing-model tests proved Forge automatically fell back to `glm-5.3`, the prior Vera configuration fell back to `kimi-k2.7-code`, and Skippy automatically fell back to `xai-oauth` / `grok-4.6`. All completed successfully without unplanned provider changes.

These canaries prove routing, authentication, tool-loop capability and fallback. They do not alone prove world-class performance on long-horizon work. The next live Donworth implementation and verification tasks are the monitored production-quality evaluation.

## Revisit triggers

Review or change the routing if any of the following occurs:

- repeated missed acceptance criteria or fabricated evidence;
- materially higher correction/retry rate than Sol;
- workspace drift or unsafe tool behavior;
- OpenCode Go quota exhaustion, latency or reliability problems;
- loss of reviewer independence;
- a documented non-training Muse tier becomes available and passes representative agent evaluations;
- a stronger or cheaper model demonstrates better measured delivery quality.

## Sources

- OpenCode Go documentation: subscription limits, model list and privacy terms.
- OpenCode Zen documentation: Muse Spark 1.3 Contributor Free pricing and training policy.
- Hermes Agent documentation: profile-scoped models, unattended training-tier acknowledgement, and fallback-provider behavior.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[items/donworth-native-evidence-and-route-evaluation]]

