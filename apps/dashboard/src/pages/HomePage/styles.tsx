import { styled, css, keyframes } from '@stitches/react';

export const StyledHomePageWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	background: '$black',
	alignItems: 'center',
	justifyContent: 'center',

	p: {
		color: '$primaryColor1',
		fontSize: '$title24',
		fontWeight: '$semibold',
		display: 'flex',
		alignItems: 'center'
	},
	h1: {
		color: '$primaryColor1',
		fontSize: '$title54',
		marginBottom: '$medium'
	}
});

export const StyledStonks = styled('span', {
	display: 'flex',
	fontStyle: 'italic',
	padding: '0 $veryTiny',
	background: '$primaryColor11',
	fontSize: '$content16',
	fontWeight: '$extrabold'
});

export const StyledRow = styled('div', {
	marginTop: '$small',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',

	button: {
		marginLeft: '$tiny'
	}
});
