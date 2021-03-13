import React from 'react'

type ColumnProps = {
	readonly name: string
	readonly header?: string
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
	<th className={props.className}>
		{props.header ?? props.name}
	</th>
)

/**
 * body column
 * @param {ComponentProps} props property
 * @returns column in tbody
 */
const BodyColumn = (props: ColumnProps) => (
	<td className={props.className} style={props.style}>{props.children}</td>
)

export { Column, HeadColumn, BodyColumn }
