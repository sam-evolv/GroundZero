## Pipeline update

The Ground Zero vault is now git-backed at `sam-evolv/GroundZero`. Changes flow:

- **Obsidian Git plugin** → commits and pushes to GitHub on edit
- **Ground Zero app** → reads/writes vault via GitHub API
- **Hermes council** (6am daily cron) → reads vault, proposes items, writes back
- **Claude Code** → reads vault for context, writes progress back

Test item added: `test-flow-check` — delete after confirming the flow works.
