import { useState } from 'react'
import { Grocery } from './components/Grocery'

function App() {
	const [names, setNames] = useState<string[]>(['lettuce', 'onion', 'tomato'])

	function createContent() {
		setNames([...names, 'carrot'])
	}

	return (
		<>
			{names.map(content => {
				return <Grocery name={content} />
			})}
			<button onClick={createContent}> Add Grocery </button>
		</>
	)
}

export default App
