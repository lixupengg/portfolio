import React, { useMemo } from 'react';
import { BirdContainer, BirdWrapper, BirdWing } from './styles';

interface BirdData {
	id: number;
	top: string;
	duration: number;
	delay: number;
	scale: number;
}

const BirdSvg: React.FC<{ scale: number }> = ({ scale }) => (
	<svg
		width={40 * scale}
		height={30 * scale}
		viewBox="0 0 56 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		{/* Body outline */}
		<ellipse
			cx="22"
			cy="22"
			rx="12"
			ry="8"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
		/>
		{/* Head */}
		<circle
			cx="40"
			cy="18"
			r="7"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
		/>
		{/* Eye */}
		<circle cx="42" cy="16" r="2.5" fill="#F5A623" />
		<circle cx="43" cy="15" r="1" fill="#1a202c" />
		{/* Beak */}
		<path
			d="M47 18 L52 20 L47 22"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		{/* Wing feathers */}
		<BirdWing
			d="M20 20 L8 20"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			style={{ transformOrigin: '20px 20px' }}
		/>
		<BirdWing
			d="M20 24 L8 24"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			style={{ transformOrigin: '20px 24px', animationDelay: '0.1s' }}
		/>
	</svg>
);

const FlyingBirds: React.FC = () => {
	const birds = useMemo<BirdData[]>(() => {
		const count = 3;
		return Array.from({ length: count }, (_, i) => ({
			id: i,
			top: `${10 + Math.random() * 10}%`,
			duration: 15 + Math.random() * 10,
			delay: i * 2,
			scale: 1.5 + Math.random() * 0.8
		}));
	}, []);

	return (
		<BirdContainer>
			{birds.map((bird) => (
				<BirdWrapper
					key={bird.id}
					style={{
						top: bird.top,
						animationDuration: `${bird.duration}s`,
						animationDelay: `${bird.delay}s`
					}}
				>
					<BirdSvg scale={bird.scale} />
				</BirdWrapper>
			))}
		</BirdContainer>
	);
};

export default FlyingBirds;
