import React, { Component } from 'react';
import { rightMenuLinks, IRightMenuLink } from './ProfileNavigationMetaStructure';
import { IAppViewContextProviderState } from '../../context/AppViewContextProvider';
import { RightMenuCompRefNames } from '../../componentMaps/componentMaps';
import { withAppViewContext } from '../../hoc/WithAppViewContext';
import { getRightMenuComponent } from '../../helpers/componentHelpers';

import './Menu.css';

interface IRightMenuProps {
	appViewContext: IAppViewContextProviderState;
	menuLinks: IRightMenuLink[];
};

interface IRightMenuState {
	isOpen: boolean;
};

class RightMenu extends Component<IRightMenuProps, IRightMenuState> {
	constructor(props: IRightMenuProps) {
		super(props);

		this.state = {
			isOpen: false,
		}

		this.toggleIsOpen = this.toggleIsOpen.bind(this);
		this.setOverlayComponent = this.setOverlayComponent.bind(this);
	}

	setOverlayComponent(context: IAppViewContextProviderState, componentRefName: RightMenuCompRefNames) {
		return context.setSelectedOverlayComponent(componentRefName);
	}

	toggleIsOpen() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	renderLinks() {
		const { appViewContext } = this.props;
		return rightMenuLinks.map((overlayMenuEntry: any, index: number) => {
			return <div className="profile-navigation-option" key={index} onClick={() => this.setOverlayComponent(appViewContext, overlayMenuEntry.ref)}>{overlayMenuEntry.title}</div>
		});
	}

	renderOptions() {
		if (this.state.isOpen) {
			const { appViewContext } = this.props;
			const SelectedComponent = getRightMenuComponent(appViewContext.selectedComponentRefName);
			return (
				<div className="profile-navigation-detail-container">
					<div className="profile-navigation-detail">
						{ SelectedComponent && <SelectedComponent /> }
					</div>
					<div className="menu-options">
						{this.renderLinks()}
					</div>
				</div>			
			);
		}
	}

	render() {
		const { isOpen } = this.state;
		const menuLabel = isOpen ? '-' : '+';
		return (
			<div className="profile-navigation-container">
				<div className="menu-button" onClick={this.toggleIsOpen}>{menuLabel}</div>
				{this.renderOptions()}
			</div>
		);
	}
}

export default withAppViewContext(RightMenu);