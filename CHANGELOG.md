# Palestine Thanks You Changelog

<!-- https://keepachangelog.com/en/1.0.0/ -->

## [2026.07.26] 2026-07-26
### Added
- Add every state that recognizes Palestine: all 157 UN member states that have
  done so, plus two non-UN members, the Holy See and the Sahrawi Republic — 159
  in all, each with its flag, name and date of recognition, newest first and
  then A–Z. The data is parsed from the wikitext of Wikipedia's
  [International recognition of Palestine](https://en.wikipedia.org/wiki/International_recognition_of_Palestine)
  rather than transcribed by hand; ISO 3166-1 codes come from ICU region names
  and the flag emoji are derived from those codes. Two entries (the Czech
  Republic and Papua New Guinea) are marked disputed by that source and are
  included without distinction
- Add a placeholder world map (`src/WorldMap.tsx`): hand-drawn continent
  silhouettes on a graticule, themed for light and dark. Deliberately not real
  borders, and with no per-country shapes — it holds the layout until the
  interactive map arrives and will be replaced wholesale by country-level
  geometry, so nothing should be built on it
- Prepare country names for more than one language: a `Lang` type in
  `src/lang.ts` and `Country.name` as a total `Record<Lang, string>`, so adding
  a language code makes TypeScript point out every country still missing a name
  for it — the same trick the sister project Flags uses. Only English so far,
  and the list's A–Z ordering follows the language being shown
- Add `src/format.ts` to render a date at whatever precision is documented:
  a day (`22 September 2025`), a month where the day isn't recorded
  (`February 2013` — Equatorial Guinea, Kyrgyzstan and the Holy See), or a bare
  year. No invented days, and month-only dates sort with the rest of their
  month

### Changed
- Move the title and construction notice into a page header, and the
  kosovothanksyou.com credit and "Last update" line into a footer, around the
  new layout

## [2026.07.25] 2026-07-25
### Added
- Initial project boilerplate: Vite, React 19, TypeScript, Vercel Analytics and
  web-vitals, with light/dark theming via CSS `light-dark()`
- `vercel.json` for the Vercel deployment (framework Vite, output `dist`)
- Home page placeholder: 🇵🇸 title, a 🚧 under-construction notice and a 🇽🇰
  credit linking to the site that inspired this one, kosovothanksyou.com
