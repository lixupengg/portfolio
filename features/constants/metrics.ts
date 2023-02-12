import { MetricDisplaySetting, FORMAT_TYPE } from "@stonksfi/types";

export const METRICS_LIST: MetricDisplaySetting[] = [
    {
        metricId: 1,
        name: "Interest Rate",
        description: "The interest rate of the loan",
        formatType: FORMAT_TYPE.PERCENT,
    },
]

export const getMetricDisplaySetting = 
    (metricId: number): MetricDisplaySetting | undefined => {
        return METRICS_LIST.find((metric) => metric.metricId === metricId);
}