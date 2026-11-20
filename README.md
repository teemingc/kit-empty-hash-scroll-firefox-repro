# Firefox doesn't restore scroll after going back from a `#` link

1. Run `pnpm install`, then `pnpm exec playwright install firefox chromium`
2. Run `pnpm test`. It runs the same test in Firefox and Chromium:
   scroll down, click the `<a href="#">` link, go back.
3. Firefox fails on the last step: the page stays at the top instead of returning to where it was. Chromium passes.

## By hand

1. Run `pnpm dev` and open `http://localhost:5173` in Firefox
2. Scroll to the bottom and click "Back to top"
3. Press the browser's back button
4. The URL loses the `#` but the page stays at the top
