import React, { ReactNode } from 'react';

/* Styles */
import { StyledOverflowText } from './styles';

interface OverflowTextProps {
	children: ReactNode;
}

const OverflowText = (props: OverflowTextProps) => {
	const { children } = props;
	return (
		<StyledOverflowText>
			{children}
		</StyledOverflowText>
	);
};

export default OverflowText;
