// import { switchcaseF, isValidString, isValidArray } from '../core/utils/validation-helpers';
// import { DataTypes } from './dataTypes';

// export type IDataType = DataTypes;

// export type IDataMap = {
// 	[key in IDataType]: any;
// }

// // Used for GraphQL Queries;
// // export const dataQueryMap = {

// // }

// export const dataMap: IDataMap = {
// 	project: getProjects,
// 	session: getSessions,
// 	exercise: getExercises, 
// 	invite: null,
// 	message: null,
// 	user: null,
// 	idea: null,
// };



// // Depricated
// function getProjects(count: number = 5): IProject[] {
// 	const results: IProject[] = [];
// 	for (let i = 0; i < count; i++) {
// 		// results.push({
// 		// 	description: `project-desc-${i}`,
// 		// 	id: `p-${i}`,
// 		// 	title: `project-title-${i}`,
// 		// 	type: `project-type-${i}`,
// 		// });
// 	}
// 	return results;
// }

// // Depricated
// function getSessions(count: number = 5): ISession[] {
// 	const results: ISession[] = [];
// 	for (let i = 0; i < count; i++) {
// 		// results.push({
// 		// 	description: `session-desc-${i}`,
// 		// 	id: `s-${i}`,
// 		// 	title: `session-title-${i}`,
// 		// });
// 	}
// 	return results;
// }

// // Depricated
// function getExercises(count: number = 5): IExercise[] {
// 	const results: IExercise[] = [];
// 	for (let i = 0; i < count; i++) {
// 		// const exercise: IExercise = {
// 		// 	description: `exercise-desc-${i}`,
// 		// 	id: `e-${i}`,
// 		// 	title: `exercise-title-${i}`,
// 		// 	type: `exercise-type-${i}`,
// 		// };

// 		// results.push(exercise);
// 	}
// 	return results;
// }

// function generateDataItemSet(exampleItem: any, count: number, itemName: string): any[] {
// 	const itemKeys = Object.keys(exampleItem);
// 	if ( exampleItem && itemKeys.length> 0) {
// 		const results = [];
// 		for (let i = 0; i < count; i++) {
// 			const item: any = {};
// 			for (let key of itemKeys) {
// 				item[key] = isValidString(exampleItem[key]) || isValidArray(exampleItem[key]) ? exampleItem[key] : `${itemName}-${key.slice(0, 4)}-${i}`;
// 			}
// 			results.push(item);
// 		}
// 		return results;
// 	}
// 	return [];
// }

// function generateAllData(dataExampleSet: IDataSetExample, count: number = 10) {
// 	const resultDataSet: any = {};
// 	const dataTypeNames = Object.keys(dataExampleSet);

// 	dataTypeNames.forEach((name: string) => {
// 		const dataTypeName = name as IDataType;
// 		const exampleItem = dataExampleSet[dataTypeName];
// 		resultDataSet[dataTypeName] = generateDataItemSet(exampleItem, count, dataTypeName);
// 	});

// 	return resultDataSet;
// }

// export function getItems<T>(type: IDataType, count: number): T[] {
// 	// const results = switchcaseF(dataMap)(type)(count);
// 	const resultItems = switchcaseF(dataMap)(() => [])(type)(count);
// 	// console.log(resultItems);
// 	return (resultItems && resultItems.length > 0) ? resultItems : [];
// }
