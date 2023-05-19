import { styled, css, keyframes } from '@stitches/react';

export const StyledExperiencePageWrapper = styled('div', {
	background: '$primaryColor3',
	display: 'flex'
});

export const StyledExperiencesInfo = styled('div', {
	marginLeft: '$large',
	width: '50%',
	minHeight: '100vh',
	padding: '$large',
	marginTop: '10vh',

	'@media (max-width: 1024px)': {
		width: 'calc(100% - 50px)',
		paddingLeft: '0'
	}
});

export const StyledExperience = styled('div', {
	position: 'relative',
	marginBottom: '30vh',
	paddingLeft: '0',
	width: '100%',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	overflow: 'hidden',
	textOverflow: 'ellipsis',

	h2: {
		textTransform: 'uppercase',
		letterSpacing: '4px',
		lineHeight: '1'
	},

	p: {
		color: '$primaryColor12'
	},

	'@media (max-width: 1525px)': {
		h2: {
			fontSize: '$title46'
		}
	},

	'@media (max-width: 1024px)': {
		h2: {
			fontSize: '22px'
		}
	}
});

export const StyledExperienceLocationImg = styled('img', {
	position: 'absolute',
	top: '-25%',
	marginLeft: 'auto',
	height: '150%',
	objectFit: 'contain',
	width: '100%',
	zIndex: 0,
	opacity: 0.1,
	pointerEvents: 'none'
});

export const StyledNav = styled('div', {
	height: '100%',
	position: 'fixed',
	top: '0',
	left: '$large',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',

	'@media (max-width: 1024px)': {
		left: '$small'
	}
});

export const StyledNavLine = styled('div', {
	width: '4px',
	height: '10%',
	marginBottom: '$small',
	background: '$grey8',
	cursor: 'pointer',

	variants: {
		active: {
			true: {
				background: '$systemRed'
			}
		}
	}
});

export const StyledRole = styled('div', {
	marginTop: '$small',
	marginBottom: '$small',
	background: `url(${`${window.location.origin}/highlighter.svg`})`,
	backgroundSize: 'cover',
	width: 'max-content',
	maxWidth: '100%',
	padding: '$tiny $small',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',

	p: {
		color: '$black',
		fontWeight: '$bold'
	}
});

export const StyledLocation = styled('div', {
	marginTop: '$small',
	background: 'rgba(0,0,0,0.6)',
	p: {
		paddingLeft: '$small',
		color: '$white !important',
		fontWeight: '$bold'
	},

	'@media (max-width: 1024px)': {
		p: {
			fontSize: '$content12',
			paddingLeft: '$tiny'
		}
	}
});

export const StyledImageWrapper = styled('div', {
	width: '50%',
	height: '100%',
	position: 'fixed',
	zIndex: '0',
	bottom: '0px',
	right: '-150px',

	'@media (max-width: 1024px)': {
		display: 'none'
	}
});

export const StyledImage = styled('img', {
	height: '100%',
	width: '100%',
	bottom: '0px',
	right: '0px',
	objectFit: 'cover'
});

export const StyledTag = styled('span', {
	color: '$grey8',
	fontWeight: '$extrabold'
});
