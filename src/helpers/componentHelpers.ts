import { switchcase } from './utils';
import ProjectListItem from '../components/ProjectListItem/ProjectListItem';
import SessionListItem from '../components/SessionListItem/SessionListItem';

const componentMap: any = {
	default: ProjectListItem,
	project: ProjectListItem,
	session: SessionListItem,
};

export type IComponentType =
	'project' |
	'session' |
	'default';

export function getMatchingComponent(type: IComponentType) {
	const Component = switchcase(componentMap)('default')(type);
	return Component;
}
