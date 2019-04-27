import React from 'react';
import { switchcase } from './utils';
import { IDataType } from '../seed/data';

export type IComponentType =
	IDataType |
	'flex' |
	'default';

export type IComponentDisplayType =
	'default' |
	'flex' |
	'custom';

export function getMatchingComponent(componentMap: any, type: string) {
	const Component = switchcase(componentMap)(<div/>)(type);
	return Component;
}
