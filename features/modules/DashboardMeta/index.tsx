import * as React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { SectionHeader, Button } from '@stonksfi/components';
import { useDashboardMetaContext } from '@stonksfi/hooks';
import { StyledRow } from './style';

interface Props {}

const DashboardMeta = (props?: Props) => {
	const { dashboardConfig, isEditingConfig, setIsEditingConfig } = useDashboardMetaContext();
	return (
		<>
			<SectionHeader
				label={'US Equities'}
			/>
			<StyledRow>
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
		</>
	);
};

export default DashboardMeta;
