import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import './App.css';

import { navigationRoutes } from './routes/RoutesMetaStructure';
import { Provider } from 'react-redux';

import AppViewContextProvider from './context/AppViewContextProvider';
import { appStore } from './store/appStore';

export default class App extends Component {
	render() {
		// console.log(Home);
		// const { displayType } = appConfig;
		// const routeData: IRouteData[] = navigationRoutes.concat(getDataBasedRoutes(exampleDataSet, displayType));
		return (
			<div className="app-container">
				<Provider store={appStore}>
					<AppViewContextProvider>
						<BrowserRouter>
							<Routes routeDataSet={navigationRoutes}/>
						</BrowserRouter>
					</AppViewContextProvider>
				</Provider>
			</div>
		);
	}
}
