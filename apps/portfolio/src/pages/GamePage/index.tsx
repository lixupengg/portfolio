/* eslint-disable react/no-unknown-property */
// Basic Imports
import React, { useRef, useEffect, Suspense } from 'react';
import { Raycaster, Vector2, Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, Text } from '@react-three/drei';
import Button from '@lixupeng/components/Button';
import GameControls from '../../modules/GameControls';
import GameButtons from '../../modules/GameButtons';
import Grid from '../../modules/Grid';

import GameCube from '../../components/GameCube';
import CubeAdder from '../../modules/CubeAdder';

const GamePage = () => {
	const controlsRef = useRef<any>();
	const gridRef = useRef<any>();
	const [numMetrics, setNumMetrics] = React.useState(1);
	const generateCube = (cubeIndex: number) => {
		return (
			<GameCube
				key={cubeIndex}
				position={
					new Vector3(
						(cubeIndex % 3) * 3 - 3,
						0.5,
						cubeIndex + 0.5 - (cubeIndex % 3)
					)
				}
				text={`Metric ${cubeIndex + 1}`}
			/>
		);
	};
	return (
		<>
			<Canvas style={{ width: '100%', height: '100%', background: 'black' }}>
				<GameControls />
				<Grid />
				<CubeAdder />
				{/* {numMetrics > 0 &&
					Array.from(Array(numMetrics).keys()).map((cubeIndex) =>
						generateCube(cubeIndex)
					)
				} */}
			</Canvas>
			<GameButtons numMetrics={numMetrics} setNumMetrics={setNumMetrics} />
		</>
	);
};

export default GamePage;
