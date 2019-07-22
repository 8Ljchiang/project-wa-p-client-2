import { InviteReduxActionTypes, InviteReduxActions } from './types';
import { IInvite } from '../../core/types/data-type-definitions';

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
