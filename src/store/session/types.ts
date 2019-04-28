import { ISession, BaseObjectId } from "../../seed/data";

export enum SessionReduxActionTypes {
	CREATE_SESSION = 'C_SESS',
	DELETE_SESSION = 'D_SESS',
}

export interface SessionsState {
	sessions: ISession[];
}

interface CreateSessionAction {
	type: SessionReduxActionTypes.CREATE_SESSION,
	payload: ISession,
}

interface DeleteSessionAction {
	type: SessionReduxActionTypes.DELETE_SESSION,
	payload: BaseObjectId,
}

export type SessionReduxActions = CreateSessionAction | DeleteSessionAction;
