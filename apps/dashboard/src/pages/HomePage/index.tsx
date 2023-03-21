// Basic Imports
import React, { useEffect } from 'react';
import { IoIosRocket } from 'react-icons/io';

import { useUserContext } from '@stonksfi/hooks';
import { Button, Loader } from '@stonksfi/components';

import DashboardPage from '../DashboardPage';
import { StyledHomePageWrapper, StyledRow, StyledStonks } from './styles';

const HomePage = () => {
	const { loginWithRedirect, isAuthenticated, isLoading } = useUserContext();
	if (isLoading) {
		return <Loader type="background" />;
	} else if (isAuthenticated) {
		return <DashboardPage />;
	} else {
		return (
			<StyledHomePageWrapper>
				<h1>stonks.fi</h1>
				<p>
					{' '}
					Welcome to&nbsp;&nbsp;
					<StyledStonks>stonks</StyledStonks>
					&nbsp;
					<IoIosRocket />{' '}
				</p>
				<p> Please login to continue</p>
				<StyledRow>
					<Button type="primaryStrong" onClick={loginWithRedirect}>
						Login
					</Button>
					<Button type="primaryStrong" onClick={() => loginWithRedirect(
						{ authorizationParams: {screen_hint: 'signup'} })}>
						Sign Up
					</Button>
				</StyledRow>
			</StyledHomePageWrapper>
		);
	}
};

export default HomePage;
