import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';
import { routes, getDataBasedRoutes, IRouteData } from '../helpers/routes';

import './index.css';
import { exampleDataSet } from '../seed/data';
import { appConfig } from '../helpers/appConfig';

export default () => {
	const { displayType } = appConfig;
	const allRoutes: IRouteData[] = routes.concat(getDataBasedRoutes(exampleDataSet, displayType));
	return (
		<React.Fragment>
			<div className="menu-container">
				{allRoutes.map((route: IRouteData, index: number) => {
					return (
						<Link className="menu-item__text" key={`l-${index}`} to={route.path}>{route.title}</Link>
					);
				})}
			</div>
			<Switch>
				{allRoutes.map((route, index) => {
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
