import React, { ReactNode } from 'react';
import { LineChart, CompareMetric, FutureMetric, NewsSourceMetric } from '@stonksfi/components';
import { DraggableDivState } from '@stonksfi/components/DraggableDiv/types';
import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { METRIC_CARD_VIEW } from './types';
import { ModuleConfig } from '../types';
import { 
    StyledMetricCard, 
    StyledMetricName,
    StyledRow,
    StyledColumn,
    StyledLineChartWrapper,
    StyledMetricCardWrapper
 } from './style';
import EditingMetricCard from './EditingMetricCard';

export interface MetricCardProps extends ModuleConfig {
    metric: MetricDisplaySetting;
    data: MetricData;
    viewMode?: METRIC_CARD_VIEW;
    isEditing?: boolean;
    draggableDivState?: DraggableDivState;
}

const MetricCard = React.forwardRef((props: MetricCardProps, ref?: any) => {
	const { data, metric, viewMode = METRIC_CARD_VIEW.DEFAULT, isEditing } = props;
    const backupRef = ref ?? React.createRef();

    const [metricViewMode, setMetricViewMode] = React.useState<METRIC_CARD_VIEW>(viewMode);
    const chartRef = React.useRef(null);

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

    let normalMetricCard;
    switch (metricViewMode) {
        case METRIC_CARD_VIEW.CHART:
            normalMetricCard = (
                    <>
                        <StyledMetricName>
                            {metric.name}
                        </StyledMetricName>
                        <CompareMetric metric={metric} data={data} borderBottom/>
                        <StyledLineChartWrapper ref={chartRef}>
                            <LineChart data={testData} showLineChartOnly showDummy={isEditing} ref={chartRef}/>
                        </StyledLineChartWrapper>
                        
                    </>
            );
            break;
        case METRIC_CARD_VIEW.CARD_CHART:
            normalMetricCard = (
                <>
                    <StyledMetricName>
                        {metric.name}
                    </StyledMetricName>
                        <StyledRow>
                            <CompareMetric metric={metric} data={data}/>
                            {/* Hide extra metrics when editing layout */}
                            {
                                !isEditing ? 
                                    <>
                                        <StyledColumn>
                                            <FutureMetric metric={metric} data={data}/>
                                        </StyledColumn>
                                        <StyledColumn style={{flexShrink: 10}}>
                                            <NewsSourceMetric metric={metric} data={data} limitNewsSources={1}/>
                                        </StyledColumn>
                                    </> 
                                : null
                            }
                        </StyledRow>
                    <StyledLineChartWrapper ref={chartRef}>
                        <LineChart data={testData} showDummy={isEditing} ref={chartRef}/>
                    </StyledLineChartWrapper>
                </>
                );
                break;
        default: // METRIC_CARD_VIEW.DEFAULT
            normalMetricCard = (
                <>
                    <StyledMetricName>
                        {metric.name}
                    </StyledMetricName>
                    <CompareMetric metric={metric} data={data} borderBottom/>
                    <FutureMetric metric={metric} data={data}/>
                    <NewsSourceMetric metric={metric} data={data}/>
                </>
            );
            break;
        }

        return (
            <StyledMetricCardWrapper
                viewMode={viewMode}
                isEditing={isEditing}
            >
                <StyledMetricCard isEditing={isEditing} ref={backupRef}>
                    {normalMetricCard}
                    {isEditing ? <EditingMetricCard {...props}/> : null}
                </StyledMetricCard>
            </StyledMetricCardWrapper>
        )
});

export default MetricCard;
