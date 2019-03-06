/**
 * Depricated
 */

import React, { Component } from 'react';

import SessionList from '../SessionList/SessionList';

export default class SessionsListPage extends Component {
	render() {
		return (
			<div className="page-container">
				<h3>Sessions List</h3>
				<SessionList sessions={[]} />
			</div>
		);
	}
}
