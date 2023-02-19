import {
	ModuleDisplaySetting,
	ModuleKind
} from '@stonksfi/components/Layout/types';
import {
	TestModule,
	PageHeader,
	DashboardMeta,
	MetricCard,
	MetricCardList
} from '@stonksfi/modules';
import { METRIC_CARD_VIEW } from '@stonksfi/modules/MetricCard/types';
import { convertPxToNumber } from '@stonksfi/utils';
import { fakeData } from '../../../DATA/fake';
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
				render: <MetricCardList />
			},
		]
	}
];
