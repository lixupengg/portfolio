export enum FORMAT_TYPE {
    TEXT = 'text',
    DATE=  'date',
    DATE_TIME = 'date-time',
    DATE_TIME_12H = 'date-time-12h',
    PRETTY_INTEGER = 'pretty-number', // 1M, 1B, 1T
    INTEGER = 'integer', // 1,000,000
    INTEGER_TWO_DECIMAL = 'integer-two-decimal', // 1,000,000.00
    PERCENT = 'percent', // 5.55%
    PRETTY_CURRENCY = 'pretty-currency', // $1M, $1B, $1T
    CURRENCY = 'currency', // $1,000,000
    CURRENCY_TWO_DECIMAL = 'currency-two-decimal', // $1,000,000.00
}
