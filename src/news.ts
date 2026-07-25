export type NewsItem = {
	id: string
	/* ISO date of the post */
	date: string
	headline: string
	body: string
	/*
	 * Placeholder copy, not real reporting. Rendered with a visible "sample"
	 * tag so it can never be mistaken for a sourced post. Drop this flag (and
	 * rewrite the text) as real, sourced entries replace them.
	 */
	sample?: boolean
}

/*
 * The timeline column. Sorted newest-first by the UI, like the country list.
 *
 * Everything here is placeholder text describing what the real posts will
 * cover — no invented recognitions, dates or quotes attributed to real states.
 */
export const NEWS: NewsItem[] = [
	{
		id: 'sample-5',
		date: '2026-07-24',
		headline: 'Sample post — a new recognition',
		body: 'Placeholder for a short post marking a country formally recognizing the State of Palestine, with a link to the official statement.',
		sample: true,
	},
	{
		id: 'sample-4',
		date: '2026-07-11',
		headline: 'Sample post — a longer entry, to check how the column wraps',
		body: 'Placeholder copy sized to show a post running to several lines, so the spacing between the headline, the date and the body can be judged before the real text arrives. Replace with a sourced entry.',
		sample: true,
	},
	{
		id: 'sample-3',
		date: '2026-06-30',
		headline: 'Sample post — a statement of support',
		body: 'Placeholder for a post quoting a government or parliament statement, credited to its source.',
		sample: true,
	},
	{
		id: 'sample-2',
		date: '2026-06-15',
		headline: 'Sample post — a milestone in the count',
		body: 'Placeholder for a post noting the total number of recognizing states passing a round number.',
		sample: true,
	},
	{
		id: 'sample-1',
		date: '2026-05-28',
		headline: 'Sample post — an anniversary',
		body: 'Placeholder for a post marking the anniversary of an earlier recognition.',
		sample: true,
	},
]

// Most recent post first. ISO dates sort correctly as plain strings.
export function byNewest(list: NewsItem[]): NewsItem[] {
	return [...list].sort((a, b) => (a.date < b.date ? 1 : -1))
}
