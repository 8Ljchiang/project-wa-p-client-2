import { ProjectReduxActionTypes } from "./types";
import { IProject, BaseObjectId } from "../../seed/data";

export function createProject(newProject: IProject) {
	return {
		type: ProjectReduxActionTypes.CREATE_PROJECT,
		payload: newProject,
	}
}

export function deleteProject(projectId: BaseObjectId) {
	return {
		type: ProjectReduxActionTypes.DELETE_PROJECT,
		payload: projectId,
	}
}
