import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { Button, ColouredLabel } from '@stonksfi/components';
import { Alert, AlertRule } from '@stonksfi/types';
import { StyledAlertWrapper, StyledMetricsLabels } from './style';

interface AlertProps {
	alert: Alert;
	alertBeingEdited: Alert;
	updateAlertBeingEdited: (alert: Alert) => void;
}

const AlertView = (props: AlertProps) => {
	const { alert, alertBeingEdited, updateAlertBeingEdited } = props;
	return (
		<StyledAlertWrapper
			isActive={alert.id === alertBeingEdited?.id}
			onClick={() => updateAlertBeingEdited(alert)}
		>
			<div>
				<h2>{alert.title}</h2>
				<h6>{alert.rules.length} Rules</h6>
			</div>

			<StyledMetricsLabels>
				{
					// Remove duplicate metric names
					alert.rules.filter((rule: AlertRule, index: number, self: AlertRule[]) => {
						return index === self.findIndex((t: AlertRule) => (
							t.metric.name === rule.metric.name
						));
					}).
					map((rule: AlertRule) => {
						return (
							<>
							<ColouredLabel
								label={rule.metric.name}
								type='secondary'
							/>&nbsp;
							</>
						);
					})
				}
			</StyledMetricsLabels>
		</StyledAlertWrapper>
	);
};

export default AlertView;
