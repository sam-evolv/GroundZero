---
title: Hermes Community Setup Review
source: https://x.com/witcheer/status/2076717324585898343
date: 2026-07-13
---

# Hermes Community Setup Review

## Source signal

Nous community member `@witcheer` collected 70 substantive Hermes setups from 250+ replies. The common setup dimensions were model, durable memory, interface, orchestration, and the skills/MCP layer.

## Current fit

Sam’s setup already matches the high-value pattern:

- Telegram is the operating interface.
- Ground Zero is the durable, git-backed Obsidian memory layer.
- Skills and MCP servers are enabled for specialised workflows.
- Cron jobs provide the recurring review/refinement loop.
- Separate Hermes profiles support specialised work.

## Improvements applied

On 2026-07-13:

1. Migrated Hermes configuration from version 32 to 33.
2. Repaired three cron jobs that had become unusable after model/provider drift from OWL/OpenRouter:
   - **Sam Morning AI Briefing** now runs with `openai-codex/gpt-5.6-terra`, loads Ground Zero as source of truth, and uses the Hermes + Ground Zero skills.
   - **Daily AI Brief** now runs with `openai-codex/gpt-5.6-terra`, is grounded in current Ground Zero context, and writes a vault brief only for durable findings.
   - **Ground Zero — Graph Health Check** is explicitly pinned to `openai-codex/gpt-5.6-terra`, has Ground Zero context, and uses the canonical vault working directory.
3. Updated the three job prompts away from stale `~/Documents/Obsidian Vault/...` paths to `/Users/samdonworth/GroundZero/vault/...`.

## Operating principle retained

Use the vault for durable context, skills for reusable procedures, cron for narrow recurring maintenance, and the Telegram control plane for decisions. Prefer source-grounded runs over broad autonomous activity.

## Connected vault notes

- [[context/index]] — canonical shared context
- [[context/automation-ideas]] — recurring automation design
- [[context/review-workflow]] — review and briefing loop
- [[context/ground-zero-structure]] — vault filing model
- [[briefs/2026-07-13-hermes-community-setup-review]] — this review
