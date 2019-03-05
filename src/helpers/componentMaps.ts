import React from 'react';

import FlexibleItemDetail from '../components/FlexibleItemDetail/FlexibleItemDetail';
// import ProjectDetail from '';
// import SessionDetail from '';

import ClickableFlexibleItemsList from '../components/FlexibleItemsList/ClickableFlexibleItemsList';
// import ProjectsList from '';
import SessionList from '../components/SessionList/SessionList';

import FlexibleItem from '../components/FlexibleItem/FlexibleItem';
import SessionListItem from '../components/SessionListItem/SessionListItem';
import ProjectListItem from '../components/ProjectListItem/ProjectListItem';
import FlexiblePage from '../components/FlexiblePage/FlexiblePage';
import GenericPageComponent, { IGenericPageComponent } from '../components/FlexiblePage/GenericPage';

export const itemDetailComponentMap = {
	default: FlexibleItemDetail,
	project: null,
	session: SessionList,
};

export const itemsListComponentMap = {
	default: ClickableFlexibleItemsList,
	project: null,
	session: SessionList,
};

export const itemComponentMap = {
	default: FlexibleItem,
	project: ProjectListItem,
	session: SessionListItem,
};

export interface ISectionMapType {
	[key: string]: string;
	projects: string;
	sessions: string;
}

export const sectionMaps: ISectionMapType = {
	projects: 'Projects',
	sessions: 'Sessions',
};

interface IContainerComponentMap<T> {
	[key: string]: IGenericPageComponent<T>;
}

// The components need to extend GenericPageComponent
export const containerComponentMap = {
	default: FlexiblePage,
	flexPage: FlexiblePage,
};
