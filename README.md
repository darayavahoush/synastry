# Synastry

A private, two-person app in the spirit of Co-Star: a daily deadpan
"forecast" for the two of you, a daily question, love notes, a shared
check-in streak, key dates, a photo album, and trivia decks (Movies,
The Bear, Brooklyn Nine-Nine, and a not-really-scored "Us" deck).

Installable as a PWA, works offline, no server, no accounts. All data —
including photos — stays in your phone's local storage only.

## Deploy (already done once)

```bash
git add -A
git commit -m "Synastry: Co-Star redesign, forecast, album"
git push
```

GitHub Pages picks up `main` automatically — live at
`https://<your-username>.github.io/us/` a minute or two after pushing.

## Install on your phones

- **Android/Chrome:** open the link, menu, *Add to Home screen*
- **iPhone/Safari:** open the link, Share, *Add to Home Screen*

Type both names once, tap which one you are. On the other phone, do the
same but tap the *other* name.

## Syncing

No backend, so phones don't sync live. On the **Us** tab, *Copy my
code* puts your data (notes, answers, check-ins, dates, photos) on the
clipboard; *Paste theirs* on the other phone merges the two without
overwriting anything. With a lot of photos the code gets long — if
copy fails, use "Paste this manually" fallback that pops up.

## Editing

- `data.js` — daily questions (`QS`), the deadpan daily lines
  (`FORECASTS`), and trivia (`DECKS`)
- `index.html` — colors are CSS variables at the top of the `<style>`
  block (`--bg`, `--acc`, etc.) if you want a different palette

Bump the cache name in `sw.js` (`syn-v2` → `syn-v3`) after edits so
installed phones pick up the change.

## Mythology, mood, and insights (new)

- Every day you're shown a mythic pairing drawn from Greek, Roman, and
  Hindu myth (Eros & Psyche, Shiva & Shakti, Rama & Sita, and others) —
  deterministic per couple, in `MYTH_PAIRS` in `data.js`.
- A "Myths" trivia deck covers all three traditions.
- **Right now** on the Today tab lets each of you log a mood
  (joyful/content/tired/anxious/sad/angry). It's visible to your
  partner once they open the app — not instant, since there's no
  backend (see below).
- **What we're learning** on the Us tab is real, computed stats from
  your own stored history — no AI, just your data: common moods, who
  writes more notes, your longest streak.

## Notifications

The **Daily reminders** button asks for notification permission and
nudges you with a forecast line once a day *when you open the app*.
Browsers don't let a home-screen PWA send background push without a
push service, so this can't arrive while the app is closed.

For real background push (arrives even when closed), the practical
free option is **OneSignal**: create a free account, add their SDK
script tag and your App ID to `index.html`, no server code needed.
Happy to wire it in if you set one up and share the App ID.

## True live sync

The copy/paste code is instant enough for daily use, but it isn't
live — nothing pushes automatically between phones. For that you'd
want a small real-time backend; **Firebase Realtime Database**'s free
tier is the simplest (create a project, grab the config object, no
credit card). Send me the config and I'll switch mood/notes/streaks
over to live sync.
