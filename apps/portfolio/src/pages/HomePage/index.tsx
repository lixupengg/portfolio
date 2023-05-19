// Basic Imports
import React, { useEffect } from 'react';
import { IoIosRocket } from 'react-icons/io';
import { Loader } from '@lixupeng/components';
import { history } from '@lixupeng/utils';

import BgImage from '../../assets/bg.png';
import Door from '../../assets/door3.svg';

import { StyledHomePageWrapper, StyledDoor, StyledDoorWrapper, StyledBgImage } from './styles';

const HomePage = () => {
	const [isDoorClicked, setIsDoorClicked] = React.useState(false);
	const [loaderIsShown, setLoaderIsShown] = React.useState(false);
	const onDoorClick = () => {
		setIsDoorClicked(true);
		// push to history after 1s
		setTimeout(() => {
			setLoaderIsShown(true);
		}, 1000);
		setTimeout(() => {
			history.push('/projects');
		}, 1500);
	};

	return (
		<StyledHomePageWrapper>
			{/* Background Image */}
			<StyledBgImage src={BgImage} alt="bg" />
			{/* Door Image */}
			<StyledDoorWrapper onClick={onDoorClick} isDoorOpen={isDoorClicked}>
				<p>enter</p>
				<StyledDoor src={Door} alt="door" />
			</StyledDoorWrapper>
			<h1>
				XUPENG
				<br />
				<span>
					LI
				</span>
			</h1>
			{loaderIsShown && <Loader type="inline" />}
		</StyledHomePageWrapper>
	);
};

export default HomePage;
