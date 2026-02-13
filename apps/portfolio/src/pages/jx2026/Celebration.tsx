import React, { useEffect, useState, useMemo, useRef } from 'react';
import { VALENTINE_MESSAGE } from './data';
import {
	CelebrationWrapper,
	FilmStripTrack,
	FilmFrame,
	FinalFrame,
	FinalMessage,
	FilmGrain,
	ConfettiParticle
} from './styles';

import china1 from '../../assets/jx2026/china1.jpg';
import china2 from '../../assets/jx2026/china2.jpg';
import china3 from '../../assets/jx2026/china3.jpg';
import cruise1 from '../../assets/jx2026/cruise1.jpg';
import cruise2 from '../../assets/jx2026/cruise2.jpg';
import cruise3 from '../../assets/jx2026/cruise3.jpg';
import sg1 from '../../assets/jx2026/sg1.jpg';
import sg2 from '../../assets/jx2026/sg2.jpg';
import sg3 from '../../assets/jx2026/sg3.jpg';
import sg4 from '../../assets/jx2026/sg4.jpg';
import korea1 from '../../assets/jx2026/korea1.jpg';
import korea2 from '../../assets/jx2026/korea2.jpg';
import korea3 from '../../assets/jx2026/korea3.jpg';
import wedding1 from '../../assets/jx2026/wedding1.jpg';
import wedding2 from '../../assets/jx2026/wedding2.jpg';

const FILM_IMAGES = [
	china1,
	china2,
	china3,
	cruise1,
	cruise2,
	cruise3,
	sg1,
	sg2,
	sg3,
	sg4,
	korea1,
	korea2,
	korea3,
	wedding1,
	wedding2
];

type Props = {
	visible: boolean;
};

const COLORS = ['#FFD54F', '#F5D28F', '#FFA000', '#A8C5A0', '#fff', '#FFFDE7'];

const Celebration: React.FC<Props> = ({ visible }) => {
	const [showFinal, setShowFinal] = useState(false);
	const trackRef = useRef<HTMLDivElement>(null);
	const [animationStyle, setAnimationStyle] = useState<React.CSSProperties>({});

	useEffect(() => {
		if (visible && trackRef.current) {
			const trackWidth = trackRef.current.scrollWidth;
			const containerWidth = trackRef.current.parentElement?.clientWidth || 0;
			const endX = containerWidth;

			// Start off-screen to the left
			setAnimationStyle({
				transform: `translateX(${-trackWidth}px)`,
				transition: 'none'
			});

			// Trigger animation after a brief delay
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setAnimationStyle({
						transform: `translateX(${endX}px)`,
						transition: 'transform 20s linear'
					});
				});
			});

			// Show final frame after animation completes
			const timer = setTimeout(() => setShowFinal(true), 20500);
			return () => clearTimeout(timer);
		}

		if (trackRef.current) {
			const trackWidth = trackRef.current.scrollWidth;
			setAnimationStyle({
				transform: `translateX(${-trackWidth}px)`,
				transition: 'none'
			});
			setShowFinal(false);
		}
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

			{/* Title text */}
			<p
				style={{
					fontSize: '24px',
					padding: '12px 24px',
					borderRadius: '12px',
					background:
						'linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
					backdropFilter: 'blur(4px)',
					WebkitBackdropFilter: 'blur(4px)',
					color: '#333',
					textShadow: '0 1px 2px rgba(0,0,0,0.1)',
					marginBottom: '24px',
					zIndex: 23
				}}
			>
				we made it to getting the bedok HDB A A A A A!
			</p>

			{/* Film strip */}
			<div
				style={{
					width: '100%',
					height: '50%',
					overflow: 'hidden',
					position: 'relative',
					zIndex: 22
				}}
			>
				<FilmStripTrack ref={trackRef} style={animationStyle}>
					{FILM_IMAGES.map((src, index) => (
						<FilmFrame key={index}>
							<img
								src={src}
								alt=""
								style={{
									position: 'absolute',
									inset: 0,
									width: '100%',
									height: '100%',
									objectFit: 'contain'
								}}
							/>
						</FilmFrame>
					))}
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
