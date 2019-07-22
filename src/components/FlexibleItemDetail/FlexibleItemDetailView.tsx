import React, { Component } from 'react';
import { IComponentType } from '../../helpers/componentHelpers';
import { isValidObject } from '../../core/utils/validation-helpers';

import './FlexibleItemDetailView.css';
import { IBaseObject } from '../../core/types/data-type-definitions';

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
