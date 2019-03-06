import { switchcaseF } from '../helpers/utils';

export type IDataType =
	'project' | 'session';

export type IDataMap = {
	[key in IDataType]: any;
}

// Used for GraphQL Queries;
// export const dataQueryMap = {

// }

export const dataMap: IDataMap = {
	project: getProjects,
	session: getSessions,
};

export interface IBaseObject {
	id: string;
}

export interface IProject extends IBaseObject {
	title: string;
	description: string;
	type: string;
}

export interface ISession extends IBaseObject {
	title: string;
	description: string;
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

export function getItems<T>(type: IDataType, count: number): T[] {
	// const results = switchcaseF(dataMap)(type)(count);
	const resultItems = switchcaseF(dataMap)(() => [])(type)(count);
	// console.log(resultItems);
	return (resultItems && resultItems.length > 0) ? resultItems : [];
}
