import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { Table } from '@stonksfi/components';
import { StyledPortfolioWrapper,
	StyledTableWrapper, StyledPortfolioNumber, StyledStockName } from './style';

interface Props {
}

const data: any = [
	{
		stockName: 'Cash',
		value: '$157.77',
		profitLoss: '-',
	},
	{
		stockName: 'AAPL',
		value: '$502.33',
		profitLoss: 212.2,
	},
];

const columns: any = [
	{
		dataKey: 'stockName',
		name: 'Asset',
		type: 'string',
	},
	{
		dataKey: 'value',
		name: 'Value',
		type: 'string',
	},
	{
		dataKey: 'profitLoss',
		name: 'Profit/Loss',
		type: 'number',
	},
]

const PortfolioHistoryView = (props: Props) => {
	return (
		<StyledPortfolioWrapper>
			<h6> PORTFOLIO VALUE </h6>
			<StyledPortfolioNumber>
				$157.77
			</StyledPortfolioNumber>
			<StyledTableWrapper>
				<Table data={data} columns={columns} />
			</StyledTableWrapper>
			

		</StyledPortfolioWrapper>
	);
};

export default PortfolioHistoryView;
