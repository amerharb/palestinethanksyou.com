import './App.css'
import { Analytics } from '@vercel/analytics/react'

function App() {
	return (
		<div className="App">
			<h1>Palestine Thanks You</h1>
			<p className="version">v{__APP_VERSION__}</p>
			<Analytics/>
		</div>
	)
}

export default App
