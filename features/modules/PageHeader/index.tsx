import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { MdLogout } from 'react-icons/md';
import { Button, Nav } from '@stonksfi/components';
import { StyledPageHeader, StyledPageHeaderLeft } from './style';

interface Props {
	title?: string;
	callToAction?: any;
}

const PageHeader = (props: Props) => {
	const { title, callToAction } = props;
	const { loginWithRedirect, logout } = useAuth0();
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log(user);

	return (
		<>
			<title>stonks.fi -{title}</title>

			<StyledPageHeader>
				<StyledPageHeaderLeft>
					<h1> stonks.fi </h1>
					<Nav />
				</StyledPageHeaderLeft>
				{isAuthenticated ? 
					<Button type='black' onClick={() => logout()}>
						<MdLogout/>&nbsp;Logout
					</Button>
					: null
				}
			</StyledPageHeader>
		</>
	);
};

export default PageHeader;
