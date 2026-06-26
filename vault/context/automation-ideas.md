---
title: Automation Ideas
purpose: Ways to turn Ground Zero into a working system
---

# Automation Ideas

Ground Zero becomes more valuable when repeatable work is automated from the vault. This note tracks practical automations that read the live notes, generate summaries, or prompt follow-up actions. It does not replace the vault; it uses the vault as input.

## When to Use

- "what can be automated?"
- "generate a briefing"
- "keep the vault current automatically"
- "turn notes into follow-up tasks"
- "wire Ground Zero into a cron job"

## Prerequisites

- Shared context entry point: `/Users/samdonworth/GroundZero/vault/context/index.md`
- Current work notes in `project_state/`, `items/`, and `decisions/`
- Hermes cron is available when scheduled runs are needed

## How to Run

Invoke through `read_file`, `search_files`, `patch`, `write_file`, and `cronjob`.

Use vault notes as the input layer, then write the output back into the correct note type.

## Quick Reference

- daily briefing from `project_state/` + `items/`
- weekly synthesis from `goals/` + `decisions/`
- stale capture cleanup from `capture/inbox.md`
- task generation from open gaps in `project_state/`
- handoff brief into `briefs/`

## Connected vault notes

- [[context/ops-automation-moc]] — MOC hub for all ops automation items
- [[context/capture-workflow]] — input layer for automation
- [[context/review-workflow]] — daily/weekly review loop
- [[items/ops-daily-sync-digest]] — P1 daily sync
- [[items/ops-source-to-wiki-ingest]] — auto-file sources
- [[items/ops-index-maintenance-bot]] — auto-maintain index
- [[briefs/wiki-refiner-2026-06-26]] — actual refiner run output
- [[context/llm-wiki-pattern]] — the "why" behind auto-filing

## Procedure

1. Identify a repeatable workflow that currently needs manual review.
2. Decide which vault notes are the input source.
3. Define the output note type before automating.
4. Create a summary, task list, or brief from the live notes.
5. Write the result back into `briefs/`, `items/`, or `project_state/`.
6. If the work is recurring, move it into a cron job or a skill.

## Pitfalls

- Do not automate against stale notes.
- Do not let generated summaries replace the source notes.
- Do not create automations that write to the wrong note type.
- Do not hide important decisions inside a scheduled summary only.

## Verification

Confirm the automation reads the current `project_state/` note and writes a dated output note or task list back into the vault.
