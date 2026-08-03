---
layout: post
title: "From a contact to a conversation"
description: "Every contact becomes a conversation, more ways to import contacts, and a drastically simplified permissions model."
author: Matt Connors
---
Sign up, set up your profile - we'll even suggest what to add - and then: "...now what?"

For too long the answer was *wait for an event*. That's where Tend2Thrive earned its keep: scan, match, meet the room. But making a connection is just the start - you still have to grow it into something meaningful. So this week turned to *tending*: what a relationship becomes after you meet.

## Every contact is now a conversation

Initially, I really didn't want to build chat. Every messaging app does it better than I could, so shipping my own felt redundant - vain, even. Users asked for it; I decided I knew better and filed the feedback under "not for us."

Then *The Lean Startup* opened with a team certain nobody wanted yet another instant-messaging client. They were wrong - and not for the reason they assumed. That's the trap: rejecting a feature is easy; interrogating *why* is the work, and I'd skipped it. My objection fell apart. Chat wasn't product padding to look complete - it was the missing "now what." It solved problems I already had, and the contact-specific timeline was already the right shape. I'd just been refusing to put words in it.

Now a contact isn't a static card - it's a **thread**: your in-person sightings, private notes, and messages, in one chronological story.

- **Messaging, built in.** Once connected, you can talk - freeform, one-to-one, in the thread that already holds your history.
- **An inbox that's just your people.** An unread dot on Contacts, the latest message on every row - your address book doubles as your inbox, most-recent first.
- **Suggestions in the thread.** A profile detail someone offers you - or you offer them - shows up inline to accept or dismiss. Each side sees only its own half, so an offer never leaks back how the other person responded.
- **Blocking, done honestly.** Blocking keeps the history you share but cuts off new messages, visibility, and any future match.

## Your profile is a lanyard

The biggest rethink was how you share *yourself*. The old model stacked three privacy tiers - nobody / contacts / connections - on every field. A maze, and nobody understood what counted as a contact versus a connection. So we dropped it, and picked up a metaphor.

Now, think of your profile as a **lanyard** - the badge you wear into a room. Every field sits at one of three levels:

- **Public** - printed on the front, readable before you've even met: others at the same event, matchmaking you've opted into. Your photo, name, and headline start here, so you're recognizable.
- **On card** - handed over the moment you meet, like a business card: they scan your code, or you match.
- **Off** - private until you hand it to one person, one at a time.

<style>
.ly-fig { margin: 1.9rem auto; max-width: 20rem; font-family: system-ui, -apple-system, sans-serif; }
.ly-fig * { box-sizing: border-box; }
.ly-row { display: grid; grid-template-columns: 3.1rem 1fr; column-gap: 0.55rem; align-items: stretch; }
.ly-tag { display: flex; align-items: center; justify-content: flex-end; text-align: right; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.05em; }
.ly-tag--pub { color: #004F99; }
.ly-tag--card { color: #00BA00; }
.ly-tag--off { color: #8a94a0; }
.ly-clip { width: 54px; height: 13px; border-radius: 7px 7px 0 0; background: #004F99; position: relative; margin: 0 auto -1px; }
.ly-clip::after { content:""; position:absolute; left:50%; top:4px; transform:translateX(-50%); width:22px; height:4px; border-radius:999px; background:#fff; }
.ly-band { background:#eef4fb; border:1px solid #d3e2f0; border-left-width:4px; border-bottom:none; padding:0.85rem; display:grid; justify-items:center; gap:0.3rem; }
.ly-band--pub { border-left-color:#004F99; border-top-left-radius:12px; border-top-right-radius:12px; }
.ly-band--card { border-left-color:#00BA00; }
.ly-avatar { width:78px; height:78px; border-radius:50%; object-fit:cover; border:3px solid #fff; background:#dbe7f4 center/cover no-repeat; display:flex; align-items:center; justify-content:center; font-size:2.2rem; }
.ly-name { font-size:1.2rem; font-weight:700; color:#004F99; line-height:1.2; }
.ly-headline { font-size:0.82rem; color:#555; margin-top:-0.15rem; }
.ly-fields { width:100%; display:grid; gap:0.32rem; margin-top:0.2rem; }
.ly-field { display:flex; align-items:center; gap:0.5rem; font-size:0.8rem; min-width:0; }
.ly-field-k { flex:none; color:#555; }
.ly-field-v { flex:1; text-align:right; color:#004F99; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ly-foot { background:#00BA00; color:#fff; text-align:center; font-weight:800; font-size:0.66rem; letter-spacing:0.16em; padding:0.42rem; border:1px solid #d3e2f0; border-left:4px solid #00BA00; border-top:none; border-bottom-left-radius:12px; border-bottom-right-radius:12px; }
.ly-off { margin-top:0.55rem; }
.ly-off .ly-band { border:1px dashed #c2ccd6; border-left-width:4px; border-left-color:#b6bfc9; border-radius:10px; background:#f5f7fa; padding:0.6rem 0.85rem; justify-items:stretch; gap:0; }
.ly-off-row { display:flex; align-items:center; gap:0.5rem; font-size:0.8rem; }
.ly-off-k { color:#8a94a0; flex:none; }
.ly-off-v { flex:1; text-align:right; color:#5a6470; font-weight:700; }
.ly-cap { grid-column:2; font-size:0.68rem; color:#8a94a0; text-align:center; margin:0.35rem 0 0; font-style:italic; }
.ly-figcap { text-align:center; font-size:0.74rem; color:#555; margin-top:0.7rem; font-style:italic; line-height:1.45; }
</style>
<figure class="ly-fig">
<div class="ly-row"><span class="ly-tag ly-tag--pub">PUBLIC</span><div class="ly-clip"></div></div>
<div class="ly-row"><span class="ly-tag ly-tag--pub"></span><div class="ly-band ly-band--pub">
<div class="ly-avatar" style="overflow:hidden">
<svg viewBox="0 0 78 78" width="100%" height="100%" role="img" aria-label="Illustration of a synthetic person">
<defs>
<clipPath id="lyClip"><circle cx="39" cy="39" r="39"/></clipPath>
<linearGradient id="lyBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4fb"/><stop offset="1" stop-color="#cfe0f1"/></linearGradient>
</defs>
<g clip-path="url(#lyClip)">
<rect width="78" height="78" fill="url(#lyBg)"/>
<path d="M10 78 C12 60 25 53 39 53 C53 53 66 60 68 78 Z" fill="#004F99"/>
<path d="M33 55 L39 62 L45 55" fill="none" stroke="#003D75" stroke-width="1.5" stroke-linejoin="round"/>
<rect x="34" y="43" width="10" height="11" rx="4" fill="#e7cdb9"/>
<ellipse cx="39" cy="46" rx="8" ry="3" fill="#d8b79f" opacity="0.5"/>
<ellipse cx="39" cy="30" rx="15" ry="17" fill="#e9cfba"/>
<path d="M18 64 C15 54 15 44 18 34 C13 -3 65 -3 60 34 C63 44 63 54 60 64 C58 61 55 60 52 57 C53 48 52 40 49 33 C49 24 45 20 39 20 C33 20 29 24 29 33 C26 40 25 48 26 57 C23 60 20 61 18 64 Z" fill="#dcc07a"/>
<path d="M57 36 C59 48 58 56 55 61" fill="none" stroke="#c9a94f" stroke-width="0.8" opacity="0.4"/>
<path d="M21 36 C19 48 20 56 23 61" fill="none" stroke="#c9a94f" stroke-width="0.8" opacity="0.4"/>
<path d="M40 9 C31 9 26 16 27 25" fill="none" stroke="#efd79a" stroke-width="0.8" opacity="0.55"/>
<path d="M28.4 25.6 q2.8 -1.6 5.4 0" fill="none" stroke="#b89347" stroke-width="1.2" stroke-linecap="round"/>
<path d="M44.2 25.6 q2.8 -1.6 5.4 0" fill="none" stroke="#b89347" stroke-width="1.2" stroke-linecap="round"/>
<circle cx="33" cy="30" r="3" fill="#ff3b30" opacity="0.3"/>
<circle cx="45" cy="30" r="3" fill="#ff3b30" opacity="0.3"/>
<ellipse cx="33" cy="30" rx="3.2" ry="2.2" fill="#fff"/>
<ellipse cx="45" cy="30" rx="3.2" ry="2.2" fill="#fff"/>
<circle cx="33" cy="30" r="1.9" fill="#e11d0f"/>
<circle cx="45" cy="30" r="1.9" fill="#e11d0f"/>
<circle cx="33" cy="30" r="0.95" fill="#3a0603"/>
<circle cx="45" cy="30" r="0.95" fill="#3a0603"/>
<circle cx="32.5" cy="29.5" r="0.5" fill="#ffd9d6" opacity="0.9"/>
<circle cx="44.5" cy="29.5" r="0.5" fill="#ffd9d6" opacity="0.9"/>
<path d="M39 31 l-1.6 5 q1.6 1 3.2 0" fill="none" stroke="#d3ac93" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34 39.6 Q39 43 44 39.6" fill="none" stroke="#c56b6b" stroke-width="1.6" stroke-linecap="round"/>
<path d="M47 27 Q49.3 34 46 40" fill="none" stroke="#cbb09b" stroke-width="0.7" opacity="0.55"/>
</g>
</svg>
</div>
<div class="ly-name">Number Six</div>
<div class="ly-headline">Human Resources &middot; Caprica</div>
</div></div>
<div class="ly-row"><span class="ly-tag ly-tag--card">ON&nbsp;CARD</span><div class="ly-band ly-band--card">
<div class="ly-fields">
<div class="ly-field"><span class="ly-field-k">📍 Location</span><span class="ly-field-v">Caprica City</span></div>
<div class="ly-field"><span class="ly-field-k">✉️ Email</span><span class="ly-field-v">six@blueskies.example</span></div>
<div class="ly-field"><span class="ly-field-k">🔗 Link</span><span class="ly-field-v">in/numbersix</span></div>
</div>
</div></div>
<div class="ly-row"><span class="ly-tag"></span><div class="ly-foot">TEND2THRIVE</div></div>
<div class="ly-row ly-off"><span class="ly-tag ly-tag--off">OFF</span><div class="ly-band">
<div class="ly-off-row"><span class="ly-off-k">🔒 Species</span><span class="ly-off-v">Cylon</span></div>
</div></div>
<div class="ly-row"><span class="ly-tag"></span><p class="ly-cap">Off never reaches the lanyard. Only she decides who ever sees it.</p></div>
</figure>

## Your whole address book, in and out

Tend2Thrive competes on **compatibility, not control**. Thus, we've made it easier to move your contacts around:

- **Import your LinkedIn connections.** Drop in a `Connections.csv` (or a vCard) and everyone comes in - even connections who hide their email, matched on name and profile.
- **Export the whole book** - one file, photos and all, anytime.
- **Every import says where it came from.** A LinkedIn batch reads as exactly that - not a thousand strangers you claim to have met - so you can see, and act on, what arrived from a third-party export.

## Meeting in the room

The cold-start problem from our first event kept getting attention too.

Now, you can indicate interest in meeting. If both people are interested, it becomes a **match**: one push, fired the instant the second mark lands. From there, you can chat with each other. And, no awkwardness if it isn't a match - the other party doesn't see anything unless the interest is mutual. 

## Trust, restated

I refreshed the **Terms and Privacy Policy** to match how the product works now: sign-in by email code or name, LinkedIn optional; the newer data sources - address-book sync, calendar ingest, messages, phone numbers - all disclosed; US-only, open signup. Everyone re-consents on their next visit. No fine print slipped in quietly.

## What's next

A month ago, a connection was a name and a place you met - and the app went quiet until the next event. Now it's a conversation with its own history, a card you control, and a record you can take anywhere. Something to do between rooms.

But a foundation isn't the point. The point is whether these become relationships people tend over time, not contacts they collected once. The next event will tell me more than any feature list can.
