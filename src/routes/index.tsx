import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { IRouteData } from './RoutesMetaStructure';

import RouteNavigation from '../components2/Menu/RouteNavigation';
import ProfileNavigation from '../components2/Menu/ProfileNavigation';

import './index.css';

interface IRouteProps {
	routeDataSet: IRouteData[];
}

function renderRouteData(routeDataSet: IRouteData[]) {
	return routeDataSet.map((routeData: IRouteData, index: number) => {
		const { exact, path, component } = routeData;
		return (
			<Route
				key={`r-${index}`}
				path={path}
				exact={exact}
				component={component}
			/>
		);
	});
}

export default (props: IRouteProps) => {
	const { routeDataSet } = props;
	return (
		<React.Fragment>
			<RouteNavigation routeDataSet={routeDataSet} />
			<ProfileNavigation />
			<Switch>
				{renderRouteData(routeDataSet)}
			</Switch>
		</React.Fragment>
	);
};

// <div className="menu-container">
// 	{routeData.map((route: IRouteData, index: number) => {
// 		return (
// 			<Link className="menu-item__text" key={`l-${index}`} to={route.path}>{route.title}</Link>
// 		);
// 	})}
// </div>