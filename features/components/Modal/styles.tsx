import { styled } from '@stitches/react';

export const StyledRocketEmojiBackground = styled('div', {
	position: 'absolute',
	fontSize: '200px',
});

export const StyledTitle = styled('h2', {
	color: '$primaryColor12',
	borderBottom: '1px solid $grey7',
	marginBottom: '$small !important',
});

export const StyledButtonRow = styled('div', {
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',

	'> button' :{
		marginLeft: '$tiny',
	}
});