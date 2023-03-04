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

export const StyledTabHeader = styled('div', {
	marginTop: '$small',
	display: 'flex',
	width: '100%',
	paddingLeft: '$large',
	paddingBottom: '$tiny',
	borderBottom: '$grey6 1px solid',
})