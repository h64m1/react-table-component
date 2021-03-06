import React from 'react'
import { HeadColumn, BodyColumn } from './Column/Column'

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
					{React.Children.map(props.children, (child) => (
						<HeadColumn
							name={child?.props.name}
							className={child?.props.className}
						/>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((value: T, index: number) => {
					return (
						<tr key={index}>
							{React.Children.map(props.children, (child) => {
								const key = child?.props.name as keyof T
								return (
									<BodyColumn
										name={child?.props.name}
										className={child?.props.className}
									>
										{value[key]}
									</BodyColumn>
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
