import React from 'react'

type TableProps<Data> = {
	data: Data[]
	children?: React.ReactElement | React.ReactElement[]
}

const Table = <T extends object>(props: TableProps<T>) => {
	console.debug('Table | props', props)
	const data = props.data
	// const keys = Object.keys(data[0]) as Array<keyof T>
	return (
		<table>
			<thead>
				<tr>
					{React.Children.map(props.children, (child, index) => {
						const childProps = child?.props
						return <th key={childProps.name}>{childProps.name}</th>
					})}
				</tr>
			</thead>
			<tbody>
				{data.map((value: T, index: number) => {
					return (
						<tr key={index}>
							{React.Children.map(props.children, (child, index) => {
								const childProps = child?.props
								const key = childProps.name as keyof T
								return <td key={childProps.name}>{value[key]}</td>
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
