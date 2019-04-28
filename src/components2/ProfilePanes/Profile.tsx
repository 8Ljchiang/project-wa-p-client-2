import React from 'react';

import { bindActionCreators } from 'redux';
import { updateStatus } from '../../store/profile/actions';
import { connect } from 'react-redux';

type ProfilePaneProps = {
	status: string;
}

type ProfilePaneState = {

}

type ReduxStoreProps = {

}

interface ReduxDispatchProps {
	updateState: () => void;
}

type PropsSet = ProfilePaneProps & ReduxStoreProps & ReduxDispatchProps;

const ProfilePane: React.FunctionComponent<ProfilePaneProps> = (props: ProfilePaneProps) => {
	return (
		<div className="profile-overlay">
			<h1>Profile Pane</h1>
			<p>{props.status}</p>
		</div>
	);
}

const mapStateToProps = (state: any, ownProps: ProfilePaneProps): ProfilePaneProps => {
	return {
		status: state.profile.status
	};
}

const mapDispatchToProps = (dispatch: any, ownProps: ProfilePaneProps) /*: ReduxDispatchProps */ => {
	return bindActionCreators({
		updateStatus
	}, dispatch);
}

export default connect<{}, {}, ProfilePaneProps>(mapStateToProps, mapDispatchToProps)(ProfilePane);
