# react-table-component

Usage:
- Table: set array of objects in data props of Table component
- Column: set Column as child components of Table, where name props should be equal to the key of Table data props
```js
<Table
	data={[
		{ column1: 'test11', column2: 'test12', column3: 'test13' },
		{ column1: 'test21', column2: 'test22', column3: 'test23' },
	]}
>
	<Column name="column1" />
	<Column name="column3" />
	<Column name="column2" />
</Table>
```
