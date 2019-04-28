import { IIdea, BaseObjectId } from "../../seed/data";

export enum IdeaReduxActionTypes {
	CREATE_IDEA = "C_IDEA",
	DELETE_IDEA = "D_IDEA",
}

export interface IdeasState {
	ideas: IIdea[];
}

interface CreateIdeaAction {
	type: IdeaReduxActionTypes.CREATE_IDEA;
	payload: IIdea;
}

interface DeleteIdeaAction {
	type: IdeaReduxActionTypes.DELETE_IDEA;
	payload: BaseObjectId;
}

export type IdeaReduxActions = CreateIdeaAction | DeleteIdeaAction;