import React, { Component } from 'react';
import { ISession } from '../../seed/data';

export interface ISessionItemDetailViewProps {
	item: ISession;
}

export default class SessionItemDetailView extends Component<ISessionItemDetailViewProps, {}> {
	render() {
		return (
			<div className="flexible-item-detail-container">
				<p>Session Item Detail View</p>
			</div>
		);
	}
}
