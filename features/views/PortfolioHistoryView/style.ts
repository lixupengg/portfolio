import { styled, css } from '@stitches/react';

export const StyledPortfolioWrapper = styled('div', {
	background: '$primaryColor1',
	borderRadius: '$tiny',
	boxShadow: '$medium',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	padding: '$medium',
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

export const StyledTableWrapper = styled('div', {
	marginTop: '$small',
	borderTop: '1px solid $grey7',
	paddingTop: '$small',

})

export const LastButtonCss = css({
	marginRight: 0,
	marginLeft: 'auto',
})