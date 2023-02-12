import React, { ReactNode } from 'react';
import { ColouredLabel, CompareMetric, FutureMetric, NewsSourceMetric } from '@stonksfi/components';
import { format } from '@stonksfi/constants';
import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { ModuleConfig } from '../types';
import { 
    StyledMetricCard, 
    StyledMetricName, 
 } from './style';

export interface MetricCardProps extends ModuleConfig {
    metric: MetricDisplaySetting;
    data: MetricData;
}

interface Props {
    config: MetricCardProps;
}

const MetricCard = (props: Props) => {
	const { data, metric } = props.config;
	return (
       <StyledMetricCard>
            <StyledMetricName>
                {metric.name}
            </StyledMetricName>
            <CompareMetric metric={metric} data={data}/>
            <FutureMetric metric={metric} data={data}/>
            <NewsSourceMetric metric={metric} data={data}/>
        </StyledMetricCard>
	);
};

export default MetricCard;
