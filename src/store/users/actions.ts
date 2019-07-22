import { UserReduxActionTypes } from "./types";
import { IUser } from "../../core/types/data-type-definitions";

export function createUser(newUser: IUser) {
	return {
		type: UserReduxActionTypes.CREATE_USER,
		payload: newUser,
	}
}
