import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';
import { routes, IRouteData } from './routes';

export default () => {
	return (
		<React.Fragment>
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
							key={`r-${index}`}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					);
				})}
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
