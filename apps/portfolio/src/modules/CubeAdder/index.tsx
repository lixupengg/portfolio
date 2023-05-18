/* eslint-disable react/no-unknown-property */
// Basic Imports
import React, { useRef, useEffect, Suspense } from 'react';
import { Box, OrbitControls, Text } from '@react-three/drei';
import { useRaycaster } from '@lixupeng/hooks';
import GameCube from '../../components/GameCube';

const CubeAdder = () => {
	const [cubes, setCubes] = React.useState<any>([]);

	const { hovered, point } = useRaycaster();
	React.useEffect(() => {
		const handleAddCube = () => {
			if (point) {
				setCubes((prevCubes: any) => [
					...prevCubes,
					<GameCube
						key={prevCubes.length}
						position={point}
						color="grey"
						text={''}
					/>
				]);
			}
		};
		window.addEventListener('click', handleAddCube);
		return () => {
			window.removeEventListener('click', handleAddCube);
		};
	}, [point]);

	return <>{cubes.map((cube: any) => cube)}</>;
};

export default CubeAdder;
