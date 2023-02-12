import React, { ReactNode } from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { FORMAT_TYPE, MetricData, MetricDisplaySetting, NewsSource } from '@stonksfi/types';
import { format } from '@stonksfi/constants';

/* Styles */
import {
	StyledUpcomingChange,
} from './styledComponents';
import ColouredLabel from '../ColouredLabel';

interface NewsSourceMetricProps {
	data: MetricData;
	metric: MetricDisplaySetting;
}

const NewsSourceMetric = (props: NewsSourceMetricProps) => {
	const { data, metric } = props;

	return (
		<>
			<ColouredLabel
				label="Read More"
				type="white"
			/>
				{data.new?.sources?.map((source: NewsSource) => (
					<StyledUpcomingChange>
						<BsNewspaper/>&nbsp;{source.title}
					</StyledUpcomingChange>
				))}
		</>
	);
};

export default NewsSourceMetric;
