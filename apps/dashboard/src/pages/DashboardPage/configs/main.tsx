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
		children: [
			{
				name: 'PAGE_HEADER',
				fillWidth: true,
				kind: ModuleKind.ELEMENT,
				render: <PageHeader title={'Yan Yan'} />
			},
			{
				name: 'DASHBOARD_META',
				fillWidth: true,
				kind: ModuleKind.ELEMENT,
				render: <DashboardMeta />
			},
			{
				name: 'METRIC_CARD_LIST',
				fillWidth: true,
				paddingLeft: convertPxToNumber(theme.space.medium),
				paddingTop: convertPxToNumber(theme.space.medium),
				kind: ModuleKind.ELEMENT,
				render: <MetricCardList {...metricCardListConfig} />
			}
		]
	}
];
