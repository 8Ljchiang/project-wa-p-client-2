import { IComponentDisplayType } from "./componentHelpers";

export type IAppConfigType = {
	displayType: IComponentDisplayType;
	animationDuration: number;
}

export const appConfig: IAppConfigType = {
	displayType: 'default',
	animationDuration: 600,
}