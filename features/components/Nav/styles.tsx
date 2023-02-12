import { styled } from '@stitches/react';

export const StyledNav = styled('div', {
	alignItems: 'center',
	justifyContent: 'center',
	paddingLeft: 'calc($large - $small)',
	paddingTop: '$small',
});

export const StyledNavButton = styled('button', {
	background: 'transparent',
	fontWeight: '$semibold',
	padding: '0 $tiny',
	borderRadius: '100px',
	variants: {
		selected: {
			true: {
				color: '$primaryColor1',
				background: '$primaryColor9',
			},
		},
	},
});