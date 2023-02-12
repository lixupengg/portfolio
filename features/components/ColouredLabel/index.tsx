import React from 'react';

/* Styles */
import { StyledLabel } from './styledComponents';

interface Props {
	label: string;
	color?: string;
	backgroundColor?: string;
	className?: string;
	type?: 'white' | 'black' | 'green' | 'red' | 'primary' | 'secondary';
}

const StatusLabel = (props: Props) => {
	const { type, label, color, backgroundColor, className } = props;
	return (
		<StyledLabel 
			className={className}
			style={{
				color,
				backgroundColor,
			}}
			type={type}
		>
			{label}
		</StyledLabel>
	);
};

export default StatusLabel;
