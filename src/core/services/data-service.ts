import { INetworkResult } from './../types/NetworkResult';

export interface IDataService<T> {
	read(itemId: string): INetworkResult<T>;
	readAll(): INetworkResult<T[]>;
	update();
}

export class DataService {
	static services: { [key: string]: IDataService<any> } = {};

	static setDataService(key: string, value: any): void {
		this.dataMap[key] = value;
	}

	static getData(key: string): any {
		return this.dataMap[key];
	}
}
