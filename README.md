# Synastry

A private, two-person app in the spirit of Co-Star: a daily deadpan
"forecast," a mythic pairing (Greek/Roman/Hindu), a daily question,
mood check-ins, love notes, a shared streak, key dates, a photo
album, trivia decks, and real numbers about the two of you in
"What we're learning."

Installable as a PWA, works fully offline. Live sync and push are
optional — the app works without them, using a copy/paste code.

## Deploy

```bash
git add -A
git commit -m "Live sync, push notifications, Greek visual redesign"
git push
```

GitHub Pages picks it up automatically — live at
`https://<your-username>.github.io/us/` a minute or two after pushing.

**Bump `sw.js`'s cache name** (already bumped to `syn-v5` in this
update) after any future edit, or installed phones will keep showing
the old cached version.

## Turn on live sync (Firebase) — free, ~5 minutes

Right now both phones sync only via the copy/paste code. To make it
instant and automatic:

1. Go to [console.firebase.google.com](https://console.firebase.google.com), sign in, **Add project** (name it anything, disable Google Analytics — you don't need it).
2. In the left sidebar: **Build → Realtime Database → Create Database**. Pick any region, and start in **test mode** (this is a private link only the two of you have; test mode is fine).
3. In the left sidebar: **Project settings** (gear icon) → scroll to **Your apps** → click the **</>** (web) icon → register an app (any nickname, no hosting needed) → it shows you a `firebaseConfig` object.
4. Open `index.html`, find this line near the top of the `<script>` block:
   ```js
   const FIREBASE_CONFIG={apiKey:"PASTE_ME",authDomain:"PASTE_ME",databaseURL:"PASTE_ME",projectId:"PASTE_ME",storageBucket:"PASTE_ME",messagingSenderId:"PASTE_ME",appId:"PASTE_ME"};
   ```
   Replace it with the object Firebase gave you (same shape, just paste the real values in).
5. Push. Reload the app on both phones — the **Sync your charts** card on the Us tab should show a green dot and "Live."

That's it — no server, nothing else to run. Notes, daily answers,
mood check-ins, the streak, and key dates now sync automatically.
**Photos stay local + copy/paste-only**, on purpose — they're big,
and the free database tier is small; syncing them would burn through
it fast.

## Turn on real background push (OneSignal) — free, ~5 minutes

Without this, "Daily reminders" only fires while the app is open.
For a real notification that arrives even when the app is closed:

1. Go to [onesignal.com](https://onesignal.com), sign up, **New App/Website**.
2. Choose **Web Push**, platform **Custom Code** (not WordPress/Shopify), and when it asks for your site URL, use your GitHub Pages URL (`https://<your-username>.github.io/us/`).
3. It gives you an **App ID** (a UUID). Open `index.html`, find:
   ```js
   const ONESIGNAL_APP_ID="PASTE_ME";
   ```
   Replace `"PASTE_ME"` with your App ID (keep the quotes).
4. Push. On the Us tab, tap **Turn on reminders** on each phone and accept the browser prompt — OneSignal handles the rest, including delivery while the app is closed.

If you skip this, reminders still work locally (a notification when
you open the app, once a day) — the button and card just say so.

## Install on your phones

- **Android/Chrome:** open the link, menu, *Add to Home screen*
- **iPhone/Safari:** open the link, Share, *Add to Home Screen*

Type both names once, tap which one you are. On the other phone, do
the same but tap the *other* name.

## Editing

- `data.js` — daily questions (`QS`), forecast lines (`FORECASTS`),
  mythic pairings (`MYTH_PAIRS`), moods (`MOODS`), trivia (`DECKS`)
- `index.html` — colors are CSS variables at the top of the `<style>`
  block (`--bg`, `--gold`, `--rose`, `--olive`, etc.)

## What's new in this update

- **Live sync** via Firebase (optional, see above) — falls back
  cleanly to the copy/paste code if not configured
- **Real background push** via OneSignal (optional, see above) —
  falls back to local, app-open reminders if not configured
- **Mood check-ins** wired into the Today tab, visible to your partner
- **Mythic pairing** (Greek/Roman/Hindu) shown on the Today tab,
  fixed per couple
- **What we're learning** — real computed stats on the Us tab
- Visual redesign: a Greek key (meander) motif marks the threshold
  under the daily forecast, and your streak number sits inside a
  laurel wreath
