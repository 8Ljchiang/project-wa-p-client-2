import React from 'react';

import { connect } from 'react-redux';

import { ReduxStore } from '../../store/appReducers';
import { bindActionCreators } from 'redux';
import { IProject } from '../../seed/data';

interface MyProjectsPaneProps {
	projects: IProject[];
}

class MyProjectsPane extends React.Component<MyProjectsPaneProps> {
	renderData() {
		return this.props.projects.map((obj: IProject) => {
			return (
				<p key={obj.id}>{obj.id}</p>
			);
		});
	}

	render() {
		return (
			<div className="profile-overlay">
				<h1>My Projects Pane</h1>
				{this.renderData()}
			</div>
		);
	}
}

const mapStateToProps = (state: ReduxStore) => {
	return {
		projects: state.project.projects,
	};
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return bindActionCreators({
// 		sendInvite,
// 		deleteInvite,
// 	}, dispatch);
// }

// export default InvitesPane;
export default connect(mapStateToProps, null)(MyProjectsPane);