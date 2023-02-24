import React from 'react';
import axios from 'axios';

export enum RequestStatus {
	IDLE = 'idle',
	LOADING = 'loading',
	ERROR = 'error',
	SUCCESS = 'success'
}

export interface RequestProps {
	url: string;
	method: 'get' | 'post' | 'put' | 'delete';
	params?: any;
	initialData?: any;
	initialState?: RequestStatus;
}

export interface RequestResponse<T> {
	data: T;
	error: string;
	status: RequestStatus;
}

export function useRequest(props: RequestProps) {
	const {
		url,
		params = {},
		method,
		initialData = [],
		initialState = RequestStatus.IDLE
	} = props;
	const [data, setData] = React.useState<any>(initialData);
	const [error, setError] = React.useState<string>('');
	const [status, setStatus] = React.useState<RequestStatus>(initialState);

	const internalFetch = React.useCallback(async () => {
		setStatus(RequestStatus.LOADING);
		try {
			const response = await axios({
				url,
				method,
				params
			});
			setData(response.data);
			setStatus(RequestStatus.SUCCESS);
		} catch (error: any) {
			setError(error);
			setStatus(RequestStatus.ERROR);
		}
	}, [url, method]);

	React.useEffect(() => {
		internalFetch();
	}, [url, method]);

	return { data, error, status };
}
