import './App.css'
import { Analytics } from '@vercel/analytics/react'

function App() {
	return (
		<div className="App">
			<h1>🇵🇸 Palestine Thanks You</h1>
			<p className="notice">🚧 This site is under construction. 🚧</p>
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
			<Analytics/>
		</div>
	)
}

export default App
