import React from 'react';

import FlexiblePage from '../components/FlexiblePage/FlexiblePage';
import HomePage from '../components/HomePage/HomePage';

export interface IRouteData {
	component: () => any;
	exact: boolean;
	path: string;
	title: string;
}

export const routes: IRouteData[] = [
	{
		component: () => <HomePage/>,
		exact: true,
		path: '/',
		title: 'Home',
	},
	{
		component: () => <FlexiblePage dataType="project" displayType="default" />,
		exact: true,
		path: '/flex-projects',
		title: 'Project',
	},
	{
		component: () => <FlexiblePage dataType="session" displayType="default" />,
		exact: true,
		path: '/flex-sessions',
		title: 'Session',
	},
];
