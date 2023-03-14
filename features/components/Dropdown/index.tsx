import React, { ReactNode } from 'react';
import { Dropdown as RsuiteDropdown } from 'rsuite';
import { Button, Icon } from '@stonksfi/components';
import { ButtonType, ButtonSize } from '../Button';

export interface DropdownItemProps {
	label: string;
	value: string | number;
}

interface DropdownProps {
	placeholder: string;
	prefix?: string;
	suffix?: string;
	options: DropdownItemProps[];
	onSelect?: (value: string | number, label: string) => void;
	/* If boolean, will use the first option as the default selected */
	defaultSelected?: string | boolean;
	type?: ButtonType;
	size?: ButtonSize;
}

const Dropdown = (props: DropdownProps) => {
	const { placeholder, options, defaultSelected, type, onSelect, prefix, suffix, size='auto' } = props;
	const defaultOption = typeof defaultSelected === 'string' 
		? defaultSelected 
		: defaultSelected === true
		? options[0].value
		: null;
	const [selectedValue, setSelectedValue] = React.useState<string | number | null>(defaultOption);
	const handleDropdownSelect = (label: string, value: string | number) => {
		if (onSelect) {
			onSelect(value, label);
		}
		setSelectedValue(value);
	}

	React.useEffect(() => {
		if (defaultSelected) {
			setSelectedValue(defaultSelected);
		}
	}, [defaultSelected]);
	
	return (
		<RsuiteDropdown 
			title="RsuiteDropdown"
			renderToggle={(props) => 
				<Button {...props} type={type} size={size}> 
					{selectedValue 
						? `${prefix || ''}
							${options.find((option) => option.value === selectedValue)?.label}
							${suffix || ''}`
						: placeholder
					}
					<Icon icon="caretDown" style={{ marginLeft: 'auto' }}/>
				</Button>
			}
			activeKey={selectedValue}
		>
			{
				options.map((option) => (
					<RsuiteDropdown.Item 
						key={option.value} 
						eventKey={option.value}
						value={option.value}
						onClick={() => handleDropdownSelect(option.label, option.value)}
					>
						{option.label}
					</RsuiteDropdown.Item>
				))
			}
		</RsuiteDropdown>
	);
};

Dropdown.Item = RsuiteDropdown.Item;
export default Dropdown;