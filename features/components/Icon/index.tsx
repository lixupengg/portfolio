import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';

/* Styles */
import { StyledIcon } from './style';
import { IconProps } from './types';

const Icon = (props: IconProps) => {
	const { icon, color = 'primary', size = 'small', className, onClick, hasBackground, changeColorOnHover } = props;
	
	let iconElement;
	switch (icon) {
		case 'questionMark':
			iconElement = <AiFillQuestionCircle/>;
			break;
		default:
			iconElement = <AiFillQuestionCircle/>;
			break;
	}

	return (
		<StyledIcon
			className={className}
			color={color}
			size={size}
			onClick={onClick}
		>
			{iconElement}
		</StyledIcon>
	);
};

export default Icon;
