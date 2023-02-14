import { styled } from '@stitches/react';

export const StyledCompareMetric = styled('div', {
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
	marginBottom: '$small',

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