import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { HiMinusCircle } from 'react-icons/hi';
import { RxCaretDown } from 'react-icons/rx';
import { FiPlusSquare } from 'react-icons/fi';

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
		case 'plus': 
			iconElement = <FiPlusSquare/>;
			break;
		case 'caretDown':
			iconElement = <RxCaretDown/>;
			break;
		case 'arrowIncrease':
			iconElement = <GoArrowUp/>;
			break;
		case 'arrowDecrease':
			iconElement = <GoArrowDown/>;
			break;
		default:
			iconElement = <AiFillQuestionCircle/>;
			break;
	}

	const isClickable = onClick !== undefined;

	return (
		<StyledIcon
			className={className}
			color={color}
			size={size}
			onClick={onClick}
			style={style}
			clickable={isClickable}
		>
			{iconElement}
		</StyledIcon>
	);
};

export default Icon;
