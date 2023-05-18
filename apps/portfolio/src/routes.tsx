import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from '@lixupeng/utils';
import { Nav } from '@lixupeng/components';
import Logo from './assets/xplogo.svg';

/* Pages */
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import GamePage from './pages/GamePage';
import ExperiencesPage from './pages/ExperiencesPage';
import ReadPage from './pages/ReadPage';

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
						<Nav logo={Logo} />
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
			<CustomRoute exact path="/" component={HomePage} />
			<CustomRoute exact path="/game" component={GamePage} />
			<CustomRoute exact path="/projects" component={ProjectsPage} />
			<CustomRoute exact path="/experience" component={ExperiencesPage} />
			<CustomRoute exact path="/read" component={ReadPage} />
		</Switch>
	</Router>
);

export default BaseRouter;
