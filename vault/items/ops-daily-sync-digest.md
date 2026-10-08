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
updated_at: "2026-10-08T18:04:20+01:00"
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

## Material proposal, 30 September 2026 — consented tester update receipt

Extend the existing digest with one change-only, privacy-minimal **tester update receipt** for Donworth Desktop. It may consume an explicit receipt only after an approved client update attempt and relaunch; it is not background surveillance, a force-updater, a release mechanism or a second acceptance system.

### Bottleneck

[[project_state/donworth-studio]] verifies that the Windows x64 update feed publishes `0.18.12`, the installer is reachable and the shipped updater checks after launch and every four hours. The same live note also verifies that no per-device installed-version telemetry was found. The current fallback is therefore manual: each tester must keep the app open, wait for update readiness, quit normally, reopen and report the displayed version. A published feed and downloadable installer still do not prove that any test device installed or relaunched the target build.

This gap is distinct from the existing native installed-artifact custody receipt above, which checks one allowlisted local bundle on Sam's Mac, and from [[items/ops-accepted-artifact-custody-gate]], which protects accepted bytes before cleanup. The missing evidence is an opt-in, device-scoped acknowledgement that the running tester app observed a named version after the update/relaunch path.

### Value category

- **Release reliability:** separates “published”, “downloadable”, “installed” and “running after relaunch” for each approved test slot.
- **Founder time reclaimed:** replaces repeated one-to-one version-chasing and manual transcription during a tester rollout.
- **Decision quality:** gives Sam one bounded exception list of current, stale and unknown test slots without turning telemetry into product acceptance.
- **Support quality:** identifies whether a reported defect came from the intended build before debugging begins.

### Smallest live test

Use one consenting, already-authorised Windows x64 test device; if no such device is available, do not run the test. After Sam separately approves the client/broker change, exercise one update to the already-published `0.18.12` target and one normal relaunch. Emit a single receipt containing only an opaque test-slot identifier, OS family and architecture, prior app version if locally available, feed target, update route (`AUTO`, `MANUAL` or `UNKNOWN`), app-reported version/build after relaunch, observation time, receipt schema version and a deterministic receipt digest. Do not collect a device name, hardware serial, IP address, chat, prompt, profile, session, file path, local file content, provider credential or reusable token.

The digest may then classify the approved slot as `CURRENT`, `STALE`, `INSTALL_UNVERIFIED` or `UNKNOWN`. A feed check alone can never produce `CURRENT`. Stop after the one-device receipt and local comparison; do not contact another tester, expand collection or change the update channel.

### Evidence of success

- The receipt reaches `CURRENT` only after the running app reports `0.18.12` following the named update and relaunch path.
- The same device's visible in-app version matches the receipt for that test slot; a stale-version fixture returns `STALE`, and an unreachable or partial receipt returns `UNKNOWN` rather than success.
- A second unchanged launch is byte-stable at the canonical receipt layer and emits no additional human-facing alert.
- Inspection of the emitted fields finds none of the prohibited identifiers, user content, secrets or reusable credentials.
- Manual comparison with the live feed, the tester-visible version and [[project_state/donworth-studio]] finds no claim that publication, download or one version receipt proves genuine-Windows journey acceptance.

### Downside

Even minimal telemetry creates privacy, retention and trust obligations. Offline clients can remain `UNKNOWN`; a compromised client can misreport its version; one successful relaunch says nothing about sign-in, session continuity, feature behavior or upgrade safety. Keep the pilot opt-in and single-device, disclose the exact fields before collection, retain only the named test receipt under an approved retention rule, authenticate the receipt without storing a reusable provider secret, and preserve manual on-screen cross-checking plus independent runtime review. Do not add fingerprinting or continuous heartbeat collection to improve convenience.

### Approval boundary

This proposal authorises documentation only. Any client instrumentation, broker endpoint, database/schema change, telemetry transmission, retention policy, test-device use, tester invitation/contact or production deployment requires Sam's separate approval against an exact candidate. The workflow may not force or remotely trigger an install; capture device hardware identity, user content, profiles, sessions, files or credentials; enable a release; spend money; contact a tester or client; or mark a build accepted. Sam retains release and tester-communication control, and Vera remains the independent exact-artifact reviewer.

### What it replaces

It replaces repeated manual “keep the app open, quit, reopen and tell me the version” follow-up and the recurring ambiguity between a live update feed and an installed/running tester build. It does **not** replace signed/notarised artifact review, installer custody, genuine Windows or macOS execution, updater rollback testing, account/session-continuity checks, user-visible journey acceptance, [[items/ops-daily-sync-digest]]'s local installed-artifact receipt, Vera's verdict or Sam's release decision.

### Provenance

Grounded in the exact Windows feed and absent per-device telemetry recorded in [[project_state/donworth-studio]], the same unchanged gap retained by [[items/ops-project-state-reconciler]], the three-test-slot identity and server-side credential boundary in [[decisions/2026-08-31-donworth-private-alpha-openrouter-budgets-and-credential-boundary]], and the separate evidence states and approval gates in [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This extends the existing change-only digest and [[context/ops-automation-moc]] rather than creating another scheduler or durable context store.

## Material proposal, 2 October 2026 — privacy-request fulfilment transition receipt

Extend the existing digest with one change-only, privacy-minimal **account-deletion fulfilment receipt** for Here’s Health. It is a read-only deadline and lifecycle exception view, not an automatic deletion worker, customer-notification channel, legal-compliance claim or second scheduler.

### Bottleneck

[[project_state/heres-health-app]], [[companies/heres-health]] and [[items/heres-health-week-one-discovery-and-technical-proof]] now record one completed deletion request and a second production request still in `requested`, created `2026-10-02T08:10:56Z` and due `2026-10-30T08:10:56Z`. The live ledger's `alerted_at` and `completion_notified_at` fields are null, so it contains no recorded alert or completion-notification receipt for the open request. The recurring reconciliation has already re-read and restated this row more than once on 2 October.

The existing daily deletion-retention cron proves only that scheduled retention SQL was invoked; it does not prove that an operator saw a new request, fulfilled it, verified the deletion outcome or notified the customer. The missing workflow is a deterministic, owner-visible transition receipt that makes `NEW`, open, due, overdue and completed-but-unnotified states hard to lose inside the broader release sweep.

### Value category

- **Risk reduction:** surfaces a new request with no recorded alert receipt, or an overdue request, without treating a healthy database or running retention cron as fulfilment.
- **Client-delivery reliability:** keeps a live customer obligation visible while the paid app moves through Apple review and launch acceptance.
- **Founder time reclaimed:** replaces repeated manual deletion-ledger inspection and repetitive unchanged prose in the four-hour reconciliation.
- **Auditability:** preserves a privacy-minimal record of what state was observed, when it changed and which facts remain unverified.

### Smallest live test

Replay a sanitized two-row fixture derived from the recorded completed request and the current pending request, then perform one read-only query of the allowlisted live fields needed for classification: an opaque request digest, lifecycle status, `created_at`, `due_at`, `alerted_at` and `completion_notified_at`. Emit one local receipt with the observation time in UTC, prior observed state and one of `NEW_NO_ALERT_RECEIPT`, `OPEN`, `DUE_SOON`, `OVERDUE`, `COMPLETED_UNNOTIFIED`, `COMPLETED` or `UNKNOWN`.

For the dry run, evaluate seven-day and one-day `DUE_SOON` boundaries as receipt fields only; do not deliver either threshold until Sam approves the cadence. Stop after the fixture replay, one live read and one unchanged rerun. Do not write any ledger field, trigger deletion, send a notification or contact the client or requester.

### Evidence of success

- The recorded pending row classifies as `NEW_NO_ALERT_RECEIPT` rather than `OVERDUE`, preserves the exact 30 October due timestamp and exposes no customer identifier or request content. This does not infer whether an operator has seen it outside the ledger.
- The completed fixture distinguishes `COMPLETED_UNNOTIFIED` from `COMPLETED`; neither state is presented as proof that every underlying provider copy was erased.
- Synthetic UTC boundary cases at seven days, one day and one second after `due_at` classify deterministically, with the chosen thresholds visible in the receipt.
- A second unchanged live read produces the same canonical state and no human-facing output.
- Missing access, a schema mismatch, an invalid timestamp or an incomplete row returns `UNKNOWN` and a local exception instead of a false all-clear.
- Manual comparison with the allowlisted live fields and [[project_state/heres-health-app]] finds no unsupported fulfilment, notification, legal-compliance or launch-readiness claim.

### Downside

Deletion ledgers are privacy-sensitive, even when the alert omits direct identifiers. A noisy due-window can create alert fatigue; host clocks or timezone handling can shift a boundary; and a `completed` database status can overstate real-world deletion if downstream systems were not checked. Keep the first test local, UTC-normalized, change-only and identifier-free; hash only a stable internal key with an approved local salt if row correlation is necessary; preserve `UNKNOWN`; and treat completion as a workflow state awaiting bounded operator verification, not as legal or provider-wide proof.

### Approval boundary

This proposal authorises documentation only. A later approved test may read the six allowlisted privacy-minimised metadata fields above and write a local receipt that emits no direct identifier. It may not expose personal data; mutate the request, user account or any timestamp; run deletion or retention jobs; query unrelated customer records; send email, push or chat; contact Here’s Health or the requester; change a cron or delivery target; deploy; spend money; modify production; or declare compliance, fulfilment, client acceptance or launch readiness. Sam retains approval over implementation, live alert delivery, any schema/retention change and every production or outward action.

### What it replaces

It replaces repeated manual scanning of the account-deletion ledger and repeated unchanged status prose inside [[items/ops-project-state-reconciler]]. It does **not** replace the app's account-deletion flow, the existing retention cron, operator verification across relevant systems, customer notification, privacy/legal judgement, incident handling, [[items/heres-health-week-one-discovery-and-technical-proof]], client acceptance or Sam's release decision.

### Provenance

Grounded in the 2 October direct production-ledger receipts in [[project_state/heres-health-app]], [[companies/heres-health]], [[items/heres-health-week-one-discovery-and-technical-proof]] and [[items/ops-project-state-reconciler]]. The paid-client priority and evidence boundaries come from [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]] and [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This extends [[items/ops-daily-sync-digest]] and [[context/ops-automation-moc]] rather than creating another watchdog or treating retention scheduling as fulfilment evidence.

## Material proposal, 4 October 2026 — production test-data provenance exception receipt

Extend the existing digest with one change-only, read-only **hosted rota provenance exception receipt** for Here’s Health. It is a narrow evidence view for synthetic markers and unknown row provenance in the production project, not a data classifier, cleanup worker, migration tool or client-data authority.

### Bottleneck

[[project_state/heres-health-app]], [[companies/heres-health]], [[items/heres-health-week-one-discovery-and-technical-proof]] and [[items/ops-project-state-reconciler]] record a verified transition from six empty hosted `rota_*` tables on 3 October to one tenant at revision 7, one employee identity, five entities, one audit row, two completed-request rows and two version-6 conflict scopes later that day. One scope explicitly names `location-week:synthetic-test-site:2026-10-05`. The same state was manually re-read and restated across the 3 October 20:16 and 4 October 00:15, 04:15, 08:19 and 16:17 reconciliation checkpoints.

A matching source candidate now exists in draft PR #6, but no inspected deployment receipt binds the hosted schema or rows to exact PR head `f81f1c63…`; actor, approval and test-versus-client-data provenance remain open, and submitted build 8 predates the rota tranche. The recurring sweep can detect counts and an obvious synthetic marker, but it cannot safely infer that every row is test data, that any row is client data, or that source existence explains the hosted mutation. The missing workflow is a deterministic exception receipt that preserves those distinctions and stays silent when the bounded snapshot is unchanged.

### Value category

- **Production data-integrity risk reduction:** keeps an explicit synthetic marker or unknown provenance visible without silently treating it as harmless test data or accepted client data.
- **Release and client-delivery reliability:** prevents hosted rota activity from being mistaken for source-bound, device-tested or client-accepted functionality.
- **Founder time reclaimed:** replaces repeated manual count and scope-string comparison inside the four-hour reconciliation.
- **Auditability:** records when row classes, counts, revisions, versions or explicit synthetic markers first changed, while keeping source binding and actor/approval separate.

### Smallest live test

Replay one sanitized fixture from the already-recorded empty-to-populated transition, then perform one read-only query limited to the six `rota_*` table counts plus the non-personal metadata already used by the reconciliation: tenant revision, entity/document type, conflict-scope key and conflict-scope version. Do not read employee identity values, document bodies, schedule content, personal fields or unrelated rows.

Emit one local receipt with observation time, prior aggregate digest, current aggregate digest, `SOURCE_BINDING` as `BOUND`, `UNBOUND` or `UNKNOWN`, and per-observation provenance as `EXPLICIT_SYNTHETIC_MARKER`, `NO_SYNTHETIC_MARKER` or `UNKNOWN`. `NO_SYNTHETIC_MARKER` must never be promoted to client provenance. The terminal state is `HOLD` whenever an explicit synthetic marker appears in the production project, row provenance is unknown, or source binding is not proven; otherwise it remains `UNKNOWN` until an approved data owner supplies a stronger provenance receipt. Stop after one live read and one unchanged rerun. Do not write, quarantine or delete anything.

### Evidence of success

- The frozen populated fixture reports the exact six table counts, revision 7, two version-6 conflict scopes and the explicit `synthetic-test-site` marker, while leaving every other row’s provenance `UNKNOWN`.
- Draft PR #6 is recorded only as a matching source candidate; without an exact deployment receipt, `SOURCE_BINDING` remains `UNKNOWN` or `UNBOUND` and the result stays `HOLD`.
- A changed count, revision, version, entity type or explicit scope marker creates one bounded delta; an unchanged second read is byte-stable at the canonical receipt layer and produces no human-facing update.
- Missing access, a schema change, an over-broad result or an unreadable field fails closed to `UNKNOWN` without reading additional data.
- Manual comparison with the allowlisted live fields and the named Ground Zero notes finds no personal data, unsupported claim that all rows are synthetic or client-owned, or claim that hosted persistence proves release, device, merchant or client acceptance.

### Downside

A scope name is only a marker, not authoritative provenance: a synthetic-looking label can be attached to real data, and a normal-looking label can still be test data. Even aggregate production reads carry confidentiality and access risk, and a noisy exception can create alert fatigue while approved testing is in progress. Keep the first test local, read-only, aggregate-first and change-only; retain `UNKNOWN`; avoid row content and identity fields; and require a separately approved data-owner or deployment receipt before reclassifying or clearing the exception.

### Approval boundary

This proposal authorises documentation only. A later approved test may read the exact allowlisted aggregate and non-personal fields above and write one local receipt. It may not inspect employee identity values or document bodies; infer customer ownership from names; mutate, quarantine, relabel or delete rows; run SQL that changes state; apply or roll back migrations; invoke functions; change PRs or deployments; notify staff or a client; contact Here’s Health; spend money; modify production; or declare source binding, data safety, release readiness, client acceptance or completion. Sam retains approval over implementation, live alert delivery, any broader query and every production or outward action.

### What it replaces

It replaces repeated manual comparison of the same hosted rota counts and the repeated `synthetic-test-site` caveat inside [[items/ops-project-state-reconciler]]. It does **not** replace the source-to-hosted parity gate in [[items/ops-graph-engineering-pilot]], deployment provenance, a data-owner review, database administration, fixture cleanup, privacy/security review, rota UI/device testing, [[items/heres-health-week-one-discovery-and-technical-proof]], client acceptance or Sam’s release and completion decisions.

### Provenance

Grounded in the empty hosted rota tables recorded on 3 October and the later populated state preserved across the 3–4 October direct Supabase reconciliation receipts in [[project_state/heres-health-app]], [[companies/heres-health]], [[items/heres-health-week-one-discovery-and-technical-proof]] and [[items/ops-project-state-reconciler]]. The matching-but-unbound PR #6 boundary comes from the 4 October exact GitHub inspection in those notes. The paid-client, approval and evidence-state boundaries come from [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]], [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]] and [[decisions/2026-08-31-agent-legible-system-design-standard]]. This extends [[items/ops-daily-sync-digest]] and [[context/ops-automation-moc]] rather than creating another scheduler or duplicating the existing source-to-hosted gate.

## Material proposal, 6 October 2026 — production checkout reconciliation transition receipt

Extend the existing digest with one change-only, read-only **production checkout reconciliation transition receipt** for Here’s Health Shopify. It is a narrow exception view over the existing reconciliation ledger, not an abandoned-cart campaign, payment worker, customer-notification channel or second scheduler.

### Bottleneck

[[project_state/heres-health-app]], [[companies/heres-health]] and [[items/ops-project-state-reconciler]] record one production Shopify checkout session created on 2 October with a provider cart and checkout URL but no native or confirmed order. Through the 6 October 11:00 UTC checkpoint, the session remained `awaiting-payment`, authoritative Shopify orders remained empty and the scheduled reconciliation heartbeat kept advancing without a business-state transition. The same unchanged row and caveat have been re-read and restated across repeated four-hour reconciliations.

A successful scheduler heartbeat proves only that reconciliation ran. It does not prove payment, order confirmation, abandonment, customer intent, fulfilment, refund, merchant acceptance or client acceptance. The current manual sweep must repeatedly compare session state, confirmation flags, authoritative-order presence and reconciliation time to preserve that boundary.

### Value category

- **Payment and launch risk reduction:** prevents a moving heartbeat or healthy endpoint from being mistaken for commerce progress.
- **Decision quality:** separates scheduler liveness, checkout-session state, authoritative order binding and merchant/provider acceptance.
- **Founder time reclaimed:** replaces repeated manual row comparison and unchanged heartbeat prose in the four-hour reconciliation.
- **Auditability:** records the first material transition or lost-read boundary without exposing customer or checkout details.

### Smallest live test

Replay a sanitized fixture from the recorded 2–6 October session, then perform one read-only query limited to the minimum non-customer metadata already used by the reconciliation: an opaque session digest, environment, lifecycle state, created and last-reconciled timestamps, native/confirmed booleans, presence-only flags for provider cart, checkout and order identities, and an authoritative-order match count. Do not return URLs, order IDs, contact details, addresses, basket contents or payment data.

Emit one local receipt with prior and current canonical state plus one of `AWAITING_PAYMENT`, `RECONCILING_NO_CHANGE`, `CONFIRMED_UNBOUND`, `CONFIRMED_BOUND`, `FAILED` or `UNKNOWN`. An advancing reconciliation timestamp with unchanged payment/order evidence must remain `RECONCILING_NO_CHANGE`; it must never become success. Do not invent a stale or abandoned threshold: any age-based escalation remains `UNKNOWN` until a provider- or merchant-approved expiry rule is supplied. Alert only on first observation, a material lifecycle/binding change, loss of read authority or first recovery. Stop after one live read and one unchanged rerun; do not invoke reconciliation or any provider operation.

### Evidence of success

- The frozen current fixture returns `RECONCILING_NO_CHANGE`, preserving `awaiting-payment`, no native/confirmed order and zero authoritative-order matches even when the heartbeat advances.
- A controlled confirmed-but-unmatched fixture returns `CONFIRMED_UNBOUND`; only a matching authoritative-order receipt can return `CONFIRMED_BOUND`, and neither classification claims merchant settlement or fulfilment.
- An unchanged second read is byte-stable at the canonical receipt layer and emits no new human-facing alert.
- Missing access, schema drift, an over-broad result or contradictory provider/application evidence returns `UNKNOWN` rather than success.
- Manual comparison with the allowlisted live fields and the named Ground Zero notes finds no customer data, invented abandonment claim or unsupported payment, launch or client-acceptance claim.

### Downside

Unpaid checkout sessions can be normal, intentional test traffic or abandoned without operational consequence. A scheduled heartbeat can legitimately update one timestamp forever, and presence flags cannot establish payment settlement, refunds or fulfilment. Even metadata about a production checkout is sensitive. Keep the first test local, privacy-minimal and change-only; preserve `UNKNOWN`; require a provider- or merchant-owned rule before introducing age thresholds; and leave real transaction, merchant-dashboard, physical-device and client acceptance outside this receipt.

### Approval boundary

This proposal authorises documentation only. A later approved test may read the exact allowlisted metadata above and write one local receipt. It may not read or expose customer identity, contact, address, basket, checkout URL, payment data or exact provider/order identifiers; invoke reconciliation; create, complete, cancel or expire a checkout; capture payment; fulfil or refund an order; send a reminder; contact a customer, Here’s Health or Shopify; change checkout flags, functions, cron jobs or schemas; deploy; spend money; modify production; or declare payment, merchant acceptance, client acceptance, launch readiness or completion. Sam retains approval over implementation, live alert delivery and every production or outward action.

### What it replaces

It replaces repeated manual comparison of the same checkout-session state, authoritative-order absence and advancing reconciliation heartbeat inside [[items/ops-project-state-reconciler]]. It does **not** replace the existing Shopify reconciliation job, provider webhooks, merchant dashboards, end-to-end checkout/payment/refund/fulfilment tests, [[items/heres-health-week-one-discovery-and-technical-proof]], independent release review, client acceptance or Sam’s launch and completion decisions.

### Provenance

Grounded in the production Shopify session first recorded on 2 October and the repeated unchanged readbacks through 6 October in [[project_state/heres-health-app]], [[companies/heres-health]] and [[items/ops-project-state-reconciler]]. The paying-client priority and evidence boundaries come from [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]] and [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This extends [[items/ops-daily-sync-digest]] and [[context/ops-automation-moc]] rather than creating another scheduler or commerce system.

## Material proposal, 8 October 2026 — Square-event backlog and retention-outcome receipt

Extend the existing digest with one change-only, read-only **Square-event backlog and retention-outcome receipt** for Here’s Health. It is an evidence view over the existing event ledger, source-backed retention migration and scheduled job, not another webhook processor, retention worker, support dashboard or commerce monitor.

### Bottleneck

[[project_state/heres-health-app]] records 120,940 processed production Square-event rows at the 7 October 20:18 IST cutoff, together with hosted migration `20261007173613 square_event_retention` and active `square-event-retention` and `cafe-notification-retention` cron jobs. [[items/ops-project-state-reconciler]] then recorded the production Square-event count increasing by 52 rows and later by another 2,197 rows to 123,137 while every observed row remained processed. Those are normal operational transitions, not payment, order, retention or launch acceptance, but the four-hour reconciliation still has to re-read and restate the count and “all processed” caveat.

The current evidence proves that a source-backed retention migration exists, the scheduled job is active and the sampled rows were processed. It does not prove that the cron command remains bound to the inspected policy, that scheduled executions succeeded, that rows beyond the policy cutoff were removed, or that a newly unprocessed backlog would be surfaced. Total-row growth alone cannot distinguish healthy traffic from a failed retention outcome.

### Value category

- **Reliability and incident detection:** surfaces a real unprocessed backlog, failed scheduled execution, policy-binding loss or overdue retained rows without treating ordinary processed traffic as an incident.
- **Privacy and data-lifecycle risk reduction:** tests whether the already-approved retention mechanism is producing its defined outcome without changing the retention policy or deleting data itself.
- **Founder time reclaimed:** replaces repeated manual aggregate reads and routine event-count prose in the four-hour reconciliation.
- **Decision quality:** keeps webhook processing, retention-job liveness, retention effectiveness and payment/order acceptance as separate evidence states.

### Smallest live test

First bind the exact hosted migration definition and active cron command to the inspected source-backed retention policy; if the binding or policy cutoff cannot be established, stop at `POLICY_UNBOUND`. Replay a sanitized aggregate fixture from the recorded 120,940-to-123,137 transition, then perform one read-only aggregate before and after one naturally scheduled retention run. Limit the live read to total, processed and unprocessed counts; oldest and newest timestamps by processing state; count of processed rows older than the source-defined cutoff; and the latest bounded cron execution status and timestamps. Do not read event payloads, customer/order identifiers, signatures or payment data, and do not force-run the job.

Emit one local receipt with policy/source binding, prior and current aggregate digests, scheduled-run outcome and one terminal classification: `PROCESSED_GROWTH`, `HEALTHY_RETENTION`, `BACKLOG`, `RETENTION_MISS`, `JOB_FAILED`, `POLICY_UNBOUND` or `UNKNOWN`. Alert only on first backlog, first retention miss or job failure, policy-binding loss, access loss, or first recovery. An increasing total with zero unprocessed rows must remain `PROCESSED_GROWTH` until a completed scheduled cycle proves the policy-defined retention outcome; it must not become payment, order or launch evidence.

### Evidence of success

- The frozen 120,940-to-123,137 fixture classifies as `PROCESSED_GROWTH`, not an incident or commerce transition, while preserving that every observed row was processed.
- `HEALTHY_RETENTION` is emitted only when the hosted policy and cron command are bound, the naturally scheduled execution succeeded, the source-defined cutoff can be evaluated and no processed row remains beyond it after the run.
- A single unprocessed row, a failed scheduled execution, a row beyond the bound cutoff or a changed/unreadable policy produces the corresponding exception or `UNKNOWN`; none is silently collapsed into a healthy total count.
- A second unchanged aggregate produces a byte-stable canonical state and no human-facing update.
- Manual comparison with the allowlisted aggregates, hosted migration/cron metadata and the named Ground Zero receipts finds no event payload, customer data, unsupported deletion claim or payment/order/launch claim.

### Downside

Aggregate health can hide duplicate, out-of-order or semantically incorrect events, and a successful cron status can still conceal a policy mistake. Reads around a scheduled run can race with live traffic, while aggressive retention can remove useful forensic evidence. Keep the first test aggregate-only, UTC-normalized, naturally scheduled and change-only; derive the cutoff from the bound policy rather than inventing one; preserve `UNKNOWN`; and never use this receipt to authorize shorter retention, data deletion or a support/compliance claim.

### Approval boundary

This proposal authorises documentation only. A later approved test may read the exact allowlisted aggregates and hosted migration/cron metadata above and write one local receipt. It may not read event payloads, identifiers, signatures, customer/order/payment data or unrelated rows; invoke, pause or reschedule a cron; change retention SQL or policy; delete or replay events; invoke webhooks or provider APIs; mutate a database; notify staff or a client; contact Here’s Health or Square; deploy; spend money; modify production; or declare privacy compliance, payment, merchant acceptance, client acceptance, launch readiness or completion. Sam retains approval over implementation, live alert delivery, any broader query and every production or outward action.

### What it replaces

It replaces repeated manual comparison of processed production Square-event counts and repeated “retention cron active” prose inside [[items/ops-project-state-reconciler]]. It does **not** replace the existing webhook processor or retention job, the commerce-integrity tests in [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]], source-to-hosted parity review, merchant dashboards, end-to-end payment/refund/fulfilment testing, incident response, privacy/legal judgement, client acceptance or Sam’s launch and completion decisions.

### Provenance

Grounded in the 7 October hosted migration, active retention jobs and 120,940 processed production Square-event rows in [[project_state/heres-health-app]] and [[companies/heres-health]], plus the repeated 8 October count-only transitions to 123,137 in [[items/ops-project-state-reconciler]]. The webhook duplicate/out-of-order and bounded recovery context comes from [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]]. The paid-client and evidence-state boundaries come from [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]] and [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This extends [[items/ops-daily-sync-digest]] and [[context/ops-automation-moc]] rather than creating another scheduler or durable operational store.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/ai-money-patterns-2026-06]]
- [[companies/heres-health]]
- [[context/automation-ideas]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-08-31-donworth-private-alpha-openrouter-budgets-and-credential-boundary]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]]
- [[decisions/2026-09-16-hermes-routing-drift-correction-and-daily-driver]]
- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]
- [[goals/oh-v2-launch]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[items/ob-no-show-deposits]]
- [[items/oh-production-migration]]
- [[items/oh-rls-audit]]
- [[items/ops-accepted-artifact-custody-gate]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-report-pack]]
- [[items/ops-daily-sync-digest]]
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
