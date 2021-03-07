import React from 'react'
import { HeadColumn, BodyColumn } from './column/Column'

type TableProps<Data> = {
	data: Data[]
	className?: string
	children?: React.ReactElement | React.ReactElement[]
}

/**
 * Usage:
 *   - use Table component with Column childrens
 *   - Column is used to specify which prop data will be shown
 * <Table data={[{ columnName1: 'name1' },{ columnName2: 'name2' },{ columnName3: 'name3' }]}>
 *   <Column data="columnName1" />
 *   <Column data="columnName2" />
 *   <Column data="columnName3" />
 * </Table>
 * @param {TableProps} props props
 * @returns Table component
 */
const Table = <T extends object>(props: TableProps<T>) => {
	const data = props.data
	console.debug('Table | props', props)

	if (data === undefined) {
		console.debug('Table | data is empty. Do not draw dom\'s')
		return <></>
	}

	if (props.children === undefined) {
		console.debug('Table | Column is not defined. Do not draw dom\'s')
		return <></>
	}

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
