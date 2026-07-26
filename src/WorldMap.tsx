import { useEffect, useRef, useState } from 'react'
import { Country } from './countries'
import { Lang } from './lang'
import { formatDate } from './format'

/*
 * Interactive world map: every country that recognizes Palestine is filled in,
 * the rest stay neutral, and hovering any of them shows its name — plus the
 * date of recognition where there is one.
 *
 * The geometry lives in public/world.json rather than in the bundle: it is
 * ~270 kB of path data (~96 kB gzipped), which would more than double the JS
 * payload if inlined. It is generated from the Natural Earth 50m world atlas,
 * projected with d3-geo's Natural Earth projection and simplified — see the
 * note inside the file. Regenerating it is a build-time job, so d3 and
 * topojson are not dependencies of this project.
 */

type Shape = {
	/* ISO 3166-1 alpha-2, lowercase. Absent for territories without one
	   (Kosovo, Somaliland, N. Cyprus …), which are drawn but not interactive. */
	c?: string
	/* name from the atlas, used only when the country isn't in our own data */
	n: string
	d: string
}

type World = { width: number; height: number; shapes: Shape[] }

type Hovered = { name: string; date?: string; x: number; y: number }

type Props = {
	countries: Country[]
	lang: Lang
}

function WorldMap({ countries, lang }: Props) {
	const [world, setWorld] = useState<World | null>(null)
	const [failed, setFailed] = useState(false)
	const [hovered, setHovered] = useState<Hovered | null>(null)
	const wrapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		let live = true
		fetch('/world.json')
			.then(r => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
			.then((w: World) => { if (live) setWorld(w) })
			.catch(() => { if (live) setFailed(true) })
		return () => { live = false }
	}, [])

	const recognized = new Map(countries.map(c => [c.code, c]))

	function onEnter(shape: Shape, event: React.MouseEvent) {
		const country = shape.c ? recognized.get(shape.c) : undefined
		const box = wrapRef.current?.getBoundingClientRect()
		setHovered({
			name: country ? country.name[lang] : shape.n,
			date: country?.recognized,
			x: event.clientX - (box?.left ?? 0),
			y: event.clientY - (box?.top ?? 0),
		})
	}

	if (failed) {
		return (
			<p className="map-message">
				The map could not be loaded. The full list of states is below.
			</p>
		)
	}

	if (!world) {
		return <div className="map-skeleton" aria-hidden="true"/>
	}

	return (
		<div className="map-wrap" ref={wrapRef}>
			<svg
				className="world-map"
				viewBox={`0 0 ${world.width} ${world.height}`}
				role="img"
				aria-label={`World map with ${countries.length} states that recognize
					Palestine filled in. The same states are listed under Countries.`}
			>
				{world.shapes.map((s, i) => {
					const country = s.c ? recognized.get(s.c) : undefined
					return (
						<path
							key={s.c ?? `x${i}`}
							d={s.d}
							className={country ? 'country-shape recognized' : 'country-shape'}
							onMouseEnter={e => onEnter(s, e)}
							onMouseMove={e => onEnter(s, e)}
							onMouseLeave={() => setHovered(null)}
						/>
					)
				})}
			</svg>
			{hovered && (
				<div
					className="map-tooltip"
					style={{ left: hovered.x, top: hovered.y }}
					role="status"
				>
					<span className="map-tooltip-name">{hovered.name}</span>
					{hovered.date && (
						<span className="map-tooltip-date">{formatDate(hovered.date)}</span>
					)}
				</div>
			)}
		</div>
	)
}

export default WorldMap
