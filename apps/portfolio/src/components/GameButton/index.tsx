import React, { useState } from 'react';
import { Box, Text } from '@react-three/drei';
import { MeshBasicMaterial, Vector3 } from 'three';

interface ButtonProps {
	position?: Vector3;
	onClick?: () => void;
}

function Button({ position = new Vector3(), onClick }: ButtonProps) {
	const [hovered, setHovered] = useState(false);

	return (
		<Box
			position={position}
			onClick={onClick}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<meshBasicMaterial color={hovered ? 'lightblue' : 'blue'} />
			<Text position={[0, 0, 0.5]} fontSize={0.5} color="white">
				3D Button
			</Text>
		</Box>
	);
}

export default Button;
