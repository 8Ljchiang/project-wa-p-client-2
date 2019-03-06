import React from 'react';
import { IProject } from '../../seed/data';

export interface IProjectItemDetailViewProps {
	item: IProject;
}

export default class ProjectItemDetailView extends React.Component<IProjectItemDetailViewProps, {}> {
	render() {
		return (
			<div className="flexible-item-detail-container">
				<p>Project Item Detail View</p>
			</div>
		);
	}
}