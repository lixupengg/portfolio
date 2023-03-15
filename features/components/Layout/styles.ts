import { styled } from '@stitches/react';

export const StyledFlexContainer = styled('div', {
	display: 'flex',
	width: '100%',
	overflowY: 'auto',
	overflowX: 'hidden',
});

export const StyledFlexElement = styled('div', {
	position: 'relative',
	overflowY: 'auto',
	overflowX: 'hidden',

	variants: {
		shadow: {
			none: {},
			small: {
				boxShadow: '$small',
			},
			medium: {
				boxShadow: '$medium',
			},
			large: {
				boxShadow: '$large',
			},
		},
	}
});