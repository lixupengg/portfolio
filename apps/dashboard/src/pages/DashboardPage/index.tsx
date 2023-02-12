// Basic Imports
import React, { useEffect } from 'react';
import { Layout, RocketEmojiBackground } from '@stonksfi/components';
import { mainConfig } from './configs/main';
import Table from '../../sharedComponents/Table';

/* Styles */
import styles from './index.module.scss';

const DashboardPage = () => {
	// Add edit logic here
	return (
		<>
			<Layout settings={mainConfig} />
		</>
	);
};

export default DashboardPage;
