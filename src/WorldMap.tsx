/*
 * Placeholder world map.
 *
 * These are hand-drawn continent silhouettes on an equirectangular-ish frame —
 * deliberately simplified, NOT accurate borders, and with no per-country
 * shapes. It exists to hold the layout until the real interactive map lands.
 *
 * The real thing needs country-level geometry (e.g. a TopoJSON/GeoJSON world
 * atlas rendered with d3-geo, or an SVG whose paths carry ISO 3166-1 codes) so
 * each country can be filled from COUNTRIES in src/countries.ts and made
 * clickable. None of the shapes below can carry that — don't build on them.
 */

// rough continent outlines, in a 1000x500 equirectangular-ish frame
const CONTINENTS: { id: string; d: string }[] = [
	{
		id: 'greenland',
		d: 'M300 52 L345 44 L366 62 L353 88 L322 97 L301 80 Z',
	},
	{
		id: 'north-america',
		d: 'M138 96 L166 80 L188 92 L212 74 L262 64 L318 72 L336 92 L328 116 '
			+ 'L306 130 L296 152 L306 166 L292 184 L268 194 L252 210 L238 230 '
			+ 'L228 244 L222 232 L230 210 L216 194 L198 178 L176 158 L156 132 '
			+ 'L142 116 Z',
	},
	{
		id: 'south-america',
		d: 'M272 246 L306 236 L344 244 L356 266 L348 292 L334 316 L326 344 '
			+ 'L318 372 L310 396 L300 386 L298 356 L288 330 L276 300 L266 272 Z',
	},
	{
		id: 'europe',
		d: 'M448 116 L484 106 L520 110 L546 124 L556 142 L540 156 L516 164 '
			+ 'L492 172 L470 166 L456 150 L446 132 Z',
	},
	{
		id: 'africa',
		d: 'M452 196 L500 188 L556 190 L588 200 L582 226 L566 248 L552 272 '
			+ 'L544 300 L532 326 L520 348 L508 336 L500 310 L486 288 L470 262 '
			+ 'L458 236 L448 214 Z',
	},
	{
		id: 'asia',
		d: 'M556 100 L620 84 L700 80 L780 88 L840 104 L862 128 L848 150 '
			+ 'L818 162 L790 176 L760 186 L730 196 L700 206 L672 200 L648 210 '
			+ 'L638 232 L628 250 L618 236 L610 212 L596 196 L578 180 L562 160 '
			+ 'L552 136 Z',
	},
	{
		id: 'india',
		d: 'M640 200 L672 198 L679 216 L666 244 L652 255 L642 234 Z',
	},
	{
		id: 'south-east-asia',
		d: 'M714 224 L744 220 L760 232 L748 248 L722 244 Z',
	},
	{
		id: 'australia',
		d: 'M790 306 L836 298 L866 312 L860 340 L830 356 L800 348 L784 328 Z',
	},
	{
		id: 'new-zealand',
		d: 'M886 352 L898 348 L902 364 L890 372 Z',
	},
]

function WorldMap() {
	return (
		<svg
			className="world-map"
			viewBox="0 0 1000 500"
			role="img"
			aria-label="Placeholder world map. The interactive version, highlighting
				countries that recognize Palestine, is not built yet."
		>
			{/* graticule, so the simplified shapes read as a deliberate sketch */}
			<g className="graticule">
				{[100, 200, 300, 400, 500, 600, 700, 800, 900].map(x => (
					<line key={`v${x}`} x1={x} y1="0" x2={x} y2="500"/>
				))}
				{[100, 200, 300, 400].map(y => (
					<line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y}/>
				))}
			</g>
			<g className="landmasses">
				{CONTINENTS.map(c => (
					<path key={c.id} id={c.id} d={c.d}/>
				))}
			</g>
		</svg>
	)
}

export default WorldMap
