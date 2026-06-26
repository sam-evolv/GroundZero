---
title: Claude Access Observations
purpose: Record the real access path observed while wiring Claude to the Ground Zero vault
---

# Claude Access Observations

Observed during setup:

- Claude Desktop is configured to use the `ground-zero-vault` filesystem MCP server
- The server root is `/Users/samdonworth/GroundZero`
- The shared vault lives in `vault/`
- Claude app access may vary by surface and may fall back to the Mac bridge in some sessions

## What to trust

- Ground Zero vault notes are the source of truth
- `vault/context/index.md` is the main context entry point
- `vault/context/model-pack.md` is the compact route
- `vault/context/claude-quickstart.md` is the fastest route

## Naming check

The vault currently uses **Evolv Renewables** as the canonical name. If another surface says `EvolvAI`, treat that as a mismatch until confirmed and updated in the vault.

## Why this note exists

This keeps the next session from assuming the access path or company naming is already settled when it has only been observed in one setup path.

## Connected vault notes

- [[context/claude-quickstart]] — fastest path for Claude
- [[context/claude-vault-integration]] — vault integration details
- [[context/capture-workflow]] — how Claude files notes back
- [[imports/claude/openhouse-company-memory]] — what Claude reads
- [[companies/openhouse-ai]] — naming check reference

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/claude-quickstart]]
- [[context/claude-vault-integration]]
- [[context/index]]
- [[context/model-pack]]

