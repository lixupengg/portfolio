import { MetricDisplaySetting, FORMAT_TYPE, METRIC_CARD_VIEW } from "@stonksfi/types";

export const METRICS_LIST: MetricDisplaySetting[] = [
    {
      id: 1,
      name: "Interest Rate",
      description: "The interest rate of the loan",
      formatType: FORMAT_TYPE.PERCENT,
    },
    {
      id: 2,
      name: "Total Balance",
      description: "The total balance of the account",
      formatType: FORMAT_TYPE.PRETTY_CURRENCY,
    },
    {
      id: 3,
      name: "Credit Score",
      description: "The credit score of the borrower",
      formatType: FORMAT_TYPE.NUMBER,
      viewMode: METRIC_CARD_VIEW.CARD_CHART,
    },
    {
      id: 4,
      name: "Loan Amount",
      description: "The amount of the loan",
      formatType: FORMAT_TYPE.PRETTY_CURRENCY,
    },
    {
      id: 5,
      name: "Monthly Payment",
      description: "The monthly payment of the loan",
      formatType: FORMAT_TYPE.PRETTY_CURRENCY,
    },
    {
      id: 6,
      name: "Loan Term",
      description: "The term of the loan in months",
      formatType: FORMAT_TYPE.NUMBER,
    },
    {
      id: 7,
      name: "Loan-to-Value Ratio",
      description: "The loan-to-value ratio of the property",
      formatType: FORMAT_TYPE.PERCENT,
    },
    {
      id: 8,
      name: "Debt-to-Income Ratio",
      description: "The debt-to-income ratio of the borrower",
      formatType: FORMAT_TYPE.PERCENT,
    },
    {
      id: 9,
      name: "Origination Fee",
      description: "The origination fee charged by the lender",
      formatType: FORMAT_TYPE.PRETTY_CURRENCY,
    },
    {
      id: 10,
      name: "Annual Income",
      description: "The annual income of the borrower",
      formatType: FORMAT_TYPE.PRETTY_CURRENCY,
    },
  ];

export const getMetricDisplaySetting = 
    (id: number): MetricDisplaySetting | undefined => {
        return METRICS_LIST.find((metric) => metric.id === id);
}