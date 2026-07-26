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
		id: 'mt-2025-09-22',
		date: '2025-09-22',
		headline: 'Malta recognizes the State of Palestine',
		body: 'Prime Minister Robert Abela announced the recognition at the UN conference on the two-state solution in New York, describing it as a concrete step towards a peaceful settlement between two states.',
		url: 'https://www.independent.com.mt/articles/2025-09-22/local-news/Malta-officially-recognises-the-State-of-Palestine-6736273350',
		source: 'The Malta Independent',
	},
	{
		id: 'mc-2025-09-22',
		date: '2025-09-22',
		headline: 'Monaco recognizes the State of Palestine',
		body: 'Prince Albert II announced the recognition from the podium at the same UN conference, restating Monaco\'s support for a settlement based on two national entities.',
		url: 'https://monaco-hebdo.com/actualites/international/monaco-reconnait-letat-de-palestine/',
		source: 'Monaco Hebdo',
	},
	{
		id: 'au-2025-09-21',
		date: '2025-09-21',
		headline: 'Australia recognizes the State of Palestine',
		body: 'Announced by Prime Minister Anthony Albanese, with a parallel statement from Foreign Minister Penny Wong: Australia recognizes the long-held aspirations of the people of Palestine to a state of their own, and says Hamas can have no role in it.',
		url: 'https://www.pm.gov.au/media/australia-recognises-state-palestine',
		source: 'Prime Minister of Australia',
	},
	{
		id: 'ca-2025-09-21',
		date: '2025-09-21',
		headline: 'Canada recognizes the State of Palestine',
		body: 'Prime Minister Mark Carney announced the recognition, framing it as consistent with Canada\'s long-standing support for a two-state solution and citing undertakings from the Palestinian Authority on elections and reform.',
		url: 'https://www.pm.gc.ca/en/news/statements/2025/09/21/statement-prime-minister-carney-on-canada-recognition-state-palestine',
		source: 'Prime Minister of Canada',
	},
	{
		id: 'pt-2025-09-21',
		date: '2025-09-21',
		headline: 'Portugal recognizes the State of Palestine',
		body: 'Minister of State and Foreign Affairs Paulo Rangel announced the recognition at Portugal\'s permanent mission to the UN in New York, making Portugal the thirteenth EU member state to recognize Palestine.',
		url: 'https://portugal.gov.pt/en/gc25/communication/news/portugal-formally-recognises-the-palestinian-state',
		source: 'Portuguese Government',
	},
	{
		id: 'gb-2025-09-21',
		date: '2025-09-21',
		headline: 'United Kingdom recognizes the State of Palestine',
		body: 'Prime Minister Keir Starmer announced that the United Kingdom formally recognizes the State of Palestine, presenting it as a step to protect the viability of a two-state solution. The UK said Hamas can have no role in Palestine\'s future.',
		url: 'https://www.gov.uk/government/speeches/pm-statement-on-the-recognition-of-palestine-21-september-2025',
		source: 'GOV.UK',
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
