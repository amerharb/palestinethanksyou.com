import { Lang } from './lang'

export type Country = {
	/* ISO 3166-1 alpha-2, lowercase — will be used to match the map's shapes
	   once the map becomes interactive */
	code: string
	/* the country's name per language — see Lang in src/lang.ts */
	name: Record<Lang, string>
	flag: string
	/* ISO date the country formally recognized the State of Palestine */
	recognized: string
}

/*
 * Countries that have formally recognized the State of Palestine.
 *
 * Only a first few are listed — around 150 UN member states have recognized
 * Palestine, so this list is far from complete. Order here doesn't matter:
 * the UI sorts newest-first (see byNewest).
 */
export const COUNTRIES: Country[] = [
	{code: 'fr', name: {en: 'France'}, flag: '🇫🇷', recognized: '2025-09-22'},
	{code: 'gb', name: {en: 'United Kingdom'}, flag: '🇬🇧', recognized: '2025-09-21'},
	{code: 'es', name: {en: 'Spain'}, flag: '🇪🇸', recognized: '2024-05-28'},
]

// Most recent recognition first. ISO dates sort correctly as plain strings.
export function byNewest(list: Country[]): Country[] {
	return [...list].sort((a, b) => (a.recognized < b.recognized ? 1 : -1))
}
