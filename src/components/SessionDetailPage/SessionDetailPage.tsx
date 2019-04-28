import React, { Component } from 'react';

import SessionDetails from '../SessionDetails/SessionDetails';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import SessionEvents from '../SessionEvents/SessionEvents';
import SessionManagement from '../SessionManagement/SessionManagement';

import './SessionDetailPage.css';
import { ISession, autoGenerateData, IProject } from '../../seed/data';
import ExpandableSection from '../ExpandableSection/ExpandableSection';
import { DataTypes } from '../../seed/dataTypes';

interface ISessionDetailPage {
	match?: any;
}

export default class SessionDetailPage extends Component<ISessionDetailPage, {}> {
	render() {
		console.log(this.props.match.params);
		const sessionId = this.props.match.params.sessionId;
		const allSessions = autoGenerateData<ISession>(DataTypes.Session, 10);
		console.log(allSessions);
		const session = allSessions.filter((s: ISession) => {
			return sessionId === s.id;
		})[0];

		const allProjects = autoGenerateData<IProject>(DataTypes.Project, 10);
		const sessionProject = allProjects.filter((project) => { return session.projectId === project.id })[0];
		console.log('sessionDetailpage', session);

		return (
			<div className="session-detail-page-container">
				<ExpandableSection title="Session Details">
					<SessionDetails session={session}/>
				</ExpandableSection>
				<ExpandableSection title="Project Details">
					<ProjectDetails project={sessionProject} />
				</ExpandableSection>
				<ExpandableSection title="Session Management">
					<SessionManagement session={session} />
					<SessionEvents />
				</ExpandableSection>
			</div>
		);
	}
}
