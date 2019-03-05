import { switchcase } from './utils';
import { IDataType } from '../seed/data';

export type IComponentType =
	IDataType |
	'default';

export type IComponentDisplayType =
	'default' |
	'custom';

export function getMatchingComponent(componentMap: any, type: string) {
	const Component = switchcase(componentMap)(null)(type);
	return Component;
}
