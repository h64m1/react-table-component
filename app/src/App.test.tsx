import React from 'react'
import { render } from '@testing-library/react'
import { Table } from './component/Table/Table'

describe('specification', () => {
	it.todo('テーブルthead行には、props.dataのkeyが表示されること')
	it.todo('テーブルtbody行には、props.dataのvalueが表示されること')

	test('table test', () => {
		const printTest = (arg: string): string => {
			return arg
		}

		const { debug, getByText } = render(
			<Table
				data={[
					{
						string: 'hello',
						integer: 0,
						float: 1.528,
						function: printTest('test1'),
						dom: <input />,
					},
					{
						string: 'world',
						integer: 1,
						float: 2.696,
						function: printTest('test2'),
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
						function: printTest('test3'),
						dom: (
							<div>
								<span>span</span>
							</div>
						),
					},
				]}
			/>,
		)
		debug()

		const element = getByText(/hello/)
		expect(element).toBeInTheDocument()
	})
})
