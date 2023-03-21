import { styled } from '@stitches/react';

export const StyledMetricNumberContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
	variants: {
		borderBottom: {
			true: {
				borderBottom: '1px solid $grey7',
			},
		},
	}
});

export const StyledMetricNumber = styled('div', {
	display: 'flex',
	alignItems: 'center',
	fontSize: '$title54',
	textAlign: 'center',
	fontWeight: '$bold',

	variants: {
		color: {
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
	marginTop: '$small',
	marginLeft: '$tiny',
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	justifyContent: 'center',
});

export const StyledMetricHistoryText = styled('div', {
	marginTop: '2px',
	fontWeight: '$bold',
	display: 'flex',
	alignItems: 'center',
	variants: {
		color: {
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