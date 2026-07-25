/*
 * Languages the site's content can be shown in.
 *
 * Add a code here and TypeScript will point out every country in
 * src/countries.ts still missing a name for it — because Country.name is a
 * total Record<Lang, string>, not a partial one. Same trick the sister
 * project Flags uses for its Language type.
 */
export type Lang = 'en'

/* Used until there is a language picker to read from. */
export const DEFAULT_LANG: Lang = 'en'
