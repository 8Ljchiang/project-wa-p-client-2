import React, { Component } from 'react';

import { AppContextProvider } from './AppViewContext';
import { RightMenuCompRefNames } from '../componentMaps/componentMaps';

export interface IAppViewContextProviderState {
	selectedComponentRefName: RightMenuCompRefNames;
	setSelectedOverlayComponent: (componentRefName: RightMenuCompRefNames) => void;
	selectedCreationForm: string;
	setSelectedCreationForm: (creationFormRefName: string) => void;
}

export default class AppViewContextProvider extends Component<{}, IAppViewContextProviderState> {
	readonly state: IAppViewContextProviderState = {
		selectedComponentRefName: RightMenuCompRefNames.Profile,
		setSelectedOverlayComponent: (componentRefName: RightMenuCompRefNames) => {
			this.setState({
				selectedComponentRefName: componentRefName
			});
		},
		selectedCreationForm: 'default',
		setSelectedCreationForm: (creationFormRefName: string) => {
			this.setState({
				selectedCreationForm: creationFormRefName
			});
		}
	}

	render() {
		return (
			<AppContextProvider value={this.state}>
				{this.props.children}
			</AppContextProvider>
		);
	}
}
