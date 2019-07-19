import { IDataType } from "../../utils/mock-data-gen-schemas";

export class NoDataServiceFoundError extends Error {
	constructor(type: IDataType) {
		super(`No data service found for ${type}.`);
	}
}