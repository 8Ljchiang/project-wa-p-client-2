import { INetworkResult } from "../types/NetworkResult";

export class NetworkResultBuilder {
	static buildResult<T>(data: T, errors: string[]): INetworkResult<T> {
		return {
			data,
			errors,
		}
	}
}