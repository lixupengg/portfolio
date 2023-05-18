import * as React from 'react';
import { Box, Text } from '@react-three/drei';
import { Vector3 } from 'three';

interface CubeProps {
	position: Vector3 | null;
	color?: string;
	text?: string;
	uuid?: string;
}

const Cube = (props: CubeProps) => {
	const { position, color = '#f5faff', text = '', uuid = 'box' } = props;
	if (!position) {
		return null;
	}

	return (
		<Box position={position} args={[1, 1, 1]} uuid={uuid}>
			<meshBasicMaterial color={color} />

			{/* Text has to add suspense because it needs to load some shit first hmm.. */}
			<React.Suspense fallback={null}>
				<Text
					position={[0, 0, 0.6]}
					fontSize={0.3}
					color="red"
					characters="abcdefghijklmnopqrstuvwxyz0123456789!"
				>
					{text}
				</Text>
			</React.Suspense>
		</Box>
	);
};

export default Cube;
