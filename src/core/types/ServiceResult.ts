export interface IMapFns<T, E, TResult, EResult> {
	success: (a: T) => TResult;
	failure: (e: E) => EResult;
}

export class ServiceResult<TSuccess, TError> {
	static Success<T>(success: T) {
		return new ServiceResult<T, any>(success, null, false);
	}

	static Failure<T>(error: T) {
		return new ServiceResult<any, T>(null, error, true);
	}

	constructor(
		private success: TSuccess,
		private error: TError,
		private isError: boolean,
	) {}

	get hasError() {
		return this.isError;
	}

	getFault() {
		return this.error;
	}

	getSuccess() {
		return this.success;
	}

	when<T, E>(mapFns: IMapFns<TSuccess, TError, T, E>) {
		return this.isError
		? mapFns.failure(this.error)
		: mapFns.success(this.success);
	}
}
