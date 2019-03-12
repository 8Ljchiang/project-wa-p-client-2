import React, { Component } from 'react';

import SessionDetails from '../SessionDetails/SessionDetails';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import SessionEvents from '../SessionEvents/SessionEvents';
import SessionManagement from '../SessionManagement/SessionManagement';

import './SessionDetailPage.css';

export default class SessionDetailPage extends Component {
	render() {
		return (
			<div className="session-detail-page-container">
				<SessionDetails />
				<ProjectDetails />
				<SessionManagement />
				<SessionEvents />
			</div>
		);
	}
}
