import { styled, css, keyframes } from '@stitches/react';

export const StyledExperiencePageWrapper = styled('div', {
	background: '$primaryColor3',
	display: 'flex',
	flexDirection: 'column',
	padding: '$small',
	width: '100%',
	minHeight: '100%',
	position: 'relative'
});

export const StyledBookSectionTitle = styled('div', {
	width: 'calc(60% - 18px)',
	position: 'relative',
	height: '200px',
	background: '$black',
	marginBottom: '$small',
	border: '2px solid $black',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',

	h2: {
		lineHeight: '1',
		color: '$white'
	},

	'@media (max-width: 1024px)': {
		width: 'calc(100%)',

		h2: {
			fontSize: '$subtitle24'
		}
	}
});

export const StyledTitlePatternImg = styled('img', {
	position: 'absolute',
	right: '0px',
	objectFit: 'contain',
	height: '100%'
});
export const StyledLeftPanel = styled('div', {
	width: 'calc(60% - 18px)',
	minHeight: 'calc(100vh - 36px)',
	height: 'max-content',
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '$small',

	// even children
	'&:nth-child(even)': {
		'> div': {
			flexDirection: 'row-reverse'
		}
	},

	'@media (max-width: 1024px)': {
		width: 'calc(100%)'
	}
});

export const StyledRow = styled('div', {
	height: 'calc(33vh - 30px)',
	display: 'flex',
	justifyContent: 'space-between'
});

export const StyledBookPanel = styled('div', {
	border: '2px solid $black',
	width: '30%',
	height: '100%',
	background: '$black',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
});

export const StyledBookImg = styled('img', {
	width: '80%',
	height: '90%',
	filter: 'grayscale(100%) invert(100%)',
	objectFit: 'contain'
});

export const StyledBookTitle = styled('div', {
	border: '2px solid $black',
	width: 'calc(70% - 18px)',
	background: `url(${`${window.location.origin}/animeLines.svg`})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	height: '100%',

	h2: {
		width: '70%',
		lineHeight: '1',
		fontSize: '$subtitle24',
		textAlign: 'center'
	},

	p: {
		marginTop: '$small',
		color: '$black',
		textAlign: 'center'
	}
});

export const StyledBookDescription = styled('div', {
	border: '2px solid $black',
	width: '100%',
	marginTop: '$small',
	minHeight: 'calc(66vh - 18px)',
	height: 'max-content',
	position: 'relative',
	overflow: 'hidden',
	display: 'flex',
	alignItems: 'center',

	p: {
		fontWeight: '500',
		color: '$black',
		marginBottom: '$tiny',

		'&:after': {
			content: '""',
			display: 'block',
			width: '30%',
			marginTop: '$tiny',
			borderTop: '1px dashed $black'
		}
	}
});

export const StyledBookDescriptionContent = styled('div', {
	padding: '$medium',
	width: '100%',
	minHeight: '100%',
	height: 'max-content',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
});

export const StyledBookDescriptionImg = styled('img', {
	opacity: 0.1,
	overflow: 'hidden',
	position: 'absolute',
	height: '100%',
	width: '50%',
	left: '-5%',
	bottom: '-15%',
	objectFit: 'contain',
	objectPosition: 'bottom',
	pointerEvents: 'none'
});

export const StyledMangaPatternImg = styled('img', {
	opacity: 0.2,
	zIndex: 0,
	overflow: 'hidden',
	objectFit: 'contain',
	width: '20%',
	right: '5%',
	top: '5%',
	position: 'absolute',
	pointerEvents: 'none'
});

export const StyledRightPanel = styled('div', {
	width: 'calc(40% - 18px)',
	height: 'calc(100% - (36px))',
	bottom: '$small',
	display: 'flex',
	border: '2px solid $black',
	position: 'fixed',
	right: '$small',
	zIndex: '0',

	'@media (max-width: 1024px)': {
		display: 'none'
	}
});

export const StyledImage = styled('img', {
	width: '100%',
	objectFit: 'contain'
});

export const StyledTag = styled('span', {
	color: '$grey8',
	fontWeight: '$extrabold'
});
