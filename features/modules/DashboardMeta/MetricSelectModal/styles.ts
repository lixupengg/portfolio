import { styled, css } from '@stitches/react';

export const StyledMetricsList = styled('div', {
	padding: '$small $tiny',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	alignItems: 'center',
	rowGap: '$small',
	columnGap: '$small',
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

export const SectionCss = css({
	// If even child, red bg
	'&:nth-child(even)': {
		'& > div': {
			// Access second div in section
			'&:nth-child(2)': {
				background: '$primaryColor2'
			}
		}
	}
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