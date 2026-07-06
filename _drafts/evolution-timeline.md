# Hello, world 

I started Tend2Thrive 3 weeks ago with the goal of making networking easier for everybody. It came from a problem of my own: I could never remember *where* I'd met someone, or when we'd last spoken. That history is inherently multi-medium - sometimes it's a coffee, sometimes it's a zoom call, sometimes it's an event. Stitching this together from the incumbent players was difficult, as most are in a war to prevent scraping and maintain their stranglehold on user-generated content. 

In contrast, I decided to be aggressively user-friendly - giving full control of data, and building capabilities through **compatibility rather than control**. Users are the producers, and I believe they'll go where they are treated best. Whether or not it's regulated, it is obvious to me that users deserve autonomy over their data, and visibility into how it is used. If they give it, they should also be able to take it away, just as easily.

AI - despite its flaws - is incredibly empowering to the end user. It's now trivially possible for everybody to build their own professional website. But what isn't as simple is getting that site in front of people, and making sure it works with theirs. Features are being commoditized by the week, so a durable moat is hard to find — but interoperability, plus a real record of who actually met whom in person, sure feels like one to me.

## Product Progress

**Week 1 — on paper.**
- Formed the company and wrote down what it was: a way to remember where you met
  someone, own your data, and work with everything else you use.
- Put up the first site and a philosophy doc. 
- The garden motif was there from the beginning, and I had some fun with the logo. 

**Week 2 — the app.**
- A real timeline — a stem growing out of a pot, one node per person you meet.
- Scan-to-remember: show your code like a digital lanyard; one scan logs *who* and
  *where*.
- Your data, your rules: per-field privacy (Nobody / Contacts / Connections), and
  one-tap deletion of everything.
- Connections you earn — mutual and verified, not a follower count.
- API keys, so your AI agent can work on your behalf.

**Week 3 — into the world.**
- Cleaned up the "contacts" capabilities, and differentiated between data you have entered for someone, versus the data from their own profile. 
- Bring your own links: email, LinkedIn, GitHub, X. 
- Branded emails, graceful invites, sanitized images — the unglamorous polish.
- Event host tools: magic links for prebuilt profiles, live matchmaking capabilities.



# hello world edits v1 by claude

Suggested tightening that keeps your voice and argument — trims the jargon, resolves
the `[rework reword next]` placeholder, and closes the logic gap in the AI/moat
paragraph. Full rewrite first, then line-by-line notes and two open questions.

## Suggested rewrite

**Hello, world.**

I started Tend2Thrive three weeks ago to make networking easier for everyone. It
came from a problem of my own: I could never remember *where* I'd met someone, or
when we'd last spoken. That history is inherently multi-medium — sometimes it's a
coffee, sometimes a Zoom call, sometimes an event. Stitching it back together from
the incumbents is nearly impossible: most of them are at war over scraping, guarding
the user-generated content we handed them in the first place.

So I decided to go the other way — aggressively user-friendly. Full control of your
data, and new capabilities built through *compatibility, not control*. Users are the
producers here, and I believe people go where they're treated best. Regulated or
not, it's obvious to me that you deserve autonomy over your data and visibility into
how it's used — and if you gave it, you should be able to take it back just as
easily.

AI, for all its flaws, is wildly empowering to the end user. It's now trivial for
anyone to spin up their own professional site. What's still hard is getting that site
in front of the right people, and making it work with everyone else's. Features are
being commoditized by the week, so a durable moat is hard to find — but
interoperability, plus a real record of who actually met whom in person, sure feels
like one to me.

## Line notes

- **"everybody" → "everyone"** (both places): smoother read; purely taste.
- **"how I met someone, and where we saw each other last" → led with *where*.** It
  matches your own hook ("where did we meet?"); "how" is vaguer and off-brand.
- **"maintain their stranglehold on user-generated content" → "guarding the
  user-generated content we handed them in the first place."** Same point, less
  jargon, and it lands the irony — they only hold it because users gave it.
- **Para 3, the `[rework reword next]`:** I resolved it by naming the two things AI
  *doesn't* commoditize — **distribution** (getting seen) and **interoperability**
  (working with others' data) — and made those the moat. NB: I also folded in "a
  real record of who met whom in person" as the specific moat; that's *my* addition,
  not in your draft — cut it if you'd rather keep the moat purely about interop.
- **Optional close** so post #1 plants the brand: end on the garden, e.g. *"That's
  the bet: grow your network like a garden — and you own the soil. You met someone
  great. Now what? Let's tend it."*

## Two open questions

1. **Is the AI/moat thesis too big for the opener?** It's a strong, standalone
   argument that drifts a little off the "remembering people" spine. It might earn
   its own post ("why this is defensible") rather than being the third paragraph of
   hello-world. Your call whether to keep it here or save it.
2. **"at war over scraping"** — punchy, but a touch combative for a first post. If
   you want it softer: *"most of them treat your data as theirs."* Keep the edge if
   the edge is the point.

---

# Evolution timeline — working notes for the catch-up post

Not a post yet. Raw, sourced material for you to hand-assemble. Everything below
is grounded in this repo's git history and the app's `../tend2thrive/CHANGELOG.md`
(and the June 18 `PHILOSOPHY.md`, now removed from the live repo but recoverable
at `git show 75c0a84:PHILOSOPHY.md`). Draft prose openings are at the bottom.

Company started **Monday, June 15, 2026**. Today is **Sunday, July 5, 2026** — the
blog launches now. So this covers **three weeks**.

---

## The seed (the constant)

Three motivations were there from the very first commit — you can read them in the
original `PHILOSOPHY.md`, so this isn't hindsight:

1. **Remember where you met someone.** A personal problem first. From PHILOSOPHY.md:
   *"Knowing when you last spoke with someone is useful. Knowing where you met them
   and when you last saw them is richer still. Tend2Thrive is the memory your
   network deserves."*
2. **Your data is yours — including deletion.** *"You can add, edit, or delete
   anything… If you want to leave entirely, you can retract. Retracting deletes
   everything: your profile, your history, your connections. You were never here."*
   Plus export via CSV, API, and agentic integrations.
3. **Work with everything, stay out of the way.** *"We don't own the medium… We are
   an aggregator and curator, not a communication platform… Our value is in what we
   surface and when — not in capturing your conversations."* Bring your LinkedIn, a
   Connections.csv, whatever.

These three never moved. Everything else is the story of finding the words and
building the thing.

---

## Timeline

### Mon, June 15 — Day one
- The company starts. (No commits yet; the first week is thinking and setup.)
- LLC formation (McDoCo). Idea refinement.

### Thu, June 18 — The founding statement goes public
- First commit: `feat: initial site` (`75c0a84`). The marketing site and a
  `PHILOSOPHY.md` land together.
- The identity is already fixed: **a Professional Relationship Manager — "a CRM for
  people, not deals."** (This was always the framing. The "CRM" line was a cutesy
  way to say PRM, never a different product.)
- Hero at this point: **"Who will you do your best work with?"**
- The June 18 site carries a *lot* of early promises, some of which later receded in
  the messaging (see "what changed" below): **dormancy tracking**, **touch cadence**
  ("a quiet nudge when it's time"), **access earned in person** via in-person
  **vouching** and scarce invites, a **waitlist** you join with LinkedIn.
- But it also already states the seed in plain sight: the **timeline** ("where you
  met, when you last spoke, private notes only you can see"), **scan a LinkedIn QR in
  the moment**, and **you control visibility / export / delete everything**.
- PHILOSOPHY.md's closing note: *"The CRM is the foundation… the natural next step is
  matchmaking."* — this is the seed of what became **events & hosts**.

### Fri, June 19 — The garden motif appears
- `feat: steps are now a plant` (`d76f2b0`). The "how it works" steps on the
  marketing site become a growing plant. **The garden/plant metaphor enters on the
  marketing site first**, before it reaches the app.

### Mon, June 22 — The app starts taking real shape
(From CHANGELOG 2026-06-22.)
- **The timeline becomes a real timeline.** A date/time gutter down the left; items
  hang off a green "stem" that grows from a small brand-blue **pot** at the base (the
  "Joined" origin). The plant motif crosses from the marketing site into the product.
- **Scan / be-scanned reworked into a digital lanyard.** "Show my code" becomes a
  badge — your photo, name, headline above your QR — so being scanned reads like a
  conference lanyard.
- **Contacts becomes a rolodex** — alphabetical, sticky letter dividers, kind badges
  (full member / provisional / LinkedIn claim).
- **Cold-signup welcome flow** for brand-new accounts, explaining discoverability.

### Tue, June 23 — Control, ownership, and agents
(From CHANGELOG 2026-06-23.)
- **A Profile settings page** consolidates avatar, display name, LinkedIn URL, and
  the full personal-access-token lifecycle.
- **Deletion capabilities** land in profile settings — the "your data is yours,
  including deletion" seed, made real.
- **Agent-friendly by design.** Documented the PAT path for AI agents; the API tells
  an LLM how to ask its human for a token; the site serves `/llms.txt`. ("Work with
  everything" extended to agents.)
- Admin API + service account for a partner app (Vybe).

### Wed, June 24 — The biggest day: your data, your rules
(From CHANGELOG 2026-06-24. This is the day the privacy model matured.)
- **Per-field visibility with three tiers — Nobody / Contacts / Connections** — set
  from Profile settings, defaulting to **Nobody**. Name, photo, city, LinkedIn,
  headline, plus per-email and per-link audience.
- **The blunt "discoverable" toggle is retired** in favor of the tiers. Being
  connectable is now *derived* from sharing your LinkedIn, not a separate switch.
- **Connections become explicit and earned** — a stored, mutual, verified link (not
  a guessed LinkedIn-URL match). "Connected" means both sides showed up.
- **Bring your own links, no lock-in** matures: multiple emails (one preferred),
  arbitrary profile links, verify GitHub/X by signing in. LinkedIn becomes the
  pinned first link, not a special section.
- **Contacts get depth** — their own emails, links, and timestamped notes; a linked
  member's shared fields merge in live and you can save down what you want to keep.
- **Growth suggestions** appear one at a time (act / snooze / dismiss) — the
  "tending" nudge, minus the guilt.

### Thu, June 25 — Polish that respects the inbox
(From CHANGELOG 2026-06-25.)
- The **email-verification message becomes branded** — blue header band, wordmark,
  serif heading, a real button, plain-text fallback. Small thing; signals care.
- **Real world — the product's own thesis, happening to us.** At **Funding
  Breakthrough Lab's "Immigrant Founders" night** in San Francisco
  (`luma.com/fblimmigrant5`) — wine, lightning pitches, and a fireside with founder
  Sharmin Ali and VC Teresa Ge — I met the person I'd **co-host an event with a week
  later**. *You meet someone great at an event… now what?* This is exactly that,
  playing out for us while we were still building the thing that answers it.
  (Date inferred as June 25 from "a week before July 2" — correct if off.)

### Fri, June 26 — Frame, grace, and safety
(From CHANGELOG 2026-06-26.)
- **Signed-out screens now sit in the app's frame** (shared `PublicShell`) — chrome
  is consistent before and after signing in.
- **Expired invites are handled gracefully** — no dead-end 410; the page still names
  the inviter: *"You'll have to run into <name> again to connect in-person."*
- **Events can take an image by URL**, downloaded + **sanitized** (SSRF-guarded,
  re-encoded through sharp to strip EXIF/payloads). All images now pass one
  sanitizing chokepoint.
- **Event management is fully PAT-accessible** — agents can manage events, not just
  read them.

### Sometime between 

- "Magic invite links" allow orgs to suggest items to add to profile. 

### Wed, July 1 — Positioning consolidates
- `positioning.md` is written, "grounded in the shipped app as of 2026-07-01." The
  pitch crystallizes around the hook **"You met someone great. Now what? Do you
  remember where you met?"** and the promise **"Grow your network like a garden."**
- The event-host story is formalized: **"From handshakes to history."**


### Thur, July 2 — Marketing site catches up
- `feat: copy updates`, `fix: hero break`, `fix: bump publish` (`8a8c7b0`,
  `780f52e`, `c3d902d`). The site copy moves toward the landed positioning.
- **A week after FBL's Immigrant Founders night, we co-hosted our own event** — the
  connection from that room, tended into a collaboration. (The pitch, lived.)
- Co hosted event where we had magic sign up links and matchmaking powered by SignalFit.
  - Conversion was low so we didn't end up having sufficient in person active users to matchmake. 
  - Believe this was due to the email looking random, not branded, and there being too much work to set up, and too much trust in a no-name third party. 
  - Suspect ephemeral accounts (only good for the day of the event unless you say otherwise) would help. Clarify what the host sees and doesn't see. 
  - Enable 
  - **How to frame this in the post (per Matt):** keep **SignalFit** named and talk
    their product up — the matchmaking itself was good. Own the conversion miss as
    *ours*: our onboarding asked too much (an unbranded, random-looking sign-up email;
    too many steps before the event), so not enough people got in-app in time to
    matchmake. The "no-name third party" friction was really *our* fault — we hadn't
    given attendees a reason to trust the flow, which made SignalFit feel unvouched
    rather than SignalFit being the problem. The fixes are on our side: branded
    invites, fewer steps, ephemeral day-of accounts, and clear host-visibility.

### Sun, July 5 — The blog launches (today)
- First post, **"Welcome to the garden,"** explains why we're blogging: events and
  product progress. Files-and-git as the whole CMS.
- This catch-up post is the second.

---

## Where we landed (vs. where we started)

**Kept, unchanged (the seed):**
- Remember *where* you met someone. Still the whole hook.
- Your data is yours — export, and delete/retract everything.
- Works with what you already use; doesn't own the medium (bring your own links,
  now extended to AI agents via PATs and llms.txt).

**Sharpened:**
- The pitch got a hook and a brand: **"you met — now what?"** + **the garden**.
- "Discoverable" toggle → **per-field, three-tier visibility** (Nobody default).
- "Access earned in person" (vouching, scarce invites, waitlist) → **connections
  that are simply mutual and verified** — earned by both showing up, not gated at a
  door. (Messaging leads with this; we don't talk about "vouching" anymore.)

**Grew past the seed:**
- **Events, and the hosts who run them.** The "matchmaking is what comes next" line
  from the original philosophy became a real, first-class part of the product: the
  room your connections trace back to.

**Receded (early promises we don't lead with now):**
- Dormancy tracking and touch-cadence nudges — present in the June 18 copy, not part
  of the current pitch. The tending nudge survives as gentle "growth suggestions,"
  not a cadence/guilt engine.

---

## Draft prose openings (steal freely)

**Option A — open on the personal moment (recommended):**

> Three weeks ago this was one person's problem. I kept meeting people I was
> genuinely excited about — at an event, over dinner, in a hallway — and a week
> later I couldn't tell you where we'd met, or sometimes even their name. The
> business card, the LinkedIn add, the "let's stay in touch" — none of it answered
> the only question that actually mattered later: *who was that, and where did we
> meet?*
>
> So I started building the memory I wished I had.

**Option B — open on the constant, then the growth:**

> On June 18 we published a page and a philosophy document. Re-reading it three
> weeks later, the surprising thing isn't how much changed — it's how much didn't.
> The first sentence we ever wrote about the product was about *remembering where
> you met someone*. That's still the first thing the app does today. What changed
> in three weeks was everything around it.

**Option C — open on the honest through-line:**

> A lot of products spend their first month figuring out what they are. We spent
> ours the other way around: we knew what it was on day one — a way to remember the
> people you meet and tend those relationships, on your own terms — and the three
> weeks since have been about earning the right to say it simply.

**Option D — open on living our own pitch (strongest, if you're happy to be the example):**

> The whole product is built around one moment: you meet someone great at an event,
> and then — *now what?* Three weeks in, that moment happened to me. At an Immigrant
> Founders night in San Francisco — wine, lightning pitches, a fireside with a
> founder who'd raised $200M — I met someone I clicked with. A week later, we
> co-hosted an event together. That's the entire thesis of Tend2Thrive, playing out
> in my own life while we were still building it.

**A closing line, in the house voice:**

> Great — you met. Now what? We've spent three weeks making sure that moment doesn't
> evaporate. Let's tend it.

---

# Terse timeline + where I landed (to follow the Hello world intro)

First person, tight. Drops in right after your three intro paragraphs.


## Where I landed

- **Kept:** remember *where* you met, own your data (leave anytime), work with what
  you already use.
- **Sharpened:** "you met — now what?", the garden, per-field privacy, earned
  connections.
- **Grew:** events, and the hosts who run them.
- **Dropped:** cadence nudges and dormancy scores — they got in your way, and that's
  the one thing I promised not to do.
