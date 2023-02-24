import { styled, keyframes, css } from '@stitches/react';

const shakeAnimation = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'25%': { transform: 'rotate(0.5deg)' },
	'50%': { transform: 'rotate(0deg)' },
	'75%': { transform: 'rotate(-0.5deg)' },
	'100%': { transform: 'rotate(0deg)' },
});

const shakeAnimation2 = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'25%': { transform: 'rotate(-0.5deg)' },
	'50%': { transform: 'rotate(0deg)' },
	'75%': { transform: 'rotate(0.5deg)' },
	'100%': { transform: 'rotate(0deg)' },
});

export const StyledMetricCardWrapper = styled('div', {
	// Transition width
	position: 'relative',
	transition: '0.3s ease-in-out',
	minWidth: '300px',
	variants: {
		'viewMode': {
			'DEFAULT': {
				width: '$cardWidth',
				height: '$cardHeight',
			},
			'CHART': {
				width: '$cardWidth',
				height: '$cardHeight',
			},
			'CARD_CHART': {
				height: '$cardHeight',
				width: '$bigCardWidth' // To compensate for one col gap between 2 300px cards
			},
		},

		'isEditing': {
			true: {
				width: '$cardWidth !important',
				transition: 'width 0.3s ease-in-out',
			}
		}
	}
});

export const StyledMetricCard = styled('div', {
	background: 'white',
	border: '1px dashed $grey7',
	width: '100%',
	height: '100%',
	boxShadow: '$small',
	borderRadius: '$tiny',
	display: 'flex',
	flexDirection: 'column',
	padding: '$small',
	// overflow: 'hidden',

	variants: {
		isEditing: {
			true: {
				cursor: 'grab',
				userSelect: 'none',
				// border: '2px dashed $grey9',
				animation: `${shakeAnimation} 0.6s ease-in-out infinite`,
				transformOrigin: '30% 5%',
				'nth-child(2n)': {
					transformOrigin: '50% 10%',
					animation: `${shakeAnimation2} 0.6s ease-in-out infinite`,
					animationDirection: 'alternate',
				}
			}
		}
	}
});

export const StyledDragOverlay = styled('div', {
	position: 'absolute',
	zIndex: 2,
	width: '100%',
	height: '100%',
	padding: '$small',
	background: 'red',
	opacity: 0.5,
	pointerEvents: 'none',
});

export const StyledMetricName = styled('div', {
	fontSize: '$content16',
	fontWeight: '$bold',
	color: '$primaryColor11',
	display: 'flex',
	justifyContent: 'space-between',
	// background: '$primaryColor8',
});

export const StyledRow = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
});

export const StyledColumn = styled('div', {
	minWidth: '0',
	width: '30%',
	height: '100%'
});

export const StyledLineChartWrapper = styled('div', {
	width: '100%',
	height: '100%',
});