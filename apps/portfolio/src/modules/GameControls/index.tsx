/* eslint-disable react/no-unknown-property */
// Basic Imports
import React, { useRef, useEffect, Suspense } from 'react';
import { Box, OrbitControls, Text } from '@react-three/drei';
import { GRID_SIZE } from '@lixupeng/constants';

const GameControls = () => {
	return (
		<>
			<OrbitControls />
			<axesHelper />
			<gridHelper args={[GRID_SIZE, GRID_SIZE]} />
		</>
	);
};

export default GameControls;
