import React from 'react';

import { withRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import { navigationRoutes, detailPageRoutes, getDataBasedRoutes, IRouteData } from './RoutesMetaStructure';

// import { exampleDataSet } from '../seed/data';
import { appConfig } from '../configuration/appConfig';

import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './AnimationIndex.css';
import './index.css';
// import console = require('console');


// background-color: #e3f2fd;
// font-family: "Open Sans", sans-serif;
//position: relative;
// const PageContainer = styled.div`
// 	position: relative;
// 	width: 100%;
// 	height: 100%;
// `;

// const AllRoutes = (props:any) => {
// 	const { displayType } = appConfig;
// 	const allRoutes: IRouteData[] = routes.concat(getDataBasedRoutes(dataMap, displayType));
// 	return (
// 		<Switch location={props.location}>
// 			{allRoutes.map((route, index) => {
// 				return (
// 					<Route
// 						key={`r-${index}`}
// 						path={route.path}
// 						exact={route.exact}
// 						component={route.component}
// 					/>
// 				);
// 			})}
// 		</Switch>
// 	);
// }
let prevPaths: string[] = ['/'];

interface IMenuProps {
	routeData: IRouteData[];
	history: any;
	currentLocation: any;
}

const Menu = (props: IMenuProps) => {
	const { routeData } = props;
	// const { displayType } = appConfig;
	// const allRoutes: IRouteData[] = routes.concat(getDataBasedRoutes(exampleDataSet, displayType));
	return (<div className="menu-container">
		{routeData.map((route: IRouteData, index: number) => {
			return (
				<Link className="menu-item__text" key={`l-${index}`} to={route.path}>{route.title}</Link>
				// <button style={{color: 'black'}} className="menu-item__text" key={`l-${index}`} onClick={() => setTimeout(() => {
				// 	props.history.push(route.path);
				// }, DURATION)}>{route.title}</button>
			);
		})}
	</div>);
}


// const RouterMenu = withRouter(Menu);

interface IAnimatedIndexProps {
	routeData: IRouteData[];
}

export default (props: IAnimatedIndexProps) => {
	const { routeData } = props;
	// const { displayType } = appConfig;
	// const allRoutes: IRouteData[] = routes.concat(getDataBasedRoutes(exampleDataSet	, displayType)).concat(detailPageRoutes);
	const prevPath: string = prevPaths.shift()!.toString();
	return (	
		<Route
			render={({ location, history, match }) => {
				// console.log(match);
				prevPaths.push(location.pathname);
				// console.log('prevPath', prevPath, "currentLocation", location.pathname, 'length', prevPaths.length);
				const totalDuration = appConfig.animationDuration * 2;
				const mainRoutes = ["/", "/profile", "/highlights"];
				const animationName = mainRoutes.includes(location.pathname) && !mainRoutes.includes(prevPath) ? "up" : "right";
				return (
					<React.Fragment>
						<Menu history={history} currentLocation={location} routeData={routeData}/>
						<TransitionGroup>
							<CSSTransition
								key={location.key}
								timeout={totalDuration}
								classNames={animationName}
								>
								<Switch location={location}>
									{routeData.map((route: IRouteData, index: number) => {
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
							</CSSTransition>
						</TransitionGroup>
					</React.Fragment>
				);
			}}
		/>
	);
};



// export default () => {
// 	const { displayType } = appConfig;
// 	const allRoutes: IRouteData[] = routes.concat(getDataBasedRoutes(dataMap, displayType));
// 	return (
// 		<React.Fragment>
// 			<RouterMenu />
// 			{/* <Route
// 				render={({location}) => {
// 					return (
// 						<PageContainer> */}
// 							{/* <TransitionGroup component={null} > */}
// 								{/* <ReactCSSTransitionGroup
// 									transitionName={
// 										{     enter: 'fade-enter',     
// 											  leave: 'fade-leave',     
// 											//   appear: 'appear'   
// 										}}
// 									transitionEnterTimeout={300}
// 									transitionLeaveTimeout={300}>
// 								> */}
// 									{/* <Switch location={location}> */}

// 									{/* <ReactCSSTransitionGroup
// 										transitionName="example"
// 										transitionEnterTimeout={500}
// 										transitionLeaveTimeout={300}
// 										>
// 										{React.cloneElement(this.props.children, {key: page})}
// 										</ReactCSSTransitionGroup> */}
// 								<TransitionGroup className="items-section__list">
// 									<Switch>
										
// 										{allRoutes.map((route, index) => {
// 											return (
// 												// <ReactCSSTransitionGroup
// 												// 	transitionName={
// 												// 		{     enter: 'fade-enter',     
// 												// 			leave: 'fade-leave',     
// 												// 			//   appear: 'appear'   
// 												// 		}}
// 												// 	transitionEnterTimeout={300}
// 												// 	transitionLeaveTimeout={300} >
												
// 													<Route
// 														key={`r-${index}`}
// 														path={route.path}
// 														exact={route.exact}
// 														component={route.component}
// 													/>
// 												// </ReactCSSTransitionGroup>
// 											);
// 										})}
// 									</Switch>
// 								</TransitionGroup>
// 									{/* <Switch location={location} >
// 										<Route
// 											path={"/flex-projects"}
// 											exact={true}
// 											component={allRoutes.filter((item) => item.path === '/flex-projects')[0].component()}
// 										/>
// 										<Route
// 											path={"/flex-exercises"}
// 											exact={true}
// 											component={allRoutes.filter((item) => item.path === "/flex-exercises")[0].component()}
// 										/>
// 										<Route
// 											path={"/flex-sessions"}
// 											exact={true}
// 											component={allRoutes.filter((item) => item.path === "/flex-sessions")[0].component()}
// 										/>
// 									</Switch> */}
// 									{/* <AllRoutes location={location}/> */}
// 								{/* </ReactCSSTransitionGroup> */}
// 							{/* </TransitionGroup> */}
// 						{/* </PageContainer>
// 					);
// 				}}
// 			/> */}
// 		</React.Fragment>
// 	);
// };
