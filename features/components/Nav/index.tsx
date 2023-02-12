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
				Dashboard
			</StyledNavButton>
			<StyledNavButton
				selected={history.location.pathname === '/'}
				onClick={() => handleChangePage('/')}
			>
				News Feed
			</StyledNavButton>
		</StyledNav>
	);
};

export default Nav;
