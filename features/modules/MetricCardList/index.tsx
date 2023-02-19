import * as React from 'react';
import { SectionHeader, Button, Dropzone, DraggableDiv } from '@stonksfi/components';
import { useDashboardMetaContext, useDndContext } from '@stonksfi/hooks';
import { DRAG_AND_DROP_TYPE } from '@stonksfi/constants';
import { StyledMetricCardList, 
	IsOverCss } from './styles';
import MetricCard, { MetricCardProps } from '../MetricCard';

// Ideally, we want to import metriccardprops from data layer above
// export interface MetricCardListProps {
// 	metricList: MetricCardProps[]; // this should come from BE
// we should map with metricList which is MetricDisplaySetting[] instead of including the data!!
// }

const MetricCardList = () => {
	const { isEditingConfig, dashboardConfig, setDashboardConfig } = useDashboardMetaContext();

	const handleIsOver = (dropzoneItem: MetricCardProps, sourceItem: MetricCardProps) => {
		if (dropzoneItem.metric.metricId === sourceItem.metric.metricId) {
			return;
		}
		const newDashboardConfig = dashboardConfig.filter(
			(metricCard: MetricCardProps) => !(metricCard.metric.metricId === sourceItem.metric.metricId)
		);
		/* Insert new dashboard config at the index of the dropzone item by comparing metric id */
		const dropzoneItemIndex = dashboardConfig.findIndex(
			(metricCard: MetricCardProps) => metricCard.metric.metricId === dropzoneItem.metric.metricId
		);
		newDashboardConfig.splice(dropzoneItemIndex, 0, sourceItem);

		setDashboardConfig([...newDashboardConfig]);
	}

	// Hash dashboard config, force rerender if dashboard config changes
	return (
		<StyledMetricCardList key={JSON.stringify(dashboardConfig)}>
			{dashboardConfig.map((metric: MetricCardProps) => {
				return (
					<Dropzone
						type={DRAG_AND_DROP_TYPE.METRIC_CARD}
						dropzoneItem={metric}
						isOverClassName={IsOverCss()}
						handleIsOver={handleIsOver}
					>
						<DraggableDiv
							type={DRAG_AND_DROP_TYPE.METRIC_CARD} 
							item={metric}
							disabled={!isEditingConfig}
						>
							<MetricCard {...metric} isEditing={isEditingConfig} />
						</DraggableDiv>
					</Dropzone>
				)
			})}
		</StyledMetricCardList>
	);
};

export default MetricCardList;
