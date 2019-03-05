import React from 'react';

import { IBaseObject } from '../../seed/data';
import { IComponentType, getMatchingComponent } from '../../helpers/componentHelpers';

export interface IFlexibleListProps<T> {
	items: T[];
	type: IComponentType;
}

export default function FlexibleList<Type extends IBaseObject>(props: IFlexibleListProps<Type>) {
	const { items, type } = props;

	return (
		<div className="flexible-list">
			{renderComponents<Type>(items, type)}
		</div>
	);
}

export function renderComponents<T extends IBaseObject>(items: T[], type: IComponentType) {
	return items.map((item: T) => {
		const Component = getMatchingComponent(type);
		return <Component key={item.id} item={item} />;
	});
}
