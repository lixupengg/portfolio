import { styled } from '@stitches/react';

export const StyledPageHeader = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	background: '$primaryColor1',
	// boxShadow: '$large',
	padding: '0 $large',
	
	'svg': {
		color: '$grey11',
	}
});