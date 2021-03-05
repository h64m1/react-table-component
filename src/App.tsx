import React from 'react'
import { DemoTableBorders, DemoTableNoBorders } from './demo/Demo'

const App: React.FC = () => {
	return (
		<>
			<h2>Table no borders</h2>
			<DemoTableNoBorders />
			<div style={{ margin: '1rem 0' }}></div>
			<h2>Table with borders</h2>
			<DemoTableBorders />
		</>
	)
}

export { App }
