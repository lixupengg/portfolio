import { styled, css } from '@stitches/react';

export const StyledPortfolioWrapper = styled('div', {
	background: '$primaryColor3',
	borderRadius: '$tiny',
	boxShadow: '$medium',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	padding: '$medium',
});

export const StyledDate = styled('div', {
	position: 'absolute',
	right: '50px',
	fontSize: '$content16',
	color: '$grey11',
	fontWeight: '$medium',
});

export const StyledPortfolioNumber = styled('div', {
	fontSize: '$subtitle28',
	color: '$primaryColor12',
	fontWeight: '$bold',
});

export const StyledStockName = styled('div', {
	display: 'flex',
	alignItems: 'center',
	fontSize: '$subtitle20',
	color: '$primaryColor12',
	fontWeight: '$bold',
});

export const StyledButtonRow = styled('div', {
	marginTop: '$small',
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	justifyContent: 'flex-start',

	'> button': {
		marginRight: '$small',
	}
})

export const LastButtonCss = css({
	marginRight: 0,
	marginLeft: 'auto',
})