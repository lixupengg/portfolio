import {
	ModuleDisplaySetting,
	ModuleKind
} from '@stonksfi/components/Layout/types';
import { PageHeader, DashboardMeta, MetricCardList } from '@stonksfi/modules';
import { convertPxToNumber } from '@stonksfi/utils';
import { StockChartView, BacktestPortfolioView } from '@stonksfi/views';
import { metricCardListConfig } from './metricCardListConfig';
import { themeObj } from '../../../styles/styling';

const { theme } = themeObj;

export const mainConfig: ModuleDisplaySetting[] = [
	{
		name: 'main',
		direction: 'column',
		fillHeight: true,
		kind: ModuleKind.CONTAINER,
		children: [
			{
				name: 'PAGE_HEADER',
				kind: ModuleKind.ELEMENT,
				height: 100,
				render: <PageHeader title={'Yan Yan'} />
			},
			{
				name: 'DASHBOARD_META',
				kind: ModuleKind.ELEMENT,
				height: 150,
				render: <DashboardMeta />
			},
			{
				name: 'METRIC_CARD_LIST',
				direction: 'row',
				kind: ModuleKind.CONTAINER,
				fillHeight: true,
				children: [
					{
						name: 'PORTFOLIO_AND_METRICS',
						direction: 'column',
						kind: ModuleKind.CONTAINER,
						width: 600,
						children: [
							{
								name: 'BACKTEST_PORTFOLIO_VIEW',
								kind: ModuleKind.ELEMENT,
								paddingLeft: convertPxToNumber(theme.space.medium),
								paddingRight: convertPxToNumber(theme.space.medium),
								paddingBottom: convertPxToNumber(theme.space.medium),
								height: 250,
								render: <BacktestPortfolioView />
							},
							{
								name: 'METRIC_CARD_LIST',
								paddingLeft: convertPxToNumber(theme.space.medium),
								fillHeight: true,
								kind: ModuleKind.ELEMENT,
								render: <MetricCardList {...metricCardListConfig} />
							}
						]
					},
					{
						name: 'STOCK_CHART',
						fillWidth: true,
						paddingLeft: convertPxToNumber(theme.space.medium),
						// paddingTop: convertPxToNumber(theme.space.medium),
						paddingBottom: convertPxToNumber(theme.space.large),
						kind: ModuleKind.ELEMENT,
						render: <StockChartView />
					}
				]
			}
		]
	}
];
