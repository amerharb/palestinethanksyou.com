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
		id: 'mx-2025-02-05',
		date: '2025-02-05',
		headline: 'Mexico recognizes the State of Palestine',
		body: 'President Claudia Sheinbaum confirmed that Mexico recognizes both Palestine and Israel as states, and called for a peaceful settlement of the conflict. This restated a long-standing position rather than announcing a first recognition, and the date is less firmly documented than the others in this list.',
		url: 'https://cnnespanol.cnn.com/2025/02/05/mexico/video/sheinbaum-palestina-israel-estados-conflicto-orix-perspectivas-mexico-tv',
		source: 'CNN en Español',
	},
	{
		id: 'am-2024-06-21',
		date: '2024-06-21',
		headline: 'Armenia recognizes the State of Palestine',
		body: 'Armenia announced its recognition of the State of Palestine. Its Ministry of Foreign Affairs records the recognition on the page covering relations with Palestine.',
		url: 'https://www.mfa.am/en/bilateral-relations/ps',
		source: 'Armenia MFA',
	},
	{
		id: 'si-2024-06-04',
		date: '2024-06-04',
		headline: 'Slovenia recognizes the State of Palestine',
		body: 'Slovenia\'s government decided to recognize the State of Palestine, and the two states went on to establish diplomatic relations.',
		url: 'https://www.gov.si/en/news/2024-06-05-republika-slovenija-in-drzava-palestina-vzpostavili-diplomatske-odnose/',
		source: 'Government of Slovenia',
	},
	{
		id: 'ie-2024-05-28',
		date: '2024-05-28',
		headline: 'Ireland recognizes the State of Palestine',
		body: 'Announced in a step coordinated with Spain and Norway, all three taking effect the same day. Ireland framed the decision as an effort to keep the prospect of a two-state solution alive.',
		url: 'https://www.gov.ie/en/department-of-the-taoiseach/press-releases/ireland-recognises-the-state-of-palestine/',
		source: 'Government of Ireland',
	},
	{
		id: 'no-2024-05-28',
		date: '2024-05-28',
		headline: 'Norway recognizes the State of Palestine',
		body: 'Norway\'s recognition took effect on the same day as Ireland\'s and Spain\'s, announced by Prime Minister Jonas Gahr Støre as part of the coordinated move.',
		url: 'https://www.regjeringen.no/en/whats-new/norway-recognises-palestine-as-a-state/id3040194/',
		source: 'Government of Norway',
	},
	{
		id: 'es-2024-05-28',
		date: '2024-05-28',
		headline: 'Spain recognizes the State of Palestine',
		body: 'The Council of Ministers approved the recognition, announced by Prime Minister Pedro Sánchez, in the step coordinated with Ireland and Norway.',
		url: 'https://www.lamoncloa.gob.es/lang/en/presidente/news/paginas/2024/20240528-declaration-palestine.aspx',
		source: 'La Moncloa',
	},
	{
		id: 'bs-2024-05-07',
		date: '2024-05-07',
		headline: 'The Bahamas recognizes the State of Palestine',
		body: 'One of several CARICOM members to recognize the State of Palestine during 2024, alongside Jamaica, Barbados and Trinidad and Tobago.',
		url: 'https://caribbeannewsglobal.com/after-13-years-caricom-aligns-in-unified-stand-for-palestine-and-peace/',
		source: 'Caribbean News Global',
	},
	{
		id: 'tt-2024-05-02',
		date: '2024-05-02',
		headline: 'Trinidad and Tobago recognizes the State of Palestine',
		body: 'Trinidad and Tobago recognized the State of Palestine and formally established diplomatic relations with it.',
		url: 'https://www.guardian.co.tt/news/tt-formally-establishes-diplomatic-relations-with-palestine-6.2.2115693.ea293d01ce',
		source: 'Trinidad and Tobago Guardian',
	},
	{
		id: 'jm-2024-04-22',
		date: '2024-04-22',
		headline: 'Jamaica recognizes the State of Palestine',
		body: 'Jamaica announced its recognition of the State of Palestine, part of a wider shift among CARICOM members that year.',
		url: 'https://caribbeannewsglobal.com/after-13-years-caricom-aligns-in-unified-stand-for-palestine-and-peace/',
		source: 'Caribbean News Global',
	},
	{
		id: 'bb-2024-04-19',
		date: '2024-04-19',
		headline: 'Barbados recognizes the State of Palestine',
		body: 'The first of four CARICOM members to recognize the State of Palestine in April and May 2024, followed by Jamaica, Trinidad and Tobago and the Bahamas.',
		url: 'https://caribbeannewsglobal.com/after-13-years-caricom-aligns-in-unified-stand-for-palestine-and-peace/',
		source: 'Caribbean News Global',
	},
	{
		id: 'se-2014-10-30',
		date: '2014-10-30',
		headline: 'Sweden recognizes the State of Palestine',
		body: 'The Swedish government announced its recognition of the State of Palestine together with an increase in aid to Palestine, describing it as a consequence of its support for a two-state solution.',
		url: 'https://www.un.org/unispal/document/auto-insert-203405',
		source: 'Swedish MFA via UNISPAL',
	},
	{
		id: 'va-2013-02',
		date: '2013-02',
		headline: 'The Holy See recognizes the State of Palestine',
		body: 'The date given here is when the Holy See began referring to the State of Palestine, after the UN granted Palestine non-member observer state status. The Vatican itself dates its recognition to the comprehensive agreement of June 2015, whose tenth anniversary it marked in June 2025 — so this entry is the least settled in the list.',
		url: 'https://www.vaticannews.va/en/vatican-city/news/2025-06/palestine-holy-see-recognition-tenth-anniversary.html',
		source: 'Vatican News',
	},
	{
		id: 'un-doc-a78-846',
		/* 0001 keeps this reference note just above the under-construction notice:
		   it documents a source rather than reporting a dated event */
		date: '2024-04-09',
		headline: 'Question of Palestine: Admission of new Members to the United Nations — UN document A/78/846',
		body: 'For several states the only date available is the one in the list of recognitions transmitted to the UN Secretary-General in April 2024: Colombia, Guatemala, Haiti, Iceland, Saint Kitts and Nevis, Saint Lucia and Thailand. Each deserves its own source once one can be found.',
		url: 'https://docs.un.org/en/A/78/846',
		source: 'UN doc A/78/846',
	},
	{
		id: 'under-construction',
		/* 0000 is a sentinel, not a real date: it keeps this notice pinned to the
		   bottom of the timeline however many real posts are added above it */
		date: '0000',
		headline: '🚧 This section is under construction',
		body: 'This section is not finished yet. Sources for the remaining recognitions in the list will be added here.',
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
