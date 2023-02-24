import { MetricData } from '@stonksfi/types';

export const METRIC_DATA: MetricData[] = [
	{
			metricId: 1,
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
	},
	{
			metricId: 2,
			current: {
				name: 'Current',
				value: 10000
			},
			new: {
				name: 'New',
				value: 15000,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 3,
						url: 'https://www.google.com',
						title: 'Stock market takes a hit due to...',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 12000,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 3,
			current: {
				name: 'Current',
				value: 50
			},
			new: {
				name: 'New',
				value: 70,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 4,
						url: 'https://www.google.com',
						title: 'New study shows impact of...',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 60,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 4,
			current: {
				name: 'Current',
				value: 100000
			},
			new: {
				name: 'New',
				value: 150000,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.yahoo.com',
						title: 'Real estate prices rise in Q1 due to...',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.yahoo.com',
						title: 'Real estate prices rise in Q1 due to...',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 110000,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 5,
			current: {
				name: 'Current',
				value: 7.8
			},
			new: {
				name: 'New',
				value: 8.2,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.cnbc.com',
						title: 'Company X exceeds Q1 earnings expectations due to...',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.cnbc.com',
						title: 'Company X exceeds Q1 earnings expectations due to...',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 8.1,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 6,
			current: {
				name: 'Current',
				value: 10000
			},
			new: {
				name: 'New',
				value: 8000,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.bloomberg.com',
						title: 'Tech sector stocks plunge due to...',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.bloomberg.com',
						title: 'Tech sector stocks plunge due to...',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 9000,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 7,
			current: {
				name: 'Current',
				value: 10.2
			},
			new: {
				name: 'New',
				value: 9.8,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.google.com',
						title: 'Company announces new product',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.google.com',
						title: 'Company stock rises due to strong earnings',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 10.5,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 8,
			current: {
				name: 'Current',
				value: 5.5
			},
			new: {
				name: 'New',
				value: 5.4,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.google.com',
						title: 'Company announces new product',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.google.com',
						title: 'Company stock rises due to strong earnings',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 5.7,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 9,
			current: {
				name: 'Current',
				value: 100
			},
			new: {
				name: 'New',
				value: 102,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.google.com',
						title: 'Company announces new product',
						description: 'hi'
					},
					{
						newsId: 2,
						url: 'https://www.google.com',
						title: 'Company stock rises due to strong earnings',
						description: 'hi'
					}
				]
			},
			old: {
				name: 'Old',
				value: 98,
				effectiveTime: 1676221044
			}
	},
	{
			metricId: 10,
			current: {
				name: 'Current',
				value: 75.0
			},
			new: {
				name: 'New',
				value: 72.5,
				effectiveTime: 1676221044,
				sources: [
					{
						newsId: 1,
						url: 'https://www.example.com',
						title: 'New Study Shows Increase in Metric 10',
						description:
							'A new study has found that Metric 10 has increased by 2.5 points since last year.'
					}
				]
			},
			old: {
				name: 'Old',
				value: 70.0,
				effectiveTime: 1676221044
			}
	},
];