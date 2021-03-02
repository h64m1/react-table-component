import React from 'react'

type TableProps <Data> = {
    data: Data[]
}

function Table<T extends object>(props: TableProps<T>) {
    console.debug('Table | props', props)
	return (
		<table>
			<thead></thead>
			<tbody></tbody>
			<tfoot></tfoot>
		</table>
	)
}

export { Table }
