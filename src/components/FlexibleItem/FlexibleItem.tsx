import React, { Component } from 'react';
import { IBaseObject } from '../../seed/data';

export interface IFlexibleItemProps<T> {
	item: T;
	action?: any;
}

export default class FlexibleItem<Type extends IBaseObject> extends Component<IFlexibleItemProps<Type>, {}> {
	render() {
		const { item, action } = this.props;
		if (action) {
			return (
				<div style={styles.container} className="flexible-item-container">
					<div style={styles.fields}>
						{mapItemFields(this.props.item)}
					</div>
					<button onClick={() => action(item.id)}>Select</button>
				</div>
			);
		} else {
			return (
				<div style={styles.container} className="flexible-item-container">
					{mapItemFields(this.props.item)}
				</div>
			);
		}
	}
}

function mapItemFields(item: any) {
	return Object.keys(item).map((field: string) => {
		return <p className="flex-item__text" key={`${item.id}-${field}`}>{field}: {item[field]}</p>;
	});
}

const styles = {
	container: {
		border: '1px solid black',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '6px',
	},
	fields: {
		alignItems: 'center',
		display: 'flex',
	},
};
