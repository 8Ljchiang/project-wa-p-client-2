import { IInvite } from '../../seed/data';
import { InviteReduxActionTypes, InviteReduxActions } from './types';

export function sendInvite(newInvite: IInvite): InviteReduxActions {
	return {
		type: InviteReduxActionTypes.SEND_INVITE,
		payload: newInvite,
	}
}

export function deleteInvite(inviteId: string): InviteReduxActions {
	return {
		type: InviteReduxActionTypes.DELETE_INVITE,
		payload: inviteId,
	}
}
