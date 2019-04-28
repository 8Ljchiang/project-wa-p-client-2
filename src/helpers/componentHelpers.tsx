import React from 'react';
import { switchcase } from './utils';
import { IDataType } from '../seed/data';
import { RightMenuCompRefNames, rightMenuComponentMap } from '../componentMaps/componentMaps';

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

export function getRightMenuComponent(componentRefName: RightMenuCompRefNames): any {
	const Component = rightMenuComponentMap[componentRefName];
	return Component;
}