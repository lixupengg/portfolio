import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from '@stonksfi/utils';

/* Pages */
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import AlertsPage from './pages/AlertsPage';

/* Styling */
import { theme, Layout } from './styles/styling';
import StrategyPage from './pages/StrategyPage';

interface RouteProps {
	path: string;
	exact?: boolean;
	component: any;
}
export const CustomRoute = (props: RouteProps) => {
	const { path, exact, component: Component } = props;
	return (
		<Route
			path={path}
			exact={exact}
			render={(renderProps: any) => {
				return (
					<Layout className={`${theme}`}>
						<Component {...renderProps} />
					</Layout>
				);
			}}
		/>
	);
};

const BaseRouter: React.ReactNode = () => (
	<Router history={history}>
		<Switch>
			<CustomRoute exact path="/dashboard" component={DashboardPage} />
			<CustomRoute exact path="/playground" component={StrategyPage} />
			<CustomRoute exact path="/alerts" component={AlertsPage} />
			<CustomRoute exact path="/" component={HomePage} />
		</Switch>
	</Router>
);

export default BaseRouter;
