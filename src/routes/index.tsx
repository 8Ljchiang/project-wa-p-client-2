import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

// import HomePage from '../components/HomePage/HomePage';
// import SessionsListPage from '../components/SessionsListPage/SessionsListPage';
// import ProjectsListPage from '../components/ProjectsListPage/ProjectsListPage';
// import FlexiblePage from '../components/FlexiblePage/FlexiblePage';
// import { IProject, ISession } from '../seed/data';
// import ContainerSelector from '../components/ContainerSelector/ContainerSelector';

import { routes, IRouteData } from './routes';

export default () => {
	return (
		<React.Fragment>
			{/* <ContainerSelector /> */}
			<div style={styles.container}>
				{routes.map((route: IRouteData, index: number) => {
					return (
						<Link style={styles.menuItem} key={`l-${index}`} to={route.path}>{route.title}</Link>
					);
				})}
			</div>
			<Switch>
				{routes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					);
				})}
				{/* <Route exact={true} path="/sessions" component={SessionsListPage} /> */}
				{/* <Route exact={true} path="/projects" component={ProjectsListPage} /> */}
				{/* <Route
					exact={true}
					path="/flex-projects"
					render={(props: any) =>
					<FlexiblePage {...props}
						dataType="project"
						displayType="default"
					/>}
				/>
				<Route
					exact={true}
					path="/flex-sessions"
					render={(props: any) =>
					<FlexiblePage {...props}
						dataType="session"
						displayType="default"
					/>}
				/> */}
			</Switch>
		</React.Fragment>
	);
};

const styles = {
	container: {
		display: 'flex',
	},
	menuItem: {
		marginLeft: '10px',
	},
};
