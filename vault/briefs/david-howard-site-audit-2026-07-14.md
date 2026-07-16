---
title: David Howard Golf — championship-week site audit
created: 2026-07-14
status: actionable
source: local v15 lean HTML inspection + official The Open leaderboard
---

# David Howard Golf — championship-week site audit

## What is already excellent

The local `davidhowardgolf-v15-lean.html` is unusually strong as a story and sponsor asset. It has a clear event frame, a rich verified David story, visual journey/timeline, Cystic Fibrosis Ireland connection, partner case, press kit, approved bios, imagery and contact routes. The canonical site in the file is `davidhowardgolf.com`.

The public address transcribed as `davidhoward.ai` did not resolve in DNS at inspection. Use and share the deployed canonical domain only after confirming it is live.

## The material gap for championship week

The inspected v15 source includes weather from Open-Meteo but no live score feed, live position, current hole, next tee time, last-updated time or official leaderboard handoff. For the week, that needs to become the first thing a supporter sees.

The official Open site has a live leaderboard and tee-time experience at `https://www.theopen.com/leaderboard`. Link to it rather than scrape or reproduce licensed shot/score data without permission.

## Highest-value changes, in order

### 1. Add a sticky “Follow David live” module above the story

Fields:
- `David Howard at The Open`
- status: `Teeing off / On course / Round complete / Next round`
- score to par and position **only when verified**
- current or final hole
- next tee time in Irish time, with date
- `Last verified: [time]`
- buttons: `Official leaderboard` and `Share David’s week`

Do this with a small manually updated data object first. Reliability and a clear timestamp beat a fragile unofficial live feed.

### 2. Add one daily round update

A compact editorial card, not a blog:

> **Round 1 — [headline]**  
> [One factual sentence on score/conditions.]  
> Next: [tee time / round status].

This gives people a reason to return and lets Sam update the story in two minutes.

### 3. Make the mobile opening screen practical

The current hero/story deserves to remain, but mobile visitors arriving from LinkedIn need live facts before the long narrative:

1. live status card;
2. next tee time;
3. share/official leaderboard links;
4. then the story.

### 4. Add a quiet follow channel

Add one non-intrusive “Get the next update” option:
- Instagram follow button, or
- WhatsApp/Telegram broadcast list only if one already exists and can be maintained.

Do not create an email funnel for a four-day event unless there is a genuine long-term plan for it.

### 5. Refine partner intent, not volume

The existing `Partner with David` section is strong. Add a single precise line:

> For championship-week or season partnerships, contact [email]. We will reply personally.

Do not add pricing or sponsor packages publicly during the week. Any real sponsor conversation should receive a concise private one-pager.

## Operational rhythm

- Before play: update tee time/status.
- During play: only update if the source is verified and someone has capacity.
- Within 20 minutes of finish: update score/position + one sentence + next step.
- Never trade accuracy for speed; mark live status with a last-updated time.

## Do not add this week

- a noisy pop-up;
- a generic newsletter form;
- an unverified “live” embed;
- sponsor logos before an actual partnership is agreed;
- multiple competing calls to action.

## Connected vault notes

- [[briefs/david-howard-open-week-linkedin-2026-07-14]] — social copy
- [[briefs/2026-07-14-morning-briefing-golf-cara]] — source context

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-14-morning-briefing-golf-cara]]
- [[briefs/david-howard-open-week-linkedin-2026-07-14]]

