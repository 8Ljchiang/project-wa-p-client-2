import React, { Component } from 'react';
// import { BaseObjectId, IUser, ISession } from '../../seed/data';
import SessionEventsList from '../SessionEventsList/SessionEventsList';
import UserTimeTracker from '../UserTimeTracker/UserTimeTracker';
import { connect } from 'react-redux';
import { IUser, ISession } from '../../core/types/data-type-definitions';

interface SessionEventTrackingProps {
	users: IUser[];
	sessions: ISession[];
	// sessionId: BaseObjectId;
	// sessionEvents: any[];
	// latestSessionEvent: any;
	// estimatedDuration: number;
	// currentRound: number;
	// totalRounds: number;
}

interface SessionEventTrackingState {
	currentUserIndex: number;
}

class TimeTrackingPane extends Component<SessionEventTrackingProps, SessionEventTrackingState> {
	constructor(props: SessionEventTrackingProps) {
		super(props);

	}

	render() {
		const { users, sessions } = this.props;
		// const { sessionEvents, sessionId, users } = this.props;
		// const latestSessionEvent = sessionEvents[sessionEvents.length];
		const sessionId = 'session-id-0';
		const filteredSessions = sessions.filter((session: ISession) => {
			return session.id === sessionId;
		});

		if (filteredSessions && filteredSessions.length > 0) {

			const currentSessionInstance = filteredSessions[0];
			const filteredUsers = users.filter((user: IUser) => {
				return currentSessionInstance.userIds.includes(user.id);
			})
			const currentRound = 2;
			const totalRounds = 8;
			const estimatedDuration = 7;
			const latestSessionEvent = {
				type: 1,
				sessionId,
				userId: 'user-id-0',
			}

			return (
				<div className="time-tracking-container">
					<h1>Time Tracking Pane</h1>
					<UserTimeTracker 
						users={filteredUsers} 
						sessionId={sessionId}
						latestSessionEvent={latestSessionEvent}
						estimatedDuration={estimatedDuration}
						currentRound={currentRound}
						totalRounds={totalRounds}
						/>
					{/* <UserTimeTracker sessionId={sessionId} users={users} latestSessionEvent={latestSessionEvent} />
					<div>Divider</div>
					<SessionEventsList events={sessionEvents}/> */}
				</div>
			);
		} else {
			console.log(sessions);
			console.log(filteredSessions)
			return (<div>No Data Loaded</div>);
		}
	}
}

const mapStateToProps = (state: any) => {
	return {
		users: state.user.users as IUser[],
		sessions: state.session.sessions as ISession[],
	}
}

export default connect(mapStateToProps, null)(TimeTrackingPane);
