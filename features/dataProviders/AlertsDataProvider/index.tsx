import React from 'react';
import { useRequest, RequestProps, RequestStatus, RequestResponse } from '@stonksfi/hooks/useRequest';
import { useAlertsContext, useDashboardMetaContext } from '@stonksfi/hooks';
import { Alert, MetricDisplaySetting } from '@stonksfi/types';
import { ALERTS } from './FAKE_DATA';

export interface AlertsDataProviderProps {
  children: any;
  alertsDataRequest: RequestProps;
  isMock?: boolean;
}

export interface AlertsDataProviderState {
  alerts: Alert[];
  updateAlerts: (alerts: Alert[]) => void;
  alertBeingEdited: Alert | null;
  updateAlertBeingEdited: (alert: Alert) => void;
  metricsMeta: MetricDisplaySetting[];
}

const AlertsDataProvider = (props: AlertsDataProviderProps) => {
    const { children, alertsDataRequest, isMock } = props;
    const { alerts, updateAlerts, alertBeingEdited, updateAlertBeingEdited } = useAlertsContext();
    const { metricsMeta } = useDashboardMetaContext();
    const alertResponseData = useRequest({
      ...alertsDataRequest,
      params: {
        ...alertsDataRequest.params,
      },
    });
  /* ======================================== MOCK DATA ======================================== */
    if (isMock) {
      const MOCK_DATA = {
        alerts,
        updateAlerts,
        alertBeingEdited,
        updateAlertBeingEdited,
        metricsMeta
      };

      return React.cloneElement(children, {...MOCK_DATA})
    }
    /* ========================================================================================= */

    return React.cloneElement(children, {
       alertResponseData, alerts, updateAlerts, alertBeingEdited, updateAlertBeingEdited, metricsMeta })
}

export default AlertsDataProvider;