import { styled, css } from '@stitches/react';

export const StyledPortfolioWrapper = styled('div', {
	background: '$primaryColor1',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	padding: '$medium',

	'> h2' : {
		paddingBottom: '$tiny',
		paddingRight: '$medium',
		marginBottom: '$medium',
		borderBottom: '1px dashed $grey7',
		width: 'max-content',
	}
});