import React from 'react'
import { Column, Table } from '../../src'

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
	return (
		<Table data={data} />
	)
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


export { EmptyDataTable, EmptyChildrenTable, TitleTable }
