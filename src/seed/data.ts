import { IComponentType } from '../helpers/componentHelpers';
import { switchcaseF } from '../helpers/utils';

export interface IBaseObject {
	id: string;
}

export interface IProject extends IBaseObject {
	title: string;
	description: string;
	type: string;
}

export function getProjects(count: number = 5): IProject[] {
	const results: IProject[] = [];
	for (let i = 0; i < count; i++) {
		results.push({
			description: `project-desc-${i}`,
			id: `p-${i}`,
			title: `project-title-${i}`,
			type: `project-type-${i}`,
		});
	}
	return results;
}

export interface ISession extends IBaseObject {
	title: string;
	description: string;
}

export function getSessions(count: number = 5): ISession[] {
	const results: ISession[] = [];
	for (let i = 0; i < count; i++) {
		results.push({
			description: `session-desc-${i}`,
			id: `s-${i}`,
			title: `session-title-${i}`,
		});
	}
	return results;
}

export type IDataType =
	'project' | 'session';

export const dataMap = {
	project: getProjects,
	session: getSessions,
};

export function getItems<T>(type: IComponentType, count: number): T[] {
	// const results = switchcaseF(dataMap)(type)(count);
	const resultItems = switchcaseF(dataMap)(() => [])(type)(count);
	console.log(resultItems);
	return (resultItems && resultItems.length > 0) ? resultItems : [];
}
