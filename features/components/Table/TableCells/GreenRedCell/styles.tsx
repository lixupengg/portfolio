import { styled, css } from '@stitches/react';

export const StyledColouredNumber = styled('span', {
	variants: {
		color: {
			red: {
				color: '$systemRed',
			},
			green: {

				color: '$systemGreen',
			},
			black: {
				color: '$primaryColor12',
			},
		},
	},
});
