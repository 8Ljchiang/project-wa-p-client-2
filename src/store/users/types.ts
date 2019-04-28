import { IUser } from "../../seed/data";

export enum UserReduxActionTypes {
	CREATE_USER = 'C_USER',
}

export interface UsersState {
	users: IUser[];
}

interface CreateUserAction {
	type: UserReduxActionTypes.CREATE_USER;
	payload: IUser;
}

export type UserReduxActions = CreateUserAction;
