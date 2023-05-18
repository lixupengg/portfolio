// Basic Imports
import React from 'react';
import { history } from '@lixupeng/utils';
import { StyledNav, StyledNavButton, StyledLogo } from './styles';

interface NavProps {
	logo: string;
}

const Nav = (props: NavProps) => {
	const { logo } = props;
	const handleChangePage = (newPage: string) => {
		history.push(newPage);
	};

	return (
		<StyledNav>
			<StyledLogo src={logo} alt="logo"/>
			<StyledNavButton
				selected={history.location.pathname === '/'}
				onClick={() => handleChangePage('/')}
			>
				<span>Home</span>
			</StyledNavButton>
			<StyledNavButton
				selected={history.location.pathname === '/projects'}
				onClick={() => handleChangePage('/projects')}
			>
				<span>Projects</span>
			</StyledNavButton>
			<StyledNavButton
				selected={history.location.pathname === '/experience'}
				onClick={() => handleChangePage('/experience')}
			>
				<span>Experience</span>
			</StyledNavButton>
			<StyledNavButton
				selected={history.location.pathname === '/read'}
				onClick={() => handleChangePage('/read')}
			>
				<span>Read</span>
			</StyledNavButton>
		</StyledNav>
	);
};

export default Nav;
