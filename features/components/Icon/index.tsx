import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { HiMinusCircle } from 'react-icons/hi';
import { RxCaretDown } from 'react-icons/rx';

/* Styles */
import { StyledIcon } from './style';
import { IconProps } from './types';

const Icon = (props: IconProps) => {
	const { icon, color = 'primary', size = 'small',
	 className, onClick, hasBackground, changeColorOnHover, style } = props;
	
	let iconElement;
	switch (icon) {
		case 'questionMark':
			iconElement = <AiFillQuestionCircle/>;
			break;
		case 'minus':
			iconElement = <HiMinusCircle/>;
			break;
		case 'caretDown':
			iconElement = <RxCaretDown/>;
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
			style={style}
		>
			{iconElement}
		</StyledIcon>
	);
};

export default Icon;
