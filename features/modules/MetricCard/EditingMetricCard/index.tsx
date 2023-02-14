import React, { ReactNode } from 'react';
import { LineChart, CompareMetric, FutureMetric, NewsSourceMetric } from '@stonksfi/components';
import { format } from '@stonksfi/constants';
import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { 
    StyledMetricCard, 
    StyledMetricName,
    StyledRow,
    StyledColumn
 } from './style';
import { ModuleConfig } from '../../types';
import { METRIC_CARD_VIEW } from '../types';

export interface MetricCardProps extends ModuleConfig {
    metric: MetricDisplaySetting;
    data: MetricData;
    viewMode?: METRIC_CARD_VIEW;
}

const EditingMetricCard = (props: MetricCardProps) => {
	const { data, metric, viewMode = METRIC_CARD_VIEW.DEFAULT } = props;
    return (
        <StyledMetricCard>
            <StyledMetricName>
                {metric.name}
            </StyledMetricName>
        </StyledMetricCard>
    );
};

export default EditingMetricCard;
