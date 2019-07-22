import React from 'react';
import { BaseObjectId } from '../../core/types/BaseObject';
// import { BaseObjectId } from '../../seed/data';

interface ProjectFeaturesListProps {
	features: any[];
	setSelectedFeatureid: (featureId: BaseObjectId) => void;
}

const ProjectFeaturesList = (props: ProjectFeaturesListProps) => {
	return (
		<div className="features-list-container">
			{props.features.map((feature: any, index: number) => {
				return (
					<div className="feature-container" key={index}>
						<p>Feature Title</p>	
					</div>
				);
			})}
		</div>
	);
}

export default ProjectFeaturesList;
