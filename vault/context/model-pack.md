---
title: Ground Zero Model Pack
purpose: Compact context for any connected LLM
---

# Ground Zero Model Pack

Use this note when a model needs quick, high-signal context.

## Read order
1. [[context/index]]
2. [[people/sam-donworth]]
3. [[companies/openhouse-ai]]
4. [[companies/openbook]]
5. [[companies/evolv-renewables]]
6. [[project_state/oh]]
7. [[project_state/ob]]
8. [[project_state/renew]]

## Sam
- Founder of OpenHouse AI, OpenBook, and Evolv Renewables.
- Wants no-fluff help that saves time, reduces stress, and creates value.
- Works full-time, so plans should fit evenings and weekends and target near-term cash.
- Prefers voice replies only in car mode or after sending a voice note.

## Companies
### OpenHouse AI
- Core business.
- Premium proptech SaaS for handover, aftercare, and sales pipeline management.
- Current focus: stabilise production migration, close Sprint 5, keep premium quality.

### OpenBook
- SMB booking platform for Irish service businesses.
- Founder-led growth.
- Key churn lever: no-shows.
- Lead gen should focus on small local Cork businesses.

### Evolv Renewables
- Commercial rooftop renewables business.
- One install live, one in survey.
- Main pain: manual compliance reporting.

## Current operating rules
- Use separate specialist agents in separate chats where possible.
- Keep context in the git-backed Ground Zero vault, not scattered across chats.
- Do not store secrets in the vault.
- Preserve history rather than overwriting decisions.
- Keep raw external imports in `imports/` and curate the useful parts into the canonical notes.

## How to get the most leverage
- Treat the vault as the system of record, not just a note dump.
- File stable facts once, then reuse them everywhere.
- Capture decisions so they are not re-litigated.
- Keep project state current so models can work from live truth.
- Use the vault to generate briefs, plans, follow-ups, and automation triggers.

## Best entry points for models
- For broad context, start here.
- For a company-specific task, open that company note and current project state.
- For live execution, use the relevant item note.
- For Claude app or Claude Desktop setup, read [[context/claude-vault-integration]], [[context/claude-quickstart]], or [[context/claude-access-observed]].
- For a scaling / workflow question, read [[context/scaling-playbook]].
