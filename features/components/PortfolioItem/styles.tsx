import { styled } from '@stitches/react';

export const StyledPortfolioItem = styled('div', {
	width: '450px',
	height: '450px',
	transition: '0.3s',
	position: 'relative',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '$small',
	border: '3px solid $black',

	'&:before': {
		content: '""',
		background: 'rgba(0, 0, 0, 0.9)',
		position: 'absolute',
		left: '30px',
		right: '30px',
		top: '30px',
		bottom: '30px',
		transition: 'all ease-in-out 0.3s',
		zIndex: '2',
		opacity: '0',
	},

	'&:hover': {
		'&:before': {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			opacity: '1',
		},

		'> div': {
			opacity: '1',

			'&:before': {
				top: '15px',
				left: '15px',
			},

			'&:after': {
				bottom: '15px',
				right: '15px',
			},
		},
	},

});

export const StyledBackroundImage = styled('img', {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
	top: '0',
	left: '0',
	background : '$white',
	zIndex: '-1',
});

export const StyledPortfolioInfo = styled('div', {
	opacity: '0',
	position: 'absolute',
	top: '0',
	left: '0',
	right: '0',
	bottom: '0',
	textAlign: 'left',
	zIndex: '3',
	transition: 'all ease-in-out 0.3s',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',
	padding: '$large',
	pointerEvents: 'none',

	'&:before': {
		display: 'block',
		content: "",
		width: '48px',
		height: '48px',
		position: 'absolute',
		top: '35px',
		left: '35px',
		borderTop: '3px solid #fff',
		borderLeft: '3px solid #fff',
		transition: 'all 0.5s ease 0s',
		zIndex: '9994',
	},

	'&:after': {
		display: 'block',
		content: '""',
		width: '48px',
		height: '48px',
		position: 'absolute',
		bottom: '35px',
		right: '35px',
		borderBottom: '3px solid #fff',
		borderRight: '3px solid #fff',
		transition: 'all 0.5s ease 0s',
		zIndex: '9994',
	},

	'> h6': {
		color: '$white',
		borderBottom: '1px solid $white',
		marginTop: '$medium',
		marginBottom: '$tiny',
	},

	'> h1': {
		fontSize: '$title46',
		marginBottom: '$tiny',
		'span': {
			color: '$grey8',
			fontSize: '$title54',
		}
	}
});

export const StyledDisplayImage = styled('img', {
	objectFit: 'contain',
	width: '60%',

	variants: {
		'addBackground': {
			true: {
				background: '$grey7',
				border: '2px solid $grey12',
				borderRadius: '$medium',
			},
		}
	}
});