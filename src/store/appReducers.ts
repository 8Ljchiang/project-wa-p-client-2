import { combineReducers } from 'redux';

import { inviteReducer } from './invite/reducers';
import { profileReducer } from './profile/reducers';

export const rootReducer = combineReducers({
	invite: inviteReducer,
	profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;