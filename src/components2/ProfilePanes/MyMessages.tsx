import React from 'react';

import { connect } from 'react-redux';

import { ReduxStore } from '../../store/appReducers';
import { bindActionCreators } from 'redux';
import { IMessage } from '../../seed/data';

interface MyMessagesPaneProps {
	messages: IMessage[];
}

class MyMessagesPane extends React.Component<MyMessagesPaneProps> {
	renderData() {
		return this.props.messages.map((obj: IMessage) => {
			return (
				<p key={obj.id}>{obj.id}</p>
			);
		});
	}

	render() {
		return (
			<div className="profile-overlay">
				<h1>My Messages Pane</h1>
				{this.renderData()}
			</div>
		);
	}
}

const mapStateToProps = (state: ReduxStore) => {
	return {
		messages: state.message.messages,
	};
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return bindActionCreators({
// 		sendInvite,
// 		deleteInvite,
// 	}, dispatch);
// }

// export default InvitesPane;
export default connect(mapStateToProps, null)(MyMessagesPane);