import React, { ReactNode } from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { FORMAT_TYPE, MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { format } from '@stonksfi/constants';

/* Styles */
import {
	StyledUpcomingChange,
} from './styledComponents';
import ColouredLabel from '../ColouredLabel';

interface CompareMetricProps {
	data: MetricData;
	metric: MetricDisplaySetting;
}

const CompareMetric = (props: CompareMetricProps) => {
	const { data, metric } = props;
	let metricUpdate: 'black' | 'green' | 'red';
	if (data.new.value > data.current.value) {
		metricUpdate = 'green';
	} else if (data.new.value < data.current.value) {
		metricUpdate = 'red';
	} else {
		metricUpdate = 'black';
	}
	
	return (
		<>
			<ColouredLabel
				label="Upcoming Changes"
				type="secondary"
			/>
			<StyledUpcomingChange type={metricUpdate}>
				{format(data.new.value, metric.formatType)}
				{
					metricUpdate === 'red' 
					? <GoArrowDown size={"20px"}/>
					: metricUpdate === 'green'
					? <GoArrowUp size={"20px"}/>
					: ' '
				}
				on {format(data.new.effectiveTime, FORMAT_TYPE.DATE)}
			</StyledUpcomingChange>
		</>
	);
};

export default CompareMetric;
