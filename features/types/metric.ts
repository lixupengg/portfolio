import { FORMAT_TYPE } from "./format";

export enum METRIC_CARD_VIEW {
    DEFAULT = 'DEFAULT',
    CHART = 'CHART',
    CARD_CHART = 'CARD_CHART',
    SMALL = 'SMALL',
}

export const METRIC_CARD_VIEW_DROPDOWN_LIST = [
    {
        label: 'Compact',
        value: METRIC_CARD_VIEW.DEFAULT,
    },
    {
        label: 'Chart',
        value: METRIC_CARD_VIEW.CHART,
    },
    {
        label: 'Expanded',
        value: METRIC_CARD_VIEW.CARD_CHART,
    },
];

export type MetricDisplaySetting = {
    id: number;
    name: string;
    description: string;
    formatType: FORMAT_TYPE;
    category: string;
    viewMode?: METRIC_CARD_VIEW;
}