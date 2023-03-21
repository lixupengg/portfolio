import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { Button, ColouredLabel, Nav } from '@stonksfi/components';
import { LabelCss, StyledPageHeader, StyledPageHeaderLeft } from './style';

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
					<h1> stonks.fi <ColouredLabel label='DEMO' type='green' className={LabelCss()}/></h1>
					<Nav />
				</StyledPageHeaderLeft>
				{isAuthenticated ? 
					<Button type='black' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
						<MdLogout/>&nbsp;Logout
					</Button>
					: null
				}
			</StyledPageHeader>
		</>
	);
};

export default PageHeader;
