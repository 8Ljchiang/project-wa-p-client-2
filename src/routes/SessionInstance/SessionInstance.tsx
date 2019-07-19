import React, { Component } from 'react';
import { BaseObjectId, IUser, ISession } from '../../seed/data';

import SessionInfo from '../../components2/SessionPanes/SessionInfo';

import './SessionInstance.css';

type SessionInstanceProps = {};

class SessionInstance extends Component<SessionInstanceProps> {
	render() {
		
		return (
			<div className="session-instance-container">
				<h1>Session Instance Page</h1>
				<SessionInfo />
			</div>
		);
	}
}

export default SessionInstance;