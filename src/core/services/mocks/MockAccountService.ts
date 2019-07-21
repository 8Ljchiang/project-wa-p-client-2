import { NetworkResultBuilder } from './../NetworkResultBuilder';
import { LoginInfo, SignupInfo } from './../../../store/account/actions';
import { INetworkResult } from '../../types/NetworkResult';

export interface IAccountService {
	login(info: LoginInfo): INetworkResult<LoginResponse>;
	signup(info: SignupInfo): INetworkResult<SignupResponse>;
}

interface LoginResponse {
	authToken: string; 
	accountRoles: string[];
	profile: {
		username: string
	}
}

interface SignupResponse {
	success: boolean;
}

export class MockAccountService {
	constructor() {}

	login(loginInfo: LoginInfo): INetworkResult<LoginResponse> {
		const authToken = 'abc123';
		const accountRoles = ['Basic', 'Admin'];
		const data = {
			authToken,
			accountRoles,
			profile: {
				username: loginInfo.firstField
			}
		}
		return NetworkResultBuilder.buildResult(data, []);
	}

	signup(signupInfo: SignupInfo): INetworkResult<SignupResponse> {
		return NetworkResultBuilder.buildResult({ success: true }, []);
	}
}
