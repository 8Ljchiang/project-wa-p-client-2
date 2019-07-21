import { IExercise, BaseObjectId } from "../../core/types/data-type-definitions";

export enum ExerciseReduxActionTypes {
	READ_EXERCISES = 'R_EXER',
	READ_ONE_EXERCISE = 'R_O_EXER',
	CREATE_EXERCISE = 'C_EXER',
	DELETE_EXERCISE = 'D_EXER',
}

export interface ExercisesState {
	exercises: IExercise[];
	selectedExercise: IExercise | null;
}

interface ReadExercisesAction {
	type: ExerciseReduxActionTypes.READ_EXERCISES;
	payload: null;
}

interface ReadOneExerciseAction {
	type: ExerciseReduxActionTypes.READ_ONE_EXERCISE;
	payload: BaseObjectId;
}

interface CreateExerciseAction {
	type: ExerciseReduxActionTypes.CREATE_EXERCISE;
	payload: IExercise;
}

interface DeleteExerciseAction {
	type: ExerciseReduxActionTypes.DELETE_EXERCISE;
	payload: BaseObjectId;
}

export type ExerciseReduxActions = ReadExercisesAction | ReadOneExerciseAction | CreateExerciseAction | DeleteExerciseAction;