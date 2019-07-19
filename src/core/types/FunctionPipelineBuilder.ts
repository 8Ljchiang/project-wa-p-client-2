import { ServiceResult } from './ServiceResult';

// export type ResultFunction = <T>(a: any | Result<any, any>) => T | Result<any, any>;
// Maybe this needs to be a service too.
export type GeneralFunction = <T>(a: T) => T;
export type ResultFunction = (a: any) => ServiceResult<any, any>;

export class FunctionPipelineBuilder {
	// static pipe<T>(...fns: ResultFunction[]): T | Result<any, any> {
	static pipe<T>(fn1: GeneralFunction, ...fns: GeneralFunction[]) {
	return fns.reduce((prevFn, nextFn) => {
		return (result) => nextFn(prevFn(result));
	});
}

	static pipeWithAnyStartInput<A extends any[], B>(
		fn1: (...args: A) => B,
		...fns: Array<(a: B) => B>
	) {
		const piped = fns.reduce(
			(prevFn, nextFn) => (result: B) => nextFn(prevFn(result)),
			(value) => value,
		);
		return (...args: A) => piped(fn1(...args));
	}

	static pipeWithResultErrorStop(fn1: ResultFunction, ...fns: ResultFunction[]) {
		return fns.reduce((prevFn, nextFn) => {
			return (result) => {
			const temp = prevFn(result);
			if (temp.hasError) {
				return temp;
			}
			return nextFn(temp);
			};
		});
	}

	static pipeWithResultErrorStopForAnyStartInput<A extends any[], B>(
		fn1: (...args: A) => B,
		...fns: Array<(a: B) => B>
	) {
		const piped = fns.reduce(
			(prevFn, nextFn) => (result: B) => nextFn(prevFn(result)),
			(value) => value,
		);
		return (...args: A) => piped(fn1(...args));
	}
}
