export type NewsSource = {
    newsId: number;
    title: string;
    description: string;
    url: string;
}

export type Data = {
    name: string;
    value: any;
    description?: string;
    effectiveTime?: number;
    sources?: NewsSource[];
}

export type MetricData = {
    metricId: number;
    current: Data;
    new: Data;
    old: Data;
}