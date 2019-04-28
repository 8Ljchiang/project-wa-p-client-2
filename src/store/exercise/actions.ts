import { ExerciseReduxActionTypes } from "./types";
import { BaseObjectId, IExercise } from "../../seed/data";

export function readExercises() {
	return {
		type: ExerciseReduxActionTypes.READ_EXERCISES,
		payload: null,
	}
}

export function readOneExercise(exerciseId: BaseObjectId) {
	return {
		type: ExerciseReduxActionTypes.READ_ONE_EXERCISE,
		payload: exerciseId,
	}
}

export function createExercise(newExercise: IExercise) {
	return {
		type: ExerciseReduxActionTypes.CREATE_EXERCISE,
		payload: newExercise,
	}
}

export function deleteExercise(exerciseId: BaseObjectId) {
	return {
		type: ExerciseReduxActionTypes.DELETE_EXERCISE,
		payload: exerciseId,
	}
}