# Palestine Thanks You

[palestinethanksyou.com](https://palestinethanksyou.com) — the states that
recognize the State of Palestine, when each of them did, and the source for
every date, on an interactive world map.

Inspired by [kosovothanksyou.com](https://www.kosovothanksyou.com). A personal
project, not affiliated with any government or political organization.

## Running it

Node 20.19+ and npm 9+.

```
npm install
npm start      # dev server on http://localhost:3000
npm run build  # type-check and build into dist/
npm run preview
```

No backend — it is a static site, deployed on Vercel from `main`.

### Counting (sada)

The site can report two anonymous events to [sada](https://github.com/amerharb/sada),
the same collector the sawt apps use: the page was opened, and a share was
clicked (which network). No cookies, no identifiers — the whole payload is
`{ site, kind, name? }`. It is off unless both env variables are set (in
Vercel, or a local `.env.local`):

```
VITE_SADA_ENABLED=true
VITE_SADA_URL=https://sada.sawt.info
```

## The data

Everything the site claims lives in two files.

`src/countries.ts` — the 159 states, each with its ISO 3166-1 code, name, flag,
date of recognition and population. The dates follow the annex to UN document
[A/78/846](https://docs.un.org/en/A/78/846), which lists a recognition date for
every UN member state. Two entries deviate from it deliberately and say why in
the changelog: Iran, whose annex date precedes the declaration it would be
recognizing, and Malta, whose annex date its own government disputes.
Populations are the World Bank's `SP.POP.TOTL` for 2025, except the Holy See and
the Sahrawi Republic, which the World Bank does not cover.

`src/news.ts` — the Sources column: one entry per recognition, each linking to
the document it rests on. Government statements are preferred over press
coverage. The column is incomplete and says so on the page.

Dates may be `YYYY-MM-DD`, or `YYYY-MM` where only the month is documented.
The list opens newest first and the three buttons above it switch to oldest
first or A–Z by name; both date orders break ties A–Z rather than reversing
the tie-break too. The rank column is a competition ranking by date, so states
sharing a date share a number, the next rank skips the tie, and a state keeps
its rank whichever order the list is in.

## The map

`public/world.json` holds the country outlines, keyed by ISO code, and is
fetched at runtime rather than bundled. It was generated from the Natural Earth
50m atlas, projected with d3-geo and simplified — which is why d3 and topojson
are not dependencies here. 50m rather than the usual 110m because at 110m
nineteen recognizing states have no shape at all, every microstate among them.

It is a plain data file: hand-editing a path is fine, but note the browser only
fetches it on load, so a change needs a full page reload, not just HMR.

## The link preview

`public/og.png` (1200×630) is what Mastodon, Facebook, X and the rest show when
the site is shared, wired up by the `og:` tags in `index.html`.

Regenerate it with:

```
npm run og
```

It is built from `public/world.json`, `src/countries.ts` and the colours in
`src/index.css`, so the card cannot drift from the map it is a picture of —
**but the count is baked into the image**. Add a state and the picture keeps
claiming the old number until this is re-run, so run it whenever the list
changes and commit the result.

`scripts/og-image.mjs` writes the SVG; `scripts/og-image.swift` rasterises it
through AppKit, which needs macOS. That is the trade for adding no npm
dependency to a project that deliberately has almost none — swap that step for
resvg or sharp if it ever has to run in CI.
