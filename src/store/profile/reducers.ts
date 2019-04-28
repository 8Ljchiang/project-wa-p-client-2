import { UPDATE_STATUS } from "./types";

const profileState = {
	status: 'hello world',
}

export type ProfileStoreState = typeof profileState;

export const profileReducer = (state = profileState, action: any) => {
	switch(action.type) {
		case UPDATE_STATUS:
			return { status: action.payload };
		default:
			return state;
	}
}
