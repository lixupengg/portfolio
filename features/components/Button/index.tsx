import React, { ReactNode } from 'react';

/* Styles */
import { StyledButton } from './styles';

export type ButtonType = 'primary' | 'secondary' | 'primaryStrong'| 'secondaryStrong' 
| 'outline' | 'outlineSecondary' | 'white' | 'black' | 'link' | 'icon';

export type ButtonSize = 'auto' | 'tiny' | 'small' | 'medium' | 'large';

interface ButtonProps {
	children: ReactNode;
	type?: ButtonType;
	align?: 'left' | 'center' | 'right';
	iconSize?: number;
	onClick?: (e?: any) => void;
	size?: ButtonSize;
	className?: string;
}

const Button = (props: ButtonProps) => {
	const { children, type = 'primary', onClick, iconSize, className, size = 'auto', align = 'center' } = props;
	return (
		<StyledButton 
			type={type}
			size={size}
			align={align}
			onClick={onClick} style={iconSize ? {fontSize: iconSize} : {}}
			className={className}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
