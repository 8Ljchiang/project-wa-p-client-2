import React, { Component } from 'react';

import { isValidObject, isValidString } from '../../core/utils/validation-helpers';

import './FlexibleItemCreateForm.css';

export interface IFlexibleItemCreateFormProps {
	item: any;
	itemType: string;
}

export interface IFlexibleItemCreateFormState {
	[key: string]: string;
	isOpen: string;
}

export default class FlexibleItemCreateForm 
	extends Component<IFlexibleItemCreateFormProps, IFlexibleItemCreateFormState> {
	constructor(props: IFlexibleItemCreateFormProps) {
		super(props);

		this.state = {
			isOpen: 'CLOSED',
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	toggleEdit() {
		const value = this.state.isOpen === 'OPEN' ? 'CLOSED' : 'OPEN';
		this.setState({
			isOpen: value,
		});
	}

	onSubmit(event: any) {
		event.preventDefault();
		const {item } = this.props;
		if (checkAllItemFieldsIsValid(this.state, item)) {
			const newState: any = {};
			if (isValidObject(item)) {
				Object.keys(item).forEach((key) => {
					newState[key] = '';
				});
			}
			this.setState(newState);
		}
	}

	onChange(event: any) {
		const eventName = event.target.name as string;
		const eventValue = event.target.value as string;
		this.setState(updateStateWithChange(eventName, eventValue));
	}

	renderInputFields(item: any) {
		return Object.keys(item).map((key, index) => {
			if (key !== 'id') {
				const inputValue = this.state[key] ? this.state[key] : '';
				return (
					<input 
						key={index}
						type="text"
						className="create-item-form__text-input"
						name={key}
						value={inputValue}
						onChange={this.onChange}
						placeholder={key}>
					</input>
				);
			}
		});
	}

	renderCreateForm() {
		const { item } = this.props;
		if (this.state.isOpen === 'OPEN' && isValidObject(item)) {
			return (
				<div className="create-item-form-container">
					<form className="create-item-form" onSubmit={this.onSubmit} autoComplete={"off"}>
						{this.renderInputFields(item)}
						<button className="create-item-form__submit-button" type="submit">Submit</button>
					</form>
				</div>
			);
		}
	}

	render() {
		const { itemType } = this.props;
		const buttonName = this.state.isOpen === 'OPEN' ? 'Close' : `Create New ${itemType}`;
		return (
			<div className="flexible-item-create-container">
				<button className="create-item-form__create_button" onClick={this.toggleEdit}>{buttonName}</button>
				{this.renderCreateForm()}
			</div>
		)
	}
}

function updateStateWithChange(name: any, value: any) {
	return {
		[name]: value,
	};
}

function checkAllItemFieldsIsValid(state: any, item: any): boolean {
	const itemKeys = Object.keys(item);
	for (let k of itemKeys) {
		if (!isValidString(state[k]) && k !== 'id') {
			return false;
		}
	}
	return true;
}