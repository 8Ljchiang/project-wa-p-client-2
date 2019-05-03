import React, { Component } from 'react';
import { IUser, BaseObjectId } from '../../seed/data';

interface UserTimeTrackerProps {
	users: IUser[];
	sessionId: BaseObjectId;
	latestSessionEvent: any;
}

interface UserTimeTrackerState {
	currentUserIndex: number;
}

export default class UserTimeTracker extends Component<UserTimeTrackerProps, UserTimeTrackerState> {
	constructor(props: UserTimeTrackerProps) {
		super(props);

		this.state = {
			currentUserIndex: 0 // Do i really need this or can this be a calculated value;
		}
	}

	componentDidMount() {

	}

	calculateCurrentUserIndex() {
		// Take the last session event, check if it is on start status (1).
		// If on start status, find the user id on the event, and match that to the index of the array of users.
		// Set index to be the currentUserIndex.
	}

	calculateNextUserIndex() {
		// Get the current user index. 
		// Increment the index + 1 if it isn't the last index in the users array.
		// else set the current user index to 0, the beginning.
	}

	render() {
		return (
			<div className="timer-container">
				<div>Timer</div>
				<div>Current User</div>
				<div>(Start / Stop) Button</div>
				<div>Other Users List</div>
			</div>
		);
	}
}
