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
 *   - specify 'header' props if one wants to show different string in th instead of the string in data props
 *   - styles can be applied either className or style props, or both
 * <Table data={[{ columnName1: 'name1' },{ columnName2: 'name2' },{ columnName3: 'name3' }]}>
 *   <Column data="columnName1" />
 *   <Column data="columnName2" />
 *   <Column data="columnName3" header="title3" />
 * </Table>
 * @param {TableProps} props props
 * @returns Table component
 */
const Table = <T extends object>(props: TableProps<T>) => {
	const data = props.data
	console.debug('Table | props', props)

	if (data === undefined || (data !== undefined && data.length === 0)) {
		console.debug('Table | data is empty. Do not draw table')
		return <></>
	}

	if (props.children === undefined) {
		console.debug('Table | Column is not defined. Do not draw table')
		return <></>
	}

	return (
		<table className={props.className}>
			<thead>
				<tr>
					{React.Children.map(props.children, (child) => {
						return (
							<HeadColumn
								name={child?.props.name}
								header={child?.props.header}
								className={child?.props.className}
								id={child?.props.id}
							/>
						)
					})}
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
										id={child?.props.id}
										style={child?.props.style}
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
