import { styled, css, keyframes } from '@stitches/react';
import Background from '../../assets/jx2025/background.jpg';
// yellow (pri) = #ECEE81
// teal (sec) = #8DDFCB
// blue (ter) = #82A0D8
// purple (qua) = #EDB7ED

const animationDistance = '400px';

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
		transform: `translate(-${animationDistance}, 0)`
	},
	'50%': {
		transform: `translate(0, 0)`
	},
	'100%': {
		transform: `translate(${animationDistance}, 0)`
	}
	// '50%': {
	// 	transform: `translate(${animationDistance}, -${animationDistance})`
	// },
	// '75%': {
	// 	transform: `translate(0, -${animationDistance})`
	// },
	// '100%': {
	// 	transform: `translate(0, 0)`
	// }
});

// Containers
export const StyledHomePageWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'flex-start',
	background: `url(${Background}) no-repeat center center fixed`,
	backgroundSize: 'cover',
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

export const StyledPictureGame = styled('div', {
	zIndex: 1,
	width: '40vh',
	height: '40vh',
	marginTop: '$small',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: '10px'
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
	// make animation loop
	animation: `${animateButtonTranslatesInACircle} 3s infinite linear`
});

// Images

const animatePictureCarouselHorizontally = keyframes({
	'0%': {
		transform: 'translate(0, 0)'
	},
	'100%': {
		transform: 'translate(0, 100%)'
	}
});

export const StyledPhotoStrip = styled('div', {
	zIndex: 1,
	position: 'absolute',
	top: 0,
	left: 0,
	width: '150px',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'none',
	justifyContent: 'flexStart',
	alignItems: 'center',
	gap: '10px',
	padding: '10px',
	background: 'black'
});

export const StyledPhotoStripRight = styled('div', {
	zIndex: 1,
	position: 'absolute',
	top: 0,
	right: 0,
	width: '150px',
	height: '100%',
	display: 'flex',
	flexDirection: 'column-reverse',
	flexWrap: 'none',
	justifyContent: 'flexStart',
	alignItems: 'center',
	gap: '10px',
	padding: '10px',
	background: 'black'
});

export const StyledPhoto = styled('img', {
	objectFit: 'cover',
	width: '100%',
	height: '20%',
	border: '5px solid white',
	background: 'white'
});
