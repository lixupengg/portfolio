import { styled } from '@stitches/react';

export const StyledOverflowText = styled('div', {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',

	variants: {
		allowWrapping: {
			true: {
				whiteSpace: 'normal',
				display: 'inline-block'
			},
		}
	}
});
