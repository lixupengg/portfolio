import {
	ModuleDisplaySetting,
	ModuleKind
} from '@stonksfi/components/Layout/types';
import { PageHeader, DashboardMeta, MetricCardList } from '@stonksfi/modules';
import { convertPxToNumber } from '@stonksfi/utils';
import { StockChartView, PortfolioHistoryView, TradeExecutionView } from '@stonksfi/views';
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
				height: 80,
				render: <DashboardMeta hideEdits />
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
						width: 450,
						children: [
							{
								name: 'TRADE_EXECUTION_VIEW',
								kind: ModuleKind.ELEMENT,
								paddingLeft: convertPxToNumber(theme.space.medium),
								paddingRight: convertPxToNumber(theme.space.medium),
								paddingBottom: convertPxToNumber(theme.space.medium),
								height: 200,
								render: <TradeExecutionView />
							},
							{
								name: 'PORTFOLIO_HISTORY_VIEW',
								kind: ModuleKind.ELEMENT,
								fillHeight: true,
								paddingLeft: convertPxToNumber(theme.space.medium),
								paddingRight: convertPxToNumber(theme.space.medium),
								paddingBottom: convertPxToNumber(theme.space.medium),
								render: <PortfolioHistoryView />
							},
						]
					},
					{
						name: 'METRIC_CARD_LIST',
						kind: ModuleKind.ELEMENT,
						width: 460,
						render: <MetricCardList {...metricCardListConfig} />
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
