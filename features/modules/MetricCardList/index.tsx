import * as React from 'react';
import { MetricListDataProvider } from '@stonksfi/dataProviders';
import { MetricCardListView } from '@stonksfi/views';
import { RequestProps } from '@stonksfi/hooks/useRequest';
import { ModuleConfig } from '../types';

export interface MetricCardListProps extends ModuleConfig {
	metricDataRequest: RequestProps;
}

const MetricCardList = (props: MetricCardListProps) => {
	const { metricDataRequest } = props;
	return (
		<MetricListDataProvider metricDataRequest={metricDataRequest} isMock>
			<MetricCardListView />
		</MetricListDataProvider>
	);
};

export default MetricCardList;
