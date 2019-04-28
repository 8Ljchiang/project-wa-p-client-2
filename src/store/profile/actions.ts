import { UPDATE_STATUS } from "./types";

export const updateStatus = (status: any) => {
	return {
		type: UPDATE_STATUS,
		payload: status,
	}
}
