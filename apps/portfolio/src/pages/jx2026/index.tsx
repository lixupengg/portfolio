import React, { useState, useCallback, useEffect, useRef } from 'react';
import LoveMap from './LoveMap';
import QuizScreen from './QuizScreen';
import Celebration from './Celebration';
import { milestones } from './data';
import {
	PageWrapper,
	LandingOverlay,
	LandingTitle,
	BeginButton,
	MapContainer,
	QuizOverlay
} from './styles';
// @ts-ignore
import BGMusic from '../../assets/jx2025/qot.mp3';
// @ts-ignore
import CelebrationMusic from '../../assets/jx2025/finale.mp3';
import pathBg from '../../assets/jx2026/path.png';

type Phase = 'landing' | 'map' | 'quiz' | 'celebration';

const Jx2026: React.FC = () => {
	const [phase, setPhase] = useState<Phase>('landing');
	const [completedNodes, setCompletedNodes] = useState<Set<number>>(new Set());
	const [currentUnlocked, setCurrentUnlocked] = useState(0);
	const [heartPosition, setHeartPosition] = useState(0);
	const [activeMilestone, setActiveMilestone] = useState(0);
	const [fadeStart, setFadeStart] = useState(0);
	const [fadeEnd, setFadeEnd] = useState(5);
	const [gradientHeight, setGradientHeight] = useState(0);
	const [horizontalOffset, setHorizontalOffset] = useState(0);
	const [horizontalFadeStart, setHorizontalFadeStart] = useState(0);
	const [horizontalFadeEnd, setHorizontalFadeEnd] = useState(100);
	const [leftEdgePercent, setLeftEdgePercent] = useState(0);
	const [rightEdgePercent, setRightEdgePercent] = useState(100);
	const containerRef = useRef<HTMLDivElement>(null);

	// Calculate fade positions based on where the contained image starts
	useEffect(() => {
		const img = new Image();
		img.src = pathBg;

		const calculateFadePositions = () => {
			if (!containerRef.current || !img.naturalWidth || !img.naturalHeight)
				return;

			const containerHeight = containerRef.current.clientHeight;
			const imageAspectRatio = img.naturalWidth / img.naturalHeight;

			const fixedWidth = 1440;
			const renderedHeight = fixedWidth / imageAspectRatio;

			const topOffset = containerHeight - renderedHeight;
			// Calculate percentages relative to container
			const startPercent = (topOffset / containerHeight) * 100;
			const fadeHeight = ((renderedHeight * 0.05) / containerHeight) * 100; // 5% of image height
			setFadeStart(startPercent);
			setFadeEnd(startPercent + fadeHeight);
			setGradientHeight(Math.max(0, topOffset));

			// Calculate horizontal offset for screens wider than 1440px
			const containerWidth = containerRef.current.clientWidth;
			const leftRightOffset = Math.max(0, (containerWidth - 1440) / 2);
			setHorizontalOffset(leftRightOffset);

			// Calculate horizontal fade percentages based on where image sits
			if (leftRightOffset > 0) {
				// Image edge positions as percentages
				const leftEdge = (leftRightOffset / containerWidth) * 100;
				const rightEdge =
					((containerWidth - leftRightOffset) / containerWidth) * 100;
				setLeftEdgePercent(leftEdge);
				setRightEdgePercent(rightEdge);

				// Fade width is 5% of the image width (72px)
				const fadeWidth = 72;
				const leftFadeEnd =
					((leftRightOffset + fadeWidth) / containerWidth) * 100;
				const rightFadeStart =
					((containerWidth - leftRightOffset - fadeWidth) / containerWidth) *
					100;
				setHorizontalFadeStart(leftFadeEnd);
				setHorizontalFadeEnd(rightFadeStart);
			}
		};

		img.onload = calculateFadePositions;
		window.addEventListener('resize', calculateFadePositions);
		// Initial calculation if image is already cached
		if (img.complete) calculateFadePositions();

		return () => window.removeEventListener('resize', calculateFadePositions);
	}, []);

	const handleBegin = useCallback(() => {
		setPhase('map');
		try {
			const bg = document.getElementById('jx2026-bg-music') as HTMLAudioElement;
			bg?.play();
		} catch (_) {
			/* autoplay policy */
		}
	}, []);

	const handleNodeClick = useCallback((index: number) => {
		setActiveMilestone(index);
		setPhase('quiz');
	}, []);

	const handleMilestoneComplete = useCallback(() => {
		const newCompleted = new Set(completedNodes);
		newCompleted.add(activeMilestone);
		setCompletedNodes(newCompleted);

		const nextUnlocked = activeMilestone + 1;
		if (nextUnlocked <= 4) {
			setCurrentUnlocked(nextUnlocked);
		}

		// Animate heart to next position
		setTimeout(() => {
			setHeartPosition(Math.min(activeMilestone + 1, 4));
		}, 300);

		setPhase('map');

		// Check if all done
		if (newCompleted.size === 1) {
			setTimeout(() => {
				setPhase('celebration');
				try {
					const bg = document.getElementById(
						'jx2026-bg-music'
					) as HTMLAudioElement;
					bg?.pause();
					const cel = document.getElementById(
						'jx2026-cel-music'
					) as HTMLAudioElement;
					cel?.play();
				} catch (_) {
					/* */
				}
			}, 2000);
		}
	}, [completedNodes, activeMilestone]);

	return (
		<PageWrapper ref={containerRef}>
			{/* Left side gradient fill for wide screens */}
			{horizontalOffset > 0 && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: horizontalOffset + 500,
						height: '100%',
						background: 'rgb(90, 167, 249)',
						zIndex: 0
					}}
				/>
			)}
			{/* Right side gradient fill for wide screens */}
			{horizontalOffset > 0 && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						width: horizontalOffset + 500,
						height: '100%',
						background: 'rgb(90, 167, 249)',
						zIndex: 0
					}}
				/>
			)}
			{/* Background gradient - covers empty space above contained image */}
			{gradientHeight > 0 && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						height: gradientHeight + 100,
						background: `linear-gradient(to bottom,
						rgb(173, 216, 250) 0%, rgb(90, 167, 249) 40%, rgb(90, 167, 249) 100%)`,
						// border: '2px solid red',
						// width: '100%',
						zIndex: 0
					}}
				/>
			)}
			{/* Background image with top and horizontal edge fades */}
			<div
				style={
					{
						position: 'absolute',
						inset: 0,
						backgroundImage: `url(${pathBg})`,
						backgroundSize: '1440px auto',
						backgroundPosition: 'center bottom',
						backgroundRepeat: 'no-repeat',
						zIndex: 0,
						maskImage:
							horizontalOffset > 0
								? `linear-gradient(to bottom, black 0%, black ${fadeStart}%,
							transparent ${fadeStart}%, black ${fadeEnd}%),
							linear-gradient(to right,
							transparent 0%,
							transparent ${leftEdgePercent}%,
							black ${horizontalFadeStart}%,
							black ${horizontalFadeEnd}%,
							transparent ${rightEdgePercent}%,
							transparent 100%)`
								: `linear-gradient(to bottom, black 0%, black ${fadeStart}%,
							transparent ${fadeStart}%, black ${fadeEnd}%)`,
						WebkitMaskImage:
							horizontalOffset > 0
								? `linear-gradient(to bottom, black 0%, black ${fadeStart}%,
							transparent ${fadeStart}%, black ${fadeEnd}%),
							linear-gradient(to right,
							transparent 0%,
							transparent ${leftEdgePercent}%,
							black ${horizontalFadeStart}%,
							black ${horizontalFadeEnd}%,
							transparent ${rightEdgePercent}%,
							transparent 100%)`
								: `linear-gradient(to bottom, black 0%, black ${fadeStart}%,
							transparent ${fadeStart}%, black ${fadeEnd}%)`,
						maskComposite: horizontalOffset > 0 ? 'intersect' : undefined,
						WebkitMaskComposite: horizontalOffset > 0 ? 'source-in' : undefined
					} as React.CSSProperties
				}
			/>

			{/* Audio elements */}
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<audio id="jx2026-bg-music" loop style={{ display: 'none' }}>
				<source src={BGMusic} type="audio/mpeg" />
			</audio>
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<audio id="jx2026-cel-music" style={{ display: 'none' }}>
				<source src={CelebrationMusic} type="audio/mpeg" />
			</audio>

			{/* Landing */}
			<LandingOverlay hidden={phase !== 'landing'}>
				<LandingTitle>Time to test your memory!</LandingTitle>
				<BeginButton onClick={handleBegin}>Begin</BeginButton>
			</LandingOverlay>

			{/* Map */}
			<MapContainer zoomedOut={phase === 'quiz'}>
				<LoveMap
					completedNodes={completedNodes}
					currentUnlocked={currentUnlocked}
					heartPosition={heartPosition}
					onNodeClick={handleNodeClick}
				/>
			</MapContainer>

			{/* Quiz */}
			<QuizOverlay visible={phase === 'quiz'}>
				{phase === 'quiz' && (
					<QuizScreen
						key={activeMilestone}
						milestone={milestones[activeMilestone]}
						onComplete={handleMilestoneComplete}
					/>
				)}
			</QuizOverlay>

			{/* Celebration */}
			<Celebration visible={phase === 'celebration'} />
		</PageWrapper>
	);
};

export default Jx2026;
