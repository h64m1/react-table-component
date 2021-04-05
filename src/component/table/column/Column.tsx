import React from 'react'

type ColumnProps = {
	readonly name: string
	readonly header?: string
	readonly id?: string
	readonly className?: string
	readonly style?: React.CSSProperties
	children?: React.ReactNode
}

/**
 * Use to specify the propes in the Table component
 * <Table>
 *   <Column name={prop1} />
 *   <Column name={prop2} />
 *   ...
 * </Table>
 *
 * - return value will not be shown in the table
 * - actual return components are defined by HeadColumn and BodyColumn
 * @param {ColumnProps} props property
 * @returns td element
 */
const Column = (props: ColumnProps) => (
	<td className={props.className}>{props.children}</td>
)

/**
 * header column
 * @param {ComponentProps} props property
 * @returns column in thead
 */
const HeadColumn = (props: ColumnProps) => (
	<th className={props.className} id={getId('th', props.id)}>
		{props.header ?? props.name}
	</th>
)

/**
 * body column
 * @param {ComponentProps} props property
 * @returns column in tbody
 */
const BodyColumn = (props: ColumnProps) => (
	<td className={props.className} id={getId('td', props.id)} style={props.style}>{props.children}</td>
)

/**
 * get id
 * @param {string} name prefix to id
 * @param {string} id id
 */
const getId = (name: string, id?: string) => {
	return id === undefined ? undefined : `${name}-${id}`
}

export { Column, HeadColumn, BodyColumn }
