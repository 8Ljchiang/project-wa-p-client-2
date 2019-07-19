import { ViewContextState, MenuSelection, SessionPaneSelection, ViewContextActionTypes, ViewContextActions } from "./types";
import { reduxSwitchcase } from "../../core/utils/validation-helpers";

const defaultViewContextState: ViewContextState = {
	menuSelection: MenuSelection.Profile,
	sessionPaneSelection: SessionPaneSelection.SessionDetails,
}

type ViewContextCaseMap = {
	[key in ViewContextActionTypes]: ViewContextState;
}

function viewContextCases(state: ViewContextState, action: ViewContextActions) {
	const cases: ViewContextCaseMap = {
		[ViewContextActionTypes.SET_MENU_SELECTION]: Object.assign({}, state, { menuSelection: action.payload }),
		[ViewContextActionTypes.SET_SESSION_PANE_SELECTION]: Object.assign({}, state, { sessionPaneSelection: action.payload }),
	}
	return cases;
}

export function viewContextReducer(
	state: ViewContextState = defaultViewContextState,
	action: ViewContextActions
): ViewContextState {
	return reduxSwitchcase(viewContextCases(state, action))(state)(action.type);
}
