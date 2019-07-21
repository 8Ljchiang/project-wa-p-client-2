import { IExercise } from "../types/data-type-definitions";

export function exercisesDataAdapter(data: any[]): IExercise[] {
	return data.map(item => item);
}