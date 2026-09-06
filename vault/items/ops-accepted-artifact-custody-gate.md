---
id: ops-accepted-artifact-custody-gate
company_id: donworth-ai-solutions
domain: ops
title: Block cleanup when an accepted artifact lacks durable custody
rationale: An independently accepted Finder archive disappeared during worktree pruning and proved irrecoverable, forcing a distinct freeze and another independent review even though the source commit still existed.
priority: P1
effort: S
impact: 94
state: proposed
is_one_thing: true
source: Ground Zero evidence-backed automation scan 2026-09-05
created_at: "2026-09-05T18:03:00+01:00"
updated_at: "2026-09-05T18:03:00+01:00"
---

# Block cleanup when an accepted artifact lacks durable custody

## Material proposal, 5 September 2026 — accepted-artifact custody and prune gate

Add a **read-only custody check before any worktree prune, task-workspace cleanup or artifact-path retirement can proceed when a task has produced an accepted release, review or handoff artifact**. This is a retention gate for exact bytes, not another acceptance system or an automated cleanup job.

### Bottleneck

[[project_state/donworth-studio]] records that the independently accepted Finder archive `7c2ff292…` disappeared during worktree pruning. Live Donworth Studio Kanban readback for recovery task `t_b162ffe5` confirms an exact, bounded search could not recover the `316,507,465` accepted bytes or reconstruct them from surviving inputs. A distinct `316,508,688`-byte archive, `b7d9816c…`, then required a new freeze and independent Vera review in `t_ee20c075`; it could not inherit the lost artifact's acceptance.

The same live task system also shows why receipt metadata alone is insufficient. The replacement archive is still named inside its delivery worktree, while Vera's durable task artifacts are verification reports rather than the 316 MB archive itself. Separately, `t_5b8eee8b` retained complete corrected activation-pack files on disk but exposed only a truncated first attachment alongside Vera's review artifacts. These are distinct incidents with one recurring custody failure mode: exact identities are recorded, but accepted bytes can remain dependent on a prunable workspace or an incomplete attachment surface.

This is not duplicated by [[items/ops-project-state-reconciler]]: its local source-custody manifest protects Git heads and dirty worktrees, but explicitly does not replace artifact retention. It is also downstream of [[items/ops-graph-engineering-pilot]], which assembles evidence receipts but does not prove the referenced bytes will survive cleanup.

### Value category

- **Delivery reliability and risk reduction:** prevents an accepted candidate from becoming unverifiable or forcing a non-identical rebuild after cleanup.
- **Time and model cost reclaimed:** avoids artifact recovery searches, graph repair, refreezing and repeated independent review caused only by missing bytes.
- **Decision quality:** distinguishes “the hash is recorded” from “the exact artifact is still recoverable from a named durable location”.
- **Agent legibility:** gives a fresh worker one explicit custody state and one permitted next action before any destructive housekeeping.

### Smallest live test

Run one read-only custody scan against the currently accepted replacement Finder freeze `b7d9816c…` and its Vera receipt before any further cleanup:

1. Bind the task, source commit/tree, artifact path, byte count and full SHA-256 from the live task receipt.
2. Enumerate only named custody locations: the producing worktree, task artifact/attachment records and any explicitly designated non-worktree artifact store. Do not crawl unrelated personal files.
3. Recompute the full hash and size for every located copy and classify each location as `PRUNABLE_WORKSPACE`, `TASK_ATTACHMENT`, `DESIGNATED_DURABLE_STORE`, `MISSING` or `UNKNOWN`.
4. Emit `HOLD` if no matching copy exists outside a prunable workspace, if attachment metadata is truncated/incomplete, or if any path or digest disagrees. Emit `READY_FOR_REVIEW` only when at least one exact matching copy exists in a named non-prunable location and the original acceptance receipt still resolves.
5. Run the same classifier against the already-lost `7c2ff292…` receipt as a fixed negative fixture; it must return `HOLD/MISSING`, never infer recoverability from the surviving source commit or hashes.

The test ends at the custody receipt. It must not copy, move, delete, prune, attach, upload, rebuild or refreeze anything.

### Evidence of success

- The scanner independently reproduces `b7d9816c…` and `316,508,688` bytes at every matching live location and reports whether any copy is outside the prunable worktree.
- The lost `7c2ff292…` fixture deterministically returns `HOLD/MISSING` despite its recorded commit, tree and digest.
- A receipt-only fixture and a deliberately truncated attachment fixture cannot return `READY_FOR_REVIEW`.
- A second unchanged run is byte-identical; any task, artifact path, size, hash, acceptance verdict or custody-location change invalidates the receipt.
- Manual comparison with the named Kanban task, attachment listing and exact filesystem paths finds no omitted matching copy or unsupported durable-custody claim.
- No cleanup lane is released by the automation itself; Sam can review one bounded exception list and decide whether to preserve, relocate or retire the artifact.

### Downside and failure mode

The gate adds storage and review friction and can hold intentional cleanup when a large artifact cannot fit the task attachment surface. Two paths on one disk are not a disaster-recovery backup, and a copied file is not durable merely because it sits outside a worktree. A stale allowlist could also bless another temporary directory. Keep location classes explicit, require full-byte hash verification, disclose whether custody is same-disk or independently backed up, expire receipts on any drift and return `UNKNOWN` when retention policy is not defined. Do not solve capacity pressure by silently compressing, chunking or uploading client artifacts.

### Approval boundary

Automation may read named non-secret task receipts, attachment metadata and exact artifact paths; recompute size/hash; classify custody; and draft `HOLD`, `READY_FOR_REVIEW` or `UNKNOWN`. It may not copy, move, delete, prune, attach, upload, rebuild, refreeze, change retention settings, create cloud storage, spend, expose client material, mutate Kanban state or promote acceptance. Sam approves every preservation destination, cleanup action, upload, spend and retirement of accepted bytes. Forge remains the implementation owner and Vera remains the independent acceptance owner for any future gate.

### What it replaces

It replaces ad hoc post-loss searches, manual checking of worktree and attachment paths, non-identical refreezes and repeated independent review caused solely by artifact disappearance. It does **not** replace Git source custody, backups, acceptance receipts, [[items/ops-project-state-reconciler]], [[items/ops-graph-engineering-pilot]], Vera's exact-artifact verification or Sam's cleanup/release decisions.

### Provenance

Grounded in [[project_state/donworth-studio]] and live Donworth Studio Kanban readback of `t_b162ffe5` (accepted archive irrecoverable), `t_ee20c075` (distinct replacement freeze independently accepted without inheriting the lost identity) and `t_5b8eee8b` (complete on-disk pack plus incomplete first attachment surface). The preservation requirement is also explicit in [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]], while [[decisions/2026-08-31-agent-legible-system-design-standard]] requires recoverable failures and durable evidence. No artifact, task, worktree, attachment, repository or external system was changed during this scan.

## Connected vault notes

- [[context/ops-automation-moc]] — operations automation hub
- [[items/_Index]] — portfolio item queue
- [[project_state/donworth-studio]] — accepted-artifact loss and replacement-freeze evidence
- [[companies/donworth-ai-solutions]] — parent operating company
- [[items/ops-project-state-reconciler]] — protects unpublished Git/source custody but not artifact bytes
- [[items/ops-graph-engineering-pilot]] — evidence-receipt workflow upstream of retention
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]] — preserved checkpoint and artifact requirement
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — durable evidence and recoverable-failure standard

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/donworth-ai-solutions]]
- [[context/dashboard]]
- [[context/ops-automation-moc]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-project-state-reconciler]]
- [[project_state/donworth-studio]]

