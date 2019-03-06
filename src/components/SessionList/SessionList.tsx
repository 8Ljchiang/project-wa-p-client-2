/**
 * Depricated
 */
import React, { Component } from 'react';
import SessionItemView from '../SessionItem/SessionItemView';

export interface ISessionListProps {
	sessions: any[];
}

export default class SessionList extends Component<ISessionListProps, {}> {
	renderSessions() {
		return this.props.sessions.map((session: any, index) => {
			return <SessionItemView key={index} item={session} />;
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
