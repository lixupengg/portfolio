import { styled, keyframes } from '@stitches/react';

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

export const StyledMetricCard = styled('div', {
	border: '2px dashed $grey9',
	width: '100%',
	height: '100%',
	boxShadow: '$small',
	borderRadius: '$large',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '$medium',
	animation: `${shakeAnimation} 0.6s ease-in-out infinite`,
	transformOrigin: '30% 5%',

	'nth-child(2n)': {
		transformOrigin: '50% 10%',
		animation: `${shakeAnimation2} 0.6s ease-in-out infinite`,
		animationDirection: 'alternate',
	}

});

export const StyledMetricName = styled('div', {
	fontSize: '$subtitle32',
	fontWeight: '$light',
	color: '$primaryColor12',
	textTransform: 'uppercase',
	// Italic
	fontStyle: 'italic',
});

export const StyledRow = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
});

export const StyledColumn = styled('div', {
	width: '30%',
	height: '100%'
});