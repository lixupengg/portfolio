import React, { ReactNode } from 'react';

/* Styles */
import { StyledButton } from './styles';

interface ButtonProps {
	children: ReactNode;
	type?: 'primary' | 'secondary' | 'primaryStrong'| 'secondaryStrong' 
		| 'outline' | 'outlineSecondary' | 'white' | 'link' | 'icon';
	iconSize?: number;
	onClick?: () => void;
	className?: string;
}

const Button = (props: ButtonProps) => {
	const { children, type = 'primary', onClick, iconSize, className } = props;
	return (
		<StyledButton 
			type={type} 
			onClick={onClick} style={iconSize ? {fontSize: iconSize} : {}}
			className={className}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
