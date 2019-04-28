import { ProfileReduxActions, ProfileState, ProfileReduxActionTypes } from "./types";

const profileState: ProfileState = {
	status: 'hello world',
}

export type ProfileStoreState = typeof profileState;

export const profileReducer = (state: ProfileState = profileState, action: ProfileReduxActions): ProfileState => {
	switch(action.type) {
		case ProfileReduxActionTypes.UPDATE_STATUS:
			return { status: action.payload };
		default:
			return state;
	}
}
