import { METRICS_LIST } from '@stonksfi/constants';
import { MetricCardProps } from '../../../../features/modules/MetricCard';

export const fakeData: MetricCardProps[] = [
	{
		name: 'Metric 1',
		metric: METRICS_LIST[0],
		data: {
			metricId: 0,
			current: {
				name: 'Current',
				value: 0.1
			},
			new: {
				name: 'New',
				value: 0.02,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.google.com',
						title: 'Fed raises interest rates due to...',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.google.com',
						title: 'Fed raises interest rates due to...',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 0.022,
				effectiveTime: 1676221044
			}
		}
	},
	{
		name: 'Metric 2',
		metric: METRICS_LIST[0],
		data: {
			metricId: 0,
			current: {
				name: 'Current',
				value: 0.1
			},
			new: {
				name: 'New',
				value: 0.02,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.google.com',
						title: 'Fed raises interest rates due to...',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.google.com',
						title: 'Fed raises interest rates due to...',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 0.2,
				effectiveTime: 1676221044
			}
		}
	}
];
