import { styled } from '@stitches/react';

export const StyledNav = styled('div', {
	alignItems: 'center',
	justifyContent: 'center',
});

export const StyledNavButton = styled('button', {
	background: 'transparent',
	padding: '3px $tiny',
	marginRight: '$small',
	letterSpacing: '0.5px',
	fontSize: '$content14',
	fontWeight: '$semibold',
	'span': {
		borderBottom: '1px solid $grey9',
		padding: '3px 0',
	},
	variants: {
		selected: {
			true: {
				color: '$primaryColor1',
				background: '$grey12',
				border: '1px solid $grey12',

				'span': {
					border: 'none',
				}
			},
		},
	},
});