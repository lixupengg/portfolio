import React, { useContext, createContext, useState } from 'react';
import { Alert, MetricDisplaySetting } from '@stonksfi/types';
import { METRICS_LIST } from '@stonksfi/constants';
import { useRequest } from '../useRequest';
import { ALERTS } from './FAKE';

interface AlertsContext {
	alerts: Alert[];
	updateAlerts: (alerts: Alert[]) => void;
	updateAlertBeingEdited: (alert: Alert) => void;
	alertBeingEdited: Alert | null;
}

const Context = createContext<AlertsContext>({
	alerts: [],
	updateAlerts: () => {},
	updateAlertBeingEdited: () => {},
	alertBeingEdited: null,
});

export const useAlertsContext = () => useContext(Context);

export const AlertsContextProvider = ({children}: any) => {
	const [alerts, setAlerts] = useState<Alert[]>(ALERTS);
	const [alertBeingEdited, setAlertBeingEdited] = useState<Alert | null>(ALERTS[0]);

	const updateAlerts = (alerts: Alert[]) => {
		// Insert BE call here
		setAlerts(alerts);
	};

	const updateAlertBeingEdited = (alert: Alert) => {
		setAlertBeingEdited(alert);
	};
	
	const userId = 1; // probably a context hook from somewhere else~
	// jk user info shld b auto added to request headers

	/* Grab dashboard config from backend */
	// const metricDisplaySettingsRequest = {
	// 	url: '/api/metricDisplaySettings',
	// 	method: 'get' as const,
	// 	params: {
	// 		userId,
	// 	},
	// };
	// const metricDisplaySettings = useRequest({...metricDisplaySettingsRequest});

	// React.useEffect(() => {
	// 	if (metricDisplaySettings.status === 'success') {
	// 		setMetricsMeta(metricDisplaySettings.data);
	// 	}
	// }, [metricDisplaySettings.status]);

	return (
	  <Context.Provider value={{
		alerts, 
		updateAlerts,
		alertBeingEdited,
		updateAlertBeingEdited,
	  }}>
		{children}
	  </Context.Provider>
	);
}