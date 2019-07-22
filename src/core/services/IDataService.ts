import { INetworkResult } from '../types/NetworkResult';
import { BaseObjectId } from '../types/data-type-definitions';

export interface IDataService<T> {
	create(partialItem: Partial<T>): INetworkResult<T | null>;
	read(id: BaseObjectId): INetworkResult<T | null>;
	readAll(): INetworkResult<T[] | null>;
	update(id: BaseObjectId, item: T): INetworkResult<T | null>;
	patch(id: BaseObjectId, partial: Partial<T>): INetworkResult<T | null>;
	delete(id: BaseObjectId): INetworkResult<T | null>;
}

