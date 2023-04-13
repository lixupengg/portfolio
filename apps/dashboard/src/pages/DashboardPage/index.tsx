// Basic Imports
import React, { useEffect } from 'react';
import { Layout, Joyride } from '@stonksfi/components';
import { mainConfig } from './configs/main';

const DashboardPage = () => {
	return (
		<>
			<Layout settings={mainConfig} />
			{/* <Joyride /> */}
		</>
	);
};

export default DashboardPage;
