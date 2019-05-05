import React, { Component } from 'react';
import { connect } from 'react-redux';

class SessionSummaryPane extends Component {
	render() {
		return (
			<h1>Session Summary Pane</h1>
		);
	}
}

export default connect(null, null)(SessionSummaryPane);