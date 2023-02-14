import { ModuleDisplaySetting } from '@stonksfi/components/Layout/types';
import React, { useContext, createContext, useState } from 'react';

interface DashboardMetaContextValues {
	dashboardConfig: ModuleDisplaySetting[];
	setDashboardConfig: (config: ModuleDisplaySetting[]) => void;
	isEditingConfig: boolean;
	setIsEditingConfig: (isEditingConfig: boolean) => void;
}

const Context = createContext<DashboardMetaContextValues>({
	dashboardConfig: [],
	setDashboardConfig: () => {},
	isEditingConfig: false,
	setIsEditingConfig: () => {},
});

export const useDashboardMetaContext = () => useContext(Context);

export const DashboardMetaContextProvider = ({children, initialDashboardConfig}: any) => {
	const [dashboardConfig, setDashboardConfig] = useState<ModuleDisplaySetting[]>(initialDashboardConfig);
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