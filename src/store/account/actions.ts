import { AccountReduxActionTypes } from "./types";

export type LoginInfo = {
	firstField: string,
	secondField: string
}

export type SignupInfo = {
	username: string,
	email: string,
	password: string,
	inviteToken: string
}

export function login(loginInfo: LoginInfo) {
	return {
		type: AccountReduxActionTypes.LOGIN,
		payload: loginInfo
	}
}

export function signout() {
	return {
		type: AccountReduxActionTypes.SIGNOUT,
		payload: null,
	}
}

export function signup(
	signupInfo: SignupInfo
) {
	return {
		type: AccountReduxActionTypes.SIGNUP,
		payload: signupInfo
	}
}