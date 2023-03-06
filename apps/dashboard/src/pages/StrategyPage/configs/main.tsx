import {
	ModuleDisplaySetting,
	ModuleKind
} from '@stonksfi/components/Layout/types';
import { PageHeader, DashboardMeta, MetricCardList } from '@stonksfi/modules';
import { convertPxToNumber } from '@stonksfi/utils';
import { StockChartView } from '@stonksfi/views';
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
				render: <PageHeader title={'Yan Yan'} />
			},
			{
				name: 'DASHBOARD_META',
				kind: ModuleKind.ELEMENT,
				render: <DashboardMeta />
			},
			{
				name: 'METRIC_CARD_LIST',
				direction: 'row',
				kind: ModuleKind.CONTAINER,
				fillHeight: true,
				fillWidth: true,
				children: [
					{
						name: 'METRIC_CARD_LIST',
						width: 600,
						fillHeight: true,
						paddingLeft: convertPxToNumber(theme.space.medium),
						paddingTop: convertPxToNumber(theme.space.medium),
						paddingBottom: convertPxToNumber(theme.space.large),
						kind: ModuleKind.ELEMENT,
						render: <MetricCardList {...metricCardListConfig} />
					},
					{
						name: 'METRIC_CARD_LIST',
						fillWidth: true,
						paddingLeft: convertPxToNumber(theme.space.medium),
						paddingTop: convertPxToNumber(theme.space.medium),
						paddingBottom: convertPxToNumber(theme.space.large),
						kind: ModuleKind.ELEMENT,
						render: <StockChartView />
					}
				]
			}
		]
	}
];
