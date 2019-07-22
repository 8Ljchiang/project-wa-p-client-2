import { NetworkResultBuilder } from '../NetworkResultBuilder';
import { IBaseObject } from '../../types/data-type-definitions';
import { IDataService } from '../IDataService';
import { INetworkResult } from '../../types/NetworkResult';

export class MockDataService<T extends IBaseObject> implements IDataService<T> {
	constructor(private dataStore: T[]) {}

	create(partialItem: Partial<T>): INetworkResult<T | null> {
		const newItem: any = {
			...partialItem,
			id: this.dataStore.length.toString()
		}
		this.dataStore.push(newItem);
		return NetworkResultBuilder.buildResult<T>(newItem, []);
	}	
	read(id: string): INetworkResult<T | null> {
		const filteredData = this.dataStore.filter(item => item.id === id);
		if (filteredData && filteredData.length > 0) {
			const foundItem = filteredData[0];
			return NetworkResultBuilder.buildResult(foundItem, []);
		}
		return NetworkResultBuilder.buildResult(null, ['No item found.']);
	}
	readAll(): INetworkResult<T[] | null> {
		return NetworkResultBuilder.buildResult(this.dataStore, []);
	}
	update(id: string, item: T): INetworkResult<T | null> {
		const itemIndex = this.dataStore.map(item => item.id).indexOf(id);
		if (itemIndex < 0) {
			return NetworkResultBuilder.buildResult(null, ['Item update failed.'])
		}
		this.dataStore[itemIndex] = item;
		return NetworkResultBuilder.buildResult(this.dataStore[itemIndex], []);
	}
	patch(id: string, partial: Partial<T>): INetworkResult<T | null> {
		const response = this.read(id);
		if (response.errors.length > 0) {
			return response;
		}
		const newItem: any = {
			...response.data,
			...partial
		}
		return this.update(id, newItem);
	}
	delete(id: string): INetworkResult<T | null> {
		const response = this.read(id);
		if (response.errors.length > 0) {
			return response;
		}
		this.dataStore = this.dataStore.filter(item => item.id !== id);
		return NetworkResultBuilder.buildResult(response.data, []);
	}
}
