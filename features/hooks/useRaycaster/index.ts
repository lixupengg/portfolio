import React, { useState } from 'react';
import { Vector2, Raycaster, Object3D, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import { THREE_HELPER_TYPES } from '@lixupeng/constants';

// ThreeJS hook to return the hovered object and the point of intersection.
export const useRaycaster = () => {
	const [hovered, setHovered] = useState<Object3D | null>(null);
	const [point, setPoint] = useState<Vector3 | null>(null);
	const { camera, scene } = useThree();
	const raycasterRef = new Raycaster();
	const mouseRef = new Vector2();

	React.useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
			mouseRef.set(mouseX, mouseY);
			raycasterRef.setFromCamera(mouseRef, camera);

			// Filter out grid and other helpers from objects to intersect.
			const objects = scene.children.filter(
				(child) => (
					!THREE_HELPER_TYPES.includes(child.type))
					&& child.uuid !== 'hoverBox'
				);
			
			const intersects = raycasterRef.intersectObjects(objects, false);
			if (intersects.length > 0) {
				const intersect = intersects[0];
				const newHovered = intersect.object;
				if (hovered !== newHovered) {
					setHovered(newHovered);
				}
				let newPoint = intersect.point;
				// newPoint = newPoint.add(intersect?.face?.normal || new Vector3());
				// Round off to fit into grid
				newPoint = newPoint.divideScalar(1).floor().addScalar(0.5);
				newPoint.y = Math.max(0.5, newPoint.y);
				setPoint(newPoint);
			} else {
				setHovered(null);
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [camera, scene]);

	return { hovered, point };
};
