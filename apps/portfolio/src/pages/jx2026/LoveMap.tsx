import React from 'react';
import { NODE_POSITIONS, SVG_PATH, milestones } from './data';
import { pulse } from './styles';

type Props = {
	completedNodes: Set<number>;
	currentUnlocked: number;
	heartPosition: number; // index of node the heart is at (0-based)
	onNodeClick: (milestoneIndex: number) => void;
};

const LoveMap: React.FC<Props> = ({ completedNodes, currentUnlocked, heartPosition, onNodeClick }) => {
	const viewBox = '0 0 920 500';

	return (
		<svg viewBox={viewBox} style={{ width: '100%', maxWidth: '920px', height: 'auto' }}>
			{/* Dotted trail */}
			<path
				d={SVG_PATH}
				fill="none"
				stroke="#E8C4C4"
				strokeWidth="3"
				strokeDasharray="8 8"
			/>
			{/* Filled trail up to completed */}
			{heartPosition > 0 && (
				<path
					d={SVG_PATH}
					fill="none"
					stroke="#F4A0A0"
					strokeWidth="3"
					strokeDasharray={`${(heartPosition / 4) * 100}% 200%`}
				/>
			)}

			{/* Nodes */}
			{NODE_POSITIONS.map((pos, i) => {
				const completed = completedNodes.has(i);
				const unlocked = i <= currentUnlocked;
				const isCurrent = i === currentUnlocked && !completed;

				return (
					<g
						key={i}
						onClick={() => unlocked && !completed ? onNodeClick(i) : undefined}
						style={{ cursor: unlocked && !completed ? 'pointer' : 'default' }}
					>
						{/* Glow ring for current */}
						{isCurrent && (
							<circle
								cx={pos.x}
								cy={pos.y}
								r="32"
								fill="none"
								stroke="#F4A0A0"
								strokeWidth="2"
								opacity="0.5"
								style={{ animation: `${pulse} 2s ease-in-out infinite` }}
							/>
						)}
						{/* Node circle */}
						<circle
							cx={pos.x}
							cy={pos.y}
							r="24"
							fill={completed ? '#F4A0A0' : unlocked ? '#FFF8F0' : '#ccc'}
							stroke={completed ? '#D4838A' : unlocked ? '#F4A0A0' : '#aaa'}
							strokeWidth="2.5"
						/>
						{/* Heart pin icon */}
						<text
							x={pos.x}
							y={pos.y + 1}
							textAnchor="middle"
							dominantBaseline="central"
							fontSize="18"
							style={{ pointerEvents: 'none' }}
						>
							{completed ? '💗' : unlocked ? '📍' : '🔒'}
						</text>
						{/* Label */}
						<text
							x={pos.x}
							y={pos.y + 46}
							textAnchor="middle"
							fontSize="13"
							fill={unlocked ? '#D4838A' : '#aaa'}
							fontFamily="Georgia, serif"
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
					style={{
						offsetPath: `path("${SVG_PATH}")`,
						offsetDistance: `${(heartPosition / 4) * 100}%`,
						transition: 'offset-distance 1.5s ease-in-out',
						// @ts-ignore
						motionPath: `path("${SVG_PATH}")`,
						motionDistance: `${(heartPosition / 4) * 100}%`
					} as any}
				>
					💕
				</text>
				{/* Fallback: position heart at node coordinates */}
				{!CSS.supports?.('offset-path', `path("M 0 0")`) && (
					<text
						x={NODE_POSITIONS[heartPosition].x}
						y={NODE_POSITIONS[heartPosition].y - 34}
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
