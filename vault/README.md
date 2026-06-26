## Pipeline update

The Ground Zero vault is now git-backed at `sam-evolv/GroundZero`. Changes flow:

- **Obsidian Git plugin** → commits and pushes to GitHub on edit
- **Ground Zero app** → reads/writes vault via GitHub API
- **Hermes council** (6am daily cron) → reads vault, proposes items, writes back
- **Launch loop** → writes launch briefs into `vault/launches/` for the next market test
- **Claude Code** → reads vault for context, writes progress back
- **LLM wiki refiner** → turns imports and inbox scraps into linked notes and flags contradictions

## Shared context entry point

Start with `context/index.md` when a model needs cross-business context. It links the person profile, company notes, and live project state.

Test item added: `test-flow-check` — delete after confirming the flow works.
