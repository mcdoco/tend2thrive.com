---
layout: post
title: "Warming the cold start"
description: "How we made Tend2Thrive useful before an event starts, took the friction out of connecting in person, and started building the trust and safety tools a growing community needs."
author: Matt Connors
---
Last week I wrote about the cold-start problem: at our first event, there were never quite enough people active at the same moment for live matchmaking to work well. My takeaway was that Tend2Thrive has to earn its place **before** the event starts - and, I'd add, long after it ends.

So the week pushed on three things: giving people a reason to open the app before doors, stripping the friction out of connecting in the room, and making sure your network doesn't get trapped in my app once you leave it.

## Value before the doors open

This is the direct answer to last week. The room doesn't have to be full and live for the app to be worth opening.

- **Networking now opens ahead of the event.** For an event, the networking layer wakes up about **two hours before** it starts - you can browse who else is coming, mark yourself *open to networking*, and start planning who to find, all before anyone's in the room. 
- **An ephemeral account that works like a ticket.** Claim an event from an invite or a scanned QR code, and you land *inside* the app - able to see who's coming, without a full sign-up. The account dissolves after the event unless you decide to keep it. 

## Getting connected, minus the friction

The event also taught me that every extra tap between "I just met you" and "we're connected" is where people fall off. So I went hunting for those taps.

- **A code you show no longer runs out.** It used to be "spent" after three scans, which made no sense when you're showing your phone to a whole table - so within its 15-minute window, a single code now connects *any number* of people.
- **Signing up for T2T on the spot is easier now** - rather than requiring a sign-in via LinkedIn or email, we simply collect your name, and drop you into the app experience. Your account will self-destruct at the end of the day unless you opt to keep it. Since asking a user to sign up is already a favor, this lets Tend2Thrive demonstrate value before having the user do even more work to set up their profile.
- **Invite a contact by email, and you're connected the moment they accept.** For the people who weren't in the room, you can send a real invite from any contact - they click a link, it stands up their account, verifies their email, and forms a genuine connection carrying your vouch. And because you've already jotted down who they are, their new profile arrives half-built: the avatar, name, headline, and links you filed are offered back as opt-in suggestions - only ever filling in fields they've left empty, so nothing you noted can overwrite what they set. If they never accept, nothing is kept.

The theme is the same each time: get out of the way. The fewer decisions between a handshake and a saved connection, the more of them survive.

## Your network should live with you, not with me

This is the part I care about most. I've said Tend2Thrive competes on **compatibility, not control** - so this week I tried to prove it.

- **Your contacts now sync live to your iPhone and Mac.** Not a frozen export - a real [CardDAV](https://en.wikipedia.org/wiki/CardDAV) address book. When someone updates their shared profile, it updates in your phone's Contacts app. You mint a device password, paste it into Settings, and your Tend2Thrive people are just... in your phone, staying current.
- **Invite `timeline@tend2thrive.com` to any calendar event.** Add that address as a guest on a Google/Outlook/Apple calendar invite and the event lands on your Tend2Thrive timeline - and everyone else on the invite resolves into your contacts, recorded as seen with you there. Your calendar is already a record of who you met; now it feeds the one place that remembers.
- **Import and export everything as vCards.** Your whole collection moves in and out of Apple, Google, or any address book - photos and all. No lock-in, by design.

None of this makes the app "stickier" in the manipulative sense. It arguably makes it *easier* to leave. I think that's exactly why people will stay.

## Contacts & timeline enhancements

Added more ways to keep in touch with your contacts, including: 
- **Phone numbers**, at last.
- **Communities** - record which Discord and Slack servers someone belongs to; they group under their own heading on the card.

Further, the timeline now **folds a run of similar moments** - a batch of scans or adds - into one compact card instead of a long identical stack.

## For the people running events

The host side kept maturing too: a **guest Kanban board** (invited → checked in → left, with a walk-in lane) and first-class **walk-in** support for people who show up without a link.

## Safety, as the room fills up

Everything above is about lowering the barrier to entry - ephemeral accounts, connecting in one tap, no LinkedIn required. But a lower barrier means more strangers in the room, and that's exactly when trust and safety stop being optional.

So this week laid the first foundation: an **admin and moderation panel** for the platform, the ability for anyone to **flag problematic content** for review, and **account suspension** that pulls a bad actor's visibility and access entirely until a human resolves it.

## What's next

Last week's challenge was delivering value before the event. Between pre-event networking and interoperability, I think the pieces are now in place - if you can scope the room ahead of time, and your contacts and calendar already flow through Tend2Thrive, showing up with it should feel obvious. The next test is the next event. I want to see whether lowering the friction this much actually changes how many connections survive the room.
