import React from 'react';
import { useRequest, RequestProps, RequestStatus, RequestResponse } from '@stonksfi/hooks/useRequest';
import { useDashboardMetaContext } from '@stonksfi/hooks';
import { MetricData, MetricDisplaySetting } from '@stonksfi/types';
import { METRIC_DATA } from './FAKE_DATA';

export interface MetricListDataProviderProps {
  children: any;
  metricDataRequest: RequestProps;
  isMock?: boolean;
}

export interface MetricListDataProviderState {
  metricResponseData: RequestResponse<MetricData[]>;
  dashboardConfig: MetricDisplaySetting[];
  isEditingConfig: boolean;
}

const MetricListDataProvider = (props: MetricListDataProviderProps) => {
    const { children, metricDataRequest, isMock } = props;
    const { dashboardConfig, isEditingConfig, updateDashboardConfig } = useDashboardMetaContext();
    const metricResponseData = useRequest({
      ...metricDataRequest,
      params: {
        ...metricDataRequest.params,
        metricIds: dashboardConfig?.map((metric) => metric.id),
      },
    });
  /* ======================================== MOCK DATA ======================================== */
    if (isMock) {
      const MOCK_DATA = {
        metricResponseData: {
          data: METRIC_DATA,
          error: null,
          status: RequestStatus.SUCCESS,
        },
        dashboardConfig,
        isEditingConfig,
        updateDashboardConfig,
      };

      return React.cloneElement(children, {...MOCK_DATA})
    }
    /* ========================================================================================= */

    return React.cloneElement(children, { metricResponseData, isEditingConfig, dashboardConfig, updateDashboardConfig })
}

export default MetricListDataProvider;