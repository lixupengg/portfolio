import { styled, css, keyframes } from '@stitches/react';

export const StyledMetricCardList = styled('div', {
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
	columnGap: '$small',
	rowGap: '$small',

	variants: {
		'isCompact': {
			true: {
				// Scale to 0.5
				transform: 'scale(0.8)',
				transformOrigin: 'top left',
				width: '120%',
			}

		}
	}
});

export const rotateAnimation = keyframes({
	'0%': {
		backgroundPosition: 'left top, right bottom, left bottom, right top',
	},
	'100%': {
		backgroundPosition: 'left 15px top, right 15px bottom , left bottom 15px , right top 15px',
	}
});

export const IsOverCss = css({
	'> div' : {
		'> div': {
			background: '$primaryColor1',
			border: 'none',
			/* Animate the border rotating, copy pasta-ed */
			backgroundImage: `linear-gradient(90deg, $primaryColor7 50%, transparent 50%),
				 linear-gradient(90deg, $primaryColor7 50%, transparent 50%),
				 linear-gradient(0deg, $primaryColor7 50%, transparent 50%), 
				 linear-gradient(0deg, $primaryColor7 50%, transparent 50%)`,
			backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
			backgroundSize: '15px 2px, 15px 2px, 2px 15px, 2px 15px',
			backgroundPosition: 'left top, right bottom, left bottom, right top',
			animation: `${rotateAnimation} 1s infinite linear`,
			'& > *': {
				opacity: 0,
			},
		}
	},
});