---
id: ops-aire-hermes-upstream-impact-triage
company_id: ground-zero
domain: ops
title: Triage upstream Hermes changes into an Aire compatibility queue
rationale: The reconciler observes fast upstream drift, but Sam still has to reconstruct which changes affect Aire's accepted product and runtime boundaries.
council_note: Aire upstream impact triage · Effort S
priority: P1
effort: S
impact: 89
state: proposed
is_one_thing: true
source: Ground Zero workflow automation scan 2026-08-17
run_date: "2026-08-17"
created_at: "2026-08-17T18:01:00+01:00"
updated_at: "2026-08-21T04:03:00+01:00"
---

# Triage upstream Hermes changes into an Aire compatibility queue

## Reconciliation checkpoint, 21 August 2026 04:03 IST

The installed Hermes checkout remains clean at `4a5b6dd`, while its tracked `origin/main` and direct GitHub `main` advanced to `18a15a46`. That is 41 commits beyond the checkout, 27 commits beyond the prior `ee000768` checkpoint and 1,424 commits beyond compatibility base `f0c222c`. The supervised gateway remains the process started at 20:42 IST on 19 August and therefore predates the checkout advance; no evidence shows `4a5b6dd` or the upstream-only range is loaded or accepted.

The immutable `ee000768..18a15a46` range materially adds Desktop/Web React Compiler enablement and Bot Mode mention fixes, gateway/relay approval-prompt ambiguity handling and streamed-final formatting repairs, per-job cron `reasoning_effort`, OpenCode model-routing changes and Windows update self-test hardening. These are review inputs for Aire's Desktop parity, approvals, Work continuity and messaging; they do not establish source integration, runtime acceptance or product progress.

The accepted and compatibility heads remain clean and unpublished at `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted dirty drift at `d533206b`. Hermes `/health` returned `200`, unauthenticated Aire status, context and Work probes returned `401`, listeners remain on `8642` and `8766`, and `8767` remains absent. No authenticated owner probe, source integration, gateway restart, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..18a15a46`.

## Reconciliation checkpoint, 21 August 2026 00:03 IST

The installed Hermes checkout advanced from the previously recorded `fdf6f1d4` to clean upstream `4a5b6dd`, a 342-commit source movement. The exact three-commit range after the prior `9ef9b2d2` upstream checkpoint adds a shared Desktop identity chip, main-process site-favicon resolution and a connector-agnostic consent card. The supervised gateway remains the process started at 20:42 IST on 19 August and therefore predates this checkout advance; no evidence shows that `4a5b6dd` is loaded or accepted.

Direct GitHub inspection places NousResearch Hermes `main` at `ee000768`, 14 commits beyond the checkout and 1,397 commits beyond compatibility base `f0c222c`. The upstream-only range materially changes Fly socket permissions, scale-to-zero accounting for cron/API work, Bot Mode group recreation and deletion, and group-room reopen/late-reply behaviour. These are review inputs for Aire's Desktop identity, connector consent, durable Work and messaging continuity; they do not establish integration or product progress.

The accepted and compatibility heads remain clean and unpublished at `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted dirty drift at `d533206b`. Loopback probes and the tailnet-only Serve configuration remain at their recorded unauthenticated boundaries. No authenticated owner probe, source integration, gateway restart, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..ee000768`.

## Reconciliation checkpoint, 20 August 2026 20:03 IST

Direct GitHub inspection places NousResearch Hermes `main` at `9ef9b2d2`, 25 commits beyond the 16:04 `f43eabee` checkpoint, 339 commits beyond the installed `fdf6f1d4` checkout and 1,380 commits beyond compatibility base `f0c222c`. The immutable new range materially repairs Desktop sidebar row alignment and working-progress-arc clipping (`b6d21b37` through `c47f0b45`), bounds and makes the bootstrap installer's pipe drain cancellable with a Rust CI lane (`b94a1613` through `5e32e3ae`), explicitly disables thinking on Anthropic's native Messages wire when requested (`c670464c`), repairs Windows/Desktop update completion and avoids unnecessary editable-package reinstalls (`2b1bff62`, `0723cb6c`), preserves update-holder age across handoffs (`dbc2a9c8` through `59795c40`) and exposes a documented plugin-controlled Desktop theme surface (`2e1e3cc9` through `9ef9b2d2`). These are direct review inputs for Aire's Desktop parity, truthful progress chrome, provider behaviour, safe updates and future branded plugin surface; they do not establish Aire integration or progress.

The accepted and compatibility heads remain clean and unpublished at `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted dirty drift at `d533206b`. The installed checkout remains clean at `fdf6f1d4`. Loopback Hermes and Aire listeners return the expected unauthenticated health and boundary statuses. No authenticated owner probe, source integration, process reload, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..9ef9b2d2`.

## Reconciliation checkpoint, 20 August 2026 16:04 IST

Direct GitHub inspection places NousResearch Hermes `main` at `f43eabee`, 42 commits beyond the 12:07 `a41f6831` checkpoint, 314 commits beyond the installed `fdf6f1d4` checkout and 1,355 commits beyond compatibility base `f0c222c`. The immutable new range materially adds relay and cron continuation/formatting fixes across DM, thread and Slack workspace scopes (`85b89451` through `e0e3ca3`), surfaces Bot Mode group clarifications and command approvals in the room (`c757f99e`, `1179f148`), fixes keyless rescue policy handling (`a1438498`), adds positive process identity and a machine spawn ledger (`95fa8142`), makes unlimited agent turn limits first-class and the default (`50462828` through `c32119b1`), preserves local source edits during Desktop updates (`5dd221d4`) and repairs stale-module gateway restart plus disbanded-group cleanup (`044acf2b`, `2123a016`). These are direct review inputs for Aire's messaging continuity, approval visibility, invisible provider routing, long-running Work, runtime evidence and safe update/recovery; they do not establish Aire integration or progress.

The accepted and compatibility heads remain clean and unpublished at `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted dirty drift at `d533206b`. The installed checkout remains clean at `fdf6f1d4`, the gateway still runs from that installation, and the Aire BFF still runs from the physically accepted worktree. Tailscale remains running and self-online with the tailnet-only Serve route mapped to loopback `8766`; internal DNS resolves it while ordinary host DNS and direct host-side HTTPS do not. No authenticated owner probe, source integration, process reload, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..f43eabee`.

## Reconciliation checkpoint, 20 August 2026 12:07 IST

Direct GitHub inspection places NousResearch Hermes `main` at `a41f6831`, 75 commits beyond the 08:08 `dc90b1b3` checkpoint, 272 commits beyond the installed `fdf6f1d4` checkout and 1,313 commits beyond compatibility base `f0c222c`. The immutable new range materially adds keyless Tavily, Firecrawl and Keenable search plus one-shot keyed-provider rescue (`ee37f3d8` through `f796239c`, `d1eefe6a`, `d425658d`), replaces identical repeated tool payloads with reference stubs (`761990b7`), repairs pinned-session prune/archive data loss (`76653a8e`), enables agent-driven Desktop previews with trusted input, durable element handles and delta observation (`c57581cd` through `0d19e37b`), hardens remote Desktop update, disconnect and backend-ownership recovery (`bd5b221a`, `61700217`, `d431f680`), tags gateway liveness watchers for supervision (`a1ddb548`), and repairs Bot Mode canonical-chat loops and busy-profile adoption (`5ab74737`, `21e9d453`). These are direct review inputs for Aire's first-use usefulness, invisible provider routing, retained-result efficiency, durable Work/session safety, contextual live work, connection continuity and Desktop parity; they do not establish Aire integration or progress.

The accepted and compatibility heads remain clean and unpublished at `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted dirty drift at `d533206b`. The installed checkout remains clean at `fdf6f1d4`, the gateway still runs from that installation, and the Aire BFF still runs from the physically accepted worktree. No authenticated owner probe, source integration, process reload, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..a41f6831`.

## Reconciliation checkpoint, 20 August 2026 08:08 IST

Direct GitHub inspection places NousResearch Hermes `main` at `dc90b1b3`, 84 commits beyond the 04:02 `aebab05f` checkpoint, 197 commits beyond the installed `fdf6f1d4` checkout and 1,238 commits beyond compatibility base `f0c222c`. The immutable new range materially hardens relay reconnect, deduplication and keepalive semantics (`d2975f42` through `5a17b1f4`), adds relay-native draft streaming and task cards (`3683e700`), authenticates gated Desktop file downloads (`cce04279`), makes compression refusal truthful and adds bounded salvage (`7bf66ec3`, `62016a1b`, `fb96247e`, `0596ccde`), exposes API reasoning effort correctly (`2d59cb43`), scopes remote project discovery to the focused profile (`4dcefed0`, `f9838280`), narrows memory guidance when built-in stores are disabled (`d5cddae1`, `481bc939`, `b38c4031`), exposes computer-use screenshots for chat delivery (`188d4791`), guards mid-turn and uncompressed session overflow when compression is disabled (`db5d5dff`, `4d1fc6ca`, `cef999c5`), and prevents the Desktop composer from widening its surface while extending the narrow-width collapse ladder (`b656b0d3`, `dc90b1b3`). These are direct review inputs for Aire's Work continuity, progress evidence, artifacts, Profile authority, invisible provider routing, long-session reliability, responsive Desktop parity and rendered-evidence workflow; they do not establish Aire integration or progress.

The accepted and compatibility heads remain clean and unpublished at `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted dirty drift at `d533206b`. The installed checkout remains clean at `fdf6f1d4`, the gateway still runs from that installation, and the Aire BFF still runs from the physically accepted worktree. No authenticated owner probe, source integration, process reload, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..dc90b1b3`.

## Reconciliation checkpoint, 20 August 2026 04:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `aebab05f`, 96 commits beyond the 00:02 `7b25941b` checkpoint, 113 commits beyond the installed `fdf6f1d4` checkout and 1,154 commits beyond compatibility base `f0c222c`. The immutable new range materially adds keyless Exa/Parallel web search for fresh installs (`96c2fd3c`, merged at `aebab05f`), strict stored-provider routing across web, image/video, voice and browser tools (`d7119ea2`, `2dea073a`, `099258ef`, `7f83d380`, `b10c5a80`), 50K MCP result spill with upstream-elision warnings (`09e65779`), wall-clock run budgets and loop/stall recovery (`803397ec`, `449471c3`), and Desktop Bot Chat/profile activation recovery (`3a50a6be`, `6ec4aa8c`, `2367b90b`). These are direct review inputs for Aire's first-use usefulness, invisible provider routing, retained-result evidence, durable Work continuity and Profile/session reliability; they do not establish Aire integration or progress.

The accepted and compatibility heads remain clean and unpublished at `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted dirty drift at `d533206b`. The installed Hermes checkout remains clean at `fdf6f1d4`, while loopback Hermes and Aire listeners return the expected unauthenticated health/boundary statuses. No authenticated owner probe, source integration, process reload, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..aebab05f`.

## Reconciliation checkpoint, 20 August 2026 00:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `7b25941b`, 18 commits beyond the 20:03 `78ffd71f` checkpoint and 1,058 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially repair approval-guard routing through the CLI fall-through (`16af3bed` in `tools/approval.py`), add agent-controlled preview dismissal across the tool core and Desktop routing (`60e9ed12`), coalesce repeated gateway restarts (`49cc3708` in `hermes_cli/web_server.py`), strip unsupported Codex cache-retention fields at the wire (`8e294949` in `agent/codex_runtime.py`) and restore the multi-connection Bot Mode creation picker (`7b25941b` in the Desktop bots plugin). These are review inputs for Aire's approval safety, contextual live work, runtime reliability, provider compatibility and cross-machine orchestration; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, with no matching commit object in their recorded GitHub remotes. A material operational correction is now required: the installed Hermes checkout is clean at upstream `fdf6f1d4`, and the supervised gateway started at 20:42 IST on 19 August after that commit, so the observed Hermes gateway no longer predates the compatibility branches. It is nevertheless running from the separate git-installed upstream checkout rather than local compatibility branch `1004f3e`, and it remains 17 commits behind current upstream. The Aire BFF still predates the compatibility branches. No authenticated owner probe, source integration, parity review, physical installation or rendered acceptance occurred, so Profile, Work, receipt, streaming, icon and accessibility gaps remain open. The first live test now uses immutable range `f0c222c..7b25941b`.

## Reconciliation checkpoint, 19 August 2026 20:03 IST

Direct GitHub inspection places NousResearch Hermes `main` at `78ffd71f`, 65 commits beyond the 12:01 `13ce0c5c` checkpoint and 1,040 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially repair active-profile session lookup (`d959ba56`), recent-session retention in a one-profile `ALL` scope (`759d320e`), composer submission isolation to the visible surface (`04956c1a`), review-agent submission routing back to the opening composer (`830108c8`), the sandboxed Desktop preload bridge (`a8d87ac1`) and unanswered tour-bridge latency (`84d81d25`); the range also adds live Desktop update progress (`10753154`) and per-provider reasoning-echo opt-in (`73243b0d`). These are material review inputs for Aire's Profile/session authority, Chat/Work surface isolation, Desktop reliability, progress evidence and provider routing; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted drift at `d533206b` with five modified and two top-level untracked paths, and the observed BFF and Hermes gateway still predate the compatibility branches. The first live test now uses immutable range `f0c222c..78ffd71f`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 19 August 2026 12:01 IST

Direct GitHub inspection places NousResearch Hermes `main` at `13ce0c5c`, 33 commits beyond the 08:06 `2507bc64` checkpoint and 975 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially repair release-build profile/agent switching (`a787bfea`), profile-scoped adapter session keys (`21260c32`), non-default-profile Skill Hub installs (`ac3d7dda`), remote Files-panel downloads (`6a843f95`), false-success reporting after Desktop rebuild failure (`6907c978`), auto-speak continuity across stream-ID rewrites (`63565fa2`), Bot Mode chat switching (`1a19fedb`), TUI focus repaint (`4180c3f3`), native dependency staging, and live image-model catalog/routing. These are material review inputs for Aire's Profile/session authority, artifacts, voice, Desktop parity and provider reliability; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`; the older root checkout remains unaccepted drift at `d533206b` with five modified and two top-level untracked paths. The first live test now uses immutable range `f0c222c..13ce0c5c`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 19 August 2026 08:06 IST

Direct GitHub inspection places NousResearch Hermes `main` at `2507bc64`, 60 commits beyond the 04:01 `5dd15872` checkpoint and 942 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially add registered multi-source Desktop REST routing, source-switch isolation and connection search (`7245b022` through `9ed738fa`), restored profile switching (`5d3c15aa`), fail-open atomic profile-switch publication with bounded mid-dial activation leases (`2507bc64`), agent-guided tours across named Desktop surfaces (`01817691` through `bbd66079`), per-chat turn clocks and idle-gap evidence (`7c3c2d11`, `ccaa4872`), approval-config refresh (`ef9cb96b`), direct GUI-surface tool availability (`02289881`, `c12d2962`), safer Bot Mode group activity and message transport (`589bee99`, `8e5f55f8`, `11908256`), browser-bar controls (`0b879298`) and per-server MCP OAuth user-agent support (`a6bada23`). These are material review inputs for Aire's Profile/source authority, contextual live-work surface, truthful progress evidence, approval continuity, Desktop parity, group safety and connector reliability; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`; the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..2507bc64`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 19 August 2026 04:01 IST

Direct GitHub inspection places NousResearch Hermes `main` at `5dd15872`, 41 commits beyond the 00:03 `a77ee88c` checkpoint and 882 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially add gateway goal database warming and resume recovery (`246477a8`, `46d8cf0b`, `0cc26777`, `c69b6471`, `51013e9a`, `bdd0a79c`), batch clarification across the tool core, gateway, Desktop, TUI and CLI (`bd8b658a` through `d9f98fe0`), agent-applied Desktop layout presets and non-closable navigation chrome (`34d1aed3`, `4ac938dd`, `74f99af4`), Anthropic structured-output translation and fallback (`f709bd84`, `8f2d61e3`, `3c675019`), Bot Mode file attachments (`97b41f8c`), and MCP CIMD authentication with pinned callback-socket retention (`0b588cb3`, `5dd15872`). These are material review inputs for Aire's durable Work continuity, clarification experience, contextual live-work surface, provider reliability, group artifacts and connector authentication; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`; direct GitHub object checks found none of those unpublished heads in their recorded remotes, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..5dd15872`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 19 August 2026 00:03 IST

Direct GitHub inspection places NousResearch Hermes `main` at `a77ee88c`, 83 commits beyond the 20:05 `57f1219d` checkpoint and 841 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially add profile-owned session RPC routing and unified all-gateway sessions (`ae6578af`, `d354af5e`), atomic fail-closed profile/gateway/agent switching (`d57f94a3`, `d0e0951c`, `20ccf88a`, `053eb7aa`, `4e520f08`), rich Markdown/media/file-link preview routing (`93a2fae4`, `6a3ef223`, `cb7dd6d2`, `ced900a5`), native and custom provider-catalog semantics (`638b72f5` through `015f9990`, `f5ea3fa9` through `052fe724`), one-click plugin installation and richer plugin notifications (`73ddf666`, `359e09fd`), and Bot Mode hydration, group attachments and durable transcript-tail recovery (`d758fdbc`, `ce751ff5`, `b359db72`, `5ce09b3c`, `f8767d1e`). These are material review inputs for Aire's Profile and session authority, preview/artifact surface, provider settings, Desktop parity and orchestration continuity; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..a77ee88c`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 20:05 IST

Direct GitHub inspection places NousResearch Hermes `main` at `57f1219d`, 17 commits beyond the 16:02 `8911e2e0` checkpoint and 758 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially isolate relay client-timeout payloads (`aa09c8fe`), normalise sparse OpenAI response objects through the streaming path (`9664e386`), configure the Desktop Capabilities view against the selected profile's own gateway (`d8e23869`), add editable Bot Mode group identity (`4349cbbb`), and extend delegated-CLI refusal coverage (`9c0fcceb`, `57f1219d`). These are material review inputs for Aire's request reliability, Profile-scoped capability authority, Desktop parity and orchestration evidence; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..57f1219d`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 16:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `8911e2e0`, 19 commits beyond the 12:02 `daca3869` checkpoint and 741 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially add a Desktop in-app browser address bar and history (`5117eb7c`), browser gestures and agent-opened web links (`ccabff89`, `d48b4415`), hotkey access (`a9a4a040`), remote-agent localhost explanation (`3e9859be`), deep Settings and credential search (`eb6922a8`, `2d579af8`), loopback reach through an SSH gateway and primary-transport preview routing (`0600738f`, `956642c4`, `8911e2e0`), plus clearer TUI reference vocabulary and composition (`e69d2fda`, `c1358e45`). These are material review inputs for Aire's contextual live-work browser, Desktop parity, remote-runtime routing and mainstream settings discoverability; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..8911e2e0`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 12:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `daca3869`, 22 commits beyond the 08:02 `b95ec1cb` checkpoint and 722 commits beyond compatibility base `f0c222c`. Exact changed paths and commits add default-profile display naming across CLI, API and Desktop (`a1682376`), neighbouring-session promotion after closing the main split-pane session (`2d511f55`), multi-group/threaded/@-mention Bot Mode routing (`4bb7e491`, `9bea4391`, `6abe6ede`, `daca3869`), and canonical spillover persistence for oversized tool results (`c91681c6`, `8a770aae`). These are material review inputs for Aire's Profile identity, Desktop recovery, orchestration and artifact/result-retention contracts; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..daca3869`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 08:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `b95ec1cb`, 31 commits beyond the 04:01 `c9ce66e` checkpoint and 700 commits beyond compatibility base `f0c222c`. Exact changed paths now include Desktop connection routing and primary-backend startup, Sessions/Bots pane enforcement, gateway settings, Bot Mode group-turn handling, macOS translucency, parked-branch update guards, and delegation/process provenance. These are material review inputs for Aire's Desktop parity, connection continuity, durable work and orchestration boundaries; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..b95ec1cb`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 04:01 IST

Direct GitHub inspection now places NousResearch Hermes `main` at `c9ce66e`, 66 commits beyond the prior `66221397` checkpoint and 669 commits beyond the compatibility base `f0c222c`. The new range materially touches peer messaging, profile-scoped session persistence and profile lifecycle, virtual-model alias recovery, cron media delivery, skill security scanning, Bot Mode/settings profile scope and database event-loop safety. The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`; the observed long-running Aire and Hermes processes still predate the compatibility branches. This is a larger review input, not Aire product progress.

The original `4323c67d` range below remains the creation-time provenance for this proposal. This checkpoint's then-current range was `f0c222c..c9ce66e`; it is preserved as history and superseded for the first live test by the 08:02 checkpoint above.

## Material proposal, 17 August 2026

### Bottleneck

[[project_state/personal-agent]] records six upstream checkpoints between 20:03 on 16 August and 16:01 on 17 August. Across them, the accepted Aire candidate and local compatibility heads stayed fixed at `83e582c`, `944a03e` and `1004f3e`, while NousResearch Hermes `main` moved from `12b1f0f8` to `4323c67d` and reached 524 commits beyond the compatibility line's `f0c222c` base. Each checkpoint identifies relevant subsystems—runtime and gateway lifecycle, profiles, retained work, cron receipts, approvals, Desktop recovery, MCP and computer use—but the workflow stops at observation. Sam still has to reconstruct which upstream changes are required for the current Profile `404`, Work `502`, accepted Chat/Work/Profile contract and [[items/personal-agent-hermes-desktop-parity]], which are regression risks, and which can safely wait. Commit count alone is not a product priority, but repeated manual impact review is now a verified bottleneck.

This is distinct from [[items/ops-project-state-reconciler]]: its observation-ledger proposal makes the current state compact and auditable; this proposal converts a pinned upstream range into one bounded, decision-ready compatibility queue.

### Value category

- **Risk reduction:** catches upstream contract, recovery or security changes that could invalidate the local compatibility tranche before integration or acceptance.
- **Decision quality:** prioritises changes by named Aire blocker or accepted requirement rather than upstream volume or novelty.
- **Time reclaimed:** replaces repeated commit-range reading and subsystem reconstruction after every reconciliation checkpoint.
- **Delivery focus:** separates `REQUIRED NOW`, `REVIEW BEFORE INTEGRATION`, `MONITOR` and `NOT RELEVANT TO CURRENT AIRE GATE` without treating upstream movement as product progress.

### Smallest live test

Run one read-only analysis over the immutable GitHub comparison range `f0c222c..78ffd71f`, using only commit metadata, changed paths and diffs plus these named Ground Zero authorities:

- [[project_state/personal-agent]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]

Group commits by consumer-facing contract rather than chronology, deduplicate merge and follow-up commits, and emit a draft queue with: exact upstream commit(s), changed path(s), affected Aire contract, current local coverage, classification, reason, required verification and explicit `UNKNOWN` fields. Limit the first test to the open Profile, Work, retained-work/receipt, session recovery, approval and gateway/runtime compatibility boundaries already named in Ground Zero. Do not fetch into or alter a local checkout, write code, integrate a commit, restart a process or drive a device.

### Evidence of success

- The receipt pins base `f0c222c`, head `78ffd71f` and the canonical 1,040-commit divergence without interpreting the count itself as urgency.
- Every `REQUIRED NOW` or `REVIEW BEFORE INTEGRATION` row binds to at least one immutable upstream commit and changed path, one current Aire blocker or accepted requirement, and one explicit verification gate.
- The queue preserves `83e582c` as the physically startup-verified source of truth and keeps `944a03e` and `1004f3e` classified as unintegrated and unaccepted.
- Profile `404`, Work `502`, Work Receipt, fresh streaming, icon and accessibility gaps remain open unless direct evidence closes them.
- An independent reviewer can reproduce the classifications and finds no current requirement omitted, no superseded requirement enforced and no upstream-only feature promoted as Aire progress.
- Re-running the same pinned range produces a byte-identical queue and no new alert; only a changed upstream head or changed Ground Zero requirement can open a new review delta.

### Downside and failure mode

Path and commit-message heuristics can miss semantic API changes, over-rank noisy upstream work or under-rank a security or lifecycle regression. A large queue could also distract from repairing the already-known Profile and Work failures. Keep the scope to named Aire contracts, bind findings to exact diffs, cap `REQUIRED NOW` to changes with a direct current blocker or acceptance impact, and return `UNKNOWN` when the evidence is insufficient. The queue recommends review order; it never certifies compatibility.

### Approval boundary

Automation may read immutable GitHub metadata and diffs, already-present Git objects and the named Ground Zero notes, then write a draft compatibility-impact receipt. It may not fetch into or modify a local repository, create or switch a branch, cherry-pick, merge, rebase, edit tests or source, restart or reload a runtime, change configuration or routes, push, deploy, publish, drive the iPhone, promote a candidate or close an acceptance gap. Sam approves every integration and release action; immutable independent review and rendered-device acceptance remain separate gates.

### What it replaces

It replaces ad hoc reading of hundreds of upstream commits and repeated “what changed that matters to Aire?” reconstruction after four-hour reconciler runs. It does **not** replace [[items/ops-project-state-reconciler]], its observation ledger or source-custody manifest, [[items/ops-graph-engineering-pilot]], [[items/personal-agent-hermes-desktop-parity]], code review, integration work, tests, runtime verification or physical-device acceptance.

### Provenance

Grounded in the 16–18 August live reconciliations in [[project_state/personal-agent]], the unintegrated compatibility boundary in [[items/personal-agent-hermes-desktop-parity]] and [[companies/personal-agent]], the runtime-first sequence in [[decisions/2026-08-06-personal-agent-runtime-first-sequence]], the accepted Chat/Work/Profile contract in [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]], and the canonical authority boundary in [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]. It also operationalises the earlier evidence rule that a Hermes update should be mapped to a named bottleneck rather than adopted merely to reduce commit lag.

## Connected vault notes

- [[context/ops-automation-moc]] — operations automation hub
- [[items/_Index]] — portfolio item queue
- [[items/ops-project-state-reconciler]] — source observations and change-only projection
- [[items/ops-graph-engineering-pilot]] — independent evidence and review pattern
- [[items/personal-agent-hermes-desktop-parity]] — governing capability and acceptance ledger
- [[project_state/personal-agent]] — current source, runtime and physical-device state
- [[companies/personal-agent]] — Aire company context
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]] — integration sequence
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]] — accepted product contract
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] — authority boundary

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/personal-agent]]
- [[context/dashboard]]
- [[context/ops-automation-moc]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-project-state-reconciler]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[project_state/personal-agent]]

