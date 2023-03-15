import * as React from 'react';
import { Alert } from '@stonksfi/types';
import { AlertsDataProviderState } from '@stonksfi/dataProviders/AlertsDataProvider';
import AlertView from './AlertView';
import { StyledPortfolioWrapper} from './style';

interface AlertsListViewProps extends AlertsDataProviderState {}

const AlertsListView = (props: AlertsListViewProps) => {
	const { alerts, alertBeingEdited, updateAlertBeingEdited } = props;
	return (
		<StyledPortfolioWrapper>
			{alerts.map((alert: Alert) => {
				return (
					<AlertView 
						alert={alert} 
						alertBeingEdited={alertBeingEdited} 
						updateAlertBeingEdited={updateAlertBeingEdited}
					/>
				);
			})}
		</StyledPortfolioWrapper>
	);
};

export default AlertsListView;
