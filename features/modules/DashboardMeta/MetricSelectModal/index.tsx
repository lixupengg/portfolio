import * as React from 'react';
import { AiOutlinePlusCircle, AiFillCheckCircle } from 'react-icons/ai'
import { SectionHeader, Button, Modal, Section } from '@stonksfi/components';
import { CATEGORIES, METRICS_LIST } from '@stonksfi/constants';
import { MetricCardView } from '@stonksfi/views';
import { MetricDisplaySetting, METRIC_CARD_VIEW } from '@stonksfi/types';
import { 
	StyledMetricsList, 
	SectionCss, 
	StyledMetricCardOptionBorderWrapper,
	IconCss
} from './styles';

interface MetricSelectModalProps {
	isModalOpen: boolean;
	onClose: () => void;
	dashboardConfig: MetricDisplaySetting[];
	updateDashboardConfig: (config: MetricDisplaySetting[]) => void;
}

const MetricSelectModal = (props: MetricSelectModalProps) => {
	const { isModalOpen, onClose, dashboardConfig, updateDashboardConfig } = props;
	const [ selectedMetrics, setSelectedMetrics ] = React.useState<MetricDisplaySetting[]>(dashboardConfig);
	const [ lastSelectedMetricId, setLastSelectedMetricId ] = React.useState<number>(-1);
	const handleSelectMetric = (metric: MetricDisplaySetting) => {
		setLastSelectedMetricId(metric.id);
		const isMetricSelected = selectedMetrics.find(
			(selectedMetric: MetricDisplaySetting) => selectedMetric.id === metric.id);
		if (isMetricSelected) {
			setSelectedMetrics(selectedMetrics.filter(
				(selectedMetric: MetricDisplaySetting) => selectedMetric.id !== metric.id));
		} else {
			setSelectedMetrics([...selectedMetrics, metric]);
		}
	}

	const handleSave = () => {
		updateDashboardConfig(selectedMetrics);
		onClose();
	}

	React.useEffect(() => {
		setSelectedMetrics(dashboardConfig);
	}, [dashboardConfig, isModalOpen]);

	return (
			<Modal 
				open={isModalOpen}
				onClose={onClose}
				onOk={handleSave}
				onCancel={onClose}
				title={"Add Metrics"}
				size='lg'
			>
				{ CATEGORIES.map((category: string) => {
					return (
						<Section 
							label={category} 
							isDropdown 
							key={category}
							className={SectionCss()}
						>
							<StyledMetricsList>
								{/* Metric list should be replaced by all metrics from BE */}
								{METRICS_LIST.filter((metric:MetricDisplaySetting) => metric.category === category)
									.map((metric: MetricDisplaySetting) => {
										const isMetricSelected = selectedMetrics.find(
											(selectedMetric: MetricDisplaySetting) => selectedMetric.id === metric.id);
										return (
											<StyledMetricCardOptionBorderWrapper 
												onClick={() => handleSelectMetric(metric)}
												lastSelected={lastSelectedMetricId === metric.id}
												key={metric.id}
											>
												{isMetricSelected ? 
													<AiFillCheckCircle className={IconCss({selected: true})}/>
												: 
													<AiOutlinePlusCircle className={IconCss({selected: false})}/>
												}
													<MetricCardView
														name={metric.name}
														key={metric.id}
														metric={{
															...metric,
															viewMode: METRIC_CARD_VIEW.SMALL
														}}
													/>
											</StyledMetricCardOptionBorderWrapper>
										);
								})}
							</StyledMetricsList>
						</Section>);
					})
				}
			</Modal>
	);
};

export default MetricSelectModal;
