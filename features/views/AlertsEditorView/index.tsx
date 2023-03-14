import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { DropdownItemProps } from '@stonksfi/components/Dropdown';
import { Alert, AlertRule, MetricDisplaySetting } from '@stonksfi/types';
import { StyledPortfolioWrapper} from './styles';
import RuleView from './RuleView';

interface AlertsEditorViewProps {
	alerts: Alert[];
	updateAlertBeingEdited: (alert: Alert) => void;
	updateAlerts: (alerts: Alert[]) => void;
	alertBeingEdited: Alert;
	dashboardConfig: MetricDisplaySetting[];
}

/* There are problems with using 2 instances of data providers, update pls */
const AlertsEditorView = (props: AlertsEditorViewProps) => {
	const { alerts, updateAlertBeingEdited, updateAlerts, alertBeingEdited, dashboardConfig } = props;
	const METRICS_OPTIONS: DropdownItemProps[] = dashboardConfig.map((metric: MetricDisplaySetting) => {
		return {
			label: metric.name,
			value: metric.name,
		};
	});

	const handleUpdateRule = (rule: AlertRule, index: number) => {
		const newAlertBeingEdited = {
			...alertBeingEdited,
			rules: [
				...alertBeingEdited.rules.slice(0, index),
				rule,
				...alertBeingEdited.rules.slice(index + 1),
			],
		};
		updateAlertBeingEdited(newAlertBeingEdited);

		// update new alerts by id
		const newAlerts = alerts.map((alert: Alert) => {
			if (alert.id === newAlertBeingEdited.id) {
				return newAlertBeingEdited;
			}
			return alert;
		});
		updateAlerts(newAlerts);
	};

	return (
		<StyledPortfolioWrapper>
			<h2>Editing Alert: {alertBeingEdited.title}</h2>
			{alertBeingEdited?.rules.map((rule: AlertRule, index: number) => {
				return (
					<RuleView 
						rule={rule}
						index={index}
						metricOptions={METRICS_OPTIONS}
						handleUpdateRule={handleUpdateRule}
					/>
				);
			})
		}
		</StyledPortfolioWrapper>
	);
};

export default AlertsEditorView;
