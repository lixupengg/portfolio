import { styled, css } from '@stitches/react';

export const StyledPageHeader = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	background: '$primaryColor1',
	padding: '0 $large',
	
	'svg': {
		color: '$grey11',
	}
});

export const StyledPageHeaderLeft = styled('div', {
	display: 'flex',
	alignItems: 'center',

	'h1': {
		marginRight: '$large',
		marginBottom: '$tiny',
		position: 'relative',
	}
})

export const LabelCss = css({
	position: 'absolute',
	top: 10,
	right: -45,
});