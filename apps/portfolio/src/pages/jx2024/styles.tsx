import { styled, css, keyframes } from '@stitches/react';
// yellow (pri) = #ECEE81
// teal (sec) = #8DDFCB
// blue (ter) = #82A0D8
// purple (qua) = #EDB7ED

const animationDistance = '150px';

const animationSlow = keyframes({
	'0%': {
		transform: 'translate(0, 0)'
	},
	'33%': {
		transform: `translate(-500px, -500px)`
	},
	'66%': {
		transform: `translate(200px, -550px)`
	},
	'100%': {
		transform: 'translate(0, 0)'
	}
});

const animateBounceUpDown = keyframes({
	'0%': {
		transform: 'translate(0, 0)'
	},
	'33%': {
		transform: `translate(-500px, -500px) rotate(90deg)`
	},
	'66%': {
		transform: `translate(200px, -550px) rotate(270deg)`
	},
	'100%': {
		transform: 'translate(0, 0) rotate(360deg)'
	}
});

const animateButtonTranslatesInACircle = keyframes({
	'0%': {
		transform: `translate(0, 0)`
	},
	'25%': {
		transform: `translate(${animationDistance}, 0)`
	},
	'50%': {
		transform: `translate(${animationDistance}, -${animationDistance})`
	},
	'75%': {
		transform: `translate(0, -${animationDistance})`
	},
	'100%': {
		transform: `translate(0, 0)`
	}
});

// Containers
export const StyledHomePageWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'flex-start',
	background: '#ECEE81',
	color: '$primaryColor12',
	position: 'relative',
	overflow: 'hidden',

	p: {
		marginTop: '$small',
		fontSize: '24px',
		color: '$primaryColor12',
		maxWidth: '600px'
	},

	'@media (max-width: 1024px)': {}
});

export const StyledRow = styled('div', {
	zIndex: 1,
	marginTop: '$small',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',

	button: {
		marginLeft: '$tiny'
	}
});

// Buttons
export const YesButton = styled('button', {
	background: '#8DDFCB',
	padding: '18px',
	borderRadius: '10px',
	cursor: 'pointer'
});

export const YesButtonEasyClassName = css({
	background: '#8DDFCB',
	padding: '28px',
	borderRadius: '10px',
	cursor: 'pointer',
	fontSize: '32px'
});

export const YesButtonMediumClassName = css({
	background: '#8DDFCB',
	padding: '28px',
	borderRadius: '10px',
	cursor: 'pointer',
	fontSize: '64px'
});

export const YesButtonHardClassName = css({
	background: '#8DDFCB',
	padding: '28px',
	borderRadius: '10px',
	cursor: 'pointer',
	fontSize: '70px',
	border: '10px solid red'
});

export const YesButtonImpossibleClassName = css({
	background: '#8DDFCB',
	padding: '28px',
	borderRadius: '10px',
	cursor: 'pointer',
	fontSize: '100px'
});

export const NoButton = styled('button', {
	background: '#EDB7ED',
	padding: '18px',
	borderRadius: '10px',
	cursor: 'pointer'
});

export const EscapedButtonEasyClassName = css({
	animation: `${animationSlow} 10s infinite`
});

export const EscapedButtonMediumClassName = css({
	animation: `${animateBounceUpDown} 10s infinite`
});

export const EscapedButtonHardClassName = css({
	animation: `${animateButtonTranslatesInACircle} 0.75s infinite`
});

// Images
const dogSize = '300px';
export const StyledDogBot1 = styled('img', {
	objectFit: 'contain',
	width: dogSize,
	height: dogSize,
	position: 'absolute',
	left: '-50px',
	bottom: '-20px',
	rotate: '10deg'
});

export const StyledDogBot2 = styled('img', {
	width: dogSize,
	height: dogSize,
	position: 'absolute',
	right: '-50px',
	bottom: '-10px',
	rotate: '-18deg'
});

export const StyledDogBot3 = styled('img', {
	width: dogSize,
	height: dogSize,
	position: 'absolute',
	left: '-30px',
	bottom: '50vh',
	rotate: '95deg'
});

export const StyledDogBot4 = styled('img', {
	width: dogSize,
	height: dogSize,
	position: 'absolute',
	right: '-50px',
	top: '-20px',
	rotate: '188deg'
});

export const StyledDogBot5 = styled('img', {
	width: dogSize,
	height: dogSize,
	position: 'absolute',
	left: '-50px',
	top: '-110px',
	rotate: '160deg'
});
