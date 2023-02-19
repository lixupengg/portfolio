import { styled, css } from '@stitches/react';

export const StyledMetricCardOverlay = styled('div', {
	position: 'absolute',
	top: 0,
	left: 0,
	background: 'rgba(255, 255, 255, 0.25)',
	backdropFilter: 'blur(10px)',
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
	padding: '$veryTiny $small',
	width: 'max-content',
	fontSize: '$content16',
	fontWeight: '$medium',
	borderRadius: '$small',
	color: '$primaryColor12',
	border: '1px solid $primaryColor12',
	marginBottom: '$tiny',
});

export const DeleteButtonCss = css({
	position: 'absolute',
	top: '-$small',
	right: '-$small',
	color: '$grey9 !important',
});

export const StyledContentOverlay = styled('div', {
	// Gradient background from opacity 1 to 0
	padding: '0 $small',
	background: `linear-gradient(180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 1) 20%,
		rgba(255, 255, 255, 1) 100%)`,
	paddingTop: '10%',
	position: 'absolute',
	width: '100%',
	height: '50%',
	bottom: '0',
});