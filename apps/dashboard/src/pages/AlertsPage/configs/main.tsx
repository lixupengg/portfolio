import {
	ModuleDisplaySetting,
	ModuleKind
} from '@stonksfi/components/Layout/types';
import {
	PageHeader,
	DashboardMeta,
	AlertsList,
	AlertsEditor
} from '@stonksfi/modules';
import { convertPxToNumber } from '@stonksfi/utils';
import { alertsListConfig } from './alertsListConfig';
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
				// height: 100,
				render: <PageHeader title={'Yan Yan'} />
			},
			{
				name: 'DASHBOARD_META',
				kind: ModuleKind.ELEMENT,
				// height: 80,
				render: <DashboardMeta hideEdits />
			},
			{
				name: 'ALERTS',
				direction: 'row',
				kind: ModuleKind.CONTAINER,
				fillHeight: true,
				children: [
					{
						name: 'METRIC_CARD_LIST',
						kind: ModuleKind.ELEMENT,
						width: 600,
						render: <AlertsList {...alertsListConfig} />
					},
					{
						name: 'METRIC_CARD_LIST',
						kind: ModuleKind.ELEMENT,
						fillWidth: true,
						shadow: 'large',
						render: <AlertsEditor {...alertsListConfig} />
					}
				]
			}
		]
	}
];
