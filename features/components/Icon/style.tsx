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
				fontSize: '$subtitle32',
			},
		},

		color: {
			primary: {
				color: '$primary9',
			},
			secondary: {
				color: '$secondary9',
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
				color: '$grey9',
			}
		}

	},

	'&:hover': {
		background: '$sage4',
	},
});

