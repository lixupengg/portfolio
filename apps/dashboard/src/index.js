// Base imports
import ReactDOM from 'react-dom';
import { METRICS_LIST } from '@stonksfi/constants';
import {
	DashboardMetaContextProvider,
	DndContextProvider
} from '@stonksfi/hooks';
import BaseRouter from './routes';
import { fakeData } from './DATA/fake';
import 'rsuite/dist/rsuite.min.css';
// Import css to remove margin
import './index.scss';

const app = (
	<DashboardMetaContextProvider initialDashboardConfig={METRICS_LIST}>
		<DndContextProvider>
			<BaseRouter />
		</DndContextProvider>
	</DashboardMetaContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));
