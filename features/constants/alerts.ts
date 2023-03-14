export const CONNECTOR_OPTIONS: { label: string; value: string }[] = [
    {
        label: 'And',
        value: 'and',
    },
    {
        label: 'Or',
        value: 'or',
    },
];

export type OPERATOR_TYPE = '>=' | '>' | '<=' | '<' | '==' | '!=' | 'changes' | 'increases' | 'decreases';

export const OPERATOR_OPTIONS: { label: string; value: string }[] = [
    {
        label: 'Greater than or equal to',
        value: '>=',
    },
    {
        label: 'Greater than',
        value: '>',
    },
    {
        label: 'Less than or equal to',
        value: '<=',
    },
    {
        label: 'Less than',
        value: '<',
    },
    {
        label: 'Equal to',
        value: '==',
    },
    {
        label: 'Not equal to',
        value: '!=',
    },
    {
        label: 'Changes',
        value: 'changes',
    },
    {
        label: 'Increases',
        value: 'increases',
    },
    {
        label: 'Decreases',
        value: 'decreases',
    },
];