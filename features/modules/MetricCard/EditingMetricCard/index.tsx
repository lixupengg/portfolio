import React, { ReactNode } from 'react';
import { MdRemoveCircle } from 'react-icons/md';
import { Button, OverflowText } from '@stonksfi/components';
import { DraggableDivState } from '@stonksfi/components/DraggableDiv/types';
import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { 
    StyledMetricCardOverlay, 
    StyledMetricName,
    DeleteButtonCss,
    StyledContentOverlay
 } from './style';
import { ModuleConfig } from '../../types';
import { METRIC_CARD_VIEW } from '../types';

export interface MetricCardProps extends ModuleConfig {
    metric: MetricDisplaySetting;
    data: MetricData;
    viewMode?: METRIC_CARD_VIEW;
    isEditing?: boolean;
    draggableDivState?: DraggableDivState;
}

const EditingMetricCard = (props: MetricCardProps) => {
	const { data, metric, viewMode = METRIC_CARD_VIEW.DEFAULT, draggableDivState, isEditing } = props;
    return (
            <StyledMetricCardOverlay>
                {!draggableDivState?.isItemBeingDragged ? <Button 
                    type='icon' 
                    iconSize={50}
                    className={DeleteButtonCss()}
                >
                    <MdRemoveCircle />
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
