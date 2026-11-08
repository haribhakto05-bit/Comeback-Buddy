# Comeback

Your dreams, daily habits, workouts and a fresh line every morning. Built to bring you back when you slip.

## Upload to GitHub

1. Open your repo on GitHub → **Add file → Upload files**.
2. Select **all the files** from the unzipped `comeback-app` folder at once and drop them in. There are no sub-folders.
3. Commit. On the repo's main page you should see `index.html`, `manifest.webmanifest`, `sw.js` and the `icon-…png` files.

## Deploy on Vercel

Project name all in small letters, e.g. `comebackbuddy_app`. Preset **Other**, Root Directory `./`. Deploy.

Already deployed? Vercel redeploys by itself every time you upload to GitHub.

## Install on your phone

- **Android (Chrome):** open the link. An **Install Comeback** card pops up; tap **Install**. Or menu ⋮ → **Install app**.
- **iPhone (Safari):** Share → **Add to Home Screen**.

## Good to know

- Ticks, dreams and Defender photos are saved on your phone only. Clearing browser data deletes them.
- After changing `index.html`, bump `VERSION` in `sw.js` (e.g. `comeback-v4`) so phones get the update.
