import React, { ReactNode } from 'react';

import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { format } from '@stonksfi/constants';

/* Styles */
import {
	StyledMetricNumberContainer,
	StyledMetricNumber,
	StyledMetricHistory,
} from './styledComponents';
import ColouredLabel from '../ColouredLabel';

interface CompareMetricProps {
	data: MetricData;
	metric: MetricDisplaySetting;
}

const CompareMetric = (props: CompareMetricProps) => {
	const { data, metric } = props;
	let metricColor: 'black' | 'green' | 'red';
	if (data.current.value > data.old.value) {
		metricColor = 'green';
	} else if (data.current.value < data.old.value) {
		metricColor = 'red';
	} else {
		metricColor = 'black';
	}

	return (
		<StyledMetricNumberContainer>
			<StyledMetricNumber type={metricColor}>
				{format(data.current.value, metric.formatType)}
			</StyledMetricNumber>
			<StyledMetricHistory>
				<ColouredLabel
					label="PREVIOUS"
					type="primary"
				/>
				<p>{format(data.old.value, metric.formatType)}</p>
			</StyledMetricHistory>
		</StyledMetricNumberContainer>
	);
};

export default CompareMetric;
