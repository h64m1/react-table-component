import React from 'react'
import { render } from '@testing-library/react'
import { Table } from './component/Table'

test('table test', () => {
	const { debug } = render(
		<Table
			data={[
				{ name: 'hello', title: 'world', value: 0 },
				{ name: 'hello', title: 'test', value: 1 },
			]}
		/>,
	)
	debug()
})
