import { styled, css } from '@stitches/react';

export const StyledRuleWrapper = styled('div', {
	display: 'flex',
	variants: {
		connector: {
			and: {
				flexDirection: 'column',
				paddingBottom: '$small',
				borderBottom: '1px solid $grey7',
				marginBottom: '$small',
			},
			or: {
				flexDirection: 'row',
				marginBottom: '$tiny',
			},
		},
	}
});

export const StyledRule = styled('div', {
	display: 'flex',
	'> div': {
		margin: '0 $tiny',
	},
	variants: {
		connector: {
			and: {
				marginBottom: '$tiny',
			},
			or: {}
		},
	}
	
});

export const StyledConnectorWrapper = styled('div', {
	marginRight: '$small',
});
