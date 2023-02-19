import { styled } from '@stitches/react';

export const StyledSectionHeader = styled('div', {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderBottom: '1px solid $grey6',
	lineHeight: '20px',
	fontSize: '$content14',
	color: '$primaryColor12',
	marginTop: '$medium',
	paddingBottom: '$tiny',
	paddingLeft: '$large',

	i: {
		marginRight: '10px'
	},

	button: {
		marginRight: '18px'
	}
});
