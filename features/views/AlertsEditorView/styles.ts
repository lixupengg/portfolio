import { styled, css } from '@stitches/react';

export const StyledPortfolioWrapper = styled('div', {
	background: '$primaryColor2',
	borderRadius: '$tiny',
	boxShadow: '$large',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	padding: '$medium',

	'> h2' : {
		marginBottom: '$medium'
	}
});