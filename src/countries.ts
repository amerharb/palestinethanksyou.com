import { Lang } from './lang'

export type Country = {
	/* ISO 3166-1 alpha-2, lowercase — will be used to match the map's shapes
	   once the map becomes interactive */
	code: string
	/* the country's name per language — see Lang in src/lang.ts */
	name: Record<Lang, string>
	flag: string
	/*
	 * Date the country formally recognized the State of Palestine, ISO:
	 * 'YYYY-MM-DD', or 'YYYY-MM' where only the month is documented (three
	 * entries — Equatorial Guinea, Kyrgyzstan and the Holy See).
	 */
	recognized: string
}

/*
 * States that have formally recognized the State of Palestine: all 157 UN
 * member states that have done so, plus two non-UN-member states, the Holy See
 * and the Sahrawi Republic — 159 in total.
 *
 * Source: the two tables under "States that recognize Palestine" in
 * https://en.wikipedia.org/wiki/International_recognition_of_Palestine
 * (parsed from the article wikitext, not transcribed by hand). ISO codes come
 * from ICU region names and the flag emoji are derived from those codes.
 *
 * Two entries — the Czech Republic and Papua New Guinea — are marked
 * "disputed" by that source, and are included here without distinction.
 *
 * Listed newest-first then A–Z, but order here doesn't matter: the UI sorts
 * (see byNewest).
 */
export const COUNTRIES: Country[] = [
	{code: 'sm', name: {en: 'San Marino'}, flag: '🇸🇲', recognized: '2025-09-23'},
	{code: 'ad', name: {en: 'Andorra'}, flag: '🇦🇩', recognized: '2025-09-22'},
	{code: 'fr', name: {en: 'France'}, flag: '🇫🇷', recognized: '2025-09-22'},
	{code: 'lu', name: {en: 'Luxembourg'}, flag: '🇱🇺', recognized: '2025-09-22'},
	{code: 'mt', name: {en: 'Malta'}, flag: '🇲🇹', recognized: '1988-11-16'},
	{code: 'mc', name: {en: 'Monaco'}, flag: '🇲🇨', recognized: '2025-09-22'},
	{code: 'au', name: {en: 'Australia'}, flag: '🇦🇺', recognized: '2025-09-21'},
	{code: 'ca', name: {en: 'Canada'}, flag: '🇨🇦', recognized: '2025-09-21'},
	{code: 'pt', name: {en: 'Portugal'}, flag: '🇵🇹', recognized: '2025-09-21'},
	{code: 'gb', name: {en: 'United Kingdom'}, flag: '🇬🇧', recognized: '2025-09-21'},
	{code: 'mx', name: {en: 'Mexico'}, flag: '🇲🇽', recognized: '2023-06-02'},
	{code: 'am', name: {en: 'Armenia'}, flag: '🇦🇲', recognized: '2024-06-21'},
	{code: 'si', name: {en: 'Slovenia'}, flag: '🇸🇮', recognized: '2024-06-04'},
	{code: 'ie', name: {en: 'Ireland'}, flag: '🇮🇪', recognized: '2024-05-28'},
	{code: 'no', name: {en: 'Norway'}, flag: '🇳🇴', recognized: '2024-05-28'},
	{code: 'es', name: {en: 'Spain'}, flag: '🇪🇸', recognized: '2024-05-28'},
	{code: 'bs', name: {en: 'Bahamas'}, flag: '🇧🇸', recognized: '2024-05-07'},
	{code: 'tt', name: {en: 'Trinidad and Tobago'}, flag: '🇹🇹', recognized: '2024-05-02'},
	{code: 'jm', name: {en: 'Jamaica'}, flag: '🇯🇲', recognized: '2024-04-22'},
	{code: 'bb', name: {en: 'Barbados'}, flag: '🇧🇧', recognized: '2024-04-19'},
	{code: 'kn', name: {en: 'Saint Kitts and Nevis'}, flag: '🇰🇳', recognized: '2019-07-29'},
	{code: 'co', name: {en: 'Colombia'}, flag: '🇨🇴', recognized: '2018-08-03'},
	{code: 'lc', name: {en: 'Saint Lucia'}, flag: '🇱🇨', recognized: '2015-09-14'},
	{code: 'se', name: {en: 'Sweden'}, flag: '🇸🇪', recognized: '2014-10-30'},
	{code: 'ht', name: {en: 'Haiti'}, flag: '🇭🇹', recognized: '2013-09-27'},
	{code: 'gt', name: {en: 'Guatemala'}, flag: '🇬🇹', recognized: '2013-04-09'},
	{code: 'va', name: {en: 'Holy See'}, flag: '🇻🇦', recognized: '2015-06-26'},
	{code: 'th', name: {en: 'Thailand'}, flag: '🇹🇭', recognized: '2012-01-18'},
	{code: 'is', name: {en: 'Iceland'}, flag: '🇮🇸', recognized: '2011-12-15'},
	{code: 'gd', name: {en: 'Grenada'}, flag: '🇬🇩', recognized: '2011-09-25'},
	{code: 'ag', name: {en: 'Antigua and Barbuda'}, flag: '🇦🇬', recognized: '2011-09-22'},
	{code: 'dm', name: {en: 'Dominica'}, flag: '🇩🇲', recognized: '2011-09-19'},
	{code: 'bz', name: {en: 'Belize'}, flag: '🇧🇿', recognized: '2011-09-09'},
	{code: 'vc', name: {en: 'Saint Vincent and the Grenadines'}, flag: '🇻🇨', recognized: '2011-08-29'},
	{code: 'hn', name: {en: 'Honduras'}, flag: '🇭🇳', recognized: '2011-08-26'},
	{code: 'sv', name: {en: 'El Salvador'}, flag: '🇸🇻', recognized: '2011-08-25'},
	{code: 'lr', name: {en: 'Liberia'}, flag: '🇱🇷', recognized: '2011-07-19'},
	{code: 'sy', name: {en: 'Syria'}, flag: '🇸🇾', recognized: '2011-07-18'},
	{code: 'ss', name: {en: 'South Sudan'}, flag: '🇸🇸', recognized: '2011-07-14'},
	{code: 'ls', name: {en: 'Lesotho'}, flag: '🇱🇸', recognized: '2011-05-03'},
	{code: 'uy', name: {en: 'Uruguay'}, flag: '🇺🇾', recognized: '2011-03-16'},
	{code: 'sr', name: {en: 'Suriname'}, flag: '🇸🇷', recognized: '2011-01-26'},
	{code: 'pe', name: {en: 'Peru'}, flag: '🇵🇪', recognized: '2011-01-24'},
	{code: 'gy', name: {en: 'Guyana'}, flag: '🇬🇾', recognized: '2011-01-13'},
	{code: 'cl', name: {en: 'Chile'}, flag: '🇨🇱', recognized: '2011-01-07'},
	{code: 'ec', name: {en: 'Ecuador'}, flag: '🇪🇨', recognized: '2010-12-27'},
	{code: 'bo', name: {en: 'Bolivia'}, flag: '🇧🇴', recognized: '2010-12-17'},
	{code: 'ar', name: {en: 'Argentina'}, flag: '🇦🇷', recognized: '2010-12-06'},
	{code: 'br', name: {en: 'Brazil'}, flag: '🇧🇷', recognized: '2011-12-03'},
	{code: 'do', name: {en: 'Dominican Republic'}, flag: '🇩🇴', recognized: '2009-07-15'},
	{code: 've', name: {en: 'Venezuela'}, flag: '🇻🇪', recognized: '2009-04-27'},
	{code: 'ci', name: {en: 'Ivory Coast'}, flag: '🇨🇮', recognized: '2008-12-01'},
	{code: 'lb', name: {en: 'Lebanon'}, flag: '🇱🇧', recognized: '2008-11-30'},
	{code: 'cr', name: {en: 'Costa Rica'}, flag: '🇨🇷', recognized: '2008-02-05'},
	{code: 'me', name: {en: 'Montenegro'}, flag: '🇲🇪', recognized: '2006-07-24'},
	{code: 'py', name: {en: 'Paraguay'}, flag: '🇵🇾', recognized: '2011-01-29'},
	{code: 'tl', name: {en: 'Timor-Leste'}, flag: '🇹🇱', recognized: '2004-03-01'},
	{code: 'mw', name: {en: 'Malawi'}, flag: '🇲🇼', recognized: '1998-10-23'},
	{code: 'kg', name: {en: 'Kyrgyzstan'}, flag: '🇰🇬', recognized: '1995-11'},
	{code: 'za', name: {en: 'South Africa'}, flag: '🇿🇦', recognized: '1995-02-15'},
	{code: 'pg', name: {en: 'Papua New Guinea'}, flag: '🇵🇬', recognized: '1995-01-13'},
	{code: 'uz', name: {en: 'Uzbekistan'}, flag: '🇺🇿', recognized: '1994-09-25'},
	{code: 'tj', name: {en: 'Tajikistan'}, flag: '🇹🇯', recognized: '1994-04-02'},
	{code: 'ba', name: {en: 'Bosnia and Herzegovina'}, flag: '🇧🇦', recognized: '1992-05-27'},
	{code: 'ge', name: {en: 'Georgia'}, flag: '🇬🇪', recognized: '1992-04-25'},
	{code: 'tm', name: {en: 'Turkmenistan'}, flag: '🇹🇲', recognized: '1992-04-17'},
	{code: 'az', name: {en: 'Azerbaijan'}, flag: '🇦🇿', recognized: '1992-04-15'},
	{code: 'kz', name: {en: 'Kazakhstan'}, flag: '🇰🇿', recognized: '1992-04-06'},
	{code: 'sz', name: {en: 'Eswatini'}, flag: '🇸🇿', recognized: '1991-07-01'},
	{code: 'ph', name: {en: 'Philippines'}, flag: '🇵🇭', recognized: '1989-09-04'},
	{code: 'vu', name: {en: 'Vanuatu'}, flag: '🇻🇺', recognized: '1989-08-21'},
	{code: 'bj', name: {en: 'Benin'}, flag: '🇧🇯', recognized: '1989-05-12'},
	{code: 'ke', name: {en: 'Kenya'}, flag: '🇰🇪', recognized: '1989-05-12'},
	{code: 'gq', name: {en: 'Equatorial Guinea'}, flag: '🇬🇶', recognized: '1989-05'},
	{code: 'et', name: {en: 'Ethiopia'}, flag: '🇪🇹', recognized: '1989-02-04'},
	{code: 'ir', name: {en: 'Iran'}, flag: '🇮🇷', recognized: '1989-02-04'},
	{code: 'rw', name: {en: 'Rwanda'}, flag: '🇷🇼', recognized: '1989-01-02'},
	{code: 'bt', name: {en: 'Bhutan'}, flag: '🇧🇹', recognized: '1988-12-25'},
	{code: 'cf', name: {en: 'Central African Republic'}, flag: '🇨🇫', recognized: '1988-12-23'},
	{code: 'bi', name: {en: 'Burundi'}, flag: '🇧🇮', recognized: '1988-12-22'},
	{code: 'bw', name: {en: 'Botswana'}, flag: '🇧🇼', recognized: '1988-12-19'},
	{code: 'np', name: {en: 'Nepal'}, flag: '🇳🇵', recognized: '1988-12-19'},
	{code: 'cd', name: {en: 'Democratic Republic of the Congo'}, flag: '🇨🇩', recognized: '1988-12-18'},
	{code: 'pl', name: {en: 'Poland'}, flag: '🇵🇱', recognized: '1988-12-14'},
	{code: 'om', name: {en: 'Oman'}, flag: '🇴🇲', recognized: '1988-12-13'},
	{code: 'ga', name: {en: 'Gabon'}, flag: '🇬🇦', recognized: '1988-12-12'},
	{code: 'st', name: {en: 'São Tomé and Príncipe'}, flag: '🇸🇹', recognized: '1988-12-10'},
	{code: 'mz', name: {en: 'Mozambique'}, flag: '🇲🇿', recognized: '1988-12-08'},
	{code: 'ao', name: {en: 'Angola'}, flag: '🇦🇴', recognized: '1988-12-06'},
	{code: 'cg', name: {en: 'Republic of the Congo'}, flag: '🇨🇬', recognized: '1988-12-05'},
	{code: 'sl', name: {en: 'Sierra Leone'}, flag: '🇸🇱', recognized: '1988-12-03'},
	{code: 'ug', name: {en: 'Uganda'}, flag: '🇺🇬', recognized: '1988-12-03'},
	{code: 'la', name: {en: 'Laos'}, flag: '🇱🇦', recognized: '1988-12-02'},
	{code: 'td', name: {en: 'Chad'}, flag: '🇹🇩', recognized: '1988-12-01'},
	{code: 'gh', name: {en: 'Ghana'}, flag: '🇬🇭', recognized: '1988-11-29'},
	{code: 'tg', name: {en: 'Togo'}, flag: '🇹🇬', recognized: '1988-11-29'},
	{code: 'zw', name: {en: 'Zimbabwe'}, flag: '🇿🇼', recognized: '1988-11-29'},
	{code: 'mv', name: {en: 'Maldives'}, flag: '🇲🇻', recognized: '1988-11-28'},
	{code: 'bg', name: {en: 'Bulgaria'}, flag: '🇧🇬', recognized: '1988-11-25'},
	{code: 'cv', name: {en: 'Cape Verde'}, flag: '🇨🇻', recognized: '1988-11-24'},
	{code: 'ne', name: {en: 'Niger'}, flag: '🇳🇪', recognized: '1988-11-24'},
	{code: 'kp', name: {en: 'North Korea'}, flag: '🇰🇵', recognized: '1988-11-24'},
	{code: 'ro', name: {en: 'Romania'}, flag: '🇷🇴', recognized: '1988-11-24'},
	{code: 'tz', name: {en: 'Tanzania'}, flag: '🇹🇿', recognized: '1988-11-24'},
	{code: 'hu', name: {en: 'Hungary'}, flag: '🇭🇺', recognized: '1988-11-23'},
	{code: 'mn', name: {en: 'Mongolia'}, flag: '🇲🇳', recognized: '1988-11-22'},
	{code: 'sn', name: {en: 'Senegal'}, flag: '🇸🇳', recognized: '1988-11-22'},
	{code: 'bf', name: {en: 'Burkina Faso'}, flag: '🇧🇫', recognized: '1988-11-21'},
	{code: 'kh', name: {en: 'Cambodia'}, flag: '🇰🇭', recognized: '1988-11-21'},
	{code: 'km', name: {en: 'Comoros'}, flag: '🇰🇲', recognized: '1988-11-21'},
	{code: 'gn', name: {en: 'Guinea'}, flag: '🇬🇳', recognized: '1988-11-21'},
	{code: 'gw', name: {en: 'Guinea-Bissau'}, flag: '🇬🇼', recognized: '1988-11-21'},
	{code: 'ml', name: {en: 'Mali'}, flag: '🇲🇱', recognized: '1988-11-21'},
	{code: 'cn', name: {en: 'China'}, flag: '🇨🇳', recognized: '1988-11-20'},
	{code: 'by', name: {en: 'Belarus'}, flag: '🇧🇾', recognized: '1988-11-19'},
	{code: 'na', name: {en: 'Namibia'}, flag: '🇳🇦', recognized: '1988-11-19'},
	{code: 'ru', name: {en: 'Russia'}, flag: '🇷🇺', recognized: '1988-11-19'},
	{code: 'ua', name: {en: 'Ukraine'}, flag: '🇺🇦', recognized: '1988-11-19'},
	{code: 'vn', name: {en: 'Vietnam'}, flag: '🇻🇳', recognized: '1988-11-19'},
	{code: 'cy', name: {en: 'Cyprus'}, flag: '🇨🇾', recognized: '1988-11-18'},
	{code: 'cz', name: {en: 'Czech Republic'}, flag: '🇨🇿', recognized: '1988-11-18'},
	{code: 'eg', name: {en: 'Egypt'}, flag: '🇪🇬', recognized: '1988-11-18'},
	{code: 'gm', name: {en: 'Gambia'}, flag: '🇬🇲', recognized: '1988-11-18'},
	{code: 'in', name: {en: 'India'}, flag: '🇮🇳', recognized: '1988-11-18'},
	{code: 'ng', name: {en: 'Nigeria'}, flag: '🇳🇬', recognized: '1988-11-18'},
	{code: 'sc', name: {en: 'Seychelles'}, flag: '🇸🇨', recognized: '1988-11-18'},
	{code: 'sk', name: {en: 'Slovakia'}, flag: '🇸🇰', recognized: '1988-11-18'},
	{code: 'lk', name: {en: 'Sri Lanka'}, flag: '🇱🇰', recognized: '1988-11-18'},
	{code: 'al', name: {en: 'Albania'}, flag: '🇦🇱', recognized: '1988-11-17'},
	{code: 'bn', name: {en: 'Brunei'}, flag: '🇧🇳', recognized: '1988-11-17'},
	{code: 'dj', name: {en: 'Djibouti'}, flag: '🇩🇯', recognized: '1988-11-17'},
	{code: 'mu', name: {en: 'Mauritius'}, flag: '🇲🇺', recognized: '1988-11-17'},
	{code: 'sd', name: {en: 'Sudan'}, flag: '🇸🇩', recognized: '1988-11-17'},
	{code: 'af', name: {en: 'Afghanistan'}, flag: '🇦🇫', recognized: '1988-11-16'},
	{code: 'bd', name: {en: 'Bangladesh'}, flag: '🇧🇩', recognized: '1988-11-16'},
	{code: 'cu', name: {en: 'Cuba'}, flag: '🇨🇺', recognized: '1988-11-16'},
	{code: 'jo', name: {en: 'Jordan'}, flag: '🇯🇴', recognized: '1988-11-16'},
	{code: 'mg', name: {en: 'Madagascar'}, flag: '🇲🇬', recognized: '1988-11-16'},
	{code: 'ni', name: {en: 'Nicaragua'}, flag: '🇳🇮', recognized: '1988-11-16'},
	{code: 'pk', name: {en: 'Pakistan'}, flag: '🇵🇰', recognized: '1988-11-16'},
	{code: 'qa', name: {en: 'Qatar'}, flag: '🇶🇦', recognized: '1988-11-16'},
	{code: 'sa', name: {en: 'Saudi Arabia'}, flag: '🇸🇦', recognized: '1988-11-16'},
	{code: 'rs', name: {en: 'Serbia'}, flag: '🇷🇸', recognized: '1988-11-16'},
	{code: 'ae', name: {en: 'United Arab Emirates'}, flag: '🇦🇪', recognized: '1988-11-16'},
	{code: 'zm', name: {en: 'Zambia'}, flag: '🇿🇲', recognized: '1988-11-16'},
	{code: 'dz', name: {en: 'Algeria'}, flag: '🇩🇿', recognized: '1988-11-15'},
	{code: 'bh', name: {en: 'Bahrain'}, flag: '🇧🇭', recognized: '1988-11-15'},
	{code: 'id', name: {en: 'Indonesia'}, flag: '🇮🇩', recognized: '1988-11-15'},
	{code: 'iq', name: {en: 'Iraq'}, flag: '🇮🇶', recognized: '1988-11-15'},
	{code: 'kw', name: {en: 'Kuwait'}, flag: '🇰🇼', recognized: '1988-11-15'},
	{code: 'ly', name: {en: 'Libya'}, flag: '🇱🇾', recognized: '1988-11-15'},
	{code: 'my', name: {en: 'Malaysia'}, flag: '🇲🇾', recognized: '1988-11-15'},
	{code: 'mr', name: {en: 'Mauritania'}, flag: '🇲🇷', recognized: '1988-11-15'},
	{code: 'ma', name: {en: 'Morocco'}, flag: '🇲🇦', recognized: '1988-11-15'},
	{code: 'eh', name: {en: 'Sahrawi Republic'}, flag: '🇪🇭', recognized: '1988-11-15'},
	{code: 'so', name: {en: 'Somalia'}, flag: '🇸🇴', recognized: '1988-11-15'},
	{code: 'tn', name: {en: 'Tunisia'}, flag: '🇹🇳', recognized: '1988-11-15'},
	{code: 'tr', name: {en: 'Turkey'}, flag: '🇹🇷', recognized: '1988-11-15'},
	{code: 'ye', name: {en: 'Yemen'}, flag: '🇾🇪', recognized: '1988-11-15'},
]

/*
 * Newest recognition first, then A–Z by the country's name in `lang`.
 *
 * ISO dates compare correctly as plain strings, except that a month-only
 * 'YYYY-MM' is a prefix of every day in that month and would sort after all of
 * them; padding it to the 1st puts it with the rest of the month instead.
 */
const sortKey = (recognized: string) =>
	recognized.length === 7 ? `${recognized}-01` : recognized

export function byNewest(list: Country[], lang: Lang): Country[] {
	return [...list].sort((a, b) =>
		sortKey(b.recognized).localeCompare(sortKey(a.recognized))
		|| a.name[lang].localeCompare(b.name[lang], lang))
}

/*
 * Rank each state by its date of recognition, #1 being the earliest. Returns a
 * lookup keyed by ISO code — the ranking itself has nothing to do with the
 * code, that is only how the caller finds a country's rank.
 *
 * Competition ranking: states that recognized on the same date share a rank,
 * and the next rank skips past the whole tie — so with two states tied first
 * the next is #3, not #2. Fourteen states share 15 November 1988, the day
 * Palestine was declared, so #1 is held fourteen times and the next is #15.
 *
 * A rank is one more than the number of states that recognized strictly
 * earlier, which falls out of taking the first index of each key in the
 * ascending list. Keys are the same ones byNewest sorts on, so the numbers
 * always agree with the order the rows are displayed in.
 */
export function recognitionRanks(list: Country[]): Map<string, number> {
	const ascending = list.map(c => sortKey(c.recognized)).sort()
	const rankOfKey = new Map<string, number>()
	ascending.forEach((key, i) => {
		if (!rankOfKey.has(key)) rankOfKey.set(key, i + 1)
	})
	return new Map(list.map(c => [c.code, rankOfKey.get(sortKey(c.recognized)) as number]))
}
