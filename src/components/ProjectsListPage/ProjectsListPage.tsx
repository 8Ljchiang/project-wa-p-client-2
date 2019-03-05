import React, { Component } from 'react';

import FlexibleItemsList from '../FlexibleItemsList/FlexibleItemsList';
import { getProjects, IProject, ISession, getSessions } from '../../seed/data';
import FlexibleItemDetail from '../FlexibleItemDetail/FlexibleItemDetail';

export default class ProjectsListPage extends Component {
	render() {
		const projects: IProject[] = getProjects(10);
		return (
			<div style={styles.container} className="page-container">
				<h3 className="page-container__title">Projects List Page</h3>
				<div style={styles.bottom}>
					<div style={styles.left}>
						<FlexibleItemsList<IProject> items={projects} type="project" />
					</div>
					<div style={styles.right}>
						<FlexibleItemDetail<IProject> item={projects[0]} type="project" />
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	left: {
		flex: 1,
	},
	right: {
		flex: 1,
	},
	container: {
		display: 'flex',
		flexFlow: 'column',
	},
	bottom: {
		display: 'flex'
	},
};
