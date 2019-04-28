import { ProfileReduxActions, ProfileReduxActionTypes } from "./types";

export function updateStatus (status: string): ProfileReduxActions {
	return {
		type: ProfileReduxActionTypes.UPDATE_STATUS,
		payload: status,
	}
}
