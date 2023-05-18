/* eslint-disable react/no-unknown-property */
// Basic Imports
import React, { useRef } from 'react';
import { Vector3 } from 'three';
import { GRID_SIZE } from '@lixupeng/constants';
import { Plane } from '@react-three/drei';
import { useRaycaster } from '@lixupeng/hooks';
import GameCube from '../../components/GameCube';

const Grid = () => {
	const gridRef = useRef<any>();
	const { hovered, point } = useRaycaster();
	const fixedYPoint = new Vector3(point?.x || 0, point?.y || 0, point?.z || 0);
	return (
		<>
			<Plane
				ref={gridRef}
				args={[GRID_SIZE, GRID_SIZE]}
				position={[0, 0, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
			>
				<meshBasicMaterial visible={false} />
			</Plane>
			{/* {point && (
				<Plane
					ref={gridRef}
					args={[1, 1]}
					position={fixedYPoint}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<meshBasicMaterial visible />
				</Plane>
			)} */}
			{point && (
				<GameCube
					uuid="hoverBox"
					// args={[1, 1]}
					position={fixedYPoint}
					// rotation={[-Math.PI / 2, 0, 0]}
					color="red"
				/>
			)}
		</>
	);
};

export default Grid;
