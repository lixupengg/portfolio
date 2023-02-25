// Basic Imports
import React, { useEffect } from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { Button, Loader } from '@stonksfi/components';
import { IoIosRocket } from 'react-icons/io';
import DashboardPage from '../DashboardPage';
import { StyledHomePageWrapper, StyledRow, StyledStonks } from './styles';

/* Components */

const HomePage = () => {
	const { loginWithRedirect, isAuthenticated, isLoading } = useUserContext();
	if (isLoading) {
		return <Loader type='background'/>;
	} else if (isAuthenticated) {
		return <DashboardPage />;
	} else {
		return (
			<StyledHomePageWrapper>
				<h1>stonks.fi</h1>
				<p>
					{' '}
					Welcome to&nbsp;
					<StyledStonks>stonks</StyledStonks>
					&nbsp;
					<IoIosRocket />{' '}
				</p>
				<p> Please login to continue</p>
				<StyledRow>
					<Button type="primaryStrong" onClick={loginWithRedirect}>
						Login
					</Button>
					<Button type="primaryStrong" onClick={loginWithRedirect}>
						Sign Up
					</Button>
				</StyledRow>
			</StyledHomePageWrapper>
		);
	}
};

export default HomePage;
