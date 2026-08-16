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
Rows are ordered newest first, then A–Z; the rank column is a competition
ranking, so states sharing a date share a number and the next rank skips the tie.

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

It is generated from `public/world.json` and `src/countries.ts`, so it stays
true to the map — **but the count is baked into the image**. When a state is
added, the picture still says the old number until it is regenerated. The
generator is not committed; it renders an SVG of the map at 1200×630 with the
title over it and converts that to PNG.
