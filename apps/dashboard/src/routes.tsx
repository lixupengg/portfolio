import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from '@stonksfi/utils';

/* Pages */
import CustomersPage from './pages/CustomersPage';
import DashboardPage from './pages/DashboardPage';

/* Styling */
import { theme, Layout } from './styles/styling';

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
			<CustomRoute exact path="/" component={DashboardPage} />
		</Switch>
	</Router>
);

export default BaseRouter;
