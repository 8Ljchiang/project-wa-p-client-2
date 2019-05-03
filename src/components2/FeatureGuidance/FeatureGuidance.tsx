import React, { Component } from 'react';
import { BaseObjectId } from '../../seed/data';

interface FeatureGuidanceProps {
	feature: any;
	completeFeature: (featureId: BaseObjectId) => void;
}

interface FeatureGuidanceState {

}

export default class FeatureGuidance extends Component<FeatureGuidanceProps, FeatureGuidanceState> {
	constructor(props: FeatureGuidanceProps) {
		super(props);

	}

	render() {
		return (
			<div feature-guidance-container>
				<div className="feature-description-container">Feature Description</div>
				<div className="guidance-checklist-container">Guidance Checklist Form</div>
			</div>
		);
	}
}
