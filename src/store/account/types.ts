export enum AccountReduxActionTypes {
	LOGIN = 'ACCOUNT_LOGIN',
	SIGNOUT = 'ACCOUNT_SIGNOUT',
	SIGNUP = 'ACCOUNT_SIGNUP',
}

export interface AccountState {
	authToken: string;
	accountRoles: string[];
}

interface AccountLoginAction {
	type: AccountReduxActionTypes.LOGIN,
	payload: { firstField: string, secondField: string }
}

interface AccountSignoutAction {
	type: AccountReduxActionTypes.SIGNOUT,
	payload: null
}

interface AccountSignupAction {
	type: AccountReduxActionTypes.SIGNUP,
	payload: {
		username: string,
		email: string,
		inviteToken: string,
		password: string
	}
}

export type AccountReduxActions = 
	AccountLoginAction 
	| AccountSignoutAction
	| AccountSignupAction;