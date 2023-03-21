import React from 'react';
import { Table } from 'rsuite';

/* Styles */
import styles from './index.module.scss';
import './tableReset.scss';
import 'rsuite/dist/rsuite.min.css';
import { TableProps, Column } from './types';
import GreenRedCell from './TableCells/GreenRedCell';

const CustomersTable = (props: TableProps) => {
	const { columns, data } = props;
	return (
		<section className={styles.campaignTableWrapper}>
			<Table
				id="campaignTable"
				data={data}
				hover={false}
				autoHeight
				onRowClick={(data: any) => {
					console.log(data);
				}}
				bordered
			>
				{
					columns.map((col: Column) => {
					return (
						<Table.Column
							verticalAlign="middle"
							align="left"
						>
							<Table.HeaderCell>{col.name}</Table.HeaderCell>
							{
								col.dataKey === 'profitLoss' ?
								<GreenRedCell dataKey={col.dataKey} />
								:
								<Table.Cell dataKey={col.dataKey} />
							}
						</Table.Column>);
					})
				}
			</Table>
		</section>
	);
};

export default CustomersTable;
