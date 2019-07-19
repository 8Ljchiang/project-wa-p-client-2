import { IdeasState, IdeaReduxActionTypes, IdeaReduxActions } from "./types";
import { autoGenerateData, IIdea } from "../../seed/data";
import { reduxSwitchcase } from "../../core/utils/validation-helpers";
import { DataTypes } from "../../seed/dataTypes";

const defaultIdeasState: IdeasState = {
	ideas: autoGenerateData(DataTypes.Idea, 10)
}

type IdeasCaseMap = {
	[key in IdeaReduxActionTypes]: IdeasState;
}

function ideaCases(state: IdeasState, action: IdeaReduxActions) {
	const cases: IdeasCaseMap = {
		[IdeaReduxActionTypes.CREATE_IDEA]: { ideas: [ ...state.ideas, action.payload as IIdea ] },
		[IdeaReduxActionTypes.DELETE_IDEA]: { ideas: state.ideas.filter((idea: IIdea) => idea.id !== action.payload) },
	}
	return cases;
}

export function ideaReducer(
	state: IdeasState = defaultIdeasState,
	action: IdeaReduxActions,
): IdeasState {
	return reduxSwitchcase(ideaCases(state, action))(state)(action.type);
}