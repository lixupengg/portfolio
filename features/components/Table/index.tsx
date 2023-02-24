import React from 'react';
import { Table } from 'rsuite';

/* Styles */
import styles from './index.module.scss';
import './tableReset.scss';
import 'rsuite/dist/rsuite.min.css';
import { TableProps, Column } from './types';

const CustomersTable = (props: TableProps) => {
	const { columns, data } = props;
	return (
		<section className={styles.campaignTableWrapper}>
			<Table
				height={400}
				id="campaignTable"
				data={data}
				hover={false}
				onRowClick={(data: any) => {
					console.log(data);
				}}
			>
				{
					columns.map((col: Column) => {
					return (
						<Table.Column
							verticalAlign="middle"
							align="left"
						>
							<Table.HeaderCell>{col.name}</Table.HeaderCell>
							<Table.Cell dataKey={col.dataKey} />
						</Table.Column>);
					})
				}
			</Table>
		</section>
	);
};

export default CustomersTable;
