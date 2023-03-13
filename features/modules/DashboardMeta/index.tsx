import * as React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { SectionHeader, Button, Modal } from '@stonksfi/components';
import { useDashboardMetaContext } from '@stonksfi/hooks';
import { JoyrideClassNames } from '@stonksfi/constants';
import MetricSelectModal from './MetricSelectModal';
import { StyledRow, StyledTabHeader } from './style';

interface Props {}

const DashboardMeta = (props?: Props) => {
	const { dashboardConfig, updateDashboardConfig, isEditingConfig, setIsEditingConfig } = useDashboardMetaContext();
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const handleClose = () => setIsModalOpen(false);
	return (
		<>	
			<StyledTabHeader>
				<p> US Equities</p>
			</StyledTabHeader>
			<StyledRow>
				<Button 
					type='white' 
					onClick={() => setIsModalOpen(true)}
					className={JoyrideClassNames.DASHBOARD_ACTIONABLES}
				>
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
