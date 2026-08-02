import './App.css'
import { Analytics } from '@vercel/analytics/react'
import WorldMap from './WorldMap'
import {
	COUNTRIES,
	byNewest as countriesByNewest,
	recognitionRanks,
	totalPopulation,
	WORLD_POPULATION,
} from './countries'
import { NEWS, byNewest as newsByNewest } from './news'
import { formatBillions, formatDate } from './format'
import { DEFAULT_LANG } from './lang'

function App() {
	/* becomes state once there is a language picker */
	const lang = DEFAULT_LANG
	const countries = countriesByNewest(COUNTRIES, lang)
	const rank = recognitionRanks(COUNTRIES)
	const news = newsByNewest(NEWS)
	const recognizingPopulation = totalPopulation(COUNTRIES)
	const sharePercent = (recognizingPopulation / WORLD_POPULATION) * 100

	return (
		<div className="App">
			<header className="site-header">
				<h1>🇵🇸 Palestine Thanks You</h1>
			</header>

			<main className="layout">
				<section className="col map-col">
					<WorldMap countries={countries} lang={lang}/>
				</section>

				{/* both columns sit below the map */}
				<div className="columns">
					<section className="col countries-col">
						<div className="thanks">
							<h2 className="thanks-title">Thank you 🙏</h2>
							<p className="thanks-text">
								We would like to thank the people of the following{' '}
								{countries.length} for recognizing the State of Palestine. 🇵🇸
							</p>
						</div>

						{/* share of humanity living in states that recognize Palestine */}
						<div className="share">
							<div
								className="share-bar"
								role="progressbar"
								aria-valuenow={Math.round(sharePercent)}
								aria-valuemin={0}
								aria-valuemax={100}
								aria-label="Share of the world's population living in states that recognize Palestine"
							>
								<div className="share-fill" style={{ width: `${sharePercent}%` }}/>
							</div>
							<p className="share-note">
								{formatBillions(recognizingPopulation)} out of{' '}
								{formatBillions(WORLD_POPULATION)} people
							</p>
						</div>

						<ol className="country-list">
							{countries.map(c => (
								<li key={c.code} className="country">
									<span className="country-flag" aria-hidden="true">{c.flag}</span>
									{/* #1 is the earliest recognition, at the bottom of the list;
									    same-date states share a rank (see recognitionRanks) */}
									<span className="country-rank">#{rank.get(c.code)}</span>
									<span className="country-name">{c.name[lang]}</span>
									<time className="country-date" dateTime={c.recognized}>
										{formatDate(c.recognized)}
									</time>
								</li>
							))}
						</ol>
						<p className="col-note">
							{countries.length} states — the 157 UN members that recognize
							Palestine, plus the Holy See and the Sahrawi Republic.
						</p>
					</section>

					<section className="col news-col">
						{/*
						  * This wrapper is taken out of flow (see App.css) so the news
						  * column never drives the grid row height — the countries column
						  * does. That is what caps the news at the countries' height, and
						  * the list scrolls once it would grow past it.
						  */}
						<div className="news-inner">
							<h2>Sources</h2>
							<ol className="news-list">
								{news.map(n => (
									<li key={n.id} className="news-item">
										<div className="news-meta">
											{/*
											  * A bare-year value (see the sentinel in src/news.ts) is a
											  * sort key, not a date: it is not a valid datetime attribute
											  * and rendering it shows the reader something meaningless
											  * ('0'), so such posts show no date at all.
											  */}
											{n.date.length > 4 && (
												<time dateTime={n.date}>{formatDate(n.date)}</time>
											)}
											{n.source && <span className="news-source">{n.source}</span>}
										</div>
										<h3 className="news-headline">
											{n.url
												? (
													<a href={n.url} target="_blank" rel="noopener noreferrer">
														{n.headline}
													</a>
												)
												: n.headline}
										</h3>
										<p className="news-body">{n.body}</p>
									</li>
								))}
							</ol>
						</div>
					</section>
				</div>
			</main>

			<footer className="site-footer">
				{/* the link's tags sit flush against the text so JSX doesn't insert a
				    space before the full stop that follows it */}
				<p className="footer-note">
					This is a{' '}
					<a
						href="https://amerharb.com"
						target="_blank"
						rel="noopener noreferrer"
					>personal</a>{' '}
					project, inspired by 🇽🇰{' '}
					<a
						href="https://www.kosovothanksyou.com"
						target="_blank"
						rel="noopener noreferrer"
					>kosovothanksyou.com</a>. It is not affiliated with any government or
					political organization.
				</p>
				<p className="updated">Last update: {__APP_VERSION__}</p>
			</footer>
			<Analytics/>
		</div>
	)
}

export default App
