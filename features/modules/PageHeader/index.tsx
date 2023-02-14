import * as React from 'react';
import { FaUserSecret } from 'react-icons/fa';
import { Nav } from '@stonksfi/components';
import { StyledPageHeader, StyledPageHeaderLeft } from './style';

interface Props {
	title?: string;
	callToAction?: any;
}

const PageHeader = (props: Props) => {
	const { title, callToAction } = props;

	return (
		<>
			<title>stonks.fi -{title}</title>

			<StyledPageHeader>
				<StyledPageHeaderLeft>
					<h1> stonks.fi </h1>
					<Nav />
				</StyledPageHeaderLeft>
				<FaUserSecret size="24px"/>
			</StyledPageHeader>
		</>
	);
};

export default PageHeader;
