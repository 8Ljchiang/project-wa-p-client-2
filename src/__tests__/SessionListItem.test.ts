import React from 'react';
import { shallow } from 'enzyme';
import SessionListItem, { ISessionListProps } from '../components/SessionListItem/SessionListItem';

describe('SessionListItem', () => {
	let props: ISessionListItemProps;
	let enzymeComponentWrapper: React.Component | undefined;
	const shallowRenderSessionListItem = (): any => {
		if (!enzymeComponentWrapper) {
			enzymeComponentWrapper = shallow(
				<SessionListItem {...props} />
			);
		}
		return enzymeComponentWrapper;
	};

	beforeEach(() => {
		props = {
			description: 'session description',
			title: 'session title',
		};
		enzymeComponentWrapper = undefined;
	});

	it('always renders a div', () => {
		const divs: any = shallowRenderSessionListItem().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});

	it('renders child h3 with title', () => {
		const h3Title = shallowRenderSessionListItem().find('h3');
		expect(h3Title.text()).toEqual(props.title);
	});

	it('renders child p with description', () => {
		const pDescription = shallowRenderSessionListItem().find('p');
		expect(pDescription.text()).toEqual(props.description);
	});
});
