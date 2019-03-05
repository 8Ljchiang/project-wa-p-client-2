import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage/HomePage';
import SessionsListPage from '../components/SessionsListPage/SessionsListPage';
import ProjectsListPage from '../components/ProjectsListPage/ProjectsListPage';
import FlexiblePage from '../components/FlexiblePage/FlexiblePage';
import { IProject, ISession } from '../seed/data';

export default () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route exact={true} path="/sessions" component={SessionsListPage} />
				<Route exact={true} path="/projects" component={ProjectsListPage} />
				<Route
					exact={true}
					path="/flex-projects"
					render={(props: any) =>
					<FlexiblePage<IProject> {...props}
						dataType="project"
						componentType="default"
					/>}
				/>
				<Route
					exact={true}
					path="/flex-sessions"
					render={(props: any) =>
					<FlexiblePage<ISession> {...props}
						dataType="session"
						componentType="default"
					/>}
				/>
			</Switch>
		</React.Fragment>
	);
};
