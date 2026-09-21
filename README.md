# Us

A small private app for two people. Daily question, love notes, a shared
check-in streak, countdowns, and trivia decks (Movies, The Bear,
Brooklyn Nine-Nine, and a not-really-scored "Us" deck).

Installable as a PWA, works offline, no server and no accounts. All data
stays in your phone's local storage.

## Put it online (GitHub Pages)

```bash
gh repo create us --private --source=. --remote=origin --push
gh api -X POST repos/:owner/us/pages -f build_type=legacy -f 'source[branch]=main' -f 'source[path]=/'
```

Give it a minute, then open `https://<your-username>.github.io/us/`.

> Pages on a **private** repo needs a paid GitHub plan. On the free plan
> either make the repo public (`--public` above), or host the folder on
> Netlify Drop / Cloudflare Pages instead — any static host works.

## Install on your phones

- **Android/Chrome:** open the link, menu, *Add to Home screen*
- **iPhone/Safari:** open the link, Share, *Add to Home Screen*

Open it, type both names, and tap which one you are. Do the same on the
other phone but tap the *other* name.

## Syncing

There's no backend, so phones don't sync automatically. On the **Us**
tab, *Copy my code* puts your data on the clipboard; *Paste theirs* on
the other phone merges the two. Notes, answers, check-ins and countdowns
all merge; nothing is overwritten.

## Editing

All content lives in `data.js` — daily questions in `QS`, trivia in
`DECKS`. Add your own; `a` is the index of the correct option and `x` is
the line shown after answering. Bump the cache name in `sw.js` after
changes so phones pick them up.
