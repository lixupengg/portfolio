import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { history } from '@lixupeng/utils';
import { Nav } from '@lixupeng/components';
import Logo from './assets/xplogo.svg';

/* Pages */
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import GamePage from './pages/GamePage';
import ExperiencesPage from './pages/ExperiencesPage';
import ReadPage from './pages/ReadPage';
import Jx2024 from './pages/jx2024';
import Jx2025 from './pages/jx2025';

/* Styling */
import { theme, Layout } from './styles/styling';

interface RouteProps {
	path: string;
	exact?: boolean;
	component: any;
}

export const CustomRoute = (props: RouteProps) => {
	const { path, exact, component: Component } = props;
	const blacklistedPaths = ['/and-jia-xuan-kuah-2024-vday', '/and-jia-xuan-kuah-2025-vday'];
	return (
		<Route
			path={path}
			exact={exact}
			render={(renderProps: any) => {
				return (
					<Layout className={`${theme}`}>
						{!blacklistedPaths.includes(path) && <Nav logo={Logo} />}
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
			<CustomRoute
				exact
				path="/and-jia-xuan-kuah-2024-vday"
				component={Jx2024}
			/>
			<CustomRoute
				exact
				path="/and-jia-xuan-kuah-2025-vday"
				component={Jx2025}
			/>
		</Switch>
	</Router>
);

export default BaseRouter;
