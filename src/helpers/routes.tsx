import React from 'react';

import HomePage from '../components/HomePage/HomePage';
import FlexiblePage from '../components/FlexiblePage/FlexiblePage';
import AnimatedPageHoc from '../components/AnimatedPage/AnimationComponent';
import AnimatedFlexiblePage from '../components/FlexiblePage/AnimatedFlexiblePage';

import { IDataMap, IDataType } from '../seed/data';
import { IComponentDisplayType } from './componentHelpers';
import { convertToTitleCase } from './utils';

export interface IRouteData {
	component: (routerProps: any) => any;
	exact: boolean;
	path: string;
	title: string;
}

/**
 * Routes array is used to the <Link> and <Route> components.
 */
export const routes: IRouteData[] = [
	{
		component: () => <HomePage />,
		exact: true,
		path: '/',
		title: 'Home',
	},
	{
		component: () => <HomePage />,
		exact: true,
		path: '/highlights',
		title: 'Highlights',
	},
	{
		component: () => <HomePage />,
		exact: true,
		path: '/profile',
		title: 'Profile',
	},
	// {
	// 	component: () => <FlexiblePage<IProject> dataType="project" displayType="default" title="Projects List Page" />,
	// 	exact: true,
	// 	path: '/flex-projects',
	// 	title: 'Project',
	// },
	// {
	// 	component: () => <FlexiblePage<ISession> dataType="session" displayType="default" title="Sessions List Page" />,
	// 	exact: true,
	// 	path: '/flex-sessions',
	// 	title: 'Session',
	// },
];

export function getDataBasedRoutes(dataMap: IDataMap, displayType: IComponentDisplayType): IRouteData[] {
	const result: IRouteData[] = [];
	Object.keys(dataMap).forEach((key: string) => {
		const dataType = key as IDataType;
		const titleCaseName = convertToTitleCase(key);
		const pageTitle = `${titleCaseName}s List Page`;
		const routePath = `/flex-${key}s`;
		const routeObject: IRouteData = {
			component: (routerProps: any) => { return AnimatedPageHoc(AnimatedFlexiblePage, { ...routerProps, routePath, dataType, displayType, title: pageTitle }) }, //dataType={dataType} displayType={displayType} title={pageTitle} />,
			exact: true,
			title: titleCaseName,
			path: routePath,
		};
		result.push(routeObject);
	});
	return result;
}
