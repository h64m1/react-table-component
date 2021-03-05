import React from 'react'

type TableProps<Data> = {
	data: Data[]
	className?: string
	children?: React.ReactElement | React.ReactElement[]
}

const Table = <T extends object>(props: TableProps<T>) => {
	const data = props.data
	console.debug('Table | props', props)

	return (
		<table className={props.className}>
			<thead>
				<tr>
					{React.Children.map(props.children, (child, index) => {
						const childProps = child?.props
						return (
							<th key={childProps.name} className={childProps.className}>
								{childProps.name}
							</th>
						)
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
								return (
									<td key={childProps.name} className={childProps.className}>
										{value[key]}
									</td>
								)
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
