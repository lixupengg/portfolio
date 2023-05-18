import React, { ReactNode } from 'react';

import { MetricData, MetricDisplaySetting } from '@lixupeng/types';
import { ColouredLabel, Icon } from '@lixupeng/components';
import { format } from '@lixupeng/constants';

/* Styles */
import {
	StyledMetricNumberContainer,
	StyledMetricNumber,
	StyledMetricHistory,
	StyledMetricHistoryText
} from './styles';

interface CompareMetricProps {
	data: MetricData | undefined;
	metric: MetricDisplaySetting;
	borderBottom?: boolean;
}

const CompareMetric = (props: CompareMetricProps) => {
	const { data, metric, borderBottom } = props;
	let metricColor: 'black' | 'green' | 'red';
	if (data?.current.value > data?.old.value) {
		metricColor = 'green';
	} else if (data?.current.value < data?.old.value) {
		metricColor = 'red';
	} else {
		metricColor = 'black';
	}

	return (
		<StyledMetricNumberContainer borderBottom={borderBottom}>
			<StyledMetricNumber color={metricColor}>
				{format(data?.current.value, metric.formatType)}
			</StyledMetricNumber>
			<StyledMetricHistory>
				<ColouredLabel
					label="PREVIOUS"
					type="primary"
				/>
				<StyledMetricHistoryText color={metricColor}>
				{
					metricColor === 'green' ?
						<Icon
							icon="arrowIncrease"
							color="green"
							size="small"
						/>
					: metricColor === 'red' ?
						<Icon
							icon="arrowDecrease"
							color="red"
							size="small"
						/>
					: null

				}
					{format(data?.old.value, metric.formatType)}
				</StyledMetricHistoryText>
			</StyledMetricHistory>
		</StyledMetricNumberContainer>
	);
};

export default CompareMetric;
