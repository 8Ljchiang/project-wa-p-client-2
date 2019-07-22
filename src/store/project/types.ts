import { IProject, BaseObjectId } from "../../core/types/data-type-definitions";

export enum ProjectReduxActionTypes {
	CREATE_PROJECT = 'C_PROJ',
	DELETE_PROJECT = 'D_PROJ',
}

export interface ProjectsState {
	projects: IProject[];
}

interface CreateProjectAction {
	type: ProjectReduxActionTypes.CREATE_PROJECT,
	payload: IProject,
}

interface DeleteProjectAction {
	type: ProjectReduxActionTypes.DELETE_PROJECT,
	payload: BaseObjectId,
}

export type ProjectReduxActions = CreateProjectAction | DeleteProjectAction;