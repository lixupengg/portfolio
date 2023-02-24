import { styled, css } from '@stitches/react';

export const StyledMetricsList = styled('div', {
	paddingTop: '$small',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	alignItems: 'center',
	rowGap: '$small',
	columnGap: '$small',
});

export const StyledMetricCardOption = styled('div', {
	display: 'flex',
	transform: 'scale(0.8)',
	transformOrigin: 'top left',
	width: 'calc($cardWidth * 0.8)',
	height: 'calc($cardHeight * 0.8)',
});

export const StyledMetricCardOptionBorderWrapper = styled('div', {
	position: 'relative',
	cursor: 'pointer',
	userSelect: 'none',
	borderRadius: '$tiny',
	border: '3px solid transparent',
	variants: {
		lastSelected: {
			true: {
				border: '3px solid $primaryColor4',
			},
		}
	},
});

export const IconCss = css({
	position: 'absolute',
	right: '-$tiny',
	top: '-$tiny',
	fontSize: '30px',
	zIndex: 1,
	background: '$white',

	variants: {
		selected: {
			true: {
				color: '$primaryColor7',
			},
			false: {
				color: '$grey8',
			}
		}
	}
});