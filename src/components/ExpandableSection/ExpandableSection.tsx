import React, { Component } from 'react';

import './ExpandableSection.css';

interface IExpandableSectionProps {
	title: string;
}

interface IExpandableSectionState {
	isOpen: boolean;
}

export default class ExpandableSection extends Component<IExpandableSectionProps, IExpandableSectionState> {
	constructor(props: IExpandableSectionProps) {
		super(props);

		this.state = {
			isOpen: false,
		}

		this.toggleIsOpen = this.toggleIsOpen.bind(this);
	}

	toggleIsOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		const { isOpen } = this.state;
		const { title } = this.props;
		return (
			<div className="expandable-section-container">
				<div className="expandable-section__header">
					<h3>{title}</h3>
					<button className="expandable-section__button" onClick={this.toggleIsOpen}>{ isOpen ? '-' : '+' }</button>
				</div>
				<div className="expandable-section__body">
					{ isOpen ? this.props.children : null }
				</div>
			</div>
		);
	}
}
