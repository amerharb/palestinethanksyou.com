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
		id: 'under-construction',
		/* 1900 is a sentinel, not a real date: it keeps this notice pinned to the
		   bottom of the timeline however many real posts are added above it */
		date: '1900',
		headline: '🚧 This section is under construction',
		body: 'The timeline is not finished yet. Posts covering the recognitions in the list will be added here, each linking to its source.',
	},
	{
		id: 'sm-2025-09-23',
		date: '2025-09-23',
		headline: 'San Marino recognizes the State of Palestine',
		body: 'The State Congress approved a resolution recognizing Palestine as a sovereign and independent state within internationally recognized borders, in line with UN resolutions. Foreign Affairs Secretary Luca Beccari called it the unanimous will of San Marino\'s institutions, and went on to communicate the decision formally to the UN General Assembly\'s 80th session on 27 September.',
		url: 'https://www.sanmarinortv.sm/news/politica-c2/san-marino-riconosce-ufficialmente-lo-stato-di-palestina-a280680',
		source: 'San Marino RTV',
	},
]

// Most recent post first. ISO dates sort correctly as plain strings.
export function byNewest(list: NewsItem[]): NewsItem[] {
	return [...list].sort((a, b) => (a.date < b.date ? 1 : -1))
}
