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
		viewBox="0 0 50 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		{/* Body outline */}
		<path
			d={
				'M8 22 Q4 22 4 26 Q4 30 10 32 L18 34 Q14 30 16 28 ' +
				'Q20 24 26 24 Q30 24 32 22'
			}
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		{/* Head */}
		<circle
			cx="38"
			cy="16"
			r="8"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
		/>
		{/* Eye */}
		<circle cx="40" cy="15" r="3" fill="#F5A623" />
		<circle cx="41" cy="14" r="1" fill="#1a202c" />
		{/* Beak */}
		<path
			d="M46 16 L50 18 L46 20"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		{/* Wing feathers */}
		<BirdWing
			d="M20 22 Q12 16 6 10"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
		/>
		<BirdWing
			d="M22 24 Q16 20 10 16"
			stroke="#1a202c"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			style={{ animationDelay: '0.1s' }}
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
			delay: i * 3 + Math.random() * 2,
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
