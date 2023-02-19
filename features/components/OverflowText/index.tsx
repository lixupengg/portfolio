import React, { ReactNode } from 'react';

/* Styles */
import { StyledOverflowText } from './styles';

interface OverflowTextProps {
	children: ReactNode;
	lineHeight?: number;
	allowedNumOfLines?: number;
}

const OverflowText = (props: OverflowTextProps) => {
	const { children, lineHeight = 22, allowedNumOfLines } = props;
	return (
		<StyledOverflowText 
			style={allowedNumOfLines ? {height: `${lineHeight * allowedNumOfLines}px`} : {}}
			// eslint-disable-next-line no-unneeded-ternary
			allowWrapping={ allowedNumOfLines ? true : false }
		>
			{children}
		</StyledOverflowText>
	);
};

export default OverflowText;
