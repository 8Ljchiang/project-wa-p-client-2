import ClickableFlexibleItemsList from '../components/FlexibleItemsList/ClickableFlexibleItemsList';

import FlexibleItemDetailView from '../components/FlexibleItemDetail/FlexibleItemDetailView';
import ProjectItemDetailView from '../components/ProjectItemDetail/ProjectItemDetailView';
import SessionItemDetailView from '../components/SessionItemDetail/SessionItemDetailView';

import FlexibleItemView from '../components/FlexibleItem/FlexibleItemView';
import ProjectItemView from '../components/ProjectItem/ProjectItemView';
import SessionItemView from '../components/SessionItem/SessionItemView';
import { IComponentType } from '../helpers/componentHelpers';
import { ProfilePane } from '../components2/ProfilePanes/Profile';
import InvitesPane from '../components2/ProfilePanes/Invites';
import { IdeasPane } from '../components2/ProfilePanes/Ideas';

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
	invite: null,
};

export const itemsListComponentMap: IComponentMapType = {
	default: ClickableFlexibleItemsList,
	flex: ClickableFlexibleItemsList,
	project: null,
	session: null,
	exercise: null,
	message: null,
	user: null,
	invite: null,
};

export const itemComponentMap: IComponentMapType = {
	default: FlexibleItemView,
	flex: FlexibleItemView,
	project: ProjectItemView,
	session: SessionItemView,
	exercise: null,
	message: null,
	user: null,
	invite: null,
};

export enum RightMenuCompRefNames {
	profile = 'prof',
	invites = 'invi',
	ideas = 'idea',
}

export type IRightMenuComponentMap = {
	// [key in keyof typeof componentRefNames]: any; // any as type placeholder for React.Component type;
	[key in RightMenuCompRefNames]: any; // any as type placeholder for React.Component type;
}

export const rightMenuComponentMap: IRightMenuComponentMap = {
	prof: ProfilePane,
	invi: InvitesPane,
	idea: IdeasPane,
}

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
