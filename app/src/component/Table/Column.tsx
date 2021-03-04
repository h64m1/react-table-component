import React from 'react'

type ColumnProps = {
    readonly name: string
	readonly className?: string
	children?: React.ReactNode
}

const Column = (props: ColumnProps) => {
	return <td className={props.className}>{props.children}</td>
}

export { Column }
