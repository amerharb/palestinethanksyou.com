export type NewsItem = {
	id: string
	/* ISO date of the event the post is about: 'YYYY-MM-DD', or a coarser
	   'YYYY-MM' / 'YYYY' — shorter values still sort correctly as strings */
	date: string
	headline: string
	body: string
	/* source article — the headline links to it when set */
	url?: string
	/* publisher of that article, shown next to the date */
	source?: string
}

/*
 * The timeline column. Sorted newest-first by the UI, like the country list.
 * Every post should carry a `url` to the source it is based on.
 */
export const NEWS: NewsItem[] = [
	{
		id: 'sm-2025-09-23',
		date: '2025-09-23',
		headline: 'San Marino recognizes the State of Palestine',
		body: 'The State Congress approved a resolution recognizing Palestine as a sovereign and independent state within internationally recognized borders, in line with UN resolutions. Foreign Affairs Secretary Luca Beccari called it the unanimous will of San Marino\'s institutions, and went on to communicate the decision formally to the UN General Assembly\'s 80th session on 27 September.',
		url: 'https://www.sanmarinortv.sm/news/politica-c2/san-marino-riconosce-ufficialmente-lo-stato-di-palestina-a280680',
		source: 'San Marino RTV',
	},
	{
		id: 'fr-2025-09-22',
		date: '2025-09-22',
		headline: 'France recognizes the State of Palestine',
		body: 'President Emmanuel Macron declared the recognition at the high-level conference on the two-state solution, which France convened with Saudi Arabia at the UN in New York: "I declare that France today recognizes the State of Palestine." France was the first G7 member to convene such a conference, and several states announced their own recognition alongside it.',
		url: 'https://uk.diplomatie.gouv.fr/en/france-recognizes-state-palestine',
		source: 'France Diplomatie',
	},
	{
		id: 'lu-2025-09-22',
		date: '2025-09-22',
		headline: 'Luxembourg recognizes the State of Palestine',
		body: 'Prime Minister Luc Frieden, with Deputy Prime Minister and Foreign Minister Xavier Bettel, announced the recognition at the same UN conference. Luxembourg recognizes Palestine on the basis of the 1967 borders, prior to Israel\'s occupation of the Palestinian Territory, as most recently reaffirmed by UN Security Council Resolution 2334 (2016).',
		url: 'https://gouvernement.lu/en/actualites/toutes_actualites/communiques/2025/09-septembre/22-frieden-ny-palestine.html',
		source: 'Luxembourg Government',
	},
	{
		id: 'ad-2025-09-22',
		date: '2025-09-22',
		headline: 'Andorra recognizes the State of Palestine',
		body: 'Foreign Minister Imma Tor announced the recognition at the same UN conference. Head of Government Xavier Espot then said it would not carry full diplomatic effect until the hostages are released, Hamas is demilitarised and a Palestinian government is formed without it.',
		url: 'https://www.diariandorra.ad/nacional/250923/palestina-amb-condicions_180581.html',
		source: 'Diari d\'Andorra',
	},
	{
		id: 'under-construction',
		/* 0000 is a sentinel, not a real date: it keeps this notice pinned to the
		   bottom of the timeline however many real posts are added above it */
		date: '0000',
		headline: '🚧 This section is under construction',
		body: 'The timeline is not finished yet. Posts covering the recognitions in the list will be added here, each linking to its source.',
	},
]

/*
 * Most recent post first, then A–Z by headline so same-day posts have a
 * stable order — several states recognized Palestine on the same date.
 * ISO dates compare correctly as plain strings, coarser values included.
 */
export function byNewest(list: NewsItem[]): NewsItem[] {
	return [...list].sort((a, b) =>
		b.date.localeCompare(a.date) || a.headline.localeCompare(b.headline))
}
