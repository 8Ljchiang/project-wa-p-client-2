import { IIdea, BaseObjectId } from "../../seed/data";
import { IdeaReduxActionTypes } from "./types";

export function createIdea(newIdea: IIdea) {
	return {
		type: IdeaReduxActionTypes.CREATE_IDEA,
		payload: newIdea,
	}
}

export function deleteIdea(ideaId: BaseObjectId) {
	return {
		type: IdeaReduxActionTypes.DELETE_IDEA,
		payload: ideaId,
	}
}