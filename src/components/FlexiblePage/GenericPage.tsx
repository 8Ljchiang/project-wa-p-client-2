import React from 'react';
import { IFlexiblePageProps, IFlexiblePageState } from './FlexiblePage';

export interface IGenericPageComponent<T> {
	props: IFlexiblePageProps;
	state: IFlexiblePageState<T>;
}

export default class GenericPageComponent<Type>
	extends React.Component<IFlexiblePageProps, IFlexiblePageState<Type>>
	implements IGenericPageComponent<Type> {}
