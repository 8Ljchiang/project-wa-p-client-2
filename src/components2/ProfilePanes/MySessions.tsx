import React from 'react';

import { connect } from 'react-redux';

import { ReduxStore } from '../../store/appReducers';
import { bindActionCreators } from 'redux';
import { ISession } from '../../seed/data';

interface MySessionsPaneProps {
	sessions: ISession[];
}

class MySessionsPane extends React.Component<MySessionsPaneProps> {
	renderData() {
		return this.props.sessions.map((obj: ISession) => {
			return (
				<p key={obj.id}>{obj.id}</p>
			);
		});
	}

	render() {
		return (
			<div className="profile-overlay">
				<h1>My Sessions Pane</h1>
				{this.renderData()}
			</div>
		);
	}
}

const mapStateToProps = (state: ReduxStore) => {
	return {
		sessions: state.session.sessions,
	};
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return bindActionCreators({
// 		sendInvite,
// 		deleteInvite,
// 	}, dispatch);
// }

// export default InvitesPane;
export default connect(mapStateToProps, null)(MySessionsPane);