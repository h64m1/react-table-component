# react-table-component

## Usage

```jsx
<Table
	data={[
		{ column1: 'test11', column2: 'test12', column3: 'test13' },
		{ column1: 'test21', column2: 'test22', column3: 'test23' },
	]}
>
	<Column name="column1" />
	<Column name="column3" className="text-red" />
	<Column name="column2" />
</Table>
```

## Props

### Table

| Name | Type | Description |
|-|-|-|
| data | Array | Data to be shown in the Table |
| className? | string | className for css |
| children? | React.Element \|\| React.Element[] | Column component |

### Column

| Name | Type | Description |
|-|-|-|
| name | string | specify key of Table `data` element|
| className? | string | className for css |


## Licence

MIT
