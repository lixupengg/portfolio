import React, { useState } from 'react';
import { NODE_POSITIONS, SVG_PATH, SVG_HEIGHT, milestones } from './data';
import { pulse } from './styles';

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
				height: 'auto'
			}}
		>
			<defs>
				{/* Radial glow gradient for hover effect */}
				<radialGradient id="light-glow" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#FFFDE7" stopOpacity="0.9" />
					<stop offset="50%" stopColor="#FFD54F" stopOpacity="0.5" />
					<stop offset="100%" stopColor="#FFD54F" stopOpacity="0" />
				</radialGradient>

				{/* Circular clip paths and image patterns for each node */}
				{NODE_POSITIONS.map((pos, i) => (
					<React.Fragment key={i}>
						<clipPath id={`node-clip-${i}`}>
							<circle cx={pos.x} cy={toSvgY(pos.y)} r={pos.size.radius} />
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
				const showGlow = isHovered && unlocked;

				return (
					<g
						key={i}
						onClick={() =>
							unlocked && !completed ? onNodeClick(i) : undefined
						}
						onMouseEnter={() => setHoveredNode(i)}
						onMouseLeave={() => setHoveredNode(null)}
						style={{ cursor: unlocked && !completed ? 'pointer' : 'default' }}
					>
						{/* Hover glow - behind the image */}
						<circle
							cx={pos.x}
							cy={toSvgY(pos.y)}
							r={pos.size.radius + 20}
							fill="url(#light-glow)"
							style={{
								opacity: showGlow ? 1 : 0,
								transform: showGlow ? 'scale(1.15)' : 'scale(0.9)',
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

						{/* Node circle with image background */}
						<circle
							cx={pos.x}
							cy={toSvgY(pos.y)}
							r={pos.size.radius}
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

						{/* Label */}
						<text
							x={pos.x}
							y={toSvgY(pos.y) + pos.size.labelOffset}
							textAnchor="middle"
							fontSize={pos.size.labelSize}
							fill={unlocked ? '#FFA000' : '#aaa'}
						>
							{milestones[i].title}
						</text>
					</g>
				);
			})}

			{/* Heart traveler */}
			<g>
				<text
					fontSize="22"
					style={
						{
							offsetPath: `path("${SVG_PATH}")`,
							offsetDistance: `${(heartPosition / 4) * 100}%`,
							transition: 'offset-distance 1.5s ease-in-out',
							// @ts-ignore
							motionPath: `path("${SVG_PATH}")`,
							motionDistance: `${(heartPosition / 4) * 100}%`
						} as any
					}
				>
					💕
				</text>
				{/* Fallback: position heart at node coordinates */}
				{!CSS.supports?.('offset-path', `path("M 0 0")`) && (
					<text
						x={NODE_POSITIONS[heartPosition].x}
						y={toSvgY(NODE_POSITIONS[heartPosition].y) - 34}
						textAnchor="middle"
						fontSize="22"
						style={{ transition: 'x 1.5s ease-in-out, y 1.5s ease-in-out' }}
					>
						💕
					</text>
				)}
			</g>
		</svg>
	);
};

export default LoveMap;
