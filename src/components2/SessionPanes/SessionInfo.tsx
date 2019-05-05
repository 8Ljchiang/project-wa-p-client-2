import React, { Component } from 'react';
import { getSessionPaneComponent } from '../../helpers/componentHelpers';
import { SessionPaneSelection } from '../../store/viewContext/types';
import { connect } from 'react-redux';
import { setSessionPaneSelectionAction } from '../../store/viewContext/actions';

type SessionInfoProps = {
	sessionPaneSelection: SessionPaneSelection;
	setSessionPaneSelection: (sessionPaneSelection: SessionPaneSelection) => void;
}

type SessionInfoState = {};

type ReduxStoreProps = {};

interface ReduxDispatchProps {

}

type PropsSet = SessionInfoProps & ReduxStoreProps & ReduxDispatchProps;


class SessionInfo extends Component<SessionInfoProps> {
	constructor(props: SessionInfoProps) {
		super(props);

		this.setSessionPaneSelection = this.setSessionPaneSelection.bind(this); 
	}

	setSessionPaneSelection(sessionPaneSelection: SessionPaneSelection) {
		this.props.setSessionPaneSelection(sessionPaneSelection);
	}

	renderButtons() {
		const selectionValues = Object.values(SessionPaneSelection);
		return selectionValues.map((selectionValue: SessionPaneSelection, index: number) => {
			return (
				<button key={index} onClick={() => this.setSessionPaneSelection(selectionValue)}>{selectionValue}</button>
			);
		});
	}

	render() {
		const { sessionPaneSelection } = this.props;
		const SelectedComponent = getSessionPaneComponent(sessionPaneSelection)
		return (
			<div className="pane-container">
				{this.renderButtons()}
				<p>{this.props.sessionPaneSelection}</p>
				{ SelectedComponent && <SelectedComponent />}
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	sessionPaneSelection: state.viewContext.sessionPaneSelection,
});

const mapDispatchToProps = (disaptch: any) => {
	return {
		setSessionPaneSelection: (sessionPaneSelection: SessionPaneSelection) => {
			disaptch(setSessionPaneSelectionAction(sessionPaneSelection));
		}
	}
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return bindActionCreators({
// 		setSessionPaneSelectionAction
// 	}, dispatch);
// }


export default connect(mapStateToProps, mapDispatchToProps)(SessionInfo);