import { FORMAT_TYPE } from "./format";

export type MetricDisplaySetting = {
    metricId: number;
    name: string;
    description: string;
    formatType: FORMAT_TYPE
}