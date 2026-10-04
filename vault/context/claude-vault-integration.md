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

## Connected vault notes

- [[context/claude-quickstart]] — quickest path
- [[context/claude-access-observed]] — access observations
- [[context/capture-workflow]] — how Claude files notes back
- [[imports/claude/openhouse-company-memory]] — what Claude reads
- [[companies/openhouse-ai]] — primary company
- [[people/sam-donworth]] — founder context
- [[decisions/ground-zero-canonical]] — vault is canonical

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

## Confirmed Claude Cowork access and large-file handling — 28 September 2026

Source: Claude Cowork session, Sam’s instruction, and direct tool checks recorded on 28 September 2026.

- Claude Cowork reached Ground Zero through the `ground-zero-vault` filesystem MCP server and exposed both read and write tools for the repository. This is a dated capability observation, not a guarantee of current access.
- `context/index.md` (about 125k characters) and `context/model-pack.md` (about 166k characters) can overflow combined tool output. Read these notes individually with bounded head/tail or sliced reads rather than using a multi-file read call.

## Known issue and fix: connector tools rejected (2026-09-28)

Symptom: `ground-zero-vault` tools failed in Claude Code sessions with `unsupported dialect "draft-07"`, or the log `~/Library/Logs/Claude/mcp-server-ground-zero-vault.log` showed `Invalid result for tools/list`.

Cause (verified by probing the server over stdio): the config ran `@modelcontextprotocol/server-filesystem` unpinned via `npx -y`. The latest release (2026.8.31) attaches draft-07 `outputSchema` to all 14 tools, which the Claude client rejects. No published version avoids both problems: 2025.3.28 sends empty `inputSchema`, 2025.7.1 to 2025.8.21 send invalid `inputSchema`, and 2025.11.25 onward send draft-07 `outputSchema`.

Fix applied: `claude_desktop_config.json` now runs `node ~/.local/share/gz-mcp/fs-proxy.mjs /Users/samdonworth/GroundZero`. The proxy spawns the real server pinned to 2026.8.31 and removes only `outputSchema` from `tools/list` results. All other traffic passes through unchanged. The previous config is saved beside the live one as `claude_desktop_config.json.bak-2026-09-28`.

Verified: after a Claude restart, the connector listed `vault/`, read `GROUND_ZERO.md`, and wrote a test file to an allowed scratch folder. Nothing in the vault was written during the test.

If it breaks again: check the proxy file still exists, that `node` is on the app PATH (`/usr/local/bin/node`), and whether a newer server release changed its schemas. Note that Claude Code sessions add their scratch folder to the connector's allowed directories, so `list_allowed_directories` shows more than `/Users/samdonworth/GroundZero`; the vault is the GroundZero path.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-09-28-cross-agent-ground-zero-continuity-proposal]]
- [[companies/openhouse-ai]]
- [[context/capture-workflow]]
- [[context/claude-access-observed]]
- [[context/claude-quickstart]]
- [[context/index]]
- [[context/learn-targets]]
- [[context/model-pack]]
- [[decisions/ground-zero-canonical]]
- [[people/sam-donworth]]

