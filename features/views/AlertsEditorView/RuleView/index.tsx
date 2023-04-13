import * as React from 'react';
import { Dropdown, Icon, Input } from '@stonksfi/components';
import { DropdownItemProps } from '@stonksfi/components/Dropdown';
import { CONNECTOR_OPTIONS, CONNECTOR_TYPE, OPERATOR_OPTIONS } from '@stonksfi/constants';
import { Alert, AlertRule, MetricDisplaySetting } from '@stonksfi/types';
import { StyledRuleWrapper, StyledConnectorWrapper, StyledRule } from './styles';

interface AlertRuleProps {
	rule: AlertRule;
	index: number;
	metricOptions: DropdownItemProps[];
	handleUpdateRule: (rule: AlertRule, index: number) => void;
	handleCreateRule: (createIndex: number) => void;
	handleDeleteRule: (rule: AlertRule) => void;
	metricsMeta: MetricDisplaySetting[];
	isLastRule?: boolean;
}

const RuleView = (props: AlertRuleProps) => {
	const { rule, metricOptions, handleUpdateRule, handleCreateRule, handleDeleteRule, 
		index, isLastRule, metricsMeta } = props;
	const handleSelectMetric = (value: string | number, _label: string) => {
		const newMetric = metricsMeta.find((metric: MetricDisplaySetting) => metric.name === value);
		const newRule = {
			...rule,
			metric: newMetric || rule.metric,
		};
		handleUpdateRule(newRule, index);
	};

	const handleSelectConnector = (value: CONNECTOR_TYPE, _label: string) => {
		const newRule = {
			...rule,
			connector: value,
		};
		handleUpdateRule(newRule, index);
	}




	return (
		<StyledRuleWrapper connector={rule.connector}>
			<StyledRule connector={rule.connector}>
				<Icon 
					icon='plus' 
					size='medium' 
					color='greyDark' 
					onClick={() => handleCreateRule(index)}
				/>
				<Dropdown
					placeholder='Select a metric'
					options={metricOptions}
					defaultSelected={rule.metric?.name || undefined}
					onSelect={handleSelectMetric}
					size={'small'}
					type='secondary'
				/>
				<Dropdown
					placeholder='Select an operator'
					options={OPERATOR_OPTIONS}
					defaultSelected={rule.operator}
					size={'small'}
				/>
				<Input
					placeholder='Enter a value'
					defaultValue={rule.value}
				/>
				{
					rule.connector === 'and' ?
					<Icon 
						icon='minus' 
						size='medium' 
						color='secondary' 
						onClick={() => handleDeleteRule(rule)}
					/> : null
				}
			</StyledRule>
			{!isLastRule ?
			
				<StyledConnectorWrapper>
					<Dropdown
						placeholder='Select a connector'
						options={CONNECTOR_OPTIONS}
						defaultSelected={rule.connector}
						type='outline'
						size={'tiny'}
						onSelect={handleSelectConnector as (value: string | number, label: string) => void}
					/>
				</StyledConnectorWrapper>
				: null
			}
			{
				rule.connector === 'or' || isLastRule ?
				<Icon 
					icon='minus' 
					size='medium' 
					color='secondary' 
					onClick={() => handleDeleteRule(rule)}
				/> : null
			}

			
		</StyledRuleWrapper>
	);
};

export default RuleView;
