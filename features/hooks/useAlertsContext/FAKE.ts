import { Alert } from '@stonksfi/types';
import { METRICS_LIST } from '@stonksfi/constants';

export const ALERTS: Alert[] = [
	{
	  id: 1,
	  title: 'Tracking IR and TB',
	  rules: [
		{
		  id: 1,
		  metric: METRICS_LIST[0],
		  operator: '>=',
		  value: 90,
		  connector: 'and'
		},
		{
		  id: 2,
		  metric: METRICS_LIST[1],
		  operator: 'increases',
		  value: 10,
		  connector: 'or'
		},
		{
		  id: 3,
		  metric: METRICS_LIST[1],
		  operator: '<=',
		  value: 10,
		  connector: 'and'
		},
		{
		  id: 4,
		  metric: METRICS_LIST[1],
		  operator: 'changes',
		  value: 2,
		  connector: 'or'
		}
	  ]
	},
	{
	  id: 2,
	  title: 'Credit Score Alert',
	  rules: [
		{
		  id: 1,
		  metric: METRICS_LIST[2],
		  operator: '<=',
		  value: 20,
		  connector: 'and'
		},
		{
		  id: 2,
		  metric: METRICS_LIST[2],
		  operator: 'decreases',
		  value: 5,
		  connector: 'or'
		},
		{
		  id: 3,
		  metric: METRICS_LIST[2],
		  operator: '>',
		  value: 50,
		  connector: 'and'
		},
		{
		  id: 4,
		  metric: METRICS_LIST[2],
		  operator: '!=',
		  value: 0,
		  connector: 'or'
		}
	  ]
	},
	{
	  id: 3,
	  title: 'Check if loan amount is 0',
	  rules: [
		{
		  id: 1,
		  metric: METRICS_LIST[3],
		  operator: '==',
		  value: 0,
		  connector: 'and'
		},
		{
		  id: 2,
		  metric: METRICS_LIST[3],
		  operator: 'increases',
		  value: 1,
		  connector: 'or'
		},
		{
		  id: 3,
		  metric: METRICS_LIST[3],
		  operator: '<',
		  value: 10,
		  connector: 'and'
		},
		{
		  id: 4,
		  metric: METRICS_LIST[3],
		  operator: 'changes',
		  value: 1,
		  connector: 'or'
		}
	  ]
	},
	{
	  id: 4,
	  title: 'Monthly Payment Alert',
	  rules: [
		{
		  id: 1,
		  metric: METRICS_LIST[4],
		  operator: '>=',
		  value: 100,
		  connector: 'and'
		},
		{
		  id: 2,
		  metric: METRICS_LIST[4],
		  operator: 'decreases',
		  value: 10,
		  connector: 'or'
		},
		{
		  id: 3,
		  metric: METRICS_LIST[4],
		  operator: '<=',
		  value: 50,
		  connector: 'and'
		},
		{
		  id: 4,
		  metric: METRICS_LIST[4],
		  operator: '!=',
		  value: 0,
		  connector: 'or'
		}
	  ]
	},
];