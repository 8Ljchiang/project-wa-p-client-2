import React, { Component } from 'react';
import { IBaseObject } from '../../seed/data';
import './FlexibleItemView.css';
import { isValidObject } from '../../helpers/utils';

export interface IFlexibleItemProps<T> {
	item: T;
	action?: any;
}

export default class FlexibleItemView<Type extends IBaseObject> extends Component<IFlexibleItemProps<Type>, {}> {
	render() {
		const { item, action } = this.props;
		if (isValidObject(item)) {
			if (action) {
				return (
					<div className="flexible-item-container">
						<BasicItemFields item={item} />
						<button className="flexible-item__select-button" onClick={() => action(item.id)}>Select</button>
					</div>
				);
			} else {
				return (
					<div className="flexible-item-container">
						<BasicItemFields item={item} />
					</div>
				);
			}
		}
		return null;
	}
}

const BasicItemFields = (props: any) => {
	const { item } = props;
	return (
		<div className="flexible-item__details">
			<p className="flexible-item__text">{item.title}</p>
			<p className="flexible-item__text">{item.description}</p>
		</div>
	);
}

const AllItemFields = (props: any) => {
	const { item } = props;
	return Object.keys(item).map((field: string) => {
		return <p className="flex-item__text" key={`${item.id}-${field}`}>{field}: {item[field]}</p>;
	});
}
