/*
 * sada (صدى — the echo): the same collector the sawt apps report to.
 *
 * Two anonymous counts — the page was opened, a share was clicked and on which
 * network — whose whole payload is `{ site, kind, name? }`: no cookies, no
 * identifiers, no URLs. And feedback, which is the one thing here a reader
 * types themselves, sent to a different endpoint in a different shape.
 *
 * Env, set per deployment (e.g. in Vercel) or in a local .env.local:
 *   VITE_SADA_ENABLED=true                the on/off switch (default: off)
 *   VITE_SADA_URL=https://sada.sawt.info  the collector's base URL
 *
 * Both are required to enable — a missing switch or a malformed URL leaves
 * sada off and the site exactly as it was. Sending is fire-and-forget:
 * failures are swallowed, because counting must never break the page.
 */

const SITE = 'palestinethanksyou.com'

const raw = (import.meta.env.VITE_SADA_URL ?? '').trim().replace(/\/+$/, '')
const wellFormed = /^https?:\/\/[^\s/]+/.test(raw)
const enabled = import.meta.env.VITE_SADA_ENABLED === 'true' && wellFormed

/*
 * Whether anything is sent at all. Exported because the feedback form has no
 * business being on the page when there is nowhere to send it — a form that
 * silently drops what someone took the trouble to write is worse than no form.
 */
export const SADA_ON = enabled

function send(path: string, body: unknown): void {
	if (!enabled) return
	try {
		// keepalive lets a click that opens a share window still be counted
		void fetch(`${raw}${path}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(body),
			keepalive: true,
		}).catch(() => { /* counting must never break the page */ })
	} catch {
		/* same promise, synchronous edition */
	}
}

function post(kind: string, name?: string): void {
	send('/v1/events', name ? { site: SITE, kind, name } : { site: SITE, kind })
}

/* the page was opened — once per load, from index.tsx */
export function postOpen(): void {
	post('open')
}

/* a share was clicked: which network (or 'copylink') */
export function postShare(name: string): void {
	post('share', name)
}

/*
 * What a piece of feedback is, in sada's words: something is wrong, something
 * is missing, or something else. These three strings are sada's own enum —
 * anything outside it is refused with a 422 nobody here would ever see.
 */
export type FeedbackKind = 'bug' | 'add' | 'other'

/*
 * One piece of feedback, stored verbatim for the developer to read. `info` is
 * a free-form object capped at 8 KB by the collector; only the fields someone
 * actually filled in travel, and `site` is sent as `app` because that is the
 * field feedback uses — the events endpoint is the one that calls it `site`.
 *
 * Fire-and-forget like everything else here, so a caller can report that the
 * message was handed to the browser and nothing more than that.
 */
export function postFeedback(kind: FeedbackKind, info: Record<string, unknown>): void {
	send('/v1/feedback', { app: SITE, kind, info })
}
