import React from 'react';
import { shallow } from 'enzyme';
import SessionList, { ISessionListProps } from '../components/SessionList/SessionList';

describe('SessionList', () => {
	let props: ISessionListProps;
	let enzymeComponentWrapper: React.Component | undefined;
	const shallowRenderSessionList = (): any => {
		if (!enzymeComponentWrapper) {
			enzymeComponentWrapper = shallow(
				<SessionList {...props} />
			);
		}
		return enzymeComponentWrapper;
	};

	beforeEach(() => {
		props = {
			sessions: [{ title: 'title1', description: 'description1' }, { title: 'title2', description: 'description2' }],
		};
		enzymeComponentWrapper = undefined;
	});

	it('always renders a div', () => {
		const divs: any = shallowRenderSessionList().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});

	it('renders 2 children', () => {
		const listComponent = shallowRenderSessionList().find('div');
		expect(listComponent.children().length).toEqual(props.sessions.length);
	});
});
