import { IComponentDisplayType } from "./componentHelpers";

export type IAppConfigType = {
	displayType: IComponentDisplayType;
}

export const appConfig: IAppConfigType = {
	displayType: 'default',
}