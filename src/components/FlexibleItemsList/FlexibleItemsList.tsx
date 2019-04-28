/**
 * Depricated
 */

import React from 'react';

import { IBaseObject, IDataType } from '../../seed/data';
import { IComponentType, getMatchingComponent } from '../../helpers/componentHelpers';
import { itemComponentMap } from '../../componentMaps/componentMaps';

export interface IFlexibleListProps<T> {
	items: T[];
	type: IComponentType;
	dataType: IDataType;
}

export default function FlexibleItemsList<Type extends IBaseObject>(props: IFlexibleListProps<Type>) {
	const { items, type, dataType } = props;

	return (
		<div className="flexible-list">
			{renderItemComponents<Type>(items, dataType, type)}
		</div>
	);
}

export function renderItemComponents<T extends IBaseObject>(items: T[], dataType: IDataType, type: IComponentType = 'default') {
	return items.map((item: T) => {
		const Component = getMatchingComponent(itemComponentMap, type);
		return <Component key={item.id} item={item} dataType={dataType} />;
	});
}
