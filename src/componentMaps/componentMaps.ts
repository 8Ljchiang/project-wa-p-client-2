import ClickableFlexibleItemsList from '../components/FlexibleItemsList/ClickableFlexibleItemsList';

import FlexibleItemDetailView from '../components/FlexibleItemDetail/FlexibleItemDetailView';
import ProjectItemDetailView from '../components/ProjectItemDetail/ProjectItemDetailView';
import SessionItemDetailView from '../components/SessionItemDetail/SessionItemDetailView';

import FlexibleItemView from '../components/FlexibleItem/FlexibleItemView';
import ProjectItemView from '../components/ProjectItem/ProjectItemView';
import SessionItemView from '../components/SessionItem/SessionItemView';
import { IComponentType } from '../helpers/componentHelpers';
import ProfilePane from '../components2/ProfilePanes/Profile';
import InvitesPane from '../components2/ProfilePanes/Invites';
import MyIdeasPane from '../components2/ProfilePanes/Ideas';
import MyProjects from '../components2/ProfilePanes/MyProjects';
import MySessions from '../components2/ProfilePanes/MySessions';
import MyExercises from '../components2/ProfilePanes/MyExercises';
import { RequestsPane } from '../components2/ProfilePanes/MyProjectRequests';
import { JoinedSessionsPane } from '../components2/ProfilePanes/JoinedSessions';
import { FollowedExercisesPane } from '../components2/ProfilePanes/FollowedExercises';
import { FollowedUsersPane } from '../components2/ProfilePanes/FollowedUsers';
import MyMessages from '../components2/ProfilePanes/MyMessages';
import { SessionPaneSelection } from '../store/viewContext/types';
import TimeTrackingPane from '../components2/SessionPanes/TimeTrackingPane';
import FeatureTrackingPane from '../components2/SessionPanes/FeatureTrackingPane';
import SessionDetailsPane from '../components2/SessionPanes/SessionDetailsPane';
import SessionSummaryPane from '../components2/SessionPanes/SessionSummaryPane';

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
	idea: null,
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
	idea: null,
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
	idea: null,
};

export enum RightMenuCompRefNames {
	Profile = 'prof',
	Invites = 'invi',
	Ideas = 'idea',
	Projects = 'proj',
	Sessions = 'sess',
	Exercises = 'exer',
	ProjectRequests = 'rproj',
	JoinedSessions = 'jsess',
	FollowedExercises = 'fexer',
	FollowedUsers = 'fuser',
	Messages = 'mess',
}

export type IRightMenuComponentMap = {
	// [key in keyof typeof componentRefNames]: any; // any as type placeholder for React.Component type;
	[key in RightMenuCompRefNames]: any; // any as type placeholder for React.Component type;
}

export const rightMenuComponentMap: IRightMenuComponentMap = {
	prof: ProfilePane,
	invi: InvitesPane,
	idea: MyIdeasPane,
	proj: MyProjects,
	sess: MySessions,
	exer: MyExercises,
	rproj: RequestsPane,
	jsess: JoinedSessionsPane,
	fexer: FollowedExercisesPane,
	fuser: FollowedUsersPane,
	mess: MyMessages,
}

export type ISessionPaneComponentMap = {
	[key in SessionPaneSelection]: any;
}

export const sessionPaneComponentMap: ISessionPaneComponentMap = {
	[SessionPaneSelection.EventTracking]: TimeTrackingPane,
	[SessionPaneSelection.FeatureTracking]: FeatureTrackingPane,
	[SessionPaneSelection.SessionDetails]: SessionDetailsPane,
	[SessionPaneSelection.SessionSummary]: SessionSummaryPane,
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
