import { ExercisesState, ExerciseReduxActionTypes, ExerciseReduxActions } from "./types";
import { autoGenerateData, IExercise } from "../../seed/data";
import { DataTypes } from "../../seed/dataTypes";
import { reduxSwitchcase } from "../../helpers/utils";


const defaultExercisesState: ExercisesState = {
	exercises: autoGenerateData(DataTypes.Exercise, 10),
	selectedExercise: null
}

type ExercisesCaseMap = {
	[key in ExerciseReduxActionTypes]: ExercisesState;
}

function exerciseCases(state: ExercisesState, action: ExerciseReduxActions) {
	const cases: ExercisesCaseMap = {
		[ExerciseReduxActionTypes.READ_EXERCISES]: Object.assign({}, state, defaultExercisesState),
		[ExerciseReduxActionTypes.READ_ONE_EXERCISE]: Object.assign({}, state, { selectedExercise: action.payload }),
		[ExerciseReduxActionTypes.CREATE_EXERCISE]: Object.assign({}, state, { exercises: [ ...state.exercises, action.payload ] }),
		[ExerciseReduxActionTypes.DELETE_EXERCISE]: Object.assign({}, state, { exercises: state.exercises.filter((exercise: IExercise) => exercise.id !== action.payload) })
	}
	return cases;
}

export function exerciseReducer(
	state: ExercisesState = defaultExercisesState,
	action: ExerciseReduxActions
): ExercisesState {
	return reduxSwitchcase(exerciseCases(state, action))(state)(action.type);
}
