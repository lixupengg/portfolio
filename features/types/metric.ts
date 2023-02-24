import { FORMAT_TYPE } from "./format";

export enum METRIC_CARD_VIEW {
    DEFAULT = 'DEFAULT',
    CHART = 'CHART',
    CARD_CHART = 'CARD_CHART',
}

export type MetricDisplaySetting = {
    id: number;
    name: string;
    description: string;
    formatType: FORMAT_TYPE;
    viewMode?: METRIC_CARD_VIEW;
}