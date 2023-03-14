// Basic Imports
import React, { useEffect } from 'react';
import { Layout } from '@stonksfi/components';
import { mainConfig } from './configs/main';

const StrategyPage = () => {
	return (
		<>
			<Layout settings={mainConfig} />
		</>
	);
};

export default StrategyPage;
