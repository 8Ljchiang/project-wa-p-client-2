import React, { Component } from 'react';
import { BaseObjectId, IUser } from '../../seed/data';
import SessionEventsList from '../SessionEventsList/SessionEventsList';
import UserTimeTracker from '../UserTimeTracker/UserTimeTracker';

interface SessionEventTrackingProps {
	users: IUser[];
	sessionId: BaseObjectId;
	sessionEvents: any[];
}

interface SessionEventTrackingState {
	currentUserIndex: number;
}

export default class TimeTrackingPane extends Component<SessionEventTrackingProps, SessionEventTrackingState> {
	constructor(props: SessionEventTrackingProps) {
		super(props);

	}

	render() {
		const { sessionEvents, sessionId, users } = this.props;
		const latestSessionEvent = sessionEvents[sessionEvents.length];
		return (
			<div className="time-tracking-container">
				<UserTimeTracker sessionId={sessionId} users={users} latestSessionEvent={latestSessionEvent} />
				<div>Divider</div>
				<SessionEventsList events={sessionEvents}/>
			</div>
		);
	}
}
