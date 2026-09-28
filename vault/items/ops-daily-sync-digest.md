---
id: ops-daily-sync-digest
company_id: ground-zero
domain: ops
title: Daily ops sync digest and anomaly check
rationale: The current workflow manually checks PRs, issues, deployments, and blocked checks before writing the daily summary.
council_note: Cross-company ops pass · Effort M
effort: M
impact: 92
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T17:02:14Z"
updated_at: "2026-09-27T19:33:04+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Pulls the live ops signals, then writes a short daily digest into the vault. It should check GitHub PRs and issues, deployment health, and any blocked validation steps, then flag only the items that need human review.

## Opportunity size
High leverage across every company. This replaces a repetitive daily context sweep and makes the council more proactive. Even a modest 20 to 30 minutes saved per day compounds quickly, and the bigger win is catching regressions earlier across OpenHouse, OpenBook, and Renew.

## Technical approach
- Pull open PRs, review state, and failing checks from GitHub.
- Pull deployment health from Vercel.
- Pull any relevant Supabase or CLI status where credentials allow.
- Score anomalies with simple rules such as stale PRs, blocked checks, deployment failures, and mismatched project states.
- Write a concise Markdown digest into the vault and, when useful, update the affected project notes.

## Risks
- Too many low-signal alerts will make the digest ignored.
- API auth gaps can create blind spots if the automation is not explicit about what it could not check.
- A read-only digest is safer than an auto-remediation loop at this stage.

## Effort
M. Mostly integration and rule-setting. The first useful version is a few hours of data pulls plus Markdown output, but the anomaly logic will take iteration.

## Market timing
Timely. The broader trend is toward agentic ops tooling that compresses status reporting and highlights exceptions rather than asking humans to manually assemble a standup.

## Connects to

- [[items/oh-production-migration]] — OH production migration
- [[items/ops-pr-issue-ageing-escalator]] — OH open issues and PR triage
- [[items/ob-no-show-deposits]] — OB launch hygiene
- [[items/renew-compliance-reporting-automation]] — Renew reporting cadence
- [[items/ops-daily-report-pack]] — sister daily report
- [[items/ops-project-state-reconciler]] — state reconciliation
- [[context/ops-automation-moc]] — MOC hub
- [[goals/oh-v2-launch]] — V2 migration goal

## Material proposal, 8 September 2026 — deployment-alias custody transition receipt

Extend this existing digest with one read-only **deployment-alias custody transition receipt** rather than creating another monitor or release system.

### Bottleneck

The recurring reconciliation sweep currently notices deployment alias changes only after manually comparing Vercel state, live bytes and previously accepted receipts. On 2 September [[project_state/oh]] recorded the OpenHouse production alias resolving to a different, earlier-created Ready deployment whose immutable source SHA was not exposed. On 7 September [[project_state/heres-health-app]] recorded the Here’s Health public preview alias moving away from independently accepted `dpl_GeDQdf2EPTTeDNccui5uggNn7R5F` to unbound Ready `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx`; the live root hash also stopped matching accepted candidate `49f19d44…`. In both cases Vercel availability stayed green while source custody or acceptance became unknown. This is a verified cross-project transition pattern, not a request for deployment automation.

### Value category

- **Risk reduction:** prevents a healthy HTTP response or Vercel `Ready` state being mistaken for an accepted release.
- **Decision quality:** makes alias identity, immutable source binding, live-byte identity and acceptance state separate, reviewable facts.
- **Time reclaimed:** replaces manual comparison of Vercel inspection output, content hashes and prior release notes on every unchanged sweep.

### Smallest live test

Replay the two recorded transitions above as fixed fixtures, then perform one read-only check of the current OpenHouse production alias and Here’s Health preview alias. For each alias, emit a compact receipt containing the alias, resolved deployment ID, observation time, HTTP status, bounded non-secret content identity, exposed immutable source identity or `UNKNOWN`, matching accepted receipt or `NONE`, prior observed binding, and terminal classification `UNCHANGED`, `CHANGED-BOUND`, `CHANGED-UNBOUND` or `UNAVAILABLE`. Deliver an alert only when the classification or bound deployment identity changes. Do not deploy, move an alias, fetch source bodies, access secrets or promote acceptance.

### Evidence of success

- The fixture replay classifies the 2 September OpenHouse move and 7 September Here’s Health move as transitions, preserving `UNKNOWN` where Vercel exposes no immutable source.
- The Here’s Health fixture returns `CHANGED-UNBOUND` because deployment identity and live-byte hash differ from the accepted receipt; HTTP `200` and `Ready` do not change that result.
- An unchanged second run emits a byte-stable receipt and no human-facing alert.
- A manual comparison with Vercel inspection, direct root readback and the named Ground Zero receipts finds no unsupported binding or acceptance claim.
- The output can feed the release receipt assembler in [[items/ops-graph-engineering-pilot]] without duplicating its candidate-level acceptance judgement.

### Downside

Dynamic pages can make whole-response hashes noisy, provider metadata may omit source identity, and an alert can become false reassurance if it checks only one route. Keep the first test to the two named aliases and stable, bounded identity signals; preserve `UNKNOWN`; treat content hashes as drift evidence rather than source proof; and leave rendered journeys, authenticated paths and independent acceptance outside this automation.

### Approval boundary

Automation may read public responses, read-only Vercel metadata already available to the approved workflow, prior Ground Zero receipts and non-secret hashes, then draft a transition receipt and change-only alert. It may not create or delete deployments, move aliases, change project settings, access or print credentials, push, merge, publish, contact a client, spend money, modify production or promote any candidate to accepted. Sam approves every deployment or alias mutation and every outward use of the result.

### What it replaces

It replaces repeated manual alias-to-deployment comparison and repeated “still Ready” prose when custody is unchanged. It does **not** replace [[items/ops-project-state-reconciler]], the release evidence assembler, source review, security checks, rendered/browser acceptance or Sam’s release decision.

### Provenance

Grounded in the live 2 September OpenHouse alias reconciliation in [[project_state/oh]], the live 7 September Here’s Health preview-custody regression in [[project_state/heres-health-app]], the matching studio boundary in [[project_state/donworth-studio]], and the evidence-state separation required by [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]].

## Material proposal, 16 September 2026 — change-only cron exception rollup

Extend this existing digest with one read-only **cron exception rollup**. Use Hermes's persisted job and execution state; do not add another per-job watchdog.

### Bottleneck

The scheduled-work surface now has enough jobs that material failures can stay hidden inside local delivery until someone manually runs the full cron inventory. A live read-only inventory at 18:04 IST on 16 September showed the active [[context/ground-zero-structure|Ground Zero]] retrieval canary failing for the ninth consecutive run, while the weekly private founder-journal job's last run failed first at the model provider and then at Telegram delivery. Both exceptions sat beside healthy high-frequency jobs such as the Skippy quality watchdog and daily storage guard. The comparison is currently assembled manually, and unchanged failures are not separated from new failures or recoveries.

### Value category

- **Reliability:** makes silent, repeated and delivery-layer failures visible without turning every scheduled tick into a message.
- **Decision quality:** separates `NEW_FAILURE`, `PERSISTING`, `RECOVERED`, `RUNNING_LATE` and `HEALTHY` instead of treating one last-run string as the whole state.
- **Time reclaimed:** replaces manual review of the full job table and repeated investigation of unchanged local-only failures.

### Smallest live test

Run one read-only classifier over active jobs only. Record job ID and name, schedule, delivery tier, last scheduled time, last execution state, failure stage (`SCRIPT`, `MODEL`, `DELIVERY` or `UNKNOWN`), consecutive-failure count where the live record exposes it, and a non-secret error fingerprint. Compare that bounded receipt with the immediately prior receipt and emit only new failures, material escalation, first recovery, or a running execution that exceeds its declared runtime bound. Use the current retrieval-canary and founder-journal failures as fixed positive fixtures, plus one healthy local-only job as a suppression fixture. Keep the rollup local; do not force-run any job.

### Evidence of success

- The current retrieval canary is classified `PERSISTING/SCRIPT` with nine consecutive failures, not as a new alert on every digest.
- The founder-journal receipt preserves the distinct provider and delivery failures rather than collapsing them into “cron failed”.
- A healthy high-frequency local job is omitted, and an unchanged second pass is byte-stable and emits no human-facing output.
- A simulated first successful run after either failure emits one `RECOVERED` transition, then becomes silent again.
- Manual comparison with `hermes cron list --all` and the named execution records finds no missed active failure, invented cause or exposed secret.

### Downside

Provider and network errors can be transient, old weekly failures remain relevant until the next scheduled attempt, and volatile error text can create noisy fingerprints. Normalize only stable fields; retain the original execution ID for drill-down; distinguish last-known failure from a currently broken scheduler; and never treat `HEALTHY` as proof that a job's business output is correct. If the live job state cannot establish a field, record `UNKNOWN` rather than infer it.

### Approval boundary

Automation may read persisted cron metadata, non-secret execution status and prior local rollup receipts, then write a local change-only receipt for this digest. It may not edit, pause, resume, create, delete or force-run a job; change delivery targets, schedules, prompts, models, skills or workdirs; restart gateways; expose prompt bodies or credentials; send a standalone alert; spend money; or mutate production. Sam retains approval over every cron mutation and any new user-facing delivery.

### What it replaces

It replaces manual full-table cron-health inspection and repetitive unchanged-failure prose. It does **not** replace the existing Skippy quality watchdog, storage guard, Ground Zero retrieval canary, per-job debugging, [[items/ops-project-state-reconciler]], scheduler recovery, or the deliberately scheduled daily and weekly briefings.

### Provenance

Grounded in the live read-only Hermes cron inventory at 18:04 IST on 16 September 2026, the change-only notification contract in [[context/ops-automation-moc]], and the routing/reliability incident recorded in [[decisions/2026-09-16-hermes-routing-drift-correction-and-daily-driver]]. The proposal extends the existing digest rather than creating a competing scheduler or monitor.

## Material proposal, 17 September 2026 — decision-bound Hermes routing drift transition receipt

Extend this existing digest with one read-only **decision-bound Hermes routing drift transition receipt** rather than adding another watchdog or allowing automatic config repair.

### Bottleneck

The effective Hermes route has already diverged materially from Sam's accepted choice. [[decisions/2026-09-16-hermes-routing-drift-correction-and-daily-driver]] records the 15 September failure: an OpenRouter base URL, `provider: auto` and an empty fallback chain allowed private Ground Zero work to reach training-tier or rejected routes. The model/provider path was corrected, but [[items/ops-project-state-reconciler]] then repeated the same manual safe-field readback at six checkpoints from 16 September 20:12 through 17 September 16:12 because saved `agent.reasoning_effort: xhigh` still contradicted the canonical `high`. A fresh non-secret read at 18:02 IST on 17 September again found `deepseek-v4.1-flash` via `opencode-go`, no model-level base URL and the approved Grok/GLM fallback tuples, but still found `xhigh`. The high-value problem is transition detection against the latest explicit decision, not another full config dump.

### Value category

- **Privacy and quality risk reduction:** catches recurrence of an unapproved provider, base URL, fallback or reasoning change before it silently becomes the working norm.
- **Decision quality:** separates approved saved configuration, in-flight session routing and observed per-call routing instead of treating any one as proof of the others.
- **Time reclaimed:** replaces repeated four-hour manual reads and long unchanged reconciliation prose with one change-only receipt.

### Smallest live test

Replay the recorded 15 September drift and the 16–17 September corrected snapshots as secret-free fixtures, then perform one read-only check of the current default profile. Compare only an explicit allowlist—`model.default`, `model.provider`, model-level base-URL presence, ordered provider/model fallbacks and `agent.reasoning_effort`—with a human-approved expectation bound to the latest non-superseded decision note. Emit `MATCH`, `DRIFT`, `APPROVED-CHANGE-PENDING-SNAPSHOT` or `UNKNOWN`, the changed field names, the governing note and observation time. If a current per-call receipt is available, report its provider/model separately as observed runtime evidence; never infer an in-flight switch from saved config. Alert only on first drift, material escalation, approved-baseline change or first recovery.

### Evidence of success

- The 15 September fixture returns `DRIFT` for the OpenRouter base, automatic provider selection and missing approved fallbacks without reading or printing any key.
- The current live fixture returns a partial `DRIFT`: the approved DeepSeek/OpenCode route, absent model-level base URL and Grok/GLM fallbacks match, while `xhigh` conflicts with canonical `high`.
- The superseded same-day Astra amendment is not enforced over Sam's later explicit DeepSeek correction.
- An unchanged second pass is byte-stable and emits no human-facing alert; a later approved change first requests a baseline update rather than silently treating the live config as authority.
- Manual comparison with the named decision, the safe config fields and one non-secret route receipt finds no omitted monitored field, invented cause or claim that saved configuration proves current-session routing.

### Downside

Routing decisions are prose with supersession history, some controls are session-scoped, and an intentional temporary switch could look like drift. Do not parse arbitrary prose into policy on every run. Keep a reviewed expectation bound to one exact decision revision, preserve `UNKNOWN`, show changed field names rather than secrets, and require Sam to approve any new baseline. This detects divergence; it cannot judge whether a model is effective.

### Approval boundary

Automation may read the named Ground Zero decision, the allowlisted non-secret config fields, prior local receipts and provider/model metadata from a current call receipt, then draft a local change-only transition receipt. It may not read or expose credentials, prompts or response bodies; edit configuration; switch a session; restart a gateway; change a fallback; approve its own baseline; spend money; send a standalone alert; or mutate production. Sam retains approval over every route, reasoning or baseline correction.

### What it replaces

It replaces repeated manual safe-field reads and repetitive unchanged routing-drift lines in the four-hour reconciliation. It does **not** replace [[items/ops-graph-engineering-pilot|the accepted-requirement drift check]], provider usage/cost review, model-quality evaluation, privacy incident review, [[items/ops-project-state-reconciler]], explicit `/model` session changes or Sam's routing decision.

### Provenance

Grounded in the recorded 15 September routing incident and latest explicit correction in [[decisions/2026-09-16-hermes-routing-drift-correction-and-daily-driver]], six repeated contradiction checks in [[items/ops-project-state-reconciler]], the live safe-field read at 18:02 IST on 17 September, the current custody summary in [[project_state/personal-agent]], and the approval boundaries in [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This proposal extends the existing digest rather than creating a competing monitor.

## Material proposal, 18 September 2026 — native installed-artifact custody transition receipt

Extend this existing digest with one read-only **native installed-artifact custody transition receipt**. Reuse the deployment-alias transition pattern above for allowlisted local applications; do not create an updater, installer or second acceptance system.

### Bottleneck

[[project_state/donworth-studio]] now records a second material installed-byte transition. `/Users/samdonworth/Applications/Donworth Studio.app` still reports bundle `studio.donworth.desktop` and version `0.17.0`, but its top-level mtime is `2026-09-18 19:44:27 IST`; current `app.asar` SHA-256 `488c52ddfb0cbdcf4e8457256e6f8ecce52739392257812dd85af09f20031b18` and executable SHA-256 `4fc904b4f55bcb147d1d97584afca8847ec4475ac20862ec0cc3355c1d6e3619` supersede the 17 September observed `dd8891b8…` / `36bc8b49…` tuple. Neither tuple matches the historically accepted `84d708cc…` / `f5212ea9…` installation, and no canonical receipt inspected binds the new bytes to either separately accepted office-UX or Jobs candidate. Cause, actor, approval and source lineage remain open. Later [[items/ops-project-state-reconciler]] checkpoints keep repeating the manual hash comparison because bundle name, version, mtime and availability cannot establish custody.

This is not duplicated by [[items/ops-accepted-artifact-custody-gate]], which protects accepted artifact bytes from disappearing before cleanup, or by the deployment-alias receipt above, which watches web aliases. The missing control is a change-only comparison between one allowlisted installed native bundle and exact accepted installation receipts.

### Value category

- **Risk reduction:** catches an unreviewed install-over, updater change or package substitution before an old acceptance is attributed to new bytes.
- **Decision quality:** keeps application identity, installed byte identity, accepted candidate identity and rendered user-surface acceptance as separate facts.
- **Time reclaimed:** replaces repeated manual hashing and unchanged custody prose in each reconciliation sweep.

### Smallest live test

Replay the previously accepted Donworth installation as a fixed `MATCH-ACCEPTED` fixture, then run one read-only check of the current allowlisted bundle. Emit a compact receipt containing bundle path, bundle identifier, version, observation time, bounded top-level metadata, hashes for the exact executable and `app.asar`, the matching accepted receipt or `NONE`, prior observed identity and terminal classification `UNCHANGED-ACCEPTED`, `CHANGED-BOUND`, `CHANGED-UNBOUND` or `UNAVAILABLE`. The current installation should be the positive `CHANGED-UNBOUND` fixture. Alert only when the classification or byte identity changes. Do not launch the app, traverse user data, inspect credentials, install anything or promote acceptance.

### Evidence of success

- The historical accepted fixture resolves to `UNCHANGED-ACCEPTED` only when both named component hashes match its exact receipt.
- The current live fixture resolves to `CHANGED-UNBOUND`; matching bundle ID and version do not suppress the transition.
- An unchanged second pass is byte-stable and emits no human-facing alert.
- A receipt bound to a separately accepted but not installed candidate cannot classify the current installation as accepted.
- Manual comparison with the named bundle, the current hashes and the accepted Donworth receipts finds no omitted identity change or unsupported acceptance claim.

### Downside

Native bundles can change legitimately through an approved install, operating-system metadata can be noisy, and hashing a large application too often adds I/O. Two component hashes also do not prove every resource, signature, entitlement or runtime behavior. Restrict the first test to the exact Donworth bundle and stable executable/`app.asar` paths; ignore volatile filesystem metadata for classification; preserve `UNKNOWN` when a receipt or component is unavailable; and keep code-signing, notarisation, rendered journeys, provider behavior and physical-device checks outside this control.

### Approval boundary

Automation may read the allowlisted application's non-secret bundle metadata and component bytes, compute local hashes, read prior Ground Zero and exact-artifact receipts, and draft a local change-only receipt. It may not launch, stop, modify, quarantine, sign, notarise, install, replace, delete or distribute an application; inspect user data or credentials; merge, push, deploy, spend money, contact a tester or client, or label an installation accepted. Sam retains approval over every install, update, distribution and acceptance decision.

### What it replaces

It replaces repeated manual installed-bundle hash comparisons and stale statements that a same-version application still represents an earlier accepted installation. It does **not** replace [[items/ops-accepted-artifact-custody-gate]], package/signature verification, source review, Vera's exact-artifact verdict, rendered native verification, genuine Windows testing or Sam's install and release approval.

### Provenance

Grounded in the 17 September installed-custody contradiction and exact hashes in [[project_state/donworth-studio]], the repeated unchanged readbacks in [[items/ops-project-state-reconciler]], the preserved-artifact requirement in [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]], and the distinct pre-cleanup boundary in [[items/ops-accepted-artifact-custody-gate]]. This proposal extends the existing change-only digest rather than opening a competing monitor.


## Material proposal, 20 September 2026 — embedded native-package provenance resolvability receipt

Enrich the existing **native installed-artifact custody transition receipt** with a read-only check of the package's own source declaration. This remains one change-only digest receipt, not a second updater, monitor or acceptance system.

### Bottleneck

[[project_state/donworth-studio]] now records two consecutive installed Donworth Studio replacements whose signed packages self-identify source commits that the canonical Hermes Git object store cannot resolve. Version `0.18.5` named clean local source `6ae7d23e…` on `codex/mac-reliability-20260919`; version `0.18.9` now names clean local `main` source `326edb40…`. In both cases the bundle identity, hashes and embedded metadata were extracted manually, then compared with canonical Git and the separately accepted office-UX and Jobs receipts. A signature, version, branch name or `dirty: false` flag did not establish exact source custody or independent acceptance.

The 18 September native custody proposal already detects installed-byte transitions and whether the current hashes match an accepted installation. It does not yet explain whether a changed package's embedded source claim resolves to canonical source or an exact package receipt. That missing comparison is now recurring, not hypothetical.

### Value category

- **Delivery risk reduction:** prevents signed, self-described packages from being mistaken for reproducible or accepted builds when their named source is unavailable.
- **Decision quality:** separates package identity, embedded source claim, canonical Git resolvability, exact package binding and rendered acceptance.
- **Time reclaimed:** replaces repeated manual manifest/install-stamp extraction and Git/receipt comparison after each install-over.
- **Recoverability:** surfaces missing source custody while the changed package is still present, before cleanup or another replacement removes the only inspectable evidence.

### Smallest live test

Replay the recorded `0.18.5` and `0.18.9` packages as fixed fixtures, then inspect the current allowlisted Donworth Studio bundle once without launching it. Reuse the byte identity from the existing native receipt; read only allowlisted runtime-manifest and install-stamp fields (`source commit`, `branch`, `build time`, `dirty` and `source type`); attempt to resolve the exact commit in the named canonical Git object store and named accepted receipts; and emit two additional fields:

1. `SOURCE_CLAIM_RELATION`: `RESOLVES`, `MISSING`, `AMBIGUOUS`, `NO_CLAIM` or `UNKNOWN`.
2. `EXACT_PACKAGE_BINDING`: `MATCH`, `NONE`, `MISMATCH` or `UNKNOWN`.

Alert only when package byte identity, either classification or the matching receipt changes. Do not search unrelated personal repositories, fetch an unapproved remote, launch the app, rebuild, install or promote acceptance.

### Evidence of success

- The `0.18.5` fixture preserves source claim `6ae7d23e…` and classifies it `MISSING/NONE`; the `0.18.9` fixture preserves `326edb40…` and also returns `MISSING/NONE` against the currently named canonical store and accepted receipts.
- A valid signature, matching bundle ID, plausible branch and `dirty: false` cannot change either fixture to `RESOLVES` or `MATCH`.
- A controlled positive fixture returns `RESOLVES/MATCH` only when the exact source commit exists and an exact package receipt binds the current component hashes to it.
- An unchanged second run is byte-stable and emits no human-facing alert.
- Manual comparison with the two installed-package observations, canonical Git and the named office-UX/Jobs receipts finds no invented source relation or inherited acceptance.

### Downside

A package may legitimately come from an approved ephemeral clone or a different repository, and embedded metadata can be stale or incorrect. `MISSING` therefore means unresolved custody, not fabricated provenance or unsafe code. Keep repository and metadata paths allowlisted; preserve `AMBIGUOUS` and `UNKNOWN`; do not crawl the machine; and require an exact package receipt before treating a resolvable commit as a bound build. This check cannot establish code quality, signature trust, runtime behavior or user-visible acceptance.

### Approval boundary

Automation may read the allowlisted Donworth Studio package metadata and component bytes, query the named local Git object store and prior non-secret receipts, compute classifications and draft a local change-only receipt. It may not launch, stop, modify, sign, notarise, install, replace, delete or distribute an app; fetch from an unapproved remote; search unrelated repositories or user data; copy credentials; push, merge, deploy, spend, contact a tester or client, or label the package accepted. Sam retains approval over every install, source-custody repair, release and outward use.

### What it replaces

It replaces repeated manual extraction of package source claims and repeated `commit exists?` / exact-receipt comparison after installed bytes change. It does **not** replace the 18 September native byte-transition receipt, [[items/ops-accepted-artifact-custody-gate]], the remote source-lineage receipt in [[items/ops-project-state-reconciler]], signature/notarisation verification, source review, Vera's exact-artifact judgement, rendered native verification, genuine Windows testing or Sam's install and release approval.

### Provenance

Grounded in the independently recorded `0.18.5` and `0.18.9` installed-package transitions in [[project_state/donworth-studio]], the repeated manual comparisons in [[items/ops-project-state-reconciler]], the preserved-artifact and exact-candidate requirements in [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]], and the distinct pre-cleanup retention boundary in [[items/ops-accepted-artifact-custody-gate]]. This extends the existing native custody receipt rather than creating a competing monitor.

## Material proposal, 22 September 2026 — bounded public-route anomaly confirmation

Enrich the existing **deployment-alias custody transition receipt** with a bounded, read-only confirmation packet when one public route contradicts its last stable receipt. This is an exception path inside the existing digest, not a second uptime monitor.

### Bottleneck

The recurring reconciliation sweep still has to investigate an anomalous public response by hand before it can describe the incident safely. At 04:21 IST on 22 September, the exact Empire Gym `www` root returned application HTTP `404`, 5,483 bytes and title “Donworth Studio Client Site Template”, while `/dashboard/login` remained HTTP `200`. Repeated requests later in the same bounded run returned the previously recorded `200`, 125,017-byte root at exact SHA-256 `5164666d…`; Vercel continued to bind every live alias to unchanged Ready, source-unbound deployment `dpl_7CLd…`. The 08:15 and 16:20 checkpoints then reproduced the stable `200` surface.

A one-sample alias receipt can preserve the first failure but cannot distinguish a persistent outage from contradictory edge/application behaviour. The later successful response also cannot prove a fix because no deployment changed and the cause is unknown. Manual repeat requests, control-route comparison and deployment-identity comparison were required to reach the narrower “transient inconsistency” conclusion. This is distinct from the existing alias-transition case: the alias and deployment stayed fixed while the route response changed.

### Value category

- **Reliability and risk reduction:** avoids declaring either a production outage or a repair from one response while retaining the first failure as evidence.
- **Decision quality:** separates deployment identity, per-sample route evidence, persistence and unexplained recovery.
- **Time reclaimed:** replaces manual repeat probes and hand comparison after a scheduled public-surface anomaly.
- **Notification quality:** escalates only confirmed persistence or bounded inconsistency instead of flooding Sam with every transient response.

### Smallest live test

Replay the exact 22 September Empire Gym observations as a fixed fixture, then run one read-only check of the current public root under the existing deployment-alias receipt:

1. Compare the first root response with the last stable receipt and current Vercel deployment identity.
2. Only if status or bounded content identity differs, make at most two additional root requests plus one request to the already public `/dashboard/login` control route within a two-minute confirmation window.
3. Record each observation separately: URL, time, HTTP status, byte count, bounded non-secret content hash/title, response duration, current deployment ID and exposed cache/request metadata where available.
4. Classify the packet `STABLE`, `PERSISTING`, `INCONSISTENT` or `UNKNOWN`. Mixed anomalous and baseline responses under one unchanged deployment must be `INCONSISTENT`; neither the first error nor the later baseline may be discarded.
5. Emit a change-only alert on the first `PERSISTING` or `INCONSISTENT` packet and on the first later stable packet, while retaining “cause unknown” unless a named live source establishes it.

Stop after the receipt. Do not authenticate, submit a form, open checkout, change DNS/Vercel state or attempt remediation.

### Evidence of success

- The fixed fixture preserves both the `404` and `200` root observations, the simultaneous `200` login control and unchanged `dpl_7CLd…` deployment, then returns `INCONSISTENT` rather than “outage”, “recovered” or “fixed”.
- A persistent-failure fixture cannot be hidden by retries: all samples remain visible and the packet returns `PERSISTING`.
- The current stable fixture produces a byte-stable receipt; an unchanged second run emits no additional human-facing alert.
- Manual comparison with [[project_state/ob]], the 04:21/08:15/16:20 receipts in [[items/ops-project-state-reconciler]] and read-only Vercel metadata finds no omitted sample, invented cause or acceptance claim.
- The packet can feed the existing project-state reconciler and deployment-alias receipt without creating another scheduler or production monitor.

### Downside

Retries can accidentally soften a real incident, CDN or application variation can create noisy hashes, and extra requests can trigger rate limits. Preserve every sample instead of averaging; cap the confirmation window and request count; compare only stable bounded identity signals; report cache or request metadata as observations rather than causes; and return `UNKNOWN` when deployment identity or comparable content is unavailable. This packet is sparse scheduled evidence, not an SLA, regional synthetic monitoring or proof of authenticated functionality.

### Approval boundary

Automation may issue the bounded anonymous public requests above, read existing non-secret Vercel metadata and prior Ground Zero receipts, compute hashes/classifications and draft a local change-only receipt. It may not enter credentials, submit forms, open or complete checkout, inspect customer data, create/delete a deployment, move an alias, edit DNS or project settings, restart a service, push, merge, publish, contact a client, spend money, mutate production or declare a candidate accepted. Sam retains approval over investigation, remediation, production changes and any outward incident communication.

### What it replaces

It replaces ad hoc repeat `curl`/browser probes and manual comparison of route bytes, control-route status and deployment identity after one scheduled anomaly. It does **not** replace the deployment-alias custody transition receipt, [[items/ops-project-state-reconciler]], provider observability, a real uptime/SLA service, authenticated editing or payment tests, root-cause analysis, incident response or Sam's production decisions.

### Provenance

Grounded in the exact 22 September contradictory Empire Gym observations preserved in [[project_state/ob]] and the 04:21, 08:15 and 16:20 checkpoints in [[items/ops-project-state-reconciler]]. The unchanged source-unbound deployment and later stable responses show why the existing change-only alias receipt needs a bounded temporal exception path. The evidence-state separation and consequential-action gates remain governed by [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]].

## Material proposal, 27 September 2026 — Supabase security-advisor delta receipt

Extend the existing digest with one read-only, change-only **Supabase security-advisor delta receipt** for the active OpenHouse tenant-isolation audit. This is a triage input, not a security test, remediation system or launch authority.

### Bottleneck

The recurring reconciliation sweep is manually rebuilding the same production-database posture while [[items/oh-rls-audit]] remains launch-blocking. The 24 September direct catalog checkpoint found 164 public tables with RLS enabled, but also six policies granting all authenticated users `SELECT`; it could not map the original unnamed two-table cross-tenant defect or exercise an authorised second-user path. The 26 September direct security-advisor checkpoint added 30 RLS-enabled/no-policy findings, two security-definer views, 17 mutable-search-path findings, one extension in `public`, four authenticated-executable security-definer functions and disabled leaked-password protection.

A fresh read-only live check on 27 September found exact project `mddxbilpjukwskeefakz` still `ACTIVE_HEALTHY`, every listed public table still RLS-enabled, and the same advisor category counts: 30, 2, 17, 1, 4 and 1. The repeat read was useful because it confirmed no advisor-set transition, but a person still had to recount categories and restate that advisor metadata and `rls_enabled: true` do not prove tenant isolation. This is a verified recurring evidence-comparison bottleneck on the current active OpenHouse item, not a reason to automate database changes.

### Value category

- **Security risk reduction:** makes new, removed or substituted advisor findings visible without converting a stable count into a safety claim.
- **Time reclaimed:** replaces repeated manual category counts and object-by-object comparison during the scheduled ops sweep.
- **Decision quality:** keeps provider lint, policy configuration and controlled actor-path acceptance as separate evidence layers.
- **Alert quality:** stays silent on an unchanged finding set and escalates only a real transition or a lost read boundary.

### Smallest live test

Use the 27 September live result as one fixed baseline and run one further read-only pass against the same named project:

1. Read project health, compact public-table RLS metadata and security advisors only; do not read application rows.
2. Canonicalise each finding by lint name, level, schema, object identity and function signature where present. Preserve the official remediation URL and keep counts as summaries, not identities.
3. Emit per-finding `NEW`, `RESOLVED`, `UNCHANGED` or `UNKNOWN`, plus category totals, observation time and a deterministic finding-set digest.
4. Alert only when the canonical finding set changes, a listed public table becomes RLS-disabled, the project stops being healthy, or the read becomes unavailable. An unchanged second pass writes no new human-facing alert.
5. Always retain an explicit boundary: `NO ADVISOR DELTA` is not tenant-isolation acceptance, and the original two-table actor-path test remains open.

Stop at the local receipt. Do not execute SQL, change policies, alter Auth settings or attempt remediation.

### Evidence of success

- The fixed baseline reproduces the live category totals exactly: 30 `rls_enabled_no_policy`, two `security_definer_view`, 17 `function_search_path_mutable`, one `extension_in_public`, four `authenticated_security_definer_function_executable` and one `auth_leaked_password_protection` finding.
- It preserves the two security-definer view identities and four authenticated-executable function signatures, and does not hide an object substitution behind an unchanged category total.
- A second unchanged fixture yields the same canonical finding-set digest and no additional human-facing alert; controlled add/remove fixtures each yield one exact delta.
- Missing permissions, a partial provider response or an unresolvable object returns `UNKNOWN`, never “clean”.
- Manual comparison with the live Supabase result, [[items/oh-rls-audit]] and [[project_state/oh]] finds no omitted finding, invented exploit claim or false closure of the actor-path gate.

### Downside

Provider lints can change semantics, duplicate an object, disappear after a provider update or remain stable while an exploitable application path changes. Object normalisation can also collapse overloaded functions if signatures are omitted. Bind receipts to project ID and observation time, preserve raw finding identities and signatures, classify ambiguous changes as `UNKNOWN`, and never treat advisor absence or RLS enablement as proof of safe policy behaviour. Controlled cross-user, service-layer, storage and rendered homeowner tests remain human-scoped acceptance evidence.

### Approval boundary

Automation may read the named project's health, compact table metadata, security-advisor output and prior non-secret receipts, then draft one local change-only receipt. It may not read application rows or secrets; execute SQL/RPCs; change RLS policies, grants, functions, views, extensions, Auth settings or leaked-password protection; create a branch; deploy or roll back a migration; push, merge, contact a customer, spend money, mutate production or declare the audit accepted. Sam retains approval over every remediation, production change and launch decision, and independent review remains required for the exact repaired candidate.

### What it replaces

It replaces manual advisor recounting, table-RLS status comparison and repetitive unchanged-security prose in the recurring reconciliation sweep. It does **not** replace [[items/oh-rls-audit]], [[items/ops-project-state-reconciler]], policy review, the original named two-table reproduction, controlled second-user/tenant tests, storage or service-layer checks, rendered homeowner acceptance, security review or Sam's launch approval.

### Provenance

Grounded in the 24 and 26 September direct production-database checkpoints in [[items/oh-rls-audit]] and [[project_state/oh]], then refreshed against the same live Supabase project on 27 September. The fail-closed tenant and capability boundary comes from [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]], and the change-only/no-duplicate-monitor shape extends this existing digest and [[context/ops-automation-moc]] rather than opening another scheduler.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/ai-money-patterns-2026-06]]
- [[context/automation-ideas]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[decisions/2026-09-16-hermes-routing-drift-correction-and-daily-driver]]
- [[goals/oh-v2-launch]]
- [[items/ob-no-show-deposits]]
- [[items/oh-production-migration]]
- [[items/ops-accepted-artifact-custody-gate]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-report-pack]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-index-maintenance-bot]]
- [[items/ops-meeting-followup-assembler]]
- [[items/ops-pr-issue-ageing-escalator]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]
- [[items/ops-weekly-status-pack]]
- [[items/renew-compliance-reporting-automation]]
- [[project_state/donworth-studio]]
- [[project_state/heres-health-app]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/personal-agent]]


## Recommendation
Strong candidate for a standing internal project. It is broad, cheap to run, and directly improves the quality of every other incubation pass.
