import { IInvite } from "../../seed/data";

export enum InviteReduxActionTypes {
	SEND_INVITE = 'CR_INVT',
	DELETE_INVITE = 'RM_INVT',
}

export interface InvitesState {
	invites: IInvite[];
}

interface SendInviteAction {
	type: InviteReduxActionTypes.SEND_INVITE;
	payload: IInvite;
}

interface DeleteInviteAction {
	type: InviteReduxActionTypes.DELETE_INVITE;
	payload: string;
}

export type InviteReduxActions = SendInviteAction | DeleteInviteAction;