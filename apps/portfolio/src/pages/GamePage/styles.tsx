import { styled, css, keyframes } from '@stitches/react';

export const LevelUpButtonCss = css({
	position: 'absolute',
	bottom: '50px',
	right: '400px',
	height: '100px',
	fontSize: '40px !important'
});

export const FightButtonCss = css({
	position: 'absolute',
	bottom: '50px',
	right: '50px',
	height: '100px',
	fontSize: '40px !important'
});

export const StyledLevelInfo = styled('h1', {
	position: 'absolute',
	top: '50px',
	left: '50px',
	color: '$white',
	fontSize: '50px'
});
