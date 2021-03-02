import React from 'react'
import { Table } from './component/Table'

const App: React.FC = () => {
	type Data = {
		name: string
		title: string
		value: number
	}
	const data: Data[] = [
		{ name: 'hello', title: 'world', value: 0 },
		{ name: 'hello', title: 'test', value: 1 },
	]
	return <Table data={data} />
}

export { App }
