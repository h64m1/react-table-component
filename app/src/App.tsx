import React from 'react'
import { DemoTableBorders, DemoTableNoBorders } from './demo/Demo'

const App: React.FC = () => {
	return (
		<>
			<DemoTableNoBorders />
			<div style={{ margin: '1rem 0' }}></div>
			<DemoTableBorders />
		</>
	)
}

export { App }
