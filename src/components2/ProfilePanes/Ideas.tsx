// import React from 'react';

// export const IdeasPane = () => {
// 	return (
// 		<div className="profile-overlay">
// 			<h1>Ideas Pane</h1>
// 		</div>
// 	);
// }

import React from 'react';

import { connect } from 'react-redux';

import { ReduxStore } from '../../store/appReducers';
import { bindActionCreators } from 'redux';
import { IIdea } from '../../core/types/data-type-definitions';
// import { IIdea } from '../../seed/data';

interface MyIdeasPaneProps {
	ideas: IIdea[];
}

class MyIdeasPane extends React.Component<MyIdeasPaneProps> {
	renderData() {
		return this.props.ideas.map((obj: IIdea) => {
			return (
				<p key={obj.id}>{obj.id}</p>
			);
		});
	}

	render() {
		return (
			<div className="profile-overlay">
				<h1>My Ideas Pane</h1>
				{this.renderData()}
			</div>
		);
	}
}

const mapStateToProps = (state: ReduxStore) => {
	return {
		ideas: state.idea.ideas,
	};
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return bindActionCreators({
// 		sendInvite,
// 		deleteInvite,
// 	}, dispatch);
// }

// export default InvitesPane;
export default connect(mapStateToProps, null)(MyIdeasPane);