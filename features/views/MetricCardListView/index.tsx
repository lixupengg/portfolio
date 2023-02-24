import * as React from 'react';
import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { Dropzone, DraggableDiv } from '@stonksfi/components';
import { DRAG_AND_DROP_TYPE } from '@stonksfi/constants';
import { RequestResponse } from '@stonksfi/hooks/useRequest';
import { StyledMetricCardList, 
	IsOverCss } from './styles';
import MetricCard from '../MetricCardView';

export interface MetricCardListViewProps {
	dashboardConfig: MetricDisplaySetting[]; // this should come from BE
	updateDashboardConfig: (metricList: MetricDisplaySetting[]) => void;
	metricResponseData: RequestResponse<MetricData[]>;
	isEditingConfig: boolean;
}

const MetricCardListView = (props: MetricCardListViewProps) => {
	const { dashboardConfig, updateDashboardConfig, isEditingConfig, metricResponseData } = props;
	const handleIsOver = (dropzoneItem: MetricDisplaySetting, sourceItem: MetricDisplaySetting) => {
		if (dropzoneItem.id === sourceItem.id) {
			return;
		}
		const newDashboardConfig = dashboardConfig.filter(
			(metricCard: MetricDisplaySetting) => !(metricCard.id === sourceItem.id)
		);
		/* Insert new dashboard config at the index of the dropzone item by comparing metric id */
		const dropzoneItemIndex = dashboardConfig.findIndex(
			(metricCard: MetricDisplaySetting) => metricCard.id === dropzoneItem.id
		);
		newDashboardConfig.splice(dropzoneItemIndex, 0, sourceItem);

		updateDashboardConfig([...newDashboardConfig]);
	}

	// Hash dashboard config, force rerender if dashboard config changes
	return (
		<StyledMetricCardList key={JSON.stringify(dashboardConfig)}>
			{dashboardConfig.map((metric: MetricDisplaySetting) => {
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
							<MetricCard
								name={metric.name}
								data={metricResponseData.data?.find(
									(metricData: MetricData) => metricData.metricId === metric.id) || undefined
								}
								metric={metric}
								isEditing={isEditingConfig} 
							/>
						</DraggableDiv>
					</Dropzone>
				)
			})}
		</StyledMetricCardList>
	);
};

export default MetricCardListView;
