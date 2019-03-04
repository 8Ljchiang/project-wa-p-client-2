import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../components/HomePage/HomePage';

describe('HomePage', () => {
	let enzymeComponentWrapper: React.Component | undefined;
	const shallowRenderHomePage = (): any => {
		if (!enzymeComponentWrapper) {
			enzymeComponentWrapper = shallow(
				<HomePage />
			);
		}
		return enzymeComponentWrapper;
	};

	beforeEach(() => {
		enzymeComponentWrapper = undefined;
	});

	it('always renders a div', () => {
		const divs: any = shallowRenderHomePage().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});

	it('renders child h3 with title', () => {
		const componentTitle = shallowRenderHomePage().find('h1');
		expect(componentTitle.text()).toEqual('Welcome to the Pairing App');
	});
});
