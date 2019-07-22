/**
 * Depricated
 */

import React from 'react';
import { IComponentType, getMatchingComponent } from '../../helpers/componentHelpers';
import { itemComponentMap } from '../../componentMaps/componentMaps';
import { IDataType } from '../../core/utils/mock-data-gen-schemas';
import { IBaseObject } from '../../core/types/BaseObject';

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
