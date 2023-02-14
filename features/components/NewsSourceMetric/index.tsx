import React, { ReactNode } from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { FORMAT_TYPE, MetricData, MetricDisplaySetting, NewsSource } from '@stonksfi/types';
import { OverflowText } from '@stonksfi/components';
import { format } from '@stonksfi/constants';

/* Styles */
import {
	StyledUpcomingChange,
	StyledNewsSourceMetric
} from './styledComponents';
import ColouredLabel from '../ColouredLabel';

interface NewsSourceMetricProps {
	data: MetricData;
	metric: MetricDisplaySetting;
	limitNewsSources?: number;
}

const NewsSourceMetric = (props: NewsSourceMetricProps) => {
	const { data, metric, limitNewsSources } = props;

	return (
		<StyledNewsSourceMetric>
			<ColouredLabel
				label="Read More"
				type="white"
			/>
				{data.new?.sources?.slice(0, limitNewsSources).map((source: NewsSource) => (
					<StyledUpcomingChange>
						<BsNewspaper/><OverflowText>&nbsp;{source.title}</OverflowText>
					</StyledUpcomingChange>
				))}
		</StyledNewsSourceMetric>
	);
};

export default NewsSourceMetric;
