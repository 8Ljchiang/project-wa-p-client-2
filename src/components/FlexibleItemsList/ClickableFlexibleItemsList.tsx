import React, { Component } from 'react';

import { IBaseObject } from '../../seed/data';
import { IComponentType, getMatchingComponent } from '../../helpers/componentHelpers';
import { itemComponentMap } from '../../helpers/componentMaps';

import './FlexibleItemsListView.css';

export interface IFlexibleListProps<T> {
	items: T[];
	type: IComponentType;
	action: any;
}

export default class ClickableFlexibleItemsList<Type extends IBaseObject>
	extends Component<IFlexibleListProps<Type>, {}> {
	renderItemComponents<T extends IBaseObject>(action: any, items: T[], type: IComponentType) {
		const ItemComponent = getMatchingComponent(itemComponentMap, type);
		return items.map((item: T) => {
			return <ItemComponent key={item.id} item={item} action={action} />;
		});
	}

	render() {
		const { items, type, action } = this.props;
		return (
			<div className="flexible-list-container">
				{this.renderItemComponents<Type>(action, items, type)}
			</div>
		);
	}
}

