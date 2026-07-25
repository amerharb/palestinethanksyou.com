import './App.css'
import { Analytics } from '@vercel/analytics/react'
import WorldMap from './WorldMap'
import { COUNTRIES, byNewest as countriesByNewest } from './countries'
import { NEWS, byNewest as newsByNewest } from './news'
import { formatDate } from './format'

function App() {
	const countries = countriesByNewest(COUNTRIES)
	const news = newsByNewest(NEWS)

	return (
		<div className="App">
			<header className="site-header">
				<h1>🇵🇸 Palestine Thanks You</h1>
				<p className="notice">🚧 This site is under construction. 🚧</p>
			</header>

			<main className="layout">
				<section className="col map-col">
					<WorldMap/>
					<p className="col-note">
						Map placeholder — simplified shapes, not real borders. The
						interactive version will highlight each recognizing country.
					</p>
				</section>

				{/* both columns sit below the map */}
				<div className="columns">
					<section className="col countries-col">
						<h2>Countries</h2>
						<ol className="country-list">
							{countries.map(c => (
								<li key={c.code} className="country">
									<span className="country-flag" aria-hidden="true">{c.flag}</span>
									<span className="country-name">{c.name}</span>
									<time className="country-date" dateTime={c.recognized}>
										{formatDate(c.recognized)}
									</time>
								</li>
							))}
						</ol>
						<p className="col-note">
							{countries.length} of ~157 recognizing states listed so far.
						</p>
					</section>

					<section className="col news-col">
						<h2>Timeline</h2>
						<ol className="news-list">
							{news.map(n => (
								<li key={n.id} className="news-item">
									<div className="news-meta">
										<time dateTime={n.date}>{formatDate(n.date)}</time>
										{n.sample && <span className="news-sample">sample</span>}
									</div>
									<h3 className="news-headline">{n.headline}</h3>
									<p className="news-body">{n.body}</p>
								</li>
							))}
						</ol>
					</section>
				</div>
			</main>

			<footer className="site-footer">
				<p className="credit">
					Inspired by 🇽🇰{' '}
					<a
						href="https://www.kosovothanksyou.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						kosovothanksyou.com
					</a>
				</p>
				<p className="updated">Last update: {__APP_VERSION__}</p>
			</footer>
			<Analytics/>
		</div>
	)
}

export default App
