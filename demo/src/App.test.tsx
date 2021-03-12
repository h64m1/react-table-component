import React from 'react'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { EmptyChildrenTable, EmptyDataTable, TitleTable } from './App'

describe('render', () => {
	// Test Table data props is empty
	test('Table: empty data props', () => {
		const name = 'column1'
		render(<EmptyDataTable name={name} />)
		expect(screen.queryByText(name)).not.toBeInTheDocument()
	})

	// Test Table children props is empty
	test('Table: empty children props', () => {
		const data = [
			{
				column1: '1',
				column2: '2',
				column3: '3',
			},
		]
		render(<EmptyChildrenTable data={data} />)
		expect(screen.queryByText('1')).not.toBeInTheDocument()
		expect(screen.queryByText('2')).not.toBeInTheDocument()
		expect(screen.queryByText('3')).not.toBeInTheDocument()
	})

	// Test Column header props
	test('Column header props: header = hello', () => {
		const header = 'hello'
		const body = 'world'
		render(<TitleTable header={header} body={body} />)
		// screen.debug()

		expect(screen.getByText(header)).toBeInTheDocument()
		expect(screen.getByText(body)).toBeInTheDocument()
	})
})

export {}
