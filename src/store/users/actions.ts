import { UserReduxActionTypes } from "./types";
import { IUser } from "../../seed/data";

export function createUser(newUser: IUser) {
	return {
		type: UserReduxActionTypes.CREATE_USER,
		payload: newUser,
	}
}
