import { MetricCardProps } from '@stonksfi/modules/MetricCard';
import React, { useContext, createContext, useState } from 'react';

interface DashboardMetaContext {
	dashboardConfig: MetricCardProps[];
	setDashboardConfig: (config: MetricCardProps[]) => void;
	isEditingConfig: boolean;
	setIsEditingConfig: (isEditingConfig: boolean) => void;
}

const Context = createContext<DashboardMetaContext>({
	dashboardConfig: [],
	setDashboardConfig: () => {},
	isEditingConfig: false,
	setIsEditingConfig: () => {},
});

export const useDashboardMetaContext = () => useContext(Context);

export const DashboardMetaContextProvider = ({children, initialDashboardConfig}: any) => {
	const [dashboardConfig, setDashboardConfig] = useState<MetricCardProps[]>(initialDashboardConfig);
	const [isEditingConfig, setIsEditingConfig] = useState<boolean>(false);
  
	return (
	  <Context.Provider value={{
		dashboardConfig, 
		setDashboardConfig,
		isEditingConfig,
		setIsEditingConfig,
	  }}>
		{children}
	  </Context.Provider>
	);
}