import { combineReducers } from 'redux';

import { inviteReducer } from './invite/reducers';
import { profileReducer } from './profile/reducers';
import { ideaReducer } from './idea/reducers';
import { userReducer } from './users/reducer';
import { projectsReducer } from './project/reducers';
import { sessionsReducer } from './session/reducers';
import { exerciseReducer } from './exercise/reducers';
import { messagesReducer } from './message/reducers';

export const rootReducer = combineReducers({
	invite: inviteReducer,
	profile: profileReducer,
	idea: ideaReducer,
	user: userReducer,
	project: projectsReducer,
	session: sessionsReducer,
	exercise: exerciseReducer,
	message: messagesReducer
});

export type ReduxStore = ReturnType<typeof rootReducer>;