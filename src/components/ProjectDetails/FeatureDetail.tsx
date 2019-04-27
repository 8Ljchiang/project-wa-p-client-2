import React, { Component } from 'react';

import './FeatureDetail.css';


interface IFeatureDetailProps {
	feature: string;
}

interface IFeatureDetailState {
	isOpen: boolean;
	step1: boolean;
	step2: boolean;
	step3: boolean;
	step4: boolean;
}

export default class FeatureDetail extends Component<IFeatureDetailProps, any> {
	constructor(props: IFeatureDetailProps) {
		super(props);

		this.state = {
			isOpen: false,
			step1: false,
			step2: false,
			step3: false,
			step4: false,
		}

		this.toggleOpen = this.toggleOpen.bind(this);
		this.onChange = this.onChange.bind(this);
		this.setComplete = this.setComplete.bind(this);
	}

	toggleOpen() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	setComplete() {
		console.log(this.props.feature + " is completed");
	}

	onChange(event: any) {
		const name: string = event.target.name as string;
		const value: boolean = event.target.checked as boolean;
		console.log(name,event.target.checked);
		this.setState({
			[name]: value,
		});
	}

	render() {
		const { feature } = this.props;
		const { step1, step2, step3, step4 } = this.state;
		return (
			<div className="feature-container">
				<p onClick={this.toggleOpen} >{feature}</p>
				<p>Feature #tag1 #tag2</p>
				{ this.state.isOpen ? (
					<>
						<div className="step-checkbox-container">
							<input onChange={this.onChange} type="checkbox" name="step1" checked={step1} />
							<label htmlFor="step1">Write failing test</label>
						</div>
						<div className="step-checkbox-container">
							<input onChange={this.onChange} type="checkbox" name="step2" checked={step2} />
							<label htmlFor="step1">Write minimal amount of code to pass</label>
						</div>
						<div className="step-checkbox-container">
							<input onChange={this.onChange} type="checkbox" name="step3" checked={step3} />
							<label htmlFor="step1">Refactor code</label>
						</div>
						<div className="step-checkbox-container">
							<input onChange={this.onChange} type="checkbox" name="step4" checked={step4} />
							<label htmlFor="step1">Review code and cosider next test</label>
						</div>
						{ (step1 && step2 && step3 && step4) ? 
							(<button onClick={this.setComplete}>Complete</button>) :
							null
						}
					</>
					
				) : (
					null
				)}
			</div>
		);
	}
}
