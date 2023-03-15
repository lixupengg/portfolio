import {
	ModuleDisplaySetting,
	ModuleKind
} from '@stonksfi/components/Layout/types';
import { PageHeader, DashboardMeta, MetricCardList } from '@stonksfi/modules';
import { convertPxToNumber } from '@stonksfi/utils';
import { metricCardListConfig } from './metricCardListConfig';
import { themeObj } from '../../../styles/styling';

const { theme } = themeObj;

export const mainConfig: ModuleDisplaySetting[] = [
	{
		name: 'main',
		direction: 'column',
		kind: ModuleKind.CONTAINER,
		fillHeight: true,
		children: [
			{
				name: 'PAGE_HEADER',
				kind: ModuleKind.ELEMENT,
				render: <PageHeader title={'Yan Yan'} />,
				height: 100
			},
			{
				name: 'DASHBOARD_META',
				kind: ModuleKind.ELEMENT,
				render: <DashboardMeta />,
				height: 100
			},
			{
				name: 'METRIC_CARD_LIST',
				fillHeight: true,
				paddingLeft: convertPxToNumber(theme.space.medium),
				paddingTop: convertPxToNumber(theme.space.medium),
				paddingBottom: convertPxToNumber(theme.space.large),
				kind: ModuleKind.ELEMENT,
				render: <MetricCardList {...metricCardListConfig} />
			}
		]
	}
];
