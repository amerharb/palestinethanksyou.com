const MONTHS = [
	'January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December',
]

// '2025-09-22' -> '22 September 2025'
export function formatDate(iso: string): string {
	const [year, month, day] = iso.split('-').map(Number)
	return `${day} ${MONTHS[month - 1]} ${year}`
}
