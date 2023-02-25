import React, { useContext, createContext, useState } from 'react';
import { MetricDisplaySetting } from '@stonksfi/types';
import { METRICS_LIST } from '@stonksfi/constants';
import { useRequest } from '../useRequest';

interface DashboardMetaContext {
	dashboardConfig: MetricDisplaySetting[];
	updateDashboardConfig: (config: MetricDisplaySetting[]) => void;
	isEditingConfig: boolean;
	setIsEditingConfig: (isEditingConfig: boolean) => void;
}

const Context = createContext<DashboardMetaContext>({
	dashboardConfig: [],
	updateDashboardConfig: () => {},
	isEditingConfig: false,
	setIsEditingConfig: () => {},
});

export const useDashboardMetaContext = () => useContext(Context);

export const DashboardMetaContextProvider = ({children}: any) => {
	const [dashboardConfig, setDashboardConfig] = useState<MetricDisplaySetting[]>(METRICS_LIST);
	const [isEditingConfig, setIsEditingConfig] = useState<boolean>(false);
	const updateDashboardConfig = (newConfig: MetricDisplaySetting[]) => {
		// Insert BE call here
		setDashboardConfig(newConfig);
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
	// 		setDashboardConfig(metricDisplaySettings.data);
	// 	}
	// }, [metricDisplaySettings.status]);

	return (
	  <Context.Provider value={{
		dashboardConfig, 
		updateDashboardConfig,
		isEditingConfig,
		setIsEditingConfig,
	  }}>
		{children}
	  </Context.Provider>
	);
}