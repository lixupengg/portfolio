import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { DropdownItemProps } from '@stonksfi/components/Dropdown';
import { Alert, AlertRule, MetricDisplaySetting, NullableAlertRule } from '@stonksfi/types';
import { AlertsDataProviderState } from '@stonksfi/dataProviders/AlertsDataProvider';
import { StyledPortfolioWrapper} from './styles';
import RuleView from './RuleView';

interface AlertsEditorViewProps extends AlertsDataProviderState {}

/* There are problems with using 2 instances of data providers, update pls */
const AlertsEditorView = (props: AlertsEditorViewProps) => {
	const { alerts, updateAlertBeingEdited, updateAlerts, alertBeingEdited, metricsMeta } = props;
	const METRICS_OPTIONS: DropdownItemProps[] = metricsMeta.map((metric: MetricDisplaySetting) => {
		return {
			label: metric.name,
			value: metric.name,
		};
	});

	const updateAlertsInBE = (alertToUpdate: Alert) => {
		const newAlerts = alerts.map((alert: Alert) => {
			if (alert.id === alertToUpdate?.id) {
				return alertToUpdate;
			}
			return alert;
		});
		updateAlerts(newAlerts);
	};

	const handleUpdateRule = (rule: AlertRule, index: number) => {
		if (!alertBeingEdited) {
			return;
		}

		const newAlertBeingEdited = {
			...alertBeingEdited,
			rules: [
				...alertBeingEdited.rules.slice(0, index),
				rule,
				...alertBeingEdited.rules.slice(index + 1),
			],
		};
		updateAlertBeingEdited(newAlertBeingEdited);
		updateAlertsInBE(newAlertBeingEdited);
	};

	const handleCreateRule = (createIndex: number) => {
		if (!alertBeingEdited) {
			return;
		}
		const newRule: NullableAlertRule = {
			// TODO: Refactor to use uuid probably
			id: Math.floor(Math.random() * 1000000000),
			connector: 'or'
		};
		const newAlertBeingEdited = {
			...alertBeingEdited,
			rules: [
				...alertBeingEdited.rules.slice(0, createIndex),
				newRule,
				...alertBeingEdited.rules.slice(createIndex),
			],
		} as Alert;
		updateAlertBeingEdited(newAlertBeingEdited);
		updateAlertsInBE(newAlertBeingEdited);
	}

	const handleDeleteRule = (ruleToDelete: AlertRule) => {
		if (!alertBeingEdited) {
			return;
		}
		const newAlertBeingEdited = {
			...alertBeingEdited,
			rules: alertBeingEdited.rules.filter((rule: AlertRule) => rule.id !== ruleToDelete.id),
		};
		updateAlertBeingEdited(newAlertBeingEdited);
		updateAlertsInBE(newAlertBeingEdited);
	}

	return (
		<StyledPortfolioWrapper>
			<h6> EDITING ALERT </h6>
			<h2>{alertBeingEdited?.title}</h2>
			{alertBeingEdited?.rules.map((rule: AlertRule, index: number) => {
				return (
					<RuleView 
						rule={rule}
						index={index}
						metricOptions={METRICS_OPTIONS}
						handleUpdateRule={handleUpdateRule}
						handleCreateRule={handleCreateRule}
						handleDeleteRule={handleDeleteRule}
						isLastRule={index === alertBeingEdited.rules.length - 1}
						metricsMeta={metricsMeta}
					/>
				);
			})
		}
		</StyledPortfolioWrapper>
	);
};

export default AlertsEditorView;
