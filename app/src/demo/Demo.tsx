import React from 'react'
import { Column } from '../component/Table/Column'
import { Table } from '../component/Table/Table'

const DemoTableNoBorders: React.FC = () => {
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
			<Column name="integer" />
			<Column name="float" />
			<Column name="string" />
			<Column name="function" />
			<Column name="dom" />
		</Table>
	)
}

type Data = {
	column1: string
	column2: string
	column3: string
	column4: string
}

const data: Data[] = [
	{
		column1: '1',
		column2: '2',
		column3: '3',
		column4: '4',
	},
	{
		column1: '5',
		column2: '6',
		column3: '7',
		column4: '8',
	},
	{
		column1: '9',
		column2: '10',
		column3: '11',
		column4: '12',
	},
	{
		column1: '13',
		column2: '14',
		column3: '15',
		column4: '16',
	},
]

const DemoTableBorders: React.FC = () => {
	return (
		<Table data={data} border={true}>
			<Column name="column1" />
			<Column name="column2" />
			<Column name="column3" />
			<Column name="column4" />
		</Table>
	)
}

export { DemoTableNoBorders, DemoTableBorders }
