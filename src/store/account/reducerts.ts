import { appConfig } from './../../configuration/appConfig';
import { AccountState, AccountReduxActions, AccountReduxActionTypes } from "./types";
import { LogService } from "../../core/services/LogService";
import { catchErrorInReduxReducer } from "../../core/utils/catchers";
import { LoginInfo, SignupInfo } from "./actions";
import { MockAccountService, IAccountService } from '../../core/services/mocks/MockAccountService';

const defaultAccountState: AccountState = {
	authToken: '',
	accountRoles: [],
	profile: {
		username: '',
	}
}

const loginReducer = (initialState: AccountState, loginInfo: LoginInfo) => {
	const accountService: IAccountService = appConfig.useMockDataService ? new MockAccountService() : new MockAccountService();
	const networkResult = accountService.login(loginInfo);
	if (networkResult.errors && networkResult.errors.length > 0) {
		LogService.error(new Error(networkResult.errors[0]), `AccountService.login`);	
	}
	if (networkResult.data && Array.isArray(networkResult.data)) {
		return Object.assign({}, initialState, networkResult.data);
	}
	return initialState;
}

const signout = () => {
	return defaultAccountState;
}

const signup = (initialState: AccountState, signupInfo: SignupInfo) => {
	const accountService: IAccountService = appConfig.useMockDataService ? new MockAccountService() : new MockAccountService();
	const networkResult = accountService.signup(signupInfo);
	if (networkResult.errors && networkResult.errors.length > 0) {
		LogService.error(new Error(networkResult.errors[0]), `AccountService.signup`);	
	}
	if (networkResult.data && Array.isArray(networkResult.data)) {
		return Object.assign({}, initialState, networkResult.data);
	}
	return initialState;
}

export function accountReducer(
	state: AccountState = defaultAccountState,
	action: AccountReduxActions
) {
	LogService.info(`AccountReducer: ${action.type}`);
	switch(action.type) {
		case AccountReduxActionTypes.LOGIN:
			return catchErrorInReduxReducer(loginReducer, state, `AccountReducer: ${AccountReduxActionTypes.LOGIN}`)(state, action.payload);
		case AccountReduxActionTypes.SIGNUP:
			return catchErrorInReduxReducer(signup, state, `AccountReducer: ${AccountReduxActionTypes.SIGNUP}`)(state, action.payload);
		case AccountReduxActionTypes.SIGNOUT:
			return signout();
		default:
			return state;
	}
}
