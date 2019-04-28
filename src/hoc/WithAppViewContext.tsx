
import React from 'react';
import { AppContextConsumer } from '../context/AppViewContext';
import { IAppViewContextProviderState } from '../context/AppViewContextProvider';

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withAppViewContext<
	P extends { appViewContext?: IAppViewContextProviderState },
	// R = Omit<P, 'appContext'>
	>(
	Component: React.ComponentClass<P> | React.StatelessComponent<P>
	// ): React.FunctionComponent<R> {
	): any {
	return function BoundComponent(props: any) {
		return (
			<AppContextConsumer>
				{(ctx) => {
					return (
						<Component {...props} appViewContext={ctx} />
					);
				}}
			</AppContextConsumer>
		);
	};
}
