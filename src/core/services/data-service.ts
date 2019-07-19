export class DataService {
	static dataMap: any = {};

	static setData(key: string, value: any): void {
		this.dataMap[key] = value;
	}

	static getData(key: string): any {
		return this.dataMap[key];
	}
}
