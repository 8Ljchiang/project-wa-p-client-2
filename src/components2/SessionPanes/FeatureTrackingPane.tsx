import React, { Component } from 'react';
// import { IProject, BaseObjectId } from '../../seed/data';
import FeatureGuidance from '../FeatureGuidance/FeatureGuidance';
import ProjectFeaturesList from '../ProjectFeaturesList/ProjectFeaturesList';
import { IProject, BaseObjectId } from '../../core/types/data-type-definitions';

interface FeatureTrackingPaneProps {
	project: IProject;
	features: any[];
}

interface FeatureTrackingPaneState {
	selectedFeatureId: BaseObjectId | null;
}

export default class FeatureTrackingPane extends Component<FeatureTrackingPaneProps, FeatureTrackingPaneState> {
	constructor(props: FeatureTrackingPaneProps) {
		super(props);

		this.state = {
			selectedFeatureId: null
		}
	}

	setSelectedFeatureId = (featureId: BaseObjectId) => {
		this.setState({
			selectedFeatureId: featureId
		});
	}

	completeFeature = () => {
		// TODO: call the method call that updates the feature, locally and on the server.
		// Figure out a way how to deal with that to update client side data,
		// while making a network call to update a single feature. 
	}

	render() {
		// const { features } = this.props;
		// const { selectedFeatureId } = this.state;
		// const filteredFeatures = features.filter((feature) => feature.id === selectedFeatureId); 
		// const selectedFeature = filteredFeatures.length > 0 ? filteredFeatures[0] : null;
		return (
			<div className="feature-tracking-container">
				<h1>Feature Tracking Pane</h1>
				{/* <FeatureGuidance feature={selectedFeature} completeFeature={this.completeFeature} />
				<div>Create Feature Button</div>
				<ProjectFeaturesList features={features} setSelectedFeatureid={this.setSelectedFeatureId} /> */}
			</div>
		);
	}
}