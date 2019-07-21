import { AccountState, AccountReduxActions, AccountReduxActionTypes } from "./types";
import { LogService } from "../../core/services/LogService";
import { catchErrorInReduxReducer } from "../../core/utils/catchers";
import { LoginInfo, SignupInfo } from "./actions";

const defaultAccountState: AccountState = {
	authToken: '',
	accountRoles: []
}

const loginReducer = (loginInfo: LoginInfo) => {

}

const signout = () => {
	return defaultAccountState;
}

const signup = (signupInfo: SignupInfo) => {

}

export function accountReducer(
	state: AccountState = defaultAccountState,
	action: AccountReduxActions
) {
	LogService.info(`AccountReducer: ${action.type}`);
	switch(action.type) {
		case AccountReduxActionTypes.LOGIN:
			return catchErrorInReduxReducer(loginReducer, state, `AccountReducer: ${AccountReduxActionTypes.LOGIN}`)(state, action.payload);
		case AccountReduxActionTypes.SIGNOUT:
			return signout();
		case AccountReduxActionTypes.SIGNUP:
			return state;
		default:
			return state;
	}
}