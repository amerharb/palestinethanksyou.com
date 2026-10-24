import { ReactNode } from 'react'
import { Order } from './countries'

/*
 * Which order the country list is in.
 *
 * Down is newest first and up is oldest first: the arrow runs along the dates
 * the way a sorted column does everywhere else, rather than pointing at where
 * the newest row lands. A is A–Z by name, and is where the rank column stops
 * counting in order and starts being worth reading.
 *
 * The glyphs are drawn rather than set in type. A letter A as <text> would be
 * at the mercy of whatever font the reader has — the same hazard the flag
 * webfont exists to avoid — so it is three strokes like the arrow beside it.
 */

function ArrowDown() {
	return (
		<svg className="sort-icon" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 4.5V19"/>
			<path d="M6 13l6 6 6-6"/>
		</svg>
	)
}

function ArrowUp() {
	return (
		<svg className="sort-icon" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 19.5V5"/>
			<path d="M6 11l6-6 6 6"/>
		</svg>
	)
}

function ArrowAlpha() {
	return (
		<svg className="sort-icon" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M5 5v14"/>
			<path d="M1.5 15.5L5 19l3.5-3.5"/>
			{/* an A in three strokes: two legs and the bar, which meets them
			    where they are 5 units apart */}
			<path d="M12.5 19L16.5 5.5L20.5 19"/>
			<path d="M14 14h5"/>
		</svg>
	)
}

type Props = {
	order: Order
	onChange: (order: Order) => void
}

/*
 * aria-pressed rather than a radio group: these read as a row of toggles, and
 * exactly one being pressed is what tells the reader which order they are
 * looking at — the list itself never says.
 */
const BUTTONS: { value: Order; label: string; icon: ReactNode }[] = [
	{ value: 'newest', label: 'Newest first', icon: <ArrowDown/> },
	{ value: 'oldest', label: 'Oldest first', icon: <ArrowUp/> },
	{ value: 'alpha', label: 'A to Z by name', icon: <ArrowAlpha/> },
]

function SortButtons({ order, onChange }: Props) {
	return (
		<div className="sort-buttons">
			<span className="visually-hidden">Order the list by:</span>
			{BUTTONS.map(b => (
				<button
					key={b.value}
					type="button"
					className="sort-btn"
					title={b.label}
					aria-label={b.label}
					aria-pressed={order === b.value}
					onClick={() => onChange(b.value)}
				>
					{b.icon}
				</button>
			))}
		</div>
	)
}

export default SortButtons
