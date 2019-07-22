import React from 'react';
import { switchcase } from '../core/utils/validation-helpers';
import { RightMenuCompRefNames, rightMenuComponentMap, sessionPaneComponentMap } from '../componentMaps/componentMaps';
import { SessionPaneSelection } from '../store/viewContext/types';
import { IDataType } from '../core/utils/mock-data-gen-schemas';

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

export function getSessionPaneComponent(componentRefName: SessionPaneSelection): any {
	const Component = sessionPaneComponentMap[componentRefName];
	return Component;
}