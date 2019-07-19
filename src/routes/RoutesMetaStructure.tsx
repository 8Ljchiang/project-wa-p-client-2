import React from 'react';

import HomePage from '../components/HomePage/HomePage';
// import FlexiblePage from '../components/FlexiblePage/FlexiblePage';
import AnimatedPageHoc from '../components/AnimatedPage/AnimationComponent';
import AnimatedFlexiblePage from '../components/FlexiblePage/AnimatedFlexiblePage';

import { IDataMap, IDataType, IDataSetExample } from '../seed/data';
import { IComponentDisplayType } from '../helpers/componentHelpers';
import { convertToTitleCase } from '../helpers/utils';
import SessionDetailPage from '../components/SessionDetailPage/SessionDetailPage';

import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Search from './Search/Search';
import Highlights from './Highlights/Highlights';
import ErrorBoundary from '../hoc/ErrorBoundary';
import SessionInstance from './SessionInstance/SessionInstance';

export interface IRouteData {
	component: (routerProps: any) => any;
	exact: boolean;
	path: string;
	title: string;
}

/**
 * Routes array is used to the <Link> and <Route> components.
 */
export const navigationRoutes: IRouteData[] = [
	{
		component: (props: any) => <ErrorBoundary><Home {...props}/></ErrorBoundary>,
		exact: true,
		path: '/',
		title: 'Home',
	},
	{
		component: (props: any) => <ErrorBoundary><Search {...props}/></ErrorBoundary>,
		exact: true,
		path: '/search',
		title: 'Search',
	},
	{
		component: (props: any) => <Highlights {...props}/>,
		exact: true,	
		path: '/highlights',
		title: 'Highlights',
	},
	{
		component: (props: any) => <Dashboard {...props}/>,
		exact: true,
		path: '/dashboard',
		title: 'Dashboard',
	},
	{
		component: (props: any) => <SessionInstance {...props} />,
		exact: true,
		path: '/session-instance',
		title: 'Session Instance Test', 
	}
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

export const detailPageRoutes = [
	{
		component: (props: any) => <SessionDetailPage {...props}/>,
		exact: true,
		path: '/sessions/:sessionId',
		title: 'Session Detail Page'
	},
	{
		component: (props: any) => { return <div>Project Details Page Placeholder</div> },
		exact: true,
		path: '/projects/:projectId',
		title: 'Project Detail Page',
	},
	{
		component: (props: any) => { return <div>Exercise Details Page Placeholder</div> },
		exact: true,
		path: '/exercises/:exercisesId',
		title: 'Exercise Detail Page',
	}
];

export function getDataBasedRoutes(exampleDataSet: IDataSetExample, displayType: IComponentDisplayType): IRouteData[] {
	const result: IRouteData[] = [];
	Object.keys(exampleDataSet).forEach((key: string) => {
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
