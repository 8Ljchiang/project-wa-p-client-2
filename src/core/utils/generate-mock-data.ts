import { isValidString, isValidArray } from "./validation-helpers";
import { IDataSetExample, mockDataGenSchemas, IDataType } from "./mock-data-gen-schemas";

function generateDataItemSet(exampleItem: any, count: number, itemName: string): any[] {
	const itemKeys = Object.keys(exampleItem);
	if ( exampleItem && itemKeys.length> 0) {
		const results = [];
		for (let i = 0; i < count; i++) {
			const item: any = {};
			for (let key of itemKeys) {
				item[key] = isValidString(exampleItem[key]) || isValidArray(exampleItem[key]) ? exampleItem[key] : `${itemName}-${key.slice(0, 4)}-${i}`;
			}
			results.push(item);
		}
		return results;
	}
	return [];
}

function generateData<Type>(mockDataSchemas: IDataSetExample, dataType: IDataType, count: number = 10) {
	const exampleItem = mockDataSchemas[dataType];
	return generateDataItemSet(exampleItem, count, dataType) as Type[];
}

export function autoGenerateMockData<Type>(dataType: IDataType, count: number = 10): Type[] {
	return generateData<Type>(mockDataGenSchemas, dataType, count);
}
