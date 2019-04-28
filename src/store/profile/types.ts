export enum ProfileReduxActionTypes {
	UPDATE_STATUS = 'U_STATUS',
};

export interface ProfileState {
	status: string;
}

interface UpdateStatusAction {
	type: ProfileReduxActionTypes.UPDATE_STATUS,
	payload: string;
}

export type ProfileReduxActions = UpdateStatusAction;