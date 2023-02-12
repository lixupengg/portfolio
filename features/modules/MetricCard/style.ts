import { styled } from '@stitches/react';

export const StyledMetricCard = styled('div', {
	background: '$primaryColor1',
	border: '1px dashed $grey7',
	width: '100%',
	height: '100%',
	boxShadow: '$small',
	borderRadius: '$large',
	display: 'flex',
	flexDirection: 'column',
	padding: '$small',
});

export const StyledMetricName = styled('div', {
	fontSize: '$content16',
	textTransform: 'uppercase',
	fontWeight: '$bold',
	color: '$primaryColor11',
});