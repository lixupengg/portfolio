import { styled } from '@stitches/react';

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