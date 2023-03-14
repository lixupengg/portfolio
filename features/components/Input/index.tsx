import React, { ReactNode } from 'react';
import { Input as RsuiteInput, InputNumber as RsuiteInputNumber } from 'rsuite';
import { StyledInputWrapper } from './styles';

interface InputProps {
	onChange?: (value: string | number) => void;
	defaultValue?: string | number;
	placeholder?: string;
	isNumber?: boolean;
}

const Input = (props: InputProps) => {
	const { onChange, defaultValue, placeholder, isNumber } = props;
	const [value, setValue] = React.useState<string | number>(defaultValue || '');
	const handleChange = (value: string | number) => {
		if (onChange) {
			onChange(value);
		}
		setValue(value);
	}

	return (
		<StyledInputWrapper>
			{
				isNumber ?
				<RsuiteInputNumber
					placeholder={placeholder}
					value={value}
					onChange={(value) => handleChange(value)}
					size='sm'
				/> 
				:
				<RsuiteInput 
					placeholder={placeholder}
					value={value}
					onChange={(value) => handleChange(value)}
					size='sm'
				/>
			}
		</StyledInputWrapper>
	);
};

export default Input;