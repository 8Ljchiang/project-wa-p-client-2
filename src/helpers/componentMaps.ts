import ClickableFlexibleItemsList from '../components/FlexibleItemsList/ClickableFlexibleItemsList';

import FlexibleItemDetailView from '../components/FlexibleItemDetail/FlexibleItemDetailView';
import ProjectItemDetailView from '../components/ProjectItemDetail/ProjectItemDetailView';
import SessionItemDetailView from '../components/SessionItemDetail/SessionItemDetailView';

import FlexibleItemView from '../components/FlexibleItem/FlexibleItemView';
import ProjectItemView from '../components/ProjectItem/ProjectItemView';
import SessionItemView from '../components/SessionItem/SessionItemView';
import { IComponentType } from './componentHelpers';

// import SessionList from '../components/SessionList/SessionList';
// import { IGenericPageComponent } from '../components/FlexiblePage/GenericPage';

export type IComponentMapType = {
	[key in IComponentType]: any;
}

export const itemDetailComponentMap: IComponentMapType = {
	default: FlexibleItemDetailView,
	project: ProjectItemDetailView,
	session: SessionItemDetailView,
	message: null,
	user: null,
	flex: FlexibleItemDetailView,
	exercise: null,
};

export const itemsListComponentMap: IComponentMapType = {
	default: ClickableFlexibleItemsList,
	flex: ClickableFlexibleItemsList,
	project: null,
	session: null,
	exercise: null,
	message: null,
	user: null,
};

export const itemComponentMap: IComponentMapType = {
	default: FlexibleItemView,
	flex: FlexibleItemView,
	project: ProjectItemView,
	session: SessionItemView,
	exercise: null,
	message: null,
	user: null,
};

// export interface ISectionMapType {
// 	[key: string]: string;
// 	projects: string;
// 	sessions: string;
// }

// export const sectionMaps: ISectionMapType = {
// 	projects: 'Projects',
// 	sessions: 'Sessions',
// };

// interface IContainerComponentMap<T> {
// 	[key: string]: IGenericPageComponent<T>;
// }

// The components need to extend GenericPageComponent
// export const containerComponentMap = {
// 	default: FlexiblePage,
// 	flexPage: FlexiblePage,
// };
