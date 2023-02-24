import { styled } from '@stitches/react';

export const Test = styled('div', {
	display: 'flex',
	flexDirection: 'row', 
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white',
	fontWeight: '$regular',
	// italic font
	fontStyle: 'italic',
    background: '$secondaryColor9',
	fontSize: '40px',
    width: '100%',
    height: '100%',

	div: {
		display: 'flex'
	}
});