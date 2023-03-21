import React, { ReactNode } from 'react';
import { MetricDisplaySetting, METRIC_CARD_VIEW } from '@stonksfi/types';
import { IconTooltip, OverflowText } from '@stonksfi/components';
import { JoyrideClassNames } from '@stonksfi/constants';

/* Styles */
import { StyledMetricName } from './styles';

interface MetricTitleProps {
	metric: MetricDisplaySetting;
}

const MetricTitle = (props: MetricTitleProps) => {
	const { metric } = props;
	
	return (
		<StyledMetricName className={JoyrideClassNames.METRIC_CARD_TITLE}>
			<OverflowText>{metric.name} &nbsp;</OverflowText>
			<IconTooltip 
				icon="questionMark" 
				content={metric.description}
			/>
		</StyledMetricName>
	);
};

export default MetricTitle;
