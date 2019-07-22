import React, { Component } from 'react';
import { ISession } from '../../core/types/data-type-definitions';
// import { ISession } from '../../seed/data';

export interface ISessionListItemProps {
	item: ISession;
}

export default class SessionItemView extends Component<ISessionListItemProps, {}> {
	render() {
		const { title, description } = this.props.item;
		return (
			<div className="flexible-item-container">
				<p className="flexible-item__text">Session Item View</p>
				{/* <h3 className="session-list-item__title">{title}</h3>
				<p className="session-list-item__desc">{description}</p> */}
			</div>
		);
	}
}
