import * as React from 'react';
import { MetricListDataProvider } from '@stonksfi/dataProviders';
import { AlertsListView } from '@stonksfi/views';
import { RequestProps } from '@stonksfi/hooks/useRequest';
import AlertsDataProvider from '@stonksfi/dataProviders/AlertsDataProvider';
import { ModuleConfig } from '../types';

export interface AlertsListProps extends ModuleConfig {
	alertsDataRequest: RequestProps;
}

const AlertsList = (props: AlertsListProps) => {
	const { alertsDataRequest } = props;
	return (
		<AlertsDataProvider alertsDataRequest={alertsDataRequest} isMock>
			<AlertsListView />
		</AlertsDataProvider>
	);
};

export default AlertsList;
