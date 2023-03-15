import { OPERATOR_TYPE } from "@stonksfi/constants";
import { MetricDisplaySetting } from "./metric";

export type AlertRule = {
    id: number;
    metric: MetricDisplaySetting;
    operator: OPERATOR_TYPE;
    value: number;
    connector?: 'and' | 'or';
}

export type NullableAlertRule = Partial<AlertRule>;

export interface Alert {
    id: number;
    title: string;
    rules: AlertRule[];
}