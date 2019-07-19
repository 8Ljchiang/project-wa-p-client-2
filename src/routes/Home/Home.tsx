import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateStatus } from '../../store/profile/actions';

import './Home.css';
import SessionInfo from '../../components2/SessionPanes/SessionInfo';

interface HomeProps {
	status: string;
	updateStatus: any;
	// invite: InvitesState;
	// sendInvite: typeof sendInvite;
	// deleteInvite: typeof deleteInvite;
}

class Home extends Component<HomeProps> {
	// addInvite = () => {
	// 	const { invites } = this.props.invite;
	// 	const newInvite: Invite = {
	// 		id: invites.length.toString(),
	// 		sender: 'sender',
	// 		receiver: 'receiver',
	// 		message: 'project invite',
	// 		sessionId: 'sessionId',
	// 	}
	// 	this.props.invite.sendInvite(newInvite);
	// }

	// renderInvites() {
	// 	return this.props.invite.invites.map((invite: Invite) => {
	// 		return (
	// 			<p key={invite.id}>{invite.id}</p>
	// 		);
	// 	});
	// }

	render() {
		return (
			<div className="home-page-container">
				<h1>Home Page</h1>
				<p>{this.props.status}</p>
				{/* <button onClick={this.addInvite}>Create invite</button> */}
				{/* {this.renderInvites()} */}
			</div>
		);
	}
}

// const mapStateToProps = (state: AppState) => ({	
// 	invite: state.invite
// });
const mapStateToProps = (state: any) => ({	
	status: state.profile.status,
});

// const mapDispatchToProps = (dispatch: any) =>
// bindActionCreators({ sendInvite, deleteInvite }, dispatch );

const mapDispatchToProps = (dispatch: any) => {
	return {
		updateStatus: (newStatus: string) => {
			dispatch(updateStatus(newStatus))
		}
	}
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);