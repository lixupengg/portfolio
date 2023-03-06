import { styled } from '@stitches/react';

export const StyledOverflowText = styled('span', {
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
