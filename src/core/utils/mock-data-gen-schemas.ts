import { IProject, IExercise, ISession, IMessage, IUser, IInvite, IIdea, DataTypes } from "../types/data-type-definitions";

export type IDataType = DataTypes;

type IDataSetExampleType = {
	[key in IDataType]: any;
}

export interface IDataSetExample extends IDataSetExampleType {
	project: IProject;
	exercise: IExercise;
	session: ISession;
	message: IMessage;
	user: IUser;
	invite: IInvite;
	idea: IIdea;
}

export const mockDataGenSchemas: IDataSetExample = {
	project: {
		id: '',
		title: '',
		description: '',
		repo: 'http://www.github.com/',
		type: '',
		features: ['feature-1', 'feature-2', 'feature-3'],
	},
	session: {
		id: '',
		visibility: 'global',
		access: 'public',
		updatedAt: '',
		projectId: 'project-id-0',
		creatorId: '',
		title: '',
		participants: ['user-id-0', 'user-id-1'],
		description: '',
		type: '',
		category: '',
		tags: '',
		userIds: ['user-id-0', 'user-id-1', 'user-id-2'],
	},
	exercise: {
		id: '',
		title: '',
		description: '',
		type: '',
		repo: 'http://www.github.com/',
	},
	message: {
		id: '',
		content: '',
		author:'',
		description: '',
		title: '',
	},
	user: {
		id: '',
		username: '',
	},
	invite: {
		id: '',
		title: '',
		sender: '',
		receiver: '',
		message: '',
		sessionId: '',
	},
	idea: {
		id: '',
		title: '',
		creatorId: '',
		tags: '',
		category: '',
		type: '',
		description: '',
	}
}
