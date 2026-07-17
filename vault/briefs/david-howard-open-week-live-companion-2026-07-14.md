---
title: David Howard Golf — Open Week Live Companion blueprint
created: 2026-07-14
status: proposed
---

# Outcome

Make `davidhowardgolf.ie` the best place for a supporter who cannot watch live to understand David's Open Championship week in under 30 seconds, then stay for the full story.

This is not a clone of the official leaderboard. The official board remains the source of score truth. David's site should add clarity, context, a human story and useful event navigation.

# The information hierarchy

## 1. The live now panel

Visible immediately on mobile and desktop during a round:

- current score to par, position, through, today, completed rounds;
- round state: on course / round complete / next tee time;
- last official verification time and source link;
- one-line significance in plain English, only when verified;
- stale state after two minutes without fresh verified data.

## 2. The round companion

A dedicated `#live` section below the hero:

- last five timestamped updates;
- chronological round timeline;
- hole-by-hole scorecard after official scores are available;
- David's round total, round-to-par, leaderboard leader and cut-line context;
- expandable previous rounds; no information disappears after a later round begins.

## 3. What it means

Give each factual score update a plain-English explanation. Examples, only when source data supports them:

- “Through 12 at one under — three shots inside the projected cut line.”
- “Birdie at the 8th moves David into the top 30.”
- “Round complete: 71. Next tee time is Friday at 15:48 Irish time.”

This is the layer that makes the page useful to someone who does not follow golf closely.

## 4. The human Open diary

A light editorial feed separate from official scoring:

- practice-day notes;
- a verified quote from David;
- arrival / preparation / family / caddie moments;
- one strong phone photo when appropriate;
- post-round reflection.

Every item needs a timestamp and a clear `TEAM UPDATE` label so it cannot be mistaken for official live scoring.

## 5. Watch and follow utility

- tee time in Irish/UK and US Eastern time;
- calendar button;
- official leaderboard and player-profile links;
- broadcast details;
- “next meaningful moment” card: next tee time, expected cut line timing, post-round update.

# Product surfaces

## Homepage live strip

Keep the current visual language, but add source and verification state. It is the ten-second check-in surface.

## Open Week Live Desk

A single deep-linkable destination at `/#live` or `/open-week`:

1. current state;
2. scorecard / round summary;
3. timeline;
4. what it means;
5. road diary;
6. schedule and official links;
7. David's story and CF Ireland call to action.

## Mobile sticky tracker

While someone scrolls the story, retain a slim sticky bar:

`DAVID −1 · T23 · THRU 12 · Updated 12:22`

Tap returns to the Live Desk. This makes the site usable while a supporter is in work, on transport or checking intermittently.

# Data model

Maintain two deliberately separate streams.

## Verified score state

`live.json` or a server-side equivalent:

- score, position, round, today, through, rounds, leader;
- official source URL;
- source timestamp, check timestamp, publish timestamp;
- cut-line fields only where trustworthy;
- scorecard only from an approved source;
- immutable short update history.

## Team diary state

`week.json` or an editorial CMS record:

- timestamp;
- type: `team_update`, `photo`, `quote`, `schedule`, `round_recap`;
- short text;
- optional photo/video URL and caption;
- author/source attribution.

# Reliability rules

- Never invent or infer a score from a generic PGA endpoint.
- Never display a stale score as `LIVE`.
- Source every official data item and link to the official leaderboard.
- Use a server-side, approved data worker every minute once a permitted source is available.
- Alert the operator if the feed is stale for two minutes, David cannot be matched, or the provider errors twice.
- Retain last verified data rather than showing blanks.
- All manual editorial updates are clearly labelled as team updates.

# Delivery plan

## Phase 1 — ready before the opening round

- current verified live card and stale-state work;
- last-five timeline;
- source provenance;
- polling and live weekly diary refresh;
- simple operator checklist.

## Phase 2 — full supporter companion

- sticky mobile tracker;
- scorecard / round summary;
- schedule and watching panel;
- plain-English `what it means` logic;
- share cards for WhatsApp, LinkedIn and X.

## Phase 3 — differentiator

- team road diary with photos/quotes;
- automated approved source worker, monitoring and alerting;
- post-round recap generator, manually reviewed before publication;
- permanent Open archive page after the Championship.

# Sponsor and partner benefit

A tasteful `Follow David's Open Week` experience creates a credible asset for future supporters without making the coverage feel commercial. Measurement should be limited to event visits, return visitors, outbound official-leaderboard clicks, calendar adds, sharing and CF Ireland referral clicks.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/david-howard-open-week-linkedin-2026-07-14]]

