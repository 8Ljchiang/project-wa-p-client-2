import { IMessage, BaseObjectId } from "../../seed/data";

export enum MessageReduxActionTypes {
	CREATE_MESSAGE = 'C_MESS',
	DELETE_MESSAGE = 'D_MESS',
}

export interface MessagesState {
	messages: IMessage[];
}

interface CreateMessageAction {
	type: MessageReduxActionTypes.CREATE_MESSAGE;
	payload: IMessage;
}

interface DeleteMessageAction {
	type: MessageReduxActionTypes.DELETE_MESSAGE;
	payload: BaseObjectId;
}

export type MessageReduxActions = CreateMessageAction | DeleteMessageAction;
