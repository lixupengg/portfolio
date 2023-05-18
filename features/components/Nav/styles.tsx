import { styled } from '@stitches/react';

export const StyledNav = styled('div', {
	position: 'fixed',
	zIndex: '100',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	paddingTop: '$medium',
	paddingRight: '$large',
});

export const StyledLogo = styled('img', {
	position: 'absolute',
	height: '60px',
	objectFit: 'contain',
	marginTop: '$small',
	left: '$large',
	border: '1px solid $black',
	background: '$primaryColor1',

	// hide if ipad and below
	'@media (max-width: 1024px)': {
		display: 'none',
	}
});

export const StyledNavButton = styled('button', {
	transition: '0.3s',
	background: 'rgba(255, 255, 255, 0.4)',
	opacity: 0.9,
	minWidth: '70px',
	padding: '8px 15px',
	marginRight: '$small',
	letterSpacing: '0.5px',
	borderRadius: '3.5px',
	textTransform: 'uppercase',
	fontSize: '$content12',
	fontWeight: '$semibold',
	color: '$grey12',
	'&:hover': {
		background: 'rgba(255, 255, 255, 0.7)',
		opacity: 1,
	},
	variants: {
		selected: {
			true: {
				background: 'rgba(255, 255, 255, 0.7)',
				opacity: 1,

				'span': {
					borderBottom: '1px solid $grey9',
				}
			},
		},
	},
});