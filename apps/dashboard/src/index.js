// Base imports
import ReactDOM from 'react-dom';

import {
	DashboardMetaContextProvider,
	DndContextProvider
} from '@stonksfi/hooks';
import BaseRouter from './routes';
import { fakeData } from './DATA/fake';

// Import css to remove margin
import './index.scss';

const app = (
	<DashboardMetaContextProvider initialDashboardConfig={fakeData}>
		<DndContextProvider>
			<BaseRouter />
		</DndContextProvider>
	</DashboardMetaContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));