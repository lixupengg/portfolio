import { styled } from '@stitches/react';

export const StyledIcon = styled('span', {
	background: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	variants: {
		size: {
			tiny: {
				fontSize: '$content14',
			},
			small: {
				fontSize: '$content18',
			},

			medium: {
				fontSize: '$subtitle24',
			},

			large: {
				fontSize: '$subtitle40',
			},
		},

		color: {
			primary: {
				color: '$primaryColor9',
			},
			secondary: {
				color: '$secondaryColor9',
			},
			black: {
				color: '$black',
			},
			white: {
				color: '$white',
			},
			green: {
				color: '$systemGreen',
			},
			red: {
				color: '$systemRed',
			},
			grey: {
				color: '$grey8',
			},
			greyDark: {
				color: '$grey9',
			},
		},

		clickable: {
			true: {
				cursor: 'pointer',
			},
			false: {},
		}

	},

	'&:hover': {
		background: '$sage4',
	},
});

