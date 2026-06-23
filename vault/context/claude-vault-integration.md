---
title: Claude Vault Integration
purpose: How Claude app and Claude Desktop should use the Ground Zero vault
---

# Claude Vault Integration

This note explains how Claude app and Claude Desktop should load and use the Ground Zero vault.

## Canonical setup

- MCP server name: `ground-zero-vault`
- MCP type: filesystem
- Server root: `/Users/samdonworth/GroundZero`
- Shared vault: `vault/`
- Canonical context entry point: `vault/context/index.md`
- Fast path: `vault/context/claude-quickstart.md`

## Recommended read order

1. `GROUND_ZERO.md`
2. `vault/context/index.md`
3. `vault/context/model-pack.md`
4. `vault/people/sam-donworth.md`
5. `vault/companies/openhouse-ai.md`
6. `vault/companies/openbook.md`
7. `vault/companies/evolv-renewables.md`
8. the relevant `project_state/` note

## Write-back protocol

Write durable updates back into the vault, not into chat memory.

- Progress goes in `project_state/`
- Decisions go in `decisions/`
- Stable facts go in `companies/` or `people/`
- Tactical work goes in `items/`
- Temporary scraps go in `capture/inbox.md`

## Operating principles

- Treat the vault as the source of truth
- Preserve history instead of overwriting it
- Do not store secrets
- Use the vault to preserve context between sessions and between surfaces
- Keep Claude app and Claude Desktop aligned by reading the same notes in the same order

## Why this matters

The point of the shared vault is perfect context:

- the app can see the same state as Claude Desktop
- the same facts are available to every agent
- the same decisions are reusable across sessions
- the same company notes can be reused for OpenHouse, OpenBook, and Evolv Renewables

## If the vault is missing

If Claude does not see the vault after a config change:

1. restart Claude app or Claude Desktop
2. confirm the MCP config still points at `/Users/samdonworth/GroundZero`
3. verify the repo still contains `vault/`
4. reload `vault/context/index.md`
