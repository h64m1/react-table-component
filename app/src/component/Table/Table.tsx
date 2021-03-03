import React from 'react'

type TableProps<Data> = {
	data: Data[]
	children?: React.ReactElement | React.ReactElement[]
}

const Table = <T extends object>(props: TableProps<T>) => {
	console.debug('Table | props', props)
	const data = props.data

	const keys = Object.keys(data[0]) as Array<keyof T>
	return (
		<table>
			<thead>
				<tr>
					{keys.map((key) => {
						return <th key={key.toString()}>{key}</th>
					})}
				</tr>
			</thead>
			<tbody>
				{data.map((value: T, index: number) => {
					return (
						<tr key={index}>
							{keys.map((key) => {
								return <td key={key.toString()}>{value[key]}</td>
							})}
						</tr>
					)
				})}
			</tbody>
			<tfoot></tfoot>
		</table>
	)
}

export { Table }
