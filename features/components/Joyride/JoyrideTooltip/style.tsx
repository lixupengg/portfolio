import { styled } from '@stitches/react';

export const StyledTooltipBody = styled('div', {
    fontFamily: '$roobert',
	background: '$primaryColor1',
    padding: '$medium',
    maxWidth: '$cardWidth',
    boxShadow: '$large',
    borderRadius: '$tiny',
});

export const StyledTooltipContent = styled('div', {
    color: '$primary12',
    fontSize: '$content16',
});

export const StyledTooltipTitle = styled('div', {
    color: '$primaryColor11',
    fontSize: '$subtitle24',
    fontWeight: '$bold',
    marginBottom: '$small',
});

export const StyledTooltipFooter = styled('div', {
    marginTop: '$large',
    display: 'flex',
    justifyContent: 'flex-end',

    '& > button': {
        marginLeft: '$small',
    }
});