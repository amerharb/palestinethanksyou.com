const MONTHS = [
	'January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December',
]

/*
 * '2025-09-22' -> '22 September 2025'
 * '2013-02'    -> 'February 2013'   (only the month is documented)
 * '1900'       -> '1900'            (year only)
 */
export function formatDate(iso: string): string {
	const [year, month, day] = iso.split('-').map(Number)
	if (!month) return String(year)
	const monthName = MONTHS[month - 1]
	return day ? `${day} ${monthName} ${year}` : `${monthName} ${year}`
}
