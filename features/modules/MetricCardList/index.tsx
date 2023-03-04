import * as React from 'react';
import { MetricListDataProvider } from '@stonksfi/dataProviders';
import { MetricCardListView } from '@stonksfi/views';
import { RequestProps } from '@stonksfi/hooks/useRequest';
import { ModuleConfig } from '../types';

export interface MetricCardListProps extends ModuleConfig {
	metricDataRequest: RequestProps;
	isCompact?: boolean;
}

const MetricCardList = (props: MetricCardListProps) => {
	const { metricDataRequest, isCompact } = props;
	return (
		<MetricListDataProvider metricDataRequest={metricDataRequest} isMock>
			<MetricCardListView isCompact={isCompact}/>
		</MetricListDataProvider>
	);
};

export default MetricCardList;
