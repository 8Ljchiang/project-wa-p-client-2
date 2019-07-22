import { ProjectsState, ProjectReduxActionTypes, ProjectReduxActions } from "./types";
// import { autoGenerateData, IProject } from "../../seed/data";
// import { DataTypes } from "../../seed/dataTypes";
import { reduxSwitchcase } from "../../core/utils/validation-helpers";
import { IProject } from "../../core/types/data-type-definitions";

const defaultProjectsState: ProjectsState = {
	projects: []
	// projects: autoGenerateData(DataTypes.Project, 10)
}

type ProjectsCaseMap = {
	[key in ProjectReduxActionTypes]: ProjectsState;
}

function projectCases(state: ProjectsState, action: ProjectReduxActions) {
	const cases: ProjectsCaseMap = {
		[ProjectReduxActionTypes.CREATE_PROJECT]: Object.assign({}, state, { projects: [ ...state.projects, action.payload as IProject ] }),
		[ProjectReduxActionTypes.DELETE_PROJECT]: Object.assign({}, state, { projects: state.projects.filter((project) => project.id !== action.payload) }),
	}
	return cases;
}

export function projectsReducer(
	state: ProjectsState = defaultProjectsState,
	action: ProjectReduxActions
): ProjectsState {
	return reduxSwitchcase(projectCases(state, action))(state)(action.type);
}
