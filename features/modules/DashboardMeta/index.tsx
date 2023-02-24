import * as React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { SectionHeader, Button, Modal } from '@stonksfi/components';
import { useDashboardMetaContext } from '@stonksfi/hooks';
import MetricSelectModal from './MetricSelectModal';
import { StyledRow } from './style';

interface Props {}

const DashboardMeta = (props?: Props) => {
	const { dashboardConfig, updateDashboardConfig, isEditingConfig, setIsEditingConfig } = useDashboardMetaContext();
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const handleClose = () => setIsModalOpen(false);
	return (
		<>	<div style={{display: 'flex'}}>
			<SectionHeader
				label={'US Equities'}
			/>
			</div>
			<StyledRow>
				<Button type='white' onClick={() => setIsModalOpen(true)}>
					<AiOutlinePlus/>&nbsp;&nbsp;Add Metrics
				</Button>
				{
					isEditingConfig ? 
					<Button type='primary' onClick={() => setIsEditingConfig(false)}>
						Done
					</Button>
					:
					<Button type='primaryStrong' onClick={() => setIsEditingConfig(true)}>
						<IoMdSettings/>&nbsp;&nbsp;Edit Charts
					</Button>
				}
			</StyledRow>
			<MetricSelectModal 
				isModalOpen={isModalOpen} 
				onClose={handleClose} 
				dashboardConfig={dashboardConfig}
				updateDashboardConfig={updateDashboardConfig}
			/>
		</>
	);
};

export default DashboardMeta;
