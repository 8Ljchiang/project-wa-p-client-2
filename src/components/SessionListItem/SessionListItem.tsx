import React, { Component } from 'react';
import { ISession } from '../../seed/data';

export interface ISessionListItemProps {
	item: ISession;
}

export default class SessionListItem extends Component<ISessionListItemProps, {}> {
	render() {
		const { title, description } = this.props.item;
		return (
			<div className="session-list-item">
				<h3 className="session-list-item__title">{title}</h3>
				<p className="session-list-item__desc">{description}</p>
			</div>
		);
	}
}
