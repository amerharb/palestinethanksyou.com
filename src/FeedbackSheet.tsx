import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FeedbackKind, postFeedback } from './sada'

/*
 * Telling the developer something, from the page itself.
 *
 * What is worth hearing about a site whose whole claim is a list of dates is
 * mostly one of two things: a date or a source is wrong, or a state or a
 * source is missing. So those are the first two choices, in those words,
 * rather than "bug" and "feature request" — which is what sada calls them
 * underneath, and all it ever needs to know.
 *
 * A native <dialog> opened with showModal(), so Escape, the backdrop and the
 * focus ring are the browser's rather than mine. The one thing it does not do
 * by itself is close on a backdrop click, which is the click that lands on the
 * dialog element itself.
 *
 * Sending is fire-and-forget, like every other post to sada. "Sent" here means
 * handed to the browser, never received — the note under the thanks says so,
 * because it is the most this end can honestly claim.
 */

const KINDS: { value: FeedbackKind; label: string; hint: string }[] = [
	{
		value: 'bug',
		label: 'Something is wrong',
		hint: 'A wrong date, a source that no longer loads, a state in the wrong place.',
	},
	{
		value: 'add',
		label: 'Something is missing',
		hint: 'A state that is not listed, or a date with no source yet.',
	},
	{
		value: 'other',
		label: 'Something else',
		hint: 'Anything the two above do not cover.',
	},
]

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LINK = /^https?:\/\/\S+$/i

type Props = {
	open: boolean
	onClose: () => void
}

function FeedbackSheet({ open, onClose }: Props) {
	const ref = useRef<HTMLDialogElement>(null)
	const [kind, setKind] = useState<FeedbackKind>('bug')
	const [subject, setSubject] = useState('')
	const [details, setDetails] = useState('')
	const [message, setMessage] = useState('')
	const [link, setLink] = useState('')
	const [email, setEmail] = useState('')
	const [sent, setSent] = useState(false)

	/*
	 * Open and close the dialog, and hand it a clean form on the way in.
	 *
	 * showModal() rather than the open attribute — that is what gets the
	 * backdrop, the focus containment and Escape.
	 *
	 * The clearing happens on open, not on close, because a reset tied to the
	 * close only runs if React commits a render with `open` false, and a close
	 * followed closely enough by an open can skip that: the sheet then comes
	 * back showing the thank-you where the form should be. Opening is the
	 * moment that has to be clean, and it cannot be skipped. A layout effect,
	 * so the empty form is what gets painted rather than a frame of the last
	 * message. The kind is left where it was — that is a choice, not an entry.
	 */
	useLayoutEffect(() => {
		const dialog = ref.current
		if (!dialog) return
		if (!open) {
			if (dialog.open) dialog.close()
			return
		}
		setSent(false)
		setSubject('')
		setDetails('')
		setMessage('')
		setLink('')
		setEmail('')
		if (!dialog.open) dialog.showModal()
	}, [open])

	/* Escape closes the dialog itself, so the state has to follow it back */
	useEffect(() => {
		const dialog = ref.current
		if (!dialog) return
		dialog.addEventListener('close', onClose)
		return () => dialog.removeEventListener('close', onClose)
	}, [onClose])

	/* a wrong-looking address or link is worth catching here: nothing
	   downstream can ask the sender what they meant */
	const emailOk = email.trim() === '' || EMAIL.test(email.trim())
	const linkOk = link.trim() === '' || LINK.test(link.trim())
	const filled = kind === 'other' ? message.trim() !== '' : subject.trim() !== ''
	const canSend = filled && emailOk && linkOk

	function submit(event: React.FormEvent) {
		event.preventDefault()
		if (!canSend) return

		/* only what was actually filled in travels */
		const info: Record<string, unknown> = { version: __APP_VERSION__ }
		const put = (key: string, value: string) => {
			if (value.trim() !== '') info[key] = value.trim()
		}
		if (kind === 'other') {
			put('message', message)
		} else {
			put('subject', subject)
			put('details', details)
			put('link', link)
		}
		put('email', email)

		postFeedback(kind, info)
		setSent(true)
	}

	const hint = KINDS.find(k => k.value === kind)?.hint

	return (
		<dialog
			ref={ref}
			className="feedback-dialog"
			aria-label="Send feedback"
			onClick={event => { if (event.target === ref.current) onClose() }}
		>
			<div className="feedback-inner">
				<div className="feedback-head">
					<h2 className="feedback-title">{sent ? 'Thank you' : 'Tell me something'}</h2>
					<button
						type="button"
						className="feedback-close"
						title="Close"
						aria-label="Close"
						onClick={onClose}
					>
						✕
					</button>
				</div>

				{sent
					? (
						<div className="feedback-done">
							<p>It is on its way.</p>
							<p className="feedback-note">
								Nothing here waits for an answer from the other end, so this
								means the message was handed to your browser — not that it
								arrived. {email.trim() !== '' && 'If it did, and it needs a reply, you will get one.'}
							</p>
						</div>
					)
					: (
						<form className="feedback-form" onSubmit={submit}>
							<fieldset className="feedback-kinds">
								<legend>What is it about?</legend>
								{KINDS.map(k => (
									<label key={k.value} className="feedback-kind">
										<input
											type="radio"
											name="kind"
											value={k.value}
											checked={kind === k.value}
											onChange={() => setKind(k.value)}
										/>
										<span>{k.label}</span>
									</label>
								))}
							</fieldset>
							{hint && <p className="feedback-hint">{hint}</p>}

							{kind === 'other'
								? (
									<label className="feedback-field">
										<span>Message</span>
										<textarea
											rows={5}
											value={message}
											onChange={e => setMessage(e.target.value)}
											autoFocus
										/>
									</label>
								)
								: (
									<>
										<label className="feedback-field">
											<span>Which state, or what exactly?</span>
											<input
												type="text"
												value={subject}
												onChange={e => setSubject(e.target.value)}
												autoFocus
											/>
										</label>
										<label className="feedback-field">
											<span>More, if you have it <em>optional</em></span>
											<textarea
												rows={4}
												value={details}
												onChange={e => setDetails(e.target.value)}
											/>
										</label>
										<label className="feedback-field">
											<span>A source for it <em>optional</em></span>
											<input
												type="url"
												inputMode="url"
												placeholder="https://"
												value={link}
												onChange={e => setLink(e.target.value)}
												aria-invalid={!linkOk}
											/>
											{!linkOk && (
												<em className="feedback-wrong">
													A link starts with http:// or https://
												</em>
											)}
										</label>
									</>
								)}

							<label className="feedback-field">
								<span>Your email, for a reply <em>optional</em></span>
								<input
									type="email"
									inputMode="email"
									autoComplete="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									aria-invalid={!emailOk}
								/>
								{!emailOk && (
									<em className="feedback-wrong">That does not look like an address</em>
								)}
							</label>

							<p className="feedback-note">
								Only what you type here is sent, with the version of the page.
								No account, no cookie. The collector notes which country it
								arrived from, and nothing else.
							</p>

							<div className="feedback-actions">
								<button type="submit" disabled={!canSend}>Send</button>
								<button type="button" onClick={onClose}>Cancel</button>
							</div>
						</form>
					)}
			</div>
		</dialog>
	)
}

export default FeedbackSheet
