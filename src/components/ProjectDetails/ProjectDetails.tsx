import React from 'react';

import './ProjectDetails.css';
import FeatureDetail from './FeatureDetail';
import { IProject } from '../../core/types/data-type-definitions';

interface IProjectDetailsProps {
	project: IProject;
}

const ProjectDetails = (props: IProjectDetailsProps) => {
	const { project } = props;
	return (
		<div className="project-details-container">
			<p>{project.title}</p>
			<p>{project.description}</p>
			<p>GITHUB REPO:</p>
			<p>Completed Features/Total Features</p>
			{ project.features.map((feature, index) => {
				return <FeatureDetail feature={feature} key={index} />
				// return <p key={index}>{feature}</p>;
			})}
		</div>
	);
}

export default ProjectDetails;
