import { styled } from '@stitches/react';

export const StyledRow = styled('div', {
	marginTop: '$small',
	padding: '0 $large',
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',

	'> button': {
		marginLeft: '$small',
	}
});