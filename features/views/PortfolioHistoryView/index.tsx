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
		stockName: 'USD',
		value: '$688.00',
		profitLoss: '-',
	},
	{
		stockName: 'AAPL',
		value: '$532.88',
		profitLoss: 220.88,
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
				$1220.88
			</StyledPortfolioNumber>
			<StyledTableWrapper>
				<Table data={data} columns={columns} />
			</StyledTableWrapper>
			

		</StyledPortfolioWrapper>
	);
};

export default PortfolioHistoryView;
