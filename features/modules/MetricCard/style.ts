import { styled } from '@stitches/react';

export const StyledMetricCard = styled('div', {
	background: 'white',
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
	fontWeight: '$bold',
	color: '$primaryColor11',
});

export const StyledRow = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
});

export const StyledColumn = styled('div', {
	width: '30%',
	height: '100%'
});