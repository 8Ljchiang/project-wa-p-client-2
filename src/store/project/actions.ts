import { ProjectReduxActionTypes } from "./types";
import { IProject } from "../../core/types/data-type-definitions";
import { BaseObjectId } from "../../core/types/BaseObject";

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
