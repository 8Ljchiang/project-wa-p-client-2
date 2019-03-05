import React, { Component } from 'react';

import { IBaseObject } from '../../seed/data';
import { IComponentType, getMatchingComponent } from '../../helpers/componentHelpers';
import { itemComponentMap } from '../../helpers/componentMaps';

// import ProjectListItem from '../ProjectListItem/ProjectListItem';
// import SessionListItem from '../SessionListItem/SessionListItem';
// import FlexibleItem from '../FlexibleItem/FlexibleItem';

// const itemComponents: any = {
// 	default: ProjectListItem,
// 	project: ProjectListItem,
// 	session: SessionListItem,
// };

export interface IFlexibleListProps<T> {
	items: T[];
	type: IComponentType;
	action: any;
}

export default class ClickableFlexibleItemsList<Type extends IBaseObject>
	extends Component<IFlexibleListProps<Type>, {}> {
	render() {
		const { items, type, action } = this.props;

		return (
			<div className="flexible-list">
				{renderClickableItemComponents<Type>(action, items, type)}
			</div>
		);
	}
}

// tslint:disable-next-line: max-line-length
function renderClickableItemComponents<T extends IBaseObject>(action: any, items: T[], type: IComponentType) {
	const ItemComponent = getMatchingComponent(itemComponentMap, type);
	return items.map((item: T) => {
		return <ItemComponent key={item.id} item={item} action={action} />;
	});
}
