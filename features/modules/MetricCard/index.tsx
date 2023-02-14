import React, { ReactNode } from 'react';
import { LineChart, CompareMetric, FutureMetric, NewsSourceMetric } from '@stonksfi/components';
import { format } from '@stonksfi/constants';
import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { useDashboardMetaContext } from '@stonksfi/hooks';
import { METRIC_CARD_VIEW } from './types';
import { ModuleConfig } from '../types';
import { 
    StyledMetricCard, 
    StyledMetricName,
    StyledRow,
    StyledColumn
 } from './style';
import EditingMetricCard from './EditingMetricCard';

export interface MetricCardProps extends ModuleConfig {
    metric: MetricDisplaySetting;
    data: MetricData;
    viewMode?: METRIC_CARD_VIEW;
}

const MetricCard = (props: MetricCardProps) => {
	const { data, metric, viewMode = METRIC_CARD_VIEW.DEFAULT } = props;
    const [metricViewMode, setMetricViewMode] = React.useState<METRIC_CARD_VIEW>(viewMode);
    const { isEditingConfig } = useDashboardMetaContext();
    
    const testData = [
        { y: 500, x: 1643587200000 },
        { y: 700, x: 1646275200000 },
        { y: 1200, x: 1648953600000 },
        { y: 900, x: 1651545600000 },
        { y: 1500, x: 1654224000000 },
        { y: 1800, x: 1656816000000 },
        { y: 2000, x: 1659494400000 },
        { y: 2500, x: 1662172800000 },
        { y: 2200, x: 1664764800000 },
        { y: 2700, x: 1667443200000 },
        { y: 3000, x: 1670035200000 },
        { y: 3500, x: 1672713600000 }
    ];

    if (true) {
        return (<EditingMetricCard {...props}/>);
    }

    switch (metricViewMode) {
        case METRIC_CARD_VIEW.CHART:
            return (
                    <StyledMetricCard>
                        <StyledMetricName>
                            {metric.name}
                        </StyledMetricName>
                        <CompareMetric metric={metric} data={data} borderBottom/>
                        <LineChart data={testData} showLineChartOnly/>
                        
                    </StyledMetricCard>
            );
        case METRIC_CARD_VIEW.CARD_CHART:
            return (
                <StyledMetricCard>
                    <StyledMetricName>
                        {metric.name}
                    </StyledMetricName>
                    <StyledRow>
                        <CompareMetric metric={metric} data={data}/>
                        <StyledColumn>
                            <FutureMetric metric={metric} data={data}/>
                        </StyledColumn>
                        <StyledColumn>
                            <NewsSourceMetric metric={metric} data={data} limitNewsSources={1}/>
                        </StyledColumn>
                    </StyledRow>
                    <LineChart data={testData}/>
                </StyledMetricCard>
                );
        default: // METRIC_CARD_VIEW.DEFAULT
            return (
                <StyledMetricCard>
                    <StyledMetricName>
                        {metric.name}
                    </StyledMetricName>
                    <CompareMetric metric={metric} data={data} borderBottom/>
                    <FutureMetric metric={metric} data={data}/>
                    <NewsSourceMetric metric={metric} data={data}/>
                </StyledMetricCard>
            );
    }
};

export default MetricCard;
