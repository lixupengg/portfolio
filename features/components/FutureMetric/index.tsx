import React, { ReactNode } from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FORMAT_TYPE, MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { OverflowText } from '@stonksfi/components';
import { format, JoyrideClassNames } from '@stonksfi/constants';

/* Styles */
import {
	StyledUpcomingChange,
	StyledCompareMetric
} from './styledComponents';
import ColouredLabel from '../ColouredLabel';

interface CompareMetricProps {
	data: MetricData | undefined;
	metric: MetricDisplaySetting;
}

const CompareMetric = (props: CompareMetricProps) => {
	const { data, metric } = props;
	let metricUpdate: 'black' | 'green' | 'red';
	if (data?.new.value > data?.current.value) {
		metricUpdate = 'green';
	} else if (data?.new.value < data?.current.value) {
		metricUpdate = 'red';
	} else {
		metricUpdate = 'black';
	}
	
	return (
		<StyledCompareMetric className={JoyrideClassNames.METRIC_CARD_UPCOMING}>
			<ColouredLabel
				label="Upcoming Changes"
				type="secondary"
			/>
			<StyledUpcomingChange type={metricUpdate}>
					{format(data?.new.value, metric.formatType)}
					{
						metricUpdate === 'red' 
						? <GoArrowDown size={"14px"}/>
						: metricUpdate === 'green'
						? <GoArrowUp size={"14px"}/>
						: ''
					}
				<OverflowText>
					&nbsp;on {format(data?.new.effectiveTime, FORMAT_TYPE.DATE)}
				</OverflowText>
			</StyledUpcomingChange>
		</StyledCompareMetric>
	);
};

export default CompareMetric;
