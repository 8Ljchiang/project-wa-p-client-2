export enum ViewContextActionTypes {
	SET_MENU_SELECTION = 'U_VC_MENU',
	SET_SESSION_PANE_SELECTION = 'U_VC_S_PANE',
}

export enum MenuSelection {
	Profile = 'prof',
	Invites = 'invi',
	Ideas = 'idea',
	Projects = 'proj',
	Sessions = 'sess',
	Exercises = 'exer',
	ProjectRequests = 'rproj',
	JoinedSessions = 'jsess',
	FollowedExercises = 'fexer',
	FollowedUsers = 'fuser',
	Messages = 'mess',
}

export enum SessionPaneSelection {
	EventTracking = 'event',
	FeatureTracking = 'feature',
	SessionDetails = 'details',
	SessionSummary = 'summary',
}

export interface ViewContextState {
	menuSelection: MenuSelection;
	sessionPaneSelection: SessionPaneSelection;
}

interface SetMenuSelectionAction {
	type: ViewContextActionTypes.SET_MENU_SELECTION;
	payload: MenuSelection;
}

interface SetSessionPaneSelectionAction {
	type: ViewContextActionTypes.SET_SESSION_PANE_SELECTION;
	payload: SessionPaneSelection;
}

export type ViewContextActions = SetMenuSelectionAction | SetSessionPaneSelectionAction;
