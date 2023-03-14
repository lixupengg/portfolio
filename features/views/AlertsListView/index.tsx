import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { Alert } from '@stonksfi/types';
import AlertView from './AlertView';
import { StyledPortfolioWrapper} from './style';

interface AlertsListViewProps {
	alerts: Alert[];
	alertBeingEdited: Alert;
	updateAlertBeingEdited: (alert: Alert) => void;
}

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
