// Basic Imports
import React from 'react';
import { history } from '@stonksfi/utils';
import { StyledNav, StyledNavButton } from './styles';

const Nav = () => {
	const handleChangePage = (newPage: string) => {
		history.push(newPage);
	};

	return (
		<StyledNav>
			<StyledNavButton
				selected={history.location.pathname === '/dashboard'}
				onClick={() => handleChangePage('/dashboard')}
			>
				<span>Dashboard</span>
			</StyledNavButton>
			<StyledNavButton
				selected={history.location.pathname === '/'}
				onClick={() => handleChangePage('/')}
			>
				<span>News Feed</span>
			</StyledNavButton>
		</StyledNav>
	);
};

export default Nav;
