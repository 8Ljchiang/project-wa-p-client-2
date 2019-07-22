import { ISession, BaseObjectId } from "../../core/types/data-type-definitions";

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
