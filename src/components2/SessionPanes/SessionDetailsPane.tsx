import React, { Component } from 'react';
import { SessionPaneSelection } from '../../store/viewContext/types';
import { setSessionPaneSelectionAction } from '../../store/viewContext/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SessionDetailsPane extends Component {
	constructor(props: any) {
		super(props);

		
	}

	render() {
		return (
			<div className="session-details-pane-container">
				<h2>Session Details Pane</h2>
			</div>
		);
	}
}

export default SessionDetailsPane;
