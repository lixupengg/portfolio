import { styled, css } from '@stitches/react';

export const StyledAlertWrapper = styled('div', {
	background: '$primaryColor1',
	borderRadius: '$tiny',
	boxShadow: '$large',
	height: 'calc($cardHeight / 2)',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	padding: '$small',
	marginBottom: '$medium',
	cursor: 'pointer',

	variants: {
		'isActive': {
			true: {
				border: '2px solid $primaryColor7'
			},

			false: {
				'&:hover': {
					border: '1px dashed $primaryColor7'
				}
			}
		}
	}
});

export const StyledMetricsLabels = styled('div', {
	borderTop: '1px solid $grey7',
	paddingTop: '$tiny',
	display: 'flex',
	flexDirection: 'row',
});
