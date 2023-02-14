import {
	ModuleDisplaySetting,
	ModuleKind
} from '@stonksfi/components/Layout/types';
import {
	TestModule,
	PageHeader,
	DashboardMeta,
	MetricCard
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
		fillHeight: true,
		children: [
			{
				name: 'header',
				kind: ModuleKind.ELEMENT,
				render: <PageHeader title={'Yan Yan'} />
			},
			{
				name: 'header',
				kind: ModuleKind.ELEMENT,
				render: <DashboardMeta />
			},
			{
				name: 'header',
				direction: 'row',
				kind: ModuleKind.CONTAINER,
				width: 2100,
				paddingLeft: convertPxToNumber(theme.space.medium),
				paddingTop: convertPxToNumber(theme.space.medium),
				rowGap: convertPxToNumber(theme.space.small),
				children: [
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} viewMode={METRIC_CARD_VIEW.CHART}/>,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[1]} viewMode={METRIC_CARD_VIEW.CARD_CHART} />,
						width: 600,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					},
					{
						name: 'header',
						kind: ModuleKind.ELEMENT,
						render: <MetricCard {...fakeData[0]} />,
						width: 300,
						height: 300,
						minWidth: 300,
						paddingRight: convertPxToNumber(theme.space.small)
					}
				]
			},
			{
				name: 'header',
				kind: ModuleKind.ELEMENT,
				render: (
					<TestModule
						config={{
							name: '333333333333333333333333333333333333333333333333333333333333333333333333',
							data: 'bye'
						}}
					/>
				),
				width: 0,
				paddingRight: 10,
				fillHeight: true
			}
		]
	}
];
