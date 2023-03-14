import * as React from 'react';
import { useUserContext } from '@stonksfi/hooks';
import { MdLogout } from 'react-icons/md';
import { Button, ColouredLabel, Dropdown, Input } from '@stonksfi/components';
import { DropdownItemProps } from '@stonksfi/components/Dropdown';
import { CONNECTOR_OPTIONS, OPERATOR_OPTIONS } from '@stonksfi/constants';
import { Alert, AlertRule } from '@stonksfi/types';
import { StyledRuleWrapper, StyledConnectorWrapper, StyledRule } from './styles';

interface AlertRuleProps {
	rule: AlertRule;
	index: number;
	metricOptions: DropdownItemProps[];
	handleUpdateRule: (rule: AlertRule, index: number) => void;
}

const RuleView = (props: AlertRuleProps) => {
	const { rule, metricOptions, handleUpdateRule, index } = props;
	const handleSelectMetric = (value: string | number, _label: string) => {
		const newRule = {
			...rule,
			metric: {
				name: value,
			},
		};
		handleUpdateRule(newRule, index);
	};

	const handleSelectConnector = (value: string | number, _label: string) => {
		const newRule = {
			...rule,
			connector: value,
		};
		handleUpdateRule(newRule, index);
	};

	return (
		<StyledRuleWrapper connector={rule.connector}>
			<StyledRule connector={rule.connector}>
				<Dropdown
					placeholder='Select a metric'
					options={metricOptions}
					defaultSelected={rule.metric.name}
					onSelect={handleSelectMetric}
					size={'small'}
					type='secondary'
				/>
				<Dropdown
					placeholder='Select an operator'
					options={OPERATOR_OPTIONS}
					defaultSelected={rule.operator}
					// type='outline'
					size={'small'}
				/>
				<Input
					placeholder='Enter a value'
					defaultValue={rule.value}
				/>
			</StyledRule>

			<StyledConnectorWrapper>
				<Dropdown
					placeholder='Select a connector'
					options={CONNECTOR_OPTIONS}
					defaultSelected={rule.connector}
					type='outline'
					size={'tiny'}
					onSelect={handleSelectConnector}
				/>
			</StyledConnectorWrapper>

			
		</StyledRuleWrapper>
	);
};

export default RuleView;
