import React from 'react'
import { Column, Table } from '../../src'
import './App.css'

/**
 * Test empty data props
 */
const EmptyDataTable: React.FC<{
	name: string
}> = ({ name }) => {
	return (
		<Table data={[]}>
			<Column name={name} />
		</Table>
	)
}

/**
 * Test empty children props
 */
const EmptyChildrenTable: React.FC<{
	data: Array<object>
}> = ({ data }) => {
	return <Table data={data} />
}

/**
 * Test title props
 */
const TitleTable: React.FC<{
	header: string
	body: string
}> = ({ header, body }) => {
	return (
		<Table data={[{ title: body }]}>
			<Column name={'title'} header={header} />
		</Table>
	)
}

/**
 * Demo App
 */
const App: React.FC = () => {
	return (
		<>
			<h2>Table without borders</h2>
			<DemoTableNoBorders />
			<h2>Table with borders</h2>
			<DemoTableBorders />
		</>
	)
}

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
			<Column name="integer" id="demo" />
			<Column name="float" style={{ color: 'rgb(146,18,4)'}} />
			<Column name="string" style={{ backgroundColor: 'rgb(3,169,244)'}} />
			<Column name="function" />
			<Column name="dom" />
		</Table>
	)
}

const DemoTableBorders: React.FC = () => {
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

	return (
		<Table data={data} className="border">
			{[1, 2, 3, 4].map((e) => {
				const title = e === 2 ? 'title2' : undefined
				return (
					<Column
						key={e}
						name={`column${e}`}
						className="border"
						header={title}
					/>
				)
			})}
		</Table>
	)
}

export { EmptyDataTable, EmptyChildrenTable, TitleTable, App }
