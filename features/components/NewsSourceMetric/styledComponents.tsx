import { styled } from '@stitches/react';

export const StyledNewsSourceMetric = styled('div', {
	marginTop: '$small',
	display: 'flex',
	flexDirection: 'column',
});

export const StyledUpcomingChange = styled('p', {
	display: 'flex',
	alignItems: 'center',
	paddingTop: '$veryTiny',
	paddingLeft: '$tiny',
	fontWeight: '$semibold',
	margin: '0',

	variants: {
		type: {
			'red': {
				'svg': {
					color: '$systemRed',
				}
			},
			'green': {
				'svg': {
					color: '$systemGreen',
				}
			},
			'black': {
				'svg': {
					color: '$primaryColor12',
				}
			},
		}
	}
});