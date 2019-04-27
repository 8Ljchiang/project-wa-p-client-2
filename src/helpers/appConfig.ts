import { IComponentDisplayType } from "./componentHelpers";

export type IAppConfigType = {
	displayType: IComponentDisplayType;
	animationDuration: number;
	itemGenerationCount: number;
	networkCallDelay: number;
}

export const appConfig: IAppConfigType = {
	displayType: 'flex',
	animationDuration: 600,
	itemGenerationCount: 40,
	networkCallDelay: 500,
}