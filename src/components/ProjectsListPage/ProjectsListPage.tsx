import React, { Component } from 'react';

import FlexibleList from '../FlexibleList/FlexibleList';
import { getMatchingComponent } from '../../helpers/componentHelpers';
import { getProjects, IProject, ISession, getSessions } from '../../seed/data';

export default class ProjectsListPage extends Component {
	render() {
		const projects: IProject[] = getProjects(10);
		const sessions: ISession[] = getSessions(10);
		return (
			<div className="page-container">
				<h3>Projects List Page</h3>
				<FlexibleList<IProject> items={projects} type="project" />
				<FlexibleList<ISession> items={sessions} type="session" />
			</div>
		);
	}
}
