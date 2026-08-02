# Palestine Thanks You Changelog

<!-- https://keepachangelog.com/en/1.0.0/ -->

## [2026.08.02] 2026-08-02
### Added
- Number each country by its order of recognition, in a column between the flag
  and the name, #1 being the earliest — so the list counts up from the bottom.
  It is a competition ranking: states that recognized on the same date share a
  number and the next one skips past the whole tie, so the fourteen states that
  recognized on 15 November 1988 all hold #1 and the next is #15. Ranks are
  computed from the same sort key the list is ordered by, so the numbers cannot
  drift out of step with the rows
- Record each country's population, for use later — nothing displays it yet.
  157 come from the World Bank's SP.POP.TOTL indicator, all of them 2025, matched
  to the list by ISO code rather than transcribed. The World Bank covers member
  economies, so the two non-members are estimated separately and are rougher:
  the Holy See at 882 (2024 resident estimate including non-citizens) and the
  Sahrawi Republic at approximately 200,000, a figure that is genuinely disputed
  and split between the territory and the refugee camps in Algeria. The field is
  required, so a country cannot be added without one
- Draw the flags with the `flags` webfont the sister projects already use
  (`public/flags.woff2`, 94 kB), instead of relying on the system emoji font.
  Windows' Segoe UI Emoji renders regional-indicator pairs as two-letter codes
  rather than flags, so 🇵🇸 appeared as "PS" and the country list became a
  column of letter boxes there. The `@font-face` carries
  `unicode-range: U+1F1E6-1F1FF`, so the family can sit at the front of the body
  stack and cover every flag on the page — the title, the thanks line, all 159
  country rows and the 🇽🇰 credit in the footer — without touching any other
  text, and the file is only fetched when a flag is actually shown. Verified
  that the font covers all 159 flags in the list plus 🇽🇰, and that a line of
  Latin text measures identically with and without it
- Add a source for the states that recognized Palestine on the day it was
  declared, 15 November 1988. The evidence is the annex to
  [A/78/846](https://docs.un.org/en/A/78/846), which lists a recognition date
  for every UN member state and gives that day for thirteen of them: Algeria,
  Bahrain, Indonesia, Iraq, Kuwait, Libya, Malaysia, Mauritania, Morocco,
  Somalia, Tunisia, Türkiye and Yemen. The country list also shows the Sahrawi
  Republic under that date; the entry says so, and notes that the annex covers
  member states only, so it is not evidence for that one

### Changed
- Correct eight recognition dates against the annex to
  [A/78/846](https://docs.un.org/en/A/78/846), which lists a date for all 140
  UN member states that had recognized Palestine by April 2024 and is now the
  authority for this list: Malta 2025-09-22 → 1988-11-16, Mexico 2025-02-05 →
  2023-06-02, the Holy See 2013-02 → 2015-06-26, Brazil 2010-12-01 →
  2011-12-03, Paraguay 2005-03-25 → 2011-01-29, Papua New Guinea 1994-10-04 →
  1995-01-13, Ecuador 2010-12-24 → 2010-12-27 and Uruguay 2011-03-15 →
  2011-03-16. Every other date the annex covers now agrees with it. Two of the
  changes are contested and the sources column says so: Malta's own government
  is reported to consider the annex date wrong, and it conflicts with Malta's
  own announcement in September 2025, which keeps its own entry; Mexico's 2023
  date replaces a February 2025 statement that only restated a standing
  position
- Keep Iran at 1989-02-04 against the annex, which gives 4 February 1988 —
  nine months before the declaration it would be recognizing, so the annex is
  wrong on that row

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
