import { IIdea } from './../../core/types/data-type-definitions';
import { IdeaReduxActionTypes } from "./types";
import { BaseObjectId } from '../../core/types/BaseObject';

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