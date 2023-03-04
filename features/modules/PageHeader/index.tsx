import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { Button, Nav } from '@stonksfi/components';
import { StyledPageHeader, StyledPageHeaderLeft } from './style';

interface Props {
	title?: string;
	callToAction?: any;
}

const PageHeader = (props: Props) => {
	const { title, callToAction } = props;
	const { logout, isAuthenticated, accessToken } = useUserContext();
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
