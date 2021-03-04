import React from 'react'
import { Column } from './component/Table/Column'
import { Table } from './component/Table/Table'

const App: React.FC = () => {
	type Data = {
		string: string
		integer: number
		float: number
		function: string
		dom: React.ReactElement
	}
	const test = (arg: string): string => {
		return arg
	}

	const data: Data[] = [
		{
			string: 'hello',
			integer: 0,
			float: 1.528,
			function: test('test1'),
			dom: <input />,
		},
		{
			string: 'world',
			integer: 1,
			float: 2.696,
			function: test('test2'),
			dom: (
				<select>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
			),
		},
		{
			string: 'test',
			integer: 2,
			float: 9.111,
			function: test('test3'),
			dom: (
				<div>
					<span>span</span>
				</div>
			),
		},
	]
	return (
		<Table data={data}>
			<Column name='integer' />
			<Column name='float' />
			<Column name='string' />
			<Column name='function' />
			<Column name='dom' />
		</Table>
	)
}

export { App }
