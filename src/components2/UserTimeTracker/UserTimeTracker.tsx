import React, { Component } from 'react';
// import { IUser, BaseObjectId } from '../../seed/data';

import './UserTimeTracker.css';
import { IUser } from '../../core/types/data-type-definitions';
import { BaseObjectId } from '../../core/types/BaseObject';
interface UserTimeTrackerProps {
	users: IUser[];
	sessionId: BaseObjectId;
	latestSessionEvent: any;
	estimatedDuration: number;
	currentRound: number;
	totalRounds: number;
}

interface UserTimeTrackerState {
	// currentUserIndex: number;
	currentUserId: string | null | BaseObjectId;
	selectUserPanelIsOpen: boolean;
}

export default class UserTimeTracker extends Component<UserTimeTrackerProps, UserTimeTrackerState> {
	constructor(props: UserTimeTrackerProps) {
		super(props);

		this.state = {
			currentUserId: null,
			selectUserPanelIsOpen: false,
			// currentUserIndex: 0, // Do i really need this or can this be a calculated value;
		}

		this.setCurrentUserId = this.setCurrentUserId.bind(this);
		this.toggleSelectUserPanel = this.toggleSelectUserPanel.bind(this);
		this.createNewSessionEvent = this.createNewSessionEvent.bind(this);
	}

	componentDidMount() {
		this.setCurrentUserIdFromProps();
	}

	setCurrentUserIdFromProps() {
		const { latestSessionEvent } = this.props;

		if(latestSessionEvent && latestSessionEvent.type === 1) { // the 1 denotes type of 'start', this is the session event type.
			this.setState({
				currentUserId: latestSessionEvent.userId
			});
		}
	}

	setCurrentUserId(id: BaseObjectId) {
		this.setState({
			currentUserId: id,
		});
	}

	toggleSelectUserPanel() {
		this.setState({
			selectUserPanelIsOpen: !this.state.selectUserPanelIsOpen,
		});
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

	renderUsers() {
		const { users } = this.props;
		return users.map((user: IUser) => {
			return (
				<div className="time-users-list-item" key={user.id}>
					<button onClick={() => this.setCurrentUserId(user.id)}>{user.username}</button>
				</div>
			);
		});
	}

	renderSelectUserPanel() {
		if(this.state.selectUserPanelIsOpen) {
			return (
				<div className="timer-users-list">
					{this.renderUsers()}
				</div>
			);
		}
	}

	renderEventTimerButton() {
		const { latestSessionEvent } = this.props;
		if(latestSessionEvent && latestSessionEvent.type === 1) {
			return <button onClick={() => this.createNewSessionEvent(0)}>Stop</button>
		}
		return <button onClick={() => this.createNewSessionEvent(1)}>Start</button>
	}

	createNewSessionEvent(type: number) {
		console.log(`UserTimeTracker createNewSessionEvent(${type}) for ${this.state.currentUserId}`);
	}

	render() {
		const selectButtonText = this.state.selectUserPanelIsOpen ? 'Close' : 'Open';
		return (
			<div className="timer-container">
				<div className="timer-header">

				</div>
				<div className="timer-body">
					<p>Current Duration Calculation</p>
					<p>{this.state.currentUserId}</p>
					{ this.renderEventTimerButton() }
				</div>
				<button onClick={this.toggleSelectUserPanel}>{selectButtonText}</button>
				{ this.renderSelectUserPanel() }

				<div>Timer</div>
				<div>Current User</div>
				<div>(Start / Stop) Button</div>
				<div>Other Users List</div>
			</div>
		);
	}
}
