import React, { ReactNode } from 'react';
import {
    LineChart,
    CompareMetric, 
    FutureMetric, 
    NewsSourceMetric, 
    Dropdown, 
    MetricTitle 
} from '@stonksfi/components';
import { DraggableDivState } from '@stonksfi/components/DraggableDiv/types';
import { MetricData, MetricDisplaySetting, METRIC_CARD_VIEW, METRIC_CARD_VIEW_DROPDOWN_LIST } from '@stonksfi/types';
import { JoyrideClassNames } from '@stonksfi/constants';
import { ModuleConfig } from '../types';
import { 
    StyledMetricCard, 
    StyledRow,
    StyledColumn,
    StyledLineChartWrapper,
    StyledMetricCardWrapper
 } from './style';
import EditingMetricCard from './EditingMetricCard';

export interface MetricCardProps extends ModuleConfig {
    metric: MetricDisplaySetting;
    handleUpdateMetricViewMode?: (metricId: number, viewMode: METRIC_CARD_VIEW) => void;
    data?: MetricData | undefined;
    isEditing?: boolean;
    draggableDivState?: DraggableDivState;
}

const MetricCard = React.forwardRef((props: MetricCardProps, ref?: any) => {
	const { data, metric, isEditing, handleUpdateMetricViewMode } = props;
    const backupRef = ref ?? React.createRef();
    const showEditingMetricCard = isEditing && metric.viewMode !== METRIC_CARD_VIEW.SMALL;

    const [metricViewMode, setMetricViewMode] = React.useState<METRIC_CARD_VIEW>(
        metric.viewMode ?? METRIC_CARD_VIEW.DEFAULT);
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

    const handleSelectMetricViewMode = (value: any) => {
        setMetricViewMode(value as METRIC_CARD_VIEW);
        if (handleUpdateMetricViewMode) {
            handleUpdateMetricViewMode(metric.id, value as METRIC_CARD_VIEW);
        }
    }

    let normalMetricCard;
    switch (metricViewMode) {
        case METRIC_CARD_VIEW.SMALL:
            normalMetricCard = (
                <>
                <StyledRow>
                    <MetricTitle metric={metric}/>
                </StyledRow>
                <CompareMetric metric={metric} data={data}/>
            </>
        );
        break;

        case METRIC_CARD_VIEW.CHART:
            normalMetricCard = (
                    <>
                        <StyledRow>
                            <MetricTitle metric={metric}/>
                            <Dropdown 
                                placeholder='View'
                                options={METRIC_CARD_VIEW_DROPDOWN_LIST}
                                defaultSelected={metricViewMode}
                                onSelect={handleSelectMetricViewMode}
                                type='outline'
                            />
                        </StyledRow>
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
                    <StyledRow>
                        <MetricTitle metric={metric}/>
                        <Dropdown 
                            placeholder='View'
                            options={METRIC_CARD_VIEW_DROPDOWN_LIST}
                            defaultSelected={metricViewMode}
                            onSelect={handleSelectMetricViewMode}
                            type='outline'
                        />
                    </StyledRow>
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
                    <StyledRow>
                        <MetricTitle metric={metric}/>
                        <Dropdown 
                            placeholder='View'
                            options={METRIC_CARD_VIEW_DROPDOWN_LIST}
                            defaultSelected={metricViewMode}
                            onSelect={handleSelectMetricViewMode}
                            type='outline'
                        />
                    </StyledRow>
                    <CompareMetric metric={metric} data={data} borderBottom/>
                    <FutureMetric metric={metric} data={data}/>
                    <NewsSourceMetric metric={metric} data={data}/>
                </>
            );
            break;
        }

        return (
            <StyledMetricCardWrapper
                viewMode={metricViewMode}
                isEditing={showEditingMetricCard}
                className={JoyrideClassNames.METRIC_CARD}
            >
                <StyledMetricCard isEditing={showEditingMetricCard} ref={backupRef}>
                    {normalMetricCard}
                    {showEditingMetricCard ? <EditingMetricCard {...props}/> : null}
                </StyledMetricCard>
            </StyledMetricCardWrapper>
        )
});

export default MetricCard;
