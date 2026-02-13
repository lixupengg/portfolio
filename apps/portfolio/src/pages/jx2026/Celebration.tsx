import React, { useEffect, useState, useMemo } from 'react';
import { milestones, VALENTINE_MESSAGE } from './data';
import {
	CelebrationWrapper,
	FilmStripTrack,
	FilmFrame,
	FilmFrameLabel,
	FinalFrame,
	FinalMessage,
	FilmGrain,
	ConfettiParticle
} from './styles';

type Props = {
	visible: boolean;
};

const COLORS = ['#F4A0A0', '#F5D28F', '#D4838A', '#A8C5A0', '#fff', '#FFF8F0'];

const Celebration: React.FC<Props> = ({ visible }) => {
	const [showFinal, setShowFinal] = useState(false);

	useEffect(() => {
		if (visible) {
			// After film strip scrolls (6s animation), show final frame
			const timer = setTimeout(() => setShowFinal(true), 6500);
			return () => clearTimeout(timer);
		}
		setShowFinal(false);
		return undefined;
	}, [visible]);

	const confetti = useMemo(() => {
		if (!showFinal) return null;
		return Array.from({ length: 40 }).map((_, i) => (
			<ConfettiParticle
				key={i}
				style={{
					left: `${Math.random() * 100}%`,
					top: `-10px`,
					background: COLORS[i % COLORS.length],
					width: `${6 + Math.random() * 6}px`,
					height: `${6 + Math.random() * 6}px`,
					borderRadius: Math.random() > 0.5 ? '50%' : '2px',
					animationDuration: `${2 + Math.random() * 3}s`,
					animationDelay: `${Math.random() * 2}s`
				}}
			/>
		));
	}, [showFinal]);

	return (
		<CelebrationWrapper visible={visible}>
			<FilmGrain />

			{/* Film strip */}
			<div style={{ width: '100%', overflow: 'hidden', position: 'relative', zIndex: 22 }}>
				<FilmStripTrack>
					{milestones.map((m) => (
						<FilmFrame
							key={m.id}
							style={{
								background: `linear-gradient(135deg, ${m.gradient[0]} 0%, ${m.gradient[1]} 100%)`
							}}
						>
							<span style={{ fontSize: '32px' }}>📸</span>
							<FilmFrameLabel>{m.title}</FilmFrameLabel>
						</FilmFrame>
					))}
					{/* Golden final frame */}
					<FilmFrame
						style={{
							background: 'linear-gradient(135deg, #F5D28F 0%, #F4A0A0 100%)',
							border: '3px solid #F5D28F'
						}}
					>
						<span style={{ fontSize: '32px' }}>💛</span>
						<FilmFrameLabel>Forever</FilmFrameLabel>
					</FilmFrame>
				</FilmStripTrack>
			</div>

			{/* Final message overlay */}
			<FinalFrame visible={showFinal}>
				{confetti}
				<p style={{ fontSize: '48px', marginBottom: '24px' }}>💛</p>
				<FinalMessage>{VALENTINE_MESSAGE}</FinalMessage>
			</FinalFrame>
		</CelebrationWrapper>
	);
};

export default Celebration;
