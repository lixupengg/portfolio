// Basic Imports
import React, { useEffect } from 'react';
import { Layout } from '@stonksfi/components';
import { useDashboardMetaContext } from '@stonksfi/hooks';
import { mainConfig } from './configs/main';

/* Styles */
import styles from './index.module.scss';

const DashboardPage = () => {
	// Add edit logic here
	const { dashboardConfig } = useDashboardMetaContext();
	return (
		<>
			<Layout settings={dashboardConfig} />
		</>
	);
};

export default DashboardPage;
