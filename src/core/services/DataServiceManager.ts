import { appConfig } from './../../configuration/appConfig';
import { DataTypes, IExercise, IIdea, IMessage, IProject, ISession, IInvite, IUser } from './../types/data-type-definitions';
import { NoDataServiceFoundError } from './errors/NoDataServiceFoundError';
import { IDataService } from './IDataService';
import { IDataType } from '../utils/mock-data-gen-schemas';
import { ServiceResult } from '../types/ServiceResult';
import { MockDataService } from './mocks/MockDataService';
import { autoGenerateMockData } from '../utils/generate-mock-data';

export class DataServiceManager {
	static services: { [key in IDataType]: any } = {
		[DataTypes.Exercise]:  appConfig.useMockDataService ? new MockDataService<IExercise>(autoGenerateMockData(DataTypes.Exercise, 12)) : null,
		[DataTypes.Idea]: appConfig.useMockDataService ? new MockDataService<IIdea>(autoGenerateMockData(DataTypes.Exercise, 12)) : null,
		[DataTypes.Messasge]: appConfig.useMockDataService ? new MockDataService<IMessage>(autoGenerateMockData(DataTypes.Messasge, 12)) : null,
		[DataTypes.Project]: appConfig.useMockDataService ? new MockDataService<IProject>(autoGenerateMockData(DataTypes.Project, 12)) : null,
		[DataTypes.Session]: appConfig.useMockDataService ? new MockDataService<ISession>(autoGenerateMockData(DataTypes.Session, 12)) : null,
		[DataTypes.SessionInvite]: appConfig.useMockDataService ? new MockDataService<IInvite>(autoGenerateMockData(DataTypes.SessionInvite, 12)) : null,
		[DataTypes.User]: appConfig.useMockDataService ? new MockDataService<IUser>(autoGenerateMockData(DataTypes.User, 12)) : null,
	}

	static getService<T>(type: IDataType): ServiceResult<IDataService<T>, NoDataServiceFoundError> {
		if (Object.keys(this.services).includes(type)) {
			const dataService = this.services[type];
			if (dataService) {
				return ServiceResult.Success(dataService);
			} 
		}
		return ServiceResult.Failure(new NoDataServiceFoundError(type));
	}

	static setService<T>(type: IDataType, service: IDataService<T>): void {
		this.services[type] = service;
	}
}