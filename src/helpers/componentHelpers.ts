import { switchcase } from './utils';

export type IComponentType =
	'project' |
	'session' |
	'default';

export function getMatchingComponent(componentMap: any, type: IComponentType = 'default') {
	const Component = switchcase(componentMap)(null)(type);
	return Component;
}
