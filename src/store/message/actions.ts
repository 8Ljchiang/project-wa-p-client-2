import { MessageReduxActionTypes } from "./types";
import { IMessage, BaseObjectId } from "../../seed/data";

export function createMessage(newMessage: IMessage) {
	return {
		type: MessageReduxActionTypes.CREATE_MESSAGE,
		payload: newMessage,
	}
}
export function deleteMessage(messageId: BaseObjectId) {
	return {
		type: MessageReduxActionTypes.DELETE_MESSAGE,
		payload: messageId,
	}
}
