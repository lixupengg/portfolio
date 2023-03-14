import { styled, css } from '@stitches/react';

export const StyledMetricCardOverlay = styled('div', {
	position: 'absolute',
	top: 0,
	left: 0,
	background: 'rgba(255, 255, 255, 0.25)',
	backdropFilter: 'blur(5px)',
	width: '100%',
	height: '100%',
	boxShadow: '$small',
	borderRadius: '$small',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '$medium'
});

export const StyledMetricName = styled('div', {
	width: 'max-content',
	fontSize: '$subtitle24',
	fontWeight: '$semibold',
	borderRadius: '$small',
	color: '$primaryColor12',
	marginBottom: '$tiny',
});

export const DeleteButtonCss = css({
	position: 'absolute',
	top: '-$small',
	right: '-25px',
});

export const StyledContentOverlay = styled('div', {
	// Gradient background from opacity 1 to 0
	padding: '0 $small',
	color: '$primaryColor11',
	background: `linear-gradient(180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 1) 20%,
		rgba(255, 255, 255, 1) 100%)`,
	paddingTop: '10%',
	position: 'absolute',
	width: '100%',
	height: '45%',
	bottom: '0',
});