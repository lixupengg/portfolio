import * as React from 'react';
import { AlertsEditorView } from '@stonksfi/views';
import { RequestProps } from '@stonksfi/hooks/useRequest';
import AlertsDataProvider from '@stonksfi/dataProviders/AlertsDataProvider';
import { ModuleConfig } from '../types';

export interface AlertsEditorProps extends ModuleConfig {
	alertsDataRequest: RequestProps;
}

const AlertsEditor = (props: AlertsEditorProps) => {
	const { alertsDataRequest } = props;
	return (
		<AlertsDataProvider alertsDataRequest={alertsDataRequest} isMock>
			<AlertsEditorView />
		</AlertsDataProvider>
	);
};

export default AlertsEditor;
