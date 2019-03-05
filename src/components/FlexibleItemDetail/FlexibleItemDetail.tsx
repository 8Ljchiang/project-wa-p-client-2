import React, { Component } from 'react';
import { IBaseObject } from '../../seed/data';
import { IComponentType } from '../../helpers/componentHelpers';

export interface IFlexibleItemDetailProps<T> {
	item: T;
	type: IComponentType;
}

export default class FlexibleItemDetail<Type extends IBaseObject>
	extends Component<IFlexibleItemDetailProps<Type>, {}> {
	renderItemFields(item: any) {
		return Object.keys(item).map((field: string) => {
			return <p className="item-detail-text" key={`${item.id}-${field}`}>{field}: {item[field]}</p>;
		});
	}

	render() {
		const { item } = this.props;

		if (item) {
			return (
				<div className="item-detail-container">
					{this.renderItemFields(item)}
				</div>
			);
		} else {
			return (
				<div className="item-detail-container">
					<p>No Item Selected... (click an item to view details)</p>
				</div>
			);
		}
	}
}
