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
	/*
	 * Population. Required, so a new country cannot be added without one.
	 *
	 * 157 of these are the World Bank's SP.POP.TOTL indicator for 2025. The
	 * World Bank covers member economies, so two are from elsewhere and are
	 * rougher than the rest: the Holy See is 882, the 2024 resident estimate
	 * including non-citizens, and the Sahrawi Republic is a round 200,000, an
	 * approximation — its population is genuinely disputed and split between
	 * the territory and the refugee camps in Algeria, which UNHCR put at
	 * 173,600 in 2023.
	 */
	population: number
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
 * Population figures come from a second source: the World Bank's SP.POP.TOTL
 * indicator, taking each country's most recent value, which is 2025 for all
 * 157 it covers. The Holy See and the Sahrawi Republic are not World Bank
 * economies and are estimated separately — see the type. Their sum drives the
 * share bar under the thanks text (see totalPopulation and WORLD_POPULATION).
 *
 * Listed newest-first then A–Z, but order here doesn't matter: the UI sorts
 * (see byNewest).
 */
export const COUNTRIES: Country[] = [
	{code: 'sm', name: {en: 'San Marino'}, flag: '🇸🇲', recognized: '2025-09-23', population: 34109},
	{code: 'ad', name: {en: 'Andorra'}, flag: '🇦🇩', recognized: '2025-09-22', population: 82904},
	{code: 'fr', name: {en: 'France'}, flag: '🇫🇷', recognized: '2025-09-22', population: 68720337},
	{code: 'lu', name: {en: 'Luxembourg'}, flag: '🇱🇺', recognized: '2025-09-22', population: 686970},
	{code: 'mt', name: {en: 'Malta'}, flag: '🇲🇹', recognized: '1988-11-16', population: 579704},
	{code: 'mc', name: {en: 'Monaco'}, flag: '🇲🇨', recognized: '2025-09-22', population: 38341},
	{code: 'au', name: {en: 'Australia'}, flag: '🇦🇺', recognized: '2025-09-21', population: 27614411},
	{code: 'ca', name: {en: 'Canada'}, flag: '🇨🇦', recognized: '2025-09-21', population: 41651653},
	{code: 'pt', name: {en: 'Portugal'}, flag: '🇵🇹', recognized: '2025-09-21', population: 10804871},
	{code: 'gb', name: {en: 'United Kingdom'}, flag: '🇬🇧', recognized: '2025-09-21', population: 69487000},
	{code: 'mx', name: {en: 'Mexico'}, flag: '🇲🇽', recognized: '2023-06-02', population: 131946900},
	{code: 'am', name: {en: 'Armenia'}, flag: '🇦🇲', recognized: '2024-06-21', population: 3086700},
	{code: 'si', name: {en: 'Slovenia'}, flag: '🇸🇮', recognized: '2024-06-04', population: 2130986},
	{code: 'ie', name: {en: 'Ireland'}, flag: '🇮🇪', recognized: '2024-05-28', population: 5484367},
	{code: 'no', name: {en: 'Norway'}, flag: '🇳🇴', recognized: '2024-05-28', population: 5610870},
	{code: 'es', name: {en: 'Spain'}, flag: '🇪🇸', recognized: '2024-05-28', population: 49355143},
	{code: 'bs', name: {en: 'Bahamas'}, flag: '🇧🇸', recognized: '2024-05-07', population: 403033},
	{code: 'tt', name: {en: 'Trinidad and Tobago'}, flag: '🇹🇹', recognized: '2024-05-02', population: 1367764},
	{code: 'jm', name: {en: 'Jamaica'}, flag: '🇯🇲', recognized: '2024-04-22', population: 2837077},
	{code: 'bb', name: {en: 'Barbados'}, flag: '🇧🇧', recognized: '2024-04-19', population: 282623},
	{code: 'kn', name: {en: 'Saint Kitts and Nevis'}, flag: '🇰🇳', recognized: '2019-07-29', population: 46922},
	{code: 'co', name: {en: 'Colombia'}, flag: '🇨🇴', recognized: '2018-08-03', population: 53425635},
	{code: 'lc', name: {en: 'Saint Lucia'}, flag: '🇱🇨', recognized: '2015-09-14', population: 180149},
	{code: 'se', name: {en: 'Sweden'}, flag: '🇸🇪', recognized: '2014-10-30', population: 10596620},
	{code: 'ht', name: {en: 'Haiti'}, flag: '🇭🇹', recognized: '2013-09-27', population: 11906095},
	{code: 'gt', name: {en: 'Guatemala'}, flag: '🇬🇹', recognized: '2013-04-09', population: 18687881},
	{code: 'va', name: {en: 'Holy See'}, flag: '🇻🇦', recognized: '2015-06-26', population: 882},
	{code: 'th', name: {en: 'Thailand'}, flag: '🇹🇭', recognized: '2012-01-18', population: 71619863},
	{code: 'is', name: {en: 'Iceland'}, flag: '🇮🇸', recognized: '2011-12-15', population: 392404},
	{code: 'gd', name: {en: 'Grenada'}, flag: '🇬🇩', recognized: '2011-09-25', population: 117303},
	{code: 'ag', name: {en: 'Antigua and Barbuda'}, flag: '🇦🇬', recognized: '2011-09-22', population: 94209},
	{code: 'dm', name: {en: 'Dominica'}, flag: '🇩🇲', recognized: '2011-09-19', population: 65871},
	{code: 'bz', name: {en: 'Belize'}, flag: '🇧🇿', recognized: '2011-09-09', population: 422924},
	{code: 'vc', name: {en: 'Saint Vincent and the Grenadines'}, flag: '🇻🇨', recognized: '2011-08-29', population: 99924},
	{code: 'hn', name: {en: 'Honduras'}, flag: '🇭🇳', recognized: '2011-08-26', population: 11005850},
	{code: 'sv', name: {en: 'El Salvador'}, flag: '🇸🇻', recognized: '2011-08-25', population: 6365503},
	{code: 'lr', name: {en: 'Liberia'}, flag: '🇱🇷', recognized: '2011-07-19', population: 5731206},
	{code: 'sy', name: {en: 'Syria'}, flag: '🇸🇾', recognized: '2011-07-18', population: 25620427},
	{code: 'ss', name: {en: 'South Sudan'}, flag: '🇸🇸', recognized: '2011-07-14', population: 12188788},
	{code: 'ls', name: {en: 'Lesotho'}, flag: '🇱🇸', recognized: '2011-05-03', population: 2363325},
	{code: 'uy', name: {en: 'Uruguay'}, flag: '🇺🇾', recognized: '2011-03-16', population: 3384688},
	{code: 'sr', name: {en: 'Suriname'}, flag: '🇸🇷', recognized: '2011-01-26', population: 639850},
	{code: 'pe', name: {en: 'Peru'}, flag: '🇵🇪', recognized: '2011-01-24', population: 34576665},
	{code: 'gy', name: {en: 'Guyana'}, flag: '🇬🇾', recognized: '2011-01-13', population: 835986},
	{code: 'cl', name: {en: 'Chile'}, flag: '🇨🇱', recognized: '2011-01-07', population: 19859921},
	{code: 'ec', name: {en: 'Ecuador'}, flag: '🇪🇨', recognized: '2010-12-27', population: 18289896},
	{code: 'bo', name: {en: 'Bolivia'}, flag: '🇧🇴', recognized: '2010-12-17', population: 12581843},
	{code: 'ar', name: {en: 'Argentina'}, flag: '🇦🇷', recognized: '2010-12-06', population: 45851378},
	{code: 'br', name: {en: 'Brazil'}, flag: '🇧🇷', recognized: '2011-12-03', population: 212812405},
	{code: 'do', name: {en: 'Dominican Republic'}, flag: '🇩🇴', recognized: '2009-07-15', population: 11520487},
	{code: 've', name: {en: 'Venezuela'}, flag: '🇻🇪', recognized: '2009-04-27', population: 28516896},
	{code: 'ci', name: {en: 'Ivory Coast'}, flag: '🇨🇮', recognized: '2008-12-01', population: 32711547},
	{code: 'lb', name: {en: 'Lebanon'}, flag: '🇱🇧', recognized: '2008-11-30', population: 5849421},
	{code: 'cr', name: {en: 'Costa Rica'}, flag: '🇨🇷', recognized: '2008-02-05', population: 5152950},
	{code: 'me', name: {en: 'Montenegro'}, flag: '🇲🇪', recognized: '2006-07-24', population: 623129},
	{code: 'py', name: {en: 'Paraguay'}, flag: '🇵🇾', recognized: '2011-01-29', population: 7013078},
	{code: 'tl', name: {en: 'Timor-Leste'}, flag: '🇹🇱', recognized: '2004-03-01', population: 1418517},
	{code: 'mw', name: {en: 'Malawi'}, flag: '🇲🇼', recognized: '1998-10-23', population: 22216120},
	{code: 'kg', name: {en: 'Kyrgyzstan'}, flag: '🇰🇬', recognized: '1995-11', population: 7343064},
	{code: 'za', name: {en: 'South Africa'}, flag: '🇿🇦', recognized: '1995-02-15', population: 64747319},
	{code: 'pg', name: {en: 'Papua New Guinea'}, flag: '🇵🇬', recognized: '1995-01-13', population: 10762817},
	{code: 'uz', name: {en: 'Uzbekistan'}, flag: '🇺🇿', recognized: '1994-09-25', population: 37053428},
	{code: 'tj', name: {en: 'Tajikistan'}, flag: '🇹🇯', recognized: '1994-04-02', population: 10786734},
	{code: 'ba', name: {en: 'Bosnia and Herzegovina'}, flag: '🇧🇦', recognized: '1992-05-27', population: 3140095},
	{code: 'ge', name: {en: 'Georgia'}, flag: '🇬🇪', recognized: '1992-04-25', population: 3935766},
	{code: 'tm', name: {en: 'Turkmenistan'}, flag: '🇹🇲', recognized: '1992-04-17', population: 7618847},
	{code: 'az', name: {en: 'Azerbaijan'}, flag: '🇦🇿', recognized: '1992-04-15', population: 10246996},
	{code: 'kz', name: {en: 'Kazakhstan'}, flag: '🇰🇿', recognized: '1992-04-06', population: 20843754},
	{code: 'sz', name: {en: 'Eswatini'}, flag: '🇸🇿', recognized: '1991-07-01', population: 1256174},
	{code: 'ph', name: {en: 'Philippines'}, flag: '🇵🇭', recognized: '1989-09-04', population: 116786962},
	{code: 'vu', name: {en: 'Vanuatu'}, flag: '🇻🇺', recognized: '1989-08-21', population: 335169},
	{code: 'bj', name: {en: 'Benin'}, flag: '🇧🇯', recognized: '1989-05-12', population: 14814460},
	{code: 'ke', name: {en: 'Kenya'}, flag: '🇰🇪', recognized: '1989-05-12', population: 57532493},
	{code: 'gq', name: {en: 'Equatorial Guinea'}, flag: '🇬🇶', recognized: '1989-05', population: 1938431},
	{code: 'et', name: {en: 'Ethiopia'}, flag: '🇪🇹', recognized: '1989-02-04', population: 135472051},
	{code: 'ir', name: {en: 'Iran'}, flag: '🇮🇷', recognized: '1989-02-04', population: 92417681},
	{code: 'rw', name: {en: 'Rwanda'}, flag: '🇷🇼', recognized: '1989-01-02', population: 14569341},
	{code: 'bt', name: {en: 'Bhutan'}, flag: '🇧🇹', recognized: '1988-12-25', population: 796682},
	{code: 'cf', name: {en: 'Central African Republic'}, flag: '🇨🇫', recognized: '1988-12-23', population: 5513282},
	{code: 'bi', name: {en: 'Burundi'}, flag: '🇧🇮', recognized: '1988-12-22', population: 14390003},
	{code: 'bw', name: {en: 'Botswana'}, flag: '🇧🇼', recognized: '1988-12-19', population: 2562122},
	{code: 'np', name: {en: 'Nepal'}, flag: '🇳🇵', recognized: '1988-12-19', population: 29618118},
	{code: 'cd', name: {en: 'Democratic Republic of the Congo'}, flag: '🇨🇩', recognized: '1988-12-18', population: 112832473},
	{code: 'pl', name: {en: 'Poland'}, flag: '🇵🇱', recognized: '1988-12-14', population: 36435861},
	{code: 'om', name: {en: 'Oman'}, flag: '🇴🇲', recognized: '1988-12-13', population: 5494691},
	{code: 'ga', name: {en: 'Gabon'}, flag: '🇬🇦', recognized: '1988-12-12', population: 2593130},
	{code: 'st', name: {en: 'São Tomé and Príncipe'}, flag: '🇸🇹', recognized: '1988-12-10', population: 240254},
	{code: 'mz', name: {en: 'Mozambique'}, flag: '🇲🇿', recognized: '1988-12-08', population: 35631653},
	{code: 'ao', name: {en: 'Angola'}, flag: '🇦🇴', recognized: '1988-12-06', population: 39040039},
	{code: 'cg', name: {en: 'Republic of the Congo'}, flag: '🇨🇬', recognized: '1988-12-05', population: 6484437},
	{code: 'sl', name: {en: 'Sierra Leone'}, flag: '🇸🇱', recognized: '1988-12-03', population: 8819794},
	{code: 'ug', name: {en: 'Uganda'}, flag: '🇺🇬', recognized: '1988-12-03', population: 51384894},
	{code: 'la', name: {en: 'Laos'}, flag: '🇱🇦', recognized: '1988-12-02', population: 7873046},
	{code: 'td', name: {en: 'Chad'}, flag: '🇹🇩', recognized: '1988-12-01', population: 21003705},
	{code: 'gh', name: {en: 'Ghana'}, flag: '🇬🇭', recognized: '1988-11-29', population: 35064272},
	{code: 'tg', name: {en: 'Togo'}, flag: '🇹🇬', recognized: '1988-11-29', population: 8591626},
	{code: 'zw', name: {en: 'Zimbabwe'}, flag: '🇿🇼', recognized: '1988-11-29', population: 16950795},
	{code: 'mv', name: {en: 'Maldives'}, flag: '🇲🇻', recognized: '1988-11-28', population: 529676},
	{code: 'bg', name: {en: 'Bulgaria'}, flag: '🇧🇬', recognized: '1988-11-25', population: 6433302},
	{code: 'cv', name: {en: 'Cape Verde'}, flag: '🇨🇻', recognized: '1988-11-24', population: 527326},
	{code: 'ne', name: {en: 'Niger'}, flag: '🇳🇪', recognized: '1988-11-24', population: 27917831},
	{code: 'kp', name: {en: 'North Korea'}, flag: '🇰🇵', recognized: '1988-11-24', population: 26571036},
	{code: 'ro', name: {en: 'Romania'}, flag: '🇷🇴', recognized: '1988-11-24', population: 19020271},
	{code: 'tz', name: {en: 'Tanzania'}, flag: '🇹🇿', recognized: '1988-11-24', population: 70545865},
	{code: 'hu', name: {en: 'Hungary'}, flag: '🇭🇺', recognized: '1988-11-23', population: 9514251},
	{code: 'mn', name: {en: 'Mongolia'}, flag: '🇲🇳', recognized: '1988-11-22', population: 3568978},
	{code: 'sn', name: {en: 'Senegal'}, flag: '🇸🇳', recognized: '1988-11-22', population: 18931966},
	{code: 'bf', name: {en: 'Burkina Faso'}, flag: '🇧🇫', recognized: '1988-11-21', population: 24074580},
	{code: 'kh', name: {en: 'Cambodia'}, flag: '🇰🇭', recognized: '1988-11-21', population: 17847982},
	{code: 'km', name: {en: 'Comoros'}, flag: '🇰🇲', recognized: '1988-11-21', population: 882847},
	{code: 'gn', name: {en: 'Guinea'}, flag: '🇬🇳', recognized: '1988-11-21', population: 15099727},
	{code: 'gw', name: {en: 'Guinea-Bissau'}, flag: '🇬🇼', recognized: '1988-11-21', population: 2249515},
	{code: 'ml', name: {en: 'Mali'}, flag: '🇲🇱', recognized: '1988-11-21', population: 25198821},
	{code: 'cn', name: {en: 'China'}, flag: '🇨🇳', recognized: '1988-11-20', population: 1406585000},
	{code: 'by', name: {en: 'Belarus'}, flag: '🇧🇾', recognized: '1988-11-19', population: 9085991},
	{code: 'na', name: {en: 'Namibia'}, flag: '🇳🇦', recognized: '1988-11-19', population: 3092816},
	{code: 'ru', name: {en: 'Russia'}, flag: '🇷🇺', recognized: '1988-11-19', population: 143513328},
	{code: 'ua', name: {en: 'Ukraine'}, flag: '🇺🇦', recognized: '1988-11-19', population: 38980376},
	{code: 'vn', name: {en: 'Vietnam'}, flag: '🇻🇳', recognized: '1988-11-19', population: 101598527},
	{code: 'cy', name: {en: 'Cyprus'}, flag: '🇨🇾', recognized: '1988-11-18', population: 1370754},
	{code: 'cz', name: {en: 'Czech Republic'}, flag: '🇨🇿', recognized: '1988-11-18', population: 10886878},
	{code: 'eg', name: {en: 'Egypt'}, flag: '🇪🇬', recognized: '1988-11-18', population: 118365995},
	{code: 'gm', name: {en: 'Gambia'}, flag: '🇬🇲', recognized: '1988-11-18', population: 2822093},
	{code: 'in', name: {en: 'India'}, flag: '🇮🇳', recognized: '1988-11-18', population: 1463865525},
	{code: 'ng', name: {en: 'Nigeria'}, flag: '🇳🇬', recognized: '1988-11-18', population: 237527782},
	{code: 'sc', name: {en: 'Seychelles'}, flag: '🇸🇨', recognized: '1988-11-18', population: 122730},
	{code: 'sk', name: {en: 'Slovakia'}, flag: '🇸🇰', recognized: '1988-11-18', population: 5413813},
	{code: 'lk', name: {en: 'Sri Lanka'}, flag: '🇱🇰', recognized: '1988-11-18', population: 21756000},
	{code: 'al', name: {en: 'Albania'}, flag: '🇦🇱', recognized: '1988-11-17', population: 2349580},
	{code: 'bn', name: {en: 'Brunei'}, flag: '🇧🇳', recognized: '1988-11-17', population: 466330},
	{code: 'dj', name: {en: 'Djibouti'}, flag: '🇩🇯', recognized: '1988-11-17', population: 1184076},
	{code: 'mu', name: {en: 'Mauritius'}, flag: '🇲🇺', recognized: '1988-11-17', population: 1243741},
	{code: 'sd', name: {en: 'Sudan'}, flag: '🇸🇩', recognized: '1988-11-17', population: 51662147},
	{code: 'af', name: {en: 'Afghanistan'}, flag: '🇦🇫', recognized: '1988-11-16', population: 43844111},
	{code: 'bd', name: {en: 'Bangladesh'}, flag: '🇧🇩', recognized: '1988-11-16', population: 175686899},
	{code: 'cu', name: {en: 'Cuba'}, flag: '🇨🇺', recognized: '1988-11-16', population: 10937203},
	{code: 'jo', name: {en: 'Jordan'}, flag: '🇯🇴', recognized: '1988-11-16', population: 11520684},
	{code: 'mg', name: {en: 'Madagascar'}, flag: '🇲🇬', recognized: '1988-11-16', population: 32740678},
	{code: 'ni', name: {en: 'Nicaragua'}, flag: '🇳🇮', recognized: '1988-11-16', population: 7007502},
	{code: 'pk', name: {en: 'Pakistan'}, flag: '🇵🇰', recognized: '1988-11-16', population: 255219554},
	{code: 'qa', name: {en: 'Qatar'}, flag: '🇶🇦', recognized: '1988-11-16', population: 2972215},
	{code: 'sa', name: {en: 'Saudi Arabia'}, flag: '🇸🇦', recognized: '1988-11-16', population: 36973555},
	{code: 'rs', name: {en: 'Serbia'}, flag: '🇷🇸', recognized: '1988-11-16', population: 6549143},
	{code: 'ae', name: {en: 'United Arab Emirates'}, flag: '🇦🇪', recognized: '1988-11-16', population: 11513149},
	{code: 'zm', name: {en: 'Zambia'}, flag: '🇿🇲', recognized: '1988-11-16', population: 21913874},
	{code: 'dz', name: {en: 'Algeria'}, flag: '🇩🇿', recognized: '1988-11-15', population: 47435312},
	{code: 'bh', name: {en: 'Bahrain'}, flag: '🇧🇭', recognized: '1988-11-15', population: 1600366},
	{code: 'id', name: {en: 'Indonesia'}, flag: '🇮🇩', recognized: '1988-11-15', population: 285721236},
	{code: 'iq', name: {en: 'Iraq'}, flag: '🇮🇶', recognized: '1988-11-15', population: 47020774},
	{code: 'kw', name: {en: 'Kuwait'}, flag: '🇰🇼', recognized: '1988-11-15', population: 4865298},
	{code: 'ly', name: {en: 'Libya'}, flag: '🇱🇾', recognized: '1988-11-15', population: 7458555},
	{code: 'my', name: {en: 'Malaysia'}, flag: '🇲🇾', recognized: '1988-11-15', population: 35977838},
	{code: 'mr', name: {en: 'Mauritania'}, flag: '🇲🇷', recognized: '1988-11-15', population: 5315065},
	{code: 'ma', name: {en: 'Morocco'}, flag: '🇲🇦', recognized: '1988-11-15', population: 38430770},
	{code: 'eh', name: {en: 'Sahrawi Republic'}, flag: '🇪🇭', recognized: '1988-11-15', population: 200000},
	{code: 'so', name: {en: 'Somalia'}, flag: '🇸🇴', recognized: '1988-11-15', population: 19654739},
	{code: 'tn', name: {en: 'Tunisia'}, flag: '🇹🇳', recognized: '1988-11-15', population: 12348573},
	{code: 'tr', name: {en: 'Turkey'}, flag: '🇹🇷', recognized: '1988-11-15', population: 85878556},
	{code: 'ye', name: {en: 'Yemen'}, flag: '🇾🇪', recognized: '1988-11-15', population: 41773878},
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
 * World population: the World Bank's SP.POP.TOTL for the World aggregate in
 * 2025 — the same indicator and year as the per-country figures, so the share
 * of humanity below is a like-for-like comparison rather than two sources
 * divided by each other.
 */
export const WORLD_POPULATION = 8_215_424_893

/* Combined population of the listed states. Summed, not stored, so it stays
   right as countries are added. */
export function totalPopulation(list: Country[]): number {
	return list.reduce((sum, c) => sum + c.population, 0)
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
	/* same comparison byNewest uses, so ranks can't disagree with row order */
	const ascending = list.map(c => sortKey(c.recognized)).sort((a, b) => a.localeCompare(b))
	const rankOfKey = new Map<string, number>()
	ascending.forEach((key, i) => {
		if (!rankOfKey.has(key)) rankOfKey.set(key, i + 1)
	})
	return new Map(list.map(c => [c.code, rankOfKey.get(sortKey(c.recognized)) as number]))
}
