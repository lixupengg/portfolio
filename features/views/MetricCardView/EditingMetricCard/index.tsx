import React, { ReactNode } from 'react';
import { HiMinusCircle } from 'react-icons/hi';
import { Button, OverflowText } from '@stonksfi/components';
import { DraggableDivState } from '@stonksfi/components/DraggableDiv/types';
import { MetricData, MetricDisplaySetting, METRIC_CARD_VIEW } from '@stonksfi/types';
import { 
    StyledMetricCardOverlay, 
    StyledMetricName,
    DeleteButtonCss,
    StyledContentOverlay
 } from './style';
import { ModuleConfig } from '../../types';

export interface MetricCardProps extends ModuleConfig {
    metric: MetricDisplaySetting;
    data?: MetricData | undefined;
    viewMode?: METRIC_CARD_VIEW;
    isEditing?: boolean;
    draggableDivState?: DraggableDivState;
}

const EditingMetricCard = (props: MetricCardProps) => {
	const { data, metric, viewMode = METRIC_CARD_VIEW.DEFAULT, draggableDivState, isEditing } = props;
    const isCardBeingDragged = draggableDivState?.isItemBeingDragged && isEditing;
    return (
            <StyledMetricCardOverlay>
                {!isCardBeingDragged ? <Button 
                    type='icon' 
                    iconSize={40}
                    className={DeleteButtonCss()}
                >
                    <HiMinusCircle style={{background: 'white'}}/>
                </Button> : null}
                <StyledContentOverlay>
                    <StyledMetricName>
                        {metric.name}
                    </StyledMetricName>
                    <OverflowText allowedNumOfLines={2}>
                        {metric.description}
                    </OverflowText>
                </StyledContentOverlay>
            </StyledMetricCardOverlay>
    );
};

export default EditingMetricCard;
