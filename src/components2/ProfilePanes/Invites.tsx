import React from 'react';

import { connect } from 'react-redux';

import { sendInvite, deleteInvite } from '../../store/invite/actions';
import { ReduxStore } from '../../store/appReducers';
import { bindActionCreators } from 'redux';
import { IInvite } from '../../seed/data';

interface InvitesPaneProps {
	invites: IInvite[];
	sendInvite: typeof sendInvite;
	deleteInvite: typeof deleteInvite;
}

class InvitesPane extends React.Component<InvitesPaneProps> {
	createInvite = () => {
		const newInvite: IInvite = {
			id: this.props.invites.length.toString(),
			title: 'title',
			sender: 'sender',
			receiver: 'receiver',
			message: 'you are invited to join the project',
			sessionId: 'sessionId',
		}
		this.props.sendInvite(newInvite);
	}

	renderInvites() {
		return this.props.invites.map((invite: IInvite) => {
			return (
				<p key={invite.id}>{invite.id}</p>
			);
		});
	}

	render() {
		return (
			<div className="profile-overlay">
				<h1>Invites Pane</h1>
				<button onClick={this.createInvite}>Create invite</button>
				{this.renderInvites()}
			</div>
		);
	}
}

const mapStateToProps = (state: ReduxStore) => {
	return {
		invites: state.invite.invites
	};
}

const mapDispatchToProps = (dispatch: any) => {
	return bindActionCreators({
		sendInvite,
		deleteInvite,
	}, dispatch);
}

// export default InvitesPane;
export default connect(mapStateToProps, mapDispatchToProps)(InvitesPane);