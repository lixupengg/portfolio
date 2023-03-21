import { styled } from '@stitches/react';

export const StyledLabel = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '4px',
	fontSize: '10px !important',
	width: 'max-content !important',
	height: '18px !important',
	padding: '2px 6px !important',
	fontWeight: '$semibold !important',

	variants: {
		type: {
			white: {
				background: '$primaryColor1',
				border: '1px solid $grey7',
				color: '$primaryColor12'
			},
			black: {
				background: '$grey12',
				color: 'white'
			},
			green: {
				background: '$systemGreen',
				color: 'white'
			},
			red: {
				background: '$systemRed',
				color: 'white'
			},
			primary: {
				background: '$primaryColor10',
				color: 'white'
			},
			secondary: {
				background: '$secondaryColor9',
				color: 'white',
			}
		}
	}
});
