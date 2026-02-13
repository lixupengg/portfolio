import React, { useState } from 'react';
import { NODE_POSITIONS, SVG_PATH, SVG_HEIGHT, milestones } from './data';
import { pulse, wobble } from './styles';
import travellerSvg from '../../assets/jx2026/traveller.svg';

type Props = {
	completedNodes: Set<number>;
	currentUnlocked: number;
	heartPosition: number; // index of node the heart is at (0-based)
	onNodeClick: (milestoneIndex: number) => void;
};

const LoveMap: React.FC<Props> = ({
	completedNodes,
	currentUnlocked,
	heartPosition,
	onNodeClick
}) => {
	const [hoveredNode, setHoveredNode] = useState<number | null>(null);
	const viewBox = '0 0 1200 500';
	const toSvgY = (y: number) => SVG_HEIGHT - y;

	return (
		<svg
			viewBox={viewBox}
			style={{
				position: 'absolute',
				bottom: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				width: '1200px',
				height: '800px'
			}}
		>
			<defs>
				{/* Radial glow gradient for hover effect */}
				<radialGradient id="light-glow" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#FFFDE7" stopOpacity="0.9" />
					<stop offset="50%" stopColor="#FFD54F" stopOpacity="0.5" />
					<stop offset="100%" stopColor="#FFD54F" stopOpacity="0" />
				</radialGradient>

				{/* Blur filter for edge fade effect */}
				<filter id="edge-blur" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur in="SourceGraphic" stdDeviation="8" />
				</filter>

				{/* Glass gradient for label background */}
				<linearGradient id="glass-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
					<stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
				</linearGradient>

				{/* Mask for each node */}
				{NODE_POSITIONS.map((pos, i) => (
					<mask id={`node-fade-mask-${i}`} key={`mask-${i}`}>
						<rect
							x={pos.size.radius * 0.1}
							y={pos.size.radius * 0.1}
							width={pos.size.radius * 1.8}
							height={pos.size.radius * 1.8}
							rx={pos.size.radius * 0.2}
							ry={pos.size.radius * 0.2}
							fill="white"
							filter="url(#edge-blur)"
						/>
					</mask>
				))}

				{/* Rounded rectangle clip paths and image patterns for each node */}
				{NODE_POSITIONS.map((pos, i) => (
					<React.Fragment key={i}>
						<clipPath id={`node-clip-${i}`}>
							<rect
								x={pos.x - pos.size.radius}
								y={toSvgY(pos.y) - pos.size.radius}
								width={pos.size.radius * 2}
								height={pos.size.radius * 2}
								rx={pos.size.radius * 0.2}
								ry={pos.size.radius * 0.2}
							/>
						</clipPath>
						{pos.image && (
							<pattern
								id={`node-pattern-${i}`}
								patternUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<image
									href={pos.image}
									x="0"
									y="0"
									width={pos.size.radius * 2}
									height={pos.size.radius * 2}
									preserveAspectRatio="xMidYMid slice"
									mask={`url(#node-fade-mask-${i})`}
								/>
							</pattern>
						)}
					</React.Fragment>
				))}
			</defs>

			{/* Dotted trail */}
			<path
				d={SVG_PATH}
				fill="none"
				stroke="#FFE082"
				strokeWidth="6"
				strokeDasharray="12 12"
			/>
			{/* Filled trail up to completed */}
			{heartPosition > 0 && (
				<path
					d={SVG_PATH}
					fill="none"
					stroke="#FFD54F"
					strokeWidth="6"
					strokeDasharray={`${(heartPosition / 4) * 100}% 200%`}
				/>
			)}

			{/* Nodes */}
			{NODE_POSITIONS.map((pos, i) => {
				const completed = completedNodes.has(i);
				const unlocked = i <= currentUnlocked;
				const isCurrent = i === currentUnlocked && !completed;
				const isHovered = hoveredNode === i;
				const isClickable = unlocked && !completed;

				return (
					<g
						key={i}
						onClick={() => (isClickable ? onNodeClick(i) : undefined)}
						onMouseEnter={() => setHoveredNode(i)}
						onMouseLeave={() => setHoveredNode(null)}
						style={{ cursor: isClickable ? 'pointer' : 'default' }}
					>
						{/* Glow - subtle when clickable, intensified on hover */}
						<circle
							cx={pos.x}
							cy={toSvgY(pos.y)}
							r={pos.size.radius + 25}
							fill="url(#light-glow)"
							style={{
								opacity: isClickable ? (isHovered ? 1 : 0.7) : 0,
								transform: isClickable
									? isHovered
										? 'scale(1.2)'
										: 'scale(1.05)'
									: 'scale(0.9)',
								transformOrigin: 'center',
								transition: 'opacity 0.3s ease, transform 0.3s ease'
							}}
						/>

						{/* Glow ring for current */}
						{isCurrent && (
							<circle
								cx={pos.x}
								cy={toSvgY(pos.y)}
								r={pos.size.glowRadius}
								fill="none"
								stroke="#FFD54F"
								strokeWidth="0"
								opacity="0.5"
								style={{ animation: `${pulse} 2s ease-in-out infinite` }}
							/>
						)}

						{/* Node rounded rectangle with image background */}
						<rect
							x={pos.x - pos.size.radius}
							y={toSvgY(pos.y) - pos.size.radius}
							width={pos.size.radius * 2}
							height={pos.size.radius * 2}
							rx={pos.size.radius * 0.2}
							ry={pos.size.radius * 0.2}
							fill={
								pos.image && unlocked
									? `url(#node-pattern-${i})`
									: completed
									? '#FFD54F'
									: unlocked
									? '#FFFDE7'
									: '#ccc'
							}
							stroke={completed ? '#FFA000' : unlocked ? '#FFD54F' : '#aaa'}
							strokeWidth="0"
							style={{
								filter: !unlocked
									? 'grayscale(100%)'
									: isHovered
									? 'brightness(1.1)'
									: 'none',
								transition: 'filter 0.3s ease'
							}}
						/>

						{/* Heart pin icon - only show if no image or locked */}
						{(!pos.image || !unlocked) && (
							<text
								x={pos.x}
								y={toSvgY(pos.y) + 1}
								textAnchor="middle"
								dominantBaseline="central"
								fontSize={pos.size.iconSize}
								style={{ pointerEvents: 'none' }}
							>
								{completed ? '💗' : unlocked ? '📍' : '🔒'}
							</text>
						)}

						{/* Label with glass background */}
						{(() => {
							const { title } = milestones[i];
							const textWidth = title.length * pos.size.labelSize * 0.6;
							const padding = 16;
							const rectWidth = textWidth + padding;
							return (
								<g>
									<rect
										x={pos.x - rectWidth / 2}
										y={toSvgY(pos.y) + pos.size.radius + 8}
										width={rectWidth}
										height={24}
										rx={12}
										ry={12}
										fill="url(#glass-gradient)"
									/>
									<text
										x={pos.x}
										y={toSvgY(pos.y) + pos.size.radius + 20}
										textAnchor="middle"
										dominantBaseline="middle"
										fontSize={pos.size.labelSize}
										fill="white"
										fontWeight="bold"
									>
										{title}
									</text>
								</g>
							);
						})()}
					</g>
				);
			})}

			{/* Heart traveler */}
			<g
				style={
					{
						offsetPath: `path("${SVG_PATH}")`,
						offsetDistance: `${(heartPosition / 4) * 100}%`,
						offsetRotate: '0deg',
						transition: 'offset-distance 1.5s ease-in-out',
						pointerEvents: 'none',
						// @ts-ignore
						motionPath: `path("${SVG_PATH}")`,
						motionDistance: `${(heartPosition / 4) * 100}%`
					} as any
				}
			>
				<image
					href={travellerSvg}
					width="100"
					height="100"
					x={NODE_POSITIONS[heartPosition].travelerOffset.x}
					y={NODE_POSITIONS[heartPosition].travelerOffset.y}
					style={{
						animation: `${wobble} 0.3s ease-in-out infinite`
					}}
				/>
				{/* Fallback: position heart at node coordinates */}
				{!CSS.supports?.('offset-path', `path("M 0 0")`) && (
					<image
						href={travellerSvg}
						width="40"
						height="40"
						x={NODE_POSITIONS[heartPosition].x - 20}
						y={toSvgY(NODE_POSITIONS[heartPosition].y) - 54}
						style={{ transition: 'x 1.5s ease-in-out, y 1.5s ease-in-out' }}
					/>
				)}
			</g>
		</svg>
	);
};

export default LoveMap;
