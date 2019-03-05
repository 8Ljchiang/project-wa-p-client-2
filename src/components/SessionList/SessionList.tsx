import React, { Component } from 'react';
import SessionListItem from '../SessionListItem/SessionListItem';

export interface ISessionListProps {
	sessions: any[];
}

export default class SessionList extends Component<ISessionListProps, {}> {
	renderSessions() {
		return this.props.sessions.map((session: any, index) => {
			return <SessionListItem key={index} item={session} />;
		});
	}

	render() {
		return (
			<div className="session-list">
				{this.renderSessions()}
			</div>
		);
	}
}
