import React from 'react';
import { shallow } from 'enzyme';
import SessionsListPage from '../components/SessionsListPage/SessionsListPage';
import SessionList from '../components/SessionList/SessionList';

describe('SessionsListPage', () => {
	let enzymeComponentWrapper: React.Component | undefined;
	const shallowRenderSessionsListPage = (): any => {
		if (!enzymeComponentWrapper) {
			enzymeComponentWrapper = shallow(
				<SessionsListPage />
			);
		}
		return enzymeComponentWrapper;
	};

	beforeEach(() => {
		enzymeComponentWrapper = undefined;
	});

	it('always renders a div', () => {
		const divs: any = shallowRenderSessionsListPage().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});

	it('renders child SessionList', () => {
		const wrapper = shallowRenderSessionsListPage().find(SessionList);
		expect(wrapper.length).toBe(1);
	});
});
