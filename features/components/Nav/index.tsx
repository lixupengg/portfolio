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
				selected={history.location.pathname === '/'}
				onClick={() => handleChangePage('/')}
			>
				<span>Dashboard</span>
			</StyledNavButton>
			<StyledNavButton
				selected={history.location.pathname === '/playground'}
				onClick={() => handleChangePage('/playground')}
			>
				<span>Playground</span>
			</StyledNavButton>
		</StyledNav>
	);
};

export default Nav;
