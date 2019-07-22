import { BaseObjectId } from './../../core/types/BaseObject';
import { SessionReduxActionTypes } from "./types";
import { ISession } from "../../core/types/data-type-definitions";

export function createSession(newSession: ISession) {
	return {
		type: SessionReduxActionTypes.CREATE_SESSION,
		payload: newSession,
	}
}

export function deleteSession(sessionId: BaseObjectId) {
	return {
		type: SessionReduxActionTypes.DELETE_SESSION,
		payload: sessionId,
	}
}
