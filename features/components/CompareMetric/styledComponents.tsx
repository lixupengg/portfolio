import { styled } from '@stitches/react';

export const StyledMetricNumberContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	alignContent: 'center',
});

export const StyledMetricNumber = styled('div', {
	fontSize: '$title54',
	textAlign: 'center',
	fontWeight: '$bold',

	variants: {
		type: {
			'red': {
				color: '$systemRed',
			},
			'green': {
				color: '$systemGreen',
			},
			'black': {
				color: '$primaryColor12',
			},
		}
	}
});

export const StyledMetricHistory = styled('div', {
	marginLeft: '$small',
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	justifyContent: 'center',

	'span': {
		color: '$primaryColor11',
		fontSize: '$content12',
		fontWeight: '$semibold',
	},

	'div': {
		fontSize: '$content18',
		fontWeight: '$medium',
	}
});