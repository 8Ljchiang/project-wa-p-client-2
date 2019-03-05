import React from 'react';

import { IBaseObject } from '../../seed/data';
import { IComponentType, getMatchingComponent } from '../../helpers/componentHelpers';
import { itemComponentMap } from '../../helpers/componentMaps';

import ProjectListItem from '../ProjectListItem/ProjectListItem';
import SessionListItem from '../SessionListItem/SessionListItem';

const itemComponents: any = {
	default: ProjectListItem,
	project: ProjectListItem,
	session: SessionListItem,
};

export interface IFlexibleListProps<T> {
	items: T[];
	type: IComponentType;
}

export default function FlexibleItemsList<Type extends IBaseObject>(props: IFlexibleListProps<Type>) {
	const { items, type } = props;

	return (
		<div className="flexible-list">
			{renderItemComponents<Type>(items, type)}
		</div>
	);
}

export function renderItemComponents<T extends IBaseObject>(items: T[], type: IComponentType = 'default') {
	return items.map((item: T) => {
		const Component = getMatchingComponent(itemComponentMap, type);
		return <Component key={item.id} item={item} />;
	});
}
