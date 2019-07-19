export enum DataTypes {
	Session = 'session',
	Project = 'project',
	Exercise = 'exercise',
	SessionInvite = 'invite',
	Idea = 'idea',
	User = 'user',
	Messasge = 'message'
}


export type BaseObjectId = string;

export interface IBaseObject {
	id: BaseObjectId;
}

export interface IProject extends IBaseObject {
	title: string;
	description: string;
	type: string;
	repo: string;
	features: string[];
}

export interface IInvite extends IBaseObject {
	title: string;
	sender: string;
	receiver: string;
	sessionId: string;
	message: string;
}

export interface ISession extends IBaseObject {
	title: string;
	description: string;
	visibility: string;
	access: string;
	updatedAt: string;
	projectId: string;
	creatorId: string;
	participants: string[];
	type: string;
	category: string;
	tags: string;
	userIds: string[];
}

export interface IExercise extends IBaseObject {
	title: string;
	description: string;
	type: string;
	repo: string;
}

export interface IUser extends IBaseObject {
	username: string;
}

export interface IMessage extends IBaseObject {
	title: string; 
	description: string;
	content: string;
	author: string;
}

export interface IIdea extends IBaseObject {
	title: string;
	description: string;
	creatorId: string;
	tags: string;
	category: string;
	type: string;
}
