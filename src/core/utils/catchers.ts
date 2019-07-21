import { ServiceResult } from './../types/ServiceResult';
import { LogService } from '../services/LogService';
import { INetworkResult } from '../types/NetworkResult';

export function logServiceResultErrorHoc(serviceFunction: (args: any) => ServiceResult<any, any>, errorContext: string): (args: any) => ServiceResult<any, any> {
	const newServiceFunction = (context: any) => {
		const serviceResult = serviceFunction(context);
		if (serviceResult && serviceResult.hasError) {
			LogService.error(serviceResult.getFault(), errorContext);
		}
		return serviceResult;
	}
	return newServiceFunction;
}

export function logNetworkResultErrorHoc(networkFunction: (args: any) => INetworkResult<any>, errorContext: string): (args: any) => INetworkResult<any> {
	const newNetworkFunction = (context: any) => {
		const networkResult = networkFunction(context);
		if (networkResult && networkResult.errors && networkResult.errors.length > 0) {
			LogService.error(new Error(networkResult.errors[0]), errorContext);
		}
		return networkResult;
	}
	return newNetworkFunction;
}

export function catchErrorInReduxReducer(func: (initialState: any, funcArgs: any) => any, failureResponse: any, errorContext: string): (state: any, args: any) => any {
	const newFunction = (state: any, args: any) => {
		try {
			return func(state , args);
		} catch (err) {
			LogService.error(err, errorContext);
			return failureResponse;
		}
	}
	return newFunction;
}