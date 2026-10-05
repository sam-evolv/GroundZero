---
title: Hermes routing drift correction and the OpenCode Go daily driver
date: "2026-09-16"
status: accepted
kind: decision
company_id: donworth-ai-services
role: decision
corrects: decisions/2026-09-03-cost-efficient-agent-model-routing
approval: Sam approved 16 September 2026 ("Yes approved")
---

# Hermes routing drift correction and the OpenCode Go daily driver

## Latest explicit correction — 16 September 2026

Sam: "do not run skippy on astra run it on deepseek v4.1 flash for now as i dont have the chatgpt usage".

This overrides the 10:45 Astra amendment below. Skippy's saved default has been restored to `deepseek-v4.1-flash` / `opencode-go`, with read-back verification. ChatGPT was removed from Skippy's primary fallback chain: `xai-oauth/grok-4.6` then `opencode-go/glm-5.3`. Existing workers and other profiles were not changed. This receipt proves saved configuration, not an in-flight conversation model switch; `/model` is the supported session switch. Separately pinned auxiliary and scheduled ChatGPT routes were not migrated by this bounded correction.

The prior inference that prioritising effectiveness authorised switching Sam to Astra was wrong. Improve execution within the explicitly selected subscription/model; do not change it on the strength of a generic quality preference.

## Reconciliation receipt — 5 October 2026, 12:17 IST

- `hermes config path` resolves `/Users/samdonworth/.hermes/config.yaml`. Direct parsed readback shows `model.default: gpt-6.1-sol`, `model.provider: openai-codex`, `agent.reasoning_effort: xhigh` and `fallback_providers` ordered as `xai-oauth/grok-4.6` then `opencode-go/glm-5.3`.
- The file mtime is 29 September 2026 at 21:48:42 IST. That does not establish the actor or original change time, but it means the 5 October 00:18 and 08:15 statements below that no fallbacks were configured are not supported by the current authoritative file. Preserve those receipts as contradictory observations rather than silently rewriting them; the current file is operational truth and the latest explicit Sam correction above remains durable authority.
- Gateway health is `200`. No routing correction, model switch, restart, credential mutation or fallback edit was performed.

## Reconciliation receipt — 5 October 2026, 00:18 IST

- Live saved configuration still does not match the accepted correction: it reads `gpt-6.1-sol` / `openai-codex`, no fallback models/providers, with saved `agent.reasoning_effort: xhigh`. This supersedes only the 4 October 20:17 observation that xAI/GLM fallbacks were configured; it does not establish who changed them or when.
- No later explicit Sam approval, change actor or exact change time was established. Treat the saved primary route as verified operational drift, not a replacement durable decision: the latest explicit correction above remains authoritative until Sam confirms otherwise. Gateway health is `200`; no routing correction, model switch, restart or credential mutation was performed.

## Reconciliation receipt — 4 October 2026, 20:17 IST

- Live saved configuration still does not match the accepted correction: it reads `gpt-6.1-sol` / `openai-codex`, with fallbacks `xai-oauth/grok-4.6` then `opencode-go/glm-5.3` and saved `agent.reasoning_effort: xhigh`.
- No later explicit Sam approval, change actor or exact change time was established. Treat the saved value as verified operational drift, not a replacement durable decision: the latest explicit correction above remains authoritative until Sam confirms otherwise. Gateway health is `200`; no routing correction, model switch, restart or credential mutation was performed.

## Reconciliation receipt — 4 October 2026, 12:14 IST

- Live saved configuration still does not match the accepted correction: it reads `gpt-6.1-sol` / `openai-codex`, no fallback models/providers, with saved `agent.reasoning_effort: xhigh`. This supersedes only the 00:15 observation that xAI/GLM fallbacks remained configured; it does not establish who changed them or when.
- No later explicit Sam approval, change actor or exact change time was established. Treat the saved value as verified operational drift, not a replacement durable decision: the latest explicit correction above remains authoritative until Sam confirms otherwise. Gateway health is `200`; no routing correction, model switch, restart or credential mutation was performed.

## Reconciliation receipt — 4 October 2026, 00:15 IST

- Live saved configuration still does not match the accepted correction: it reads `gpt-6.1-sol` / `openai-codex`, no model-level base URL, with fallbacks `xai-oauth/grok-4.6` then `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh`, and `gateway.multiplex_profiles` remains absent.
- No later explicit Sam approval, change actor or exact change time was established. Treat the saved value as verified operational drift, not a replacement durable decision: the latest explicit correction above remains authoritative until Sam confirms otherwise. Gateway health is `200`; no routing correction, model switch, restart or credential mutation was performed.

## Reconciliation receipt — 3 October 2026, 04:22 IST

- Live saved configuration still does not match the accepted correction: it reads `gpt-6.1-sol` / `openai-codex`, no model-level base URL, with fallbacks `xai-oauth/grok-4.6` then `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh`, and `gateway.multiplex_profiles` remains absent. The current cron session is separately pinned to `gpt-5.6-sol` / `openai-codex`.
- No later explicit Sam approval, change actor or exact change time was established. Treat the saved value as verified operational drift, not a replacement durable decision: the latest explicit correction above remains authoritative until Sam confirms otherwise. The default gateway is launchd-supervised but standalone/default-only and reports duplicate Telegram/Photon credential ownership across named profiles. No routing correction, model switch, restart or credential mutation was performed.

## Reconciliation receipt — 1 October 2026, 00:18 IST

- Live saved configuration no longer matches the accepted correction: it now reads `gpt-6.1-sol` / `openai-codex`, no model-level base URL, with fallbacks still `xai-oauth/grok-4.6` then `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh`, and `gateway.multiplex_profiles` remains absent. The current cron session is separately pinned to `gpt-5.6-sol` / `openai-codex`.
- No later explicit Sam approval, change actor or exact change time was established. Treat the saved value as verified operational drift, not a replacement durable decision: the latest explicit correction above remains authoritative until Sam confirms otherwise. No routing correction, model switch, restart or other configuration mutation was performed by this reconciliation.

## Reconciliation receipt — 23 September 2026, 08:08 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and the CLI still warns that the key is unrecognized.
- Installed Hermes remains verified v0.21.4 `6c4536ae…` / tree `27c18250…`, with clean tracked source, untracked `.review-worktrees/` and nine stashes. Unsigned immutable `main` advanced to `5f47c35d…` / tree `26adcd51…`, 54 commits / 204 changed files newer and 13 commits / 36 files beyond `9fe737ae…`. The new uninstalled tail expands recommended catalogue-plugin onboarding and repairs MCP-tool preservation, near-concurrent plugin install records, stored-reply first-build custody, tool-search guidance and connector waiting-state truthfulness. Nothing in the tail was installed or accepted into Aire.
- The config file still has no `gateway.multiplex_profiles` key while the CLI resolves default `true`. The stale launchd gateway remains default-only; only default, Forge and Leo run, duplicate Telegram/Photon warnings remain, Hermes `/health` returned `200`, and Aire `8766` remained absent. No test/build rerun, install, restart, routing correction, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation occurred.

## Reconciliation receipt — 23 September 2026, 04:03 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and the CLI still warns that the key is unrecognized.
- Installed Hermes remains verified v0.21.4 `6c4536ae…` / tree `27c18250…`, with clean tracked source, untracked `.review-worktrees/` and nine stashes. Unsigned immutable `main` advanced to `9fe737ae…` / tree `12db9a73…`, 41 commits / 184 changed files newer and 13 commits / 83 files beyond `28aceb34…`. The new tail adds plugin/skill catalogue approval flows and live activation, Desktop saved-/multi-gateway corrections and a temporary named-profile standalone gateway shim. Nothing in the tail was installed or accepted into Aire.
- The config file still has no `gateway.multiplex_profiles` key while the CLI resolves default `true`. The stale launchd gateway remains default-only; only default, Forge and Leo run, duplicate Telegram/Photon warnings remain, Hermes `/health` returned `200`, and Aire `8766` remained absent. No test/build rerun, install, restart, routing correction, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation occurred.

## Reconciliation receipt — 23 September 2026, 00:16 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and the CLI still warns that the key is unrecognized.
- Installed Hermes remains verified v0.21.4 `6c4536ae…` / tree `27c18250…`, with clean tracked source, untracked `.review-worktrees/` and nine stashes. Immutable `main` advanced to `28aceb34…` / tree `8512d6d9…`, 28 commits / 109 changed files newer. Nothing in the tail was installed or accepted into Aire.
- The config file still has no `gateway.multiplex_profiles` key, while the v0.21.4 CLI resolves the default as `true`. The stale launchd gateway nevertheless remains default-only; only default, Forge and Leo run, with duplicate Telegram/Photon ownership warnings still open. Hermes `/health` returned `200`, Aire `8766` remained absent, and no restart, routing correction, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation occurred.

## Reconciliation receipt — 22 September 2026, 20:21 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes advanced to verified v0.21.4 commit `6c4536aed298112e976cf7c484ee63e99150e09d` / tree `27c18250c6b1caa6187a913683206e5b18f9bdb4`, with clean tracked source, untracked `.review-worktrees/` and nine stashes. Immutable `main` is `71a2fe399bbd7a219c71f9d9fca2b313b01f2057` / tree `3887b8ecd534e7e6ee129986a2d06a2b1dbbd651`, eight commits / 18 paths newer. The CLI says “Up to date” against local tracking; actor/approval, independent acceptance and Aire integration remain open.
- The default gateway service definition remains stale and default-only. Default, Forge and Leo are running; Seamus, `aire-preview`, `desk-head` and the other listed profiles are not, while duplicate Telegram/Photon credential-ownership warnings remain. Hermes `/health` returned `200` and Aire `8766` remained absent. No routing correction, service migration, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation was performed by this reconciliation.

## Reconciliation receipt — 22 September 2026, 16:20 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, untracked `.review-worktrees/` and eight stashes. Direct GitHub readback and a refreshed isolated bare clone place immutable `main` at `95f20517c25ee418da5337f4ead347008baaa2b3` / tree `e677a1aefbc6abfab8e7062c102e5130fad13352`, 1,483 commits / 2,412 paths beyond installed and 42 commits / 214 paths beyond `92dd3321…`. Local tracking remains stale at `e6bb65aa…`; `hermes --version` names that ref and reports 1,479 commits behind, understating immutable Git by four. Nothing in the range was installed or integrated into Aire.
- The default gateway service definition remains stale and default-only. Forge, Leo and Seamus gateways are running; `aire-preview` and `desk-head` retain launchd definitions but are not running. Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 22 September 2026, 12:03 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, untracked `.review-worktrees/` and eight stashes. A fresh isolated bare clone of the exact GitHub remote places immutable `main` at `92dd3321929a915479ade608591d40de93965c7b` / tree `be61e6695565cce7fbaa756f98f8e4f60d14e354`, 1,441 commits / 2,260 paths beyond installed and 218 commits / 265 paths beyond `405975a7…`. Local tracking remains stale at `e6bb65aa…`; `hermes --version` still names that ref and reports 931 commits behind, understating immutable Git by 510. Nothing in the range was installed or integrated into Aire.
- The default gateway service definition remains stale and default-only. Forge, Leo and Seamus gateways are running; `aire-preview` and `desk-head` retain launchd definitions but are not running. Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 22 September 2026, 08:15 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, untracked `.review-worktrees/` and eight stashes. Immutable GitHub `main` is now `405975a7c09eadd14ba447d796c0c0fc5a551b7a` / tree `e25e9ff55b80987716d02310abd3401d518e3f97`, 1,223 commits / 2,113 paths beyond installed and 65 commits / 150 paths beyond `439eb039…`. Local tracking remains stale at `e6bb65aa…`; `hermes --version` still names that ref and reports 931 commits behind, understating immutable Git by 292. Nothing in the range was installed or integrated into Aire.
- The default gateway service definition remains stale and default-only. Forge, Leo and Seamus gateways are running; `aire-preview` and `desk-head` retain launchd definitions but are not running. Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 22 September 2026, 04:21 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, untracked `.review-worktrees/` and eight stashes. Immutable GitHub `main` is now `439eb0395eed5025139ee917526f31e2d161699e` / tree `410221055503d67eabb24e7fe8588527474e1062`, 1,158 commits / 2,017 paths beyond installed and 23 commits / 60 paths beyond `743ee725…`. Local tracking remains stale at `e6bb65aa…`; `hermes --version` still names that ref and reports 931 commits behind, understating immutable Git by 227. Nothing in the range was installed or integrated into Aire.
- The default gateway service definition remains stale and default-only. Forge, Leo and Seamus gateways are running; `aire-preview` and `desk-head` retain launchd definitions but are not running. Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 22 September 2026, 00:03 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, untracked `.review-worktrees/` and eight stashes. Immutable GitHub `main` is now `743ee72596e7a9f23bc7cd5c570a6ebd958043e4` / tree `8eddcf2b31f1375f8945c598c3db57ae47ba8a20`, 1,135 commits / 1,986 paths beyond installed and 54 commits / 85 paths beyond `e7c5141f…`. Local tracking remains stale at `e6bb65aa…`; `hermes --version` still names that ref and reports 931 commits behind, understating immutable Git by 204. Nothing in the range was installed or integrated into Aire.
- The default gateway service definition remains stale and default-only. Forge, Leo and Seamus gateways are running; `aire-preview` and `desk-head` retain launchd definitions but are not running. Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 21 September 2026, 21:17 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, untracked `.review-worktrees/` and eight stashes. Immutable GitHub `main` is now `e7c5141f1c5b14e83bdafa3732a6c7fce7fc2465` / tree `7f81f9eef7418ff7f139e905a64eb0ae106c6df2`, 1,081 commits / 1,947 paths beyond installed and 150 commits / 287 paths beyond `bc655bfb…`. Local tracking remains stale at `e6bb65aa…`; `hermes --version` still names that ref and reports 931 commits behind, understating immutable Git by 150. Nothing in the range was installed or integrated into Aire.
- Gateway status still reports a stale default launchd definition and default-only serving with separate profile gateways; Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered Aire journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 21 September 2026, 16:02 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and `gateway.multiplex_profiles` remains unset.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, untracked `.review-worktrees/` and eight stashes. Immutable GitHub `main` is now `bc655bfb40ff7414bbec9dd179b17cf41e2f60ba` / tree `8196c19ca3510d2bd1297c41c72059742379780d`, 931 commits / 1,796 paths beyond installed and 89 commits / 526 paths beyond `dec236b2…`. Local tracking remains stale at `e6bb65aa…`; `hermes --version` still names that ref but now reports the exact 931-commit immutable gap, correcting the prior four-commit undercount. Nothing in the range was installed or integrated into Aire.
- Gateway status still reports a stale default launchd definition and default-only serving with separate profile gateways; Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 21 September 2026, 04:08 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`, and the CLI still warns that this key is unrecognized and may not be read.
- Installed Hermes remains v0.21.3 at `f458cba71479f69ef4f0bce240ca5136116942d9`, with no modified tracked files, only untracked `.review-worktrees/`, and eight stashes. Immutable GitHub `main` advanced to `1a1f4a59e252e1dc0137e7b2e7bcc8b0381d19c4` / tree `288be0a2cfac1405eb76ed0910ee69b8006a37ca`, 780 commits / 1,311 paths beyond installed and 141 commits / 222 paths beyond `2388cab5…`. Local tracking and `hermes --version` remain on stale `e6bb65aa…`; the CLI reports four commits behind while immutable Git reports 780.
- Direct config readback now shows `gateway.multiplex_profiles: true`, superseding the 00:14 unset observation without establishing actor, approval or exact change time. Gateway status still reports a stale default launchd definition and default-only serving with separate profile gateways; Hermes `/health` returned `200` and Aire `8766` remained absent. No service restart, routing correction, Aire integration, authenticated/rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 20 September 2026, 16:21 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against accepted `high`; the updated CLI now also warns that this key is unrecognized and may not be read, so effective reasoning remains open.
- Installed Hermes fast-forwarded at 13:37 IST from `9796235822b89e08597a402dad045b5b4464e474` to v0.21.3 `f458cba71479f69ef4f0bce240ca5136116942d9`, a 2,935-commit / 3,285-path move. Tracked source is clean except untracked `.review-worktrees/`; new autostash `d6dd7ae5…` heads an eight-stash stack and the fleet marker remains absent. The inspected sources do not establish actor or approval, and source movement does not prove process reload.
- Immutable GitHub `main` is `c1488ac947c9bc33fd65ec464548dc9d8edd6122`, 56 commits / 68 paths beyond installed, 106 commits / 102 paths beyond `efa09f49…`, and seven commits / 17 paths beyond `e10934b0…` observed earlier in this run. A read-only fetch advanced local tracking to current upstream; `hermes --version` names `c1488ac9…` but reports four rather than 56 commits behind. The bounded tail materially affects gateway persistence/shutdown, cron stale-claim and degraded-delivery recovery, Desktop steering/composer behavior plus persistent per-session preview-artifact dismissal across navigation/replay, browser admission, skills-hub caching, large tool-result trimming and platform send cadence.
- Hermes `/health` returned `200`, but gateway status reports a stale default launchd definition and default-only serving despite persisted multiplex `true`; Aire `8766` remained absent. No service restart, configuration correction, Aire integration, authenticated/rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 20 September 2026, 08:19 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- At 08:19 IST, direct GitHub `main` readback and an isolated fetch agreed on `b873a3a1d946ccd0b86fcf10ddfb43f72f42542b`, now 2,797 commits / 3,213 paths beyond installed and 171 commits / 225 paths beyond `f9524d3f…`. The bounded range materially touches provider-plugin auth/catalogue/vision/usage, profile-scoped gateway/TUI/cron behavior, updater/fleet/autostash custody, MCP OAuth/lifecycle, Desktop timeline/session persistence, compressed child-route inheritance, Docker egress guards, and state BLOB/WAL, provider-lock, credential-gated delegation and compression-idle handling. `hermes --version` and local tracking remain on `00570550…` / 2,546 commits behind.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. No upstream source was installed or integrated into Aire. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 20 September 2026, 04:03 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- Direct immutable GitHub and an isolated object-only fetch agree on `f9524d3f119c672e4a4444f56d582e7475716ba3`, now 2,626 commits / 3,110 paths beyond installed and 43 commits / 44 paths beyond `8a92051f…`. The bounded range is primarily plugin-catalog review plus gateway connection-failure replies, Desktop code-diff visibility, macOS composer replacements and plugin/skill guard corrections. `hermes --version` and local tracking remain on `00570550…` / 2,546 commits behind.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. No upstream source was installed or integrated into Aire. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 20 September 2026, 00:06 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- Direct immutable GitHub and an isolated object-only fetch agree on `8a92051f20e6b371c4ff1a46a5bcec7138cc4e8c`, now 2,583 commits / 3,091 paths beyond installed and 37 commits / 119 paths beyond the prior `00570550…` checkpoint. The bounded range materially changes recovery after exhausted retry/fallback routes, Responses turn anchoring, API-server status and Codex-session continuity, auxiliary-route diagnostics, model/provider admission, opt-in Codex browser PKCE authentication, Desktop retry-at-reset behavior, plugin-intake guards and cron credential-scope reporting. `hermes --version` and local tracking remain on `00570550…` / 2,546 commits behind, understating immutable Git by 37 commits.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. No upstream source was installed or integrated into Aire. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 19 September 2026, 12:19 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- Direct GitHub and refreshed local tracking agree on `7c6f21a5e12ba9b1c674ec9b410fa6b8c45de4f8`, now 1,998 commits / 2,645 paths beyond installed and 223 commits / 382 paths beyond the 08:07 checkpoint. The bounded net range materially changes compression and memory routing; per-home secret restore; MCP recovery; curator and skill-ledger custody; updater/Windows process handling; ACP restore; gateway identity and delivery seams; LSP lifecycle and caches; file extraction; and plugin admission. `hermes --version` names the current head but reports 1,445 commits behind, understating immutable Git by 553.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. No upstream source was installed or integrated into Aire. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 19 September 2026, 08:07 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `6c16233b0a27a292e7572b70cfdc83623112ebd2` to `25a43ddfb3ad68891ff4446ae7676d0ffc3d4c00`, now 1,775 commits / 2,476 paths beyond installed and 60 commits / 153 paths beyond the prior checkpoint. The bounded range materially changes cross-surface session repair and adoption, sender-scoped gateway/profile routing, Desktop liveness/project/draft/reasoning/group-chat behavior, agent final-response recovery, credential custody, cron/Chronos supervision, Kanban terminal-provider failure handling, custom-endpoint switching and background-delegation stop behavior. `hermes --version` names `25a43ddf…` but reports 1,445 commits behind, understating Git by 330.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. No upstream source was installed or integrated into Aire. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 19 September 2026, 00:12 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `027d1a8a6043355b7af53b4c0645336b41372b7b` to `a51143fbbe6ddbc0c7f403d0579c4d75504c6793`, now 1,671 commits / 2,383 paths beyond installed and 226 commits / 632 paths beyond the prior checkpoint. The bounded range materially changes webhook authorization, gateway restart/degraded/queue custody, profile-owned config/auth, cron/Kanban lifecycle guards, Desktop session/custom-endpoint behavior, state/MCP recovery, updater/fleet handling, backup completeness and Bedrock prompt caching. `hermes --version` names `a51143fb…` but reports 1,445 commits behind, understating Git by 226.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. No upstream source was installed or integrated into Aire. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 18 September 2026, 20:10 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `01382698fc32ec7740b6a204d9b7a6abeac74d33` to `027d1a8a6043355b7af53b4c0645336b41372b7b`, now 1,445 commits / 1,934 paths beyond installed and 580 commits / 828 paths beyond the prior checkpoint. The bounded range materially changes cron/Kanban execution custody, gateway session/queue/read-dedup scope, provider/auth recovery, Desktop session/history/reconnect/multi-window/browser lifecycle, updater/fleet recovery, messaging media and tool/read safety. `hermes --version` names the fetched head and reports the exact 1,445-commit gap.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 18 September 2026, 12:10 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `77ecc72bcdd5da0163cca21c8af0e95b26ba3426` to `01382698fc32ec7740b6a204d9b7a6abeac74d33`, now 865 commits / 1,396 paths beyond installed and 22 commits / 65 paths beyond the prior checkpoint. The bounded range removes the keyless `opencode-free` provider, restores the excluded-model constant used by Zen/Go live pickers, makes a threaded gateway `/stop` stop every run in that thread, isolates cron fire-claim bounds and changes Desktop portal-cookie, forced-renewal, reconnect and rejected-background-gateway handling. `hermes --version` names `01382698…` but reports 788 commits behind, understating immutable Git by 77.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 18 September 2026, 08:09 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `e83b1d51f13a08b424636f0b519db86a35aa7bd7` to `77ecc72bcdd5da0163cca21c8af0e95b26ba3426`, now 843 commits / 1,370 paths beyond installed and 13 commits / 33 paths beyond the prior checkpoint. The bounded range affects configured out-of-core memory-provider installation, same-chat gateway `/stop` fallback and identity bounds, and Desktop Cloud portal-session/auth recovery. `hermes --version` names `77ecc72b…` but reports 788 commits behind, understating immutable Git by 55.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 18 September 2026, 04:01 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `77fb7f0a709b4df2c17822da3a08f8c93de3b3fb` to `e83b1d51f13a08b424636f0b519db86a35aa7bd7`, now 830 commits / 1,351 paths beyond installed and 15 commits / 20 paths beyond the prior checkpoint. The bounded range affects Mnemosyne plugin-catalog identity/dependency/capability validation, Slack Enterprise Grid redirects and task-card reopening, and provider-confirmed Bedrock context-window caching with failure memoization and Grok context restoration. `hermes --version` names `e83b1d51…` but reports 788 commits behind, understating immutable Git by 42.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 18 September 2026, 00:10 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `61e730cc0b7594eeb8e92fd8a56e4259ba87cfe6` to `77fb7f0a709b4df2c17822da3a08f8c93de3b3fb`, now 815 commits / 1,342 paths beyond installed and 226 commits / 468 paths beyond the prior checkpoint. The bounded range affects session-state custody, MCP/gateway/TUI lifecycle, cron delivery/import behavior, Desktop media/onboarding/profile/updater behavior, model/auth/custom-provider routing, tool/skill safety and process cleanup. `hermes --version` names `77fb7f0a…` but reports 788 commits behind, understating immutable Git by 27.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 17 September 2026, 16:12 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `251e5f7c0a067239655f3421812ab7492a206065` to `61e730cc0b7594eeb8e92fd8a56e4259ba87cfe6`, now 589 commits / 1,031 paths beyond installed and 22 commits / 29 paths beyond the prior checkpoint. The bounded tranche affects Upstage Solar context-window defaults, macOS CLI clipboard-image attachment, Desktop pet/search/preview/sidebar behavior, Bot Mode credential-isolation documentation and approval detection hardening for `launchctl`. `hermes --version` names the fetched head and says “Up to date”, while immutable Git establishes the installation gap.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 17 September 2026, 12:01 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `bec892459453baf50cbcbcaaa9db4d79f09f8442` to `251e5f7c0a067239655f3421812ab7492a206065`, now 567 commits / 1,006 paths beyond installed and 33 commits / 47 paths beyond the prior checkpoint. The bounded tranche affects TUI gateway lease ownership, screenshot eviction under provider limits, Desktop/Electron Windows packaging and IPC, hosted-room migration, plugin dependency installation/validation and Nous stale-route recovery. `hermes --version` names the fetched head and says “Up to date”, while immutable Git establishes the installation gap.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 17 September 2026, 08:08 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `6005aa1fd9aac8b1024ace50fec8cd1c85a04bae` to `bec892459453baf50cbcbcaaa9db4d79f09f8442`, now 534 commits / 974 paths beyond installed and 56 commits / 185 paths beyond the prior checkpoint. `hermes --version` names that head and says “Up to date”, while immutable Git establishes the installation gap.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 17 September 2026, 04:12 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; no approval for that change is recorded, so the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack, leading exact autostashes `760bef8c…` / `532f12fc…` and absent fleet marker are unchanged.
- A read-only fetch advanced `origin/main` from `260da4ef6251b29aa830c8c949dbe7c92d58df5f` to `6005aa1fd9aac8b1024ace50fec8cd1c85a04bae`, now 478 commits / 855 paths beyond installed and 399 commits / 657 paths beyond the prior checkpoint. `hermes --version` names that head and says “Up to date”, while immutable Git establishes the installation gap.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees remain clean; reviewed local candidates remain unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 17 September 2026, 00:11 IST

- Saved model/provider/fallback routing still matches Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` remains `xhigh` against the accepted `high`; no approval for that change is recorded, so the contradiction remains open.
- Installed Hermes remains v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474`, with no modified tracked files and only untracked `.review-worktrees/`. The seven-stash stack, leading exact autostashes `760bef8c…` / `532f12fc…` and absent fleet marker are unchanged.
- Read-only fetch advanced `origin/main` to `260da4ef6251b29aa830c8c949dbe7c92d58df5f`, 79 commits / 249 paths beyond installed and 42 commits / 127 paths beyond prior checkpoint `4e9d3c713a3e3d47319ab18a8d8dfade5665270d`. The CLI now names that head and says “Up to date”, while immutable Git still establishes the installation gap.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire worktrees and reviewed local candidates remain unchanged and unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 16 September 2026, 20:12 IST

- Live saved model/provider and fallback routing still match Sam's latest explicit correction: `deepseek-v4.1-flash` / `opencode-go`, no model-level base URL, then `xai-oauth/grok-4.6` and `opencode-go/glm-5.3`. Saved `agent.reasoning_effort` now reads `xhigh`, contradicting the prior verified `high`. No current user approval for that reasoning change is recorded, so this is preserved as configuration drift rather than silently promoted to a preference. This receipt proves saved configuration only, not a model or reasoning switch inside an already-running conversation.
- Installed Hermes materially advanced by fast-forward from `682a95258ce9e877cfb607a5ada6436183efdebb` to v0.21.3 at `9796235822b89e08597a402dad045b5b4464e474` (71 commits / 167 paths). The checkout has no modified tracked files and only untracked `.review-worktrees/`. New update autostash `760bef8c2d2792af4f0d09ad6a513c428b7429d4` is `stash@{0}`; prior exact stash `532f12fc616fd8f445ffd2b40efe88e68b2eeec7` remains `stash@{1}`, seven total stashes exist, and `fleet_restart_pending` is absent. These facts do not establish the cause or approval provenance of the later update.
- Read-only fetch advanced `origin/main` to immutable GitHub head `4e9d3c713a3e3d47319ab18a8d8dfade5665270d`, 37 commits / 134 paths beyond installed and 57 commits / 135 paths beyond checkpoint `948e9706…`. The CLI names intermediate `09aaa4cc…`, six commits beyond installed, and reports “Up to date” while immutable Git is a further 31 commits ahead.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. Accepted Aire heads and the reviewed terminal-transition / goal-gate candidates remain unchanged and unintegrated. No authenticated Aire route, rendered journey, physical-device acceptance, deployment or production mutation advanced.

## Reconciliation receipt — 16 September 2026, 16:05 IST

- Live saved-configuration readback still matches Sam's latest explicit correction: Skippy is `deepseek-v4.1-flash` / `opencode-go`, `model.base_url` is absent, reasoning remains high, and the fallback chain is `xai-oauth/grok-4.6` then `opencode-go/glm-5.3`. This proves persisted configuration, not a model switch inside an already-running conversation.
- Installed Hermes remains at `682a95258ce9e877cfb607a5ada6436183efdebb`; its checkout has no modified tracked files and retains only untracked `.review-worktrees/`. Exact stash `532f12fc616fd8f445ffd2b40efe88e68b2eeec7`, six total stashes and the `fleet_restart_pending` marker remain.
- Read-only fetch advanced `origin/main` to `948e9706618220839a20c33c2fc5c19de074d835`, 51 commits / 176 paths beyond installed and 27 commits / 95 paths beyond the 12:01 checkpoint `6cd2502629cf17eeac7c8dda466d04cb72096146`. The new bounded range materially affects Desktop approval batching/stacks, transcript owner resolution, timeline performance, floating composer behavior, Cloudflare Access OAuth headers and detected password-manager defaults. `hermes --version` still names `6cd25026…` and says “Up to date”.
- Hermes `/health` returned `200`; Aire's BFF on `8766` remained absent. This is upstream source movement only: no newer source was installed or integrated into Aire, and no authenticated/rendered/physical-device acceptance advanced. The reviewed terminal-transition and goal-gate candidates remain local, uninstalled, unmerged and unpushed.

## Reconciliation receipt — 16 September 2026, 12:01 IST

- Live saved-configuration readback still matches the latest explicit correction: Skippy is `deepseek-v4.1-flash` / `opencode-go`, `model.base_url` is absent, reasoning remains high, and the fallback chain is `xai-oauth/grok-4.6` then `opencode-go/glm-5.3`. Forge remains `kimi-k2.7-code` / `opencode-go`; Vera remains `grok-4.6` / `xai-oauth`. This proves persisted configuration, not a model switch inside any already-running conversation.
- The approved Hermes update is live in the source checkout at `682a95258ce9e877cfb607a5ada6436183efdebb`; the main checkout has no modified tracked files, the original parked change remains `stash@{0}` at `532f12fc616fd8f445ffd2b40efe88e68b2eeec7`, and `.review-worktrees/` remains untracked. A fresh read-only fetch places upstream at `6cd2502629cf17eeac7c8dda466d04cb72096146`, 24 commits / 86 paths beyond installed. `hermes --version` identifies that head but says “Up to date.”
- The approved delivery-quality gate completed. Forge produced exact terminal-transition guard candidate `98468308d0b99740f2835ee707eda9f2c3e6e4ab` / tree `01c8f12cb4375a4cc957cfcdd4ef563358010de4`; Vera independently returned `ACCEPT WITH CONDITIONS` and recommends **park**, because delayed-ack/truncated `UNKNOWN` runs can still be stale-reclaimed and installation would also change review-phase crash handling. It remains local, unmerged, uninstalled and unpushed; one evidence Markdown file is modified after the committed artifact.
- The parked goal-gate transport change was reimplemented on current base as `44789283bb0bb1b33331e1609bdbc108caff4cfa` / tree `69361865d5786fe1cd84112ca3d1f607856bca1a` and independently accepted with conditions. It also remains local, unmerged, uninstalled and unpushed. The CLI sibling `hermes_cli/kanban.py::_goal_mode_handoff_rejection` still discards the transport-failure flag, so the accepted worker-tool candidate does not close the whole bug class. The original stash remains untouched.
- The `fleet_restart_pending` marker remains set, and no source-update, candidate-review or health receipt is Aire integration or user-surface acceptance.

## What was decided

Sam approved three bounded actions on 16 September 2026, after a desktop session ("Restore Hermes and Astra performance", 15 September 21:45 → 16 September 06:53 IST) investigated a two-week quality regression:

1. **Record this correction note.** The 3 September routing decision read as applied while the live runtime disagreed with it for roughly two days. The canonical record needs the drift, not just the resolved end state.
2. **Install the pending Hermes update**, because the missing code range includes free-tier refusal/recovery — the behaviour that would have refused the silent downgrade instead of taking it.
3. **Admit one real Donworth task as an independent delivery-quality gate** (Forge implements, Vera verifies), so "more effective" is measured rather than assumed.

Corrections 1–3 do not authorise deployment, production mutation, spend, credential changes or client contact.

## Verified state at 16 September 2026, 09:50 IST

**The failure that was found.** The `default` profile (Skippy) had drifted off its subscription routes. Live per-provider call receipts for 15 September 2026 record, among others: `muse-spark-1.3-contributor-free` via `opencode-free` (243 calls), `glm-5.3-flash` (248 calls, a model the 3 September canary explicitly rejected), and Nous free-tier models. By contrast 14 September 2026 was 325 calls, all on `openai-codex`. Mechanism: `model.default` had drifted onto an OpenRouter `base_url` with a billing-capped key while `provider: auto` and an **empty** `fallback_providers` list let the runtime fall through to whatever answered.

**What is live now (read back from the runtime, not the summary).**

- `model.default: deepseek-v4.1-flash`, `model.provider: opencode-go` — Sam's chosen daily driver on the OpenCode Go subscription. **Superseded at 10:45 IST the same day; see the amendment at the end of this note.**
- `fallback_providers`: `xai-oauth/grok-4.6` → `openai-codex/gpt-5.6-sol` → `opencode-go/glm-5.3`.
- `agent.reasoning_effort: high`; auxiliary compression inherits the main model (it had been `gpt-5.6-luna`, 272k context, forcing early compaction).
- `forge`: `kimi-k2.7-code` @ `opencode-go`. `vera`: `grok-4.6` @ `xai-oauth`.
- No profile retains a model-level `provider: auto`. Remaining `auto` entries are auxiliary tasks with empty credentials, which inherit the now-pinned primary.
- The `default` gateway restarted 16 September 09:44:33 IST, i.e. after the 06:52 config write, so the configuration is genuinely loaded rather than merely persisted.
- Independent canary re-run by Skippy at 09:50 IST: exact-token reply, 9 seconds wall clock, one API call, receipt `opencode-go / deepseek-v4.1-flash`.
- This conversation itself is served by `opencode-go / deepseek-v4.1-flash`.
- Training-tier and rejected models have not been used since the correction: `muse-spark-1.3-contributor-free` last call 15 September 19:50, `glm-5.3-flash` last 19:05, `upstage/solar-pro4:free` last 19:07. Zero since.
- Zero OpenCode Go quota errors recorded on 16 September (the `GoUsageLimitError` entries in the gateway error log are from 9 September).

## Consequences for other notes

- **Partial supersession of [[decisions/2026-09-03-cost-efficient-agent-model-routing]].** Its routing split (Forge → Kimi via OpenCode Go, Vera → Grok) stands and is now actually enforced. Its statement that Astra is Skippy's default no longer describes the live runtime: at Sam's direction Skippy's daily driver is now `deepseek-v4.1-flash` @ OpenCode Go, with Astra retained as a deliberate escalation route (architecture, final review, anything consequential) via `/model` or `-m`.
- The chain now degrades onto SuperGrok rather than onto a free training tier, so the 3 September decision's privacy intent is enforceable again.
- **Private-context consequence, stated plainly.** The 15 September training-tier calls occurred while the agent was reading Ground Zero portfolio context. No credentials moved. The calls are the exposure; no payload-level claim is made either way.

## Open items

1. **Delivery quality is still unmeasured.** Routing, auth and tool-loop health are proven; mission outcomes are not. This is the delivery-quality gate in item 3 above.
2. **Capacity ceiling unresolved.** OpenCode Go's 5-hourly and weekly caps are real. Whether Skippy, Forge, Vera and the desk profiles fit inside included capacity is unverified, and the plan tier on the OpenCode workspace has not been checked.
3. **Update gap.** Installed Hermes is v0.21.3 at `f458cba7`; immutable upstream `c1488ac9` is 56 commits / 68 paths newer. `hermes --version` names current upstream but reports only four commits behind, so compatibility review must use immutable Git before any Aire integration.
4. **Preserved local candidates.** New update autostash `d6dd7ae5…` is `stash@{0}`; prior exact stashes `760bef8c…` and `532f12fc…` remain recoverable as `stash@{1}` and `stash@{2}`. Goal-gate candidate `44789283…` is independently accepted with conditions but its CLI sibling remains unresolved; terminal-transition candidate `98468308…` is independently accepted with conditions and recommended to park. Neither is installed, merged or pushed.
5. **`cara` profile** is still pinned to `gemini-3.5-flash` @ `openrouter` — the billing-capped key — with an empty fallback chain. It fails closed rather than downgrading, but it will fail.
6. Telegram streaming remains off at the master switch (`streaming.enabled: false`).
7. Auxiliary title generation and vision still route to `gpt-5.6-luna` @ `openai-codex` (included capacity, ~1 call per session).

## Execution receipt — 16 September 2026, 10:30 IST

Landed and verified after Sam's approval ("Yes approved", then "do whatever is best"):

- **Hermes updated** `498abb67` → `682a9525` (1,101 commits, v0.21.3). Dependencies re-resolved (101 packages). Pre-update snapshot `20260916-085459-pre-update` plus sibling profile snapshots taken. **`state.db` (1.4 GB) was excluded from that snapshot by the 1 GB limit — session history is not covered by the backup.**
- **The updater's own restart step failed.** Log: `⚠ Update incomplete — gateway auto-restart failed: cannot import name 'file_signature' from 'utils'` — a mixed `sys.modules` artifact of a live process pulling code out from under itself, not broken code. Installed source and venv were verified healthy from a fresh process (`utils.file_signature`, `hermes_cli.config`, `main`, `model_tools`, `run_agent` all import clean).
- **All four gateways restarted and verified on `682a9525`**: default pid 31155, forge 28719, leo 28787, seamus 28835. The default gateway could not be restarted from inside its own process tree (correctly blocked by policy — SIGTERM would have killed the command); the sanctioned in-band path was used instead: **SIGUSR1 → drain-aware `request_restart(via_service=True)` → launchd relaunch** (`KeepAlive` + `RunAtLoad` confirmed first).
- **Desktop serve backend** cycled and respawned on the new code.
- **Config survived the jump untouched**: `model.default`, `model.provider`, `fallback_providers`, `agent.reasoning_effort: high`, auxiliary compression, `_config_version: 44`.
- **Parked stash inspected and preserved — it is not junk.** `stash@{0}` = `532f12fc616fd8f445ffd2b40efe88e68b2eeec7` captures the transport-failure flag that `hermes_cli/goals.py::judge_goal` returns fifth (normal path `return verdict, reason, parse_failed, wait_directive, False`) and that `tools/kanban_tools.py::_goal_gate` (line ~395) still discards with `_`. An unreachable judge currently risks being read as a semantic rejection. Preserved untouched, tracked as Kanban card `t_73ac93fc`, serialised after the gate because both edit that file.
- **Delivery-quality gate dispatched and running.** Card `t_83e39966` (Forge, isolated worktree `.worktrees/t_83e39966`) implementing the terminal-transition guard from [[items/ops-kanban-terminal-transition-guard]]; dependent verification card `t_fb35a153` (Vera) gated behind it. Live corroboration for the item's premise: `founder-ops` carries an active diagnostic on `t_53ddba80` — *"worker exited cleanly (rc=0) without calling kanban_complete or kanban_block — protocol violation"*, 2 consecutive failures.

Still open after this receipt:

- **`~/.hermes/fleet_restart_pending` remains set.** The obligation is discharged for all four gateways, but the marker's own obsolescence check also weighs desktop `serve` rows, which cannot prove a code identity — so the CLI banner persists by design until a successful `hermes update` run clears it. Not hand-deleted: suppressing a warning without proof is worse than the noise.
- **Five older update autostashes** (30 Aug – 4 Sep) remain unreviewed (`git stash show -p <entry>`).
- **38 worktrees / 23 GB** in `.worktrees` still await reclaim (card `t_ebdbe391`).
- Delivery quality is now being **measured rather than assumed**; the result is not in yet.
- `cara`'s exhausted-OpenRouter route, Telegram streaming, auxiliary `gpt-5.6-luna` title/vision routing and the OpenCode Go capacity-tier question are unchanged from the list above.

## Provenance of the drift

No Ground Zero note authorises `reasoning_effort: low`, the `gpt-5.6-luna` compression swap, MoA enablement across profiles, or the OpenRouter `base_url`. The editing session could not be attributed from the available receipts, and this note does not infer one. What is recorded is the observed state change, the evidence, and the correction — not a guessed author.

## Connected vault notes

- [[decisions/2026-09-03-cost-efficient-agent-model-routing]] — the decision this corrects
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]] — the delivery standard the quality gate serves
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — explicit failure and durable handoff
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] — why this belongs in the vault, not only in agent memory
- [[project_state/personal-agent]] — live Hermes custody
- [[context/model-pack]] — compact cross-business picture

## Amendment — 16 September 2026, 10:45 IST (daily driver superseded)

Sam's priority was restated plainly: *"I dont mind speed really just as long as its effective and able, and close to the frontier."* That reopens the daily-driver choice, and the live receipts settled it.

**What the interactive channel was actually served by over the preceding two weeks** (primary calls, cron excluded):

- **8 September** — `gpt-6-astra` 662 calls. Frontier.
- **9–11 September** — `gpt-5.6-luna`, a lighter sibling: 491, 245 and 61 calls. Mid-tier.
- **12–14 September** — `gpt-5.6-sol` (99/65/162) with `gpt-6-astra` on the 14th. Capable.
- **15 September** — `glm-5.3-flash` 244, `muse-spark-1.3-contributor-free` 243, `deepseek-v4-pro` 111, free-tier flash 74, `solar-pro4:free` 40. The collapse.
- **16 September** — `deepseek-v4.1-flash` 120 across OpenCode Go and a free tier. Flash class.

The reading is that the collapse was **not** the whole two weeks: the model answering Sam changed constantly, and only part of that period was frontier-class. "Not performing well for two weeks" is therefore consistent with the evidence, and repairing the routing alone could not have fixed it — the repair made the routing honest and durable, not capable.

**Change applied:** Skippy / default is now **`gpt-6-astra` @ `openai-codex`** — frontier, included in the ChatGPT subscription, verified by fresh-process canary (exact-token reply, 12 s, `cost_status=included`, 1 API call). `model.base_url` cleared; `agent.reasoning_effort: high` retained; fallback chain unchanged at `grok-4.6 → gpt-5.6-sol → glm-5.3`, so a capacity cap now degrades to *another capable model* rather than to a training tier. Config backed up as `config.yaml.bak-frontier-restore-20260916-*`.

This supersedes the 15 September "daily driver = deepseek-v4.1-flash" instruction for the CEO channel. `deepseek-v4.1-flash` @ OpenCode Go remains a valid route for high-volume, low-stakes work, which is the workload its allowance actually suits. Forge stays on `kimi-k2.7-code` for bulk engineering; Vera stays on `grok-4.6` for independent review.

**New open item:** with a frontier model on the CEO channel, ChatGPT usage limits become the binding constraint rather than OpenCode Go's. Astra sustained 662 calls in one day on 8 September, and the first fallback is `grok-4.6`, so the exposure is capability variance under load — not a silent quality collapse. Worth watching rather than pre-optimising.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-09-03-cost-efficient-agent-model-routing]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-kanban-terminal-transition-guard]]
- [[project_state/personal-agent]]

