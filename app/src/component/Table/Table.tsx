import React from 'react'

type TableProps<Data> = {
	data: Data[]
	className?: string
	border?: boolean
	children?: React.ReactElement | React.ReactElement[]
}

const Table = <T extends object>(props: TableProps<T>) => {
	const data = props.data
	const style = getCommonStyle(props)
	console.debug('Table | props', props, style)

	return (
		<table className={props.className} style={style}>
			<thead>
				<tr>
					{React.Children.map(props.children, (child, index) => {
						const childProps = child?.props
						return (
							<th key={childProps.name} className={childProps.className} style={style}>
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
									<td key={childProps.name} className={childProps.className} style={style}>
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

type commonTableProps = {
	style?: React.CSSProperties
	border?: boolean
}

const getCommonStyle = (props: commonTableProps) => {
	if (props.border) {
		return {
			border: '1px solid',
		}
	}

	return {}
}

export { Table }
