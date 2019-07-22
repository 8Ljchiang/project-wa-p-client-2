import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Routes from './routes/index';
import './App.css';

import { navigationRoutes } from './routes/RoutesMetaStructure';
import { Provider } from 'react-redux';

import AppViewContextProvider from './context/AppViewContextProvider';
import { appStore } from './store/appStore';
import { Link } from 'react-router-dom';


const TempHome = () => {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Home</div>
	);
}

const TempSignOut = () => {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div style={{ border: '1px solid blue', flexFlow: 'column', padding: '10px'}}>
				<h3>Sign Out</h3>
				<button>Logout</button>
			</div>
		</div>
	);
}

const TempSignUp = () => {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div style={{ border: '1px solid blue', padding: '10px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
				<h3>Sign Up</h3>
				<input type="text" placeholder="username"/>
				<input type="text" placeholder="email"/>
				<input type="password" placeholder="password"/>
				<input type="text" placeholder="invite token"/>
				<button>Submit</button>
			</div>
		</div>
	);
}

const TempLogin = () => {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div style={{ border: '1px solid blue', padding: '10px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
				<h3>Login</h3>
				<input type="text" placeholder="username"/>
				<input type="password" placeholder="password"/>
				<button>Submit</button>
			</div>
		</div>
	);
}

const TempMenu = () => {
	return (
		<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'gray' }}>
			<Link to={`/`}>Home</Link>
			<Link to={`/login`}>Login</Link>
			<Link to={`/signup`}>Sign Up</Link>
			<Link to={`/signout`}>Sign Out</Link>
		</div>
	);
}
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
							<>
								<TempMenu/>
								<Switch>
									<Route path={'/'} exact={true} component={TempHome} />
									<Route path={'/login'} exact={true} component={TempLogin} />
									<Route path={'/signup'} exact={true} component={TempSignUp} />
									<Route path={'/signout'} exact={true} component={TempSignOut} />
								</Switch>
								{/* <Routes routeDataSet={navigationRoutes}/> */}
							</>
						</BrowserRouter>
					</AppViewContextProvider>
				</Provider>
			</div>
		);
	}
}
