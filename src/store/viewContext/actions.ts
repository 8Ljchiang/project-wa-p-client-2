import { MenuSelection, ViewContextActionTypes, SessionPaneSelection } from "./types";

export function setMenuSelectionAction(menuSelection: MenuSelection) {
	return {
		type: ViewContextActionTypes.SET_MENU_SELECTION,
		payload: menuSelection,
	}
}

export function setSessionPaneSelectionAction(sessionPaneSelection: SessionPaneSelection) {
	return {
		type: ViewContextActionTypes.SET_SESSION_PANE_SELECTION,
		payload: sessionPaneSelection,
	}
}
