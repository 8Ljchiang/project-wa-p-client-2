import React from 'react';

import { connect } from 'react-redux';

import { ReduxStore } from '../../store/appReducers';
import { bindActionCreators } from 'redux';
import { IExercise } from '../../seed/data';

interface MyExercisesPaneProps {
	exercises: IExercise[];
}

class MyExercisesPane extends React.Component<MyExercisesPaneProps> {
	renderData() {
		return this.props.exercises.map((obj: IExercise) => {
			return (
				<p key={obj.id}>{obj.id}</p>
			);
		});
	}

	render() {
		return (
			<div className="profile-overlay">
				<h1>My Exercises Pane</h1>
				{this.renderData()}
			</div>
		);
	}
}

const mapStateToProps = (state: ReduxStore) => {
	return {
		exercises: state.exercise.exercises,
	};
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return bindActionCreators({
// 		sendInvite,
// 		deleteInvite,
// 	}, dispatch);
// }

// export default InvitesPane;
export default connect(mapStateToProps, null)(MyExercisesPane);