import * as React from 'react';
import { StockChart } from '@stonksfi/components';
import { StyledStockChartWrapper } from './styles';

const StockChartView = () => {
	const chartRef = React.useRef(null);

	return (
		<StyledStockChartWrapper ref={chartRef}>
			<StockChart ref={chartRef}/>
		</StyledStockChartWrapper>
	);
};

export default StockChartView;