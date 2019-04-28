import { SessionReduxActionTypes } from "./types";
import { BaseObjectId, ISession } from "../../seed/data";

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
