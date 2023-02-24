import * as React from 'react';
import { AiOutlinePlusCircle, AiFillCheckCircle } from 'react-icons/ai'
import { SectionHeader, Button, Modal, Section } from '@stonksfi/components';
import { METRICS_LIST } from '@stonksfi/constants';
import { MetricCardView } from '@stonksfi/views';
import { MetricDisplaySetting } from '@stonksfi/types';
import { 
	StyledMetricsList, 
	StyledMetricCardOption, 
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
				<Section label="Macro" isDropdown>
				<StyledMetricsList>
					{/* Metric list should be replaced by all metrics from BE */}

					{METRICS_LIST.map((metric: MetricDisplaySetting) => {
						const isMetricSelected = selectedMetrics.find(
							(selectedMetric: MetricDisplaySetting) => selectedMetric.id === metric.id);
						return (
							<StyledMetricCardOptionBorderWrapper 
								onClick={() => handleSelectMetric(metric)}
								lastSelected={lastSelectedMetricId === metric.id}
							>
									{/* <div style={{width: '800px', border:'1px solid black', height: '60px'}}>
										{metric.name}
									</div> */}
								{isMetricSelected ? 
									<AiFillCheckCircle className={IconCss({selected: true})}/>
								: 
									<AiOutlinePlusCircle className={IconCss({selected: false})}/>
								}
								<StyledMetricCardOption>
									<MetricCardView
										name={metric.name}
										key={metric.id}
										metric={metric}
										// isSelected={
										// 	dashboardConfig.some(
										// 		(config: MetricDisplaySetting) => 
										// config.metricName === metric.metricName)
										// }
									/>
								</StyledMetricCardOption>
							</StyledMetricCardOptionBorderWrapper>
						);
					})
					}
				</StyledMetricsList>
				</Section>
			</Modal>
	);
};

export default MetricSelectModal;
