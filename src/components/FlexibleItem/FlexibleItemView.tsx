import React, { Component } from 'react';
import { IBaseObject, IDataType } from '../../seed/data';
import './FlexibleItemView.css';
import { isValidObject } from '../../helpers/utils';
import { Link } from 'react-router-dom';

export interface IFlexibleItemProps<T> {
	item: T;
	dataType: IDataType;
	action?: any;
}

export default class FlexibleItemView<Type extends IBaseObject> extends Component<IFlexibleItemProps<Type>, {}> {
	render() {
		const { item, action, dataType } = this.props;
		if (isValidObject(item)) {
			if (action) {
				return (
					<div className="flexible-item-container">
						<BasicItemFields item={item} dataType={dataType} />
						<button className="flexible-item__select-button" onClick={() => action(item.id)}>Select</button>
					</div>
				);
			} else {
				return (
					<div className="flexible-item-container">
						<BasicItemFields item={item} dataType={dataType} />
					</div>
				);
			}
		}
		return null;
	}
}

const BasicItemFields = (props: any) => {
	const { item, dataType } = props;
	return (
		<div className="flexible-item__details">
			<p className="flexible-item__text">{item.title}</p>
			<p className="flexible-item__text">{item.description}</p>
			{ dataType ? <Link to={`/${dataType}s/${item.id}`}>{item.id}</Link> : null } 
		</div>
	);
}

const AllItemFields = (props: any) => {
	const { item } = props;
	return Object.keys(item).map((field: string) => {
		return <p className="flex-item__text" key={`${item.id}-${field}`}>{field}: {item[field]}</p>;
	});
}
