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
