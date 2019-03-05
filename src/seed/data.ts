export interface IBaseObject {
	id: string;
}

export interface IProject extends IBaseObject {
	title: string;
	description: string;
	type: string;
}

// export const projects: IProject[] = [
// 	{
// 		description: 'project-desc-1',
// 		id: 1,
// 		title: 'project-title-1',
// 		type: 'project-type-1',
// 	},
// ];

export function getProjects(count: number): IProject[] {
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

export function getSessions(count: number): ISession[] {
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
