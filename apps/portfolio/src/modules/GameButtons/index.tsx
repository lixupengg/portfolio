/* eslint-disable react/no-unknown-property */
// Basic Imports
import React, { useRef, useEffect, Suspense } from 'react';
import { Raycaster, Vector2, Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, Text } from '@react-three/drei';
import Button from '@lixupeng/components/Button';
import { LevelUpButtonCss, FightButtonCss, StyledLevelInfo } from './styles';

interface GameButtonsProps {
	numMetrics: number;
	setNumMetrics: (numMetrics: number) => void;
}

const GameButtons = (props: GameButtonsProps) => {
	const { numMetrics, setNumMetrics } = props;
	return (
		<>
			<Button
				onClick={() => {}}
				className={FightButtonCss()}
				size="large"
				type="secondaryStrong"
			>
				FIGHT
			</Button>
			<Button
				onClick={() => setNumMetrics(numMetrics + 1)}
				className={LevelUpButtonCss()}
				size="large"
				type="primaryStrong"
			>
				LEVEL UP
			</Button>
			<StyledLevelInfo>stonks.fi - LEVEL: {numMetrics}</StyledLevelInfo>
		</>
	);
};

export default GameButtons;
