---
title: "How to Write an Async Standup Update in Slack (With Examples)"
description: "A practical guide to writing an async standup update in Slack, with a simple format and copy-paste examples for remote developers on distributed teams."
slug: "async-standup-update-slack"
keywords:
  - "how to write an async standup update in slack"
  - "async standup update format"
  - "daily standup update slack examples"
  - "async standup template"
  - "what to write in a standup update"
  - "remote team standup on slack"
audience: "remote developers"
category: "use-case"
updated: "2026-06-29"
related:
  - "professional-slack-messages-non-native-speaker"
  - "politely-decline-request-slack"
  - "kakaotalk-business-message-etiquette"
  - "what-is-nugumi"
faq:
  - q: "How do you write an async standup update in Slack?"
    a: "Post three short parts: what you did yesterday, what you plan to do today, and any blockers. Keep each part to a line or two, name the work in plain terms, and post it at the same time each day so teammates know when to look."
  - q: "What should an async standup update include?"
    a: "Progress since your last update, your focus for today, and anything blocking you. Add a link to the ticket or PR so a reader can act without asking you a follow-up question."
  - q: "How long should a standup update be?"
    a: "Short enough to skim in ten seconds. Three to six lines is usually right. If a topic needs real discussion, post the headline in standup and move the details to a thread."
  - q: "What do I write when I made no progress?"
    a: 'Say so plainly and explain why: "No progress on the import job — I was pulled into the incident. Picking it back up today." An honest, specific update is more useful to your team than a vague one that hides the blocker.'
  - q: "How do I make my standup update sound clear in English?"
    a: "Use short declarative sentences, lead each line with the task, and avoid hedging. If English is not your first language, you can select your draft in Slack and have Nugumi rewrite it so it reads clear and natural before you post."
---

BLUF: To write an async standup update in Slack, post three short parts every day at a consistent time — what you finished since your last update, what you are working on today, and any blockers. Keep it skimmable (three to six lines), name each piece of work in plain terms, and link the ticket or PR so a teammate can act without messaging you back. The goal of a written standup is to replace a meeting: anyone should be able to read it cold, in another time zone, and know exactly where you are.

## Use the yesterday / today / blockers format

Almost every good async standup update follows the same three-part shape: **Yesterday** (what you completed), **Today** (your plan), and **Blockers** (what is slowing you down). This async standup template works because it answers the only questions a teammate actually has — are you on track, and do you need anything. Pick the labels your team uses and reuse them daily so the structure becomes invisible and the content does the work. If your team has no agreed format yet, propose this one in the channel topic so everyone posts the same shape; a shared template removes the guesswork about what to write and where it goes.

## Lead with blockers and be specific

Bury a blocker at the bottom of a wall of text and someone notices it a day too late. State blockers clearly and early, name who or what you are waiting on, and say what would unblock you: "Blocked on the staging deploy — waiting on infra to bump the memory limit." Vague lines like "still working on the API" force people to ask follow-up questions, which defeats the point of writing async. If you made no progress, say so and explain why instead of hiding it — an honest "no movement, I was pulled into the incident" is far more useful than silence. Specific beats polished every time.

## An async standup update example you can copy

Here is one of the simplest daily standup update Slack examples that covers everything above:

> **Yesterday:** Shipped the rate-limit fix (PR #482, merged). Reviewed two PRs.
> **Today:** Start the webhook retry logic (NUG-311). Pair with Sam at 2pm on the schema change.
> **Blockers:** Need the prod API key from @maria to test retries — otherwise unblocked.

Notice it reads in under ten seconds, links the ticket and PR, names a person for the blocker, and uses short declarative sentences. That is what to write in a standup update — concrete nouns, no filler.

## Keep it skimmable and consistent

Post at the same time each day, in the same channel, with the same format, so the team standup on Slack becomes something people rely on rather than hunt for. Use bold labels or bullets so the three sections are visible at a glance, and keep any deeper discussion in a thread off the main message. Consistency is what makes async standups feel like a real ritual instead of scattered status pings — many of the same habits that help you [write clear, professional Slack messages as a non-native speaker](/guides/professional-slack-messages-non-native-speaker) apply directly here.

## Write so nobody has to ask a follow-up

On a distributed team your update lands while you are asleep, so it has to stand on its own. Spell out acronyms a new teammate might not know, link every ticket and PR you mention, and replace pronouns like "it" with the actual thing. If you have to decline or push back on a request inside the same channel, do it in its own message so it does not get lost in the standup — there is a separate art to [declining a request politely on Slack](/guides/politely-decline-request-slack). The test is simple: could someone three time zones away act on this without messaging you?

## Polish it in a few seconds before you post

A standup update is read by your whole team, every day, so small tone and grammar issues add up. Before you hit enter, reread it once: does each line lead with the work, is the blocker clear, and does it sound natural? If English is not your first language, you can select your draft right inside Slack and have [Nugumi](/) rewrite it so it reads clear and professional, or explain a confusing message a teammate left — without leaving the app or pasting anything into a browser. You can [download](/download) it and try it on tomorrow's standup.
