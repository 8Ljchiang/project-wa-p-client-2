import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { IRouteData, navigationRoutes } from '../../routes/RoutesMetaStructure';

import './Menu.css';

interface ILeftMenuProps {
	routeDataSet: IRouteData[];
};

interface ILeftMenuState {
	isOpen: boolean;
};

export default class LeftMenu extends Component<ILeftMenuProps, ILeftMenuState> {
	constructor(props: ILeftMenuProps) {
		super(props);

		this.state = {
			isOpen: false,
		}

		this.toggleIsOpen = this.toggleIsOpen.bind(this);
	}

	toggleIsOpen() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	renderLinks() {
		return navigationRoutes.map((routeData: IRouteData) => {
			const { path, title } = routeData;
			return (
				<div key={`nav-path-${path}`}>
					<Link className="menu-item__text" to={path}>{title}</Link>
				</div>
			);
		});
	}

	renderOptions() {
		if (this.state.isOpen) {
			return (
				<div className="menu-options">
					{this.renderLinks()}
				</div>
			);
			
			// return (
			// 	
			// 		<div>
			// 			<Link to={"/"}>Home</Link>
			// 		</div>
			// 		<div>
			// 			<Link to={"/dashboard"}>Weekly User Pairing Highlights</Link>
			// 		</div>
			// 		<div>
			// 			<Link to={"/other"}>Other Pairing Category Information</Link>
			// 		</div>
			// 		<div>
			// 			<Link to={"/search"}>Search Projects, Exercises, Sessions</Link>
			// 		</div>
			// 	</div>
			// );
		}
	}

	render() {
		const { isOpen } = this.state;
		const menuLabel = isOpen ? '-' : '+';
		return (
			<div className="route-navigation-container">
				<div className="menu-button" onClick={this.toggleIsOpen}>{menuLabel}</div>
				{this.renderOptions()}
			</div>
		);
	}
}
