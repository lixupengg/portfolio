import { styled, css, keyframes } from '@stitches/react';

const animateBounceUpDown = keyframes({
	'0%': {
		transform: 'translateY(0px)'
	},
	'50%': {
		transform: 'translateY(5px)'
	},
	'100%': {
		transform: 'translateY(0px)'
	}
});

export const StyledHomePageWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center',

	h1: {
		position: 'absolute',
		opacity: 0.9,
		zIndex: 0,
		textAlign: 'right',
		color: '$primaryColor1',
		fontSize: '200px',
		top: '20%',

		span: {
			opacity: 0.8,
		}
	},

	'@media (max-width: 1024px)': {
		h1: {
			fontSize: '50px',
			opacity: 1,
			lineHeight: '0.5',
		}
	}
});

export const StyledBgImage = styled('img', {
	position: 'absolute',
	top: 0,
	objectFit: 'cover',
	objectPosition: 'bottom',
	zIndex: 0,
	height: '100%',
	maxWidth: '100%',
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

export const StyledDoorWrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	bottom: '15%',
	zIndex: 1,
	height: '40%',
	overflow: 'visible',
	animation: `${animateBounceUpDown} 3s linear infinite`,
	opacity: 1,
	'&:before': {
		transition: 'all 0.3s',
		position: 'absolute',
		marginBottom: '35px',
		zIndex: 0,
		content: '""',
		width: '300px',
		height: '350px',
		background: 'white',
		opacity: 0.5,
		filter: 'blur(50px)'
	},
	p: {
		fontFamily: 'Times New Roman',
		letterSpacing: '2px',
		transition: 'all 1.5s',
		marginTop: '-60%',
		marginLeft: '9px',
		zIndex: 1,
		fontWeight: '$bold',
		textAlign: 'center',
		color: 'black',
		fontSize: '$content18',
		opacity: 0
	},

	variants: {
		isDoorOpen: {
			true: {
				'&:before': {
					transition: 'all 1s',
					filter: 'blur(200px)',
					width: '125vw',
					height: '200vh',
					opacity: '1 !important',
					zIndex: 2
				}
			},
			false: {
				'&:hover': {
					opacity: 1,
					cursor: 'pointer',
					'&:before': {
						width: '500px',
						opacity: 0.5
					},
					p: {
						opacity: 1
					}
				}
			}
		}
	}
});

export const StyledDoor = styled('img', {
	animate: `${animateBounceUpDown} 2s infinite`,
	marginTop: '-20px',
	position: 'absolute',
	height: '100%',
	objectFit: 'contain'
});
