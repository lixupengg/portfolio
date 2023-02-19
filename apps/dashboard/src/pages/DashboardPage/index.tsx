// Basic Imports
import React, { useEffect } from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Layout } from '@stonksfi/components';
import { useDashboardMetaContext } from '@stonksfi/hooks';

import { mainConfig } from './configs/main';

/* Styles */
import styles from './index.module.scss';

const DashboardPage = () => {
	return (
		<>
			<Layout settings={mainConfig} />
		</>
	);
};

export default DashboardPage;
