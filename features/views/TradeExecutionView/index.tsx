import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { Button, ColouredLabel } from '@stonksfi/components';
import { StyledPortfolioWrapper, StyledButtonRow, LastButtonCss,
	StyledDate, StyledPortfolioNumber, StyledStockName } from './style';

interface Props {
}

const BacktestPortfolio = (props: Props) => {
	return (
		<StyledPortfolioWrapper>
			<StyledDate>
				23 Jan 2023
			</StyledDate>
			<StyledStockName>
				<ColouredLabel type="black" label="US"/>
				&nbsp;
				Apple (AAPL)
			</StyledStockName>
			<StyledPortfolioNumber>
				$157.77
			</StyledPortfolioNumber>
			
			<StyledButtonRow>
				<Button type="primaryStrong" onClick={() => {}}>
					Buy
				</Button>
				<Button type="secondaryStrong" onClick={() => {}}>
					Sell
				</Button>
				<Button type="black" onClick={() => {}} className={LastButtonCss()}>
					Go to next day
				</Button>
			</StyledButtonRow>
		</StyledPortfolioWrapper>
	);
};

export default BacktestPortfolio;
