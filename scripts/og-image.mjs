/*
 * Regenerates public/og.png — the picture shown when the site is shared.
 *
 *     npm run og
 *
 * Nothing in the image is typed by hand. The outlines come from
 * public/world.json, which states are filled comes from src/countries.ts, and
 * the colours are read out of src/index.css, so the card cannot drift from the
 * map it is a picture of. The headline count is read from the data too — which
 * is the reason this script exists: the count is baked into the pixels, so the
 * card keeps claiming the old number until this is re-run.
 *
 * Two steps: build an SVG here, then rasterise it with scripts/og-image.swift,
 * which uses AppKit and so needs macOS. That is the trade for adding no npm
 * dependency to a project that deliberately has almost none — if this ever has
 * to run in CI, swap that step for resvg or sharp and keep the rest.
 */

import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const WIDTH = 1200
const HEIGHT = 630
const MAP_WIDTH = 1070
const MAP_TOP = 130

const root = new URL('..', import.meta.url).pathname

/* the dark half of each `light-dark(light, dark)` pair — the card is dark */
function palette() {
	const css = readFileSync(join(root, 'src/index.css'), 'utf8')
	const wanted = ['bg', 'fg', 'muted', 'map-sea', 'map-land', 'map-recognized', 'map-palestine']
	const found = {}
	for (const name of wanted) {
		const m = css.match(new RegExp(`--${name}:\\s*light-dark\\(\\s*[^,]+,\\s*([^)]+)\\)`))
		if (!m) throw new Error(`--${name} not found in src/index.css`)
		found[name] = m[1].trim()
	}
	return found
}

function recognizingCodes() {
	const src = readFileSync(join(root, 'src/countries.ts'), 'utf8')
	const codes = [...src.matchAll(/\{code: '([a-z]{2})'/g)].map(m => m[1])
	if (codes.length < 2) throw new Error('could not read country codes from src/countries.ts')
	return new Set(codes)
}

function buildSvg() {
	const world = JSON.parse(readFileSync(join(root, 'public/world.json'), 'utf8'))
	const codes = recognizingCodes()
	const c = palette()

	const mapHeight = Math.round(MAP_WIDTH * world.height / world.width)
	const mapLeft = Math.round((WIDTH - MAP_WIDTH) / 2)
	const scale = MAP_WIDTH / world.width
	if (MAP_TOP + mapHeight > HEIGHT) {
		throw new Error(`map ${mapHeight}px tall overflows the ${HEIGHT}px card`)
	}

	const shapes = world.shapes.map(s => {
		const fill = s.c === 'ps' ? c['map-palestine']
			: codes.has(s.c) ? c['map-recognized']
				: c['map-land']
		return `<path d="${s.d}" fill="${fill}"/>`
	}).join('\n')

	const font = 'Helvetica,Arial,sans-serif'
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
<rect width="${WIDTH}" height="${HEIGHT}" fill="${c.bg}"/>
<text x="${WIDTH / 2}" y="66" text-anchor="middle" font-family="${font}"
      font-size="46" font-weight="700" fill="${c.fg}">Palestine Thanks You</text>
<text x="${WIDTH / 2}" y="104" text-anchor="middle" font-family="${font}"
      font-size="22" fill="${c.muted}">${codes.size} states recognize the State of Palestine</text>
<rect x="${mapLeft}" y="${MAP_TOP}" width="${MAP_WIDTH}" height="${mapHeight}" rx="10" fill="${c['map-sea']}"/>
<g transform="translate(${mapLeft},${MAP_TOP}) scale(${scale.toFixed(6)})"
   stroke="${c['map-sea']}" stroke-width="0.5" vector-effect="non-scaling-stroke">
${shapes}
</g>
</svg>`
	return { svg, count: codes.size, shapes: world.shapes.length }
}

const { svg, count, shapes } = buildSvg()
const scratch = mkdtempSync(join(tmpdir(), 'og-'))
const svgPath = join(scratch, 'og.svg')
const pngPath = join(root, 'public/og.png')
writeFileSync(svgPath, svg)

execFileSync('swift', [join(root, 'scripts/og-image.swift'), svgPath, pngPath, String(WIDTH), String(HEIGHT)],
	{ stdio: 'inherit' })

const { size } = statSync(pngPath)
console.log(`public/og.png — ${WIDTH}x${HEIGHT}, ${(size / 1024).toFixed(0)} kB`)
console.log(`${count} states filled in, out of ${shapes} shapes on the map`)
console.log('The count is part of the picture: re-run this whenever it changes.')
