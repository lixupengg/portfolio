import React from 'react';
import { Tooltip, Icon } from '@lixupeng/components';
import { IconType } from '../Icon/types';

interface IconTooltipProps {
	icon: IconType;
	content: string;
	title?: string;
}

const IconTooltip = (props: IconTooltipProps) => {
	const { title, icon, content } = props;
	if (content === "") {
		return null;
	}

	return (
		<Tooltip
			title={title || ''}
			placement="top"
			content={content}
		>
			<Icon icon={icon} color="grey"/>
		</Tooltip>
	);
};

export default IconTooltip;
