import React, { Component } from 'react';
import { IProject } from '../../seed/data';

export interface IProjectListItemProps {
	item: IProject;
}

export default class ProjectItemView extends Component<IProjectListItemProps, {}> {
	render() {
		const { title, description, type } = this.props.item;
		return (
			<div className="flexible-item-container">
				<p className="flexible-item__text">Project Item View</p>
				{/* <h3 className="list-item__title">{title}</h3>
				<p className="list-item__text">{description}</p>
				<p className="list-item__text">{type}</p> */}
			</div>
		);
	}
}
