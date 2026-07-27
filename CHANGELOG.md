# Palestine Thanks You Changelog

<!-- https://keepachangelog.com/en/1.0.0/ -->

## [2026.07.27] 2026-07-27
### Added
- Add a source for the states that recognized Palestine on the day it was
  declared, 15 November 1988. The evidence is the annex to
  [A/78/846](https://docs.un.org/en/A/78/846), which lists a recognition date
  for every UN member state and gives that day for thirteen of them: Algeria,
  Bahrain, Indonesia, Iraq, Kuwait, Libya, Malaysia, Mauritania, Morocco,
  Somalia, Tunisia, Türkiye and Yemen. The country list also shows the Sahrawi
  Republic under that date; the entry says so, and notes that the annex covers
  member states only, so it is not evidence for that one

### Fixed
- Remove a literal tab character from the middle of the A/78/846 entry's
  headline, where it rendered as a stray gap, and punctuate the headline
- Reword the unfinished-section notice, which still read "The sources is not
  finished yet" after the column was renamed from News to Sources
- Drop a stale comment on the A/78/846 entry that still described its date as a
  `0001` sentinel pinning it to the bottom, after it was given a real date

## [2026.07.26] 2026-07-26
### Added
- Lay the home page out in three parts, following the sister site
  [kosovothanksyou.com](https://www.kosovothanksyou.com) that inspired this
  one: a full-width world map on top, then the recognizing countries and the
  sources side by side beneath it. The countries take a third of the width and
  the sources two thirds, with a 300px floor on the countries column — below a
  990px viewport the two stack instead, where the list gets the full width and
  its rows stop wrapping
- Add an interactive world map. Every state that recognizes Palestine is filled
  in and hovering any country shows its name, plus the date where there is one.
  The geometry lives in `public/world.json` (~250 kB, ~90 kB gzipped) and is
  fetched rather than bundled, so the JS payload is unchanged; it is generated
  at build time from the Natural Earth 50m atlas, projected with d3-geo and
  simplified, which is why d3 and topojson are not dependencies of this project.
  The 50m resolution is deliberate: at the usual 110m, nineteen recognizing
  states have no shape at all — every microstate and small island, including
  San Marino, Andorra, Malta and Monaco. Antarctica is omitted and the viewBox
  cropped to the remaining land
- Add every state that recognizes Palestine: all 157 UN member states that have
  done so, plus two non-UN members, the Holy See and the Sahrawi Republic — 159
  in all, each with its flag, name and date of recognition, newest first and
  then A–Z. The data is parsed from the wikitext of Wikipedia's
  [International recognition of Palestine](https://en.wikipedia.org/wiki/International_recognition_of_Palestine)
  rather than transcribed by hand; ISO 3166-1 codes come from ICU region names
  and the flag emoji are derived from those codes. Two entries (the Czech
  Republic and Papua New Guinea) are marked disputed by that source and are
  included without distinction
- Add a Sources column listing each recognition with the document it rests on,
  newest first then A–Z, each headline linking to its source and tagged with the
  publisher. Where a government statement exists it is preferred over press
  coverage. The column is capped at the height of the country list and scrolls
  within it, and a notice is pinned to the bottom while it is incomplete
- Add a thanks section above the country list, in place of a plain heading,
  counting the listed states from the data rather than a hard-coded number
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
- Replace the placeholder home page with a header carrying just the title, and
  a footer, separated by a rule, holding one line — a personal-project note
  linking to the author's site and to kosovothanksyou.com, and a statement that
  the site is not affiliated with any government or political organization —
  above the "Last update" version line

## [2026.07.25] 2026-07-25
### Added
- Initial project boilerplate: Vite, React 19, TypeScript, Vercel Analytics and
  web-vitals, with light/dark theming via CSS `light-dark()`
- `vercel.json` for the Vercel deployment (framework Vite, output `dist`)
- Home page placeholder: 🇵🇸 title, a 🚧 under-construction notice and a 🇽🇰
  credit linking to the site that inspired this one, kosovothanksyou.com
