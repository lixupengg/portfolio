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
	height: 'calc(100vh - 36px)',
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
	height: '34%',
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
	background: 'url(./animeLines.svg)',
	backgroundSize: 'cover',
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
		color: '$black'
	}
});

export const StyledBookDescription = styled('div', {
	border: '2px solid $black',
	width: '100%',
	marginTop: '$small',
	height: 'calc(66% - 18px)',
	position: 'relative',
	overflow: 'hidden',

	p: {
		color: '$black'
	}
});

export const StyledBookDescriptionContent = styled('div', {
	padding: '$medium',
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	overflowY: 'auto',
	'&::-webkit-scrollbar': {
		width: '6px'
	}
});

export const StyledBookDescriptionImg = styled('img', {
	opacity: 0.1,
	overflow: 'hidden',
	position: 'absolute',
	height: '100%',
	width: '50%',
	left: '-5%',
	bottom: '-15%',
	objectFit: 'contain'
});

export const StyledMangaPatternImg = styled('img', {
	opacity: 0.5,
	zIndex: 0,
	overflow: 'hidden',
	objectFit: 'contain',
	width: '20%',
	right: '5%',
	top: '5%',
	position: 'absolute'
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
