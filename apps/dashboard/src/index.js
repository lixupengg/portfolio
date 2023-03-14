// Base imports
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { METRICS_LIST } from '@stonksfi/constants';
import {
	AlertsContextProvider,
	DashboardMetaContextProvider,
	DndContextProvider,
	UserContextProvider
} from '@stonksfi/hooks';
import BaseRouter from './routes';
import { fakeData } from './DATA/fake';
import 'rsuite/dist/rsuite.min.css';
// Import css to remove margin
import './index.scss';

const app = (
	<Auth0Provider
		domain="dev-j5rnqli2ch728y7j.us.auth0.com"
		clientId="3YSRCXBYqG5kcTumedLqXVfeUgX5faUQ"
		authorizationParams={{
			redirect_uri: window.location.origin,
			audience: 'http://api.stonks.fi'
		}}
	>
		<UserContextProvider>
			<AlertsContextProvider>
				<DashboardMetaContextProvider initialDashboardConfig={METRICS_LIST}>
					<DndContextProvider>
						<BaseRouter />
					</DndContextProvider>
				</DashboardMetaContextProvider>
			</AlertsContextProvider>
		</UserContextProvider>
	</Auth0Provider>
);

ReactDOM.render(app, document.getElementById('root'));
