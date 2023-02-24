import { MetricCardListProps } from '@stonksfi/modules/MetricCardList';

export const metricCardListConfig: MetricCardListProps = {
	name: 'Metric Card List',
	metricDataRequest: {
		url: 'https://stonksfi-backend.herokuapp.com/metrics',
		method: 'get' as const
	}
};
