import * as React from 'react';
import { RightMenuCompRefNames } from '../componentMaps/componentMaps';

export interface IAppViewContextProviderState {
	selectedComponentRefName: RightMenuCompRefNames;
	setSelectedOverlayComponent: (componentRefName: RightMenuCompRefNames) => void;
}

const ctxt = React.createContext<IAppViewContextProviderState | null>(null);

export const AppContextProvider = ctxt.Provider;
  
export const AppContextConsumer = ctxt.Consumer;