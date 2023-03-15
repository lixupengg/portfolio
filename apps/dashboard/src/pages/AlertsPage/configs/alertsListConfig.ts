import { AlertsListProps } from '@stonksfi/modules/AlertsList';

export const alertsListConfig: AlertsListProps = {
	name: 'Alert Card List',
	alertsDataRequest: {
		url: 'https://stonksfi-backend.herokuapp.com/metrics',
		method: 'get' as const
	}
};
