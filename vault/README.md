# Ground Zero vault

This folder is the seed Obsidian vault and the schema reference for the data the
app reads. In production this lives in its own private repo that you open in
Obsidian. Each markdown file is one record. Frontmatter holds the fields; the
body is free for your own notes.

Dates are quoted so YAML keeps them as strings.

## companies/

```yaml
id: openhouse-ai      # stable id, referenced by items, goals, project_state
name: OpenHouse AI
short: OpenHouse       # optional short label for tags
sector: PropTech       # optional
```

## items/  (the brief cards)

```yaml
id: oh-onboarding-cut
company_id: openhouse-ai
domain: design          # design | innovation | security | bizdev | automation
title: Cut onboarding to three screens
rationale: The grounded why, may cite a real metric.
council_note: Design pass · Effort M   # the Stage 2 verdict line
effort: M               # S | M | L
impact: 95              # higher ranks first
state: proposed         # proposed | approved | rejected | snoozed | building | pr_ready | done
pr_url:                 # set when state is pr_ready
is_one_thing: true      # surfaced at the very top
source: morning-brief 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T06:30:00Z"
updated_at: "2026-06-09T06:30:00Z"
```

## goals/

```yaml
id: oh-activation
company_id: openhouse-ai
title: Lift new-agent activation to 60%
status: active          # only active goals show
period: "2026-06"       # current month, or omit for an always-on goal
metric: Activation 48% to 60%
```

## project_state/

```yaml
id: oh
company_id: openhouse-ai
headline: One line on where the company stands now.
valid: true             # only valid state shows
updated_at: "2026-06-09T06:30:00Z"
```

## briefs/  (one per council run, named YYYY-MM-DD.md)

```yaml
date: "2026-06-09"
ran_at: "2026-06-09T06:30:00Z"
heartbeat: One sentence shown under the masthead.
```

## decisions/  (next milestone)

Written when you act on an item: `decision` of approved | rejected | snoozed |
discuss, with an optional `reason`, plus `item_id` and `created_at`.
