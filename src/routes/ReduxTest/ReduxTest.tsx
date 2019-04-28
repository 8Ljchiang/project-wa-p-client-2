import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { updateStatus } from '../../store/profile/actions';
import { ProfileStoreState } from '../../store/profile/reducers';

type ReduxTestProps = {
	status: any;
	updateStatus: any;
}

type ReduxTestState = {

}

type AllReduxTestProps =  ReduxTestProps & ReduxTestState;

// type ReduxComponentProps = React.ComponentProps<typeof ReduxTest>;

class ReduxTest extends Component<any, ReduxTestState> {
	// updateStatus = () => {
	// 	const newStatus = "status random number: " + Math.floor(Math.random() * 10);
	// 	this.props.updateStatus(newStatus);
	// }

	render() {
		return (
			<div>
				<h1>ReduxTest</h1>
				{/* <p>{this.props.status}</p> */}
			</div>
		);
	}
}

export const FuncReduxTest: React.FC<any> = (props) => {
	return (
		<div>
			<h1>FuncReduxTest</h1>
			<p>{props.status}</p>
		</div>
	);
}

const mapStateToProps = (state: ProfileStoreState) => {
	return state;
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		updateStatus: (newStatus: string) => {
// 			dispatch(updateStatus(newStatus));
// 		}
// 	}
// }

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
	return bindActionCreators(
		{
			updateStatus,
		},
		dispatch
	);
}


// export default ReduxTest;
export default connect(mapStateToProps)(FuncReduxTest);
// export default connect<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = {}>(
// export default connect<any, any, any, any>(
// 	mapStateToProps: MapStateToPropsParam
// 	MapStateToPropsParam<any, any, any>,
//     mapDispatchToProps: MapDispatchToPropsNonObject<any, any}>
// )(FuncReduxTest);

// https://stackoverflow.com/questions/48292707/strongly-typing-the-react-redux-connect-with-typescript?rq=1
// https://stackoverflow.com/questions/54154673/react-typescript-redux-connect-function-not-working
// https://github.com/aikoven/typescript-fsa/issues/55
// https://github.com/mui-org/material-ui/issues/8447
// https://stackoverflow.com/questions/41554365/react-ref-returns-a-connect-object-instead-of-dom