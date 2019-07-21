import { DataTypes } from './../../core/types/data-type-definitions';
import { DataServiceManager } from './../../core/services/DataServiceManager';
import { ExercisesState, ExerciseReduxActionTypes, ExerciseReduxActions } from "./types";
import { IExercise } from "../../core/types/data-type-definitions";
import { LogService } from '../../core/services/LogService';
import { exercisesDataAdapter } from '../../core/utils/data-adapters';
import { IDataService } from '../../core/services/IDataService';
import { catchErrorInReduxReducer } from '../../core/utils/catchers';
// import { reduxSwitchcase, reduxSwitchcaseF } from "../../core/utils/validation-helpers";


const defaultExercisesState: ExercisesState = {
	exercises: [],
	selectedExercise: null
}

type ReducerFunction = (context: any) => ExercisesState;

type ExercisesCaseMap = {
	[key in ExerciseReduxActionTypes]: ExercisesState | ReducerFunction;
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

const readAll = (initialState: ExercisesState, args: any): ExercisesState => {
	const dataType = DataTypes.Exercise;
	const serviceResult = DataServiceManager.getService(dataType);
	return serviceResult.when<ExercisesState, ExercisesState>({
		success: (dataService: IDataService<any>) => {
			const networkResult = dataService.readAll();
			if (networkResult.errors.length > 0) {
				LogService.error(new Error(networkResult.errors[0]), `DataService: ${dataType}`);
			}
			if (networkResult.data && Array.isArray(networkResult.data)) {
				return Object.assign({}, initialState, exercisesDataAdapter(networkResult.data));
			}
			return initialState;
		},
		failure: (error: Error) => {
			LogService.error(error, `DataServiceManager: ${dataType}`);
			return initialState;
		}
	});
}

const create = (initialState: ExercisesState, args: any): ExercisesState => {
	const dataType = DataTypes.Exercise;
	const serviceResult = DataServiceManager.getService(dataType);
	return serviceResult.when<ExercisesState, ExercisesState>({
		success: (dataService: IDataService<any>) => {
			const networkResult = dataService.create(args.partialItem);
			if (networkResult.errors.length > 0) {
				LogService.error(new Error(networkResult.errors[0]), `DataService: ${dataType}`);
			}
			if (networkResult.data && Array.isArray(networkResult.data)) {
				return Object.assign({}, initialState, [...initialState.exercises, networkResult.data]);
			}
			return initialState;
		},
		failure: (error: Error) => {
			LogService.error(error, `DataServiceManager: ${dataType}`);
			return initialState;
		}
	});
}

export function exerciseReducer(
	state: ExercisesState = defaultExercisesState,
	action: ExerciseReduxActions
): ExercisesState {
	// return reduxSwitchcaseF(exerciseCases(state, action))(state)(action.type)({ dataType: DataTypes.Exercise, dataArrayAdapter: exercisesDataAdapter });
	LogService.info(`ExerciseReducer: ${action.type}`);
	switch(action.type) {
		case ExerciseReduxActionTypes.READ_EXERCISES:
			return catchErrorInReduxReducer(readAll, state, `ExerciseReducer: ${ExerciseReduxActionTypes.READ_EXERCISES}`)(state, {});
		case ExerciseReduxActionTypes.READ_ONE_EXERCISE:
			return state;
		case ExerciseReduxActionTypes.CREATE_EXERCISE:
			return catchErrorInReduxReducer(create, state, `ExercisesReducer: ${ExerciseReduxActionTypes.CREATE_EXERCISE}`)(state, { partialItem: action.payload });
		case ExerciseReduxActionTypes.DELETE_EXERCISE:
			return state;
		default:
			return state;
	}
}
