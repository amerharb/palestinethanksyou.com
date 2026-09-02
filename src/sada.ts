/*
 * sada (صدى — the echo): the same collector the sawt apps report to, here
 * counting two anonymous things — the page was opened, a share was clicked
 * and on which network. No cookies, no identifiers, no URLs; the whole
 * payload is `{ site, kind, name? }`.
 *
 * Env, set per deployment (e.g. in Vercel) or in a local .env.local:
 *   VITE_SADA_ENABLED=true                the on/off switch (default: off)
 *   VITE_SADA_URL=https://sada.sawt.info  the collector's base URL
 *
 * Both are required to enable — a missing switch or a malformed URL leaves
 * sada off and the site exactly as it was. Sending is fire-and-forget:
 * failures are swallowed, because counting must never break the page.
 */

const SITE = 'palestinethanksyou'

const raw = (import.meta.env.VITE_SADA_URL ?? '').trim().replace(/\/+$/, '')
const wellFormed = /^https?:\/\/[^\s/]+/.test(raw)
const enabled = import.meta.env.VITE_SADA_ENABLED === 'true' && wellFormed

function post(kind: string, name?: string): void {
	if (!enabled) return
	try {
		// keepalive lets a click that opens a share window still be counted
		void fetch(`${raw}/v1/events`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(name ? { site: SITE, kind, name } : { site: SITE, kind }),
			keepalive: true,
		}).catch(() => { /* counting must never break the page */ })
	} catch {
		/* same promise, synchronous edition */
	}
}

/* the page was opened — once per load, from index.tsx */
export function postOpen(): void {
	post('open')
}

/* a share was clicked: which network (or 'copylink') */
export function postShare(name: string): void {
	post('share', name)
}
