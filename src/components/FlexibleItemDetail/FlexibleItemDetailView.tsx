import React, { Component } from 'react';
import { IBaseObject } from '../../seed/data';
import { IComponentType } from '../../helpers/componentHelpers';
import { isValidObject } from '../../helpers/utils';

import './FlexibleItemDetailView.css';

export interface IFlexibleItemDetailProps<T> {
	item: T;
	type: IComponentType;
}

export default class FlexibleItemDetailView<Type extends IBaseObject>
	extends Component<IFlexibleItemDetailProps<Type>, {}> {
	renderItemFields(item: any) {
		return Object.keys(item).map((field: string) => {
			return <p className="item-detail__text" key={`${item.id}-${field}`}>{field}: {item[field]}</p>;
		});
	}

	render() {
		const { item } = this.props;
		if (isValidObject(item)) {
			return (
				<div className="flexible-item-detail-container">
					{this.renderItemFields(item)}
				</div>
			);
		} else {
			return (
				<div className="flexible-item-detail-container">
					<p className="item-detail__text">No Item Selected... (click an item to view details)</p>
				</div>
			);
		}
	}
}
