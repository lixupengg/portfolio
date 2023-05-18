import React from 'react';
import { Table } from 'rsuite';

import { format } from '@lixupeng/constants';
import { FORMAT_TYPE } from '@lixupeng/types';
import { StyledColouredNumber } from './styles';

interface Props {
	rowData?: any;
	dataKey: string;
}

const GreenRedCell = (props: Props) => {
	const { rowData, dataKey } = props;
	let color: 'black' | 'green' | 'red' = 'black';
	if (rowData[dataKey] > 0) {
		color = 'green';
	} else if (rowData[dataKey] < 0) {
		color = 'red';
	} else {
		color = 'black';
	}

	return (
		<Table.Cell {...props}>
			<StyledColouredNumber color={color}>
				{format(rowData[dataKey], FORMAT_TYPE.CURRENCY_TWO_DECIMAL)}
			</StyledColouredNumber>
		</Table.Cell>
	);
};

export default GreenRedCell;
