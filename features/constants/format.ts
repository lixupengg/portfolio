import { FORMAT_TYPE } from "@stonksfi/types";

export const format = (value: any, formatType: FORMAT_TYPE | undefined) => {
    if (!value) {
        return 'N/A';
    }
    switch (formatType) {
        case FORMAT_TYPE.TEXT:
            return value;
        case FORMAT_TYPE.DATE:
            /* Convert number unix timestamp to "12 Jan 2023" format */
            return new Date(value * 1000).toLocaleDateString(
                'en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        case FORMAT_TYPE.DATE_TIME:
            /* Convert number unix timestamp to "12 Jan 2023 12:00:00" format */
            return new Date(value * 1000).toLocaleString(
                'en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric',
                    minute: 'numeric', second: 'numeric' });
        case FORMAT_TYPE.DATE_TIME_12H:
            /* Convert number unix timestamp to "12 Jan 2023 12:00 PM" format */
            return new Date(value * 1000).toLocaleString(
                'en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric',
                    minute: 'numeric', second: 'numeric', hour12: true });
        case FORMAT_TYPE.PRETTY_INTEGER:
            return value.toLocaleString('en-US', { notation: 'compact' });
        case FORMAT_TYPE.INTEGER:
            return value.toLocaleString('en-US', { maximumFractionDigits: 0 });
        case FORMAT_TYPE.INTEGER_TWO_DECIMAL:
            return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
        case FORMAT_TYPE.PERCENT:
            return value.toLocaleString('en-US', { style: 'percent', maximumFractionDigits: 2 });
        case FORMAT_TYPE.PRETTY_CURRENCY:
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', notation: 'compact' });
        case FORMAT_TYPE.CURRENCY:
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        case FORMAT_TYPE.CURRENCY_TWO_DECIMAL:
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
        default:
            return value;
    }
}